---
layout: post
title: "为什么我从纯数学转向了 MaxSAT 求解"
date: 2026-04-14 11:00:00
description: "本科第一年我一直以为我会做几何 / 数论。一年后我决定把研究主线挪到 SAT/MaxSAT 上。这是我对自己的一份解释。"
tags: research career maxsat
categories: opinion
---

#### 我的初始位置

我刚进大学的时候，"科研" 在我脑子里就等于 *找一个干净的问题，证一个深的定理*。我对几何与数论很向往，初学 Hartshorne，对 Galois cohomology 抱有那种很矫情但很真实的崇敬感。

#### 第一次让我犹豫的事

大一暑假我跟一位老师做一个组合优化方向的小项目：MWDS 的近似比分析。老师问我：「这个新的 reduction，你觉得它在 BHOSLIB 上 UB 会更紧吗？」

我答不上来。
我会证 reduction 保持下界单调；我推不出实际 instance 上它能不能让 UB 实际收紧。**因为后者是一个经验问题，不是一个证明问题。**

那个暑假之后我意识到一件事：我以前喜欢的"漂亮的证明"其实是一个 **closed system** —— 内部自洽就行；
但**算法在真实数据上的行为**是一个 **open system**，它的语义在 instance 分布、求解器选择、硬件、缓存、时间预算之间。

我不是说 closed system 不重要。我是说，我发现 open system 才是让我真正想长期投入的东西。

#### MaxSAT 是怎么进来的

转折发生在我第一次读 Bonet & Levy 的 *Logic in Computer Science* 第 11 章，以及 Marques-Silva 的 *Boolean Satisfiability Solvers*。
我意识到 MaxSAT 是一个非常少见的"中间地带":

- 它的核心是组合的，**有清晰的近似界与硬度结果**（数学家的菜）；
- 但同时，**算法 -- 实例 -- 求解器的交互是经验的**，所有现代进展几乎都来自实证（实证算法学者的菜）。

我喜欢这个 in-between 的位置。它让我可以一只脚站在证明里、另一只脚站在 benchmark 里，两边都不假装自己是对方。

#### 一年后我学到的

1. **从纯数学过来的人最容易踩的坑**：低估实现细节，高估"理解了 idea 就等于做出来了"。我的 [NLIP 第一次编码就翻车]({{ '/blog/2026/nlip-encoding-first-mistake/' | relative_url }})就是个例子。
2. **从纯数学过来的人最大的优势**：不会被一时的实验涨点带跑，会坚持问"为什么有效"。
3. **真正的 phenomenon-driven 研究既需要数学的纪律，也需要 hacker 的耐心**。两边都不能省。

我没有完全离开数学。我对组合公平性、对偶性、抽象格论的兴趣还在，只是它们现在以另一种方式出现 —— 出现在 *为什么这个 sufficient condition 把可行域砍小了*、*为什么这个 reduction 在 partial-order 下保持 valid* 这些问题里。

写给读到这里的别的本科生：**学科的边界比想象中模糊很多，你 18 岁时承诺的方向不一定是 22 岁时仍然在乎的事**。
不要把"专业认同"放在 "想做的研究" 之前。
