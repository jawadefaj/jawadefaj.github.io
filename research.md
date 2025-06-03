---
layout: page
permalink: /research/
title: Research

# ─── DATA ────────────────────────────────────────────────────────────────────
research_entries:
  - title: "CogMod: Cognitive Modeling of Human Driving Behavior"
    date: "UCSC, 2021 – Present"
    overview: >
      CogMod is a human driver behavior model based on theories from cognitive
      architecture and traffic modeling. It simulates various human limitations
      to represent human cognition while driving, limiting agents’ perception
      by providing selective updates of the surroundings. This model captures
      the variability in human driving by simulating perceptive and cognitive
      limitations and helps create diverse, critical accident scenarios for
      autonomous-vehicle testing.
    publications:
      - title: >
          CogMod: Simulating Human Information Processing Limitation While
          Driving (IV, Aachen 2022)
        text: >
          Introduces a method that embeds cognitive limitations into driving
          simulations inside CARLA, yielding more realistic, nuanced accident
          scenarios.
        images:
          - /images/research/cogmod/cogmod1_3.png
          - /images/research/cogmod/cogmod1_1.png
          - /images/research/cogmod/cogmod1_4.png
        iframes:
          - https://www.youtube.com/embed/g2BcNwqwVIU
          - https://www.youtube.com/embed/CXwnYlkkxas
        links:
          - {url: "https://github.com/jawadefaj/CogMod-driver-behavior-model", text: "github"}
          - {url: "https://ieeexplore.ieee.org/abstract/document/9827128", text: "paper"}
          - {url: "https://docs.google.com/presentation/d/1n0n1ZJnNoK56XHaLxgQRCETVH6hlpo7jNcYRRwPWHYc/edit?usp=sharing", text: "slide"}
          - {url: "https://youtu.be/g2BcNwqwVIU", text: "presentation"}
      - title: >
          CogMod: Driver Model for Augmenting Scenario Criticality
          (ITSC, Bilbao 2023)
        text: >
          Uses a gaze mechanism and rich internal state to vary behaviour and
          increase scenario complexity while preserving realism.
        images:
          - /images/research/cogmod/cogmod2_3.png
          - /images/research/cogmod/cogmod2_1.png
          - /images/research/cogmod/cogmod2_2.png
        iframes:
          - https://www.youtube.com/embed/rsR1OP4rOEY
        links:
          - {url: "https://github.com/jawadefaj/CogMod-driver-behavior-model", text: "github"}
          - {url: "https://www.researchgate.net/profile/Abdul-Jawad-5/publication/374476345_CogMod_Driver_Model_for_Augmenting_Scenario_Criticality/links/651f7f283ab6cb4ec6be0979/CogMod-Driver-Model-for-Augmenting-Scenario-Criticality.pdf", text: "paper"}
          - {url: "https://docs.google.com/presentation/d/1xqNXbjBXNfd6FbBDPz4MqpaBbmtfnrtqy4qlUeehE9Q/edit?usp=sharing", text: "slide"}
  - title: "JunctionArt: Procedural Road Network Generator"
    date: "UCSC, 2020 – Present"
    overview: >
      JunctionArt procedurally builds road networks, intersections, and
      roundabouts (OpenDRIVE compatible) for AV testing in CARLA and RoadRunner.
    publications:
      - title: >
          Procedural Generation of High-Definition Road Networks for Autonomous
          Vehicle Testing and Traffic Simulations
        text: >
          Demonstrates expressive-range analysis across metrics such as FOV,
          curvature, and conflict area.
        images:
          - /images/projects/junction_art/a-roads.png
          - /images/projects/junction_art/another-road.png
        links:
          - {url: "https://github.com/AugmentedDesignLab/junction-art", text: "github"}
          - {url: "https://www.sae.org/publications/technical-papers/content/12-06-01-0007/", text: "paper"}
      - title: "Realistic Road Generation: Intersections"
        text: >
          Presents helper-road technique to create multi-leg intersections in
          OpenDRIVE; validated against real data.
        images:
          - /images/projects/junction_art/5-way-new-2.png
          - /images/projects/junction_art/4-way-new-1.png
          - /images/projects/junction_art/6-wa-new-1.png
          - /images/projects/junction_art/7-way-new-2.png
        links:
          - {url: "https://www.researchgate.net/profile/Golam-Md-Muktadir-2/publication/360354961_P_r_e_-P_r_i_n_t_Realistic_Road_Generation_Intersections/links/62723a27973bbb29cc601650/P-r-e-P-r-i-n-t-Realistic-Road-Generation-Intersections.pdf", text: "paper"}
  - title: "CruzWay: Modular AV Simulation Tool"
    date: "UCSC, 2018 – 2019"
    overview: >
      CruzWay procedurally generates town-scale road networks, converts SUMO to
      Unreal meshes, and uses behaviour-tree agents for scalable AV evaluation.
    publications:
      - title: >
          CruzWay: A Modular Architecture for Generating Scenarios to Test
          Autonomous Vehicles
        text: >
          Combines Town-sim-py, IntGen, and SUMO2Unreal to produce diverse,
          hard-case scenarios for AVs.
        images:
          - /images/research/cruzway/cruzway1.png
          - /images/research/cruzway/cruzway2.png
          - /images/research/cruzway/cruzway3.png
          - /images/research/cruzway/cruzway_1.png
          - /images/research/cruzway/cruzway4.png
          - /images/research/cruzway/cruzway_5.png
          - /images/research/cruzway/cruzway_4.png
        links:
          - {url: "https://github.com/AugmentedDesignLab/CruzWay", text: "github"}
          - {url: "https://docs.google.com/presentation/d/1vx4r2b_J-H5eupHZMiy-r2QsCdXXBPe-o32VAWo9upU/edit?usp=sharing", text: "slide"}
          - {url: "https://youtu.be/ru2K4Y_WrGs", text: "presentation"}
---

{%- comment -%}
────────────────────────  V I E W  /  P R E S E N T A T I O N  ────────────────────────
{%- endcomment -%}

{% for entry in page.research_entries %}
<div style="display: flex; justify-content: space-between; align-items: center;">
    <h2 style="margin: 0; text-align: left;">{{ entry.title }}</h2>
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
  white-space:nowrap;
}
/* hide default marker */
summary.toggle::-webkit-details-marker,
summary.toggle::marker{display:none}

/* custom triangle */
summary.toggle .arrow{
  font-size:1.3em;           /* bigger arrow */
  transition:transform .2s ease;
}
/* rotate arrow when open */
details[open] > summary.toggle .arrow{
  transform:rotate(90deg);
}
</style>

