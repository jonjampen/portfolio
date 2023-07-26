<script>
	import { onMount } from 'svelte';
	import { getData } from '../../lib/getData';
	import { processProjects, processTags } from '../../lib/processData';
	import ProjectCarousel from '../ProjectCarousel.svelte';

	let projects = [];
	let tags = [];
	let tagIds = [];

	onMount(async () => {
		projects = processProjects(await getData('projects'));
		[tags, tagIds] = processTags(await getData('tags'));
	});
</script>

<section class="projects">
	<h2>Dashboard</h2>
	<table>
		<tr>
			<th />
			<th>Title</th>
			<th>Slug</th>
			<th>Date</th>
			<th>Short Description</th>
			<th>Links</th>
			<th>Image</th>
			<th>Main</th>
		</tr>
		{#await projects then items}
			{#each items as project}
				<tr>
					<td><input type="checkbox" name="public" id="" /></td>
					<td>{project.title}</td>
					<td>{project.slug}</td>
					<td>{project.date}</td>
					<td>{project.description}</td>
					<td>
						<a href={project.links.website} target="_blank">
							<img src="/icons/external.svg" alt="Live version of the Project" class="icon" />
						</a>
						<a href={project.links.github} target="_blank">
							<img src="/icons/github.svg" alt="Project on GitHub" class="icon" />
						</a>
					</td>
					<td />
					<td><input type="checkbox" name="Main" id="" /></td>
				</tr>
			{/each}
		{/await}
	</table>
</section>
