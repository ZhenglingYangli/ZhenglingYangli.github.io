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

Diverse SAT：给定 CNF 公式 $F$ 与正整数 $k$，找 $k$ 个满足赋值 $\mathbf{x}_1, \dots, \mathbf{x}_k$，使其在某种多样性度量（典型为两两 Hamming 距离之和）下最大化。

该问题与"先求 SAT 再返回任意 $k$ 个解"的差别不仅是评估意义上的，它对应若干在结构上自然要求"差异最大化的 $k$ 解"的下游应用：例如 bounded model checking 中对 mode 的覆盖性、网络中冗余 $s$–$t$ 路径设计等。把 Diverse SAT 表述为统一的 source problem，意味着这些下游应用可以共享同一个上游编码。两个具体归约的展开见 [DiverseSAT 作为 source problem]({{ '/blog/2026/diversity-as-a-source-problem/' | relative_url }})。

## 方法

设 $X = \{x_1, \dots, x_n\}$ 为输入变量。复制每个变量 $k$ 次得到 $x_{ij}$，引入两两差异指示 $Y_{ij,i'j'} = 1 \iff x_{ij} \neq x_{i'j'}$，多样性目标为：

$$
\max \ \sum_{i, (j, j') \in [k]^2_<} Y_{ij,ij'} \qquad\text{s.t.}\quad F(\mathbf{x}_j) = 1\ \forall j \in [k].
$$

同一程序既可视作加权 MaxSAT，也可视作整数线性规划。

提出两类阈值编码与三种搜索策略：

- **DW**（Direct Weight）：把 diversity 直接编码为复制变量上的加权目标；
- **IW**（Incremental Weight）：基于 totalizer 的增量编码，跨连续 diversity 阈值复用 learnt clauses；
- 搜索策略 **BL / BS / SU**（binary-lifting / binary-search / SAT-UNSAT），在 warm-start 与剪枝上各有取舍；
- model-aware refinement：用部分解作为 guard，加速后续 incremental 调用。

## 评测

289 个 benchmark instance，覆盖 7 个家族（`ais`、`flat100±`、`hardware`、`logistics`、`mc2024`、`morphed` 等）；对照基线包含 CPLEX (`QP/DW/IW`)、MaxSAT (`CASHWMaxSAT`、`MaxHS`、`WMaxCDCL`)、Pseudo-Boolean (`RoundingSAT`) 与若干 SAT baseline。

## 现状

正在准备 JAIR 版重写。早先 CP 投稿在 novelty framing 与 benchmark 范围两点上收到批评，期刊版的修订主要补：binary encoding + symmetry breaking 作为额外 baseline 家族；多 $k$ 实验（$k \in \{2, 5, 10\}$）下分别比较 MaxSAT 与 CPLEX；以及对应的复杂度结果。详见下方关联 publication。
