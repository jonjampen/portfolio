<script>
	export let handleClick;
</script>

<button class="text-foreground" on:click={handleClick}><slot /></button>
