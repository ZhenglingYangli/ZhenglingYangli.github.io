---
layout: page
permalink: /zh/opinions/
title: 观点
description: 个人随笔 —— 关于学习、研究节奏与方法论。
nav: false
---

<div class="post-list">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  {% assign filtered = sorted_posts | where_exp: 'p', "p.categories contains 'opinion'" %}
  {% if filtered.size == 0 %}
    <p class="text-muted">📝 暂无文章。计划写的话题包括：<em>"为什么我从纯数学转到 MaxSAT"</em>、<em>"重新思考一个本科生研究年度的节奏"</em>。</p>
  {% else %}
    <ul class="post-list" style="list-style: none; padding-left: 0;">
      {% for post in filtered %}
        <li class="mb-4">
          <h3>
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="post-meta text-muted">{{ post.date | date: '%Y-%m-%d' }}</p>
          {% if post.description %}
            <p>{{ post.description }}</p>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% endif %}
</div>
