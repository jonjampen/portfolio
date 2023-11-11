<script>
	export let handleClick, name="";
</script>

<button class="text-foreground {$$props.class}" title={$$props.title} on:click={handleClick} aria-label={name}><slot /></button>
