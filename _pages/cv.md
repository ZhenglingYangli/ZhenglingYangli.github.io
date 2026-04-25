---
layout: page
permalink: /cv/
title: 简历
description: 杨黎政龄的个人简历。<a href="/assets/pdf/cv.pdf">PDF 版本</a>。
nav: false
lang: zh
---

{% for section in site.data.cv %}
  {% include cv-section.liquid section=section %}
{% endfor %}
