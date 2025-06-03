---
layout: page
permalink: /publications/
title: Publications
---

{% for pub in site.data.site_data.publications %}
<details>
  <summary class="toggle"><span class="arrow">&#9656;</span> {{ pub.title }}</summary>
  <p><i>{{ pub.authors }}</i><br>{{ pub.venue }}</p>
  <a href="{{ pub.url }}" class="color-button">pdf</a>
</details>
<hr>
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
  white-space: wrap;
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
