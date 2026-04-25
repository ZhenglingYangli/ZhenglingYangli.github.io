---
layout: page
permalink: /life-news/
title: 近况
description: 学术活动、报告与生活上的更新。
nav: false
lang: zh
---

<div class="news-list">
  {% assign sorted_news = site.news | sort: 'date' | reverse %}
  {% assign filtered = sorted_news | where: 'category', 'life' %}
  {% if filtered.size == 0 %}
    <p class="text-muted">暂无内容。</p>
  {% else %}
    <ul class="news-list" style="list-style: none; padding-left: 0;">
      {% for item in filtered %}
        <li class="mb-3">
          <span class="news-date" style="color: var(--global-text-color-light);">
            {{ item.date | date: '%Y-%m-%d' }}
          </span>
          &nbsp;&middot;&nbsp;
          <strong>{{ item.title }}</strong>
          {% if item.content %}
            <div>{{ item.content | markdownify }}</div>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% endif %}
</div>
