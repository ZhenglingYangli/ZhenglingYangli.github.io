---
layout: post
title: "在结构规则的 MWDS 实例上 Ant-Q 探索带来的负迁移"
date: 2026-04-12 19:00:00
description: "Ant-Q 在大多数 MWDS 实例上能改善贪心 LB 排序的质量，但在 unit disk graph 一类几何规则的实例上，引入探索反而扰动了贪心已经接近最优的序，导致 #opt 与 gap 的双重退化。本文形式化讨论这一负迁移的来源，并给出 phase-aware 关闭策略的设计。"
tags: research mwds antqo aco
categories: research
---

## 设置

baseline IDCLB 用启发式 $\\text{HEUR}(v) = \\beta(v)\\,\\Delta\\text{Cost}(v) / [\\text{term1}(v) (\\text{term2}(v) + \\text{term3}(v))]$ 给出一个确定性顶点排序 $O$，并在该排序上累加 incremental dominating cost 得到 LB。
v1 中的 Ant-Q 修改将其乘以 per-vertex 信息素 $AQ(v)$：

$$
\\text{HEUR}'(v) = \\text{HEUR}(v) \\cdot [AQ(v)]^{\\beta_{AQ}}.
$$

进一步引入伪随机比例选择：以概率 $q_0$ 取 $\\arg\\max\\,\\text{HEUR}'$，以 $1 - q_0$ 按 $\\text{HEUR}'$ 加权随机采样。$K$ 只蚂蚁并行构造，取 score 最高者更新 $AQ$，并以蒸发率 $\\rho$ 衰减。

期望中，由于 $AQ(v)$ 由 baseline 派生而来，最坏情形应退化到 baseline。但实际上这一直觉只在 $q_0 \\to 1$ 的极限下成立；只要存在非零的探索概率 $1 - q_0 > 0$，构造的排序就以某种概率偏离 baseline。

## 现象

在一组按图结构分类的 benchmark 上，v1 与 baseline 的逐 instance 表现并不一致。整体上 v1 在 BHOSLIB 与若干 large-scale instance 上显著占优，但在 unit disk graph (UDG) 子集上：

- $\\#\\text{opt}_{v1} - \\#\\text{opt}_{\\text{baseline}} \\approx -7$；
- $\\overline{\\text{gap}}_{v1} > \\overline{\\text{gap}}_{\\text{baseline}}$（弱退化但稳定可复现）。

把 $q_0$ 从默认 0.9 提高至 0.95，并将蒸发率 $\\rho$ 从 0.05 减至 0.02，UDG 上的退化幅度缩小但未消失。这表明退化不是参数不当，而是结构性的。

## 为什么贪心已经足够

UDG 的几何性质决定了若干额外结构：每个顶点的邻域大小近似为 $\\Theta(1)$（在固定半径模型下），权重分布通常均匀，且支配关系具有局部性。在这些条件下，IDCLB 的 $\\text{HEUR}(v)$ 已经是一个接近最优排序的近似：贪心选择最大 $\\text{HEUR}(v)$ 的顶点等价于按"局部支配代价 / 局部支配收益"的比值排序，而该比值在均匀几何图上的方差较小。

具体地，可以验证：

- 对随机两顶点 $u, v$，$\\text{HEUR}(u) - \\text{HEUR}(v)$ 的分布在 UDG 上较 BHOSLIB 集中得多；
- 在 UDG 上跑 $K = 5$ 蚂蚁，以严格 greedy 选择 ($q_0 = 1$) 构造的排序与 baseline 的 Kendall $\\tau$ 距离接近 1。

也就是说，在这一类实例上 baseline 的排序已经"几乎是最优排序"，没有剩余的 gain 给 RL 去探索。

## 探索的成本

在剩余 gain 接近零的实例上，$1 - q_0 > 0$ 的随机采样会以非零概率选到一个非最优的下一步顶点；该错选不仅恶化当前蚂蚁的 LB，还会通过 $AQ$ 更新负向反馈给后续蚂蚁。具体可以证明（在简化模型下）：当 baseline 的排序已经是最优排序时，

$$
\\mathbb{E}[\\text{LB}_{v1}] \\;\\le\\; \\text{LB}_{\\text{baseline}},
$$

且等号当且仅当 $q_0 = 1$ 与 $AQ \\equiv 1$ 时成立。换言之，在这一区域 RL 的期望收益**严格非正**。

这是 UDG 上的退化现象的根因：它不是训练失效，而是探索本身在该 instance 区域无可替代的代价。

## Phase-aware gating

修正方案不是调更小的 $1 - q_0$，而是在 instance level 直接关闭 Ant-Q。一个简单可行的判别量是 baseline 的首轮 first-round gap：

$$
\\text{FIRST\\_GAP}(\\text{instance}) := \\frac{\\text{UB}_0 - \\text{LB}_0}{\\text{LB}_0}.
$$

当 $\\text{FIRST\\_GAP} < \\theta$（经验阈值 $\\theta \\approx 0.02$）时，认为该 instance 上 baseline 已逼近最优，关闭 Ant-Q，直接执行原始 `compute_bounds`。该机制在 v2-final 与 v3 中均被采用，显式地把"是否启用 RL"作为 instance-aware 的决策。

实现成本是若干行 if-else，但在 UDG 上恢复了 baseline 的精度，同时保留了 v1 在难实例上的全部收益。一个更激进的版本是把 phase gating 本身也做成可学习的二值策略，但其改进幅度未必能 justify 引入额外的 hyperparameter，目前保留为未来工作。

## 引用

```bibtex
@misc{yangli2026antq_v1_udg,
  title={在结构规则的 MWDS 实例上 Ant-Q 探索带来的负迁移},
  author={Yangli, Zhengling},
  journal={Zhengling Yangli's Blog},
  year={2026},
  url={https://zhenglingyangli.github.io/blog/2026/antq-v1-uniform-rl-not-free-lunch/}
}
```
