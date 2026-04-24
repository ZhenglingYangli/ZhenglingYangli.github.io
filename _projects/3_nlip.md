---
layout: page
title: NLIP via MaxSAT
description: Encoding Non-linear Integer Programs into Weighted MaxSAT
img: assets/img/3.jpg
importance: 3
category: research
related_publications: true
---

## Problem

**Non-linear Integer Programming (NLIP).** Given polynomial objective and constraints over bounded integer variables, find an optimal integer assignment. The problem generalizes QP, QIP, and polynomial arithmetic constraints (SMT-LIB `QF_NIA`).

## Approach

We encode NLIP into **weighted MaxSAT** (WCNF) and leverage modern MaxSAT solvers. Four encoding families are studied:

| Encoding | Domain representation                     | Strength                                |
| -------- | ----------------------------------------- | --------------------------------------- |
| OH       | One-hot — one Boolean per integer value   | Linear in domain, strong propagation    |
| UNA      | Unary / thermometer                       | Clean ordering, but fails at large domain |
| BIN      | Binary — $\log_2 D$ Booleans per variable | Compact but weaker propagation          |
| DECOMP   | Binary + order decomposition              | Compact + improved propagation          |

Solvers wrapped: RC2 (PySAT), MaxHS, WMaxCDCL, OpenWBO, CaDiCaL (brute enumeration baseline). Baselines: **Z3** (SMT on `QF_NIA`) and **CPLEX** (for degree-$\le$2 instances only).

## Benchmarks

| Source       | Size   | Kind                                   |
| ------------ | ------ | -------------------------------------- |
| QPLIB        | 137    | quadratic / non-linear integer programs |
| SMT-LIB QF_NIA | 2591 | non-linear integer arithmetic          |
| Diverse-SAT  | 287    | converted SAT instances                |

A five-library filtering pipeline (`NLIP_filters`) over QPLIB / NL / SMT / CSPlib / XCSP extracts NLIP-shaped problems; parsers (`qplib_parser`, `smt2_parser`) ingest them; `main.py` performs preprocessing + encoding + solver call, producing a standardized `>>>` summary line per instance. A SLURM-friendly `goSolver.py` drives batch experiments with a 7200 s timeout and 7500 s external SIGKILL bound.

## Findings so far

- OH is dominant on small-domain instances; BIN + DECOMP becomes competitive when domains grow.
- UNA has a documented **scaling failure**: propagation collapses for domain size $> 64$.
- MaxHS + OH beats CPLEX on a subset of QPLIB instances where the quadratic structure is sparse.

Writeup is in progress.
