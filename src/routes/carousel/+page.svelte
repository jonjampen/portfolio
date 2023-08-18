<script>
    import { projects } from "../../data/projects";
    import Glide from "@glidejs/glide";
    import { onMount } from "svelte";
    import "./carousel.scss";
    import Project from "../Project.svelte";
    import "../../style/projects.scss";

    onMount(() => {
        new Glide(".glide", {
            type: "carousel",
            startAt: 0,
            perView: 3,
            focusAt: "center",
            autoplay: 3000,
            hoverpause: true,
            keyboard: true,
        }).mount();
    });
</script>

<section class="slideshow">
    <h2>Projects</h2>
    <div class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                {#each projects as project, i}
                    {#if project.public && project.main}
                        <li class="glide__slide">
                            <Project {project} />
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>

        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                <img src="/icons/arrow-left.svg" alt="Previous Project" />
            </button>

            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                <img src="/icons/arrow-right.svg" alt="Next Project" />
            </button>
        </div>
    </div>
</section>
