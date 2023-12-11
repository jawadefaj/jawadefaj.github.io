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



<h2>JunctionArt: Procedural road network generator</h2>
<div style="text-align: right;"> UCSC, 2020-Present </div>
<b>Overview</b><br>
JunctionArt is a road generation tool that creates road networks, intersections and roundabouts for Autonomous Vehicle testing. It features various lane types and intersection designs with procedural generation of roundabouts compatible with simulation environments like Carla and RoadRunner. <br>

<b>Related publications</b><br>
<ul>
    <li>
        <b>Procedural Generation of High-Definition Road Networks for Autonomous Vehicle Testing and Traffic Simulations </b><br>
        
In the research paper we explore advanced road network generation techniques for autonomous vehicles. JunctionArt, our road and intersection generator, plays a key role. It creates diverse road networks and intersections with varying lane types and geometries, outputting in OpenDRIVE format for compatibility with various simulation tools. This paper demonstrates JunctionArt's ability to generate rare and complex road configurations. Multiple metrics are computed over generated roads—field of view (FOV), maximum turn curvature (maxCurvature), corner deviation angle (cornerDeviation), complexity, conflictArea, and the number of interior connection lanes—and are used to perform an expressive range analysis. <br>

		<img src="\images\projects\junction_art\a-roads.png" alt="" width="300" height="170" style="display: inline-block;">
		<img src="\images\projects\junction_art\another-road.png" alt="" width="300" height="170" style="display: inline-block;"> <br>
		<a href="https://github.com/AugmentedDesignLab/junction-art"><div class="color-button">github</div></a>
		<a href="https://www.sae.org/publications/technical-papers/content/12-06-01-0007/"><div class="color-button">paper</div></a>
    </li>

    <li>
        <b>Realistic Road Generation: Intersections</b><br>
			In this paper, we present a simple way to create high-quality road intersections with realistic shapes and lanes. We use helper roads to set up the intersections easily, saving time and effort. We checked our designs against real intersections and other generators to make sure they're good. Our intersections work with many simulation tools because they're made in the OpenDRIVE format. <br>
        
        <img src="\images\projects\junction_art\5-way-new-2.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\projects\junction_art\4-way-new-1.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\projects\junction_art\6-wa-new-1.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\projects\junction_art\7-way-new-2.png" alt="" width="200" height="170" style="display: inline-block;"> <br>
		<a href="https://www.researchgate.net/profile/Golam-Md-Muktadir-2/publication/360354961_P_r_e_-P_r_i_n_t_Realistic_Road_Generation_Intersections/links/62723a27973bbb29cc601650/P-r-e-P-r-i-n-t-Realistic-Road-Generation-Intersections.pdf"><div class="color-button">paper</div></a>
    </li>
</ul>


<h2>CruzWay: Modular AV simulation tool</h2>
<div style="text-align: right;"> UCSC, 2018-2019 </div>

<b>Overview</b><br>
CruzWay is a modular system designed for creating autonomous vehicle (AV) testing scenarios. It features procedurally generated town-sized road networks and intersections, and supports behavior-tree cars and pedestrians. Key modules include Town-sim-py for generating road networks, IntGen for intersection data, Modified netgenerate for custom road networks, and Sumo2Unreal for importing and generating road meshes in Unreal Engine. CruzWay's design allows for a variety of road configurations and supports various industry standard formats, enhancing the realism and complexity of AV testing scenarios. <br>

<b>Key publications</b><br>
<ul>
	<li>
		<b>CruzWay: A Modular Architecture for Generating Scenarios to Test Autonomous Vehicles</b><br>
		<b><i>Collaborator: Ishaan Paranjape, Abdul Jawad, Yanwen Xu, Asiiah Song, Jim Whitehead</i></b><br>
		This paper introduce CruzWay, a system designed for testing autonomous vehicles in simulated environments. CruzWay stands out for its ability to procedurally generate complex road networks and intersections, alongside road and navigation meshes from SUMO files. This approach, leveraging the modular nature of behavior trees, enables the creation of diverse and scalable testing scenarios, essential for training and evaluating autonomous vehicles in rare and challenging situations. <br>
		<img src="\images\research\cruzway\cruzway1.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\research\cruzway\cruzway2.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\research\cruzway\cruzway3.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\research\cruzway\cruzway_1.png" alt="" width="200" height="170" style="display: inline-block;">
		<img src="\images\research\cruzway\cruzway4.png" alt="" width="200" height="170" style="display: inline-block;"> 
		<img src="\images\research\cruzway\cruzway_5.png" alt="" width="200" height="170" style="display: inline-block;"> 
		<img src="\images\research\cruzway\cruzway_4.png" alt="" width="300" height="170" style="display: inline-block;"><br>
		<a href="https://github.com/AugmentedDesignLab/CruzWay"><div class="color-button">github</div></a>
		<a href="https://docs.google.com/presentation/d/1vx4r2b_J-H5eupHZMiy-r2QsCdXXBPe-o32VAWo9upU/edit?usp=sharing"><div class="color-button">slide</div></a>
		<a href="https://youtu.be/ru2K4Y_WrGs"><div class="color-button">presentation</div></a>
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
