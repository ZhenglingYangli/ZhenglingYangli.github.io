---
layout: page
permalink: /notes/
title: 过程思考
description: 长文研究笔记，记录在做研究过程中遇到的现象、错误估计、以及对引理或方法假设的修正。
nav: false
lang: zh
---

<p>
本栏不是论文摘要的对外版本。它收集的是研究过程中需要长篇展开才能讲清的具体问题：某个观察现象的机制解释、某个充分条件为何在边界情形下失效、某次实验异常的来源诊断。
按时间倒序排列。
</p>

<div class="post-list">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  {% assign filtered = sorted_posts | where_exp: 'p', "p.categories contains 'research'" %}
  {% if filtered.size == 0 %}
    <p class="text-muted">尚无内容。</p>
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
