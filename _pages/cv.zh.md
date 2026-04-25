---
layout: page
permalink: /zh/cv/
title: 简历
description: 杨李正凌的简历。 <a href="/assets/pdf/cv.pdf">PDF 版本</a>。
nav: false
---

{% for section in site.data.cv %}
  {% include cv-section.liquid section=section %}
{% endfor %}
