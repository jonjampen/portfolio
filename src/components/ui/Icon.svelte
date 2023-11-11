<script>
	export let handleClick;
</script>

<button class="text-foreground {$$props.class}" title={$$props.title} on:click={handleClick} name={$$props.name}><slot /></button>
