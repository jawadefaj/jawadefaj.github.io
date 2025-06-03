---
layout: page
permalink: /projects/
title: Projects

project_entries:
  - title: "Multi-region-attention"
    image_layout: "row"
    description: >
      The project "MRA: Multi-scale Region Attention" explores improving computation for Vision Transformers (ViTs) in image segmentation. It introduces a multi-scale regional self-attention mechanism in each transformer layer, allowing each pixel to attend to multiple scale neighborhoods. This minimizes computational load while improving global context understanding.
    images:
      - /images/projects/mra/mra.png
      - /images/projects/mra/multiscale_attention.png
    links:
      - {url: "https://github.com/mahfuzalhasan/multi-region-attention/tree/main", text: "github"}

  - title: "JunctionArt"
    image_layout: "row"
    description: >
      JunctionArt is a PCG-based tool for generating high-definition roads and intersections, crucial for autonomous vehicle testing. It creates diverse networks with various intersection types and outputs OpenDRIVE for compatibility with CARLA, RoadRunner, and esmini.
    images:
      - /images/projects/junction_art/a-roads.png
      - /images/projects/junction_art/another-road.png
      - /images/projects/junction_art/5-way-new-2.png
    links:
      - {url: "https://github.com/AugmentedDesignLab/junction-art", text: "github"}
      - {url: "https://www.researchgate.net/publication/360840690_Procedural_Generation_of_High-Definition_Road_Networks_for_Autonomous_Vehicle_Testing_and_Traffic_Simulations", text: "paper"}

  - title: "Color Constancy Project"
    image_layout: "row"
    description: >
      A deep dive into color perception under varying lighting conditions. Tasks included radiometric calibration, test pattern photography, color distribution study, and constancy experiments using a Google Pixel 3A.
    images:
      - /images/projects/color_consistancy/cv2.png
      - /images/projects/color_consistancy/cv3.png
      - /images/projects/color_consistancy/cv4.png
    links:
      - {url: "https://github.com/jawadefaj/CSE_264_Computer_vision", text: "github"}

  - title: "Perspective Correction Project"
    image_layout: "row"
    description: >
      This project focuses on correcting the perspective of building images using camera calibration, line detection, vanishing point estimation, and homography. Aimed at accurate geometric rectification of architectural images.
    images:
      - /images/projects/perspective_correction/undistort.png
      - /images/projects/perspective_correction/parallel.png
      - /images/projects/perspective_correction/camera5.png
    links:
      - {url: "https://github.com/jawadefaj/CSE_264_Camera_calibration", text: "github"}

  - title: "Cat Mario AI"
    image_layout: "row"
    description: >
      A NEAT-based AI that learns to play "Cat Mario" through reinforcement learning. Inspired by MarI/O and CrAIg, the model uses gameplay video as input and learns to survive and navigate complex traps.
    images:
      - /images/projects/cat_mario/image_training_10_1.jpg
      - /images/projects/cat_mario/image_training_20_9.jpg
    links:
      - {url: "https://github.com/jawadefaj/cat_mario", text: "github"}
---

<p>
Here is a non-exhaustive list of my non-research projects.
My research work can be found <a href="/research">here</a>.
You can also check out my Github profile <a href="https://github.com/jawadefaj">here</a> for a complete list of my projects.
</p>
<hr>
{% for entry in page.project_entries %}
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
