---
layout: post
title: "我花了一个月相信一个 Lemma 是对的，最后是它把我害了"
date: 2026-02-20 10:30:00
description: "PairEF-auto 的死亡复盘：当一个已知公平的 published allocation 违反我自己的充分条件时，错的几乎一定是我，不是 published 的算法。"
tags: research fairness drf-mt
categories: research
---

去年冬天有一个月，我每天醒来都在想 PairEF-auto。
现在回看，那一个月有一半时间我在做的事情可以一句话概括：**用一个我自己制造的、太松的充分条件去 reject 一个本来就公平的 allocation，然后责怪求解器**。

#### 我们想要做的事

UNB-MT 是 DRF-MT (IJCAI 2021) 在 meta-type 设定下的延伸。我希望给每个 tenant 一个独立的 dominant share $y_i$，按对加 EF（envy-free）约束，最后用一个 LP 同时最大化 social welfare、保持 EF。

关键的一步是要把 cross-tenant 的 utility $u_i(x_j)$ 上界成 $y_j$ 的线性函数。我们自己证的 Lemma 2 用了 $j$ **持有的所有资源**作为上界，而不是 $i$ **能够访问的那部分**。

那就是松的来源。

#### Smoking gun：23× y-ratio 但 envy 全 0

我们做了一个 4-meta-type benchmark。结果让我盯着屏幕半天没说话：

- DRF-MT 自己的 allocation，最幸运 tenant 的 $y$ 大约是最不幸 tenant 的 **23×**。
- 但同一份 allocation，逐 cell 验证 $u_i(x_j)$ 矩阵，envy 是 **0**。

也就是说：**有一个公平 (envy-free) 的 allocation，里面 $y$ 之间差 23 倍**。

而我的 PairEF-auto LP **拒绝**了这个 allocation —— 因为 23× 的 $y$ 比例直接撞穿了我从 Lemma 2 推出来的线性 EF 约束。

#### 一个让我半夜起来一身冷汗的 bug

我之前一直没察觉这件事，是因为 PairEF-auto 的代码里有一行：

> 如果 LP 给出的 social welfare 比 DRF-MT 还差，就 fall back 到 DRF-MT 的 allocation。

它是当作 safety net 写的，但它做的事情其实是 **悄悄把我糟糕的 LP 输出替换掉，让我以为方法在 work**。
我看的实验表上每一行都不差 —— 因为有差的部分都被 fallback 偷偷替成 DRF-MT 了。

那一刻我才意识到：**充分条件给得太松，feasible region 比真实公平区严格小，LP 多半会找到一个比 DRF-MT 还差的解；只是 fallback 帮我隐藏了这个事实。**

#### 教训

1. **当一个已知公平的 published allocation 违反你自己的充分条件，错的是你的充分条件，不是 published 的算法**。这一句我现在写在 obsidian 的最上面。
2. Silent fallback 是个魔鬼。它把"方法失效"伪装成"方法可用"，让你失去 debug 的入口。
3. 把 sufficient condition 写成 LP 友好的形式很诱人，但它 trade 掉了正确性。
4. **正解**应该是 cutting-plane：先不加 EF，求一次 social-welfare 最大化；然后 post-hoc 算 envy 矩阵；只对 violating pair 加**精确的** EF cut。这能正确处理 partial-access 与 Leontief 的非线性，但代价是失去封闭形式 LP 的优雅。

我愿意付这个代价。漂亮的 LP 一旦它说 OK 但其实它在偷偷 fallback，我宁可换成丑一点但每次都 honest 的 cutting plane。
