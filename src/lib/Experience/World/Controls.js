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
        this.timeline2 = new GSAP.timeline();

        if (this.deviceType === "desktop") {

            this.timeline.to(this.camera.perspectiveCamera.position, {
                x: -2.453,
                y: 1.936,
                z: 1.989,
                scrollTrigger: {
                    trigger: ".hero", // Triggered by the hero section
                    start: "top-=100px top",
                    end: "bottom .about",
                    scrub: true,
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
            // this.perspectiveCamera.rotation.x = -14.97;
            // this.perspectiveCamera.rotation.y = -28.67;
            // this.perspectiveCamera.rotation.z = -7.31;
            this.timeline2.to(this.camera.perspectiveCamera.rotation, {
                x: -14.97,
                y: -28.67,
                z: -7.31,
                scrollTrigger: {
                    trigger: ".hero", // Triggered by the hero section
                    start: "top-=100px top",
                    end: "bottom .about",
                    scrub: true,
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