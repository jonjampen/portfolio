<script>
    import MultiSelect from "svelte-multiselect";
    import ProjectGrid from "../ProjectGrid.svelte";
    import { projects } from "../../data/projects.js";
    import { tags } from "../../data/tags.js";
    let selected = [];
    let searchText = "";
    // let filteredProjects = [];
    let filteredProjects;

    $: {
        if (selected.length === 0 && searchText.length === 0) {
            filteredProjects = projects;
        } else {
            /*             filteredProjects = projects
                .filter((project) => project.stack.some((tag) => selected.includes(tag)))
                .sort((a, b) => {
                    const aMatchingTags = a.stack.filter((tag) => selected.includes(tag)).length;
                    const bMatchingTags = b.stack.filter((tag) => selected.includes(tag)).length;
                    return bMatchingTags - aMatchingTags;
                }); */

            filteredProjects = projects
                .filter((project) => project.stack.some((tag) => selected.includes(tag)))
                .filter(
                    (project) =>
                        project.title.toLowerCase().includes(searchText.toLowerCase()) ||
                        project.description.toLowerCase().includes(searchText.toLowerCase()) ||
                        project.body.toLowerCase().includes(searchText.toLowerCase())
                )
                .sort((a, b) => {
                    const aMatchingTags = a.stack.filter((tag) => selected.includes(tag)).length;
                    const bMatchingTags = b.stack.filter((tag) => selected.includes(tag)).length;
                    return bMatchingTags - aMatchingTags;
                });
        }
    }
</script>

<svelte:head>
    <title>Projects by Jon Jampen</title>
    <meta name="description" content="Explore the projects created by Jon Jampen." />
    <link rel="“canonical“" href="https://www.jonjampen.ch/projects" />
    <meta property="og:title" content="Projects by Jon Jampen" />
    <meta property="og:url" content="https://www.jonjampen.ch/projects" />
    <meta property="og:description" content="Explore the projects created by Jon Jampen." />
    <meta property="og:image" content="/favicon.svg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Projects by Jon Jampen" />
    <meta name="twitter:description" content="Explore the projects created by Jon Jampen." />
</svelte:head>

<section class="projects-grid">
    <h2>My Projects</h2>

    <!--  <p class="title-info" style="display: block;">Filtered by: {searchText}</p>
    <br />
    <div class="filters">
        <input type="text" class="filter" placeholder="Search..." bind:value={searchText} />
        <MultiSelect
            --sms-width="100%"
            --sms-max-width="500px"
            class="filter"
            --sms-border="none"
            --sms-bg="var(--secondary)"
            --sms-border-radius="8px"
            --sms-options-bg="var(--secondary)"
            --sms-selected-bg="var(--accent)"
            --sms-remove-btn-hover-color="var(--primary)"
            --sms-placeholder-color="var(--gray)"
            bind:selected
            options={tags}
            placeholder="Select tags"
        />
    </div> -->
    <br />

    <ProjectGrid projects={filteredProjects} />
</section>
