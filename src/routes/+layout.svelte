<script>
    import "../global.scss";
    import Navigation from "../components/Navigation.svelte";
    import Footer from "./Footer.svelte";
    import Analytics from "./analytics.svelte";
</script>

<Analytics />

<Navigation />
<slot />
<Footer />
