<script>
	export let handleClick;
</script>

<button class="text-foreground {$$props.class}" on:click={handleClick}><slot /></button>
