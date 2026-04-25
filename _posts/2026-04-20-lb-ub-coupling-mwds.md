---
layout: post
title: "LB 紧了 30%，#opt 却没动 —— 我才明白指标不是同质的"
date: 2026-04-20 21:00:00
description: "AntQO 在 ECAI-2025 基线上的一个困惑：把 Ant-Q 插进 LB 端之后，relative gap 一路下跌（Deep 上 −23.7% 至 −31.2%），但 #opt / #min 却几乎不动。一开始我以为是 bug，后来才意识到这是 Dual-Bound Search 框架的结构性属性。"
tags: research mwds antqo
categories: research
---

#### 我犯的最低级的一个错

实验跑完之后我兴奋地去找老师汇报：「Ant-Q 把 LB 端的 gap 砍了 30%。」

老师的第一反应是问：「那 `#opt` 多了几个？」我看了眼表 —— 几乎没动。

接下来三天我一直在 debug，怀疑是不是 reduction 接口被 Ant-Q 的随机性破坏了，怀疑信息素更新在某个边界情况下溢出，甚至怀疑是不是把 baseline 的 random seed 漏了。最后发现，**根本不是 bug，是我对三个指标的理解错了**。

#### 三个指标，三种对 LB 的敏感度

慢下来重新写：

- `avg gap = (UB − LB) / LB` 是一个**比值**。LB 抬升会同时缩小分子、放大分母，gap *永远*受益。
- `#opt` 要求 `LB ≡ UB`。光抬 LB 没用，得 UB 也跟着掉，否则差几个就是几个。
- `#min` / `#avg` 只是 UB 的统计，**完全不看 LB**。

也就是说，「Ant-Q 没用」不是结论；正确的结论是：**Ant-Q 在动 LB，而三个指标对 LB 的反应根本不一样**。

#### LB → UB 的耦合通道

那 LB 收紧到底通过什么通道才能改 UB？

在 IDCLB+DBS 框架下，LB 影响 UB 的唯一通道是**硬证明规则**（`v_State = Fixed / Deleted`）。
也就是说，一个数值上更紧的 LB，如果它没多 *触发* 一条 Reduction / Deletion 规则，它就不会传到 UB。

我现在的 Ant-Q 插件只是在 pair 构造里把 LB 的数值往上抬。它没有提高 `Fixed` / `Deleted` 触发的频率。所以 gap 好看是必然的、`#opt` 不动也是必然的。

#### 接下来打算怎么改

最便宜的修法是 Tight-pair → Forced-Fix（Route I）：当蚂蚁产出的 pair 落到 `bound ratio ≈ 1` 的区域时，把下一步 LB-tightening 的方向偏向那个真正能触发 reduction 的 state transition，让 LB 端的「数值变化」转化为 UB 端的「规则触发」。

#### 写给 6 个月前的自己

- 别用 `avg gap` 当万能指标，比值类的指标会美化所有让分母变大的改动。
- 「LB 变紧」不是「方法变好」，先问一句：紧到哪里了？通过什么通道传到我真正在乎的指标？
- 实验异常先怀疑自己的指标定义，再怀疑代码。

*内部报告：2026-04-24。更多数据放在 [MWDS 项目页]({{ '/projects/1_mwds/' | relative_url }})。*
