---
layout: about
title: about
permalink: /
lang: en
subtitle: >
  Undergraduate @ <a href='https://www.ynu.edu.cn/'>YNU</a> · Statistics
  <br/>
  Combinatorial Optimization · SAT / MaxSAT · Algorithmic Fairness
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

news: true
latest_posts: true
selected_papers: true
social: true
---

Hi, I'm **Zhengling Yangli** (杨李正凌), an undergraduate student in Statistics at [Yunnan University](https://www.ynu.edu.cn/) (2024 –).

I am drawn to problems where the **theoretical structure is clean** and the **empirical room to move is large** — typically discrete optimization problems with hard combinatorial cores (SAT, MaxSAT, dominating sets, fair allocation). My working style is _phenomenon-driven_: I start from a concrete anomaly in the data, work out a first-principles mechanism, and then design the next intervention.

#### What I am working on right now

- **Diverse model enumeration for (Max)SAT** — finding $k$ maximally different satisfying assignments via threshold encodings (`DW` / `IW`) and three search strategies (binary-lifting / binary-search / SAT-UNSAT). [→ project page]({{ '/projects/2_diversesat/' | relative_url }})
- **Non-linear integer programming via MaxSAT** — encoding polynomial integer programs (`QPLIB`, `SMT-LIB QF_NIA`) into weighted MaxSAT (`OH` / `UNA` / `BIN` / Order-Decomposition) and benchmarking against `Z3` / `CPLEX`. [→ project page]({{ '/projects/3_nlip/' | relative_url }})
- **Strengthening MWDS lower bounds with Ant-Q** — plugging an `ACO + Q-Learning` module into the LB-side of the ECAI-2025 Dual-Bound Search baselines (`Dual-Deep` / `Dual-Fast`), with measurable gap reductions (−23.7% to −31.2% on Deep). [→ project page]({{ '/projects/1_mwds/' | relative_url }})
- **Fair multi-resource allocation under partial access** — extending `DRF-MT` (IJCAI 2021) with the `UNB` mechanism, pursuing strictly higher social welfare while preserving share-incentive and group-level envy-freeness. [→ project page]({{ '/projects/4_fair-ratio/' | relative_url }})

I keep an honest log of [research notes]({{ '/notes/' | relative_url }}) — including the ideas that did not pan out — because the parts that fail are usually the ones I learn from.

The most reliable way to reach me is via email. I am open to collaboration and always happy to discuss ideas.
