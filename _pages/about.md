---
layout: about
title: about
permalink: /
subtitle: >
  Undergraduate Student @ <a href='https://www.ynu.edu.cn/'>YNU</a>.
  <br/>
  Statistics · Combinatorial Optimization · SAT & MaxSAT.
  <br/>
  <a class="btn btn-sm btn-outline-primary mt-2" href="{{ '/cv/' | relative_url }}">
    <i class="fa-solid fa-file-lines"></i> Full CV
  </a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <p>School of Mathematics and Statistics</p>
    <p>Yunnan University</p>
    <p>Kunming, Yunnan, China</p>

news: true  # includes a list of news items
latest_posts: true
selected_papers: true
social: true
---

Hi, I am **Zhengling Yangli** (杨李正凌).

I am currently an undergraduate student at the [School of Mathematics and Statistics, Yunnan University](https://www.ynu.edu.cn/), majoring in Statistics (2024–present).

My research lies at the intersection of **combinatorial optimization, Boolean satisfiability (SAT/MaxSAT), and algorithmic fairness**. I am interested in designing algorithms that come with both **principled theoretical guarantees** and **competitive empirical performance**. Currently I work on:

- **Diverse model enumeration for SAT / MaxSAT** — finding $k$ maximally different satisfying assignments, via dedicated encodings (`DW`, `IW`) and search strategies (binary lifting / binary search / SAT-UNSAT).
- **Non-linear integer programming via MaxSAT** — encoding polynomial integer programs (`QPLIB`, `SMT-LIB QF_NIA`) into weighted MaxSAT (`OH` / `UNA` / `BIN` / Order-Decomposition) and pushing solver performance against strong baselines (`Z3`, `CPLEX`).
- **Minimum Weight Dominating Set (MWDS)** — strengthening state-of-the-art Dual-Bound Search (`Dual-Deep` / `Dual-Fast` from ECAI 2025) with an Ant-Q (`ACO + Q-Learning`) plug-in that tightens lower bounds during iterative LB search.
- **Fair multi-resource allocation** — extending `DRF-MT` (IJCAI 2021) with the `UNB` mechanism to meta-type settings, pursuing strictly higher social welfare while preserving share-incentive and group-level envy-freeness.

I believe good research starts from a **clean problem statement** and ends with **reproducible experiments**. My style is _phenomenon-driven_: start from an empirical anomaly (why does ACO improve LB but not `#opt`?), form a first-principles mechanism (LB → UB coupling must go through hard proof rules), and then design the next intervention.

# Research Interests

- SAT / MaxSAT solving, constraint solving, combinatorial optimization
- Diversity and enumeration problems
- Algorithmic fairness & mechanism design for resource allocation
- Empirical algorithmics: experiment design, statistical analysis, benchmarking

The best way to reach me is via email. I am open to collaboration and always happy to discuss ideas.
