<script>
    import { goto } from "$app/navigation";
    import ProjectCarousel from "./ProjectCarousel.svelte";
    import { projects } from "../data/projects.js";
</script>

<section class="projects">
    <h2>Projects</h2>
    <h6>View all my projects <a href="/projects">here</a></h6>

    <ProjectCarousel {projects} />

    <div class="center">
        <button class="btn accent" on:click={() => goto("/projects")}>All my projects</button>
    </div>
</section>
