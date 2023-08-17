<script>
    import { onMount } from "svelte";
    import Project from "./Project.svelte";
    export let projects;
    export let type = "all";

    let slider;
    let prevButton;
    let nextButton;
    let projectCards;
    let cardWidth;
    let cardsPerPage;
    let cardsPerSlide;
    let currentPosition = 0;
    function next() {
        getDoc();
        currentPosition = Math.max(
            currentPosition - cardWidth * cardsPerSlide,
            -cardWidth * (projectCards.length - cardsPerPage)
        );
        updateSliderPosition();
    }

    function prev() {
        getDoc();
        currentPosition = Math.min(currentPosition + cardWidth * cardsPerSlide, 0);
        updateSliderPosition();
    }

    function getDoc() {
        slider = document.querySelector(".slider");
        prevButton = document.querySelector(".prev-button");
        nextButton = document.querySelector(".next-button");
        projectCards = document.querySelectorAll(".project-card");
        console.log(projectCards);
        if (projectCards.length > 0) cardWidth = projectCards[0].offsetWidth;
        cardsPerPage = 3; // Change this depending on screen size
        cardsPerSlide = 1; // Move one card at a time
    }
    function updateSliderPosition() {
        slider.style.transform = `translateX(${currentPosition}px)`;
    }
    onMount(() => {
        // Initial setup
        getDoc();
        updateSliderPosition();
    });
</script>

<div class="projects-container" />

<div class="slider-container">
    <div class="slider">
        {#each projects as project}
            {#if project.public}
                {#if type == "main" && project.main}
                    <div class="project-card">
                        <Project {project} />
                    </div>
                    <div class="project-card">
                        <Project {project} />
                    </div>
                    <div class="project-card">
                        <Project {project} />
                    </div>
                    <div class="project-card">
                        <Project {project} />
                    </div>
                    <div class="project-card">
                        <Project {project} />
                    </div>
                {:else if type == "all"}
                    <Project {project} />
                {/if}
            {/if}
        {/each}
    </div>
    <button class="prev-button" on:click={() => prev()}
        ><img src="/icons/arrow-left.svg" alt="" /></button
    >
    <button class="next-button" on:click={() => next()}
        ><img src="/icons/arrow-right.svg" alt="" /></button
    >
</div>

<style>
    .slider-container {
        position: relative;
        overflow: hidden;
    }

    .slider {
        display: flex;
        justify-content: center;
        transition: transform 0.3s ease;
        width: 100%;
    }

    .project-card {
        flex: 0 0 calc(100% / 3); /* Adjust for different screen sizes */
        padding: 20px;
        box-sizing: border-box;
    }

    .prev-button,
    .next-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .prev-button {
        left: 0px;
    }

    .next-button {
        right: 0px;
    }
</style>
