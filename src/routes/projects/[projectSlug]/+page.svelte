<script>
    import { MetaTags } from "svelte-meta-tags";
    import { projects } from "../../../data/projects.js";
    import { onMount } from "svelte";

    export let data;
    let project;
    let componentName = data.slug;
    let Component;

    projects.map((projectToCheck) => {
        if (projectToCheck.slug === data.slug) project = projectToCheck;
    });

    function importComponent(componentName) {
        return import(`../../../data/projects/${componentName}.svelte`);
    }

    onMount(async () => {
        Component = (await importComponent(componentName)).default;
    });
</script>

<section class="project-content">
    <div class="content card">
        <MetaTags
            title={`${project.title} | Jon Jampen`}
            description={project.description}
            canonical={`https://www.jonjampen.ch/${project.slug}`}
            openGraph={{
                url: `https://www.jonjampen.ch/${project.slug}`,
                title: `${project.title} | Jon Jampen`,
                description: project.description,
                images: [
                    {
                        url: "https://www.example.ie/og-image-01.jpg",
                        width: 800,
                        height: 600,
                        alt: "Og Image Alt",
                    },
                ],
                site_name: "Jon Jampen",
            }}
            twitter={{
                cardType: "summary_large_image",
                title: `${project.title} | Jon Jampen`,
                description: project.description,
                imageAlt: `${project.title}`,
            }}
            facebook={{
                // appId: "1234567890",
            }}
        />

        <div class="titlebar">
            <div class="title">
                <h1>{project.title}</h1>
                <div class="meta">
                    <p>{project.date} • Jon Jampen</p>
                </div>
            </div>
        </div>

        <div class="body">
            <svelte:component this={Component} />
        </div>
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
                    <a href="/tags/{tag}" class="stack-tag">{tag}</a>
                {/each}
            </div>
        </div>

        <div class="related card">
            <h3>Related Projects</h3>
        </div>
    </div>
</section>
