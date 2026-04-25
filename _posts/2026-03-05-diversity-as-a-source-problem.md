---
layout: post
title: "DiverseSAT 作为 source problem：从 BMC 与冗余路径设计的两个归约"
date: 2026-03-05 14:00:00
description: "Diverse SAT 不是 enumeration 的另一种形式，而是若干下游应用的统一上游问题。本文从 bounded model checking 与冗余 s-t 路径设计两个例子，说明把它表述为 'k 个最大化差异的满足解' 而非 'k 个 SAT 解' 的必要性。"
tags: research sat diversity
categories: research
---

## 问题

给定 CNF 公式 $F$ 与正整数 $k$，*Diverse SAT* 要求找到 $k$ 个满足赋值 $\\mathbf{x}_1, \\ldots, \\mathbf{x}_k$，最大化某种多样性度量（典型地，逐对 Hamming 距离之和）：

$$
\\max_{\\mathbf{x}_1, \\ldots, \\mathbf{x}_k}\\ \\sum_{1 \\le j < j' \\le k}\\ d_H(\\mathbf{x}_j, \\mathbf{x}_{j'}) \\quad \\text{s.t.}\\quad F(\\mathbf{x}_j) = 1\\ \\forall j.
$$

这与"先求 SAT，再返回任意 $k$ 个解"是不同的问题：后者关心 *是否能找到* $k$ 个满足赋值，前者关心这 $k$ 个赋值在解空间中的分布。

最初提出 Diverse SAT 时，常见的怀疑是它属于 enumeration 的变体；JAIR 投稿过程中收到的 reviewer 意见也集中在动机层面，例如「多样性是否构成一个独立的研究目标」。下面给出两个常见应用，说明在这些应用中"$k$ 个最大化差异的解"是问题本身，而不是 enumeration 之上的修饰。

## 应用一：Bounded Model Checking 中的 mode 覆盖

设 $F$ 描述被验证系统的可达状态，且至少存在两个满足 $F$ 的反例 mode：$\\mathbf{x}^{(0)} = \\vec{0}$ 与 $\\mathbf{x}^{(1)} = \\vec{1}$，二者代表语义上根本不同的失败场景。

如果不带多样性约束，向求解器请求 $k = 10$ 个满足赋值，CDCL 求解器会被早期 conflict 学习引导到某一个 mode 邻域内，所返回的 10 个赋值往往是 $\\mathbf{x}^{(0)}$ 的近邻。$\\mathbf{x}^{(1)}$ 这一 mode 完全可能被遗漏，使得 witness set 在覆盖意义上失效。

而 Diverse SAT 在 $k = 10$ 时的优解为 5 个 $\\mathbf{x}^{(0)}$ 加 5 个 $\\mathbf{x}^{(1)}$，实现了对两个 mode 的对称覆盖。这是 $\\sum d_H$ 目标在最优时的直接结果，不依赖额外的 mode-aware 启发式。

## 应用二：冗余 $s$–$t$ 路径设计

考虑图 $G = (V, E)$ 与终点对 $(s, t)$。把"存在 $s$–$t$ 路径"编码为 SAT 是常规做法：每条边对应一个布尔变量，引入流守恒约束。设 $\\mathbf{y}_j \\in \\{0, 1\\}^{|E|}$ 表示第 $j$ 条路径所选边的指示向量。

在电信或物流网络场景中，所需的不是 $k$ 条任意的 $s$–$t$ 路径，而是**冗余的**$k$ 条路径：单条边失效不应使全部 $k$ 条路径同时不可达。直接求 $k$ 个 SAT 解返回的路径常共享关键边，鲁棒性失效。

把目标改为最大化 $\\sum_{j < j'} \\| \\mathbf{y}_j - \\mathbf{y}_{j'} \\|_1$（即 $\\sum d_H$），最优解即在边集层面尽可能不重叠的 $k$ 条 $s$–$t$ 路径，对单点失效具有可证的鲁棒性。

## 为什么 Diverse SAT 不是 enumeration 的修饰

上述两个应用共享一个特点：**应用问题被自然地表述为 Diverse SAT，而非"先求 SAT 解再做后处理"**。
将其表述为"$k$ 个最大化差异的解"具有以下不可约的成分：

1. 目标函数是定义在 $\\{0,1\\}^{nk}$ 上的全局耦合项 $\\sum_{j<j'} d_H(\\mathbf{x}_j, \\mathbf{x}_{j'})$，它无法分解为关于单个 $\\mathbf{x}_j$ 的局部目标。
2. 任何先求 SAT、再 ex post 选 $k$ 个差异最大的子集的方案，要先列举一个充分大的解候选池；当 $|F^{-1}(1)|$ 巨大时，这一步本身就变得不可行。
3. 直接编码 Diverse SAT（如 DW / IW 阈值编码）允许把 cardinality / totalizer 结构与 CDCL 的 conflict learning 配合，避免穷举候选池。

把 Diverse SAT 视为 *source problem*，意味着可以为每个下游应用提供统一的入口；下游算法本身仅是从这个 source problem 的输入端到输出端的一个适配器。

## 与现有方法的对照

近年若干工作在解集多样性上有相关努力：

- *kissat-mab* 等 SAT 求解器关注单一解的求解效率，未涉及多解多样性目标；
- *bplmcs / projected model counting* 关注解的计数而非选解的分布；
- *MUS / MCS* 主题关注极小不可满足子集，与多样性问题在目标函数与对偶性结构上均不同。

将 Diverse SAT 与这些工作放在一起对比，能看到它处于一个"既不是 SAT 求解器，也不是 model counting"的位置，而其下游应用恰好需要这个中间地带。

JAIR 投稿的修订版会把上述两个应用前置到 Section 1，并以归约的形式给出形式化的 reduction lemma。

## 引用

```bibtex
@misc{yangli2026sourceprob,
  title={DiverseSAT 作为 source problem：从 BMC 与冗余路径设计的两个归约},
  author={Yangli, Zhengling},
  journal={Zhengling Yangli's Blog},
  year={2026},
  url={https://zhenglingyangli.github.io/blog/2026/diversity-as-a-source-problem/}
}
```
