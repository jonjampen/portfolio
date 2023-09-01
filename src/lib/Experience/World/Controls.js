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
        this.deviceType = this.experience.sizes.deviceType;

        GSAP.registerPlugin(ScrollTrigger);

        this.setPath();
    }

    setPath() {
        this.timeline = new GSAP.timeline();

        if (this.deviceType === "desktop") {
            this.timeline.to(this.room.position, {
                x: -1,
                y: 1.44,
                z: 2.5448,
                scrollTrigger: {
                    trigger: ".hero", // Triggered by the hero section
                    start: "top-=100px top",
                    end: "bottom .about",
                    scrub: true,
                    markers: true,
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
                }
            });
        } else {
            const targetElements = document.querySelectorAll(".experience");
            targetElements.forEach(target => {
                target.classList.add("relative");
            });
        }
    }

    resize() {
    }

    update() {
    };
}