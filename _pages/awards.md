---
layout: page
permalink: /awards/
title: 获奖记录
description: 国家级与省级竞赛奖项汇总。
nav: false
lang: zh
---

{% for section in site.data.cv %}
  {% if section.title contains 'Award' or section.title contains 'Honor' %}
    {% include cv-section.liquid section=section hide_title=true %}
  {% endif %}
{% endfor %}
