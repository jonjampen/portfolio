<!-- <script>
    import { onMount } from "svelte";
    import { createScene } from "./scene.js";
    let el;
    onMount(() => {
        createScene(el);
    });
</script>

<canvas bind:this={el} />
 -->

<script>
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

    let scene, camera, renderer;

    onMount(() => {
        init();
        loadModel();
        animate();
    });

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }

    function loadModel() {
        const loader = new GLTFLoader();
        loader.load("/3d/room.glb", (gltf) => {
            scene.add(gltf.scene);
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Add ambient light with color and intensity
            scene.add(ambientLight);
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        // Add any animation or updates here
        renderer.render(scene, camera);
    }
</script>

<style>
    /* Add any styling for the canvas or container here */
    canvas {
        display: block;
    }
</style>
