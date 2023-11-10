<script>
	import { ExternalLink, Github } from 'lucide-svelte';
	import Icon from '../components/ui/Icon.svelte';

	export let title, description, tags, slug, links, imagePath;
</script>

<div class="border rounded-lg w-72 min-h-80 border-card my-3 sm:w-full">
	<a href="/projects/{slug}">
		<img src={imagePath} alt="Screenshot of Fatigue Diary" class="w-full"/>
	</a>
		<div class="flex gap-2 overflow-x-scroll scrollbar-hide pl-3">
        {#each tags as tag}
            <div class="bg-card px-2 py-1 rounded-full text-card-foreground text-xs">{tag}</div>
        {/each}
    </div>
	<div class="px-3">
		<h3 class="text-lg text-card-foreground font-medium mt-3">{title}</h3>
		<p class="text-sm text-card-foreground mb-3 mt-2">
			{description}
		</p>
		<div class="flex justify-between items-center">
			<a href="/projects/{slug}" class="text-secondary">Read more</a>
			<div class="flex gap-3 items-center mb-3">
				<Icon handleClick={() => window.open(links.github, '_blank')} title="Project Code"
					><Github class="w-6 h-6 text-gray hover:text-secondary" /></Icon
				>
				<Icon handleClick={() => window.open(links.project, '_blank')} title="Project Website"
					><ExternalLink class="w-6 h-6 text-gray hover:text-secondary" /></Icon
				>
			</div>
		</div>
	</div>
</div>
