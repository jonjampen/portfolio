import { EventEmitter } from "events";
import Experience from "../Experience";

export default class Sizes extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.canvas = this.experience.canvas;

        this.deviceType = window.innerWidth < 1200 ? "mobile" : "desktop";

        if (this.deviceType === "mobile") {
            this.width = window.innerWidth;
            this.height = window.innerHeight / 2;
            this.aspect = this.width / this.height;

        } else {
            this.width = this.canvas.offsetWidth;
            this.height = window.innerHeight;
        }

        this.aspect = this.width / this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);
        this.frustrum = 5;



        window.addEventListener("resize", () => {
            if (this.deviceType != "mobile") {
                this.width = this.canvas.offsetWidth;
                this.height = window.innerHeight;
                this.aspect = this.width / this.height;
                this.pixelRatio = Math.min(window.devicePixelRatio, 2);
                this.emit("resize")
            }
        })
    }
}