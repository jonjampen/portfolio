<script>
	import NavItem from './NavItem.svelte';

	const navItems = [
		{ title: 'HOME', link: '/' },
		{ title: 'ABOUT', link: '/about' },
		{ title: 'PROJECTS', link: '/projects' },
		{ title: 'LINK', link: '/links' }
	];
</script>

<div class="flex items-center-justify-between gap-8">
	{#each navItems as navItem}
		<NavItem title={navItem.title} link={navItem.link} />
	{/each}
</div>
