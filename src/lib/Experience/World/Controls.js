import * as THREE from "three"
import Experience from "../Experience"
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default class Controls {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;

        GSAP.registerPlugin(ScrollTrigger);

        this.setPath();
    }

    setPath() {
        console.log(this.room)
        this.timeline = new GSAP.timeline();
        // this.timeline.to(this.camera.position, {
        //     x: 2,
        //     scrollTrigger: {
        //         trigger: ".hero",
        //         markers: true,
        //         start: "top top",
        //         end: "bottom bottom",
        //         scrub: true,
        //     }
        // });


        ScrollTrigger.create({
            trigger: ".hero", // Triggered by the hero section
            start: "top-=100px top",
            end: "bottom .about",
            onEnter: self => {
                const targetElements = document.querySelectorAll(".experience");
                targetElements.forEach(target => {
                    target.classList.remove("relative"); //fixed
                });
            },
            onLeaveBack: self => {
                const targetElements = document.querySelectorAll(".experience");
                targetElements.forEach(target => {
                    target.classList.add("relative"); //relative
                });
            },
            onEnterBack: self => {
                const targetElements = document.querySelectorAll(".experience");
                targetElements.forEach(target => {
                    target.classList.remove("relative"); //fixed
                });
            },
            onLeave: self => {
                const targetElements = document.querySelectorAll(".experience");
                targetElements.forEach(target => {
                    target.classList.add("relative"); //relative
                });
            },
        });


    }

    resize() {
    }

    update() {

    };
}