---
layout: about
title: 关于
permalink: /zh/
subtitle: >
  本科生 @ <a href='https://www.ynu.edu.cn/'>云南大学</a> · 统计学
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

你好，我是 **杨李正凌** (Zhengling Yangli)。

我目前就读于 [云南大学数学与统计学院](https://www.ynu.edu.cn/) 统计学专业（2024 级本科）。

我的研究兴趣位于 **组合优化、布尔可满足性 (SAT / MaxSAT) 与算法公平性** 的交叉地带。我倾向于设计**理论保证清晰、实验表现具备竞争力**的算法。目前的工作主要有四条线：

- **SAT / MaxSAT 多样性模型枚举** — 在 CNF 公式上寻找 $k$ 个差异最大化的满足解，基于 `DW`、`IW` 阈值编码，配合 binary-lifting / binary-search / SAT-UNSAT 三种搜索策略。
- **非线性整数规划到 MaxSAT 的编码** — 把 `QPLIB` / `SMT-LIB QF_NIA` 形式下的多项式整数规划编码为加权 MaxSAT（`OH` / `UNA` / `BIN` / Order-Decomposition 四种方案），与 `Z3`、`CPLEX` 等强基线对比。
- **最小加权支配集 (MWDS)** — 在 ECAI 2025 基线 `Dual-Deep` / `Dual-Fast` 的 Dual-Bound Search 框架中插入一个 Ant-Q (`ACO + Q-Learning`) 模块，显著收紧迭代下界。
- **多资源公平分配** — 将 `DRF-MT` (IJCAI 2021) 通过 `UNB` 思想扩展至 meta-type 场景下，追求在保持 Share-Incentive 与组内 Envy-Freeness 的同时提升社会福利。

我信奉的原则是：**研究始于干净的问题陈述，终于可复现的实验**。具体方法上，我偏好 *phenomenon-driven* 的风格 —— 从一个实验异常开始（比如：为什么 Ant-Q 提升了 LB 却不改善 `#opt`？），构建一个第一性原理层面的机制解释（LB → UB 的耦合必须经过硬证明规则），再设计下一个干预实验。

# 研究兴趣

- SAT / MaxSAT 求解、约束求解、组合优化
- 多样性与枚举问题
- 资源分配的算法公平性与机制设计
- 实证算法研究：实验设计、统计分析、基准测试

与我联系的最好方式是邮件。我欢迎合作，也很乐意讨论新的研究想法。
