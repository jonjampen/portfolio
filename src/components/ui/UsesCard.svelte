<script>
	export let item;
    const coloredSvg = item.icon?.svg ? item.icon.svg.replace(/d=/g, `fill="#${item.icon.hex == "000000" ? "ffffff" : item.icon.hex}" d=`) : null;
    let hovered = false;
</script>

<a href={item.href} target="_blank" class="w-24 h-24 pt-3 px-3 pb-2 bg-card rounded-xl no-underline flex flex-col items-center gap-2 hover:bg-card-transparent hover:text-gray text-foreground"
    on:mouseenter={() => hovered = true}
    on:mouseleave={() => hovered = false}>


    {#if coloredSvg}
        {@html coloredSvg}
    {:else}
        <svelte:component this={item.icon} width="44" height="44" />
    {/if}

    <p class="whitespace-nowrap">{hovered ? item.description : item.name}</p>
</a>