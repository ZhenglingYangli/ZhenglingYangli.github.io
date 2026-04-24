---
layout: post
title: "Diversity as a source problem: two applications that need $k$ diverse SAT models"
date: 2026-03-05 14:00:00
description: "Why finding $k$ maximally different satisfying assignments is not a toy. Two concrete applications from bounded model checking and robust network design."
tags: research sat diversity
categories: research
---

A common reviewer critique for DiverseSAT used to be: *is this problem actually important, or just a curiosity?* I now think the cleanest answer is: **DiverseSAT is a source problem**, in the sense that several real problems reduce to it once stated correctly.

### Application 1 — Bounded model checking with informative witness sets

Consider a formula $F$ that is satisfied by both the all-zeros assignment and the all-ones assignment. If we just ask for $k = 10$ arbitrary satisfying assignments, a modern solver is likely to return 10 near-duplicates of one mode. That is uninformative for debugging.

If instead we ask for $k = 10$ **diversity-optimal** satisfying assignments, the optimal answer is 5 all-zeros and 5 all-ones — exactly the two modes a human would want to see. Diversity is not a nicety; it is what turns an enumerator into a useful witness generator.

### Application 2 — Robust $s$-$t$ path design

Given a graph $G$ and two terminals $s, t$, encoding "does an $s$-$t$ path exist?" as SAT is routine. But if we want $k = 10$ **redundant** $s$-$t$ paths (for a telecommunications or logistics network), simply finding 10 SAT solutions gives us 10 paths that often share critical edges. A single failure still breaks the network.

Diversity-optimal $k$ solutions minimize shared edges, giving true redundancy against single-point failures.

### Takeaway

"Just find $k$ SAT solutions" is a local question; "find $k$ maximally different SAT solutions" is a *source problem* that captures what the application really needs. That is the motivation I'll emphasize in the JAIR rewrite.
