<script>
	import "./project.css"
    import Breadcrumbs from "../../../components/ui/Breadcrumbs.svelte";
    import PageTitle from "../../../components/ui/PageTitle.svelte";
	import Icon from "../../../components/ui/Icon.svelte";
	import { ArrowLeft, ExternalLink, Github, Share2 } from "lucide-svelte";
    import { page } from '$app/stores';
    import sharePage from "$lib/share.js";
	import SEO from "../../../components/SEO.svelte";

    export let title, slug, date, tags, links, description, imagePath;
    let path = ["projects", title]
    let metadata = {
        title: title,
        description: description,
        keywords: "Jon Jampen, programming, coding, computer science, web development, portfolio, website, personal website, projects, work, learning, education, portfolio, coding projects" + tags,
        canonical: "/projects/" + slug,
        image: "https://jonjampen.ch" + imagePath,
    }
</script>

<SEO meta={metadata} type="project" />

<article>
    <div class="flex justify-between items-center">
        <p class="text-gray">{date}</p>
        <div class="flex gap-4">
            {#if links.github}
                <Icon handleClick={() => {window.open(links.github, "_blank")}} title="Project Code" name="github"><Github class="text-secondary"/></Icon>
            {/if}
            {#if links.project}
                <Icon handleClick={() => {window.open(links.project, "_blank")}} title="Project Website" name="website"><ExternalLink class="text-secondary"/></Icon>
            {/if}
        </div>
    </div>
    <PageTitle class="mt-2">{title}</PageTitle>
    <div class="flex gap-2 overflow-x-scroll scrollbar-hide mt-4 mb-9">
        {#each tags as tag}
            <div class="bg-card px-2 py-1 rounded-full text-card-foreground text-xs">{tag}</div>
        {/each}
    </div>
    <slot/>
    <hr class="mt-20 text-card">
    <div class="flex justify-between">
        <a href="/projects" class="flex gap-1 mt-4 items-center"><ArrowLeft class="h-4 w-4"/> Back to all projects</a>
        <button on:click={() => sharePage(window.location.href, title, description)} name="share" class="flex gap-1 mt-4 items-center text-secondary"><Share2 class="h-4 w-4 text-secondary"/> Share this project</button>
    </div>
</article>