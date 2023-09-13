<script>
    async function shareIt() {
        await navigator.share({
            title: "Share Jon Jampen",
            text: "Jon Jampen | Coding enthusiast",
            url: "https://jonjampen.ch",
        });
    }
</script>

<section class="footer">
    <div class="content">
        <div class="social">
            <a href="/links"><span>@jonjampen</span></a>
            <div class="icons">
                <a href="https://www.github.com/jonjampen/" title="GitHub" target="_blank">
                    <img src="/google-icons/github-white.svg" alt="GitHub" />
                </a>
                <a href="mailto:hello@jonjampen.ch" title="Email" target="_blank">
                    <img src="/google-icons/mail.svg" alt="Email" />
                </a>
                <button
                    title="Share Website"
                    on:click={shareIt}
                    style="all: unset; cursor: pointer"
                >
                    <img src="/google-icons/share.svg" alt="Share Website" />
                </button>
                <a href="/links"
                    ><img src="/google-icons/more.svg" alt="all links" title="all links" /></a
                >
            </div>
        </div>
        <p>&copy;2023 <a href="/">Jon Jampen</a></p>
    </div>
</section>
