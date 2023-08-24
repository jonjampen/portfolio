<script>
    import { onMount } from "svelte";
    import Experience from "./Experience/Experience";

    onMount(() => {
        const experience = new Experience(document.querySelector(".experience-canvas"));
    });
</script>

<div class="experience">
    <canvas class="experience-canvas" />
</div>

<style>
    .experience {
        position: fixed;
        width: 100vw;
        height: 100vh;
    }
    .experience-canvas {
        width: 100%;
        height: 100%;
    }
</style>
