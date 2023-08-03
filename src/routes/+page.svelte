<script>
    import Hero from "./Hero.svelte";
    import About from "./About.svelte";
    import Projects from "./Projects.svelte";
    import Contact from "./Contact.svelte";
    import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
    title="Jon Jampen"
    description="I'm Jon, an 18-year-old programming enthusiast. I
    started programming at age 12, and web
    development has become my passion. Now I'm all
    set to explore computer science in-depth. This website showcases my projects and
    provides a way to connect."
    canonical="https://www.jonjampen.ch/"
    openGraph={{
        url: "https://www.jonjampen.ch/",
        title: "Jon Jampen",
        description:
            "I'm Jon, an 18-year-old programming enthusiast. I started programming at age 12, and web development has become my passion. Now I'm all set to explore computer science in-depth. This website showcases my projects and provides a way to connect.",
        /* images: [
            {
                url: "https://www.example.ie/og-image-01.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
            },
            {
                url: "https://www.example.ie/og-image-02.jpg",
                width: 900,
                height: 800,
                alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
        ], */
        site_name: "Jon Jampen",
    }}
    twitter={{
        cardType: "summary_large_image",
        title: "Jon Jampen",
        description:
            "I'm Jon, an 18-year-old programming enthusiast. I started programming at age 12, and web development has become my passion. Now I'm all set to explore computer science in-depth. This website showcases my projects and provides a way to connect.",
        image: "https://www.example.ie/twitter-image.jpg",
        imageAlt: "Jon Jampen",
    }}
    facebook={{
        // appId: "1234567890",
    }}
/>

<Hero />
<About />
<Projects />
<!-- Education -->
<section class="contact">
    <Contact />
</section>

<!-- Mastodon verification -->
<a rel="me" href="https://mastodon.social/@jonjampen" style="display:none">Mastodon</a>
