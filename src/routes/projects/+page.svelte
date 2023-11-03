<script>
	import PageTitle from '../../components/ui/PageTitle.svelte';
	import PageSubTitle from '../../components/ui/PageSubTitle.svelte';
	import ProjectCard from '../../components/ProjectCard.svelte';
	import ProjectHorizontalCard from '../../components/ProjectHorizontalCard.svelte';
	export let data;

	// let projects = [
	// 	{
	// 		main: true,
	// 		slug: 'fatiguediary',
	// 		title: 'Fatigue Diary',
	// 		description:
	// 			'Fatigue Diary is a web app for patients suffering from chronic fatigue syndrome. It is built with PHP, JavaScript and a MySQL database. This is my matura project.',
	// 		tags: ['NextJS', 'React', 'Tailwind', 'JavaScript'],
	// 		links: {
	// 			github: 'https://github.com/jonjampen/fatiguediary',
	// 			project: 'https://fatiguediary.ch/'
	// 		},
	// 	},
	// 	{
	// 		main: true,
	// 		slug: 'cybercrusade',
	// 		title: 'Cyber Crusade',
	// 		description:
	// 			'The cyber crusade is an online version of my favorite card game. It works with multiple users in real time and stores the data in a Firebase database.',
	// 		tags: ['SvelteKit', 'Firebase', 'JavaScript'],
	// 		links: {
	// 			github: 'https://github.com/jonjampen/cyber-crusade',
	// 			project: 'https://cyber-crusade.vercel.app/'
	// 		},
	// 	},
	// 	{
	// 		main: false,
	// 		slug: 'mandelbrot',
	// 		title: 'Mandelbrot',
	// 		description:
	// 			'A visual representation of the mandelbrot set with the option to zoom, move, change colors, etc. This is a school project created with JavaScript and the p5.js library.',
	// 		tags: ['JavaScript', 'p5.js', 'OOP'],
	// 		links: {
	// 			github: 'https://github.com/jonjampen/mandelbrot',
	// 			project: 'https://jonjampen.github.io/mandelbrot'
	// 		},
	// 	},
	// 	{
	// 		main: false,
	// 		slug: 'solarlog',
	// 		title: 'Solarlog Dashboard',
	// 		description:
	// 			'A dashboard that displays the data from your "Solar- Log Base" solar panels.',
	// 		tags: ['Svelte', 'API', 'JavaScript'],
	// 		links: {
	// 			// github: 'https://github.com/jonjampen/cyber-crusade',
	// 			// project: 'https://cyber-crusade.vercel.app/'
	// 		},
	// 	},
	// 	{
	// 		main: false,
	// 		slug: 'cybercrusade',
	// 		title: 'Cyber Crusade',
	// 		description: 'Mountain Sunset VS Code Theme',
	// 		tags: ['Theme'],
	// 		links: {
	// 			github: 'https://github.com/jonjampen/mountain-sunset',
	// 			project: 'https://marketplace.visualstudio.com/items?itemName=JonJampen.mountain-sunset'
	// 		},
	// 	},
	// ];
</script>

<PageTitle>My Projects</PageTitle>
<PageSubTitle class="mb-8">Projects I’ve built</PageSubTitle>
<div class="flex gap-8 md:flex-col">
	{#each data.projects as project}
		{#if project.meta.main}
			<ProjectCard
				title={project.meta.title}
				description={project.meta.description}
				tags={project.meta.tags}
				slug={project.meta.slug}
				links={project.meta.links}
				imagePath={project.meta.imagePath}
			/>
		{/if}
	{/each}
</div>

<PageSubTitle class="mt-16">OTHER PROJECTS</PageSubTitle>
<div class="flex flex-col gap-8">
	{#each data.projects as project}
	{project.meta.github}
		{#if !project.meta.main}
            <ProjectHorizontalCard
				title={project.meta.title}
				description={project.meta.description}
				tags={project.meta.tags}
				slug={project.meta.slug}
				links={project.meta.links}
				imagePath={project.meta.imagePath}
			/>
		{/if}
	{/each}
</div>