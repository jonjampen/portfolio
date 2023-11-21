<script>
	import NavItem from './NavItem.svelte';

	const navItems = [
		{ title: 'Home', link: '/' },
		{ title: 'About', link: '/about' },
		{ title: 'Projects', link: '/projects' },
		{ title: 'Links', link: '/links' }
	];
    export let toggleNav
</script>



<div class="absolute top-7 right-0 flex flex-col items-start gap-3 bg-card text-card-foreground p-3 rounded w-36 {$$props.class} z-50">
	{#each navItems as navItem}
		<NavItem title={navItem.title} link={navItem.link} handleCLick={toggleNav} />
	{/each}
</div>