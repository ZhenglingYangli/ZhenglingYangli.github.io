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

Zhengling Yangli (杨李正凌) is an undergraduate student of Statistics at [Yunnan University](https://www.ynu.edu.cn/) (2024–).

His current research interests are in combinatorial optimization and Boolean satisfiability solving, specifically: diverse-model enumeration for SAT/MaxSAT, MaxSAT encodings of non-linear integer programs, lower-bound search for the minimum weight dominating set, and extensions of fair multi-resource allocation under partial accessibility. Methodologically he prefers to start from a concrete empirical anomaly, work out a first-principles mechanism, and design the next experimental intervention from there, rather than rely on broad hyperparameter sweeps.

#### Current research

- **Diverse model enumeration for (Max)SAT.** Two threshold encodings (DW, IW) and three search strategies (binary-lifting, binary-search, SAT-UNSAT) for finding $k$ maximally diverse satisfying assignments. Evaluated on 7 benchmark families against MaxSAT, Pseudo-Boolean and CPLEX baselines. [→ project]({{ '/projects/2_diversesat/' | relative_url }})
- **Non-linear integer programming via MaxSAT.** Four encoding families (one-hot, unary, binary, binary with order decomposition) on QPLIB and SMT-LIB QF\_NIA, with a focus on when MaxSAT-based encodings strictly dominate Z3 / CPLEX baselines. [→ project]({{ '/projects/3_nlip/' | relative_url }})
- **Strengthening MWDS lower bounds with Ant-Q.** Plug-in to the LB-side of the ECAI-2025 Dual-Bound Search baselines, with measurable gap reductions of 23.7%–31.2% on Dual-Deep. The structural decoupling between LB tightening and `#opt` is analyzed in [a separate note]({{ '/blog/2026/lb-ub-coupling-mwds/' | relative_url }}). [→ project]({{ '/projects/1_mwds/' | relative_url }})
- **Fair multi-resource allocation.** Extending DRF-MT (Yin et al., IJCAI 2021) under the meta-type model. The over-tightening of a linear EF sufficient condition under partial access is discussed in [this note]({{ '/blog/2026/unb-mt-why-lemma-2-is-too-loose/' | relative_url }}). [→ project]({{ '/projects/4_fair-ratio/' | relative_url }})

Research notes and post-mortems on misjudgments are collected at [/notes/]({{ '/notes/' | relative_url }}).

Email is the most reliable way to reach me.
