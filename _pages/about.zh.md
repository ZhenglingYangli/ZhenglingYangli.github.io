---
layout: about
title: 关于
permalink: /zh/
lang: zh
subtitle: >
  云南大学 统计学 本科生 · 2024 级
  <br/>
  组合优化 · SAT / MaxSAT · 公平资源分配
  <br/>
  <a class="btn btn-sm btn-outline-primary mt-2" href="{{ '/cv/' | relative_url }}">
    <i class="fa-solid fa-file-lines"></i> 完整简历
  </a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <p>数学与统计学院</p>
    <p>云南大学</p>
    <p>昆明, 云南</p>

news: true
latest_posts: true
selected_papers: true
social: true
---

杨李正凌（Zhengling Yangli），云南大学数学与统计学院统计学专业 2024 级本科生。

主要研究方向是组合优化与 Boolean satisfiability 求解，具体地：SAT/MaxSAT 多样性枚举、非线性整数规划的 MaxSAT 编码、最小加权支配集的下界搜索强化、以及多资源公平分配中带 partial-access 的扩展机制。在方法上偏好从具体的实验异常出发，先尝试在第一性原理层面给出机制解释，再据此设计后续干预，而不是直接在大规模 hyperparameter 搜索上寻找经验拟合。

#### 当前在做的研究

- **(Max)SAT 多样性模型枚举**：在 CNF 公式上寻找 $k$ 个差异最大化的满足解。提出了 DW（Direct Weight）与 IW（Incremental Weight，基于增量 totalizer）两种阈值编码，并配合 binary-lifting / binary-search / SAT-UNSAT 三种搜索策略。在 7 个 benchmark 家族 289 个 instance 上与 MaxSAT、Pseudo-Boolean、CPLEX 等基线做了系统对比。[→ 项目页]({{ '/projects/2_diversesat/' | relative_url }})
- **非线性整数规划的 MaxSAT 编码**：把 QPLIB 与 SMT-LIB QF\_NIA 中的多项式整数规划编码为加权 MaxSAT，研究 OH / UNA / BIN / Order-Decomposition 四种编码族在不同问题结构上的相对优劣，并诊断 unary 编码在大域规模下的退化机制。[→ 项目页]({{ '/projects/3_nlip/' | relative_url }})
- **MWDS 下界搜索的 Ant-Q 强化**：基于 ECAI 2025 baseline `Dual-Deep` / `Dual-Fast` 的 Dual-Bound Search 框架，在 LB 端的 pair 构造中插入 ACO+Q-Learning 模块，relative gap 在 Deep 上下降 23.7%–31.2%。其中关于 LB 数值收紧与 `#opt` 之间脱耦的现象，更详细的分析见 [关联笔记]({{ '/blog/2026/lb-ub-coupling-mwds/' | relative_url }})。[→ 项目页]({{ '/projects/1_mwds/' | relative_url }})
- **多资源公平分配**：在 DRF-MT (Yin et al., IJCAI 2021) 的 meta-type 设定下扩展 UNB 机制，在保持 share-incentive 与组内 envy-freeness 的同时尝试提升社会福利。其中关于线性 EF 充分条件 (Lemma 2) 在 partial-access 下过度收紧的反例分析见 [关联笔记]({{ '/blog/2026/unb-mt-why-lemma-2-is-too-loose/' | relative_url }})。[→ 项目页]({{ '/projects/4_fair-ratio/' | relative_url }})

研究过程中的笔记与误判修正记录在 [过程思考]({{ '/notes/' | relative_url }}) 一栏。

联系方式以邮件为主。
