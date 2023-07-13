<script>
	import ProjectCarousel from './ProjectCarousel.svelte';
	import { onMount } from 'svelte';
	import { db } from '../lib/firebase';
	import { collection, getDocs } from 'firebase/firestore';
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

<section class="projects">
	<h2>Projects</h2>
	<h6>View all my projects <a href="/projects">here</a></h6>
	{#await projects then items}
		<ProjectCarousel projects={items} />
	{/await}

	<div class="center">
		<button class="btn accent">All my projects</button>
	</div>
</section>
