<script>
	import PageSubTitle from '../../components/ui/PageSubTitle.svelte';
	import PageTitle from '../../components/ui/PageTitle.svelte';
	import Avatar from '../../components/ui/Avatar.svelte';
	import Button from '../../components/ui/Button.svelte';
	import { goto } from '$app/navigation';
	import Icon from '../../components/ui/Icon.svelte';
	import { Dices, Github, Globe, Instagram, Mail, PenSquare, Smartphone } from 'lucide-svelte';
</script>

<section class="flex flex-col gap-4 items-center text-center">
	<Avatar class="w-24 h-24" />
	<div class="">
		<PageTitle>Jon Jampen</PageTitle>
		<PageSubTitle>I write code and create websites</PageSubTitle>
		<h6 class="text-primary text-lg mb-1 font-handwriting">@jonjampen</h6>
	</div>
</section>

<section class="w-full flex flex-col items-center">
	<div class="w-80 flex flex-col gap-11 mt-11">

		<div class="flex flex-col justify-center gap-4">
			<a href="https://jonjampen.ch/" class="border border-card rounded-lg h-12 w-full flex items-center gap-5 px-4 no-underline">
				<Globe class="text-gray" />
				<p class="text-foreground">www.jonjampen.ch</p>
			</a>
			<a href="mailto:hello@jonjampen.ch" class="border border-card rounded-lg h-12 w-full flex items-center gap-5 px-4 no-underline">
				<Mail class="text-gray" />
				<p class="text-foreground">hello@jonjampen.ch</p>
			</a>
			
			<div class="flex justify-between items-center gap-4">
				<a href="https://github.com/jonjampen/" target="_blank" class="border border-card rounded-lg h-auto w-full flex flex-col items-center justify-center gap-2 py-2 px-4 no-underline">
					<Github class="text-foreground" />
					<p class="text-gray">Github</p>
				</a>
				<a href="https://instagram.com/jonjampen/" target="_blank" class="border border-card rounded-lg h-auto w-full flex flex-col items-center justify-center gap-2 py-2 px-4 no-underline">
					<Instagram class="text-foreground" />
					<p class="text-gray">Instagram</p>
				</a>
				<a href="https://jonjampen.ch/about#contact" class="border border-card rounded-lg h-auto w-full flex flex-col items-center justify-center gap-2 py-2 px-4 no-underline">
					<PenSquare class="text-foreground" />
					<p class="text-gray">Contact</p>
				</a>
			</div>
		</div>

		<div class="flex flex-col gap-4">
			<div class="">
				<h3 class="text-foreground text-xl font-semibold">My Projects</h3>
				<PageSubTitle class="text-sm">View all my projects <a href="/projects" class="text-primary no-underline">here</a>.</PageSubTitle>
			</div>
			<div class="flex flex-col justify-center gap-4">
				<a href="https://fatiguediary.ch" target="_blank" class="border border-card rounded-lg h-12 w-full flex items-center gap-5 px-4 no-underline">
					<Smartphone class="text-gray" />
					<p class="text-foreground">Fatigue Diary</p>
				</a>
				<a href="https://cyber-crusade.vercel.app/" target="_blank" class="border border-card rounded-lg h-12 w-full flex items-center gap-5 px-4 no-underline">
					<Dices class="text-gray" />
					<p class="text-foreground">Cyber Crusade</p>
				</a>
			</div>
		</div>

	</div>
</section>
