---
layout: page
permalink: /cv/
title: cv
description: Curriculum Vitae of Zhengling Yangli. <a href="/assets/pdf/cv.pdf">PDF version</a>.
nav: false
---

{% for section in site.data.cv %}
  {% include cv-section.liquid section=section %}
{% endfor %}
