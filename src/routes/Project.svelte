<script>
    import { goto } from "$app/navigation";
    import { HtmlTag } from "svelte/internal";
    export let project;
</script>

<div class="project">
    <div class="content">
        <div class="project-image">
            <img src={project.image} alt="" />
        </div>
        <div class="text">
            <h3>{project.title}</h3>
            <ul class="stack">
                {#each project.stack as tag}
                    <li class="stack-tag">{tag}</li>
                {/each}
            </ul>
            <p>{project.description}</p>
        </div>
    </div>

    <div class="links">
        <button class="btn primary" on:click={() => goto(`/projects/${project.slug}`)}
            >Read More</button
        >
        <div class="icons">
            {#if project.links.website}
                <a href={project.links.website} target="_blank">
                    <img src="/icons/external.svg" alt="Live version of the Project" class="icon" />
                </a>
            {/if}
            {#if project.links.github}
                <a href={project.links.github} target="_blank">
                    <img src="/icons/github.svg" alt="Project on GitHub" class="icon" />
                </a>
            {/if}
        </div>
    </div>
</div>
