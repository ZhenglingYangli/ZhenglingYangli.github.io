---
layout: page
permalink: /opinions/
title: 观点
description: 关于学习、读书与科研生活的随笔。
nav: false
lang: zh
---

<div class="post-list">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  {% assign filtered = sorted_posts | where_exp: 'p', "p.categories contains 'opinion'" %}
  {% if filtered.size == 0 %}
    <p class="text-muted">📝 这里暂时还没有文章。计划写的两个题目：<em>"我为什么从纯数学转到 MaxSAT"</em>，以及 <em>"重新审视一年本科科研的节奏"</em>。</p>
  {% else %}
    <ul class="post-list" style="list-style: none; padding-left: 0;">
      {% for post in filtered %}
        <li class="mb-4">
          <h3>
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="post-meta text-muted">{{ post.date | date: '%Y 年 %-m 月 %-d 日' }}</p>
          {% if post.description %}
            <p>{{ post.description }}</p>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% endif %}
</div>
