<script>
	import PageSubTitle from '../components/ui/PageSubTitle.svelte';
	import PageTitle from '../components/ui/PageTitle.svelte';
	import Avatar from '../components/ui/Avatar.svelte';
	import Paragraph from '../components/ui/Paragraph.svelte';
	import Button from '../components/ui/Button.svelte';
	import { goto } from '$app/navigation';
	import Icon from '../components/ui/Icon.svelte';
	import { Github, Mail } from 'lucide-svelte';
	import SEO  from '../components/SEO.svelte';

	export let data
</script>

<SEO meta={data.meta} type="homepage"/>

<!-- <div class="bg-primary-light rounded border-primary border px-4 py-2 mb-10 mt-[-30px] text-foreground">
	🎄Check out my Advent of Code solutions in JavaScript <a href="https://advent.jonjampen.ch" target="_blank">here</a>!
</div> -->

<section class="flex sm:flex-col gap-8 items-center sm:items-start relative">
		<Avatar class="w-24 h-24" badge={data.wakatime} />
	<div class="">
		<h6 class="text-gray text-lg mb-1">👋 Hey, I’m</h6>
		<PageTitle>Jon Jampen</PageTitle>
		<PageSubTitle>I write code and create websites</PageSubTitle>
	</div>
</section>

<section>
	<Paragraph class="mt-16 mb-10">
		Hey, I'm Jon, a 19-year-old programming enthusiast. I caught the coding bug at age 12 😉, and
		I've been fascinated with computer science ever since. Web development has become my passion,
		and with my recent completion of the matura, I'm all set to explore computer science in-depth.
		This website showcases my projects and provides a way to connect.
		<br />
		<br />
		Happy coding!
	</Paragraph>
	<div class="flex justify-between items-center sm:items-start sm:flex-col gap-4 sm:gap-8">
		<div class="flex gap-4 items-center">
			<Button styleType="primary" handleClick={() => goto('/projects')}>My Projects</Button>
			<Icon handleClick={() => (window.location.href = `mailto:${import.meta.env.VITE_EMAIL}`)} name="email">
			<Mail class="w-8 h-8 text-gray hover:text-secondary" />
		</Icon>
		<Icon handleClick={() => window.open(import.meta.env.VITE_GITHUB_URL, '_blank')} name="github">
			<Github class="w-8 h-8 text-gray hover:text-secondary" />
		</Icon>
		<a href="/links" class="text-gray hover:text-secondary">More links</a>
		</div>
			<div class="flex flex-col border border-card rounded-lg text-foreground px-4 py-2 gap-1 sm:w-full">
				<h4 class="text-sm font-medium text-gray">Coding Time</h4>
				<p class="text-xl font-semibold">{data.wakatime.totaltime || "--"}</p>
				<p class="text-gray font-thin text-xs">since 2024</p>
			</div>
	</div>
</section>

<!-- mastodon verification -->
<a rel="me" href="https://mastodon.social/@jonjampen" class="hidden">Mastodon</a>