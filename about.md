---
layout: page
title: About
permalink: /about/
---

<!--
  ABOUT PAGE (Refreshed Color Theme + Date Alignment Fix)
  --------------------------------------------------
  ✔  Dark background preserved (#0d1117)
  ✔  Unified accent palette (green + blue)
  ✔  Dates right‑aligned with “muted” class
  ✔  CSS variables for easy future tweaks
  ✔  Minimal inline styles
-->

<style>
/* ===================
   COLOR PALETTE
   ===================*/
:root {
  --bg-color: #0d1117;   /* deep charcoal */
  --text-color: #f0f6fc; /* light neutral */
  --accent-green: #3ddc84; /* primary accent */
  --accent-blue:  #4a90e2; /* secondary accent */
  --accent-gold:  #ffd700; /* tertiary accent (sparingly) */
  --muted: #8b949e;       /* muted gray */
}

/* ===================
   GLOBAL STYLES
   ===================*/
body {
  background: var(--bg-color);
  color: var(--text-color);
  font-family: "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0 1rem;
}

/* Headings */
h1, h2, h3, h4 {
  margin: 2rem 0 1rem;
  font-weight: 600;
}

h2 {
  color: var(--accent-green);
  border-bottom: 2px solid var(--accent-green);
  padding-bottom: .25rem;
}

h3 {
  color: var(--accent-blue);
}

/* Links */
a {
  color: var(--accent-blue);
  text-decoration: none;
  transition: color .2s ease-in-out;
}
a:hover {
  color: var(--accent-gold);
}

/* Flex helpers */
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
}

/* List styles */
ul {
  list-style: disc inside;
  margin: .5rem 0 1rem;
  padding-left: 1rem;
}
li {
  margin-bottom: .35rem;
}

/* Section container */
section {
  margin-bottom: 2.5rem;
}

/* Contact banner */
.banner {
  text-align: center;
  margin: 2rem auto;
  font-size: 1.35rem;
  font-weight: 600;
}
.banner span {
  display: inline-block;
  margin: 0 .35rem;
}
.banner .email { color: var(--accent-green); }
.banner .phone { color: var(--accent-blue); }
.banner .site  { color: var(--accent-gold); }

/* Date / muted text */
.muted {
  color: var(--muted);
  text-align: right;   /* right‑align the dates */
  margin-left: auto;   /* push to the far right in the flex row */
  white-space: nowrap; /* keep on one line */
}

/* Responsive tweaks */
@media (min-width: 800px) {
  body { padding: 0 3rem; }
}
</style>

<!-- CONTACT  -->
<div class="banner">
  <span class="email">abjawad@ucsc.edu</span> |
  <span class="phone">+1&nbsp;831&nbsp;-&nbsp;419&nbsp;-&nbsp;3654</span> |
  <span class="site"><a href="https://jawadefaj.xyz">jawadefaj.xyz</a></span>
</div>

<!-- EDUCATION -->
<section>
  <h2>Education</h2>
  {% for edu in site.data.site_data.about.education %}
  <div class="flex-between">
    <div>
      <strong>{{ edu.degree }}</strong>, {{ edu.university }}
      {% if edu.dissertation %}<br><em>Dissertation: {{ edu.dissertation }}</em>{% endif %}
      {% if edu.thesis %}<br><em>Thesis: {{ edu.thesis }}</em>{% endif %}
    </div>
    <div class="muted">{{ edu.date }}</div>
  </div>
  {% endfor %}
</section>

<!-- EXPERIENCE -->
<section>
  <h2>Research &amp; Professional Experience</h2>
  {% for exp in site.data.site_data.about.experience %}
  <div class="flex-between">
    <div>
      <strong>{{ exp.title }}</strong>, {{ exp.company }}
      <ul>
        {% for item in exp.details %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>
    <div class="muted">{{ exp.date }}</div>
  </div>
  {% endfor %}
</section>

<!-- SKILLS -->
<section>
  <h2>Skills</h2>
  <ul>
  {% for skill_item in site.data.site_data.about.skills %}
    <li><strong style="color: var(--accent-blue);">{{ skill_item.category }}:</strong> {{ skill_item.list }}</li>
  {% endfor %}
  </ul>
</section>
