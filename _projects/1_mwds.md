---
layout: page
title: Ant-Q for MWDS
description: A Lightweight Ant-Colony + Q-Learning Plug-in that Tightens Lower Bounds in Dual-Bound Search
img: assets/img/1.jpg
importance: 1
category: research
related_publications: true
---

## Background

The **Minimum Weight Dominating Set** (MWDS) problem asks for a minimum-weight vertex subset $D$ such that every vertex outside $D$ has at least one neighbor inside $D$. MWDS is NP-hard and underpins applications such as wireless backbone construction and sensor placement.

The **ECAI-2025 baselines** `Dual-Deep` and `Dual-Fast` share a **Dual-Bound Search** (DBS) outer loop combined with an **IT-LBS** lower-bound tightening scheme, and differ only in the UB subroutine:

|                               | `Dual-Deep`                 | `Dual-Fast`                 |
| ----------------------------- | --------------------------- | --------------------------- |
| UB search                     | DeepOpt (tabu + BMS + interfere/refix) | FastMWDS (tabu + BMS + CC + reduction) |
| UB per round                  | tens to hundreds of seconds | 0.1 – 5 seconds             |
| DBS rounds                    | tens                        | hundreds                    |

## What we do

We keep the UB side untouched and **plug a $K$-ant Ant-Q module into the LB-side** pair-construction of `ibmwds_init_bounds`:

```c
for each ant k = 1..K:
    HEUR' = HEUR × AQ[v]^β           // β = 3.0
    aq_build_ordering()               // q0 = 0.9 greedy / 1-q0 roulette
    aq_count_violated()
    score = bound · (1 − λ · n_viol / m)
update AQ with the best ant (evaporation ρ = 0.05 + tight-pair bonus × 3)
```

Two concrete variants:

- **Deep-v6** — β = 3.0, ρ = 0.05, q₀ = 0.9, K = 5, λ = 0.3, evaporation scoped to active vertices, tight-pair bonus ×3.
- **Fast-v19** — β = 3.5, global evaporation, no tight bonus, plus a 3-tier adaptive gate that disables Ant-Q on easy instances.

## Results

On two test suites T1 and T2 (1045 and 1052 paired rows):

| Metric                                   | Deep-v6 vs Dual-Deep            | Fast-v19 vs Dual-Fast          |
| ---------------------------------------- | ------------------------------- | ------------------------------ |
| Row-averaged gap ↓                       | **−23.68% / −31.23%**           | **−6.92% / −9.89%**            |
| Per-instance win-rate (gap)              | **99.34% / 99.37%**             | 66.86% / 63.85%                |
| LB-paired loss rows                      | 0 / 2                           | 329 / 280                      |
| LB-paired win-rate                       | —                               | 61.39% / 43.47%                |

**Key insight.** Ant-Q strictly tightens the lower bound, but `#opt` and `#min` (UB quality) do not always improve correspondingly. This is because LB only affects UB through **hard reduction/deletion rules** (`v_State = Fixed / Deleted`); merely raising the LB numerically does not fire additional hard proofs, so UB receives no new signal. The next milestone is a **Tight-pair → Forced-Fix** path (route I) that bridges the LB–UB channel.

## Code & reports

- Internal report: `2026-04-24` — gap / `#opt` asymmetry analysis, LB → UB coupling
- Versions: `deep-v0` → `v3.1-stable` → `v4.x-tuning` → `v5.0-vertex-aq` → `deep-v6`;  `fast-v0` → `fast-v19`

Built on top of the `Dual-Deep` and `Dual-Fast` codebases (ECAI 2025).
