<script>
	import ProjectCarousel from '../ProjectCarousel.svelte';
	import MultiSelect from 'svelte-multiselect';

	const ui_libs = [`Svelte`, `React`, `Vue`, `Angular`, `...`];

	let selected = [];
</script>

<section class="projects-grid">
	<h2>My Projects</h2>
	<h6 style="display: none;">Filtered by:</h6>
	<br />

	<MultiSelect bind:selected options={ui_libs} />
	<code>selected = {JSON.stringify(selected)}</code>
	<br />
	<ProjectCarousel />
</section>
