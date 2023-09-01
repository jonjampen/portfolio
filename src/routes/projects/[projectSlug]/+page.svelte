<script>
    import { onMount } from "svelte";
    export let data;

    let project = data.project;
    let componentName = project.slug;
    let Component;

    function importComponent(componentName) {
        return import(`../../../data/projects/${componentName}.svelte`);
    }

    onMount(async () => {
        Component = (await importComponent(componentName)).default;
    });
</script>

<svelte:head>
    <title>{project.title} by Jon Jampen</title>
    <meta name="description" content={project.description} />
    <link rel="“canonical“" href="https://www.jonjampen.ch/projects/{project.slug}" />
    <meta property="og:title" content="{project.title} by Jon Jampen" />
    <meta property="og:url" content="https://www.jonjampen.ch/projects/{project.slug}" />
    <meta property="og:description" content={project.description} />
    <meta property="og:image" content={project.image} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{project.title} by Jon Jampen" />
    <meta name="twitter:description" content={project.description} />
</svelte:head>

<section class="project-content">
    <div class="content card">
        <div class="titlebar">
            <div class="title">
                <h1>{project.title}</h1>
                <div class="meta">
                    <p>{project.date} • Jon Jampen</p>
                </div>
            </div>
        </div>

        <article class="body">
            <svelte:component this={Component} />
        </article>
    </div>
    <div class="right-content">
        <div class="links card">
            <h3>Project Links</h3>
            <div class="icons">
                {#if project.links.website}
                    <a href={project.links.website} target="_blank">
                        <img
                            src="/icons/external.svg"
                            alt="Live version of the Project"
                            class="icon"
                        />
                    </a>
                {/if}
                {#if project.links.github}
                    <a href={project.links.github} target="_blank">
                        <img src="/icons/github.svg" alt="Project on GitHub" class="icon" />
                    </a>
                {/if}
                {#if project.links.download}
                    <a href={project.links.download} target="_blank" download>
                        <img src="/icons/download.svg" alt="Download" class="icon" />
                    </a>
                {/if}
            </div>
        </div>

        <div class="tags card">
            <h3>Project Stack</h3>
            <div class="stack">
                {#each project.stack as tag}
                    <div class="stack-tag">{tag}</div>
                {/each}
            </div>
        </div>

        <!-- <div class="related card">
            <h3>Related Projects</h3>
        </div> -->
    </div>
</section>
