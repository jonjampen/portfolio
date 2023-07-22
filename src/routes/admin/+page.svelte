<script>
	import { onMount } from 'svelte';
	import { db } from '../../lib/firebase';
	import { collection, addDoc } from 'firebase/firestore';

	async function addProject(e) {
		console.log(e.target.title.value);
		let inputs = e.target;
		let project = {
			title: inputs.title.value,
			links: {
				github: inputs.linkGH.value,
				website: inputs.linkWEB.value
			},
			date: inputs.date.value,
			description: inputs.shortDesc.value,
			body: inputs.body.value
		};
		let colRef = collection(db, 'projects');
		let value = await addDoc(colRef, project);
	}

	let editor;

	export let toolbarOptions = [
		[{ header: 1 }, { header: 2 }, 'blockquote', 'link', 'image', 'video'],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }, { list: 'ordered' }],
		[{ align: [] }],
		['clean']
	];

	onMount(async () => {
		const { default: Quill } = await import('quill');

		let quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'snow',
			placeholder: 'Write the project text...'
		});
	});
</script>

<div class="no-style">
	<div class="editor-wrapper">
		<div bind:this={editor} />
	</div>
</div>

<form on:submit|preventDefault={addProject}>
	<input type="text" name="title" id="" />
	<input type="text" name="linkGH" id="" />
	<input type="text" name="linkWEB" id="" />
	<input type="date" name="date" id="" />
	<textarea name="shortDesc" id="" cols="30" rows="10" />
	<textarea name="body" id="" cols="50" rows="10" />
	<button type="submit">Add Project</button>
</form>

<style>
	@import '../../style/quill.css';
</style>
