---
layout: page
permalink: /zh/awards/
title: 获奖
description: 国家级与省部级竞赛奖项。
nav: false
---

{% for section in site.data.cv %}
  {% if section.title contains 'Award' or section.title contains 'Honor' %}
    {% include cv-section.liquid section=section hide_title=true %}
  {% endif %}
{% endfor %}
