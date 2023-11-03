<script>
	import { onMount } from "svelte";
    import Breadcrumbs from "../../../components/ui/Breadcrumbs.svelte";
import PageTitle from "../../../components/ui/PageTitle.svelte";
	import Icon from "../../../components/ui/Icon.svelte";
	import { ArrowLeft, ExternalLink, Github } from "lucide-svelte";

    export let title, date, tags, github, project;
    let path = ["projects", title]
</script>

<div class="flex justify-between items-center">
    <Breadcrumbs path={path} date={date} />
    <div class="flex gap-4">
            <Icon handleClick={() => {window.open(github, "_blank")}}><Github class="text-secondary"/></Icon>
        <Icon handleClick={() => {window.open(project, "_blank")}}><ExternalLink class="text-secondary"/></Icon>
    </div>
</div>
<PageTitle>{title}</PageTitle>
<div class="flex gap-2 overflow-x-scroll scrollbar-hide mt-4">
    {#each tags as tag}
        <div class="bg-card px-2 py-1 rounded-full text-card-foreground text-xs">{tag}</div>
    {/each}
</div>
<slot/>
<a href="/projects" class="flex gap-1"><ArrowLeft/> Back to all projects</a>

<style>    
    * {
        color: var(--foreground)
    }
    </style>