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

这个编码方向的动机是：SMT 求解器（如 Z3）在 `QF_NIA` 上的策略依赖启发式非线性算术推理，对某类 sparse quadratic 结构缺乏系统性的界收紧机制；而 MaxSAT 求解器通过 clause-level conflict learning 与 PB relaxation 提供了一条不同的求解路径。问题不是"MaxSAT 一定更好"，而是"在哪类结构上 MaxSAT 能系统性地优于 Z3 / CPLEX，原因是什么"。

## 方法

把 NLIP 编码为**加权 MaxSAT**（WCNF），借助现代 MaxSAT 求解器。我们系统研究四种整数变量的布尔编码方案：

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

## 合作与进展

本项目是与法国皮卡第大学（Université de Picardie Jules Verne）[Saïd Cherif](https://home.mis.u-picardie.fr/~cherif/) 教授的合作研究。经过约一年的基准构建与编码设计，论文草稿已提交 **SAT 2026**（CCF-B）。

## 已知的设计细节

最初的 BIN encoding 实现把整数变量按 unsigned 形式处理，但 QPLIB 中存在 $\ell < 0$ 的变量；partial-product 在 two's complement 下未做 Booth recoding，导致含负变量的 quadratic 项目标值系统性偏大。修正方案与诊断过程见 [BIN encoding 中负数变量的处理]({{ '/blog/2026/nlip-encoding-first-mistake/' | relative_url }})。
