---
layout: page
permalink: /life-news/
title: life updates
description: Non-academic happenings — books, places, daily life.
nav: false
---

<div class="news">
  {% assign all_news = site.news | sort: 'date' | reverse %}
  {% assign filtered = all_news | where: 'category', 'life' %}
  {% if filtered.size == 0 %}
    <p class="text-muted">📝 Nothing posted here yet — life-side updates will start to land once the term winds down.</p>
  {% else %}
    <table class="table table-sm table-borderless">
      {% for item in filtered %}
        <tr>
          <th scope="row" style="width: 20%">{{ item.date | date: '%b %d, %Y' }}</th>
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
