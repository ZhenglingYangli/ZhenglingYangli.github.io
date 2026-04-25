---
layout: page
permalink: /notes/
title: 过程思考
description: 长文研究笔记 —— 现象、引理、踩过的坑，以及那些"现在回头看显然，但当时没看出来"的瞬间。
nav: false
lang: zh
---

<p>
这一栏不是已发表论文的对外摘要，而是我在做研究过程中对自己的复盘：哪些直觉对了、哪些猜错了、哪些是被一个看起来"很合理"的引理诓了一个月。
我尽量按时间顺序保留思考的"未完成态"，因为我相信对学生研究者而言，最有价值的不是结论，而是结论是怎么一步步从含糊的直觉里被逼出来的。
</p>

<div class="post-list">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  {% assign filtered = sorted_posts | where_exp: 'p', "p.categories contains 'research'" %}
  {% if filtered.size == 0 %}
    <p class="text-muted">还在整理，第一批围绕 MWDS、DiverseSAT、UNB-MT 的笔记会陆续放出来。</p>
  {% else %}
    <ul class="post-list" style="list-style: none; padding-left: 0;">
      {% for post in filtered %}
        <li class="mb-4">
          <h3>
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="post-meta text-muted">
            {{ post.date | date: '%Y 年 %-m 月 %-d 日' }}
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
