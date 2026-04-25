---
layout: page
title: MathRAG
description: 检索增强的分步数学问题求解系统
img: assets/img/5.jpg
importance: 5
category: research
related_publications: true
---

## 概述

**MathRAG** 是一个面向分步数学问题求解的检索增强（RAG）系统。它把一个**数学专用的 retriever**（基于 DeepSeek-Math 语料）与 chain-of-thought 解题生成、step-level 验证三者串成一个端到端管线。

## 管线

```
Problem (LaTeX / 自然语言)
      │
      ▼
  Problem Comprehension （自然语言 + LaTeX 解析）
      │
      ▼
  Retriever （BM25 + math-aware embedding；保留 LaTeX）
      │
      ▼
  CoT Answer Generator （Qwen2-Math / DeepSeek-Math 后端）
      │
      ▼
  Step Verification （semantic + algebraic 校验，反幻觉）
      │
      ▼
  Final Answer （LaTeX 渲染，多轮对话）
```

## 关键技术

- **RAG 管线**：相关知识块向量检索 → prompt context 注入；
- **Qwen2-Math 后端**：数学专用 LLM，支持复杂推理；
- **前端实时 LaTeX 渲染**；
- **多轮对话**：会话记忆，支持追问；
- **反幻觉层**：retrieval-grounded 输出降低编造。

## 结果

| Benchmark | 准确率 |
| --------- | ------ |
| GSM8K     | ~94%   |
| MATH      | ~89%   |

端到端可复现的完整系统：前端 `mathfront`（Vue），后端 `mathqa`（Node.js + Redis）。

## 现状

课程 / 研究项目，报告撰写中。配套材料：`2025-02-10 阅读报告`、`2025-02-15 阅读 PPT`，2025-02-25 与 2025-03-05 的会议纪要。
