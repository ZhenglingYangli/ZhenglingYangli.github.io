---
layout: post
title: "Dual-Bound Search 中 LB 数值收紧与 #opt 的脱耦"
date: 2026-04-20 21:00:00
description: "在 ECAI 2025 基线 Dual-Deep / Dual-Fast 上插入 Ant-Q 后，relative gap 普遍下降 23.7%–31.2% (Deep)，但 #opt 与 #min 几乎不动。这一现象不是 bug，而来自 Dual-Bound Search 框架中 LB 与 UB 之间唯一的耦合通道：硬证明规则。"
tags: research mwds antqo
categories: research
---

## 现象

在两套 MWDS 测试集 T1 / T2（合计约两千行 paired 样本）上，把 $K$-蚂蚁的 Ant-Q 模块插入 `ibmwds_init_bounds` 的 LB 端，相对于 ECAI 2025 baseline 得到如下结果：

|                              | Deep-v6 vs Dual-Deep        | Fast-v19 vs Dual-Fast      |
| ---------------------------- | --------------------------- | -------------------------- |
| Row-averaged gap ↓           | $-23.68\\% \\,/\\, -31.23\\%$ | $-6.92\\% \\,/\\, -9.89\\%$  |
| Per-instance win-rate (gap)  | $99.34\\% \\,/\\, 99.37\\%$   | $66.86\\% \\,/\\, 63.85\\%$  |
| `#opt` 改变量                | $\\approx 0$                  | $\\approx 0$                |
| `#min` 改变量                | $\\approx 0$                  | $\\approx 0$                |

`gap` 下降幅度很大，但表征"严格已知最优"的 `#opt` 与 UB 质量本身的 `#min` 几乎不变。第一反应是怀疑实现：`reduction` 接口被 Ant-Q 的随机性破坏、信息素更新中的边界溢出、随机种子未对齐等。逐一排查之后这些怀疑都不成立，问题并不在实现。

## 三类指标对 LB 的不同敏感度

把三个指标重新写出来即可看出差别：

- $\text{avg gap}(\\text{LB}, \\text{UB}) = (\\text{UB} - \\text{LB}) / \\text{LB}$。在 $\\text{UB}$ 不变的前提下，$\\text{LB}$ 的任何上抬都会同时缩小分子、放大分母，因此 `gap` 对 $\\text{LB}$ 的导数恒为负，即任何数值层面的 LB 收紧都会被 `gap` 反映出来。
- $\\#\\text{opt}$ 是判别量 $[\\text{LB} \\equiv \\text{UB}]$ 的累加，仅在 $\\text{LB}$ 上抬到与 $\\text{UB}$ *完全相等* 时才发生 0–1 跃迁。这一指标对 LB 的敏感度本质上是离散的。
- $\\#\\text{min}, \\#\\text{avg}$ 是 UB 的统计量，与 LB 无关。

也就是说，`gap` 的下降并不能蕴含 `#opt` 或 `#min` 的改变；前者反映 LB 数值层面的收紧，后两者要求 LB 的收紧必须**触发某种使 UB 也发生变化的事件**。

## LB 通往 UB 的唯一通道

在 IDCLB+DBS 框架下，LB 与 UB 之间唯一的耦合通道是硬证明规则，即顶点状态的 `Fixed` 与 `Deleted` 转换。具体而言：

- 当某顶点 $v$ 被规则证明必属于最优支配集时（`v_State = Fixed`），UB 端搜索的解空间被剪枝。
- 当 $v$ 被证明永不需出现在最优解中时（`v_State = Deleted`），同样发生剪枝。

LB 的数值变化并不直接送给 UB 子例程；UB 接收到的是这两类硬证明的累积结果。换言之，一个数值上更紧的 LB，若不能多触发一条上述规则，对 UB 是不可见的。

当前的 Ant-Q 插件在 pair 构造阶段通过强化学习抬升 LB 的数值，但并未显著提高这两类 state transition 的触发频率。从而 `gap` 大幅改善而 `#opt` 几乎不动是结构上必然的结果，而不是 RL 训练失效的征兆。

## 下一步：Tight-pair → Forced-Fix

围绕"如何让 LB 端的数值改善真正传到 UB"这一问题，目前最便宜的修法是设计 *Tight-pair → Forced-Fix* 路径（路线 I）：当 ants 产出的 pair 触及 $\\text{bound ratio} \\to 1$ 区域时，将下一步 LB 收紧的 state transition 偏向于能触发 reduction 的方向。这相当于把"多样性 + 价值"形式的 RL 信号再叠加上"是否触发硬规则"的额外回报项。

更激进的路线还有两条：(II) 直接在 UB 端引入 ACO 探索；(III) 增加 DBS 的额外迭代轮数以让现有的 LB 改善有更多机会被规则吸收。这两条目前优先级低于路线 I，因为它们改动了基线的搜索结构，不便与 ECAI 2025 baseline 做严格对照。

更详细的版本演进与每个变体的参数表见 [MWDS 项目页]({{ '/projects/1_mwds/' | relative_url }})。

## 引用

如果你需要引用本文，请使用：

```bibtex
@misc{yangli2026lbub,
  title={Dual-Bound Search 中 LB 数值收紧与 \#opt 的脱耦},
  author={Yangli, Zhengling},
  journal={Zhengling Yangli's Blog},
  year={2026},
  url={https://zhenglingyangli.github.io/blog/2026/lb-ub-coupling-mwds/}
}
```
