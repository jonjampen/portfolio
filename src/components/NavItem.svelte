<script>
	export let title, link, handleCLick;
</script>

<a href={link} class="text-foreground no-underline hover:text-primary" on:click={handleCLick}>{title}</a>
