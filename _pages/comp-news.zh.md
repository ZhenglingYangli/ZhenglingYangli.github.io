---
layout: page
permalink: /zh/comp-news/
title: 比赛动态
description: 比赛、竞赛与应用项目的进展更新。
nav: false
---

<div class="news">
  {% assign all_news = site.news | sort: 'date' | reverse %}
  {% assign filtered = all_news | where: 'category', 'competition' %}
  {% if filtered.size == 0 %}
    <p class="text-muted">暂无比赛相关动态。</p>
  {% else %}
    <table class="table table-sm table-borderless">
      {% for item in filtered %}
        <tr>
          <th scope="row" style="width: 20%">{{ item.date | date: '%Y-%m-%d' }}</th>
          <td>
            {% if item.inline %}
              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
            {% else %}
              <a class="news-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
            {% endif %}
          </td>
        </tr>
      {% endfor %}
    </table>
  {% endif %}
</div>
