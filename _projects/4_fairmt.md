---
layout: page
title: UNB-MT
description: 在 DRF-MT 之上以 meta-type 维度差异化 dominant share 的扩展机制
img: assets/img/4.jpg
importance: 4
category: research
related_publications: true
---

## 问题

考虑一个云平台向 $n$ 个租户分配 $m$ 个可分割资源。资源被划分为 meta-type $\Omega_1, \dots, \Omega_L$（CPU / 内存 / GPU 等）；租户 $i$ 对 meta-type $l$ 的可访问集为 $g_l^i \subseteq \Omega_l$（合规、网络拓扑、硬件兼容造成的限制）。效用为 Leontief 形式：

$$
u_i(x_i) = \min_{l:\, d_{il} > 0}\ \frac{\sum_{r \in g_l^i} x_{ir}}{d_{il}}.
$$

DRF-MT (Yin et al., IJCAI 2021) 在该模型下同时满足 share-incentive (SI)、envy-freeness (EF)、Pareto-optimality (PO) 与 strategy-proofness (SP)，构成当前 baseline。其机制要求每一轮 active 租户共享相同的 dominant share $y$，并通过迭代消除产生差异。

## 一个观察

在一个 4-meta-type 实例上跑 DRF-MT 后，逐对验证 envy 矩阵确认 $x^{\text{DRF}}$ 的 EF 属性，并观察到 $\max_i y_i / \min_i y_i \approx 23$。也就是说，DRF-MT 在表观上"统一 $y$"的机制下，已经隐式地通过迭代消除产生了 23 倍的 dominant share 差异，且 envy 仍为零。

由此引出的研究问题是：能否在保持核心公平性公理的前提下，*显式*地按 dominant meta-type 结构差异化 $y$，从而进一步提升社会福利？

## UNB-MT

把 Bei et al. (2022, two-resource setting) 的 UNB 机制适配到 meta-type 模型：

1. 按 dominant meta-type 把租户切成 *majority group* $G_{\text{maj}}$ 与 *minority group* $G_{\text{min}}$；
2. 把 majority 群体压缩到 $y_{\text{base}} = \alpha y_{\text{SI}} + (1-\alpha) y_{\text{DRF}}$，参数 $\alpha \in [0, 1]$ 可调；
3. 在剩余资源上对 minority 跑标准 DRF-MT。

可证明的保证：

- 全员 SI：$y_i \ge y_{\text{base}} \ge y_{\text{SI}}$；
- minority 内部 EF（DRF-MT 自身保证）；
- majority 内部 EF（统一 $y$）；
- minority $\to$ majority 的 EF（minority 的 $y$ 严格更大）。

仍未证明的保证：majority $\to$ minority 的 EF，全局 PO，SP。

## PairEF-auto 路线为何不成立

在 UNB-MT 之前曾尝试过另一条路：把每个租户的 $y_i$ 作为独立决策变量，对每对 $(i, j)$ 加一条线性 EF 约束，目标 $\max \sum w_i y_i$。线性 EF 来自一条对 cross-tenant 效用的上界（Lemma 2，将 $j$ 持有的全部资源都计入分子）。

实际验证表明该 LP 的 feasible region 严格小于真实公平区域。具体地，把 DRF-MT 自身产出的 $x^{\text{DRF}}$（已知 envy-free，且 $y$-比为 23）映入该 polytope 时，部分线性 EF 约束被显著违反；这意味着 LP 在 $\sum w_i y_i$ 最大化下可能输出比 $x^{\text{DRF}}$ 更差的 allocation。

实现层面有一段 silent fallback：若 LP 输出 social welfare 低于 DRF-MT 则回退到 DRF-MT。这一 safety net 把"LP 给出更差解"现象在评测层面遮蔽成了"LP 与 DRF-MT 持平"，使得问题被发现得较晚。完整的反例分析与替代的 cutting-plane 方案见 [Lemma 2 在 partial-access 下的过度收紧]({{ '/blog/2026/unb-mt-why-lemma-2-is-too-loose/' | relative_url }})。

## 实验

在不同 accessibility 稀疏度的 meta-type benchmark 上，UNB-MT 相比 DRF-MT 取得 $+2\%$ 至 $+6\%$ 的社会福利改善，且 majority $\to$ minority 的实证 envy 上界可控。当前 cutting-plane 实现仍在主线上替换 PairEF-auto。
