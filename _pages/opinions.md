---
layout: page
permalink: /opinions/
title: opinions
description: Personal essays — reflections on study, research life, and learning habits.
nav: false
---

<div class="post-list">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  {% assign filtered = sorted_posts | where_exp: 'p', "p.categories contains 'opinion'" %}
  {% if filtered.size == 0 %}
    <p class="text-muted">📝 No essays here yet. Planned topics include <em>"why I switched from pure-math to MaxSAT"</em> and <em>"rethinking the rhythm of an undergraduate research year"</em>.</p>
  {% else %}
    <ul class="post-list" style="list-style: none; padding-left: 0;">
      {% for post in filtered %}
        <li class="mb-4">
          <h3>
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="post-meta text-muted">{{ post.date | date: '%B %d, %Y' }}</p>
          {% if post.description %}
            <p>{{ post.description }}</p>
          {% endif %}
        </li>
      {% endfor %}
    </ul>
  {% endif %}
</div>
