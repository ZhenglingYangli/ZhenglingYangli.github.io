---
layout: page
title: UNB-MT — Beyond DRF-MT
description: Group-Level Differentiation for Fair and Efficient Multi-Resource Allocation under Meta-Type Accessibility
img: assets/img/project_fairmt.png
importance: 4
category: research
related_publications: true
---

## Problem

Consider a cloud platform allocating $m$ divisible resources to $n$ tenants. Resources come in **meta-types** $\Omega_1, \dots, \Omega_L$ (e.g., CPU, memory, GPU); each tenant has **accessibility** $g_l^i \subseteq \Omega_l$ (not all resources are usable by all tenants — compliance, topology, hardware). Utilities are **Leontief**:

$$
u_i(x_i) = \min_{l:\, d_{il} > 0} \frac{\sum_{r \in g_l^i} x_{ir}}{d_{il}}
$$

DRF-MT (Yin et al., IJCAI 2021) is the current state of the art under this model, simultaneously satisfying **Share-Incentive (SI)**, **Envy-Freeness (EF)**, **Pareto-Optimality (PO)** and **Strategy-Proofness (SP)**. Its algorithm forces all active tenants in each round to share the same dominant share $y$ and only differentiates via iterative elimination.

## Core observation

DRF-MT **already achieves implicit differentiation**: in a 4-meta-type instance, we observed the maximum per-tenant $y$ to be **23×** the minimum $y$, *with zero envy*. The elimination process hides this differentiation behind the surface-level "uniform $y$" rule.

**Research question.** Can we do better — actively differentiate $y$ across tenants based on dominant meta-type structure, without breaking the core fairness axioms?

## UNB-MT

We adapt the UNB mechanism of Bei et al. (2022, 2-resource setting) to the meta-type model:

1. Partition tenants by dominant meta-type into a **majority group** $G_{\text{maj}}$ and **minority group** $G_{\text{min}}$.
2. Compress the majority to $y_{\text{base}} = \alpha y_{\text{SI}} + (1-\alpha) y_{\text{DRF}}$ for a tunable $\alpha \in [0, 1]$.
3. Run DRF-MT for the minority on the residual resources.

**Guarantees we can prove.**

- SI for all tenants: every $y_i \ge y_{\text{base}} \ge y_{\text{SI}}$.
- EF inside the minority group (standard DRF-MT).
- EF inside the majority group (uniform $y$).
- Minority → majority EF: minority has strictly more $y$.

**What we cannot (yet) guarantee.** Majority → minority EF, global PO, and SP.

## An honest failure

We tried an LP-based `PairEF-auto` formulation: add linear EF constraints per pair $(i,j)$, maximize $\sum w_i y_i$. The linear EF constraints are derived from Lemma 2 (a resource-disjoint upper bound on cross-tenant utility).

**Result.** The LP's feasible region is *strictly smaller* than the real fair region. On 4-meta-type instances, DRF-MT's own allocation (the 23× $y$-ratio with zero envy) is **infeasible** under our linear EF constraints. The sufficient condition is too pessimistic under partial access. `PairEF-auto` often produces worse allocations than DRF-MT; it only looks "no worse" because the code falls back to DRF-MT as a safety net.

**Lesson.** To strictly keep global EF and improve on DRF-MT, a **cutting-plane** approach that inspects actual envy matrices, rather than a linear sufficient condition, is required.

## Experiments

On meta-type benchmarks with varying accessibility sparsity, UNB-MT achieves **+2%–6% social welfare** over DRF-MT with bounded empirical envy from majority to minority.
