<script>
    import { goto } from "$app/navigation";
    import ThreeJsComponent from "../components/ThreeJSComponent.svelte";
</script>

<section class="hero">
    <div class="text">
        <h5>👋 Hey, I'm</h5>
        <h1>Jon Jampen</h1>

        <button class="btn secondary" on:click={() => goto("/#contact")}>Get in touch</button>
    </div>
    <div class="desk">
        <ThreeJsComponent />
    </div>
</section>