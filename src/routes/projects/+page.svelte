<script>
	import PageTitle from '../../components/ui/PageTitle.svelte';
	import PageSubTitle from '../../components/ui/PageSubTitle.svelte';
	import ProjectCard from '../../components/ProjectCard.svelte';
	import ProjectHorizontalCard from '../../components/ProjectHorizontalCard.svelte';
	import SmallProjectCard from '../../components/SmallProjectCard.svelte';
	import SEO from '../../components/SEO.svelte';
	export let data;
</script>
<SEO meta={data.meta} />

<PageTitle>My Projects</PageTitle>
<PageSubTitle class="mb-8">Projects I’ve built</PageSubTitle>
<div class="flex flex-col gap-8">
	{#each data.projects as project}
		{#if project.meta.main}
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

<PageSubTitle class="mt-16">SMALLER PROJECTS</PageSubTitle>
<br />
<div class="flex flex-wrap w-full gap-4">
	{#each data.smallProjects as project}
		<SmallProjectCard
			title={project.title}
			link={project.link}
			image={project.image}
		/>
	{/each}
</div>