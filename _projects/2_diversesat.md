---
layout: page
title: DiverseSAT
description: 通过阈值编码寻找 $k$ 个差异最大化的 SAT 满足解
img: assets/img/2.jpg
importance: 2
category: research
related_publications: true
---

## 问题

**Diverse SAT** —— 给定 CNF 公式 $F$ 与正整数 $k$，找 $k$ 个满足解 $\mathbf{x}_1, \dots, \mathbf{x}_k$，使其在某种多样性指标（典型为两两 Hamming 距离）下最大化。

Diverse SAT 看起来像是「一个奇怪的 toy」，但它实际上是一个 **source problem** —— 几个看似无关的应用一旦正确陈述都归约到它。
（关于这一点的更长版本，见 [DiverseSAT 是 source problem 不是 toy]({{ '/blog/2026/diversity-as-a-source-problem/' | relative_url }})。）

## 应用

- **Bounded Model Checking**：当一个公式同时被多个 mode 满足时，diversity-optimal 的 $k$ 个解能直接覆盖所有 mode；普通的 $k$ 个 SAT 解则容易堆在一个 mode 附近。
- **冗余路径设计**：电信 / 物流网络要 $k$ 条**冗余的** $s$-$t$ 路径，diversity-optimal 解最小化共享边，对单点失效真正鲁棒。

## 贡献

1. **两种编码**：
   - **DW**（Direct Weight）：把 diversity 直接编码为复制变量上的加权目标。
   - **IW**（Incremental Weight）：基于 totalizer 的增量编码，跨连续 diversity 阈值复用 learnt clauses。
2. **三种搜索策略**：Binary-Lifting (BL)、Binary-Search (BS)、SAT-UNSAT (SU)，在 warm-start 与剪枝上各有取舍。
3. **Model-aware refinement**：用部分解作为 guard，加速后续 incremental 调用。
4. **完整评测**：289 个 benchmark instance，覆盖 7 个家族（`ais`、`flat100±`、`hardware`、`logistics`、`mc2024`、`morphed` 等），与 CPLEX (`QP/DW/IW`)、MaxSAT (`CASHWMaxSAT`、`MaxHS`、`WMaxCDCL`)、Pseudo-Boolean (`RoundingSAT`) 及 SAT 基线对比。

## 方法

设 $X = \{x_1, \dots, x_n\}$ 是输入变量。复制每个变量 $k$ 次得到 $x_{ij}$，引入两两差异指示 $Y_{ij,i'j'} = 1 \iff x_{ij} \neq x_{i'j'}$，多样性目标为：

$$
\max \ \sum_{i, (j, j') \in [k]^2_<} Y_{ij,ij'}\qquad\text{s.t.}\quad F(\mathbf{x}_j) = 1\ \forall j\in[k]
$$

同一个程序既可看作加权 MaxSAT（用 `DW`/`IW`），也可看作整数线性规划（送进 CPLEX）。

## 现状

正在准备 JAIR 版的重写（早先 CP 投稿在 novelty framing 与 benchmark 范围两点上收到批评）。期刊版会增补：

- Binary encoding + symmetry breaking 作为额外 baseline 家族；
- 多 $k$ 实验（$k \in \{2, 5, 10\}$），分别比较 MaxSAT 与 CPLEX；
- 复杂度证明的 sanity check。

详见下方关联 publication。
