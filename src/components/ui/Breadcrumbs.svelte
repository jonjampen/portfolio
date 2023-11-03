<script>
    export let path, date;
</script>

<div class="flex text-gray">
    {#each path as item, i}
        {#if i != 0}
            <p>&nbsp;&gt;&nbsp;</p>
        {/if}
        <a href="/{item}" class="text-gray no-underline">{item}</a>
    {/each}
    <p>&nbsp;&#8226;&nbsp;{date}</p>
</div>