var v=Object.defineProperty;var x=(t,e,s)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var d=(t,e,s)=>(x(t,typeof e!="symbol"?e+"":e,s),s);import{S as f,i as z,s as C,k as p,l as m,m as u,h as n,n as l,b as L,D as M,F as o,o as R}from"../chunks/index.3309aa92.js";import{e as c,G as y,D as S,k as w,s as g,P as E,O as P,a as b,W as T,C as A,b as D,c as _,M as F,A as O,g as W,d as B,f as G,N as k,B as q,h as I,i as N,j,S as H}from"../chunks/index.b0ea07ce.js";class V extends c.EventEmitter{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.frustrum=5,window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.emit("resize")})}}class $ extends c.EventEmitter{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.update()}update(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.emit("update"),window.requestAnimationFrame(()=>this.update())}}class X extends c.EventEmitter{constructor(e){super(),this.experience=new i,this.renderer=this.experience.renderer,this.assets=e,this.items={},this.queue=this.assets.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new y,this.loaders.dracoLoader=new S,this.loaders.dracoLoader.setDecoderPath("/draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}startLoading(){for(const e of this.assets)e.type==="glbModel"?this.loaders.gltfLoader.load(e.path,s=>{this.singleAssetLoaded(e,s)}):e.type==="videoTexture"&&(this.video={},this.videoTexture={},this.video[e.name]=document.createElement("video"),this.video[e.name].src=e.path,this.video[e.name].muted=!0,this.video[e.name].playsInline=!0,this.video[e.name].autoplay=!0,this.video[e.name].loop=!0,this.video[e.name].play(),this.videoTexture[e.name]=new THRREE.VideoTexture(this.video[e.name]),this.videoTexture[e.name].flipY=!0,this.videoTexture[e.name].minFilter=w,this.videoTexture[e.name].magFilter=w,this.videoTexture[e.name].generateMipmaps=!1,this.videoTexture[e.name].encoding=g,this.singleAssetLoaded(e,this.videoTexture[e.name]))}singleAssetLoaded(e,s){this.items[e.name]=s,this.loaded++,this.loaded===this.queue&&this.emit("ready")}}const Y=[{name:"room",type:"glbModel",path:"/models/merged-rotated.glb"}];class Z{constructor(){this.experience=new i,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.createPerspectiveCamera(),this.createOrthographicCamera(),this.setOrbitControls()}createPerspectiveCamera(){this.perspectiveCamera=new E(35,this.sizes.aspect,.1,1e3),this.scene.add(this.perspectiveCamera),this.perspectiveCamera.position.x=0,this.perspectiveCamera.position.y=4,this.perspectiveCamera.position.z=8}createOrthographicCamera(){this.orthographicCamera=new P(-this.sizes.aspect*this.sizes.frustrum/2,this.sizes.aspect*this.sizes.frustrum/2,this.sizes.frustrum/2,-this.sizes.frustrum/2,-10,10),this.orthographicCamera.position.y=3.5,this.orthographicCamera.position.z=5,this.orthographicCamera.rotation.x=-Math.PI/6,this.scene.add(this.orthographicCamera)}setOrbitControls(){this.controls=new b(this.perspectiveCamera,this.canvas),this.controls.enableDampingDamping=!0,this.controls.enableZoom=!1}resize(){this.perspectiveCamera.aspect=this.sizes.aspect,this.perspectiveCamera.updateProjectionMatrix(),this.orthographicCamera.left=-this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.right=this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.top=this.sizes.frustrum/2,this.orthographicCamera.bottom=-this.sizes.frustrum/2,this.orthographicCamera.updateProjectionMatrix()}update(){this.controls.update()}}class J{constructor(){this.experience=new i,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.setRenderer()}setRenderer(){this.renderer=new T({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=g,this.renderer.toneMapping=A,this.renderer.toneMappingExposure=1.75,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=D,this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}update(){this.renderer.render(this.scene,this.camera.perspectiveCamera)}}let K=class{constructor(){this.experience=new i,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.room=this.resources.items.room,this.actualRoom=this.room.scene,this.lerp={current:0,target:0,ease:.1},this.setModel(),this.setAnimation(),this.onMouseMove()}setModel(){this.actualRoom.children.forEach(e=>{e.castShadow=!0,e.receiveShadow=!0,e instanceof _&&e.children.forEach(s=>{s.castShadow=!0,s.receiveShadow=!0}),e.name==="Screen"&&(e.material=new F({map:this.resources.items.screen}))}),this.scene.add(this.actualRoom),this.actualRoom.scale.set(.5,.5,.5),this.actualRoom.rotation.y=Math.PI}setAnimation(){this.mixer=new O(this.actualRoom)}onMouseMove(){window.addEventListener("mousemove",e=>{this.rotation=(e.clientX-window.innerWidth/2)*2/window.innerWidth,this.lerp.target=this.rotation*.05})}resize(){}update(){this.mixer.update(this.time.delta),this.lerp.current=W.utils.interpolate(this.lerp.current,this.lerp.target,this.lerp.ease),this.actualRoom.rotation.y=this.lerp.current,this.mixer.update(this.time.delta*9e-4)}};class Q{constructor(){this.experience=new i,this.scene=this.experience.scene,this.setFloor()}setFloor(){this.geometry=new B(100,100),this.material=new G({opacity:0,color:0,blending:k,side:q}),this.plane=new I(this.geometry,this.material),this.scene.add(this.plane),this.plane.rotation.x=Math.PI/2,this.plane.position.y=-.3,this.plane.receiveShadow=!0}resize(){}update(){}}class U{constructor(){this.experience=new i,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.camera=this.experience.camera}resize(){}update(){}}class ee{constructor(){this.experience=new i,this.scene=this.experience.scene,this.resources=this.experience.resources,this.setSunlight()}setSunlight(){this.sunLight=new N("#ffffff",3),this.sunLight.castShadow=!0,this.sunLight.shadow.camera.far=20,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(-1.5,7,3),this.scene.add(this.sunLight),this.ambientLight=new j("#ffffff",1),this.scene.add(this.ambientLight)}resize(){}update(){}}class te{constructor(){this.experience=new i,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.resources=this.experience.resources,this.resources.on("ready",()=>{this.environment=new ee,this.room=new K,this.floor=new Q,this.controls=new U})}resize(){}update(){this.room&&this.room.update(),this.controls&&this.controls.update()}}const a=class{constructor(e){if(a.instance)return a.instance;a.instance=this,this.canvas=e,this.scene=new H,this.time=new $,this.sizes=new V,this.camera=new Z,this.renderer=new J,this.resources=new X(Y),this.world=new te,this.sizes.on("resize",()=>{this.resize()}),this.time.on("update",()=>{this.update()})}resize(){this.camera.resize(),this.world.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.renderer.update()}};let i=a;d(i,"instance");function se(t){let e,s;return{c(){e=p("div"),s=p("canvas"),this.h()},l(r){e=m(r,"DIV",{class:!0});var h=u(e);s=m(h,"CANVAS",{class:!0}),u(s).forEach(n),h.forEach(n),this.h()},h(){l(s,"class","experience-canvas svelte-1k28ch8"),l(e,"class","experience svelte-1k28ch8")},m(r,h){L(r,e,h),M(e,s)},p:o,i:o,o,d(r){r&&n(e)}}}function ie(t){return R(()=>{new i(document.querySelector(".experience-canvas"))}),[]}class oe extends f{constructor(e){super(),z(this,e,ie,se,C,{})}}export{oe as component};