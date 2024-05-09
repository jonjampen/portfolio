<script>
	import { ExternalLink, Github } from 'lucide-svelte';
	import Icon from '../components/ui/Icon.svelte';

	export let title, description, tags, slug, links, imagePath;
</script>

<div class="h-40 border-card my-3 flex gap-4 items-start w-[800px] lg:w-full md:flex-col md:h-auto sm:h-40 md:rounded-xl md:bg-card">
	<a href="/projects/{slug}" class="h-full md:aspect-auto aspect-[6/4] sm:w-full md:w-full" aria-label={title}>
		<img src={imagePath} alt="{title}" class="h-full w-full object-contain bg-card rounded-lg sm:w-full sm:h-full md:h-auto" />
	</a>
	<div class="px-3 lg:px-4 w-full">
        <h3 class="text-lg text-card-foreground font-medium mb-1">{title}</h3>
        <div class="flex gap-2 overflow-x-scroll scrollbar-hide -mx-4 px-4">
            {#each tags as tag}
                <div class="bg-card px-2 py-1 rounded-full text-card-foreground text-[10px] md:border md:border-secondary">{tag}</div>
            {/each}
        </div>
		<p class="text-sm text-card-foreground mb-3 mt-3">
			{description}
		</p>
		<div class="flex justify-between items-center mb-3">
			<a href="/projects/{slug}" class="text-secondary">Read more</a>
			<div class="flex gap-3 items-center">
				<Icon handleClick={() => window.open(links.github, '_blank')} title="Project Code" name="github"
					><Github class="w-6 h-6 text-gray hover:text-secondary"/></Icon
				>
				<Icon handleClick={() => window.open(links.project, '_blank')} title="Project Website" name="website"
					><ExternalLink class="w-6 h-6 text-gray hover:text-secondary" /></Icon
				>
			</div>
		</div>
	</div>
</div>
