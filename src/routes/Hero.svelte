<script>
    import { goto } from "$app/navigation";
</script>

<section class="hero">
    <h5>👋 Hey, I'm</h5>
    <h1>Jon Jampen</h1>

    <button class="btn secondary" on:click={() => goto("/#contact")}>Get in touch</button>
</section>
