---
layout: page
permalink: /notes/
title: notes
description: Long-form research notes — phenomena, lemmas, and questions worth chasing.
nav: false
---

<div class="post-list">
  {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
  {% assign filtered = sorted_posts | where_exp: 'p', "p.categories contains 'research'" %}
  {% if filtered.size == 0 %}
    <p class="text-muted">No research notes yet. Check back later — first batch on MWDS, DiverseSAT, and UNB-MT is in progress.</p>
  {% else %}
    <ul class="post-list" style="list-style: none; padding-left: 0;">
      {% for post in filtered %}
        <li class="mb-4">
          <h3>
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="post-meta text-muted">
            {{ post.date | date: '%B %d, %Y' }}
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
