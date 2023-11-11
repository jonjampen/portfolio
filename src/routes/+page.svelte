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


<section class="flex sm:flex-col gap-8 items-center sm:items-start">
	<Avatar class="w-24 h-24" />
	<div class="">
		<h6 class="text-gray text-lg mb-1">👋 Hey, I’m</h6>
		<PageTitle>Jon Jampen</PageTitle>
		<PageSubTitle>I write code and create websites</PageSubTitle>
	</div>
</section>

<section>
	<Paragraph class="mt-16 mb-10">
		Hey, I'm Jon, an 18-year-old programming enthusiast. I caught the coding bug at age 12 😉, and
		I've been fascinated with computer science ever since. Web development has become my passion,
		and with my recent completion of the matura, I'm all set to explore computer science in-depth.
		This website showcases my projects and provides a way to connect.
		<br />
		<br />
		Happy coding!
	</Paragraph>

	<div class="flex gap-4 items-center">
		<Button styleType="primary" handleClick={() => goto('/about#contact')}>Contact me</Button>
		<Icon handleClick={() => (window.location.href = `mailto:${import.meta.env.VITE_EMAIL}`)}>
			<Mail class="w-8 h-8 text-gray hover:text-secondary" />
		</Icon>
		<Icon handleClick={() => window.open(import.meta.env.VITE_GITHUB_URL, '_blank')}>
			<Github class="w-8 h-8 text-gray hover:text-secondary" />
		</Icon>
		<a href="/links" class="text-gray hover:text-secondary">More links</a>
	</div>
</section>

<a rel="me" href="https://mastodon.social/@jonjampen" class="hidden">Mastodon</a>