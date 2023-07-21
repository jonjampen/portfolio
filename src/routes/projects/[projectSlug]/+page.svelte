<script>
	import { onMount } from 'svelte';
	import { getData } from '../../../lib/getData.js';
	import { processProjects, processTags2 } from '../../../lib/processData.js';

	export let data;
	let projects = [];
	let project;

	let tags = [];

	onMount(async () => {
		projects = processProjects(await getData('projects', data.slug));
		project = projects[0];

		tags = processTags2(await getData('tags'));
	});
</script>

<section class="project-content">
	<div class="content card">
		{#await projects then items}
			{#each items as project}
				<div class="titlebar">
					<div class="title">
						<h1>{project.title}</h1>
						<div class="meta">
							<p>{project.date} • Jon Jampen</p>
						</div>
					</div>
				</div>

				<p>{project.body}</p>
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
							<img src="/icons/external.svg" alt="Live version of the Project" class="icon" />
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
