---
layout: page
permalink: /projects/
title: Projects
---

<p>
Check out my <a href="https://github.com/jawadefaj">Github profile</a> for a complete list of my projects.
</p>
<hr>
{% for entry in site.data.site_data.projects %}
<details>
  <summary class="toggle"><span class="arrow">&#9656;</span> {{ entry.title }}</summary>

  {% if entry.images %}
    <div class="project-images {{ entry.image_layout }}">
      {% for img in entry.images %}
        <img src="{{ img }}" alt="{{ entry.title }}" class="project-img">
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

.project-images.row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1em 0;
}
.project-images.column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1em 0;
}
.project-img {
  max-width: 100%;
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
