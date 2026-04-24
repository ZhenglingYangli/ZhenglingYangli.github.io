---
layout: page
title: Min-Cost Flow for Supply Chain
description: Graph-theoretic Supply-Demand Allocation Using Minimum-Cost Network Flow
img: assets/img/project_mincostflow.png
importance: 8
category: applied
---

## Problem

Given $m$ warehouses and $n$ stores with per-unit transport costs, dispatch inventory to minimize total cost subject to supply and demand constraints.

## Approach

Model as a **minimum-cost flow** problem on a bipartite graph, solve via NetworkX's polynomial-time algorithm, and visualize both the flow network and a cost heatmap.

## Case Study

A **3-warehouse × 4-store** instance reached the optimal total cost of **¥7600**. The implementation supports arbitrary $(m, n)$ and produces publication-ready visualizations (`networkx`, `matplotlib`, `seaborn`).

## Stack

Python 3.8+, NetworkX, NumPy, Matplotlib, Seaborn, Pandas.
