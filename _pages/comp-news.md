---
layout: page
permalink: /comp-news/
title: 比赛动态
description: 数学建模、统计建模、华为软件精英挑战赛、计图人工智能等比赛的进展记录。
nav: false
lang: zh
---

<div class="news-list">
  {% assign sorted_news = site.news | sort: 'date' | reverse %}
  {% assign filtered = sorted_news | where: 'category', 'competition' %}
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
