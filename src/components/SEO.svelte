<script>
    export let meta, type = "";
</script>

<svelte:head>
    {#if type === "project"}
        <title>{meta.title} | Jon Jampen</title>
    {:else}
        <title>{meta.title}</title>
    {/if}

    <meta name="description" content={meta.description} />
    <meta name="keywords" content={meta.keywords} />
    <link rel="canonical" href="https://jonjampen.ch/{meta.canonical}" />
    <meta name="robots" content="index, follow">
    <meta name="application-name" content="Jon Jampen">
    <meta name="creator" content="Jon Jampen">
    <link rel="me" value="hello@jonjampen.ch" />
    <link rel="me" value="https://jonjampen.ch" />
    <link rel="me" value="https://www.jonjampen.ch" />
    <link rel="me" value="https://www.jonjampen.ch" />
    <link rel="me" value="https://www.jonjampen.ch" />
    
    {#if type === "project"}
        <meta name="author" content="Jon Jampen">
    {/if}
    

    <!-- share -->
    <meta property="og:title" content="{meta.title} | Jon Jampen" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jonjampen.ch/{meta.canonical}" />
    <meta property="og:description" content={meta.description} />
    <meta property="og:image" content={meta.image} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{meta.title} by Jon Jampen" />
    <meta name="twitter:description" content={meta.description} />
</svelte:head>