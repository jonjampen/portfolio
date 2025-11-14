<script>
	import Mastodon from './../../components/Mastodon.svelte';
	import SEO from './../../components/SEO.svelte';
	import PageSubTitle from '../../components/ui/PageSubTitle.svelte';
	import PageTitle from '../../components/ui/PageTitle.svelte';
	import Avatar from '../../components/ui/Avatar.svelte';
	import Bluesky from '../../icons/Bluesky.svelte';
	import Button from '../../components/ui/Button.svelte';
	import { goto } from '$app/navigation';
	import Icon from '../../components/ui/Icon.svelte';
	import { Dices, Github, Globe, Instagram, Linkedin, Mail, NotebookPen, PenSquare, Smartphone, Twitter, Youtube } from 'lucide-svelte';

	export let data
</script>

<SEO meta={data.meta}/>

<section class="flex flex-col gap-4 items-center text-center">
	<Avatar class="w-16 h-16" />
	<div class="">
		<PageTitle>Jon Jampen</PageTitle>
		<PageSubTitle>BSc Computer Science Student</PageSubTitle>
		<!-- <h6 class="text-primary text-lg mb-1 font-handwriting">@jonjampen</h6> -->
	</div>
	<div class="flex flex-wrap justify-center gap-2">
		<a href="https://linkedin.com/in/jonjampen" target="_blank" class="aspect-square px-2 border border-card hover:border-primary hover:bg-card rounded-lg flex flex-col items-center justify-center no-underline">
			<Linkedin class="text-foreground w-6 h-6" />
		</a>
		<a href="https://github.com/jonjampen/" target="_blank" class="aspect-square px-2 border border-card hover:border-primary hover:bg-card rounded-lg flex flex-col items-center justify-center no-underline">
			<Github class="text-foreground w-6 h-6" />
		</a>
		<a href="mailto:hello@jonjampen.ch" target="_blank" class="aspect-square px-2 border border-card hover:border-primary hover:bg-card rounded-lg flex flex-col items-center justify-center no-underline">
			<Mail class="text-foreground w-6 h-6" />
		</a>
		<a href="https://x.com/jonjampen/" target="_blank" class="aspect-square px-2 border border-card hover:border-primary hover:bg-card rounded-lg flex flex-col items-center justify-center no-underline">
			<Twitter class="text-foreground w-6 h-6" />
		</a>
		<a href="https://mastodon.social/@jonjampen" target="_blank" class="aspect-square px-2 border border-card hover:border-primary hover:bg-card rounded-lg flex flex-col items-center justify-center no-underline">
			<Mastodon class="text-foreground w-6 h-6" />
		</a>
		<!-- <a href="https://youtube.com/@jonjampen/" target="_blank" class="aspect-square px-2 border border-card hover:border-primary hover:bg-card rounded-lg flex flex-col items-center justify-center no-underline">
			<Youtube class="text-foreground w-6 h-6" />
		</a> -->
	</div>
</section>

<section class="w-full flex flex-col items-center">
	<div class="w-80 flex flex-col gap-11 mt-11">
		<div class="flex flex-col gap-4">
			<div class="">
				<h3 class="text-foreground text-xl font-semibold">My Apps & Tools</h3>
			</div>
			<div class="flex flex-col justify-center gap-4">
				<a href="https://obsidian.md/plugins?id=xournalpp" target="_blank" class="border border-card hover:border-primary hover:bg-card rounded-lg py-2 w-full flex items-center gap-5 px-4 no-underline">
					<NotebookPen class="text-[#7c3aed] h-6 w-6" />
					<div class="flex flex-col">
						<h4 class="text-foreground font-medium">Obsidian Plugin: Xournal++</h4>
						<p class="text-gray text-sm">Handwritten notes and annotations</p>
					</div>
				</a>
				<a href="https://fatiguediary.ch" target="_blank" class="border border-card hover:border-primary hover:bg-card rounded-lg py-2 w-full flex items-center gap-5 px-4 no-underline">
					<img src="/images/appIcons/fatiguediary.svg" class="w-6 h-6" alt="Fatigue Diary">
					<div class="flex flex-col">
						<h4 class="text-foreground font-medium">Fatigue Diary</h4>
						<p class="text-gray text-sm">Track and manage Chronic Fatigue</p>
					</div>
				</a>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<div class="">
				<h3 class="text-foreground text-xl font-semibold">Other Links</h3>
				<PageSubTitle class="text-sm">View all my projects <a href="/projects" class="text-primary no-underline">here</a>.</PageSubTitle>
			</div>
			<div class="flex flex-col justify-center gap-4">
				<!-- <a href="https://fatiguediary.ch" target="_blank" class="border border-card hover:border-primary hover:bg-card rounded-lg h-12 w-full flex items-center gap-5 px-4 no-underline">
					<Smartphone class="text-gray" />
					<p class="text-foreground">Fatigue Diary</p>
				</a>
				<a href="https://obsidian.md/plugins?id=xounralpp" target="_blank" class="border border-card hover:border-primary hover:bg-card rounded-lg h-12 w-full flex items-center gap-5 px-4 no-underline">
					<NotebookPen class="text-gray" />
					<p class="text-foreground">Obsidian Plugin: Xournal++</p>
				</a> -->
			</div>
		</div>
	</div>
</section>
