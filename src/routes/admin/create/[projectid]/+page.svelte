<script>
	import { onMount } from 'svelte';
	import { db, storage } from '../../../../lib/firebase';
	import { doc, collection, addDoc, getDoc } from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
	import { goto } from '$app/navigation';

	export let data;
	let projectData = {
		title: '',
		description: '',
		slug: '',
		links: {
			github: '',
			website: ''
		},
		date: '',
		body: ''
	};

	async function addProject(e) {
		let inputs = e.target;

		let file = inputs.image.files[0];
		let imagepath;

		// Upload image
		let storageRef = ref(storage, `projects/${inputs.slug.value}`);
		let uploadTask = uploadBytesResumable(storageRef, file);

		// Get image path and upload project
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes + 100);
			},
			(err) => {
				console.log(err);
			},
			async () => {
				imagepath = await getDownloadURL(uploadTask.snapshot.ref);

				let project = {
					title: inputs.title.value,
					slug: inputs.slug.value,
					links: {
						github: inputs.linkGH.value,
						website: inputs.linkWEB.value
					},
					date: inputs.date.value,
					description: inputs.shortDesc.value,
					body: quill.root.innerHTML,
					imagepath: imagepath,
					public: false,
					main: false
				};

				let value = await addDoc(collection(db, 'projects'), project);
				goto('/admin');
			}
		);
	}

	// Quill editor
	let editor;
	let quill;
	export let toolbarOptions = [
		[{ header: [2, 3, 4, 5, 6, false] }],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['blockquote', 'link', 'image', 'video'],
		[{ align: [] }],
		['clean']
	];

	onMount(async () => {
		if (data.projectId) {
			projectData = (await getDoc(doc(db, 'projects', data.projectId))).data();
		}

		const { default: Quill } = await import('quill');
		quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Write the project text...'
		});
	});
</script>

<section>
	<h2>Create Project</h2>

	{data.projectId}
	<form on:submit|preventDefault={addProject}>
		<label for="title">Title</label>
		<input type="text" name="title" id="" value={projectData.title} />
		<label for="slug">Slug</label>
		<input type="text" name="slug" id="" value={projectData.slug} />
		<label for="slug">Image</label>
		<input type="file" name="image" id="" accept=".jpg, .jpeg, .png, .webp" />
		<label for="linkGH">GitHub Link</label>
		<input type="text" name="linkGH" id="" value={projectData.links.github} />
		<label for="linkWEB">Website Link</label>
		<input type="text" name="linkWEB" id="" value={projectData.links.website} />
		<label for="date">Date</label>
		<input type="date" name="date" id="" value={projectData.date} />

		<label for="shortDesc">Short Description</label>
		<textarea name="shortDesc" id="" cols="30" rows="10">{projectData.description}</textarea>

		<!-- Quill editor -->
		<label for="body">Body</label>
		<div class="editor-wrapper">
			<div bind:this={editor} id="editor">{@html projectData.body}</div>
		</div>

		<button type="submit" class="btn primary">Add Project</button>
	</form>
</section>

<style>
	@import '../../../../style/quill.css';
</style>
