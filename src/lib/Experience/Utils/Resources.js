import { EventEmitter } from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import Experience from "../Experience";
import * as THREE from "three";

export default class Resources extends EventEmitter {
    constructor(assets) {
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;

        this.assets = assets;

        this.items = {};
        this.queue = this.assets.length
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }
    setLoaders() {
        this.loadingManager = new THREE.LoadingManager();
        const loadingOverlay = document.getElementById('loading-screen');
        console.log('Loading started');

        this.loadingManager.onStart = () => {
            console.log('Loading manager onStart');
            loadingOverlay.style.display = "fixed"
        };
        this.loadingManager.onLoad = () => {
            console.log('Loading manager onLoad');
            loadingOverlay.style.display = 'none';
        };
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader(this.loadingManager);
        this.loaders.dracoLoader = new DRACOLoader(this.loadingManager);
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)

    }

    startLoading() {
        for (const asset of this.assets) {
            if (asset.type === "glbModel") {
                this.loaders.gltfLoader.load(asset.path, (file) => {
                    this.singleAssetLoaded(asset, file);
                });
            }
            else if (asset.type === "videoTexture") {
                // this.video = {};
                // this.videoTexture = {};

                // this.video[asset.name] = document.createElement("video");
                // this.video[asset.name].src = asset.path;
                // this.video[asset.name].muted = true;
                // this.video[asset.name].playsInline = true;
                // this.video[asset.name].autoplay = true;
                // this.video[asset.name].loop = true;
                // this.video[asset.name].play();

                // this.videoTexture[asset.name] = new THRREE.VideoTexture(this.video[asset.name]);
                // this.videoTexture[asset.name].flipY = true; // maybe set to false (TBD)
                // this.videoTexture[asset.name].minFilter = THREE.NearestFilter;
                // this.videoTexture[asset.name].magFilter = THREE.NearestFilter;
                // this.videoTexture[asset.name].generateMipmaps = false;
                // this.videoTexture[asset.name].encoding = THREE.sRGBEncoding;

                // this.singleAssetLoaded(asset, this.videoTexture[asset.name]);
            }
        }
    }

    singleAssetLoaded(asset, file) {
        this.items[asset.name] = file;
        this.loaded++;

        if (this.loaded === this.queue) {
            this.emit("ready");
        }
    }
}