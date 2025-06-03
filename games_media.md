---
layout: page
permalink: /games_media/
title: Games and VR
---

{% for entry in site.data.site_data.games_media %}
<details>
  <summary class="toggle"><span class="arrow">&#9656;</span> {{ entry.title }}</summary>
  

  {% if entry.images %}
    <div class="media-images">
      {% for img in entry.images %}
        <img src="{{ img }}" alt="{{ entry.title }}" class="media-img">
      {% endfor %}
    </div>
  {% endif %}

  <br>
  {% for link in entry.links %}
    <a href="{{ link.url }}" class="color-button">{{ link.text }}</a>
  {% endfor %}
</details>
<hr><p>{{ entry.description }}</p><hr>
{% endfor %}

<!-- ─────  S T Y L E S  ─────────────────────────────────────────────────────────────── -->
<style>
summary.toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #50C878;
  white-space: nowrap;
}
summary.toggle::-webkit-details-marker,
summary.toggle::marker { display: none; }
summary.toggle .arrow {
  font-size: 1.3em;
  transition: transform 0.2s ease;
}
details[open] > summary.toggle .arrow {
  transform: rotate(90deg);
}
.media-images {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1em 0;
}
.media-img {
  max-width: 50%;
  height: auto;
  border-radius: 8px;
}
</style>

<!-- ─────  J S  (A C C O R D I O N)  ──────────────────────────────────────────────── -->
<script>
document.addEventListener('DOMContentLoaded', () => {
  const all = document.querySelectorAll('details');
  all.forEach(d => d.addEventListener('toggle', () => {
    if (!d.open) return;
    all.forEach(o => { if (o !== d) o.open = false; });
  }));
});
</script>
