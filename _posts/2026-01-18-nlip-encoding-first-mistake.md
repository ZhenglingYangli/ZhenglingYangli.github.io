---
layout: post
title: "BIN encoding 中负数变量与 partial-product 的一个被忽略的细节"
date: 2026-01-18 22:00:00
description: "把整数变量按二进制位编入 SAT 时，partial-product 形式的乘法在变量取值有负下界时不能直接使用。本文说明这一问题在 QPLIB 一类 instance 上的具体表现，并给出基于 Booth recoding 的修正。"
tags: research nlip maxsat encoding
categories: research
---

## 设置

在 NLIP via MaxSAT 项目中，需要把多项式整数规划（QPLIB / SMT-LIB QF\_NIA）编码为加权 MaxSAT。我们考虑过四种编码（OH / UNA / BIN / Order-Decomposition），其中 *BIN encoding* 把每个整数变量 $x \\in [\\ell, u]$ 表示为 $\\lceil \\log_2 (u - \\ell + 1) \\rceil$ 位布尔，并通过 partial-product 与 carry chain 实现乘法。

BIN encoding 的常见实现假设 $x \\ge 0$，即变量按 *unsigned* 位形式表示。在 $\\ell < 0$ 的实例上，需要选择某种二进制补码或 sign–magnitude 表示，并在乘法步骤中相应处理符号。对此处理不当会在 $xy$ 项上引入符号错误，且这一错误并不在常规 sanity check 中被自然暴露。

## 表现

在 QPLIB 中规模较小的若干 quadratic instance 上，使用未做符号处理的 BIN encoding 跑通 RC2，并将所得 assignment 代入原始多项式目标，观察到与 Z3 / CPLEX 给出的最优解之间存在偏差。具体表现为：

- 对 $x \\ge 0$ 的 sub-instances，目标值与 Z3 完全一致；
- 对至少一个变量 $x$ 满足 $\\ell < 0$ 的 instances，目标值系统性地偏大，偏差在原始多项式中能被定位到含 $xy$（其中至少一项可负）的子项。

把 partial-product 的 CNF dump 出来，逐位手算 6-bit × 6-bit 的乘积，正确性无误；进一步把 Z3 的 partial assignment 代回 SAT 模型，验证约束全部满足。这两点说明：CNF 编码本身在 $x \\ge 0$ 的语义下是正确的，问题出在 **变量符号约定** 与 **乘法子例程之间的接口**。

## 错误的乘法实现

设变量 $x, y \\in [\\ell, u]$ 以二进制补码（two's complement）表示为
$x = -2^{n-1} x_{n-1} + \\sum_{k=0}^{n-2} 2^k x_k$，则 $x \\cdot y$ 的正确二进制实现要么在乘积中使用符号扩展（sign extension），要么使用 Booth recoding 以避免逐位生成完整的 $2n$-bit partial product。

我们最初的实现把 $x, y$ 当作 unsigned 处理：将 $x_k, y_k$ 直接相与得到 partial product $p_{ij} = x_i \\wedge y_j$，再按 $\\sum_{i,j} 2^{i+j} p_{ij}$ 累加。该实现对 $x, y \\ge 0$ 是正确的，但在 $x_{n-1} = 1$（即 $x < 0$，二进制补码下）时，最高位的权重应为 $-2^{n-1}$ 而非 $+2^{n-1}$；该负权重在 unsigned 实现里被静默地翻转。

## 修正

修正方案有两条等价路径：

1. **Sign extension**：把 $x, y$ 各扩展为 $2n$-bit，令上 $n$ 位等于符号位 $x_{n-1}$（同样地 $y$），再做 unsigned partial product 累加。该方案概念清晰，但代价是 partial product 数量从 $n^2$ 增至 $4n^2$。
2. **Booth recoding**（Booth, 1951）：把 $y$ 的 bit pair $\\langle y_{2k+1}, y_{2k}, y_{2k-1}\\rangle$ 映为 $\\{-2, -1, 0, +1, +2\\}$ 的乘子，乘到 $x$ 上后累加。该方案 partial product 数量为 $\\lceil n/2 \\rceil$，且天然处理负权重。

我们最终采用 Radix-4 Booth recoding，配合 Wallace-tree 风格的累加。修正后，QPLIB 在 $\\ell < 0$ 的子集上 BIN encoding 的目标值与 Z3 一致。

## 一些后续做的工程化处理

在该 bug 之后，BIN encoding 的实现引入了三个常驻检查：

- **最小自验证集**：每种编码维护一个含 5 条手算可验证小实例的 self-test，编码任何变更后必须通过；
- **跨编码比对**：在 OH / UNA / BIN / DECOMP 之间建立同一 instance 的目标值比对脚本，发生不一致时报警；
- **Solver 双向校验**：对小规模 instances，把 RC2 的 output assignment 同时送进 CPLEX 与 Z3 验算原始目标。

这三项检查在后续的 BIN encoding 调优中先后捕获过两次符号相关的 regression，是事后看必要的工程化代价。

## 引用

```bibtex
@misc{yangli2026binencoding,
  title={BIN encoding 中负数变量与 partial-product 的一个被忽略的细节},
  author={Yangli, Zhengling},
  journal={Zhengling Yangli's Blog},
  year={2026},
  url={https://zhenglingyangli.github.io/blog/2026/nlip-encoding-first-mistake/}
}
```
