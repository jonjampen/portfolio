<script>
	import { onMount } from 'svelte';
	import ProjectCarousel from '../ProjectCarousel.svelte';
	import MultiSelect from 'svelte-multiselect';
	import { db } from '../../lib/firebase';
	import { collection, getDocs } from 'firebase/firestore';

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

	async function getProjects() {
		let colRef = collection(db, 'projects');
		let snapshot = await getDocs(colRef);
		let retVal = [];
		snapshot.forEach((doc) => {
			retVal.push({ ...doc.data(), id: doc.id });
			console.log(doc.id, '=>', doc.data());
		});

		return retVal;
	}
	let projects = [];

	onMount(async () => {
		// get all projects
		projects = await getProjects();
		console.log('p', projects);
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

	{#await projects then items}
		<ProjectCarousel projects={items} />

	{/await}

</section>
