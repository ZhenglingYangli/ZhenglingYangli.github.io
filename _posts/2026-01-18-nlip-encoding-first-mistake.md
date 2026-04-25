---
layout: post
title: "我交给老师的第一份 NLIP 编码方案是错的（关于 unsigned vs signed 的本科生 1A 错误）"
date: 2026-01-18 22:00:00
description: "把 x*y 编进 SAT 听起来很简单：把变量按二进制位拼起来做 partial-product，再 carry。我是这么写的，第一个 instance 就给出了错答案。"
tags: research nlip maxsat encoding
categories: research
---

#### 时间线

- 周三晚：导师让我尝试把 QPLIB 里一个小 quadratic program 编码成 weighted MaxSAT。
- 周五下午：我交了第一版 BIN encoding（把整数变量按 binary bits 编，乘法用 partial-product + carry chain）。
- 周五下午 16:30：跟 Z3 对比，**第一个 instance 的目标值就差了一截**。

我一开始以为 Z3 的 nonlinear 模块跟我们的 reformulation 不等价。dump CNF、手算了一个 6-bit × 6-bit 的乘法，全对。
也试过把 Z3 的 partial assignment 拿过来代回去 —— 它的解满足约束，我的解也满足约束，但目标值差了**符号**。

#### 我犯的错

我把整数变量当 unsigned 编了，但 QPLIB 里有些变量的下界是负的。

partial-product 这一步本身没错，错的是我没做 Booth recoding：当负数以 two's complement 表示，普通的 partial-product 会把它当成一个很大的正数处理，乘法结果整体偏大。CMU 编译/数字逻辑课里非常 1A 的内容，我以为我懂，写的时候没在意。

#### 为什么这件事让我有点沮丧

我有数学背景，所以一开始的态度是「编码这种事，理解了变量域 + 一个 multiplication 怎么 lift 到 CNF 上，写起来就是一个工程问题」。结果是被一个本科 1A 课的细节卡了 8 个小时。

我的真正错误不是 partial-product 算错，而是**把"我以为我懂"当成了"我会写"**。这之后我做了三件事：

1. 把每个 encoding 的正确性单独写一个最小测试集（5 个手算可验证的小 instance），跑通这个再投放到 benchmark 上。
2. 在内部写了一份《encoding 选型表》—— 哪种编码在哪种问题结构下表现好（OH 适合 small-domain，UNA 在 cardinality 主导的约束上简单，BIN 适合 wide-domain 但要小心乘法 / 符号），不再追求一种"通吃"的方案。
3. 重新读了一遍 Bryant 的 *Logic in Computer Science* 第 11 章 —— 这本书我大二上学期就买了，一直没翻完。

#### 写给将来的自己

> 数学背景能让你想清楚问题，但不能替你跑通代码。
> 写编码这种事，越是觉得 trivial 越要做最小测试。

更新：现在的 BIN encoding 跑过了 60% 的 QPLIB 子集，对 binary variables 有更好的 LP relaxation 行为。OH/UNA/BIN/Order-Decomposition 四种方案的对比放到 [项目页]({{ '/projects/3_nlip/' | relative_url }}) 里。
