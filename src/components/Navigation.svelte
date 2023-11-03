<script>
	import NavItems from './NavItems.svelte';
	import MobileNavItems from './MobileNavItems.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Avatar from './ui/Avatar.svelte';
	import { Menu } from 'lucide-svelte';
	import Icon from '../components/ui/Icon.svelte';

	let isNavOpen = false;

	function toggleNav() {
		isNavOpen = !isNavOpen;
		console.log('open nav', isNavOpen)
	}
</script>

<nav class="w-full flex justify-between items-center h-16 mb-16">
	<a href="/"><Avatar class="w-10 h-10" /></a>
		<NavItems class="md:hidden"/>
		<ThemeToggle class="md:hidden" />
		
		<div class="hidden md:flex items-center gap-8">
			<ThemeToggle />
			<div class="relative h-6 w-6">
				<Icon handleClick={toggleNav}><Menu class="w-6 h-6 text-foreground hover:text-secondary" /></Icon>
				<div class:hidden={isNavOpen === false}>
					<MobileNavItems toggleNav={toggleNav} />
				</div>
			</div>
		</div>
</nav>
