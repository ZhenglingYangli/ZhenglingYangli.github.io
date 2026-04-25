---
layout: page
permalink: /zh/life-news/
title: 生活动态
description: 学术之外的事 —— 书、地方、日常。
nav: false
---

<div class="news">
  {% assign all_news = site.news | sort: 'date' | reverse %}
  {% assign filtered = all_news | where: 'category', 'life' %}
  {% if filtered.size == 0 %}
    <p class="text-muted">📝 暂无内容。等学期忙完会陆续更。</p>
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
