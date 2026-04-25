---
layout: page
permalink: /opinions/
title: 观点
description: 关于研究方向选择、阅读与学习方式的随笔。
nav: false
lang: zh
---

<div class="post-list">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  {% assign filtered = sorted_posts | where_exp: 'p', "p.categories contains 'opinion'" %}
  {% if filtered.size == 0 %}
    <p class="text-muted">暂无内容。</p>
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
