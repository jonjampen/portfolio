<script>
    import Project from "./Project.svelte";
    export let projects = [];
</script>

<div class="projects-container">
    {#each projects as project}
        {#if project.public}
            <Project {project} />
        {/if}
    {/each}
</div>
