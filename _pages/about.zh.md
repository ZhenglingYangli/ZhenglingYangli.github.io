---
layout: about
title: 关于
permalink: /zh/
lang: zh
subtitle: >
  云南大学 统计学 本科生 · 2024 级
  <br/>
  组合优化 · SAT / MaxSAT · 公平资源分配
  <br/>
  <a class="btn btn-sm btn-outline-primary mt-2" href="{{ '/cv/' | relative_url }}">
    <i class="fa-solid fa-file-lines"></i> 完整简历
  </a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <p>数学与统计学院</p>
    <p>云南大学</p>
    <p>昆明, 云南</p>

news: true
latest_posts: true
selected_papers: true
social: true
---

杨李正凌（Zhengling Yangli），云南大学数学与统计学院统计学专业 2024 级本科生。

主要研究方向是组合优化与 Boolean satisfiability 求解，具体地：SAT/MaxSAT 多样性枚举、非线性整数规划的 MaxSAT 编码、最小加权支配集的下界搜索强化、以及多资源公平分配中带 partial-access 的扩展机制。在方法上偏好从具体的实验异常出发，先尝试在第一性原理层面给出机制解释，再据此设计后续干预，而不是直接在大规模 hyperparameter 搜索上寻找经验拟合。

#### Research Map

<div class="research-map">
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div class="col">
      <div class="research-card">
        <p class="research-card-kicker">SAT / MaxSAT</p>
        <h5>多样性解与整数编码</h5>
        <p><strong>核心问题：</strong>如何把“找一个可行解”推进到“找一组结构上足够不同的可行解”？</p>
        <p><strong>代表结果：</strong>DiverseSAT 使用 DW / IW 阈值编码，在 7 个 benchmark 家族 289 个 instance 上系统比较 MaxSAT、PB 与 CPLEX 基线；NLIP 项目进一步把 QPLIB 与 SMT-LIB QF\_NIA 编码到加权 MaxSAT。</p>
        <p class="research-card-links">
          <a href="{{ '/projects/2_diversesat/' | relative_url }}">DiverseSAT</a>
          <span>·</span>
          <a href="{{ '/projects/3_nlip/' | relative_url }}">NLIP via MaxSAT</a>
        </p>
      </div>
    </div>
    <div class="col">
      <div class="research-card">
        <p class="research-card-kicker">MWDS</p>
        <h5>下界搜索与 Dual-Bound Search</h5>
        <p><strong>核心问题：</strong>LB 端数值收紧之后，怎样真正通过硬证明规则传到 UB 端？</p>
        <p><strong>代表结果：</strong>在 ECAI 2025 baseline 上接入 Ant-Q 后，`Deep-v6` 的 row-averaged gap 下降 23.7%–31.2%，并定位到 LB 收紧与 `#opt` 脱耦的结构性原因。</p>
        <p class="research-card-links">
          <a href="{{ '/projects/1_mwds/' | relative_url }}">AntQO for MWDS</a>
          <span>·</span>
          <a href="{{ '/blog/2026/lb-ub-coupling-mwds/' | relative_url }}">关联笔记</a>
        </p>
      </div>
    </div>
    <div class="col">
      <div class="research-card">
        <p class="research-card-kicker">Fair Allocation</p>
        <h5>partial-access 下的公平分配</h5>
        <p><strong>核心问题：</strong>在 meta-type 资源可访问集不同的场景下，能否在保留核心公平性约束的同时提升社会福利？</p>
        <p><strong>代表结果：</strong>UNB-MT 在 DRF-MT 基础上按 dominant meta-type 差异化 dominant share，并发现线性 EF 充分条件在 partial-access 下会过度收紧真实公平区域。</p>
        <p class="research-card-links">
          <a href="{{ '/projects/4_fairmt/' | relative_url }}">UNB-MT</a>
          <span>·</span>
          <a href="{{ '/blog/2026/unb-mt-why-lemma-2-is-too-loose/' | relative_url }}">关联笔记</a>
        </p>
      </div>
    </div>
    <div class="col">
      <div class="research-card">
        <p class="research-card-kicker">Applied Projects</p>
        <h5>从真实数据到可复现实验</h5>
        <p><strong>核心问题：</strong>当数据来自真实场景而非干净 benchmark 时，怎样保留可解释的建模管线？</p>
        <p><strong>代表结果：</strong>MathRAG、昆明咖啡外卖市场分析、正念 EEG 与最小费用流项目分别覆盖检索增强推理、平台数据分析、可穿戴信号与网络流建模。</p>
        <p class="research-card-links">
          <a href="{{ '/projects/#applied' | relative_url }}">应用项目</a>
          <span>·</span>
          <a href="{{ '/projects/5_mathrag/' | relative_url }}">MathRAG</a>
        </p>
      </div>
    </div>
  </div>
</div>

研究过程中的笔记与误判修正记录在 [过程思考]({{ '/notes/' | relative_url }}) 一栏。

联系方式以邮件为主。
