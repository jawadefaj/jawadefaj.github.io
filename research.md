---
layout: page
permalink: /research/
title: Research
---

<h2>CogMod: Cognitive Modeling of Human Driving Behavior</h2>
<div style="text-align: right;"> UCSC, 2021-Present </div>

<b>Overview</b><br>
CogMod is a human driver behavior model based on theories from cognitive architecture and traffic modeling. It simulates various human limitations to represent human cognition while driving, limiting agents' perception by providing selective updates of the surroundings. This model captures the variability in human driving by simulating perceptive and cognitive limitations. CogMod addresses the rarity of accident scenarios, enhancing the testing of autonomous vehicles with realistic human-like driving scenarios. It helps create diverse and critical accident scenarios by simulating human perceptual and cognitive limitations.<br>

<b>Key publications</b><br>
<ul>
	<li>
		<b>CogMod: Simulating Human Information Processing Limitation While Driving (IV Aachen Germany 2022)</b><br>
		This paper introduces a new method for analyzing and simulating human driving behavior, with an emphasis on integrating cognitive limitations into driving simulations. The goal is to more accurately reflect real-world driving behaviors and errors. This enhancement in modeling techniques leads to more realistic and nuanced simulations, which are crucial for realistic simulation. These simulations are conducted using the CARLA simulator. The model replicates human-like driving scenarios, including potential errors and reaction delays. <br>
		<img src="\images\research\cogmod\cogmod1_3.png" alt="" width="250" height="170" style="display: inline-block;">
		<img src="\images\research\cogmod\cogmod1_1.png" alt="" width="250" height="170" style="display: inline-block;">
		<img src="\images\research\cogmod\cogmod1_2.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\research\cogmod\cogmod1_4.png" alt="" width="200" height="170" style="display: inline-block;">
		<iframe width="200" height="170" src="https://www.youtube.com/embed/g2BcNwqwVIU" title="CogMod: Simulating Human Information Processing Limitations While Driving" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		<iframe width="200" height="170" src="https://www.youtube.com/embed/CXwnYlkkxas" title="CogMod: Cognitive Modeling Human Driving Behavior" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>
	</li>
	<a href="https://github.com/jawadefaj/CogMod-driver-behavior-model"><div class="color-button">github</div></a>
	<a href="https://ieeexplore.ieee.org/abstract/document/9827128"><div class="color-button">paper</div></a>
	<a href="https://docs.google.com/presentation/d/1n0n1ZJnNoK56XHaLxgQRCETVH6hlpo7jNcYRRwPWHYc/edit?usp=sharing"><div class="color-button">slide</div></a>
	<a href="https://youtu.be/g2BcNwqwVIU"><div class="color-button">presentation</div></a>
	<li>
		<b>CogMod: Driver Model for Augmenting Scenario Criticality (ITSC Bilbao Spain 2023)</b><br>
		CogMod simulates more realistic human driver behavior, adapting to changing scenarios. This approach, using a unique gaze mechanism and a rich internal representation, better captures human driving variability. By comparing with real-world data, CogMod demonstrates its ability to make test scenarios for autonomous vehicles more complex while maintaining realism, addressing the limitations of previous models. <br>
		<img src="\images\research\cogmod\cogmod2_3.png" alt="" width="250" height="170" style="display: inline-block;">
		<img src="\images\research\cogmod\cogmod2_1.png" alt="" width="250" height="170" style="display: inline-block;">
		<img src="\images\research\cogmod\cogmod2_2.png" alt="" width="200" height="170" style="display: inline-block;"> <br>
		<iframe width="200" height="170" src="https://www.youtube.com/embed/rsR1OP4rOEY" title="SIP 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br>
	</li>
	<a href="https://github.com/jawadefaj/CogMod-driver-behavior-model"><div class="color-button">github</div></a>
	<a href="https://www.researchgate.net/profile/Abdul-Jawad-5/publication/374476345_CogMod_Driver_Model_for_Augmenting_Scenario_Criticality/links/651f7f283ab6cb4ec6be0979/CogMod-Driver-Model-for-Augmenting-Scenario-Criticality.pdf"><div class="color-button">paper</div></a>
	<a href="https://docs.google.com/presentation/d/1xqNXbjBXNfd6FbBDPz4MqpaBbmtfnrtqy4qlUeehE9Q/edit?usp=sharing"><div class="color-button">slide</div></a>
</ul>



<h2>JunctionArt</h2>
<ul>
	<li>
		<b>JunctionArt: Road Network Generation for Autonomous Vehicle Testing</b><br>
		UCSC, 2020-Present<br>
		<b><i>Collaborator: Golam Md Muktadir, Abdul Jawad, Ishaan Paranjape, Jim Whitehead, and Aleksey Shepelev</i></b><br>
		<i>JunctionArt is a road generation tool that can procedurally create road networks and intersections.  Generated roads exhibit different types of lane types such as turn lanes, one way streets, and multiple lanes, while intersections feature a range of incident roads (three to seven incident roads), leading to a variety of geometries and interior connecting lanes. These roads are output in the OpenDRIVE format, and hence are interoperable with a wide range of Autonomous Vehicle testing tools and simulation environments such as Carla, RoadRunner.</i> <br>
		<a href="https://github.com/AugmentedDesignLab/junction-art"><div class="color-button">github</div></a>
	</li><br>
</ul>

<h2>CruzWay</h2>
<ul>
	<li>
		<b>CruzWay: A Modular Architecture for Generating Scenarios to Test Autonomous Vehicles</b><br>
		UCSC, 2018-2019<br>
		<b><i>Collaborator: Ishaan Paranjape, Abdul Jawad, Yanwen Xu, Asiiah Song, Jim Whitehead</i></b><br>
		<i>CruzWay is a modular architecture that supports procedural generation of town sized road networks and intersections. CruzWay can generate scenarios with cars as well as pedestrians run by behavior trees (BTs) in the procedurally generated environment. The self-contained, modular nature of BTs in combination with procedural roads allows CruzWay to create a large number of scenarios.  </i><br>
		<img src="\images\research\cruzway\cruzway1.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\research\cruzway\cruzway2.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\research\cruzway\cruzway3.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\research\cruzway\cruzway4.png" alt="" width="200" height="170" style="display: inline-block;"> <br>
		<a href="https://github.com/AugmentedDesignLab/CruzWay"><div class="color-button">github</div></a>
	</li><br>
</ul>
<!-- 
	<li>
        <b>Project title</b><br>
        University, Duration<br>
        <i>Other details such as advisor's name may go here</i><br>
        <a href=""><div class="color-button">report</div></a><a href=""><div class="color-button">code</div></a>
    </li><br> 
-->







<!-- 
<h2>Research Implementations</h2>
<ul>
	<li>
		<b>Title #1</b>: Brief description of this research implementation.<br>
		<a href=""><div class="color-button">paper</div></a><a href=""><div class="color-button">report</div></a><a href=""><div class="color-button">code</div></a>
	</li><br>
	<li>
		<b>Title #2</b>: Brief description of this research implementation.<br>
		<a href=""><div class="color-button">paper</div></a><a href=""><div class="color-button">report</div></a><a href=""><div class="color-button">code</div></a>
	</li><br>
</ul>
 -->
