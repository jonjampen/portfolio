<script>
	import Button from './../../components/ui/Button.svelte';
	import PageTitle from '../../components/ui/PageTitle.svelte';
	import PageSubTitle from '../../components/ui/PageSubTitle.svelte';
	import Paragraph from '../../components/ui/Paragraph.svelte';
	import EducationItem from '../../components/EducationItem.svelte';
	import Label from '../../components/ui/Label.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import SEO from '../../components/SEO.svelte';
	import TechStack from '../../components/TechStack.svelte';
	import Icon from '../../components/ui/Icon.svelte';
	import { Github, Mail, Twitter } from 'lucide-svelte';

	export let data;

</script>

<SEO meta={data.meta} type="homepage"/>

<PageTitle>About Me</PageTitle>
<PageSubTitle class="mb-6">I write code and create websites</PageSubTitle>
<Paragraph>
	Hey, I'm Jon Jampen, a 20-year-old programming enthusiast. I’m passionate about solving problems I encounter in my daily life through technology. Whether it’s building websites, coding apps, or improving workflows, I enjoy creating tools that make tasks easier and more efficient.
	<br/><br/>
	I’m currently studying Computer Science at the University of Bern, applying what I learn to real-world challenges. For example, I developed a plugin to integrate Xournal++ with Obsidian, making it easier to manage my notes for studying and lectures.
	<br/><br/>
	As part of my Matura project in high school, I developed an app to help people with chronic fatigue syndrome (CFS) track and manage their energy levels more effectively.
</Paragraph>

<TechStack/>


<PageSubTitle class="mb-6 mt-16" id="contact">CONTACT</PageSubTitle>
<div class="flex gap-4 items-center">
	<Icon handleClick={() => (window.location.href = `mailto:${import.meta.env.VITE_EMAIL}`)} name="email">
		<Mail class="w-8 h-8 text-white hover:text-secondary" />
	</Icon>
	<Icon handleClick={() => window.open(import.meta.env.VITE_GITHUB_URL, '_blank')} name="github">
		<Github class="w-8 h-8 text-white hover:text-secondary" />
	</Icon>
	<Icon handleClick={() => window.open("https://x.com/jonjampen", '_blank')} name="twitter">
		<Twitter class="w-8 h-8 text-white hover:text-secondary" />
	</Icon>
	<a href="/links" class="text-gray hover:text-secondary">More links</a>
</div>