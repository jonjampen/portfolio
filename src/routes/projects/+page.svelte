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

	<MultiSelect
		--sms-border="none"
		--sms-bg="var(--primary-transparent)"
		--sms-border-radius="8px"
		--sms-options-bg="var(--primary-semi-transparent)"
		--sms-selected-bg="var(--primary-transparent)"
		--sms-remove-btn-hover-color="var(--primary)"
		bind:selected
		options={ui_libs}
	/>
	<code>selected = {JSON.stringify(selected)}</code>
	<br />
	<ProjectCarousel />
</section>
