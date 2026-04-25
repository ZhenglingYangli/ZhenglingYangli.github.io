---
layout: post
title: "AntQO v1：我以为 RL 加了稳赚不赔，结果在 UDG 上掉了点"
date: 2026-04-12 19:00:00
description: "Ant-Q 在大多数 MWDS 实例上都能找到比贪心更好的下界。但在 UDG（unit disk graph）这种结构很规则的实例上，探索反而把好序列扰乱掉了。这个负结果让我学会了一件事：探索是有成本的。"
tags: research mwds antqo aco
categories: research
---

AntQO 这个项目我交过三个版本：v1（最早的纯 Ant-Q）、v2（参数调优）、v2-final / v3（phase-aware 切换）。
今天想写的是 v1 的失败 —— 那次失败让我对"什么时候该开 RL、什么时候不该"有了更具体的感觉。

#### 我对 v1 的初始预期

baseline IDCLB 是纯贪心：用一个固定的 `HEUR(v)` 公式选下一个顶点。
我的 v1 idea 很直接：在 `HEUR` 上叠一个学到的 per-vertex 信息素 $AQ(v)$，让常被选的好顶点被进一步放大。形式上是

$$ \\text{HEUR}'(v) = \\text{HEUR}(v) \\cdot [AQ(v)]^{\\beta}. $$

我的预期是："学到的东西是从 baseline 派生的，理论下界至少不差于 baseline。"
这个预期错了，至少在某些图上错了。

#### 数据告诉我什么

整体上 v1 比 baseline 强，relative gap 平均下降。但跑分表里有一栏让我盯了很久 —— **UDG 子集**。

UDG 是 *unit disk graph*，结构非常规整、邻居集合大、权重分布均匀。在这类图上，贪心 `HEUR` 的排序本身已经接近最优排序。我加的 RL 探索（伪随机比例选择，$q_0$ 控制 explore vs exploit）反而**把这个好序列扰动掉了**。

具体的数：UDG 上 v1 的 `#opt` 比 baseline 少了 7 个，`avg gap` 略微变差。
我一开始以为是参数没调好，把 $q_0$ 提到 0.95，把 $\\rho$ 调小，结果差距缩小但没消失。

#### 真正的问题

「贪心已经接近最优」的实例上，RL 是**纯负担**。它的 expected improvement 来自于 *探索一个 baseline 错过的好序列*；如果 baseline 没错过，那么探索的代价就是单调的。

换句话说，RL 不是免费午餐。它是一笔投资，要回报得在 baseline 留下足够大的 gap 时才划算。

#### v2-final 怎么修

我们在 v2-final 里加入了一个简单的 **phase 切换**：
当首轮 `FIRST_GAP` 小于一个阈值时（说明实例本身已经接近 optimal，baseline 表现好），关闭 Ant-Q，跑原版 `compute_bounds`；只在 `FIRST_GAP` 大的实例上启用 Ant-Q。

实现成本几乎为零（几行 if-else），但在 UDG 上把 baseline 的优势保住了，在难实例上保留了 v1 的收益。

#### 我的反思

我之前对 RL 的感觉太理想化 —— 觉得"反正它学了 baseline 的策略，最坏情况就是退化到 baseline"。实际上：

1. 学到的策略和原始策略**不是嵌套关系**，它是另一个分布。
2. 探索阶段的随机性不会自己关掉，**要由你决定什么时候关**。
3. 有的图上贪心已经把 ground truth 算出来了，再加学习只会破坏。

> 不是哪都能加 RL；先看一眼这个实例的"gap-curvature"，再决定开不开。

完整的 v1 / v2-final / v3 对比放在 [MWDS 项目页]({{ '/projects/1_mwds/' | relative_url }}) 里。
