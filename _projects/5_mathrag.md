---
layout: page
title: MathRAG
description: Retrieval-Augmented Step-wise Mathematical Problem Solving
img: assets/img/project_mathrag.png
importance: 5
category: research
related_publications: true
---

## Overview

**MathRAG** is a retrieval-augmented pipeline for step-wise mathematical problem solving. It couples a **math-specific retriever** (DeepSeek-Math corpus) with chain-of-thought solution generation and step-level verification.

## Pipeline

```
Problem (LaTeX / natural language)
      │
      ▼
  Problem Comprehension  (natural-language + LaTeX parsing)
      │
      ▼
  Retriever  (BM25 + math-aware embedding; LaTeX-preserving)
      │
      ▼
  CoT Answer Generator  (Qwen2-Math / DeepSeek-Math backbone)
      │
      ▼
  Step Verification  (semantic + algebraic check, anti-hallucination)
      │
      ▼
  Final Answer  (LaTeX rendered, multi-turn dialogue)
```

## Key techniques

- **RAG pipeline**: vector retrieval of relevant knowledge chunks → prompt context injection.
- **Qwen2-Math backbone**: math-specialized LLM supporting complex reasoning.
- **Real-time LaTeX rendering** on the frontend.
- **Multi-turn dialogue**: conversational memory for follow-ups.
- **Anti-hallucination layer**: retrieval-grounded answers reduce fabrication.

## Results

| Benchmark | Accuracy |
| --------- | -------- |
| GSM8K     | ~94%     |
| MATH      | ~89%     |

Reproducible end-to-end pipeline. Complete system with frontend (`mathfront`, Vue) and backend (`mathqa`, Node.js + Redis).

## Status

Course / research project; report in preparation. Supporting materials: `2025-02-10 reading report`, `2025-02-15 reading PPT`, meeting minutes on 2025-02-25 and 2025-03-05.
