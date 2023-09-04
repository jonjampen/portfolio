import * as THREE from "three"
import Experience from "./Experience"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.deviceType = this.experience.sizes.deviceType;

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls();

    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35, this.sizes.aspect, 0.1, 1000
        );
        this.scene.add(this.perspectiveCamera)
        if (this.deviceType === "mobile") {
            this.perspectiveCamera.position.x = 0;
            this.perspectiveCamera.position.y = 0.7;
            this.perspectiveCamera.position.z = 5;
        }
        else {
            this.perspectiveCamera.position.x = 0.229975;
            this.perspectiveCamera.position.y = 1.89521;
            this.perspectiveCamera.position.z = 8.20785;

            this.perspectiveCamera.rotation.x = -0.347;
            this.perspectiveCamera.rotation.y = 0.02797;
            this.perspectiveCamera.rotation.z = 0.010115;
        }
    }

    createOrthographicCamera() {
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -10,
            10
        );

        this.orthographicCamera.position.y = 3.5;
        this.orthographicCamera.position.z = 5;
        this.orthographicCamera.rotation.x = -Math.PI / 6;

        // this.scene.add(this.orthographicCamera);

        // this.helper = new THREE.CameraHelper(this.perspectiveCamera);
        // this.scene.add(this.helper);

        // const size = 20;
        // const divisions = 20;

        // const gridHelper = new THREE.GridHelper(size, divisions);
        // this.scene.add(gridHelper)

        // const axesHelper = new THREE.AxesHelper(10);
        // this.scene.add(axesHelper)
    }

    setOrbitControls() {
        if (this.deviceType === "desktop") {
            this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
            this.controls.target.set(0, 1, 0);
            this.controls.enableDampingDamping = true;
            this.controls.enableZoom = false;
        }
        else if (this.deviceType === "mobile") {

        }
    }




    resize() {
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }

    update() {
        if (this.deviceType === "desktop") this.controls.update();
        // console.log("rotation", this.perspectiveCamera.rotation)
        // console.log("position", this.perspectiveCamera.position);
        // this.helper.matrixWorldNeedsUpdate = true;
        // this.helper.update();
        // this.helper.position.copy(this.orthographicCamera.position)
        // this.helper.rotation.copy(this.orthographicCamera.rotation)
    };
}