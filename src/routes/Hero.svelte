<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import Experience from "../lib/Experience/Experience";

    onMount(() => {
        const experience = new Experience(document.querySelector(".experience-canvas"));
    });
</script>

<section class="hero">
    <div class="left">
        <h5>👋 Hey, I'm</h5>
        <h1>Jon Jampen</h1>

        <button class="btn secondary" on:click={() => goto("/#contact")}>Get in touch</button>
    </div>

    <div class="experience">
        <canvas class="experience-canvas" />
    </div>
</section>
