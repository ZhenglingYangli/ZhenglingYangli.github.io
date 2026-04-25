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

你好，我是 **杨李正凌**（Zhengling Yangli），目前在 [云南大学数学与统计学院](https://www.ynu.edu.cn/) 读统计学（2024 级本科）。

我喜欢做这一类问题：**理论结构干净，但实验空间足够大** —— 大多落在带硬组合内核的离散优化里（SAT、MaxSAT、支配集、公平分配）。我的方法风格是 *phenomenon-driven* —— 从一个具体的实验异常出发，先把第一性原理层面的机制说清楚，再设计下一步干预。

#### 现在在做的几件事

- **(Max)SAT 多样性模型枚举**：在 CNF 公式上找 $k$ 个差异最大化的满足解，使用阈值编码（`DW` / `IW`），三种搜索策略（binary-lifting / binary-search / SAT-UNSAT）。[→ 项目页]({{ '/projects/2_diversesat/' | relative_url }})
- **非线性整数规划 → MaxSAT 编码**：把 `QPLIB` 与 `SMT-LIB QF_NIA` 的多项式整数规划，转成加权 MaxSAT（`OH` / `UNA` / `BIN` / Order-Decomposition 四种方案），在 `Z3` / `CPLEX` 等强基线下评测。[→ 项目页]({{ '/projects/3_nlip/' | relative_url }})
- **用 Ant-Q 强化 MWDS 下界**：把一个 `ACO + Q-Learning` 模块插进 ECAI 2025 基线 `Dual-Deep` / `Dual-Fast` 的 Dual-Bound Search 的 LB 端，relative gap 在 Deep 上下降 23.7%–31.2%。[→ 项目页]({{ '/projects/1_mwds/' | relative_url }})
- **部分访问下的公平多资源分配**：在 `DRF-MT`（IJCAI 2021）基础上加入 `UNB` 机制，在保持 share-incentive 与组内 envy-freeness 的同时追求更高的社会福利。[→ 项目页]({{ '/projects/4_fair-ratio/' | relative_url }})

我也会在 [过程思考]({{ '/notes/' | relative_url }}) 里诚实记录走过的弯路 —— 那些没走通的尝试通常是我学得最多的部分。

联系我最稳定的方式是邮件，欢迎合作或讨论想法。
