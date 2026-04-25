---
layout: page
title: Ant-Q for MWDS
description: 用一个轻量的 Ant-Q（ACO + Q-Learning）插件，收紧 Dual-Bound Search 在 MWDS 上的下界
img: assets/img/1.jpg
importance: 1
category: research
related_publications: true
---

## 背景

**最小加权支配集（MWDS）** 问题：在带正整数权重的无向图 $G = (V, E, w)$ 中，找一个权重和最小的支配集 $D \subseteq V$，使得 $V \setminus D$ 的每个顶点都至少有一个邻居落在 $D$ 内。MWDS 是 NP-hard，常见应用包括无线骨干网构建、传感器布点等。

**ECAI 2025 基线** `Dual-Deep` 与 `Dual-Fast` 共享相同的 **Dual-Bound Search (DBS)** 外循环 + **IT-LBS** 下界迭代收紧框架，仅 UB 子例程不同：

|                          | `Dual-Deep`                                | `Dual-Fast`                                  |
| ------------------------ | ------------------------------------------ | -------------------------------------------- |
| UB 子例程                | DeepOpt（tabu + BMS + interfere/refix）    | FastMWDS（tabu + BMS + CC + reduction）       |
| 单轮 UB 用时             | 数十至数百秒                               | 0.1 – 5 秒                                    |
| DBS 轮数                 | 几十                                       | 几百                                          |

## 我们做的事

**保留 UB 端不动**，只在 LB 端的 pair 构造 `ibmwds_init_bounds` 中插入一个 $K$-蚂蚁的 Ant-Q 模块：

```c
for each ant k = 1..K:
    HEUR' = HEUR × AQ[v]^β           // β = 3.0
    aq_build_ordering()              // q0 = 0.9 greedy / 1-q0 roulette
    aq_count_violated()
    score = bound · (1 − λ · n_viol / m)
update AQ with the best ant (蒸发 ρ = 0.05 + tight-pair bonus × 3)
```

两个具体变体：

- **Deep-v6** —— β = 3.0, ρ = 0.05, q₀ = 0.9, K = 5, λ = 0.3, evaporation 限定在 active 顶点上, tight-pair bonus ×3。
- **Fast-v19** —— β = 3.5, 全局 evaporation, 不加 tight bonus, 配合一个 3 级 adaptive gate, 在简单实例上**关掉** Ant-Q（详见 [/blog/2026/antq-v1-uniform-rl-not-free-lunch/]({{ '/blog/2026/antq-v1-uniform-rl-not-free-lunch/' | relative_url }})）。

## 结果

在两套测试集 T1 与 T2（1045 行与 1052 行配对样本）上：

| 指标                       | Deep-v6 vs Dual-Deep            | Fast-v19 vs Dual-Fast          |
| -------------------------- | ------------------------------- | ------------------------------ |
| Row-averaged gap ↓         | **−23.68% / −31.23%**           | **−6.92% / −9.89%**            |
| Per-instance win-rate（gap）| **99.34% / 99.37%**             | 66.86% / 63.85%                |
| LB-paired loss 行数        | 0 / 2                           | 329 / 280                      |
| LB-paired win-rate         | —                               | 61.39% / 43.47%                |

## 关键观察 & 下一步

Ant-Q 在数值上**严格收紧了下界**，但 `#opt` 与 `#min`（UB 质量）没有相应改善 —— 因为 LB 只能通过 **硬证明规则**（`v_State = Fixed / Deleted`）传到 UB；数值上的 LB 提升如果不触发额外硬规则，就不会反映到 UB。
更详细的现象分析放在 [LB → UB 耦合]({{ '/blog/2026/lb-ub-coupling-mwds/' | relative_url }}) 这篇笔记里。

下一步是 **Tight-pair → Forced-Fix（路线 I）**：当 ants 产出的 pair 落到 `bound ratio ≈ 1` 区域时，把下一步 LB 收紧的方向偏向能触发 reduction 的 state transition。

## 代码与汇报

- 内部报告：`2026-04-24` —— gap / `#opt` 不对称分析、LB → UB 耦合
- 版本演进：`deep-v0` → `v3.1-stable` → `v4.x-tuning` → `v5.0-vertex-aq` → `deep-v6`；`fast-v0` → `fast-v19`

实现基于 `Dual-Deep` 与 `Dual-Fast` 的 ECAI 2025 开源代码。
