<script>
	import ProjectCarousel from '../ProjectCarousel.svelte';
	import MultiSelect from 'svelte-multiselect';

	const tags = [
		'HTML',
		'CSS',
		'JavaScript',
		'PHP',
		'Svelte',
		'SvelteKit',
		'Svelte',
		'React',
		'ReactKit',
		'Next.js',
		'MySQL',
		'Firebase',
		'SvelteKit',
		'Svelte',
		'React',
		'ReactKit',
		'Next.js',
		'MySQL',
		'Firebase',
		'SvelteKit',
		'Svelte',
		'React',
		'ReactKit',
		'Next.js',
		'MySQL',
		'Firebase'
	];

	let selected = [];
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
			--sms-bg="var(--primary-transparent)"
			--sms-border-radius="8px"
			--sms-options-bg="var(--primary-semi-transparent)"
			--sms-selected-bg="var(--primary-transparent)"
			--sms-remove-btn-hover-color="var(--primary)"
			--sms-placeholder-color="var(--gray)"
			bind:selected
			options={tags}
			placeholder="Select tags"
		/>
		<button class="btn secondary">search</button>
	</div>
	<br />
	<ProjectCarousel />
</section>
