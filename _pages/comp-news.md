---
layout: page
permalink: /comp-news/
title: competition updates
description: Updates from competitions, contests, and applied projects.
nav: false
---

<div class="news">
  {% assign all_news = site.news | sort: 'date' | reverse %}
  {% assign filtered = all_news | where: 'category', 'competition' %}
  {% if filtered.size == 0 %}
    <p class="text-muted">No competition updates here yet.</p>
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
