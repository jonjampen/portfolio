<script>
    import { onMount } from "svelte";
    import { getData } from "../../../lib/getData.js";
    import { processProjects, processTags2 } from "../../../lib/processData.js";
    import { MetaTags } from "svelte-meta-tags";

    export let data;
    let projects = [];
    let project;

    let tags = [];

    onMount(async () => {
        projects = processProjects(await getData("projects", data.slug));
        project = projects[0];

        tags = processTags2(await getData("tags"));
    });
</script>

<section class="project-content">
    <div class="content card">
        {#await projects then items}
            {#each items as project}
                <MetaTags
                    title={`${project.title} | Jon Jampen`}
                    description={project.description}
                    canonical={`https://www.jonjampen.ch/${project.slug}`}
                    openGraph={{
                        url: `https://www.jonjampen.ch/${project.slug}`,
                        title: `${project.title} | Jon Jampen`,
                        description: project.description, // Remove curly braces
                        images: [
                            {
                                url: "https://www.example.ie/og-image-01.jpg",
                                width: 800,
                                height: 600,
                                alt: "Og Image Alt",
                            },
                            // Other image objects...
                        ],
                        site_name: "Jon Jampen",
                    }}
                    twitter={{
                        cardType: "summary_large_image",
                        title: `${project.title} | Jon Jampen`,
                        description: project.description, // Remove curly braces
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

                <p>{@html project.body}</p>
            {/each}
        {/await}
    </div>

    <div class="right-content">
        <div class="links card">
            <h3>Links</h3>
            {#await projects then items}
                {#each items as project}
                    <div class="icons">
                        <a href={project.links.website} target="_blank">
                            <img
                                src="/icons/external.svg"
                                alt="Live version of the Project"
                                class="icon"
                            />
                        </a>
                        <a href={project.links.github} target="_blank">
                            <img src="/icons/github.svg" alt="Project on GitHub" class="icon" />
                        </a>
                    </div>
                {/each}
            {/await}
        </div>

        <div class="tags card">
            <h3>Tags</h3>
            {#await projects then items}
                {#each items as project}
                    {#each project.tags as tag}
                        <a href="/tags/{tag}" class="tag">{tags[tag]}</a>
                    {/each}
                {/each}
            {/await}
        </div>

        <div class="related card">
            <h3>Related Projects</h3>
        </div>
    </div>
</section>
