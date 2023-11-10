<script>
	import PageTitle from '../../components/ui/PageTitle.svelte';
	import PageSubTitle from '../../components/ui/PageSubTitle.svelte';
	import ProjectCard from '../../components/ProjectCard.svelte';
	import ProjectHorizontalCard from '../../components/ProjectHorizontalCard.svelte';
	export let data;
</script>

<PageTitle>My Projects</PageTitle>
<PageSubTitle class="mb-8">Projects I’ve built</PageSubTitle>
<div class="flex gap-8 md:flex-col">
	{#each data.projects as project}
		{#if project.meta.main}
			<ProjectCard
				title={project.meta.title}
				description={project.meta.description}
				tags={project.meta.tags}
				slug={project.meta.slug}
				links={project.meta.links}
				imagePath={project.meta.imagePath}
			/>
		{/if}
	{/each}
</div>

<PageSubTitle class="mt-16">OTHER PROJECTS</PageSubTitle>
<div class="flex flex-col gap-8">
	{#each data.projects as project}
		{#if !project.meta.main}
            <ProjectHorizontalCard
				title={project.meta.title}
				description={project.meta.description}
				tags={project.meta.tags}
				slug={project.meta.slug}
				links={project.meta.links}
				imagePath={project.meta.imagePath}
			/>
		{/if}
	{/each}
</div>