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

Her current research interests are in combinatorial optimization and Boolean satisfiability solving, specifically: diverse-model enumeration for SAT/MaxSAT, MaxSAT encodings of non-linear integer programs, lower-bound search for the minimum weight dominating set, and extensions of fair multi-resource allocation under partial accessibility. Methodologically she prefers to start from a concrete empirical anomaly, work out a first-principles mechanism, and design the next experimental intervention from there, rather than rely on broad hyperparameter sweeps.

#### Research Map

<div class="research-map">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <div class="research-card">
        <p class="research-card-kicker">SAT / MaxSAT</p>
        <h5>Diverse solutions and integer encodings</h5>
        <p><strong>Question.</strong> How can we move from finding one feasible assignment to finding a set of structurally different assignments?</p>
        <p><strong>Result.</strong> DiverseSAT uses DW / IW threshold encodings and is evaluated on 289 instances across 7 benchmark families; the NLIP project further encodes QPLIB and SMT-LIB QF\_NIA instances into weighted MaxSAT.</p>
        <p class="research-card-links">
          <a href="{{ '/projects/2_diversesat/' | relative_url }}">DiverseSAT</a>
          <span>·</span>
          <a href="{{ '/projects/3_nlip/' | relative_url }}">NLIP via MaxSAT</a>
        </p>
      </div>
    </div>
    <div class="col">
      <div class="research-card">
        <p class="research-card-kicker">MWDS</p>
        <h5>Lower-bound search in Dual-Bound Search</h5>
        <p><strong>Question.</strong> After the LB side becomes numerically tighter, how can the improvement actually propagate to the UB side through hard proof rules?</p>
        <p><strong>Result.</strong> Ant-Q plug-ins reduce the row-averaged gap of `Deep-v6` by 23.7%–31.2% and reveal a structural decoupling between LB tightening and `#opt`.</p>
        <p class="research-card-links">
          <a href="{{ '/projects/1_mwds/' | relative_url }}">AntQO for MWDS</a>
          <span>·</span>
          <a href="{{ '/blog/2026/lb-ub-coupling-mwds/' | relative_url }}">note</a>
        </p>
      </div>
    </div>
    <div class="col">
      <div class="research-card">
        <p class="research-card-kicker">Fair Allocation</p>
        <h5>Fairness under partial accessibility</h5>
        <p><strong>Question.</strong> Under meta-type resource accessibility, can we improve social welfare while preserving the core fairness constraints?</p>
        <p><strong>Result.</strong> UNB-MT differentiates dominant shares on top of DRF-MT and identifies why a linear EF sufficient condition becomes over-tight under partial access.</p>
        <p class="research-card-links">
          <a href="{{ '/projects/4_fairmt/' | relative_url }}">UNB-MT</a>
          <span>·</span>
          <a href="{{ '/blog/2026/unb-mt-why-lemma-2-is-too-loose/' | relative_url }}">note</a>
        </p>
      </div>
    </div>
    <div class="col">
      <div class="research-card">
        <p class="research-card-kicker">Applied Projects</p>
        <h5>Reproducible modeling on real data</h5>
        <p><strong>Question.</strong> When data comes from real systems rather than clean benchmarks, how can the modeling pipeline remain interpretable and reproducible?</p>
        <p><strong>Result.</strong> Applied projects cover retrieval-augmented mathematical reasoning, platform-market analysis, wearable EEG signals, and minimum-cost flow modeling.</p>
        <p class="research-card-links">
          <a href="{{ '/projects/#applied' | relative_url }}">applied projects</a>
          <span>·</span>
          <a href="{{ '/projects/5_mathrag/' | relative_url }}">MathRAG</a>
        </p>
      </div>
    </div>
  </div>
</div>

Research notes and post-mortems on misjudgments are collected at [/notes/]({{ '/notes/' | relative_url }}).

Email is the most reliable way to reach me.
