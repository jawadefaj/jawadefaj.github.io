---
layout: page
permalink: /publications/
title: Publications

publication_entries:
  - title: "Accident Scenario Generation using Driver Behavior Model"
    authors: "Abdul Jawad, and Jim Whitehead"
    venue: "IEEE International Conference on Intelligent Transportation Systems (ITSC), 2024"
    url: "https://www.academia.edu/123040796/Accident_Scenario_Generation_using_Driver_Behavior_Model"

  - title: "CogMod: Driver Model for Augmenting Scenario Criticality"
    authors: "Abdul Jawad, and Jim Whitehead"
    venue: "IEEE International Conference on Intelligent Transportation Systems (ITSC), 2023"
    url: "https://www.researchgate.net/publication/374476345_CogMod_Driver_Model_for_Augmenting_Scenario_Criticality"

  - title: "PedGrid – A Simple yet Expressive Simulation Environment for Pedestrian Behavior Modeling"
    authors: "Golam Md Muktadir, Taorui Huang, Zarif Ikram, Abdul Jawad, Jim Whitehead"
    venue: "IEEE International Conference on Intelligent Transportation Systems (ITSC), 2023"
    url: "https://www.researchgate.net/profile/Golam-Md-Muktadir-2/publication/372540735_PedGrid_-_A_Simple_yet_Expressive_Simulation_Environment_for_Pedestrian_Behavior_Modeling/links/64bd813fb9ed6874a53eb127/PedGrid-A-Simple-yet-Expressive-Simulation-Environment-for-Pedestrian-Behavior-Modeling.pdf"

  - title: "CogMod: Simulating Cognitive & Perceptive Limitations in Human Drivers"
    authors: "Abdul Jawad"
    venue: "M.Sc. Thesis"
    url: "https://escholarship.org/content/qt1mv0q8cb/qt1mv0q8cb.pdf"

  - title: "CogMod: Simulating Human Information Processing Limitation While Driving"
    authors: "Abdul Jawad, and Jim Whitehead"
    venue: "IEEE Intelligent Vehicles Symposium (IV), 2022"
    url: "https://ieeexplore.ieee.org/abstract/document/9827128"

  - title: "Procedural Generation of High-Definition Road Networks for Autonomous Vehicle Testing and Traffic Simulations"
    authors: "Golam Md Muktadir, Abdul Jawad, Ishaan Paranjape, Jim Whitehead, and Aleksey Shepelev"
    venue: "SAE International Journal of Connected and Automated Vehicles, 2023"
    url: "https://www.sae.org/publications/technical-papers/content/12-06-01-0007/"

  - title: "A Modular Architecture for Procedural Generation of Towns, Intersections and Scenarios for Testing Autonomous Vehicles"
    authors: "Ishaan Paranjape, Abdul Jawad, Yanwen Xu, Asiiah Song, Jim Whitehead"
    venue: "IEEE Intelligent Vehicles Symposium (IV), 2020"
    url: "https://ieeexplore.ieee.org/abstract/document/9304625"
---

{% for pub in page.publication_entries %}
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
