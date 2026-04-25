---
layout: page
permalink: /zh/notes/
title: 过程思考
description: 长篇研究笔记 —— 现象、引理、值得追问的问题。
nav: false
---

<div class="post-list">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  {% assign filtered = sorted_posts | where_exp: 'p', "p.categories contains 'research'" %}
  {% if filtered.size == 0 %}
    <p class="text-muted">还没有研究笔记，关于 MWDS / DiverseSAT / UNB-MT 的第一批正在写。</p>
  {% else %}
    <ul class="post-list" style="list-style: none; padding-left: 0;">
      {% for post in filtered %}
        <li class="mb-4">
          <h3>
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="post-meta text-muted">
            {{ post.date | date: '%Y-%m-%d' }}
            {% if post.tags %} &middot; {% for t in post.tags %}<code>{{ t }}</code>{% unless forloop.last %} {% endunless %}{% endfor %}{% endif %}
          </p>
          {% if post.description %}
            <p>{{ post.description }}</p>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% endif %}
</div>
