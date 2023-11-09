<script>
	export let title, link, handleCLick;
</script>

<a href={link} class="text-gray no-underline hover:bg-card rounded px-2 py-1 hover:text-foreground transition-all" on:click={handleCLick}>{title}</a>
