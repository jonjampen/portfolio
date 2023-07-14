<script>
	import { onMount } from 'svelte';
	import ProjectCarousel from '../ProjectCarousel.svelte';
	import MultiSelect from 'svelte-multiselect';
	import { db } from '../../lib/firebase';
	import { collection, getDocs } from 'firebase/firestore';

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

	async function getTags() {
		let colRef = collection(db, 'tags');
		let snapshot = await getDocs(colRef);
		let tagNames = [];
		let tagIds = [];
		snapshot.forEach((doc) => {
			tagNames.push(doc.data().name);
			tagIds[doc.data().name] = doc.id;
		});

		return [tagNames, tagIds];
	}

	let projects = [];
	let tags = [];
	let tagIds = [];

	onMount(async () => {
		// get all projects
		projects = await getProjects();
		[tags, tagIds] = await getTags();
		console.log(tagIds['HTML']);
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
			bind:selected
			options={tags}
			placeholder="Select tags"
		/>
		<button class="btn secondary">search</button>
	</div>
	<br />

	{#await projects then items}
		<ProjectCarousel projects={items} tags={tagIds} />
	{/await}
</section>
