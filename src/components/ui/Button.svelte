<script>
	export let styleType, handleClick;
</script>

<button
	class="h-10 px-3 rounded-lg"
	on:click={handleClick}
	style="color: var(--{styleType}-foreground); background-color: var(--{styleType})"
	type={$$props.type}
>
	<slot />
</button>
