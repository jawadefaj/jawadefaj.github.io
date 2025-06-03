---
layout: page
title: 
permalink: /about/
---

<div style="text-align: center; margin-bottom: 20px; font-size: 1.5em; font-weight: bold;">
  <span style="color: #3DDC84; animation: color-fade 2s infinite;">abjawad@ucsc.edu</span> | 
  <span style="color: #4A90E2; animation: color-fade 2s infinite;">+1 831-419-3654</span> | 
  <span style="color: #FFD700; animation: color-fade 2s infinite;"><a href="http://jawadefaj.xyz" style="color: inherit;">jawadefaj.xyz</a></span>
</div>

<style>
@keyframes color-fade {
  0% { color: #3DDC84; } /* Green */
  20% { color: #4A90E2; } /* Blue */
  40% { color: #FFD700; } /* Gold */
  60% { color: #8A2BE2; } /* Violet */
  80% { color: #FF6347; } /* Tomato */
  100% { color: #3DDC84; } /* Green */
}
</style>

---

## Education
{% for edu in site.data.site_data.about.education %}
<div style="display: flex; justify-content: space-between; align-items: baseline;">
  <div>
    <strong style="color: #4A90E2;">{{ edu.degree }}</strong>, <span style="color: #FFD700;">{{ edu.university }}</span>
    {% if edu.dissertation %}<br>Dissertation: <em>{{ edu.dissertation }}</em>{% endif %}
    {% if edu.thesis %}<br>Thesis: <em>{{ edu.thesis }}</em>{% endif %}
  </div>
  <div style="text-align: right; color: #3DDC84;"><strong>{{ edu.date }}</strong></div>
</div>
{% endfor %}

---

## Research & Professional Experience
{% for exp in site.data.site_data.about.experience %}
<div style="display: flex; justify-content: space-between; align-items: baseline;">
  <div>
    <strong style="color: #4A90E2;">{{ exp.title }}</strong>, <span style="color: #FFD700;">{{ exp.company }}</span>
    <ul>
      {% for item in exp.details %}
      <li>{{ item }}</li>
      {% endfor %}
    </ul>
  </div>
  <div style="text-align: right; color: #3DDC84;"><strong>{{ exp.date }}</strong></div>
</div>
{% endfor %}

---

## Skills
{% for skill_item in site.data.site_data.about.skills %}
- **<span style="color: #4A90E2;">{{ skill_item.category }}:</span>** {{ skill_item.list }}
{% endfor %}
