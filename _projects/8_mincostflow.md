---
layout: page
title: 供应链最小费用流
description: 用最小费用网络流做供需分配
img: assets/img/8.jpg
importance: 8
category: applied
---

## 问题

给定 $m$ 个仓库与 $n$ 家门店及单位运费矩阵，在满足供给与需求的前提下最小化总运输成本。

## 方法

把问题建模为二部图上的**最小费用流**，调用 NetworkX 的多项式时间算法求解，并对流网络与运费热力图做可视化。

## 案例

一个 **3 仓库 × 4 门店** 的实例最优总成本 **¥7600**。代码支持任意 $(m, n)$ 规模，输出可发表级别的可视化（`networkx`、`matplotlib`、`seaborn`）。

## 技术栈

Python 3.8+、NetworkX、NumPy、Matplotlib、Seaborn、Pandas。
