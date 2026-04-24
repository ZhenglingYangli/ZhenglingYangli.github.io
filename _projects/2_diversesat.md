---
layout: page
title: DiverseSAT
description: Finding $k$ Maximally Diverse Satisfying Assignments via Threshold Encodings
img: assets/img/2.jpg
importance: 2
category: research
related_publications: true
---

## Problem

**Diverse SAT.** Given a CNF formula $F$ and a positive integer $k$, find $k$ satisfying assignments $\mathbf{x}_1, \dots, \mathbf{x}_k$ that maximize a diversity metric (e.g., pairwise Hamming distance) over $F$.

Diverse SAT is a natural "source problem" that underlies several downstream applications:

- **Bounded model checking.** For a formula satisfied by both all-zero and all-one assignments, $k{=}10$ diversity-optimal solutions would take 5 all-zeros and 5 all-ones, rather than 10 near-duplicate assignments — a much more informative witness set.
- **Robust network path design.** Given a graph and two terminals, multiple $s$-$t$ paths encoded as SAT yield a baseline, but diversity maximization directly avoids shared failure points.

## Contributions

1. **Two encodings.**
   - **DW** (Direct Weight): encode diversity as a weighted objective directly on the duplicated variables.
   - **IW** (Incremental Weight): incremental totalizer-based encoding that reuses learnt clauses across successive diversity thresholds.
2. **Three search strategies.** Binary-Lifting (BL), Binary-Search (BS), and SAT-UNSAT (SU), each with trade-offs on warm-starts and pruning.
3. **Model-aware refinement.** Uses partial solutions as guards to accelerate successive incremental calls.
4. **Extensive evaluation.** 289 benchmark instances across 7 families (`ais`, `flat100±`, `hardware`, `logistics`, `mc2024`, `morphed`). We compare against CPLEX (`QP/DW/IW`), MaxSAT (`CASHWMaxSAT`, `MaxHS`, `WMaxCDCL`), Pseudo-Boolean (`RoundingSAT`) and SAT baselines.

## Methods overview

Let $X = \{x_1, \dots, x_n\}$ be the input variables. Duplicate each variable $k$ times to obtain $x_{ij}$ for $j \in [k]$. Introduce pairwise difference indicators $Y_{ij,i'j'}$ with $Y = 1 \iff x_{ij} \neq x_{i'j'}$. The diversity objective is

$$
\max \ \sum_{i, (j, j') \in [k]^2_<} Y_{ij,ij'}\qquad\text{s.t.}\quad F(\mathbf{x}_j) = 1\ \forall j\in[k]
$$

The same program can be viewed either as a weighted MaxSAT instance (via `DW`/`IW`) or as an integer linear program (via CPLEX).

## Status

Currently finalizing a JAIR-version rewrite (the original CP submission received feedback on novelty framing and benchmark scope). The journal version adds:

- Binary encoding + symmetry breaking as a baseline family.
- Multi-$k$ experiments ($k \in \{2, 5, 10\}$) and solver comparison between MaxSAT and CPLEX.
- Complexity analysis and proof sanity-check.

See the related publication below.
