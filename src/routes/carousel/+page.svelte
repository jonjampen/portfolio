<script>
    import { onMount } from "svelte";

    onMount(() => {
        const slider = document.querySelector(".slider");
        const prevButton = document.querySelector(".prev-button");
        const nextButton = document.querySelector(".next-button");
        const projectCards = document.querySelectorAll(".project-card");
        const cardWidth = projectCards[0].offsetWidth;
        const cardsPerPage = 3; // Change this depending on screen size
        const cardsPerSlide = 1; // Move one card at a time

        let currentPosition = 0;

        nextButton.addEventListener("click", () => {
            currentPosition -= cardWidth * cardsPerSlide;
            if (currentPosition < -cardWidth * (projectCards.length - cardsPerPage)) {
                currentPosition = 0;
            }
            updateSliderPosition();
        });

        prevButton.addEventListener("click", () => {
            currentPosition += cardWidth * cardsPerSlide;
            if (currentPosition > 0) {
                currentPosition = -cardWidth * (projectCards.length - cardsPerPage);
            }
            updateSliderPosition();
        });

        function updateSliderPosition() {
            slider.style.transform = `translateX(${currentPosition}px)`;
        }

        // Initial setup
        updateSliderPosition();
    });
</script>

<div class="slider-container">
    <div class="slider">
        <div class="project-card" style="text-align: center; background-color: red">Project 1</div>
        <div class="project-card" style="text-align: center; background-color: blue">Project 2</div>
        <div class="project-card" style="text-align: center; background-color: red">Project 3</div>
        <div class="project-card" style="text-align: center; background-color: blue">Project 4</div>
        <div class="project-card" style="text-align: center; background-color: red">Project 5</div>
        <div class="project-card" style="text-align: center; background-color: blue">Project 6</div>
        <!-- Add more project cards as needed -->
    </div>
    <button class="prev-button"><img src="/icons/arrow-left.svg" alt="" /></button>
    <button class="next-button"><img src="/icons/arrow-right.svg" alt="" /></button>
</div>

<style>
    .slider-container {
        position: relative;
        overflow: hidden;
    }

    .slider {
        display: flex;
        transition: transform 0.3s ease;
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
        left: 10px;
    }

    .next-button {
        right: 10px;
    }
</style>
