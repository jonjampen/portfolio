<script>
    import MultiSelect from "svelte-multiselect";
    import { MetaTags } from "svelte-meta-tags";
    import ProjectGrid from "../ProjectGrid.svelte";
    import { projects } from "../../data/projects.js";

    let selectedTags = [];
    let tags = [];
    let tagIds = [];
</script>

<MetaTags
    title="Projects | Jon Jampen"
    description="I'm Jon, an 18-year-old programming enthusiast. Here you can explore my projects."
    canonical="https://www.jonjampen.ch/projects"
    openGraph={{
        url: "https://www.jonjampen.ch/projects",
        title: "Projects | Jon Jampen",
        description:
            "I'm Jon, an 18-year-old programming enthusiast. Here you can explore my projects.",
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
        title: "Projects | Jon Jampen",
        description:
            "I'm Jon, an 18-year-old programming enthusiast. Here you can explore my projects.",
        // image: "https://www.example.ie/twitter-image.jpg",
        imageAlt: "Jon Jampen",
    }}
    facebook={{
        // appId: "1234567890",
    }}
/>

<section class="projects-grid">
    <h2>My Projects</h2>
    <h6 style="display: none;">Filtered by:</h6>
    <br />
    <div class="filters">
        <input type="text" class="filter" placeholder="Search..." />
        <MultiSelect
            --sms-width="100%"
            --sms-max-width="500px"
            class="filter"
            --sms-border="none"
            --sms-bg="var(--secondary)"
            --sms-border-radius="8px"
            --sms-options-bg="var(--secondary)"
            --sms-selected-bg="var(--accent)"
            --sms-remove-btn-hover-color="var(--primary)"
            --sms-placeholder-color="var(--gray)"
            bind:selectedTags
            options={tags}
            placeholder="Select tags"
        />
    </div>
    <br />

    <ProjectGrid {projects} />
</section>
