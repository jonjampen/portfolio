<script>
	import NavItem from './NavItem.svelte';

	const navItems = [
		{ title: 'Home', link: '/' },
		{ title: 'About', link: '/about' },
		{ title: 'Projects', link: '/projects' },
		{ title: 'Uses', link: '/uses' },
		{ title: 'Links', link: '/links' }
	];
</script>

<div class="flex items-center gap-8 {$$props.class}">
	{#each navItems as navItem}
		<NavItem title={navItem.title} link={navItem.link} />
	{/each}
</div>
