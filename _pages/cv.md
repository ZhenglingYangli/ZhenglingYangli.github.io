---
layout: page
permalink: /cv/
title: 简历
description: 杨李正凌的个人简历。
nav: false
lang: zh
---

{% for section in site.data.cv %}
  {% include cv-section.liquid section=section %}
{% endfor %}
