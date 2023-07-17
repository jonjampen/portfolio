<script>
	import { onMount } from 'svelte';
	import { getData } from '../lib/getData';
	import { processProjects, processTags } from '../lib/processData';
	import ProjectCarousel from './ProjectCarousel.svelte';
	import MultiSelect from 'svelte-multiselect';

	let selectedTags = [];
	let projects = [];
	let tags = [];
	let tagIds = [];

	onMount(async () => {
		// get all projects and tags
		projects = processProjects(await getData('projects'));
		[tags, tagIds] = processTags(await getData('tags'));
	});
</script>

<section class="projects">
	<h2>Projects</h2>
	<h6>View all my projects <a href="/projects">here</a></h6>
	{#await projects then items}
		<ProjectCarousel projects={items} />
	{/await}

	<div class="center">
		<button class="btn accent" on:click={() => goto('/projects')}>All my projects</button>
	</div>
</section>
