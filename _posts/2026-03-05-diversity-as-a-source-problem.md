---
layout: post
title: "DiverseSAT 不是奇怪的 toy —— 但我花了一年才能这么讲"
date: 2026-03-05 14:00:00
description: "曾经一个 reviewer 写：'k 个最大化差异的满足解，这是一个真问题吗？'当时我觉得他没读懂；后来我意识到他读得很懂，是我没把动机讲清楚。"
tags: research sat diversity
categories: research
---

#### 我从被 reviewer 怼到承认 reviewer 是对的

这个项目最早的 reviewer comment 我记得很清楚：

> "Finding $k$ maximally different satisfying assignments is an interesting curiosity, but the practical motivation in the paper is thin. The applications listed feel reverse-engineered."

第一反应是不服。我在心里反驳了一整页：「枚举本来就是 SAT 的经典扩展。多样性是合理的目标。你不懂应用是你的问题。」

但是同一个意思，我后来又被三个不同的人独立提了出来。第三次之后我服了 —— **不是 reviewer 没读懂，是我没把这件事讲清楚**。

#### 我之前混淆了两件事

我一直把 DiverseSAT 当作「枚举的优化」来 pitch：找 $k$ 个解，让它们尽量不一样。
但其实它不是 enumerate-all 的减负版本，而是**完全不同的问题**：

- "找 $k$ 个 SAT 解" —— 局部问题，只要 SAT 求解器返回得快就行。
- "找 $k$ 个最大化差异的 SAT 解" —— 一个 *source problem*，几个看似无关的应用一旦正确陈述就归约到它。

这才是论文该讲的故事。下面的两个例子是我后来重写 motivation 时用的：

#### 应用一：Bounded Model Checking 想要的是真正不同的反例

设 $F$ 同时被 $\\vec 0$ 与 $\\vec 1$ 满足。我向求解器要 $k = 10$ 个解 —— 现代求解器很可能给我 10 个几乎一样的 mode（比如 10 个 $\\vec 0$ 附近的近似副本）。这对 debugger 没有任何信息量。

但如果我要的是 $k = 10$ 个**最大化差异**的满足解，最优答案就是 5 个 $\\vec 0$ + 5 个 $\\vec 1$ —— 这才是 human debugger 真正想看到的「两个 mode」。多样性不是一个修饰，它是把 enumerator 变成 *witness generator* 的关键。

#### 应用二：冗余 $s$-$t$ 路径设计

电信网络要 $k = 10$ 条**冗余的** $s$-$t$ 路径，目标是任一边失效都不掉网。如果我直接拿 SAT 找 10 条路径，它们大概率共用关键边。
而 diversity-optimal 的 $k$ 条解最小化了边的重复，给了我对单点失效真正的鲁棒性。

#### 我学到的一件事

**Motivation 不是写完 method 之后回去补的，它是问题本身的一部分。**
我之前一直把它当作 paper introduction 的一个 paragraph 来对付，等到投稿才发现：动机讲不清，方法再漂亮 reviewer 也很难买账。

现在 JAIR rewrite 我把它改成第 1 节就先用上面这两个应用把"为什么需要 diversity-optimal"讲透，再进 method。
