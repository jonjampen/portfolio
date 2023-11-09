<script>
	import { page } from '$app/stores';  
	export let title, link, handleCLick;
</script>

<a href={link} class="no-underline hover:bg-card rounded px-2 py-1 hover:text-foreground transition-all" class:active={$page.url.pathname === "/" + title.toLowerCase() || ($page.url.pathname === "/" && title === "Home" )} on:click={handleCLick}>{title}</a>

<style>
	a {
		color: var(--gray)
	}
	.active {
		color: var(--foreground)
	}
</style>