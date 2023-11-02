<script>
	import NavItems from './NavItems.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Avatar from './ui/Avatar.svelte';
</script>

<nav class="w-full flex justify-between items-center h-16 mb-16">
	<Avatar class="w-10 h-10" />
	<NavItems />
	<ThemeToggle />
</nav>
