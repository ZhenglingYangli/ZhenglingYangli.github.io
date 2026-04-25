---
layout: post
title: "从代数几何到 MaxSAT 求解：研究兴趣转向的若干背景"
date: 2026-04-14 11:00:00
description: "记录一段研究兴趣的转向过程：从最初的代数几何 / Galois cohomology 偏好，到目前的组合优化与 MaxSAT 求解。这种转向并非取代关系，而是观察到 closed system 与 open system 在研究反馈结构上的不同后所做的方向调整。"
tags: research career maxsat
categories: opinion
---

## 起点

进入大学时的研究偏好停留在代数几何与代数数论的方向，尤其是 Galois cohomology 与 étale 方面。这一偏好部分受经典文献影响（Hartshorne、Milne 的 lecture notes），部分受高中阶段对"概念间内部一致性"的偏爱影响。在该框架下，研究问题的成立与否、解答的正确与否，都可在公理体系内部的有限步骤中确定。

## 一次具体观察

大一暑期参与一个组合优化方向的小项目（MWDS 的 reduction 分析）。在该项目中遇到的核心问题之一可表述为：给定一个 reduction $r$，能否预测它在 BHOSLIB 这一类难 instance 上对 UB 的实际收紧？此时我能给出 $r$ 在抽象层面对 LB 的单调性证明，但无法给出对 *经验* UB 行为的预测。该问题的答案不是从 $r$ 的形式定义中导出的，它依赖 instance 分布、求解器实现、缓存层级、时间预算这些 *外生* 因素。

由此意识到的不仅是"理论结论与实验结果之间存在 gap"——这早就清楚——而是**两类研究问题在反馈结构上是不同的**：

- *Closed system* 问题（典型为代数几何中的某一证明）：判定准则在公理系统内部，正确性可在有限步骤内确认。
- *Open system* 问题（典型为算法在真实 instance 分布上的行为）：判定准则部分位于系统外部（数据分布、硬件、时间），需要不断与外部信号对照。

当时的判断是：自己更适合做 open system 类型的问题。这并非价值判断，而是关于研究反馈节奏的偏好——open system 中"小动作 → 立刻看到反馈"的循环更短，更容易支撑长期投入。

## 为什么是 MaxSAT

在 open system 内部仍有许多分支可选。MaxSAT 求解之所以成为目前的主线，原因有以下三点：

- **理论与实证并存**：MaxSAT 同时具备清晰的近似界 / 硬度结果与活跃的实证算法社区。Bonet–Levy 的 *Logic in Computer Science* 第 11 章给出对 SAT 的形式化处理，Marques-Silva 的综述梳理了现代 CDCL 的实证演进。两者并存意味着可以在同一个问题上两边走。
- **底层结构清晰**：CNF 这一表示形式简单到可以直接讨论 propagation 与 conflict learning，但又足以表达大量组合问题（dominating sets, integer programs, model counting 等）。这种底层简洁性降低了"理论与实现之间转换"的成本。
- **基线竞争激烈**：现代 SAT / MaxSAT 求解器（kissat、CASHWMaxSAT、WMaxCDCL 等）在实证基准上的差距足够小，新方法的 marginal contribution 必须在相同 setting 下严格证明，避免出现"看似有效但取决于 hyperparameter"的退化。

这三点共同决定 MaxSAT 是一个**"小动作能被严格判定"**的研究方向。

## 当前的工作

按这一判断，目前的研究主线集中在四个方向：

- 多样性枚举的 SAT 编码（DiverseSAT，[项目页]({{ '/projects/2_diversesat/' | relative_url }})）；
- 非线性整数规划的 MaxSAT 编码（[项目页]({{ '/projects/3_nlip/' | relative_url }})）；
- MWDS 下界搜索的 RL 强化（AntQO，[项目页]({{ '/projects/1_mwds/' | relative_url }})）；
- 多资源公平分配（UNB-MT，[项目页]({{ '/projects/4_fair-ratio/' | relative_url }})）。

这四个方向并非完全独立。它们在底层都涉及"如何在带组合内核的优化问题上，将一个 well-defined 的数学结构嵌入到现代求解器的 conflict learning 与 reduction 系统中"。从分析方法来看，依然能用到代数 / 数论训练遗留的部分纪律（关注 sufficient condition 是否过强、关心 reduction 的 closure 性质等），只是现在它们以不同形态出现。

## 一句不算总结的话

研究方向转向并不要求对原方向的全盘否认。代数几何为我提供了对 *正确性* 的标准；现在把这一标准用在不同的对象上。

## 引用

```bibtex
@misc{yangli2026switch,
  title={从代数几何到 MaxSAT 求解：研究兴趣转向的若干背景},
  author={Yangli, Zhengling},
  journal={Zhengling Yangli's Blog},
  year={2026},
  url={https://zhenglingyangli.github.io/blog/2026/why-i-switched-from-pure-math-to-maxsat/}
}
```
