---
layout: page
permalink: /life-news/
title: 生活动态
description: 学业之外的日常 —— 读书、出行、生活感受。
nav: false
lang: zh
---

<div class="news">
  {% assign all_news = site.news | sort: 'date' | reverse %}
  {% assign filtered = all_news | where: 'category', 'life' %}
  {% if filtered.size == 0 %}
    <p class="text-muted">📝 这里暂时是空的，等学期收尾以后会慢慢补上。</p>
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
