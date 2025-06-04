---
layout: page
permalink: /research/
title: Research
---

{%- comment -%}
────────────────────────  V I E W  /  P R E S E N T A T I O N  ────────────────────────
{%- endcomment -%}

{% for entry in site.data.site_data.research %}
<div style="display: flex; justify-content: space-between; align-items: center;">
    <h3 style="margin: 0; text-align: left;">{{ entry.title }}</h3>
    <div style="color:#50C878; text-align: right;">{{ entry.date }}</div>
</div>
<hr>

<details>
  <summary class="toggle"><span class="arrow">&#9656;</span> Key&nbsp;Publications</summary>
  <ul>
    {% for pub in entry.publications %}
    <details>
        <summary class="toggle">
            <span class="arrow">&#9656;</span>
            <strong>{{ pub.title }}</strong>
        </summary>
        <p>{{ pub.text }}</p>

        {% if pub.images %}
            {% for img in pub.images %}
                <img src="{{ img }}" alt="" class="image-inline">
            {% endfor %}
        {% endif %}

        {% if pub.iframes %}
            {% for vid in pub.iframes %}
                <iframe width="200" height="170"
                                src="{{ vid }}"
                                title="{{ pub.title }}"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write;
                                                encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
            {% endfor %}
        {% endif %}

        <br>
        {% for link in pub.links %}
            <a href="{{ link.url }}" class="color-button">{{ link.text }}</a>
        {% endfor %}
    </details>
    <br>
    {% endfor %}
  </ul>
</details>

<hr>
<h3>Overview</h3>
<p>{{ entry.overview }}</p>
<hr>
{% endfor %}

<!-- ─────  S T Y L E S  ─────────────────────────────────────────────────────────────── -->
<style>
/* keep summary on one line & style arrow */
summary.toggle{
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:.45rem;
  font-size:1.5rem;
  font-weight:600;
  color:#50C878;
  white-space:wrap;
}
/* hide default marker */
summary.toggle::-webkit-details-marker,
summary.toggle::marker{display:none}

/* custom triangle */
summary.toggle .arrow{
  font-size:1.3em;           /* bigger 6rrow */
  transition:transform .2s ease;
}
/* rotate arrow when open */
details[open] > summary.toggle .arrow{
  transform:rotate(90deg);
}
</style>

