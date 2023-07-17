<script>
	import { onMount } from 'svelte';
	import { getData } from '../../lib/getData';
	import { processProjects, processTags } from '../../lib/processData';
	import ProjectCarousel from '../ProjectCarousel.svelte';
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

<section class="projects-grid">
	<h2>My Projects</h2>
	<h6 style="display: none;">Filtered by:</h6>
	<br />
	<div class="filters">
		<input type="text" class="filter" placeholder="Search..." />
		<MultiSelect
			--sms-width="100%"
			--sms-max-width="500px"
			class="filter"
			--sms-border="none"
			--sms-bg="var(--secondary)"
			--sms-border-radius="8px"
			--sms-options-bg="var(--secondary)"
			--sms-selected-bg="var(--accent)"
			--sms-remove-btn-hover-color="var(--primary)"
			--sms-placeholder-color="var(--gray)"
			bind:selectedTags
			options={tags}
			placeholder="Select tags"
		/>
	</div>
	<br />

	{#await projects then items}
		<ProjectCarousel projects={items} tags={tagIds} />
	{/await}
</section>
