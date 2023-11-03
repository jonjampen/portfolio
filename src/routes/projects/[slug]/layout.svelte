<script>
	import "./project.css"
    import Breadcrumbs from "../../../components/ui/Breadcrumbs.svelte";
    import PageTitle from "../../../components/ui/PageTitle.svelte";
	import Icon from "../../../components/ui/Icon.svelte";
	import { ArrowLeft, ExternalLink, Github, Share2 } from "lucide-svelte";
    import { page } from '$app/stores';
    import sharePage from "$lib/share.js";

    export let title, date, tags, links, description;
    let path = ["projects", title]
</script>

<article>
        <div class="flex justify-between items-center">
            <Breadcrumbs path={path} date={date} />
        <div class="flex gap-4">
            <Icon handleClick={() => {window.open(links.github, "_blank")}}><Github class="text-secondary"/></Icon>
            <Icon handleClick={() => {window.open(links.project, "_blank")}}><ExternalLink class="text-secondary"/></Icon>
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
        <button on:click={() => sharePage($page.path, title, description)} class="flex gap-1 mt-4 items-center text-secondary"><Share2 class="h-4 w-4 text-secondary"/> Share this project</button>
    </div>
</article>