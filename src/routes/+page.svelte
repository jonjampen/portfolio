<script>
	import PageSubTitle from '../components/ui/PageSubTitle.svelte';
	import PageTitle from '../components/ui/PageTitle.svelte';
	import Avatar from '../components/ui/Avatar.svelte';
	import Paragraph from '../components/ui/Paragraph.svelte';
</script>

<section class="flex gap-8 items-center">
	<Avatar class="w-24 h-24" />
	<div class="">
		<h6 class="text-gray text-lg mb-1">👋 Hey, I’m</h6>
		<PageTitle>Jon Jampen</PageTitle>
		<PageSubTitle>I write code and create websites</PageSubTitle>
	</div>
</section>

<section>
	<Paragraph class="mt-16">
		Hey, I'm Jon, an 18-year-old programming enthusiast. I caught the coding bug at age 12 😉, and
		I've been fascinated with computer science ever since. Web development has become my passion,
		and with my recent completion of the matura, I'm all set to explore computer science in-depth.
		This website showcases my projects and provides a way to connect. Happy coding!
	</Paragraph>
</section>
