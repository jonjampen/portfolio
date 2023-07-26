<script>
	import { onMount } from 'svelte';
	import { db } from '../../lib/firebase';
	import { collection, addDoc } from 'firebase/firestore';

	async function addProject(e) {
		let inputs = e.target;
		let project = {
			title: inputs.title.value,
			links: {
				github: inputs.linkGH.value,
				website: inputs.linkWEB.value
			},
			date: inputs.date.value,
			description: inputs.shortDesc.value,
			body: quill.root.innerHTML
		};
		let colRef = collection(db, 'projects');
		let value = await addDoc(colRef, project);
	}

	let editor;

	export let toolbarOptions = [
		[{ size: ['small', false, 'large', 'huge'] }],
		[{ header: [2, 3, 4, 5, 6, false] }],
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link', 'image', 'video'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ align: [] }],
		['clean']
	];
	let quill;

	onMount(async () => {
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

<div class="no-style" />

<form on:submit|preventDefault={addProject}>
	<label for="title">Title</label>
	<input type="text" name="title" id="" />
	<label for="linkGH">GitHub Link</label>
	<input type="text" name="linkGH" id="" />
	<label for="linkWEB">Website Link</label>
	<input type="text" name="linkWEB" id="" />
	<label for="date">Date</label>
	<input type="date" name="date" id="" />
	<label for="shortDesc">Short Description</label>
	<textarea name="shortDesc" id="" cols="30" rows="10" />
	<!-- <textarea name="body" id="" cols="50" rows="10" /> -->
	<label for="body">Body</label>
	<div class="editor-wrapper">
		<div bind:this={editor} id="editor" />
	</div>
	<button type="submit">Add Project</button>
</form>

<style>
	@import '../../style/quill.css';
</style>
