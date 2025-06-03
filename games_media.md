---
layout: page
permalink: /games_media/
title: Games and VR

media_entries:
  - title: "Heroes of '71"
    description: >
      Heroes of '71, a pioneering third-person shooter, immerses players in the Bangladesh Liberation War. Distinguished as the first ever game set in this historical era, it provides intense action with tactical gameplay. Players engage in strategic defense of their territory, embodying the valor and resilience of 1971's conflict. With over 7 million downloads and 300,000+ monthly active users, it has become a landmark in digital storytelling and historical representation.
    images:
      - /images/projects/ho71/image2.png
      - /images/projects/ho71/image3.png
      - /images/projects/ho71/image1.png
    links:
      - {url: "https://apkpure.com/heroes-of-71/com.portbliss.ho71", text: "download"}
      - {url: "https://youtu.be/AN14gZIs7D8", text: "trailer"}

  - title: "Heroes of 71 : Retaliation"
    description: >
      This sequel to "Heroes of 71" enhances the first-person shooter experience with improved graphics, dynamic movement, and diverse missions. The addition of a female character marks a meaningful step in character representation.
    images:
      - /images/projects/ho71re/ho71re1.png
      - /images/projects/ho71re/ho71re2.png
    links:
      - {url: "https://apkpure.com/heroes-of-71-retaliation/com.portbliss.ho71.retaliation", text: "download"}
      - {url: "https://youtu.be/knJXRcSWN_c", text: "trailer"}

  - title: "Mukti Camp"
    description: >
      An engaging strategy game set in 1971's Bangladesh. Players manage a guerrilla camp by building structures, training fighters, and leading 20 historically inspired battles. The game includes 30 customizable characters and 15 building types, with vibrant hand-painted artwork. Developed in Unity3D and available for free with optional IAPs.
    images:
      - /images/projects/mukti_camp/image1.png
      - /images/projects/mukti_camp/image3.png
      - /images/projects/mukti_camp/image2.png
    links:
      - {url: "https://apkpure.com/mukti-camp/com.portbliss.mukticamp", text: "download"}
      - {url: "https://youtu.be/uLashZpJWe4", text: "trailer"}

  - title: "Colored Pencil Box – A Branching Narrative"
    description: >
      A nonlinear collaborative fiction in Bangla. The project began as a Facebook thread and evolved into an interactive branching narrative exploring experimental digital storytelling.
    images:
      - /images/projects/colored_pencil/pencil1.png
      - /images/projects/colored_pencil/pencil2.png
    links:
      - {url: "https://github.com/jawadefaj/Colored-Pencils-Box", text: "github"}
      - {url: "https://jawadefaj.github.io/Colored-Pencils-Box/index.html", text: "play"}

  - title: "Mixed Reality Shooter"
    description: >
      A VR shooter built with the Mixed Reality Toolkit. Players shoot falling targets for points. Developed as part of CMPS 290A, the game focuses on simple mechanics, smooth performance, and immersive interaction in MR space.
    images:
      - /images/projects/mixed_reality_shooter/game_screenshot1.jpg
      - /images/projects/mixed_reality_shooter/game_screenshot.PNG
    links:
      - {url: "https://github.com/jawadefaj/Mixed_reality_shooter", text: "github"}

  - title: "3D Saqqara – An Interactive Egypt"
    description: >
      A VR project reconstructing Egypt's Saqqara in 3D using Unity and HTC Vive. It features first-person and bird’s-eye navigation across three historical periods. It uses uncertainty visualization and 3D sound to enhance historical immersion.
    images:
      - /images/projects/saqqara/iamge2.png
      - /images/projects/saqqara/image.png
      - /images/projects/saqqara/image3.png
    links:
      - {url: "/pdf/3DSaqqara_Draft01.pdf", text: "report"}
      - {url: "/pdf/3DSaqqara_Slides.pdf", text: "slides"}
---

{% for entry in page.media_entries %}
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
