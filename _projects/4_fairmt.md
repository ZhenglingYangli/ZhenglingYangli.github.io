---
layout: page
title: UNB-MT —— 在 DRF-MT 之上
description: 多资源公平分配中按组差异化提升社会福利的尝试
img: assets/img/4.jpg
importance: 4
category: research
related_publications: true
---

## 问题

考虑一个云平台向 $n$ 个租户分配 $m$ 个可分割资源。资源被分成 **meta-types** $\Omega_1, \dots, \Omega_L$（CPU / 内存 / GPU 等）；每个租户有自己的 **可访问集** $g_l^i \subseteq \Omega_l$（合规、网络拓扑、硬件兼容造成的限制）。效用是 Leontief 形式：

$$
u_i(x_i) = \min_{l:\, d_{il} > 0} \frac{\sum_{r \in g_l^i} x_{ir}}{d_{il}}
$$

DRF-MT（Yin et al., IJCAI 2021）是这个模型下的当前最强方法，同时满足 **Share-Incentive (SI)**、**Envy-Freeness (EF)**、**Pareto-Optimality (PO)** 与 **Strategy-Proofness (SP)**。它强制每一轮的 active 租户共享相同的 dominant share $y$，仅通过迭代消除来产生差异。

## 关键观察

DRF-MT **已经隐式地做了差异化**：在一个 4-meta-type 实例上，我们观察到最大与最小 $y$ 之间的比值高达 **23×**，而 envy 是 0。
也就是说：DRF-MT 的"统一 $y$"的表象之下，差异早就通过迭代消除被产生了 —— 只是被藏起来了。

**研究问题**：能否进一步 *显式* 地按 dominant meta-type 结构差异化 $y$，在不破坏核心公平性公理的前提下提升社会福利？

## UNB-MT

把 Bei et al. (2022, 2-resource setting) 的 UNB 机制适配到 meta-type 模型：

1. 按 dominant meta-type 把租户切成 **majority group** $G_{\text{maj}}$ 与 **minority group** $G_{\text{min}}$。
2. majority 群体被压缩到 $y_{\text{base}} = \alpha y_{\text{SI}} + (1-\alpha) y_{\text{DRF}}$，参数 $\alpha \in [0, 1]$ 可调。
3. 在剩余资源上对 minority 跑标准 DRF-MT。

**可证保证**：

- 全员 SI：$y_i \ge y_{\text{base}} \ge y_{\text{SI}}$；
- minority 内部 EF（标准 DRF-MT）；
- majority 内部 EF（统一 $y$）；
- minority → majority 的 EF（minority 的 $y$ 严格更大）。

**目前还无法保证**：majority → minority 的 EF、全局 PO、SP。

## 一个诚实的失败

我们试过一个 LP 路线 `PairEF-auto`：对每对 $(i, j)$ 加线性 EF 约束，目标 $\sum w_i y_i$ 最大。线性 EF 来自 Lemma 2（用 $j$ 持有的全部资源做上界）。

**结果**：LP 的 feasible region **严格小于**真实公平区。在 4-meta-type 实例上，DRF-MT 自己产出的那个「23× $y$-比例 / envy = 0」的 allocation 在这个 LP 里**直接被拒绝**。
更糟的是 —— 代码里有一个静默的 fallback：如果 LP 输出比 DRF-MT 还差，就 fall back 到 DRF-MT。这让我以为 LP 在工作，其实它每次都偷偷被替换掉了。

完整复盘见 [Lemma 2 太松]({{ '/blog/2026/unb-mt-why-lemma-2-is-too-loose/' | relative_url }})。

**教训**：要严格保 EF 又超越 DRF-MT，用线性充分条件不够 —— 需要 **cutting-plane**：先求 social welfare 不加 EF，post-hoc 算 envy 矩阵，对 violated pair 加精确 EF cut。

## 实验

在不同 accessibility 稀疏度的 meta-type benchmark 上，UNB-MT 相比 DRF-MT 实现了 **+2%–6% 的社会福利**，且 majority → minority 的实证 envy 上界可控。
