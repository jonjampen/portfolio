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
        camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 5;
        renderer = new THREE.WebGLRenderer({ alpha: true });
        // renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
        const container = document.querySelector(".desk");

        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        document.querySelector(".desk").appendChild(renderer.domElement);
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
        renderer.clear();

        renderer.render(scene, camera);
    }
</script>

<!-- <style>
    /* Center the canvas element within the container */
    .desk canvas {
        display: block;
        margin: 0 auto;
        width: 100%; /* Set the canvas width to 100% */
        height: auto; /* Maintain the aspect ratio */
    }
</style> -->
