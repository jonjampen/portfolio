import * as THREE from "three"

import Experience from "../Experience"

export default class Room {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene


        this.setModel();
        this.setAnimation();
    }

    setModel() {
        this.actualRoom.children.forEach(child => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach(groupchild => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }

            // TODO: Add Screen material
            if (child.name === "Screen") {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
            }
        })

        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.5, 0.5, 0.5);
        this.actualRoom.rotation.y = Math.PI; // TODO: rotate z 180 in blender; r z -45
    }

    setAnimation() {
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        /* this.swim = this.mixer.clipAction(this.room.animations[0]);
        this.swim.play(); */
    }


    resize() {
    }

    update() {
        this.mixer.update(this.time.delta) // param * speed-factor
    };
}