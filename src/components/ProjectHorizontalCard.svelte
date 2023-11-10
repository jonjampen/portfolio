<script>
	import { ExternalLink, Github } from 'lucide-svelte';
	import Icon from '../components/ui/Icon.svelte';

	export let title, description, tags, slug, links, imagePath;
</script>

<div class="h-40 border-card my-3 flex gap-8 items-start w-[800px] lg:max-w-full lg:flex-col lg:h-auto">
	<a href="/projects/{slug}" class="h-full aspect-[6/4] sm:w-full">
		<img src={imagePath} alt="Screenshot of Fatigue Diary" class="h-full w-full object-cover bg-card rounded-lg sm:w-full" />
	</a>
	<div class="px-3 lg:px-0">
        <h3 class="text-lg text-card-foreground font-medium mb-1">{title}</h3>
        <div class="flex gap-2 overflow-x-scroll scrollbar-hide">
            {#each tags as tag}
                <div class="bg-card px-2 py-1 rounded-full text-card-foreground text-[10px]">{tag}</div>
            {/each}
        </div>
		<p class="text-sm text-card-foreground mb-3 mt-2">
			{description}
		</p>
		<div class="flex justify-between items-center">
			<a href="/projects/{slug}" class="text-secondary">Read more</a>
			<div class="flex gap-3 items-center mb-3">
				<Icon handleClick={() => window.open(links.github, '_blank')} title="Project Code"
					><Github class="w-6 h-6 text-gray hover:text-secondary"/></Icon
				>
				<Icon handleClick={() => window.open(links.project, '_blank')} title="Project Website"
					><ExternalLink class="w-6 h-6 text-gray hover:text-secondary" /></Icon
				>
			</div>
		</div>
	</div>
</div>
