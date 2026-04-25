---
layout: page
permalink: /awards/
title: awards
description: National & provincial competition awards.
nav: false
---

{% for section in site.data.cv %}
  {% if section.title contains 'Award' or section.title contains 'Honor' %}
    {% include cv-section.liquid section=section hide_title=true %}
  {% endif %}
{% endfor %}
