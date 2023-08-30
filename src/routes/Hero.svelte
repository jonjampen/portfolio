<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
</script>

<section class="hero">
    <div class="left">
        <h5>👋 Hey, I'm</h5>
        <h1>Jon Jampen</h1>

        <button class="btn secondary" on:click={() => goto("/#contact")}>Get in touch</button>
    </div>
</section>
