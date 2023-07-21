<script>
	import { onMount } from 'svelte';
	import { getData } from '../../../lib/getData.js';
	import { processProjects } from '../../../lib/processData.js';

	export let data;
	let projects = [];
	let project;

	onMount(async () => {
		projects = processProjects(await getData('projects', data.slug));
		project = projects[0];
	});
</script>

<div class="content">
	{#await projects then items}
		{#each items as project}
			<div class="titlebar">
				<div class="title">
					<h1>{project.title}</h1>
					<div class="meta">
						<p>{project.date} - Jon Jampen</p>
					</div>
				</div>
				<div class="icons">
					<a href={project.links.website} target="_blank">
						<img src="/icons/external.svg" alt="Live version of the Project" class="icon" />
					</a>
					<a href={project.links.github} target="_blank">
						<img src="/icons/github.svg" alt="Project on GitHub" class="icon" />
					</a>
				</div>
			</div>

			<p>{project.body}</p>
		{/each}
	{/await}
</div>

<div class="right-content">
	<div class="tags">
		{#await projects then items}
			{#each items as project}
				{#each project.tags as tag}
					<a href="/tags/{tag}" class="tag">{tag}</a>
				{/each}
			{/each}
		{/await}
	</div>

	<div class="related">
		<h3>Related Projects</h3>
	</div>
</div>
