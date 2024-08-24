---
layout: page
permalink: /projects/
title: Projects
---

<p>Here is a non-exhaustive list of my non-research projects. My research work can be found <a href="/research">here</a>. You can also check out my Github profile <a href="https://github.com/jawadefaj">here</a> for a complete list of my projects.</p>

<ul>

    <li>
        <h3>Multi-region-attention</h3>
        <p>The project "MRA: Multi-scale Region Attention" explores improving computation for Vision transformers (ViTs) in image segmentation task. The model uses a hierarchical structure for high-resolution images, processing images in patches and merging them into a multi-layered feature map. It introduces a multi-scale regional self-attention mechanism in each transformer layer, enabling each pixel to attend to multiple scale neighborhoods. This approach minimizes computational load while improving the understanding of the global context. Our experiments demonstrate the model's effectiveness, suggesting potential for broader applications in vision tasks.</p>
        <img src="\images\projects\mra\mra.png" alt="Alternative Text" class="image-inline">
        <img src="\images\projects\mra\multiscale_attention.png" alt="Alternative Text" class="image-inline"> 
        <br>
        <a href="https://github.com/mahfuzalhasan/multi-region-attention/tree/main" class="color-button">github</a>
    </li><br>

    <li>
        <h3>JunctionArt</h3>
        <p>JunctionArt is a PCG based tool for generating high-definition roads and intersections, crucial for autonomous vehicle testing. Using control lines, it creates diverse road networks with various lane and intersection types, outputting in OpenDRIVE format for broad compatibility. Key features include the generation of complex geometries, comprehensive metrics for expressive range analysis, and interoperability with major simulation tools like RoadRunner, Carla, and esmini. Developed with the pyodrx library, JunctionArt stands as an essential resource in autonomous vehicle development. The papers are included in the github repository.</p>
        <img src="\images\projects\junction_art\a-roads.png" alt="Alternative Text" class="image-inline">
        <img src="\images\projects\junction_art\another-road.png" alt="Alternative Text" class="image-inline">
        <img src="\images\projects\junction_art\5-way-new-2.png" alt="Alternative Text" class="image-inline"> 
        <br>
        <a href="https://github.com/AugmentedDesignLab/junction-art" class="color-button">github</a>
        <a href="https://www.researchgate.net/publication/360840690_Procedural_Generation_of_High-Definition_Road_Networks_for_Autonomous_Vehicle_Testing_and_Traffic_Simulations" class="color-button">paper</a>
    </li><br>

    <li>
        <h3>Color Constancy Project</h3>
        <p>A detailed exploration into color perception under diverse lighting and camera settings, this project, part of a Computer Vision class, comprises four distinct tasks. The work includes Camera Radiometric Calibration using a Google Pixel 3A, Test Pattern Photography under various lighting conditions, a comprehensive Color Distribution Study, and innovative Color Constancy Experiments. The project is a blend of theoretical analysis and practical application, aiming to understand and standardize color perception in digital imaging. Results and methodologies are documented and available for review.</p>
        <img src="\images\projects\color_consistancy\cv2.png" alt="Color Calibration Image" class="image-inline">
        <img src="\images\projects\color_consistancy\cv3.png" alt="Test Pattern Image" class="image-inline">
        <img src="\images\projects\color_consistancy\cv4.png" alt="Color Distribution Chart" class="image-inline"> 
        <br>
        <a href="https://github.com/jawadefaj/CSE_264_Computer_vision" class="color-button">github</a>
    </li><br>

    <li>
        <h3>Perspective Correction Project</h3>
        <p>This project is centered on correcting the perspective of building images. It involves five main tasks: Camera Calibration for determining intrinsic parameters and radial distortion, capturing the building image, identifying bundles of parallel lines in the image, calculating vanishing directions, and applying a rectifying homography. The project combines theoretical knowledge with practical implementation, aiming to enhance the accuracy of perspective correction in digital images. The detailed process and results are available in github.</p>
        <img src="\images\projects\perspective_correction\undistort.png" alt="Camera Calibration Image" class="image-inline">
        <img src="\images\projects\perspective_correction\parallel.png" alt="Captured Building Image" class="image-inline">
        <img src="\images\projects\perspective_correction\camera5.png" alt="Vanishing Points Image" class="image-inline"> 
        <br>
        <a href="https://github.com/jawadefaj/CSE_264_Camera_calibration" class="color-button">github</a>
    </li><br>

    <li>
        <h3>Cat Mario AI</h3>
        <p>Drawing inspiration from SethBling's MarI/O and Niko's CrAIg, this project utilizes NEAT to train an AI for "Cat Mario," a complex Mario-like game. The AI is designed to navigate through the game's complex traps and challenges. The dataset comprises real-time gameplay video feeds, which are analyzed to inform AI actions. Success is measured at various levels, from completing training levels to optimizing the algorithm for faster learning. Detailed insights and results can be found on GitHub.</p>
        <img src="\images\projects\cat_mario\image_training_10_1.jpg" alt="mid training" width="900" height="100">
        <img src="\images\projects\cat_mario\image_training_20_9.jpg" alt="end training" width="900" height="100"> 
        <br>
        <a href="https://github.com/jawadefaj/cat_mario" class="color-button">github</a>
    </li>

</ul>
