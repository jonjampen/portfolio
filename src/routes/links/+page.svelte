<script>
    import "../../style/link.scss";
</script>

<svelte:head>
    <title>Links | Jon Jampen</title>
    <meta
        name="description"
        content="I'm Jon, an 18-year-old programming enthusiast. I
    started programming at age 12, and web
    development has become my passion. Now I'm all
    set to explore computer science in-depth. This website showcases my projects and
    provides a way to connect."
    />
    <link rel="“canonical“" href="https://jonjampen.ch/links" />
    <meta property="og:title" content="Links | Jon Jampen" />
    <meta property="og:url" content="https://jonjampen.ch/links" />
    <meta
        property="og:description"
        content="I'm Jon, an 18-year-old programming enthusiast. I
    started programming at age 12, and web
    development has become my passion. Now I'm all
    set to explore computer science in-depth. This website showcases my projects and
    provides a way to connect."
    />
    <meta property="og:image" content="/favicon.svg" />
    <!-- change to profile picture later -->

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Links | Jon Jampen" />
    <meta
        name="twitter:description"
        content="I'm Jon, an 18-year-old programming enthusiast. I
    started programming at age 12, and web
    development has become my passion. Now I'm all
    set to explore computer science in-depth. This website showcases my projects and
    provides a way to connect."
    />
</svelte:head>

<section class="link">
    <img class="profile" src="/profile.jpg" alt="" />
    <h2>Jon Jampen</h2>
    <span>@jonjampen</span>
    <br />
    <br />
    <div class="cards">
        <div class="big-cards">
            <a href="https://jonjampen.ch/" target="_blank" class="big-card card">
                <img src="/google-icons/website.svg" alt="website" />
                <p>www.jonjampen.ch</p>
            </a>
            <a href="mailto:hey@jonjampen.ch" target="_blank" class="big-card card">
                <img src="/google-icons/mail.svg" alt="email" />
                <p>hey@jonjampen.ch</p>
            </a>
        </div>

        <div class="small-cards">
            <a href="https://www.github.com/jonjampen/" target="_blank" class="small-card card">
                <img src="/google-icons/github-white.svg" alt="github" />
                <p>GitHub</p>
            </a>
            <a
                href="https://www.mastodon.social/@jonjampen"
                target="_blank"
                class="small-card card"
            >
                <img src="/google-icons/mastodon.svg" alt="mastodon" />
                <p>Mastodon</p>
            </a>
            <a href="https://www.instagram.com/jonjampen/" target="_blank" class="small-card card">
                <img src="/google-icons/instagram.svg" alt="instagram" />
                <p>Instagram</p>
            </a>
        </div>
        <br />
        <h3>My Projects</h3>
        <h6>View all my projects <a href="/projects">here</a>.</h6>
        <div class="big-cards">
            <a href="https://www.fatiguediary.ch/" target="_blank" class="big-card card">
                <img src="/link-images/fatiguediary.svg" alt="email" />
                <div class="text">
                    <p class="title">Fatigue Diary</p>
                    <p class="desc">A web app for patients suffering from chronic fatigue</p>
                </div>
            </a>
            <a href="https://cyber-crusade.vercel.app/" target="_blank" class="big-card card">
                <img src="/link-images/cybercrusade.svg" alt="The Cyber Crusade" />
                <div class="text">
                    <p class="title">Cyber Crusade</p>
                    <p class="desc">An online version of my favorite card game.</p>
                </div>
            </a>
        </div>
    </div>
</section>
