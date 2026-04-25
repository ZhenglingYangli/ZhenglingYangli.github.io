---
layout: page
title: NLIP via MaxSAT
description: 把非线性整数规划编码到加权 MaxSAT
img: assets/img/3.jpg
importance: 3
category: research
related_publications: true
---

## 问题

**非线性整数规划（NLIP）** —— 在 bounded integer 变量上，多项式目标与多项式约束下找最优整数解。这个问题统一了 QP、QIP 以及 SMT-LIB `QF_NIA` 上的 polynomial arithmetic 约束。

## 思路

把 NLIP 编码为**加权 MaxSAT**（WCNF），借助现代 MaxSAT 求解器。我们研究四种编码家族：

| 编码     | 域表示                                  | 强项                                   |
| -------- | --------------------------------------- | -------------------------------------- |
| OH       | One-hot —— 每个整数值一个布尔            | 域线性, propagation 强                  |
| UNA      | Unary / thermometer                     | 顺序结构干净；大域下崩溃                 |
| BIN      | Binary —— 每变量 $\log_2 D$ 个布尔        | 紧凑但 propagation 弱                    |
| DECOMP   | Binary + Order Decomposition            | 紧凑且 propagation 改善                  |

封装的求解器：RC2 (PySAT)、MaxHS、WMaxCDCL、OpenWBO、CaDiCaL（暴力枚举 baseline）。
对照基线：**Z3**（SMT 直接求 `QF_NIA`）以及 **CPLEX**（仅在 degree ≤ 2 实例上）。

## Benchmark

| 来源              | 规模 | 类型                                |
| ----------------- | ---- | ----------------------------------- |
| QPLIB             | 137  | quadratic / 非线性整数规划            |
| SMT-LIB QF_NIA    | 2591 | 非线性整数算术                       |
| Diverse-SAT 转换  | 287  | 转化的 SAT 实例                      |

一个五库过滤管线（`NLIP_filters`）从 QPLIB / NL / SMT / CSPlib / XCSP 中抽取符合 NLIP 形态的问题；解析器 `qplib_parser` 与 `smt2_parser` 负责导入；`main.py` 串起 preprocessing + encoding + solver call，每个实例输出一行标准化的 `>>>` 摘要。`goSolver.py` 配合 SLURM 调度批量实验，统一 7200s timeout，外置 7500s SIGKILL bound。

## 当前发现

- **OH** 在小域问题上占优；**BIN + DECOMP** 在大域问题上反超。
- **UNA** 有可复现的 scaling 失败：propagation 在域大小 $> 64$ 时崩溃。
- 在 QPLIB 上，sparse quadratic 子集里 **MaxHS + OH 在若干实例上击败了 CPLEX**。

## 一些已知问题

最初的 BIN encoding 实现把整数变量按 unsigned 形式处理，但 QPLIB 中存在 $\ell < 0$ 的变量；partial-product 在 two's complement 下未做 Booth recoding，导致含负变量的 quadratic 项目标值系统性偏大。修正方案与诊断过程见 [BIN encoding 中负数变量的处理]({{ '/blog/2026/nlip-encoding-first-mistake/' | relative_url }})。

## 现状

写作中。
