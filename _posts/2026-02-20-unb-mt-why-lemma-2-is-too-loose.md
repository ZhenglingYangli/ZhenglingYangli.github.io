---
layout: post
title: "PairEF-auto 的 LP 公式拒绝一个已知公平的 allocation：Lemma 2 在 partial-access 下的过度收紧"
date: 2026-02-20 10:30:00
description: "在多资源公平分配的 meta-type 设定下，由 Lemma 2 推出的线性 EF 充分条件，会拒绝一个 DRF-MT 自身产生的 envy-free 分配。本文形式化地说明这一现象，并讨论替代的 cutting-plane 方案。"
tags: research fairness drf-mt
categories: research
---

## 设置

考虑 $n$ 个租户共享 $m$ 个可分割资源的多资源公平分配问题。资源被划分为若干 *meta-type* $\\Omega_1, \\dots, \\Omega_L$，租户 $i$ 对 meta-type $l$ 的可访问集为 $g_l^i \\subseteq \\Omega_l$。租户的需求向量 $d_{il}$ 与效用函数采用 Leontief 形式：

$$
u_i(x_i) \\;=\\; \\min_{l: d_{il} > 0}\\ \\frac{\\sum_{r \\in g_l^i} x_{ir}}{d_{il}}.
$$

DRF-MT (Yin et al., IJCAI 2021) 在该模型下同时满足 share-incentive (SI)、envy-freeness (EF)、Pareto-optimality (PO) 与 strategy-proofness (SP)，是当前 baseline。其机制要求每一轮 active 租户共享相同的 dominant share $y$，并通过迭代消除产生差异。

UNB-MT 项目希望在保持核心公平性公理的前提下，进一步显式提升社会福利。我们曾试图把这个目标整理为一个线性规划：

> **PairEF-auto.** 给每个租户独立的 $y_i$，对每对 $(i, j)$ 加一条线性 EF 约束，目标 $\\max \\sum_i w_i\\, y_i$。

下文说明这个 LP 公式为何不能成立。

## Lemma 2 推出的线性 EF 约束

PairEF-auto 把 EF 约束 $u_i(x_i) \\ge u_i(x_j)\\ \\forall i \\ne j$ 转化为关于 $y$ 的线性形式。这一步依赖一个对 cross-tenant 效用 $u_i(x_j)$ 的上界。
我们曾经证明并使用了如下 Lemma 2：

> **Lemma 2.**\\quad $u_i(x_j) \\le \\sum_{l : d_{il} > 0}\\ \\frac{\\sum_{r \\in \\Omega_l}\\ x_{jr}}{d_{il}}.$

其右端把租户 $j$ 在 meta-type $l$ 中**全部资源持有**计入，而不仅是租户 $i$ 能访问的那部分（即 $g_l^i$）。把它代入 EF 约束后化简得到一组关于 $\\{y_i\\}$ 的线性不等式。

这一上界是松的；松到什么程度，需要一个具体例子来说明。

## 反例：DRF-MT 自有 allocation 的 23× $y$-比与零 envy

构造一个 4-meta-type 的 instance，在该 instance 上跑 DRF-MT，得到一个分配 $x^{\\text{DRF}}$，记其为基准。直接验证两件事：

1. **逐 cell 验证 envy 矩阵**：对所有 $i \\ne j$，计算 $u_i(x_i^{\\text{DRF}}) - u_i(x_j^{\\text{DRF}})$；这一差值在所有 pair 上均 $\\ge 0$。即 $x^{\\text{DRF}}$ 是 envy-free 的（这与 DRF-MT 的理论保证一致）。
2. **计算 dominant-share 比**：在 $x^{\\text{DRF}}$ 中，最大与最小的 $y_i = u_i(x_i^{\\text{DRF}})$ 之比约为 $23\\times$。

现在把 $x^{\\text{DRF}}$ 映入 PairEF-auto 的 feasible polytope：把每个 $y_i$ 取为 DRF-MT 上的实际值，检查 Lemma 2 推出的线性 EF 约束。结果是：在某些 $(i, j)$ 上，线性 EF 约束被显著违反。

也就是说，**存在一个 envy-free 的 allocation $x^{\\text{DRF}}$，但 PairEF-auto 的 feasible polytope 排除了它**。这等价于：PairEF-auto 的 feasible region 严格小于真实的公平区域。在追求 $\\sum w_i y_i$ 最大化时，LP 极可能给出一个真实公平区中比 $x^{\\text{DRF}}$ 还差的解。

## 误差来源：partial access 与 Leontief 非线性

为什么 Lemma 2 在 partial access 下会松到这种程度？两点原因：

- **Partial access**：$u_i(x_j)$ 真实可访问的资源仅限于 $g_l^i \\cap \\text{supp}(x_{jl})$。Lemma 2 把分子放宽为 $\\sum_{r \\in \\Omega_l} x_{jr}$，丢掉了 $g_l^i$ 的限制。当不同租户的 $g_l^i$ 几乎不相交时，这一放宽产生的松弛误差与 $|g_l^i| / |\\Omega_l|$ 同阶。
- **Leontief 形式**：$u_i$ 是各 meta-type 维度上的 *最小值*，而 Lemma 2 的右端是一个 *求和* 式上界。求和上界对最小值的近似在不等式方向上是单向松的，且此松弛随 meta-type 数 $L$ 线性增长。

把这两点叠加，partial access 下的 Lemma 2 在 $L \\ge 3$ 的实际场景中已经过度收紧。

## 一个干扰因素：silent fallback

PairEF-auto 的最初实现里有一段 safety net：若 LP 输出的 social welfare 低于 DRF-MT，就回退到 DRF-MT 的 allocation。该 safety net 的初衷是保证 *worst-case* 不退化，但在评测层面，它把"LP 给出更差解"这一现象遮蔽成了"LP 与 DRF-MT 持平"。该副作用是上述问题被发现得较晚的直接原因；分析时若不绕过 fallback，将无法看到 LP 与真实可行域之间的差距。

## 替代方案：cutting-plane EF

一旦认识到线性 EF 充分条件不成立，可行的修正路线是：放弃在 LP 阶段就强制 EF，改为 cutting-plane：

1. **第一阶段**：求解不带 EF 约束的 social welfare 最大化 LP，得到候选 $x^{(0)}$；
2. **第二阶段**：在候选解上 *post-hoc* 计算逐对的 envy 矩阵 $E_{ij}^{(t)} = u_i(x_j^{(t)}) - u_i(x_i^{(t)})$；
3. **第三阶段**：对每个被违反的 $(i, j)$（即 $E_{ij}^{(t)} > 0$），加入 *精确*的 EF cut $u_i(x_i) \\ge u_i(x_j)$（直接以非线性形式呈现，或在分段线性化后嵌入），返回第一阶段。

该方案能正确处理 partial access 与 Leontief 非线性，代价是失去 closed-form LP 的解析性。我们目前正在 UNB-MT 主线上以这个方案替换 PairEF-auto。

## 小结

线性充分条件在简化问题上的吸引力来源于 LP 的解析便利，但当**已知公平的 published allocation 落到充分条件之外**时，该充分条件就不能被信任。在多资源公平分配这一具体设定下，partial access 与 Leontief 形式共同决定了 Lemma 2 类型的线性上界对真实 EF 区域的显著低估。

## 引用

```bibtex
@misc{yangli2026lemma2,
  title={PairEF-auto 的 LP 公式拒绝一个已知公平的 allocation：Lemma 2 在 partial-access 下的过度收紧},
  author={Yangli, Zhengling},
  journal={Zhengling Yangli's Blog},
  year={2026},
  url={https://zhenglingyangli.github.io/blog/2026/unb-mt-why-lemma-2-is-too-loose/}
}
```
