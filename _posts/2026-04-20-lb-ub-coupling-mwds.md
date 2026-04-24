---
layout: post
title: "Why tightening the lower bound did not shrink #opt on MWDS"
date: 2026-04-20 21:00:00
description: "A phenomenon-driven analysis of the LB → UB coupling bottleneck in Dual-Bound Search, using the Ant-Q plug-in as the lens."
tags: research mwds
categories: research
---

**Short version.** On the ECAI-2025 baselines, plugging an Ant-Q module into the LB-side of `ibmwds_init_bounds` gives a **large drop in the relative gap** (−23.7% to −31.2% on Deep, −6.9% to −9.9% on Fast) but does **not** consistently improve `#opt` and `#min`. This is not a bug; it reflects a structural property of the Dual-Bound Search framework.

## Three metrics, three sensitivities to LB

- `avg gap = (UB − LB)/LB` is a **ratio**. Raising LB shrinks the numerator and enlarges the denominator simultaneously, so gap *always* benefits.
- `#opt` requires `LB ≡ UB` exactly. Raising LB alone does not close the gap unless UB cooperates.
- `#min / #avg` (UB quality) are **functions of UB only**. They ignore LB entirely.

So the story is not "Ant-Q does not help"; the story is "Ant-Q moves LB, and the three metrics respond to LB very differently."

## The LB → UB coupling channel

Under IDCLB+DBS, LB can only influence UB through **hard proof rules** (`v_State = Fixed / Deleted`). A tighter LB value that does not *fire* any additional Reduction/Deletion rule does not propagate to UB.

Our current Ant-Q plug-in only shifts LB numerically via better pair construction. It does not increase the rate at which the `Fixed`/`Deleted` triggers fire. Hence the asymmetry.

## What comes next

The cheapest intervention is a **Tight-pair → Forced-Fix** path (route I): when a pair produced by the ants hits the `bound ratio ≈ 1` regime, bias the next LB-tightening step toward the state transition that actually triggers reduction. The rest of the report discusses two more ambitious routes (ACO on the UB side; additional DBS rounds).

*Internal report: 2026-04-24. More numbers in the [MWDS project page](/projects/1_mwds/).*
