---
layout: post
title: "Why a linear EF sufficient condition is too loose under partial access"
date: 2026-02-20 10:30:00
description: "An honest post-mortem of PairEF-auto. DRF-MT's own allocation — the 23× y-ratio with zero envy — violates our LP-based EF constraints."
tags: research fairness
categories: research
---

Working on the UNB-MT extension of DRF-MT (IJCAI 2021), we spent a month chasing a tempting idea: give every tenant an independent dominant share $y_i$, add linear EF constraints per pair $(i,j)$, and maximize social welfare via a single LP. We called this **PairEF-auto**.

The key step is to upper-bound the cross-tenant utility $u_i(x_j)$ with something linear in $y_j$. Lemma 2 does this — it bounds $u_i(x_j)$ by *all* resources held by $j$, not just the resources $i$ can access. That's exactly where the slack enters.

### The smoking gun

In our 4-meta-type benchmark, we observed that **DRF-MT's own allocation** produced a $y$-ratio of $\approx 23\times$ between the luckiest and unluckiest tenants, yet envy was **zero** (verified cell-by-cell on the actual $u_i(x_j)$ matrix).

That means: there is a known fair allocation in which some tenants have 23× more $y$ than others. The PairEF-auto LP, on the other hand, **rejects** this allocation because it violates our linear EF condition derived from Lemma 2.

### What this means

Our linear EF sufficient condition's feasible region is **strictly smaller** than the actual fair region. On many instances, the LP finds a solution that is **worse** than DRF-MT — and the only reason our experiment tables didn't show this was that the code silently falls back to DRF-MT as a safety net.

PairEF-auto, as stated, is a dead end. The principled fix is a cutting-plane loop: don't constrain EF a priori; instead solve without EF, compute the actual envy matrix post-hoc, and add *exact* EF cuts only for violating pairs. That properly handles resource-access interaction and Leontief nonlinearity — at the cost of losing closed-form LP niceness.

### Lesson

When a known-fair allocation from a published algorithm violates your sufficient condition, the sufficient condition is the thing that's wrong — not the published algorithm. Be willing to kill your formulation.
