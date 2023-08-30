<script>
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>{$page.error.message} | Jon Jampen</title>
</svelte:head>

<div class="error">
    <h1>{$page.error.message}</h1>
    {#if $page.error.message === "Project not found"}
        <p>
            The project was not found, please got to <a href="/projects">all of my projects</a> and
            search for it there. Otherwise please contact me at
            <a href="mailto:hey@jonjampen.ch">hey@jonjampen.ch</a>.
        </p>
        <div class="buttons">
            <button class="btn primary" on:click={() => (window.location.href = "/projects")}
                >All my Projects</button
            >
            <button class="btn secondary" on:click={() => (window.location.href = "/")}
                >My Website</button
            >
        </div>
    {:else if $page.error.message === "Not Found"}
        <p>
            The page you are looking for does not exist (anymore). Please contact me at
            <a href="mailto:hey@jonjampen.ch">hey@jonjampen.ch</a> or go back to my
            <a href="/">homepage</a>.
        </p>
        <div class="buttons">
            <button class="btn primary" on:click={() => (window.location.href = "/")}
                >My Website</button
            >
            <button class="btn secondary" on:click={() => (window.location.href = "/projects")}
                >All my Projects</button
            >
        </div>
    {:else}
        <p>
            There is a problem with the page you are looking for. Please contact me at
            <a href="mailto:hey@jonjampen.ch">hey@jonjampen.ch</a> or go back to my
            <a href="/">homepage</a>.
        </p>
        <div class="buttons">
            <button class="btn primary" on:click={() => (window.location.href = "/")}
                >My Website</button
            >
            <button class="btn secondary" on:click={() => (window.location.href = "/projects")}
                >All my Projects</button
            >
        </div>
    {/if}
</div>

<style>
    .error {
        padding: 0 20px;
        min-height: 50vh;
        margin-top: 64px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    h1 {
        color: var(--white);
        font-size: 48px;
        line-height: 64px;
    }

    p {
        max-width: 600px;
    }
    .buttons {
        margin-top: 32px;
        display: flex;
        gap: 32px;
    }
    button {
        height: 48px !important;
    }
</style>
