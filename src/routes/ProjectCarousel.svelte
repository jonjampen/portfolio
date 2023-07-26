<script>
	import Project from './Project.svelte';
	export let projects;
	export let type = 'all';
</script>

<div class="projects-container">
	{#each projects as project}
		{#if project.public}
			{#if type == 'main' && project.main}
				<Project {project} />
			{:else if type == 'all'}
				<Project {project} />
			{/if}
		{/if}
	{/each}
</div>
