<script>
    import Hero from "./Hero.svelte";
    import About from "./About.svelte";
    import Projects from "./Projects.svelte";
    import Contact from "./Contact.svelte";
</script>

<svelte:head>
    <title>Jon Jampen | Coding enthusiast</title>
    <meta
        name="description"
        content="I'm Jon, an 18-year-old programming enthusiast. I
    started programming at age 12, and web
    development has become my passion. Now I'm all
    set to explore computer science in-depth. This website showcases my projects and
    provides a way to connect."
    />
    <link rel="“canonical“" href="https://jonjampen.ch" />
    <meta property="og:title" content="Jon Jampen | Coding enthusiast" />
    <meta property="og:url" content="https://jonjampen.ch" />
    <meta
        property="og:description"
        content="I'm Jon, an 18-year-old programming enthusiast. I started programming at age 12, and web development has become my passion. Now I'm all set to explore computer science in-depth. This website showcases my projects and provides a way to connect."
    />
    <meta property="og:image" content="/favicon.svg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Jon Jampen | Coding enthusiast" />
    <meta
        name="twitter:description"
        content="I'm Jon, an 18-year-old programming enthusiast. I started programming at age 12, and web development has become my passion. Now I'm all set to explore computer science in-depth. This website showcases my projects and provides a way to connect."
    />
</svelte:head>

<Hero />
<About />
<Projects />
<!-- Education -->
<section class="contact">
    <Contact />
</section>

<!-- Mastodon verification -->
<a rel="me" href="https://mastodon.social/@jonjampen" style="display:none">Mastodon</a>
