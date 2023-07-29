<script>
	import { onMount } from 'svelte';
	import { getData } from '../../lib/getData';
	import { processProjects, processTags } from '../../lib/processData';
	import ProjectCarousel from '../ProjectCarousel.svelte';
	import { db } from '../../lib/firebase.js';
	import { doc, setDoc } from 'firebase/firestore';

	let projects = [];
	let tags = [];
	let tagIds = [];

	onMount(async () => {
		projects = processProjects(await getData('projects'));
		[tags, tagIds] = processTags(await getData('tags'));
	});

	function changePublicState(event, project) {
		console.log(event.target.checked);
		console.log(project.id);
		let docRef = doc(db, 'projects', project.id);
		let data = {
			title: project.title,
			slug: project.slug,
			links: {
				github: project.links.github,
				website: project.links.website
			},
			date: project.date,
			description: project.description,
			body: project.body,
			imagepath: project.imagepath,
			public: event.target.checked,
			main: document.getElementById('mainInput').checked
		};
		setDoc(docRef, data);
	}

	function changeMainState(event, project) {
		console.log(event.target.checked);
		console.log(document.getElementById('publicInput').checked);
		let docRef = doc(db, 'projects', project.id);
		let data = {
			title: project.title,
			slug: project.slug,
			links: {
				github: project.links.github,
				website: project.links.website
			},
			date: project.date,
			description: project.description,
			body: project.body,
			imagepath: project.imagepath,
			public: document.getElementById('publicInput').checked,
			main: event.target.checked
		};
		setDoc(docRef, data);
	}
</script>

<section class="projects">
	<h2>Dashboard</h2>
	<table>
		<tr>
			<th>p</th>
			<th>m</th>
			<th>manage</th>
			<th>Title</th>
			<th>Slug</th>
			<th>Date</th>
			<th>Short Description</th>
			<th>Links</th>
			<th>Image</th>
		</tr>
		{#await projects then items}
			{#each items as project}
				<tr>
					<td
						><input
							type="checkbox"
							name="public"
							id="publicInput"
							on:change={(event) => changePublicState(event, project)}
							checked={project.public}
						/></td
					>

					<td
						><input
							type="checkbox"
							name="Main"
							id="mainInput"
							on:change={(event) => changeMainState(event, project)}
							checked={project.main}
						/></td
					>
					<td>
						<a class="edit" href="admin/create/{project.id}">edit</a>
						<p class="delete" on:click={() => deleteProject(project.id)}>delete</p>
					</td>
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
					<td><img src={project.imagepath} alt="" width="100px" /></td>
				</tr>
			{/each}
		{/await}
	</table>
</section>
