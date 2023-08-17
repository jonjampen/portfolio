<script>
    import { goto } from "$app/navigation";
    export let project;
</script>

<div class="project">
    <div class="content">
        <div class="project-image">
            <img src={project.imagepath} alt="" />
        </div>
        <div class="text">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    </div>

    <div class="links">
        <button class="btn primary" on:click={() => goto(`/projects/${project.slug}`)}
            >Read More</button
        >
        <div class="icons">
            <a href={project.links.website} target="_blank">
                <img src="/icons/external.svg" alt="Live version of the Project" class="icon" />
            </a>
            <a href={project.links.github} target="_blank">
                <img src="/icons/github.svg" alt="Project on GitHub" class="icon" />
            </a>
        </div>
    </div>
</div>
