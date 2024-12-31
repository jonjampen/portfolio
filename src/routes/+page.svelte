<script>
	import PageSubTitle from '../components/ui/PageSubTitle.svelte';
	import PageTitle from '../components/ui/PageTitle.svelte';
	import Avatar from '../components/ui/Avatar.svelte';
	import Paragraph from '../components/ui/Paragraph.svelte';
	import Button from '../components/ui/Button.svelte';
	import { goto } from '$app/navigation';
	import Icon from '../components/ui/Icon.svelte';
	import { Github, Mail, Twitter } from 'lucide-svelte';
	import SEO  from '../components/SEO.svelte';

	export let data
</script>

<SEO meta={data.meta} type="homepage"/>

<section class="flex sm:flex-col gap-8 items-center sm:items-start relative">
		<Avatar class="w-24 h-24" badge={data.wakatime} />
	<div class="">
		<h6 class="text-gray text-lg mb-1">👋 Hey, I’m</h6>
		<PageTitle>Jon Jampen</PageTitle>
		<PageSubTitle>a Computer Science student 🎓</PageSubTitle>
	</div>
</section>

<section>
	<div class="flex gap-16 sm:flex-col items-start mt-16 mb-4">
		<div>
			<Paragraph>
				I’m a Computer Science student, passionate about building websites, apps, plugins, and more. This website showcases some of my favorite projects I’ve worked on.
				<br />
				<br />
				Happy coding! 👨‍💻
			</Paragraph>
			<div class="flex justify-between items-center sm:items-start sm:flex-col gap-4 sm:gap-8 mt-4">
				<div class="flex gap-4 items-center">
					<Icon handleClick={() => (window.location.href = `mailto:${import.meta.env.VITE_EMAIL}`)} name="email">
						<Mail class="w-8 h-8 text-gray hover:text-secondary" />
					</Icon>
					<Icon handleClick={() => window.open(import.meta.env.VITE_GITHUB_URL, '_blank')} name="github">
						<Github class="w-8 h-8 text-gray hover:text-secondary" />
					</Icon>
					<Icon handleClick={() => window.open("https://x.com/jonjampen", '_blank')} name="github">
						<Twitter class="w-8 h-8 text-gray hover:text-secondary" />
					</Icon>
					<a href="/links" class="text-gray hover:text-secondary">More links</a>
				</div>
			</div>
		</div>
		<div class="flex flex-col border border-card rounded-lg text-foreground px-4 py-2 gap-1 sm:w-full">
			<h4 class="text-sm font-medium text-gray">Coding Time</h4>
			<p class="text-xl font-semibold whitespace-nowrap">{data.wakatime.totaltime || "--"}</p>
			<p class="text-gray font-thin text-xs">since 2024</p>
		</div>
	</div>

	<div class="flex justify-between mt-16 items-center mb-4">
		<h3 class="text-2xl font-semibold text-foreground mb-4">Featured Projects</h3>
		<Button styleType="primary" handleClick={() => goto('/projects')}>My Projects</Button>
	</div>

	<div class="flex lg:flex-col md:gap-6 gap-12 mb-8">
		<div class="flex gap-8 border border-card rounded-lg text-foreground px-4 py-2 sm:w-full ">
			<a href="https://obsidian.md/plugins?id=xournalpp" target="_blank">
				<div class="h-16 aspect-square">
					<img src="/images/appIcons/obsidian.png" alt="Fatigue Diary Logo" class="h-full" />
				</div>
			</a>
			<div class="flex flex-col gap-2">
				<h4 class="font-semibold text-xl"><a href="https://obsidian.md/plugins?id=xournalpp" target="_blank">Obsidian Plugin: Xournal++</a></h4>
				<p class="text-gray">A seamless integration of Xournal++ into Obsidian for digital, handwritten notes and PDF annotations.</p>
			</div>
		</div>
		<div class="flex gap-8 border border-card rounded-lg text-foreground px-4 py-2 sm:w-full ">
			<a href="https://fatiguediary.ch/" target="_blank">
				<div class="bg-[#ffffff] rounded-lg h-16 aspect-square">
					<img src="/images/appIcons/fatiguediary.svg" alt="Fatigue Diary Logo" class="h-full" />
				</div>
			</a>
			<div class="flex flex-col gap-2">
				<h4 class="font-semibold text-xl"><a href="https://fatiguediary.ch/" target="_blank">Fatigue Diary</a></h4>
				<p class="text-gray">An app for people with Chronic Fatigue Syndrome to effortlessly monitor and analyze their energy levels.</p>
			</div>
		</div>
	</div>

</section>

<!-- mastodon verification -->
<a rel="me" href="https://mastodon.social/@jonjampen" class="hidden">Mastodon</a>