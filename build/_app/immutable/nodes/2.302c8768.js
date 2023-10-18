var $_=Object.defineProperty;var Z_=(s,e,t)=>e in s?$_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var wf=(s,e,t)=>(Z_(s,typeof e!="symbol"?e+"":e,t),t);import{S as Na,i as Oa,s as Fa,k as ze,q as cn,a as $t,l as He,m as gt,r as un,h as Oe,c as Zt,n as Re,b as Oi,D as _e,E as na,F as Ur,p as es,o as J_,g as Qi,v as kp,f as zp,d as Ir,O as Q_,e as Rf,y as ia,z as ra,A as sa,B as oa,C as Do,P as eg,G as tg,H as ng}from"../chunks/index.9e2cf2f4.js";import{g as Hp,P as ig}from"../chunks/Project.8f35a0d3.js";import{p as rg}from"../chunks/projects.8f0cb070.js";const qb=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function sg(s){let e,t,n,i,r,o,a,l,c,u,h,f;return{c(){e=ze("section"),t=ze("div"),n=ze("h5"),i=cn("👋 Hey, I'm"),r=$t(),o=ze("h1"),a=cn("Jon Jampen"),l=$t(),c=ze("button"),u=cn("Get in touch"),this.h()},l(d){e=He(d,"SECTION",{class:!0});var g=gt(e);t=He(g,"DIV",{class:!0});var _=gt(t);n=He(_,"H5",{});var p=gt(n);i=un(p,"👋 Hey, I'm"),p.forEach(Oe),r=Zt(_),o=He(_,"H1",{});var m=gt(o);a=un(m,"Jon Jampen"),m.forEach(Oe),l=Zt(_),c=He(_,"BUTTON",{class:!0});var y=gt(c);u=un(y,"Get in touch"),y.forEach(Oe),_.forEach(Oe),g.forEach(Oe),this.h()},h(){Re(c,"class","btn secondary"),Re(t,"class","left"),Re(e,"class","hero")},m(d,g){Oi(d,e,g),_e(e,t),_e(t,n),_e(n,i),_e(t,r),_e(t,o),_e(o,a),_e(t,l),_e(t,c),_e(c,u),h||(f=na(c,"click",s[0]),h=!0)},p:Ur,i:Ur,o:Ur,d(d){d&&Oe(e),h=!1,f()}}}function og(s){return[()=>Hp("/#contact")]}class ag extends Na{constructor(e){super(),Oa(this,e,og,sg,Fa,{})}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lh="155",Uo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},No={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lg=0,Cf=1,cg=2,Gp=1,Vp=2,Jr=3,os=0,gi=1,Cr=2,rs=0,da=1,Lf=2,Pf=3,If=4,ug=5,ta=100,hg=101,fg=102,Df=103,Uf=104,dg=200,pg=201,mg=202,_g=203,Wp=204,Xp=205,gg=206,vg=207,xg=208,yg=209,Mg=210,Sg=0,Eg=1,Tg=2,eh=3,bg=4,Ag=5,wg=6,Rg=7,Ph=0,Cg=1,Lg=2,Cs=0,Pg=1,Ig=2,Yp=3,Dg=4,Ug=5,jp=300,ya=301,Ma=302,th=303,nh=304,Gc=306,Sa=1e3,Zi=1001,Cc=1002,Bn=1003,ih=1004,Ec=1005,Si=1006,qp=1007,yo=1008,Ls=1009,Ng=1010,Og=1011,Ih=1012,Kp=1013,Es=1014,ns=1015,vl=1016,$p=1017,Zp=1018,fo=1020,Fg=1021,Ji=1023,Bg=1024,kg=1025,po=1026,Ea=1027,zg=1028,Jp=1029,Hg=1030,Qp=1031,em=1033,au=33776,lu=33777,cu=33778,uu=33779,Nf=35840,Of=35841,Ff=35842,Bf=35843,Gg=36196,kf=37492,zf=37496,Hf=37808,Gf=37809,Vf=37810,Wf=37811,Xf=37812,Yf=37813,jf=37814,qf=37815,Kf=37816,$f=37817,Zf=37818,Jf=37819,Qf=37820,ed=37821,hu=36492,Vg=36283,td=36284,nd=36285,id=36286,Wg=2200,Xg=2201,Yg=2202,xl=2300,Ta=2301,fu=2302,aa=2400,la=2401,Lc=2402,Dh=2500,jg=2501,qg=0,tm=1,rh=2,nm=3e3,Ps=3001,Kg=3200,$g=3201,Uh=0,Zg=1,mo="",rt="srgb",yr="srgb-linear",im="display-p3",du=7680,Jg=519,Qg=512,e0=513,t0=514,n0=515,i0=516,r0=517,s0=518,o0=519,sh=35044,rd="300 es",oh=1035,is=2e3,Pc=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sd=1234567;const hl=Math.PI/180,ba=180/Math.PI;function gr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ti[s&255]+ti[s>>8&255]+ti[s>>16&255]+ti[s>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[n&255]+ti[n>>8&255]+ti[n>>16&255]+ti[n>>24&255]).toLowerCase()}function Yn(s,e,t){return Math.max(e,Math.min(t,s))}function Nh(s,e){return(s%e+e)%e}function a0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function l0(s,e,t){return s!==e?(t-s)/(e-s):0}function fl(s,e,t){return(1-t)*s+t*e}function c0(s,e,t,n){return fl(s,e,1-Math.exp(-t*n))}function u0(s,e=1){return e-Math.abs(Nh(s,e*2)-e)}function h0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function f0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function d0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function p0(s,e){return s+Math.random()*(e-s)}function m0(s){return s*(.5-Math.random())}function _0(s){s!==void 0&&(sd=s);let e=sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g0(s){return s*hl}function v0(s){return s*ba}function ah(s){return(s&s-1)===0&&s!==0}function rm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ic(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function x0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Lr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const sm={DEG2RAD:hl,RAD2DEG:ba,generateUUID:gr,clamp:Yn,euclideanModulo:Nh,mapLinear:a0,inverseLerp:l0,lerp:fl,damp:c0,pingpong:u0,smoothstep:h0,smootherstep:f0,randInt:d0,randFloat:p0,randFloatSpread:m0,seededRandom:_0,degToRad:g0,radToDeg:v0,isPowerOfTwo:ah,ceilPowerOfTwo:rm,floorPowerOfTwo:Ic,setQuaternionFromProperEuler:x0,normalize:kt,denormalize:Lr};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,n,i,r,o,a,l,c){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],y=i[1],v=i[4],E=i[7],M=i[2],C=i[5],S=i[8];return r[0]=o*_+a*y+l*M,r[3]=o*p+a*v+l*C,r[6]=o*m+a*E+l*S,r[1]=c*_+u*y+h*M,r[4]=c*p+u*v+h*C,r[7]=c*m+u*E+h*S,r[2]=f*_+d*y+g*M,r[5]=f*p+d*v+g*C,r[8]=f*m+d*E+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pu.makeScale(e,t)),this}rotate(e){return this.premultiply(pu.makeRotation(-e)),this}translate(e,t){return this.premultiply(pu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pu=new xt;function om(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const od={};function dl(s){s in od||(od[s]=!0,console.warn(s))}function pa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mu(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const y0=new xt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),M0=new xt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function S0(s){return s.convertSRGBToLinear().applyMatrix3(M0)}function E0(s){return s.applyMatrix3(y0).convertLinearToSRGB()}const T0={[yr]:s=>s,[rt]:s=>s.convertSRGBToLinear(),[im]:S0},b0={[yr]:s=>s,[rt]:s=>s.convertLinearToSRGB(),[im]:E0},fr={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return yr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=T0[e],i=b0[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Oo;class am{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oo===void 0&&(Oo=yl("canvas")),Oo.width=e.width,Oo.height=e.height;const n=Oo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Oo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=pa(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pa(t[n]/255)*255):t[n]=pa(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A0=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=gr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_u(i[o].image)):r.push(_u(i[o]))}else r=_u(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _u(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?am.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w0=0;class qn extends Os{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,n=Zi,i=Zi,r=Si,o=yo,a=Ji,l=Ls,c=qn.DEFAULT_ANISOTROPY,u=mo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=gr(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(dl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ps?rt:mo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return dl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?Ps:nm}set encoding(e){dl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ps?rt:mo}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=jp;qn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,n=0,i=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(d+1)/2,M=(m+1)/2,C=(u+f)/4,S=(h+_)/4,I=(g+p)/4;return v>E&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=C/n,r=S/n):E>M?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=C/i,r=I/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=S/r,i=I/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends Os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(dl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ps?rt:mo),this.texture=new qn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mo extends R0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cm extends qn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class C0 extends qn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-a;const m=l*f+c*d+u*g+h*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const M=Math.sqrt(v),C=Math.atan2(M,m*y);p=Math.sin(p*C)/M,a=Math.sin(a*C)/M}const E=a*y;if(l=l*p+f*E,c=c*p+d*E,u=u*p+g*E,h=h*p+_*E,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gu.copy(this).projectOnVector(e),this.sub(gu)}reflect(e){return this.sub(gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gu=new O,ad=new zi;class cs{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox),Fo.applyMatrix4(e.matrixWorld),this.union(Fo);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Yr.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Yr)}else i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yr),Yr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),$l.subVectors(this.max,Qa),Bo.subVectors(e.a,Qa),ko.subVectors(e.b,Qa),zo.subVectors(e.c,Qa),ms.subVectors(ko,Bo),_s.subVectors(zo,ko),to.subVectors(Bo,zo);let t=[0,-ms.z,ms.y,0,-_s.z,_s.y,0,-to.z,to.y,ms.z,0,-ms.x,_s.z,0,-_s.x,to.z,0,-to.x,-ms.y,ms.x,0,-_s.y,_s.x,0,-to.y,to.x,0];return!vu(t,Bo,ko,zo,$l)||(t=[1,0,0,0,1,0,0,0,1],!vu(t,Bo,ko,zo,$l))?!1:(Zl.crossVectors(ms,_s),t=[Zl.x,Zl.y,Zl.z],vu(t,Bo,ko,zo,$l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xr=[new O,new O,new O,new O,new O,new O,new O,new O],Yr=new O,Fo=new cs,Bo=new O,ko=new O,zo=new O,ms=new O,_s=new O,to=new O,Qa=new O,$l=new O,Zl=new O,no=new O;function vu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){no.fromArray(s,r);const a=i.x*Math.abs(no.x)+i.y*Math.abs(no.y)+i.z*Math.abs(no.z),l=e.dot(no),c=t.dot(no),u=n.dot(no);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const L0=new cs,el=new O,xu=new O;class Fr{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):L0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const t=el.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(el,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(xu)),this.expandByPoint(el.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jr=new O,yu=new O,Jl=new O,gs=new O,Mu=new O,Ql=new O,Su=new O;class Rl{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jr.copy(this.origin).addScaledVector(this.direction,t),jr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yu.copy(e).add(t).multiplyScalar(.5),Jl.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(yu);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Jl),a=gs.dot(this.direction),l=-gs.dot(Jl),c=gs.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(yu).addScaledVector(Jl,f),d}intersectSphere(e,t){jr.subVectors(e.center,this.origin);const n=jr.dot(this.direction),i=jr.dot(jr)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jr)!==null}intersectTriangle(e,t,n,i,r){Mu.subVectors(t,e),Ql.subVectors(n,e),Su.crossVectors(Mu,Ql);let o=this.direction.dot(Su),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gs.subVectors(this.origin,e);const l=a*this.direction.dot(Ql.crossVectors(gs,Ql));if(l<0)return null;const c=a*this.direction.dot(Mu.cross(gs));if(c<0||l+c>o)return null;const u=-a*gs.dot(Su);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,p){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,p)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ho.setFromMatrixColumn(e,0).length(),r=1/Ho.setFromMatrixColumn(e,1).length(),o=1/Ho.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P0,e,I0)}lookAt(e,t,n){const i=this.elements;return Ui.subVectors(e,t),Ui.lengthSq()===0&&(Ui.z=1),Ui.normalize(),vs.crossVectors(n,Ui),vs.lengthSq()===0&&(Math.abs(n.z)===1?Ui.x+=1e-4:Ui.z+=1e-4,Ui.normalize(),vs.crossVectors(n,Ui)),vs.normalize(),ec.crossVectors(Ui,vs),i[0]=vs.x,i[4]=ec.x,i[8]=Ui.x,i[1]=vs.y,i[5]=ec.y,i[9]=Ui.y,i[2]=vs.z,i[6]=ec.z,i[10]=Ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],E=n[11],M=n[15],C=i[0],S=i[4],I=i[8],x=i[12],R=i[1],X=i[5],ne=i[9],F=i[13],j=i[2],B=i[6],le=i[10],Z=i[14],$=i[3],Q=i[7],re=i[11],W=i[15];return r[0]=o*C+a*R+l*j+c*$,r[4]=o*S+a*X+l*B+c*Q,r[8]=o*I+a*ne+l*le+c*re,r[12]=o*x+a*F+l*Z+c*W,r[1]=u*C+h*R+f*j+d*$,r[5]=u*S+h*X+f*B+d*Q,r[9]=u*I+h*ne+f*le+d*re,r[13]=u*x+h*F+f*Z+d*W,r[2]=g*C+_*R+p*j+m*$,r[6]=g*S+_*X+p*B+m*Q,r[10]=g*I+_*ne+p*le+m*re,r[14]=g*x+_*F+p*Z+m*W,r[3]=y*C+v*R+E*j+M*$,r[7]=y*S+v*X+E*B+M*Q,r[11]=y*I+v*ne+E*le+M*re,r[15]=y*x+v*F+E*Z+M*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+p*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=h*p*c-_*f*c+_*l*d-a*p*d-h*l*m+a*f*m,v=g*f*c-u*p*c-g*l*d+o*p*d+u*l*m-o*f*m,E=u*_*c-g*h*c+g*a*d-o*_*d-u*a*m+o*h*m,M=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,C=t*y+n*v+i*E+r*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/C;return e[0]=y*S,e[1]=(_*f*r-h*p*r-_*i*d+n*p*d+h*i*m-n*f*m)*S,e[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*m+n*l*m)*S,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*S,e[4]=v*S,e[5]=(u*p*r-g*f*r+g*i*d-t*p*d-u*i*m+t*f*m)*S,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*S,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*S,e[8]=E*S,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*m-t*h*m)*S,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*S,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*S,e[12]=M*S,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*p+t*h*p)*S,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*S,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,p=o*h,m=a*h,y=l*c,v=l*u,E=l*h,M=n.x,C=n.y,S=n.z;return i[0]=(1-(_+m))*M,i[1]=(d+E)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(d-E)*C,i[5]=(1-(f+m))*C,i[6]=(p+y)*C,i[7]=0,i[8]=(g+v)*S,i[9]=(p-y)*S,i[10]=(1-(f+_))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ho.set(i[0],i[1],i[2]).length();const o=Ho.set(i[4],i[5],i[6]).length(),a=Ho.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],dr.copy(this);const c=1/r,u=1/o,h=1/a;return dr.elements[0]*=c,dr.elements[1]*=c,dr.elements[2]*=c,dr.elements[4]*=u,dr.elements[5]*=u,dr.elements[6]*=u,dr.elements[8]*=h,dr.elements[9]*=h,dr.elements[10]*=h,t.setFromRotationMatrix(dr),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=is){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===is)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Pc)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=is){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*u;let g,_;if(a===is)g=(o+r)*h,_=-2*h;else if(a===Pc)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ho=new O,dr=new yt,P0=new O(0,0,0),I0=new O(1,1,1),vs=new O,ec=new O,Ui=new O,ld=new yt,cd=new zi;class Vc{constructor(e=0,t=0,n=0,i=Vc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cd.setFromEuler(this),this.setFromQuaternion(cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vc.DEFAULT_ORDER="XYZ";class um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D0=0;const ud=new O,Go=new zi,qr=new yt,tc=new O,tl=new O,U0=new O,N0=new zi,hd=new O(1,0,0),fd=new O(0,1,0),dd=new O(0,0,1),O0={type:"added"},pd={type:"removed"};class an extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new O,t=new Vc,n=new zi,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new xt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.multiply(Go),this}rotateOnWorldAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.premultiply(Go),this}rotateX(e){return this.rotateOnAxis(hd,e)}rotateY(e){return this.rotateOnAxis(fd,e)}rotateZ(e){return this.rotateOnAxis(dd,e)}translateOnAxis(e,t){return ud.copy(e).applyQuaternion(this.quaternion),this.position.add(ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hd,e)}translateY(e){return this.translateOnAxis(fd,e)}translateZ(e){return this.translateOnAxis(dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tc.copy(e):tc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qr.lookAt(tl,tc,this.up):qr.lookAt(tc,tl,this.up),this.quaternion.setFromRotationMatrix(qr),i&&(qr.extractRotation(i.matrixWorld),Go.setFromRotationMatrix(qr),this.quaternion.premultiply(Go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(O0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),qr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qr.multiply(e.parent.matrixWorld)),e.applyMatrix4(qr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,U0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,N0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}an.DEFAULT_UP=new O(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pr=new O,Kr=new O,Eu=new O,$r=new O,Vo=new O,Wo=new O,md=new O,Tu=new O,bu=new O,Au=new O;let nc=!1;class _r{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pr.subVectors(e,t),i.cross(pr);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){pr.subVectors(i,t),Kr.subVectors(n,t),Eu.subVectors(e,t);const o=pr.dot(pr),a=pr.dot(Kr),l=pr.dot(Eu),c=Kr.dot(Kr),u=Kr.dot(Eu),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$r),$r.x>=0&&$r.y>=0&&$r.x+$r.y<=1}static getUV(e,t,n,i,r,o,a,l){return nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nc=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,$r),l.setScalar(0),l.addScaledVector(r,$r.x),l.addScaledVector(o,$r.y),l.addScaledVector(a,$r.z),l}static isFrontFacing(e,t,n,i){return pr.subVectors(n,t),Kr.subVectors(e,t),pr.cross(Kr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pr.subVectors(this.c,this.b),Kr.subVectors(this.a,this.b),pr.cross(Kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),nc=!0),_r.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return _r.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return _r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Vo.subVectors(i,n),Wo.subVectors(r,n),Tu.subVectors(e,n);const l=Vo.dot(Tu),c=Wo.dot(Tu);if(l<=0&&c<=0)return t.copy(n);bu.subVectors(e,i);const u=Vo.dot(bu),h=Wo.dot(bu);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Vo,o);Au.subVectors(e,r);const d=Vo.dot(Au),g=Wo.dot(Au);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Wo,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return md.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(md,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(Vo,o).addScaledVector(Wo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let F0=0;class vr extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=da,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wp,this.blendDst=Xp,this.blendEquation=ta,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=eh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=du,this.stencilZFail=du,this.stencilZPass=du,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==da&&(n.blending=this.blending),this.side!==os&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},ic={h:0,s:0,l:0};function wu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fr.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=fr.workingColorSpace){return this.r=e,this.g=t,this.b=n,fr.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=fr.workingColorSpace){if(e=Nh(e,1),t=Yn(t,0,1),n=Yn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wu(o,r,e+1/3),this.g=wu(o,r,e),this.b=wu(o,r,e-1/3)}return fr.toWorkingColorSpace(this,i),this}setStyle(e,t=rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){const n=hm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=mu(e.r),this.g=mu(e.g),this.b=mu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return fr.fromWorkingColorSpace(ni.copy(this),e),Math.round(Yn(ni.r*255,0,255))*65536+Math.round(Yn(ni.g*255,0,255))*256+Math.round(Yn(ni.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fr.workingColorSpace){fr.fromWorkingColorSpace(ni.copy(this),t);const n=ni.r,i=ni.g,r=ni.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=fr.workingColorSpace){return fr.fromWorkingColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=rt){fr.fromWorkingColorSpace(ni.copy(this),e);const t=ni.r,n=ni.g,i=ni.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mr),mr.h+=e,mr.s+=t,mr.l+=n,this.setHSL(mr.h,mr.s,mr.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(ic);const n=fl(mr.h,ic.h,t),i=fl(mr.s,ic.s,t),r=fl(mr.l,ic.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new ut;ut.NAMES=hm;class Ts extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const En=new O,rc=new st;class Kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sh,this.updateRange={offset:0,count:-1},this.gpuType=ns,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rc.fromBufferAttribute(this,t),rc.applyMatrix3(e),this.setXY(t,rc.x,rc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class fm extends Kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dm extends Kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ss extends Kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let B0=0;const ji=new yt,Ru=new an,Xo=new O,Ni=new cs,nl=new cs,Fn=new O;class Mr extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?dm:fm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ji.makeRotationFromQuaternion(e),this.applyMatrix4(ji),this}rotateX(e){return ji.makeRotationX(e),this.applyMatrix4(ji),this}rotateY(e){return ji.makeRotationY(e),this.applyMatrix4(ji),this}rotateZ(e){return ji.makeRotationZ(e),this.applyMatrix4(ji),this}translate(e,t,n){return ji.makeTranslation(e,t,n),this.applyMatrix4(ji),this}scale(e,t,n){return ji.makeScale(e,t,n),this.applyMatrix4(ji),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xo).negate(),this.translate(Xo.x,Xo.y,Xo.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ss(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Ni.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];nl.setFromBufferAttribute(a),this.morphTargetsRelative?(Fn.addVectors(Ni.min,nl.min),Ni.expandByPoint(Fn),Fn.addVectors(Ni.max,nl.max),Ni.expandByPoint(Fn)):(Ni.expandByPoint(nl.min),Ni.expandByPoint(nl.max))}Ni.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Fn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Fn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Fn.fromBufferAttribute(a,c),l&&(Xo.fromBufferAttribute(e,c),Fn.add(Xo)),i=Math.max(i,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new O,u[R]=new O;const h=new O,f=new O,d=new O,g=new st,_=new st,p=new st,m=new O,y=new O;function v(R,X,ne){h.fromArray(i,R*3),f.fromArray(i,X*3),d.fromArray(i,ne*3),g.fromArray(o,R*2),_.fromArray(o,X*2),p.fromArray(o,ne*2),f.sub(h),d.sub(h),_.sub(g),p.sub(g);const F=1/(_.x*p.y-p.x*_.y);isFinite(F)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(F),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(F),c[R].add(m),c[X].add(m),c[ne].add(m),u[R].add(y),u[X].add(y),u[ne].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let R=0,X=E.length;R<X;++R){const ne=E[R],F=ne.start,j=ne.count;for(let B=F,le=F+j;B<le;B+=3)v(n[B+0],n[B+1],n[B+2])}const M=new O,C=new O,S=new O,I=new O;function x(R){S.fromArray(r,R*3),I.copy(S);const X=c[R];M.copy(X),M.sub(S.multiplyScalar(S.dot(X))).normalize(),C.crossVectors(I,X);const F=C.dot(u[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=F}for(let R=0,X=E.length;R<X;++R){const ne=E[R],F=ne.start,j=ne.count;for(let B=F,le=F+j;B<le;B+=3)x(n[B+0]),x(n[B+1]),x(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Kn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new yt,io=new Rl,sc=new Fr,gd=new O,Yo=new O,jo=new O,qo=new O,Cu=new O,oc=new O,ac=new st,lc=new st,cc=new st,vd=new O,xd=new O,yd=new O,uc=new O,hc=new O;class ki extends an{constructor(e=new Mr,t=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){oc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Cu.fromBufferAttribute(h,e),o?oc.addScaledVector(Cu,u):oc.addScaledVector(Cu.sub(t),u))}t.add(oc)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(r),io.copy(e.ray).recast(e.near),!(sc.containsPoint(io.origin)===!1&&(io.intersectSphere(sc,gd)===null||io.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(_d.copy(r).invert(),io.copy(e.ray).applyMatrix4(_d),!(n.boundingBox!==null&&io.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,io)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let E=y,M=v;E<M;E+=3){const C=a.getX(E),S=a.getX(E+1),I=a.getX(E+2);i=fc(this,m,e,n,c,u,h,C,S,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);i=fc(this,o,e,n,c,u,h,y,v,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=y,M=v;E<M;E+=3){const C=E,S=E+1,I=E+2;i=fc(this,m,e,n,c,u,h,C,S,I),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,E=p+2;i=fc(this,o,e,n,c,u,h,y,v,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function k0(s,e,t,n,i,r,o,a){let l;if(e.side===gi?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===os,a),l===null)return null;hc.copy(a),hc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(hc);return c<t.near||c>t.far?null:{distance:c,point:hc.clone(),object:s}}function fc(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Yo),s.getVertexPosition(l,jo),s.getVertexPosition(c,qo);const u=k0(s,e,t,n,Yo,jo,qo,uc);if(u){i&&(ac.fromBufferAttribute(i,a),lc.fromBufferAttribute(i,l),cc.fromBufferAttribute(i,c),u.uv=_r.getInterpolation(uc,Yo,jo,qo,ac,lc,cc,new st)),r&&(ac.fromBufferAttribute(r,a),lc.fromBufferAttribute(r,l),cc.fromBufferAttribute(r,c),u.uv1=_r.getInterpolation(uc,Yo,jo,qo,ac,lc,cc,new st),u.uv2=u.uv1),o&&(vd.fromBufferAttribute(o,a),xd.fromBufferAttribute(o,l),yd.fromBufferAttribute(o,c),u.normal=_r.getInterpolation(uc,Yo,jo,qo,vd,xd,yd,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};_r.getNormal(Yo,jo,qo,h.normal),u.face=h}return u}class Cl extends Mr{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ss(c,3)),this.setAttribute("normal",new ss(u,3)),this.setAttribute("uv",new ss(h,2));function g(_,p,m,y,v,E,M,C,S,I,x){const R=E/S,X=M/I,ne=E/2,F=M/2,j=C/2,B=S+1,le=I+1;let Z=0,$=0;const Q=new O;for(let re=0;re<le;re++){const W=re*X-F;for(let te=0;te<B;te++){const ye=te*R-ne;Q[_]=ye*y,Q[p]=W*v,Q[m]=j,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[m]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(te/S),h.push(1-re/I),Z+=1}}for(let re=0;re<I;re++)for(let W=0;W<S;W++){const te=f+W+B*re,ye=f+W+B*(re+1),ge=f+(W+1)+B*(re+1),Ee=f+(W+1)+B*re;l.push(te,ye,Ee),l.push(ye,ge,Ee),$+=6}a.addGroup(d,$,x),d+=$,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Aa(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mi(s){const e={};for(let t=0;t<s.length;t++){const n=Aa(s[t]);for(const i in n)e[i]=n[i]}return e}function z0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function pm(s){return s.getRenderTarget()===null?s.outputColorSpace:yr}const H0={clone:Aa,merge:mi};var G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class So extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Aa(e.uniforms),this.uniformsGroups=z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let mm=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=is}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class _i extends mm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ko=-90,$o=1;class W0 extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new _i(Ko,$o,e,t);i.layers=this.layers,this.add(i);const r=new _i(Ko,$o,e,t);r.layers=this.layers,this.add(r);const o=new _i(Ko,$o,e,t);o.layers=this.layers,this.add(o);const a=new _i(Ko,$o,e,t);a.layers=this.layers,this.add(a);const l=new _i(Ko,$o,e,t);l.layers=this.layers,this.add(l);const c=new _i(Ko,$o,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===is)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class _m extends qn{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ya,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class X0 extends Mo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(dl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ps?rt:mo),this.texture=new _m(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Cl(5,5,5),r=new So({name:"CubemapFromEquirect",uniforms:Aa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gi,blending:rs});r.uniforms.tEquirect.value=t;const o=new ki(i,r),a=t.minFilter;return t.minFilter===yo&&(t.minFilter=Si),new W0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Lu=new O,Y0=new O,j0=new xt;class Ms{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Lu.subVectors(n,t).cross(Y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||j0.getNormalMatrix(e),i=this.coplanarPoint(Lu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new Fr,dc=new O;class Oh{constructor(e=new Ms,t=new Ms,n=new Ms,i=new Ms,r=new Ms,o=new Ms){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=is){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],y=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-r,f-c,p-d,E-m).normalize(),n[1].setComponents(l+r,f+c,p+d,E+m).normalize(),n[2].setComponents(l+o,f+u,p+g,E+y).normalize(),n[3].setComponents(l-o,f-u,p-g,E-y).normalize(),n[4].setComponents(l-a,f-h,p-_,E-v).normalize(),t===is)n[5].setComponents(l+a,f+h,p+_,E+v).normalize();else if(t===Pc)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(e){return ro.center.set(0,0,0),ro.radius=.7071067811865476,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(dc.x=i.normal.x>0?e.max.x:e.min.x,dc.y=i.normal.y>0?e.max.y:e.min.y,dc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function q0(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Wc extends Mr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*f-o;for(let v=0;v<c;v++){const E=v*h-r;g.push(E,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,E=y+c*(m+1),M=y+1+c*(m+1),C=y+1+c*m;d.push(v,E,C),d.push(E,M,C)}this.setIndex(d),this.setAttribute("position",new ss(g,3)),this.setAttribute("normal",new ss(_,3)),this.setAttribute("uv",new ss(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ov=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,av=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_v=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$v=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ex=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ix=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ox=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Px=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ey=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ty=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oy=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,py=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,My=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:K0,alphahash_pars_fragment:$0,alphamap_fragment:Z0,alphamap_pars_fragment:J0,alphatest_fragment:Q0,alphatest_pars_fragment:ev,aomap_fragment:tv,aomap_pars_fragment:nv,begin_vertex:iv,beginnormal_vertex:rv,bsdfs:sv,iridescence_fragment:ov,bumpmap_pars_fragment:av,clipping_planes_fragment:lv,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:hv,color_fragment:fv,color_pars_fragment:dv,color_pars_vertex:pv,color_vertex:mv,common:_v,cube_uv_reflection_fragment:gv,defaultnormal_vertex:vv,displacementmap_pars_vertex:xv,displacementmap_vertex:yv,emissivemap_fragment:Mv,emissivemap_pars_fragment:Sv,colorspace_fragment:Ev,colorspace_pars_fragment:Tv,envmap_fragment:bv,envmap_common_pars_fragment:Av,envmap_pars_fragment:wv,envmap_pars_vertex:Rv,envmap_physical_pars_fragment:zv,envmap_vertex:Cv,fog_vertex:Lv,fog_pars_vertex:Pv,fog_fragment:Iv,fog_pars_fragment:Dv,gradientmap_pars_fragment:Uv,lightmap_fragment:Nv,lightmap_pars_fragment:Ov,lights_lambert_fragment:Fv,lights_lambert_pars_fragment:Bv,lights_pars_begin:kv,lights_toon_fragment:Hv,lights_toon_pars_fragment:Gv,lights_phong_fragment:Vv,lights_phong_pars_fragment:Wv,lights_physical_fragment:Xv,lights_physical_pars_fragment:Yv,lights_fragment_begin:jv,lights_fragment_maps:qv,lights_fragment_end:Kv,logdepthbuf_fragment:$v,logdepthbuf_pars_fragment:Zv,logdepthbuf_pars_vertex:Jv,logdepthbuf_vertex:Qv,map_fragment:ex,map_pars_fragment:tx,map_particle_fragment:nx,map_particle_pars_fragment:ix,metalnessmap_fragment:rx,metalnessmap_pars_fragment:sx,morphcolor_vertex:ox,morphnormal_vertex:ax,morphtarget_pars_vertex:lx,morphtarget_vertex:cx,normal_fragment_begin:ux,normal_fragment_maps:hx,normal_pars_fragment:fx,normal_pars_vertex:dx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:vx,iridescence_pars_fragment:xx,opaque_fragment:yx,packing:Mx,premultiplied_alpha_fragment:Sx,project_vertex:Ex,dithering_fragment:Tx,dithering_pars_fragment:bx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:Rx,shadowmap_pars_vertex:Cx,shadowmap_vertex:Lx,shadowmask_pars_fragment:Px,skinbase_vertex:Ix,skinning_pars_vertex:Dx,skinning_vertex:Ux,skinnormal_vertex:Nx,specularmap_fragment:Ox,specularmap_pars_fragment:Fx,tonemapping_fragment:Bx,tonemapping_pars_fragment:kx,transmission_fragment:zx,transmission_pars_fragment:Hx,uv_pars_fragment:Gx,uv_pars_vertex:Vx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:Yx,background_frag:jx,backgroundCube_vert:qx,backgroundCube_frag:Kx,cube_vert:$x,cube_frag:Zx,depth_vert:Jx,depth_frag:Qx,distanceRGBA_vert:ey,distanceRGBA_frag:ty,equirect_vert:ny,equirect_frag:iy,linedashed_vert:ry,linedashed_frag:sy,meshbasic_vert:oy,meshbasic_frag:ay,meshlambert_vert:ly,meshlambert_frag:cy,meshmatcap_vert:uy,meshmatcap_frag:hy,meshnormal_vert:fy,meshnormal_frag:dy,meshphong_vert:py,meshphong_frag:my,meshphysical_vert:_y,meshphysical_frag:gy,meshtoon_vert:vy,meshtoon_frag:xy,points_vert:yy,points_frag:My,shadow_vert:Sy,shadow_frag:Ey,sprite_vert:Ty,sprite_frag:by},we={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Rr={basic:{uniforms:mi([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:mi([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ut(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:mi([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:mi([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:mi([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new ut(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:mi([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:mi([we.points,we.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:mi([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:mi([we.common,we.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:mi([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:mi([we.sprite,we.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:mi([we.common,we.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:mi([we.lights,we.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Rr.physical={uniforms:mi([Rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const pc={r:0,b:0,g:0};function Ay(s,e,t,n,i,r,o){const a=new ut(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(p,m){let y=!1,v=m.isScene===!0?m.background:null;switch(v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0),s.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),y=!0;break}(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Gc)?(u===void 0&&(u=new ki(new Cl(1,1,1),new So({name:"BackgroundCubeMaterial",uniforms:Aa(Rr.backgroundCube.uniforms),vertexShader:Rr.backgroundCube.vertexShader,fragmentShader:Rr.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,S,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=v.colorSpace!==rt,(h!==v||f!==v.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ki(new Wc(2,2),new So({name:"BackgroundMaterial",uniforms:Aa(Rr.background.uniforms),vertexShader:Rr.background.vertexShader,fragmentShader:Rr.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=v.colorSpace!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(pc,pm(s)),n.buffers.color.setClear(pc.r,pc.g,pc.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function wy(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(j,B,le,Z,$){let Q=!1;if(o){const re=_(Z,le,B);c!==re&&(c=re,d(c.object)),Q=m(j,Z,le,$),Q&&y(j,Z,le,$)}else{const re=B.wireframe===!0;(c.geometry!==Z.id||c.program!==le.id||c.wireframe!==re)&&(c.geometry=Z.id,c.program=le.id,c.wireframe=re,Q=!0)}$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,I(j,B,le,Z),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(j){return n.isWebGL2?s.bindVertexArray(j):r.bindVertexArrayOES(j)}function g(j){return n.isWebGL2?s.deleteVertexArray(j):r.deleteVertexArrayOES(j)}function _(j,B,le){const Z=le.wireframe===!0;let $=a[j.id];$===void 0&&($={},a[j.id]=$);let Q=$[B.id];Q===void 0&&(Q={},$[B.id]=Q);let re=Q[Z];return re===void 0&&(re=p(f()),Q[Z]=re),re}function p(j){const B=[],le=[],Z=[];for(let $=0;$<i;$++)B[$]=0,le[$]=0,Z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:le,attributeDivisors:Z,object:j,attributes:{},index:null}}function m(j,B,le,Z){const $=c.attributes,Q=B.attributes;let re=0;const W=le.getAttributes();for(const te in W)if(W[te].location>=0){const ge=$[te];let Ee=Q[te];if(Ee===void 0&&(te==="instanceMatrix"&&j.instanceMatrix&&(Ee=j.instanceMatrix),te==="instanceColor"&&j.instanceColor&&(Ee=j.instanceColor)),ge===void 0||ge.attribute!==Ee||Ee&&ge.data!==Ee.data)return!0;re++}return c.attributesNum!==re||c.index!==Z}function y(j,B,le,Z){const $={},Q=B.attributes;let re=0;const W=le.getAttributes();for(const te in W)if(W[te].location>=0){let ge=Q[te];ge===void 0&&(te==="instanceMatrix"&&j.instanceMatrix&&(ge=j.instanceMatrix),te==="instanceColor"&&j.instanceColor&&(ge=j.instanceColor));const Ee={};Ee.attribute=ge,ge&&ge.data&&(Ee.data=ge.data),$[te]=Ee,re++}c.attributes=$,c.attributesNum=re,c.index=Z}function v(){const j=c.newAttributes;for(let B=0,le=j.length;B<le;B++)j[B]=0}function E(j){M(j,0)}function M(j,B){const le=c.newAttributes,Z=c.enabledAttributes,$=c.attributeDivisors;le[j]=1,Z[j]===0&&(s.enableVertexAttribArray(j),Z[j]=1),$[j]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,B),$[j]=B)}function C(){const j=c.newAttributes,B=c.enabledAttributes;for(let le=0,Z=B.length;le<Z;le++)B[le]!==j[le]&&(s.disableVertexAttribArray(le),B[le]=0)}function S(j,B,le,Z,$,Q,re){re===!0?s.vertexAttribIPointer(j,B,le,$,Q):s.vertexAttribPointer(j,B,le,Z,$,Q)}function I(j,B,le,Z){if(n.isWebGL2===!1&&(j.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const $=Z.attributes,Q=le.getAttributes(),re=B.defaultAttributeValues;for(const W in Q){const te=Q[W];if(te.location>=0){let ye=$[W];if(ye===void 0&&(W==="instanceMatrix"&&j.instanceMatrix&&(ye=j.instanceMatrix),W==="instanceColor"&&j.instanceColor&&(ye=j.instanceColor)),ye!==void 0){const ge=ye.normalized,Ee=ye.itemSize,De=t.get(ye);if(De===void 0)continue;const Pe=De.buffer,ce=De.type,ht=De.bytesPerElement,Ce=n.isWebGL2===!0&&(ce===s.INT||ce===s.UNSIGNED_INT||ye.gpuType===Kp);if(ye.isInterleavedBufferAttribute){const Me=ye.data,G=Me.stride,Je=ye.offset;if(Me.isInstancedInterleavedBuffer){for(let Ne=0;Ne<te.locationSize;Ne++)M(te.location+Ne,Me.meshPerAttribute);j.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ne=0;Ne<te.locationSize;Ne++)E(te.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Ne=0;Ne<te.locationSize;Ne++)S(te.location+Ne,Ee/te.locationSize,ce,ge,G*ht,(Je+Ee/te.locationSize*Ne)*ht,Ce)}else{if(ye.isInstancedBufferAttribute){for(let Me=0;Me<te.locationSize;Me++)M(te.location+Me,ye.meshPerAttribute);j.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Me=0;Me<te.locationSize;Me++)E(te.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Me=0;Me<te.locationSize;Me++)S(te.location+Me,Ee/te.locationSize,ce,ge,Ee*ht,Ee/te.locationSize*Me*ht,Ce)}}else if(re!==void 0){const ge=re[W];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(te.location,ge);break;case 3:s.vertexAttrib3fv(te.location,ge);break;case 4:s.vertexAttrib4fv(te.location,ge);break;default:s.vertexAttrib1fv(te.location,ge)}}}}C()}function x(){ne();for(const j in a){const B=a[j];for(const le in B){const Z=B[le];for(const $ in Z)g(Z[$].object),delete Z[$];delete B[le]}delete a[j]}}function R(j){if(a[j.id]===void 0)return;const B=a[j.id];for(const le in B){const Z=B[le];for(const $ in Z)g(Z[$].object),delete Z[$];delete B[le]}delete a[j.id]}function X(j){for(const B in a){const le=a[B];if(le[j.id]===void 0)continue;const Z=le[j.id];for(const $ in Z)g(Z[$].object),delete Z[$];delete le[j.id]}}function ne(){F(),u=!0,c!==l&&(c=l,d(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:F,dispose:x,releaseStatesOfGeometry:R,releaseStatesOfProgram:X,initAttributes:v,enableAttribute:E,disableUnusedAttributes:C}}function Ry(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Cy(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=o||e.has("OES_texture_float"),M=v&&E,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:M,maxSamples:C}}function Ly(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ms,a=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:n,v=y*4;let E=m.clippingState||null;l.value=E,E=u(g,f,v,d);for(let M=0;M!==v;++M)E[M]=t[M];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,E=d;v!==_;++v,E+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Py(s){let e=new WeakMap;function t(o,a){return a===th?o.mapping=ya:a===nh&&(o.mapping=Ma),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===th||a===nh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new X0(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Xc extends mm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ca=4,Md=[.125,.215,.35,.446,.526,.582],uo=20,Pu=new Xc,Sd=new ut;let Iu=null;const lo=(1+Math.sqrt(5))/2,Zo=1/lo,Ed=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,lo,Zo),new O(0,lo,-Zo),new O(Zo,0,lo),new O(-Zo,0,lo),new O(lo,Zo,0),new O(-lo,Zo,0)];class Td{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Iu=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Iu),e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ya||e.mapping===Ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Iu=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:vl,format:Ji,colorSpace:yr,depthBuffer:!1},i=bd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(r)),this._blurMaterial=Dy(r,e,t)}return i}_compileMaterial(e){const t=new ki(this._lodPlanes[0],e);this._renderer.compile(t,Pu)}_sceneToCubeUV(e,t,n,i){const a=new _i(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Sd),u.toneMapping=Cs,u.autoClear=!1;const d=new Ts({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1}),g=new ki(new Cl,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Sd),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;mc(i,y*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ya||e.mapping===Ma;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ki(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;mc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Pu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ed[(i-1)%Ed.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ki(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*uo-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):uo;p>uo&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${uo}`);const m=[];let y=0;for(let S=0;S<uo;++S){const I=S/_,x=Math.exp(-I*I/2);m.push(x),S===0?y+=x:S<p&&(y+=2*x)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const E=this._sizeLods[i],M=3*E*(i>v-ca?i-v+ca:0),C=4*(this._cubeSize-E);mc(t,M,C,3*E,2*E),l.setRenderTarget(t),l.render(h,Pu)}}function Iy(s){const e=[],t=[],n=[];let i=s;const r=s-ca+1+Md.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ca?l=Md[o-s+ca-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),v=new Float32Array(p*g*d),E=new Float32Array(m*g*d);for(let C=0;C<d;C++){const S=C%3*2/3-1,I=C>2?0:-1,x=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];y.set(x,_*g*C),v.set(f,p*g*C);const R=[C,C,C,C,C,C];E.set(R,m*g*C)}const M=new Mr;M.setAttribute("position",new Kn(y,_)),M.setAttribute("uv",new Kn(v,p)),M.setAttribute("faceIndex",new Kn(E,m)),e.push(M),i>ca&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bd(s,e,t){const n=new Mo(s,e,t);return n.texture.mapping=Gc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Dy(s,e,t){const n=new Float32Array(uo),i=new O(0,1,0);return new So({name:"SphericalGaussianBlur",defines:{n:uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Ad(){return new So({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function wd(){return new So({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Fh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===th||l===nh,u=l===ya||l===Ma;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Td(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Td(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ny(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Oy(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,E=y.length;v<E;v+=3){const M=y[v+0],C=y[v+1],S=y[v+2];f.push(M,C,C,S,S,M)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,E=y.length/3-1;v<E;v+=3){const M=v+0,C=v+1,S=v+2;f.push(M,C,C,S,S,M)}}else return;const p=new(om(f)?dm:fm)(f,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Fy(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let _,p;if(i)_=s,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function By(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ky(s,e){return s[0]-e[0]}function zy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Hy(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new jt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let j=function(){ne.dispose(),r.delete(u),u.removeEventListener("dispose",j)};_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let I=0;y===!0&&(I=1),v===!0&&(I=2),E===!0&&(I=3);let x=u.attributes.position.count*I,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const X=new Float32Array(x*R*4*g),ne=new cm(X,x,R,g);ne.type=ns,ne.needsUpdate=!0;const F=I*4;for(let B=0;B<g;B++){const le=M[B],Z=C[B],$=S[B],Q=x*R*4*B;for(let re=0;re<le.count;re++){const W=re*F;y===!0&&(o.fromBufferAttribute(le,re),X[Q+W+0]=o.x,X[Q+W+1]=o.y,X[Q+W+2]=o.z,X[Q+W+3]=0),v===!0&&(o.fromBufferAttribute(Z,re),X[Q+W+4]=o.x,X[Q+W+5]=o.y,X[Q+W+6]=o.z,X[Q+W+7]=0),E===!0&&(o.fromBufferAttribute($,re),X[Q+W+8]=o.x,X[Q+W+9]=o.y,X[Q+W+10]=o.z,X[Q+W+11]=$.itemSize===4?o.w:1)}}_={count:g,texture:ne,size:new st(x,R)},r.set(u,_),u.addEventListener("dispose",j)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const m=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",m),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<d;v++){const E=g[v];E[0]=v,E[1]=f[v]}g.sort(zy);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(ky);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const E=a[v],M=E[0],C=E[1];M!==Number.MAX_SAFE_INTEGER&&C?(_&&u.getAttribute("morphTarget"+v)!==_[M]&&u.setAttribute("morphTarget"+v,_[M]),p&&u.getAttribute("morphNormal"+v)!==p[M]&&u.setAttribute("morphNormal"+v,p[M]),i[v]=C,m+=C):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Gy(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const vm=new qn,xm=new cm,ym=new C0,Mm=new _m,Rd=[],Cd=[],Ld=new Float32Array(16),Pd=new Float32Array(9),Id=new Float32Array(4);function Ba(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Rd[i];if(r===void 0&&(r=new Float32Array(i),Rd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Cn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ln(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Yc(s,e){let t=Cd[e];t===void 0&&(t=new Int32Array(e),Cd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Vy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Wy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;s.uniform2fv(this.addr,e),Ln(t,e)}}function Xy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Cn(t,e))return;s.uniform3fv(this.addr,e),Ln(t,e)}}function Yy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;s.uniform4fv(this.addr,e),Ln(t,e)}}function jy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(Cn(t,n))return;Id.set(n),s.uniformMatrix2fv(this.addr,!1,Id),Ln(t,n)}}function qy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(Cn(t,n))return;Pd.set(n),s.uniformMatrix3fv(this.addr,!1,Pd),Ln(t,n)}}function Ky(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(Cn(t,n))return;Ld.set(n),s.uniformMatrix4fv(this.addr,!1,Ld),Ln(t,n)}}function $y(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;s.uniform2iv(this.addr,e),Ln(t,e)}}function Jy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;s.uniform3iv(this.addr,e),Ln(t,e)}}function Qy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;s.uniform4iv(this.addr,e),Ln(t,e)}}function eM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function tM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;s.uniform2uiv(this.addr,e),Ln(t,e)}}function nM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;s.uniform3uiv(this.addr,e),Ln(t,e)}}function iM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;s.uniform4uiv(this.addr,e),Ln(t,e)}}function rM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||vm,i)}function sM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ym,i)}function oM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Mm,i)}function aM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xm,i)}function lM(s){switch(s){case 5126:return Vy;case 35664:return Wy;case 35665:return Xy;case 35666:return Yy;case 35674:return jy;case 35675:return qy;case 35676:return Ky;case 5124:case 35670:return $y;case 35667:case 35671:return Zy;case 35668:case 35672:return Jy;case 35669:case 35673:return Qy;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}function cM(s,e){s.uniform1fv(this.addr,e)}function uM(s,e){const t=Ba(e,this.size,2);s.uniform2fv(this.addr,t)}function hM(s,e){const t=Ba(e,this.size,3);s.uniform3fv(this.addr,t)}function fM(s,e){const t=Ba(e,this.size,4);s.uniform4fv(this.addr,t)}function dM(s,e){const t=Ba(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function pM(s,e){const t=Ba(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function mM(s,e){const t=Ba(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _M(s,e){s.uniform1iv(this.addr,e)}function gM(s,e){s.uniform2iv(this.addr,e)}function vM(s,e){s.uniform3iv(this.addr,e)}function xM(s,e){s.uniform4iv(this.addr,e)}function yM(s,e){s.uniform1uiv(this.addr,e)}function MM(s,e){s.uniform2uiv(this.addr,e)}function SM(s,e){s.uniform3uiv(this.addr,e)}function EM(s,e){s.uniform4uiv(this.addr,e)}function TM(s,e,t){const n=this.cache,i=e.length,r=Yc(t,i);Cn(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||vm,r[o])}function bM(s,e,t){const n=this.cache,i=e.length,r=Yc(t,i);Cn(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ym,r[o])}function AM(s,e,t){const n=this.cache,i=e.length,r=Yc(t,i);Cn(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Mm,r[o])}function wM(s,e,t){const n=this.cache,i=e.length,r=Yc(t,i);Cn(n,r)||(s.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||xm,r[o])}function RM(s){switch(s){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return _M;case 35667:case 35671:return gM;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return yM;case 36294:return MM;case 36295:return SM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return bM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return wM}}class CM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=lM(t.type)}}class LM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=RM(t.type)}}class PM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function Dd(s,e){s.seq.push(e),s.map[e.id]=e}function IM(s,e,t){const n=s.name,i=n.length;for(Du.lastIndex=0;;){const r=Du.exec(n),o=Du.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Dd(t,c===void 0?new CM(a,s,e):new LM(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new PM(a),Dd(t,h)),t=h}}}class Tc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);IM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ud(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let DM=0;function UM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function NM(s){switch(s){case yr:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Nd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+UM(s.getShaderSource(e),o)}else return i}function OM(s,e){const t=NM(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function FM(s,e){let t;switch(e){case Pg:t="Linear";break;case Ig:t="Reinhard";break;case Yp:t="OptimizedCineon";break;case Dg:t="ACESFilmic";break;case Ug:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function BM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ll).join(`
`)}function kM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ll(s){return s!==""}function Od(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(s){return s.replace(HM,VM)}const GM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function VM(s,e){let t=mt[e];if(t===void 0){const n=GM.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lh(t)}const WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(s){return s.replace(WM,XM)}function XM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kd(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Vp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jr&&(e="SHADOWMAP_TYPE_VSM"),e}function jM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ya:case Ma:e="ENVMAP_TYPE_CUBE";break;case Gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ma:e="ENVMAP_MODE_REFRACTION";break}return e}function KM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ph:e="ENVMAP_BLENDING_MULTIPLY";break;case Cg:e="ENVMAP_BLENDING_MIX";break;case Lg:e="ENVMAP_BLENDING_ADD";break}return e}function $M(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ZM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=YM(t),c=jM(t),u=qM(t),h=KM(t),f=$M(t),d=t.isWebGL2?"":BM(t),g=kM(r),_=i.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ll).join(`
`),p.length>0&&(p+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ll).join(`
`),m.length>0&&(m+=`
`)):(p=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),m=[d,kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cs?"#define TONE_MAPPING":"",t.toneMapping!==Cs?mt.tonemapping_pars_fragment:"",t.toneMapping!==Cs?FM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,OM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ll).join(`
`)),o=lh(o),o=Od(o,t),o=Fd(o,t),a=lh(a),a=Od(a,t),a=Fd(a,t),o=Bd(o),a=Bd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+o,E=y+m+a,M=Ud(i,i.VERTEX_SHADER,v),C=Ud(i,i.FRAGMENT_SHADER,E);if(i.attachShader(_,M),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),R=i.getShaderInfoLog(M).trim(),X=i.getShaderInfoLog(C).trim();let ne=!0,F=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,C);else{const j=Nd(i,M,"vertex"),B=Nd(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+j+`
`+B)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(R===""||X==="")&&(F=!1);F&&(this.diagnostics={runnable:ne,programLog:x,vertexShader:{log:R,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(M),i.deleteShader(C);let S;this.getUniforms=function(){return S===void 0&&(S=new Tc(i,_)),S};let I;return this.getAttributes=function(){return I===void 0&&(I=zM(i,_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=C,this}let JM=0;class QM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new eS(e),t.set(e,n)),n}}class eS{constructor(e){this.id=JM++,this.code=e,this.usedTimes=0}}function tS(s,e,t,n,i,r,o){const a=new um,l=new QM,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,R,X,ne,F){const j=ne.fog,B=F.geometry,le=x.isMeshStandardMaterial?ne.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||le),$=Z&&Z.mapping===Gc?Z.image.height:null,Q=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,W=re!==void 0?re.length:0;let te=0;B.morphAttributes.position!==void 0&&(te=1),B.morphAttributes.normal!==void 0&&(te=2),B.morphAttributes.color!==void 0&&(te=3);let ye,ge,Ee,De;if(Q){const Bt=Rr[Q];ye=Bt.vertexShader,ge=Bt.fragmentShader}else ye=x.vertexShader,ge=x.fragmentShader,l.update(x),Ee=l.getVertexShaderID(x),De=l.getFragmentShaderID(x);const Pe=s.getRenderTarget(),ce=F.isInstancedMesh===!0,ht=!!x.map,Ce=!!x.matcap,Me=!!Z,G=!!x.aoMap,Je=!!x.lightMap,Ne=!!x.bumpMap,Ve=!!x.normalMap,We=!!x.displacementMap,Mt=!!x.emissiveMap,Qe=!!x.metalnessMap,Ke=!!x.roughnessMap,Ge=x.anisotropy>0,Ot=x.clearcoat>0,Jt=x.iridescence>0,P=x.sheen>0,b=x.transmission>0,J=Ge&&!!x.anisotropyMap,me=Ot&&!!x.clearcoatMap,de=Ot&&!!x.clearcoatNormalMap,ve=Ot&&!!x.clearcoatRoughnessMap,Fe=Jt&&!!x.iridescenceMap,fe=Jt&&!!x.iridescenceThicknessMap,ee=P&&!!x.sheenColorMap,U=P&&!!x.sheenRoughnessMap,ue=!!x.specularMap,Te=!!x.specularColorMap,Se=!!x.specularIntensityMap,Ae=b&&!!x.transmissionMap,je=b&&!!x.thicknessMap,_t=!!x.gradientMap,N=!!x.alphaMap,be=x.alphaTest>0,Y=!!x.alphaHash,pe=!!x.extensions,xe=!!B.attributes.uv1,ct=!!B.attributes.uv2,Ct=!!B.attributes.uv3;let Ft=Cs;return x.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Ft=s.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:ye,fragmentShader:ge,defines:x.defines,customVertexShaderID:Ee,customFragmentShaderID:De,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:ce,instancingColor:ce&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Pe===null?s.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:yr,map:ht,matcap:Ce,envMap:Me,envMapMode:Me&&Z.mapping,envMapCubeUVHeight:$,aoMap:G,lightMap:Je,bumpMap:Ne,normalMap:Ve,displacementMap:f&&We,emissiveMap:Mt,normalMapObjectSpace:Ve&&x.normalMapType===Zg,normalMapTangentSpace:Ve&&x.normalMapType===Uh,metalnessMap:Qe,roughnessMap:Ke,anisotropy:Ge,anisotropyMap:J,clearcoat:Ot,clearcoatMap:me,clearcoatNormalMap:de,clearcoatRoughnessMap:ve,iridescence:Jt,iridescenceMap:Fe,iridescenceThicknessMap:fe,sheen:P,sheenColorMap:ee,sheenRoughnessMap:U,specularMap:ue,specularColorMap:Te,specularIntensityMap:Se,transmission:b,transmissionMap:Ae,thicknessMap:je,gradientMap:_t,opaque:x.transparent===!1&&x.blending===da,alphaMap:N,alphaTest:be,alphaHash:Y,combine:x.combine,mapUv:ht&&_(x.map.channel),aoMapUv:G&&_(x.aoMap.channel),lightMapUv:Je&&_(x.lightMap.channel),bumpMapUv:Ne&&_(x.bumpMap.channel),normalMapUv:Ve&&_(x.normalMap.channel),displacementMapUv:We&&_(x.displacementMap.channel),emissiveMapUv:Mt&&_(x.emissiveMap.channel),metalnessMapUv:Qe&&_(x.metalnessMap.channel),roughnessMapUv:Ke&&_(x.roughnessMap.channel),anisotropyMapUv:J&&_(x.anisotropyMap.channel),clearcoatMapUv:me&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:U&&_(x.sheenRoughnessMap.channel),specularMapUv:ue&&_(x.specularMap.channel),specularColorMapUv:Te&&_(x.specularColorMap.channel),specularIntensityMapUv:Se&&_(x.specularIntensityMap.channel),transmissionMapUv:Ae&&_(x.transmissionMap.channel),thicknessMapUv:je&&_(x.thicknessMap.channel),alphaMapUv:N&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ve||Ge),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:xe,vertexUv2s:ct,vertexUv3s:Ct,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(ht||N),fog:!!j,useFog:x.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,useLegacyLights:s._useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Cr,flipSided:x.side===gi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:pe&&x.extensions.derivatives===!0,extensionFragDepth:pe&&x.extensions.fragDepth===!0,extensionDrawBuffers:pe&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const X in x.defines)R.push(X),R.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(y(R,x),v(R,x),R.push(s.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function y(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function v(x,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),x.push(a.mask)}function E(x){const R=g[x.type];let X;if(R){const ne=Rr[R];X=H0.clone(ne.uniforms)}else X=x.uniforms;return X}function M(x,R){let X;for(let ne=0,F=c.length;ne<F;ne++){const j=c[ne];if(j.cacheKey===R){X=j,++X.usedTimes;break}}return X===void 0&&(X=new ZM(s,R,x,r),c.push(X)),X}function C(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),x.destroy()}}function S(x){l.remove(x)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:M,releaseProgram:C,releaseShaderCache:S,programs:c,dispose:I}}function nS(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function iS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function zd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=o(h,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||iS),n.length>1&&n.sort(f||zd),i.length>1&&i.sort(f||zd)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function rS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Hd,s.set(n,[o])):i>=r.length?(o=new Hd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function sS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ut};break;case"SpotLight":t={position:new O,direction:new O,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function oS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let aS=0;function lS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cS(s,e){const t=new sS,n=oS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,o=new yt,a=new yt;function l(u,h){let f=0,d=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,p=0,m=0,y=0,v=0,E=0,M=0,C=0,S=0,I=0;u.sort(lS);const x=h===!0?Math.PI:1;for(let X=0,ne=u.length;X<ne;X++){const F=u[X],j=F.color,B=F.intensity,le=F.distance,Z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=j.r*B*x,d+=j.g*B*x,g+=j.b*B*x;else if(F.isLightProbe)for(let $=0;$<9;$++)i.probe[$].addScaledVector(F.sh.coefficients[$],B);else if(F.isDirectionalLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*x),F.castShadow){const Q=F.shadow,re=n.get(F);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,i.directionalShadow[_]=re,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=F.shadow.matrix,E++}i.directional[_]=$,_++}else if(F.isSpotLight){const $=t.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(j).multiplyScalar(B*x),$.distance=le,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,i.spot[m]=$;const Q=F.shadow;if(F.map&&(i.spotLightMap[S]=F.map,S++,Q.updateMatrices(F),F.castShadow&&I++),i.spotLightMatrix[m]=Q.matrix,F.castShadow){const re=n.get(F);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,i.spotShadow[m]=re,i.spotShadowMap[m]=Z,C++}m++}else if(F.isRectAreaLight){const $=t.get(F);$.color.copy(j).multiplyScalar(B),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=$,y++}else if(F.isPointLight){const $=t.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*x),$.distance=F.distance,$.decay=F.decay,F.castShadow){const Q=F.shadow,re=n.get(F);re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,re.shadowCameraNear=Q.camera.near,re.shadowCameraFar=Q.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=F.shadow.matrix,M++}i.point[p]=$,p++}else if(F.isHemisphereLight){const $=t.get(F);$.skyColor.copy(F.color).multiplyScalar(B*x),$.groundColor.copy(F.groundColor).multiplyScalar(B*x),i.hemi[v]=$,v++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==y||R.hemiLength!==v||R.numDirectionalShadows!==E||R.numPointShadows!==M||R.numSpotShadows!==C||R.numSpotMaps!==S)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=C+S-I,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=I,R.directionalLength=_,R.pointLength=p,R.spotLength=m,R.rectAreaLength=y,R.hemiLength=v,R.numDirectionalShadows=E,R.numPointShadows=M,R.numSpotShadows=C,R.numSpotMaps=S,i.version=aS++)}function c(u,h){let f=0,d=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const E=u[y];if(E.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(E.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(E.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(E.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:i}}function Gd(s,e){const t=new cS(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function uS(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Gd(s,e),t.set(r,[l])):o>=a.length?(l=new Gd(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class hS extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fS extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mS(s,e,t){let n=new Oh;const i=new st,r=new st,o=new jt,a=new hS({depthPacking:$g}),l=new fS,c={},u=t.maxTextureSize,h={[os]:gi,[gi]:os,[Cr]:Cr},f=new So({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:dS,fragmentShader:pS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Mr;g.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ki(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gp;let m=this.type;this.render=function(M,C,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const I=s.getRenderTarget(),x=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),X=s.state;X.setBlending(rs),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ne=m!==Jr&&this.type===Jr,F=m===Jr&&this.type!==Jr;for(let j=0,B=M.length;j<B;j++){const le=M[j],Z=le.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const $=Z.getFrameExtents();if(i.multiply($),r.copy(Z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/$.x),i.x=r.x*$.x,Z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/$.y),i.y=r.y*$.y,Z.mapSize.y=r.y)),Z.map===null||ne===!0||F===!0){const re=this.type!==Jr?{minFilter:Bn,magFilter:Bn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Mo(i.x,i.y,re),Z.map.texture.name=le.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const Q=Z.getViewportCount();for(let re=0;re<Q;re++){const W=Z.getViewport(re);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),X.viewport(o),Z.updateMatrices(le,re),n=Z.getFrustum(),E(C,S,Z.camera,le,this.type)}Z.isPointLightShadow!==!0&&this.type===Jr&&y(Z,S),Z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(I,x,R)};function y(M,C){const S=e.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Mo(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(C,null,S,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(C,null,S,d,_,null)}function v(M,C,S,I){let x=null;const R=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)x=R;else if(x=S.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=x.uuid,ne=C.uuid;let F=c[X];F===void 0&&(F={},c[X]=F);let j=F[ne];j===void 0&&(j=x.clone(),F[ne]=j),x=j}if(x.visible=C.visible,x.wireframe=C.wireframe,I===Jr?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:h[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,S.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const X=s.properties.get(x);X.light=S}return x}function E(M,C,S,I,x){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Jr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const ne=e.update(M),F=M.material;if(Array.isArray(F)){const j=ne.groups;for(let B=0,le=j.length;B<le;B++){const Z=j[B],$=F[Z.materialIndex];if($&&$.visible){const Q=v(M,$,I,x);s.renderBufferDirect(S,null,ne,Q,M,Z)}}}else if(F.visible){const j=v(M,F,I,x);s.renderBufferDirect(S,null,ne,j,M,null)}}const X=M.children;for(let ne=0,F=X.length;ne<F;ne++)E(X[ne],C,S,I,x)}}function _S(s,e,t){const n=t.isWebGL2;function i(){let N=!1;const be=new jt;let Y=null;const pe=new jt(0,0,0,0);return{setMask:function(xe){Y!==xe&&!N&&(s.colorMask(xe,xe,xe,xe),Y=xe)},setLocked:function(xe){N=xe},setClear:function(xe,ct,Ct,Ft,Sr){Sr===!0&&(xe*=Ft,ct*=Ft,Ct*=Ft),be.set(xe,ct,Ct,Ft),pe.equals(be)===!1&&(s.clearColor(xe,ct,Ct,Ft),pe.copy(be))},reset:function(){N=!1,Y=null,pe.set(-1,0,0,0)}}}function r(){let N=!1,be=null,Y=null,pe=null;return{setTest:function(xe){xe?Pe(s.DEPTH_TEST):ce(s.DEPTH_TEST)},setMask:function(xe){be!==xe&&!N&&(s.depthMask(xe),be=xe)},setFunc:function(xe){if(Y!==xe){switch(xe){case Sg:s.depthFunc(s.NEVER);break;case Eg:s.depthFunc(s.ALWAYS);break;case Tg:s.depthFunc(s.LESS);break;case eh:s.depthFunc(s.LEQUAL);break;case bg:s.depthFunc(s.EQUAL);break;case Ag:s.depthFunc(s.GEQUAL);break;case wg:s.depthFunc(s.GREATER);break;case Rg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=xe}},setLocked:function(xe){N=xe},setClear:function(xe){pe!==xe&&(s.clearDepth(xe),pe=xe)},reset:function(){N=!1,be=null,Y=null,pe=null}}}function o(){let N=!1,be=null,Y=null,pe=null,xe=null,ct=null,Ct=null,Ft=null,Sr=null;return{setTest:function(Bt){N||(Bt?Pe(s.STENCIL_TEST):ce(s.STENCIL_TEST))},setMask:function(Bt){be!==Bt&&!N&&(s.stencilMask(Bt),be=Bt)},setFunc:function(Bt,Ri,qt){(Y!==Bt||pe!==Ri||xe!==qt)&&(s.stencilFunc(Bt,Ri,qt),Y=Bt,pe=Ri,xe=qt)},setOp:function(Bt,Ri,qt){(ct!==Bt||Ct!==Ri||Ft!==qt)&&(s.stencilOp(Bt,Ri,qt),ct=Bt,Ct=Ri,Ft=qt)},setLocked:function(Bt){N=Bt},setClear:function(Bt){Sr!==Bt&&(s.clearStencil(Bt),Sr=Bt)},reset:function(){N=!1,be=null,Y=null,pe=null,xe=null,ct=null,Ct=null,Ft=null,Sr=null}}}const a=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,E=null,M=null,C=null,S=null,I=null,x=!1,R=null,X=null,ne=null,F=null,j=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,Z=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),le=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),le=Z>=2);let Q=null,re={};const W=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),ye=new jt().fromArray(W),ge=new jt().fromArray(te);function Ee(N,be,Y,pe){const xe=new Uint8Array(4),ct=s.createTexture();s.bindTexture(N,ct),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ct=0;Ct<Y;Ct++)n&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(be,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(be+Ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return ct}const De={};De[s.TEXTURE_2D]=Ee(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=Ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[s.TEXTURE_2D_ARRAY]=Ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=Ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(s.DEPTH_TEST),l.setFunc(eh),We(!1),Mt(Cf),Pe(s.CULL_FACE),Ne(rs);function Pe(N){f[N]!==!0&&(s.enable(N),f[N]=!0)}function ce(N){f[N]!==!1&&(s.disable(N),f[N]=!1)}function ht(N,be){return d[N]!==be?(s.bindFramebuffer(N,be),d[N]=be,n&&(N===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=be),N===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=be)),!0):!1}function Ce(N,be){let Y=_,pe=!1;if(N)if(Y=g.get(be),Y===void 0&&(Y=[],g.set(be,Y)),N.isWebGLMultipleRenderTargets){const xe=N.texture;if(Y.length!==xe.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Ct=xe.length;ct<Ct;ct++)Y[ct]=s.COLOR_ATTACHMENT0+ct;Y.length=xe.length,pe=!0}}else Y[0]!==s.COLOR_ATTACHMENT0&&(Y[0]=s.COLOR_ATTACHMENT0,pe=!0);else Y[0]!==s.BACK&&(Y[0]=s.BACK,pe=!0);pe&&(t.isWebGL2?s.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Me(N){return p!==N?(s.useProgram(N),p=N,!0):!1}const G={[ta]:s.FUNC_ADD,[hg]:s.FUNC_SUBTRACT,[fg]:s.FUNC_REVERSE_SUBTRACT};if(n)G[Df]=s.MIN,G[Uf]=s.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(G[Df]=N.MIN_EXT,G[Uf]=N.MAX_EXT)}const Je={[dg]:s.ZERO,[pg]:s.ONE,[mg]:s.SRC_COLOR,[Wp]:s.SRC_ALPHA,[Mg]:s.SRC_ALPHA_SATURATE,[xg]:s.DST_COLOR,[gg]:s.DST_ALPHA,[_g]:s.ONE_MINUS_SRC_COLOR,[Xp]:s.ONE_MINUS_SRC_ALPHA,[yg]:s.ONE_MINUS_DST_COLOR,[vg]:s.ONE_MINUS_DST_ALPHA};function Ne(N,be,Y,pe,xe,ct,Ct,Ft){if(N===rs){m===!0&&(ce(s.BLEND),m=!1);return}if(m===!1&&(Pe(s.BLEND),m=!0),N!==ug){if(N!==y||Ft!==x){if((v!==ta||C!==ta)&&(s.blendEquation(s.FUNC_ADD),v=ta,C=ta),Ft)switch(N){case da:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lf:s.blendFunc(s.ONE,s.ONE);break;case Pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case If:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case da:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case If:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,M=null,S=null,I=null,y=N,x=Ft}return}xe=xe||be,ct=ct||Y,Ct=Ct||pe,(be!==v||xe!==C)&&(s.blendEquationSeparate(G[be],G[xe]),v=be,C=xe),(Y!==E||pe!==M||ct!==S||Ct!==I)&&(s.blendFuncSeparate(Je[Y],Je[pe],Je[ct],Je[Ct]),E=Y,M=pe,S=ct,I=Ct),y=N,x=!1}function Ve(N,be){N.side===Cr?ce(s.CULL_FACE):Pe(s.CULL_FACE);let Y=N.side===gi;be&&(Y=!Y),We(Y),N.blending===da&&N.transparent===!1?Ne(rs):Ne(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const pe=N.stencilWrite;c.setTest(pe),pe&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){R!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),R=N)}function Mt(N){N!==lg?(Pe(s.CULL_FACE),N!==X&&(N===Cf?s.cullFace(s.BACK):N===cg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ce(s.CULL_FACE),X=N}function Qe(N){N!==ne&&(le&&s.lineWidth(N),ne=N)}function Ke(N,be,Y){N?(Pe(s.POLYGON_OFFSET_FILL),(F!==be||j!==Y)&&(s.polygonOffset(be,Y),F=be,j=Y)):ce(s.POLYGON_OFFSET_FILL)}function Ge(N){N?Pe(s.SCISSOR_TEST):ce(s.SCISSOR_TEST)}function Ot(N){N===void 0&&(N=s.TEXTURE0+B-1),Q!==N&&(s.activeTexture(N),Q=N)}function Jt(N,be,Y){Y===void 0&&(Q===null?Y=s.TEXTURE0+B-1:Y=Q);let pe=re[Y];pe===void 0&&(pe={type:void 0,texture:void 0},re[Y]=pe),(pe.type!==N||pe.texture!==be)&&(Q!==Y&&(s.activeTexture(Y),Q=Y),s.bindTexture(N,be||De[N]),pe.type=N,pe.texture=be)}function P(){const N=re[Q];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(N){ye.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ye.copy(N))}function Se(N){ge.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ge.copy(N))}function Ae(N,be){let Y=h.get(be);Y===void 0&&(Y=new WeakMap,h.set(be,Y));let pe=Y.get(N);pe===void 0&&(pe=s.getUniformBlockIndex(be,N.name),Y.set(N,pe))}function je(N,be){const pe=h.get(be).get(N);u.get(be)!==pe&&(s.uniformBlockBinding(be,pe,N.__bindingPointIndex),u.set(be,pe))}function _t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Q=null,re={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,E=null,M=null,C=null,S=null,I=null,x=!1,R=null,X=null,ne=null,F=null,j=null,ye.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:ce,bindFramebuffer:ht,drawBuffers:Ce,useProgram:Me,setBlending:Ne,setMaterial:Ve,setFlipSided:We,setCullFace:Mt,setLineWidth:Qe,setPolygonOffset:Ke,setScissorTest:Ge,activeTexture:Ot,bindTexture:Jt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:J,texImage2D:U,texImage3D:ue,updateUBOMapping:Ae,uniformBlockBinding:je,texStorage2D:fe,texStorage3D:ee,texSubImage2D:me,texSubImage3D:de,compressedTexSubImage2D:ve,compressedTexSubImage3D:Fe,scissor:Te,viewport:Se,reset:_t}}function gS(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,b){return m?new OffscreenCanvas(P,b):yl("canvas")}function v(P,b,J,me){let de=1;if((P.width>me||P.height>me)&&(de=me/Math.max(P.width,P.height)),de<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ve=b?Ic:Math.floor,Fe=ve(de*P.width),fe=ve(de*P.height);_===void 0&&(_=y(Fe,fe));const ee=J?y(Fe,fe):_;return ee.width=Fe,ee.height=fe,ee.getContext("2d").drawImage(P,0,0,Fe,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Fe+"x"+fe+")."),ee}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function E(P){return ah(P.width)&&ah(P.height)}function M(P){return a?!1:P.wrapS!==Zi||P.wrapT!==Zi||P.minFilter!==Bn&&P.minFilter!==Si}function C(P,b){return P.generateMipmaps&&b&&P.minFilter!==Bn&&P.minFilter!==Si}function S(P){s.generateMipmap(P)}function I(P,b,J,me,de=!1){if(a===!1)return b;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ve=b;return b===s.RED&&(J===s.FLOAT&&(ve=s.R32F),J===s.HALF_FLOAT&&(ve=s.R16F),J===s.UNSIGNED_BYTE&&(ve=s.R8)),b===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ve=s.R8UI),J===s.UNSIGNED_SHORT&&(ve=s.R16UI),J===s.UNSIGNED_INT&&(ve=s.R32UI),J===s.BYTE&&(ve=s.R8I),J===s.SHORT&&(ve=s.R16I),J===s.INT&&(ve=s.R32I)),b===s.RG&&(J===s.FLOAT&&(ve=s.RG32F),J===s.HALF_FLOAT&&(ve=s.RG16F),J===s.UNSIGNED_BYTE&&(ve=s.RG8)),b===s.RGBA&&(J===s.FLOAT&&(ve=s.RGBA32F),J===s.HALF_FLOAT&&(ve=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ve=me===rt&&de===!1?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)),(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function x(P,b,J){return C(P,J)===!0||P.isFramebufferTexture&&P.minFilter!==Bn&&P.minFilter!==Si?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function R(P){return P===Bn||P===ih||P===Ec?s.NEAREST:s.LINEAR}function X(P){const b=P.target;b.removeEventListener("dispose",X),F(b),b.isVideoTexture&&g.delete(b)}function ne(P){const b=P.target;b.removeEventListener("dispose",ne),B(b)}function F(P){const b=n.get(P);if(b.__webglInit===void 0)return;const J=P.source,me=p.get(J);if(me){const de=me[b.__cacheKey];de.usedTimes--,de.usedTimes===0&&j(P),Object.keys(me).length===0&&p.delete(J)}n.remove(P)}function j(P){const b=n.get(P);s.deleteTexture(b.__webglTexture);const J=P.source,me=p.get(J);delete me[b.__cacheKey],o.memory.textures--}function B(P){const b=P.texture,J=n.get(P),me=n.get(b);if(me.__webglTexture!==void 0&&(s.deleteTexture(me.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(J.__webglFramebuffer[de]))for(let ve=0;ve<J.__webglFramebuffer[de].length;ve++)s.deleteFramebuffer(J.__webglFramebuffer[de][ve]);else s.deleteFramebuffer(J.__webglFramebuffer[de]);J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer[de])}else{if(Array.isArray(J.__webglFramebuffer))for(let de=0;de<J.__webglFramebuffer.length;de++)s.deleteFramebuffer(J.__webglFramebuffer[de]);else s.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&s.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&s.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let de=0;de<J.__webglColorRenderbuffer.length;de++)J.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(J.__webglColorRenderbuffer[de]);J.__webglDepthRenderbuffer&&s.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let de=0,ve=b.length;de<ve;de++){const Fe=n.get(b[de]);Fe.__webglTexture&&(s.deleteTexture(Fe.__webglTexture),o.memory.textures--),n.remove(b[de])}n.remove(b),n.remove(P)}let le=0;function Z(){le=0}function $(){const P=le;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),le+=1,P}function Q(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function re(P,b){const J=n.get(P);if(P.isVideoTexture&&Ot(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(J,P,b);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+b)}function W(P,b){const J=n.get(P);if(P.version>0&&J.__version!==P.version){ht(J,P,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+b)}function te(P,b){const J=n.get(P);if(P.version>0&&J.__version!==P.version){ht(J,P,b);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+b)}function ye(P,b){const J=n.get(P);if(P.version>0&&J.__version!==P.version){Ce(J,P,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+b)}const ge={[Sa]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[Cc]:s.MIRRORED_REPEAT},Ee={[Bn]:s.NEAREST,[ih]:s.NEAREST_MIPMAP_NEAREST,[Ec]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[qp]:s.LINEAR_MIPMAP_NEAREST,[yo]:s.LINEAR_MIPMAP_LINEAR},De={[Qg]:s.NEVER,[o0]:s.ALWAYS,[e0]:s.LESS,[n0]:s.LEQUAL,[t0]:s.EQUAL,[s0]:s.GEQUAL,[i0]:s.GREATER,[r0]:s.NOTEQUAL};function Pe(P,b,J){if(J?(s.texParameteri(P,s.TEXTURE_WRAP_S,ge[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ge[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ge[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Ee[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Ee[b.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==Zi||b.wrapT!==Zi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,R(b.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,R(b.minFilter)),b.minFilter!==Bn&&b.minFilter!==Si&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,De[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Bn||b.minFilter!==Ec&&b.minFilter!==yo||b.type===ns&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===vl&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(P,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function ce(P,b){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",X));const me=b.source;let de=p.get(me);de===void 0&&(de={},p.set(me,de));const ve=Q(b);if(ve!==P.__cacheKey){de[ve]===void 0&&(de[ve]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),de[ve].usedTimes++;const Fe=de[P.__cacheKey];Fe!==void 0&&(de[P.__cacheKey].usedTimes--,Fe.usedTimes===0&&j(b)),P.__cacheKey=ve,P.__webglTexture=de[ve].texture}return J}function ht(P,b,J){let me=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(me=s.TEXTURE_3D);const de=ce(P,b),ve=b.source;t.bindTexture(me,P.__webglTexture,s.TEXTURE0+J);const Fe=n.get(ve);if(ve.version!==Fe.__version||de===!0){t.activeTexture(s.TEXTURE0+J),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const fe=M(b)&&E(b.image)===!1;let ee=v(b.image,fe,!1,u);ee=Jt(b,ee);const U=E(ee)||a,ue=r.convert(b.format,b.colorSpace);let Te=r.convert(b.type),Se=I(b.internalFormat,ue,Te,b.colorSpace);Pe(me,b,U);let Ae;const je=b.mipmaps,_t=a&&b.isVideoTexture!==!0,N=Fe.__version===void 0||de===!0,be=x(b,ee,U);if(b.isDepthTexture)Se=s.DEPTH_COMPONENT,a?b.type===ns?Se=s.DEPTH_COMPONENT32F:b.type===Es?Se=s.DEPTH_COMPONENT24:b.type===fo?Se=s.DEPTH24_STENCIL8:Se=s.DEPTH_COMPONENT16:b.type===ns&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===po&&Se===s.DEPTH_COMPONENT&&b.type!==Ih&&b.type!==Es&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Es,Te=r.convert(b.type)),b.format===Ea&&Se===s.DEPTH_COMPONENT&&(Se=s.DEPTH_STENCIL,b.type!==fo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=fo,Te=r.convert(b.type))),N&&(_t?t.texStorage2D(s.TEXTURE_2D,1,Se,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Se,ee.width,ee.height,0,ue,Te,null));else if(b.isDataTexture)if(je.length>0&&U){_t&&N&&t.texStorage2D(s.TEXTURE_2D,be,Se,je[0].width,je[0].height);for(let Y=0,pe=je.length;Y<pe;Y++)Ae=je[Y],_t?t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,ue,Te,Ae.data):t.texImage2D(s.TEXTURE_2D,Y,Se,Ae.width,Ae.height,0,ue,Te,Ae.data);b.generateMipmaps=!1}else _t?(N&&t.texStorage2D(s.TEXTURE_2D,be,Se,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,ue,Te,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Se,ee.width,ee.height,0,ue,Te,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){_t&&N&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Se,je[0].width,je[0].height,ee.depth);for(let Y=0,pe=je.length;Y<pe;Y++)Ae=je[Y],b.format!==Ji?ue!==null?_t?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Ae.width,Ae.height,ee.depth,ue,Ae.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Se,Ae.width,Ae.height,ee.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Ae.width,Ae.height,ee.depth,ue,Te,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Se,Ae.width,Ae.height,ee.depth,0,ue,Te,Ae.data)}else{_t&&N&&t.texStorage2D(s.TEXTURE_2D,be,Se,je[0].width,je[0].height);for(let Y=0,pe=je.length;Y<pe;Y++)Ae=je[Y],b.format!==Ji?ue!==null?_t?t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,ue,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Se,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ae.width,Ae.height,ue,Te,Ae.data):t.texImage2D(s.TEXTURE_2D,Y,Se,Ae.width,Ae.height,0,ue,Te,Ae.data)}else if(b.isDataArrayTexture)_t?(N&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Se,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Te,ee.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,ue,Te,ee.data);else if(b.isData3DTexture)_t?(N&&t.texStorage3D(s.TEXTURE_3D,be,Se,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Te,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,ue,Te,ee.data);else if(b.isFramebufferTexture){if(N)if(_t)t.texStorage2D(s.TEXTURE_2D,be,Se,ee.width,ee.height);else{let Y=ee.width,pe=ee.height;for(let xe=0;xe<be;xe++)t.texImage2D(s.TEXTURE_2D,xe,Se,Y,pe,0,ue,Te,null),Y>>=1,pe>>=1}}else if(je.length>0&&U){_t&&N&&t.texStorage2D(s.TEXTURE_2D,be,Se,je[0].width,je[0].height);for(let Y=0,pe=je.length;Y<pe;Y++)Ae=je[Y],_t?t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ue,Te,Ae):t.texImage2D(s.TEXTURE_2D,Y,Se,ue,Te,Ae);b.generateMipmaps=!1}else _t?(N&&t.texStorage2D(s.TEXTURE_2D,be,Se,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,Te,ee)):t.texImage2D(s.TEXTURE_2D,0,Se,ue,Te,ee);C(b,U)&&S(me),Fe.__version=ve.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ce(P,b,J){if(b.image.length!==6)return;const me=ce(P,b),de=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);const ve=n.get(de);if(de.version!==ve.__version||me===!0){t.activeTexture(s.TEXTURE0+J),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Fe=b.isCompressedTexture||b.image[0].isCompressedTexture,fe=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let Y=0;Y<6;Y++)!Fe&&!fe?ee[Y]=v(b.image[Y],!1,!0,c):ee[Y]=fe?b.image[Y].image:b.image[Y],ee[Y]=Jt(b,ee[Y]);const U=ee[0],ue=E(U)||a,Te=r.convert(b.format,b.colorSpace),Se=r.convert(b.type),Ae=I(b.internalFormat,Te,Se,b.colorSpace),je=a&&b.isVideoTexture!==!0,_t=ve.__version===void 0||me===!0;let N=x(b,U,ue);Pe(s.TEXTURE_CUBE_MAP,b,ue);let be;if(Fe){je&&_t&&t.texStorage2D(s.TEXTURE_CUBE_MAP,N,Ae,U.width,U.height);for(let Y=0;Y<6;Y++){be=ee[Y].mipmaps;for(let pe=0;pe<be.length;pe++){const xe=be[pe];b.format!==Ji?Te!==null?je?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,xe.width,xe.height,Te,xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,Ae,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,0,0,xe.width,xe.height,Te,Se,xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe,Ae,xe.width,xe.height,0,Te,Se,xe.data)}}}else{be=b.mipmaps,je&&_t&&(be.length>0&&N++,t.texStorage2D(s.TEXTURE_CUBE_MAP,N,Ae,ee[0].width,ee[0].height));for(let Y=0;Y<6;Y++)if(fe){je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ee[Y].width,ee[Y].height,Te,Se,ee[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ae,ee[Y].width,ee[Y].height,0,Te,Se,ee[Y].data);for(let pe=0;pe<be.length;pe++){const ct=be[pe].image[Y].image;je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,ct.width,ct.height,Te,Se,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,Ae,ct.width,ct.height,0,Te,Se,ct.data)}}else{je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,Se,ee[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ae,Te,Se,ee[Y]);for(let pe=0;pe<be.length;pe++){const xe=be[pe];je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,0,0,Te,Se,xe.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pe+1,Ae,Te,Se,xe.image[Y])}}}C(b,ue)&&S(s.TEXTURE_CUBE_MAP),ve.__version=de.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Me(P,b,J,me,de,ve){const Fe=r.convert(J.format,J.colorSpace),fe=r.convert(J.type),ee=I(J.internalFormat,Fe,fe,J.colorSpace);if(!n.get(b).__hasExternalTextures){const ue=Math.max(1,b.width>>ve),Te=Math.max(1,b.height>>ve);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,ve,ee,ue,Te,b.depth,0,Fe,fe,null):t.texImage2D(de,ve,ee,ue,Te,0,Fe,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Ge(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,de,n.get(J).__webglTexture,0,Ke(b)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,de,n.get(J).__webglTexture,ve),t.bindFramebuffer(s.FRAMEBUFFER,null)}function G(P,b,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let me=s.DEPTH_COMPONENT16;if(J||Ge(b)){const de=b.depthTexture;de&&de.isDepthTexture&&(de.type===ns?me=s.DEPTH_COMPONENT32F:de.type===Es&&(me=s.DEPTH_COMPONENT24));const ve=Ke(b);Ge(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,me,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,me,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,me,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const me=Ke(b);J&&Ge(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,b.width,b.height):Ge(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const me=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let de=0;de<me.length;de++){const ve=me[de],Fe=r.convert(ve.format,ve.colorSpace),fe=r.convert(ve.type),ee=I(ve.internalFormat,Fe,fe,ve.colorSpace),U=Ke(b);J&&Ge(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,U,ee,b.width,b.height):Ge(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,U,ee,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ee,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Je(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),re(b.depthTexture,0);const me=n.get(b.depthTexture).__webglTexture,de=Ke(b);if(b.depthTexture.format===po)Ge(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(b.depthTexture.format===Ea)Ge(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Ne(P){const b=n.get(P),J=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Je(b.__webglFramebuffer,P)}else if(J){b.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[me]),b.__webglDepthbuffer[me]=s.createRenderbuffer(),G(b.__webglDepthbuffer[me],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),G(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(P,b,J){const me=n.get(P);b!==void 0&&Me(me.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ne(P)}function We(P){const b=P.texture,J=n.get(P),me=n.get(b);P.addEventListener("dispose",ne),P.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=b.version,o.memory.textures++);const de=P.isWebGLCubeRenderTarget===!0,ve=P.isWebGLMultipleRenderTargets===!0,Fe=E(P)||a;if(de){J.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[fe]=[];for(let ee=0;ee<b.mipmaps.length;ee++)J.__webglFramebuffer[fe][ee]=s.createFramebuffer()}else J.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)J.__webglFramebuffer[fe]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(ve)if(i.drawBuffers){const fe=P.texture;for(let ee=0,U=fe.length;ee<U;ee++){const ue=n.get(fe[ee]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ge(P)===!1){const fe=ve?b:[b];J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ee=0;ee<fe.length;ee++){const U=fe[ee];J.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ee]);const ue=r.convert(U.format,U.colorSpace),Te=r.convert(U.type),Se=I(U.internalFormat,ue,Te,U.colorSpace,P.isXRRenderTarget===!0),Ae=Ke(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,Se,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,J.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),G(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,b,Fe);for(let fe=0;fe<6;fe++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)Me(J.__webglFramebuffer[fe][ee],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ee);else Me(J.__webglFramebuffer[fe],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);C(b,Fe)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){const fe=P.texture;for(let ee=0,U=fe.length;ee<U;ee++){const ue=fe[ee],Te=n.get(ue);t.bindTexture(s.TEXTURE_2D,Te.__webglTexture),Pe(s.TEXTURE_2D,ue,Fe),Me(J.__webglFramebuffer,P,ue,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D,0),C(ue,Fe)&&S(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?fe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,me.__webglTexture),Pe(fe,b,Fe),a&&b.mipmaps&&b.mipmaps.length>0)for(let ee=0;ee<b.mipmaps.length;ee++)Me(J.__webglFramebuffer[ee],P,b,s.COLOR_ATTACHMENT0,fe,ee);else Me(J.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,fe,0);C(b,Fe)&&S(fe),t.unbindTexture()}P.depthBuffer&&Ne(P)}function Mt(P){const b=E(P)||a,J=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let me=0,de=J.length;me<de;me++){const ve=J[me];if(C(ve,b)){const Fe=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,fe=n.get(ve).__webglTexture;t.bindTexture(Fe,fe),S(Fe),t.unbindTexture()}}}function Qe(P){if(a&&P.samples>0&&Ge(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],J=P.width,me=P.height;let de=s.COLOR_BUFFER_BIT;const ve=[],Fe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(P),ee=P.isWebGLMultipleRenderTargets===!0;if(ee)for(let U=0;U<b.length;U++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+U,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+U,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let U=0;U<b.length;U++){ve.push(s.COLOR_ATTACHMENT0+U),P.depthBuffer&&ve.push(Fe);const ue=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ue===!1&&(P.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),ee&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[U]),ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Fe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Fe])),ee){const Te=n.get(b[U]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,J,me,0,0,J,me,de,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ve)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let U=0;U<b.length;U++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+U,s.RENDERBUFFER,fe.__webglColorRenderbuffer[U]);const ue=n.get(b[U]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+U,s.TEXTURE_2D,ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ke(P){return Math.min(h,P.samples)}function Ge(P){const b=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ot(P){const b=o.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function Jt(P,b){const J=P.colorSpace,me=P.format,de=P.type;return P.isCompressedTexture===!0||P.format===oh||J!==yr&&J!==mo&&(J===rt?a===!1?e.has("EXT_sRGB")===!0&&me===Ji?(P.format=oh,P.minFilter=Si,P.generateMipmaps=!1):b=am.sRGBToLinear(b):(me!==Ji||de!==Ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}this.allocateTextureUnit=$,this.resetTextureUnits=Z,this.setTexture2D=re,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=ye,this.rebindTextures=Ve,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ge}function vS(s,e,t){const n=t.isWebGL2;function i(r,o=mo){let a;if(r===Ls)return s.UNSIGNED_BYTE;if(r===$p)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ng)return s.BYTE;if(r===Og)return s.SHORT;if(r===Ih)return s.UNSIGNED_SHORT;if(r===Kp)return s.INT;if(r===Es)return s.UNSIGNED_INT;if(r===ns)return s.FLOAT;if(r===vl)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Fg)return s.ALPHA;if(r===Ji)return s.RGBA;if(r===Bg)return s.LUMINANCE;if(r===kg)return s.LUMINANCE_ALPHA;if(r===po)return s.DEPTH_COMPONENT;if(r===Ea)return s.DEPTH_STENCIL;if(r===oh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===zg)return s.RED;if(r===Jp)return s.RED_INTEGER;if(r===Hg)return s.RG;if(r===Qp)return s.RG_INTEGER;if(r===em)return s.RGBA_INTEGER;if(r===au||r===lu||r===cu||r===uu)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===au)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===au)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nf||r===Of||r===Ff||r===Bf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Nf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Of)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ff)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===kf||r===zf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===kf)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===zf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hf||r===Gf||r===Vf||r===Wf||r===Xf||r===Yf||r===jf||r===qf||r===Kf||r===$f||r===Zf||r===Jf||r===Qf||r===ed)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Hf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$f)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qf)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ed)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===hu)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Vg||r===td||r===nd||r===id)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===hu)return a.COMPRESSED_RED_RGTC1_EXT;if(r===td)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fo?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class xS extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bs extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yS={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class MS extends qn{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:po,u!==po&&u!==Ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===po&&(n=Es),n===void 0&&u===Ea&&(n=fo),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class SS extends Os{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const y=[],v=[],E=new _i;E.layers.enable(1),E.viewport=new jt;const M=new _i;M.layers.enable(2),M.viewport=new jt;const C=[E,M],S=new xS;S.layers.enable(1),S.layers.enable(2);let I=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=y[W];return te===void 0&&(te=new Uu,y[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=y[W];return te===void 0&&(te=new Uu,y[W]=te),te.getGripSpace()},this.getHand=function(W){let te=y[W];return te===void 0&&(te=new Uu,y[W]=te),te.getHandSpace()};function R(W){const te=v.indexOf(W.inputSource);if(te===-1)return;const ye=y[te];ye!==void 0&&(ye.update(W.inputSource,W.frame,c||o),ye.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",ne);for(let W=0;W<y.length;W++){const te=v[W];te!==null&&(v[W]=null,y[W].disconnect(te))}I=null,x=null,e.setRenderTarget(p),d=null,f=null,h=null,i=null,m=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",X),i.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:d}),m=new Mo(d.framebufferWidth,d.framebufferHeight,{format:Ji,type:Ls,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let te=null,ye=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=_.stencil?Ea:po,ye=_.stencil?fo:Es);const Ee={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ee),i.updateRenderState({layers:[f]}),m=new Mo(f.textureWidth,f.textureHeight,{format:Ji,type:Ls,depthTexture:new MS(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const De=e.properties.get(m);De.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function ne(W){for(let te=0;te<W.removed.length;te++){const ye=W.removed[te],ge=v.indexOf(ye);ge>=0&&(v[ge]=null,y[ge].disconnect(ye))}for(let te=0;te<W.added.length;te++){const ye=W.added[te];let ge=v.indexOf(ye);if(ge===-1){for(let De=0;De<y.length;De++)if(De>=v.length){v.push(ye),ge=De;break}else if(v[De]===null){v[De]=ye,ge=De;break}if(ge===-1)break}const Ee=y[ge];Ee&&Ee.connect(ye)}}const F=new O,j=new O;function B(W,te,ye){F.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ye.matrixWorld);const ge=F.distanceTo(j),Ee=te.projectionMatrix.elements,De=ye.projectionMatrix.elements,Pe=Ee[14]/(Ee[10]-1),ce=Ee[14]/(Ee[10]+1),ht=(Ee[9]+1)/Ee[5],Ce=(Ee[9]-1)/Ee[5],Me=(Ee[8]-1)/Ee[0],G=(De[8]+1)/De[0],Je=Pe*Me,Ne=Pe*G,Ve=ge/(-Me+G),We=Ve*-Me;te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(We),W.translateZ(Ve),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Mt=Pe+Ve,Qe=ce+Ve,Ke=Je-We,Ge=Ne+(ge-We),Ot=ht*ce/Qe*Mt,Jt=Ce*ce/Qe*Mt;W.projectionMatrix.makePerspective(Ke,Ge,Ot,Jt,Mt,Qe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function le(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;S.near=M.near=E.near=W.near,S.far=M.far=E.far=W.far,(I!==S.near||x!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,x=S.far);const te=W.parent,ye=S.cameras;le(S,te);for(let ge=0;ge<ye.length;ge++)le(ye[ge],te);ye.length===2?B(S,E,M):S.projectionMatrix.copy(E.projectionMatrix),Z(W,S,te)};function Z(W,te,ye){ye===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(ye.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const ge=W.children;for(let Ee=0,De=ge.length;Ee<De;Ee++)ge[Ee].updateMatrixWorld(!0);W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ba*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)};let $=null;function Q(W,te){if(u=te.getViewerPose(c||o),g=te,u!==null){const ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let ge=!1;ye.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let Ee=0;Ee<ye.length;Ee++){const De=ye[Ee];let Pe=null;if(d!==null)Pe=d.getViewport(De);else{const ht=h.getViewSubImage(f,De);Pe=ht.viewport,Ee===0&&(e.setRenderTargetTextures(m,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(m))}let ce=C[Ee];ce===void 0&&(ce=new _i,ce.layers.enable(Ee),ce.viewport=new jt,C[Ee]=ce),ce.matrix.fromArray(De.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(De.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Ee===0&&(S.matrix.copy(ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(ce)}}for(let ye=0;ye<y.length;ye++){const ge=v[ye],Ee=y[ye];ge!==null&&Ee!==void 0&&Ee.update(ge,te,c||o)}$&&$(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const re=new gm;re.setAnimationLoop(Q),this.setAnimationLoop=function(W){$=W},this.dispose=function(){}}}function ES(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,pm(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===gi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===gi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gi&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function TS(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const E=v.program;n.uniformBlockBinding(y,E)}function c(y,v){let E=i[y.id];E===void 0&&(g(y),E=u(y),i[y.id]=E,y.addEventListener("dispose",p));const M=v.program;n.updateUBOMapping(y,M);const C=e.render.frame;r[y.id]!==C&&(f(y),r[y.id]=C)}function u(y){const v=h();y.__bindingPointIndex=v;const E=s.createBuffer(),M=y.__size,C=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,M,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,E),E}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],E=y.uniforms,M=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let C=0,S=E.length;C<S;C++){const I=E[C];if(d(I,C,M)===!0){const x=I.__offset,R=Array.isArray(I.value)?I.value:[I.value];let X=0;for(let ne=0;ne<R.length;ne++){const F=R[ne],j=_(F);typeof F=="number"?(I.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,x+X,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=F.elements[0],I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=F.elements[0],I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=F.elements[0]):(F.toArray(I.__data,X),X+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,x,I.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,v,E){const M=y.value;if(E[v]===void 0){if(typeof M=="number")E[v]=M;else{const C=Array.isArray(M)?M:[M],S=[];for(let I=0;I<C.length;I++)S.push(C[I].clone());E[v]=S}return!0}else if(typeof M=="number"){if(E[v]!==M)return E[v]=M,!0}else{const C=Array.isArray(E[v])?E[v]:[E[v]],S=Array.isArray(M)?M:[M];for(let I=0;I<C.length;I++){const x=C[I];if(x.equals(S[I])===!1)return x.copy(S[I]),!0}}return!1}function g(y){const v=y.uniforms;let E=0;const M=16;let C=0;for(let S=0,I=v.length;S<I;S++){const x=v[S],R={boundary:0,storage:0},X=Array.isArray(x.value)?x.value:[x.value];for(let ne=0,F=X.length;ne<F;ne++){const j=X[ne],B=_(j);R.boundary+=B.boundary,R.storage+=B.storage}if(x.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=E,S>0){C=E%M;const ne=M-C;C!==0&&ne-R.boundary<0&&(E+=M-C,x.__offset=E)}E+=R.storage}return C=E%M,C>0&&(E+=M-C),y.__size=E,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}function bS(){const s=yl("canvas");return s.style.display="block",s}class Sm{constructor(e={}){const{canvas:t=bS(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=rt,this._useLegacyLights=!1,this.toneMapping=Cs,this.toneMappingExposure=1;const v=this;let E=!1,M=0,C=0,S=null,I=-1,x=null;const R=new jt,X=new jt;let ne=null;const F=new ut(0);let j=0,B=t.width,le=t.height,Z=1,$=null,Q=null;const re=new jt(0,0,B,le),W=new jt(0,0,B,le);let te=!1;const ye=new Oh;let ge=!1,Ee=!1,De=null;const Pe=new yt,ce=new st,ht=new O,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return S===null?Z:1}let G=n;function Je(L,z){for(let se=0;se<L.length;se++){const H=L[se],ie=t.getContext(H,z);if(ie!==null)return ie}return null}try{const L={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lh}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",pe,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),G=Je(z,L),G===null)throw Je(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ne,Ve,We,Mt,Qe,Ke,Ge,Ot,Jt,P,b,J,me,de,ve,Fe,fe,ee,U,ue,Te,Se,Ae,je;function _t(){Ne=new Ny(G),Ve=new Cy(G,Ne,e),Ne.init(Ve),Se=new vS(G,Ne,Ve),We=new _S(G,Ne,Ve),Mt=new By(G),Qe=new nS,Ke=new gS(G,Ne,We,Qe,Ve,Se,Mt),Ge=new Py(v),Ot=new Uy(v),Jt=new q0(G,Ve),Ae=new wy(G,Ne,Jt,Ve),P=new Oy(G,Jt,Mt,Ae),b=new Gy(G,P,Jt,Mt),U=new Hy(G,Ve,Ke),Fe=new Ly(Qe),J=new tS(v,Ge,Ot,Ne,Ve,Ae,Fe),me=new ES(v,Qe),de=new rS,ve=new uS(Ne,Ve),ee=new Ay(v,Ge,Ot,We,b,f,l),fe=new mS(v,b,Ve),je=new TS(G,Mt,Ve,We),ue=new Ry(G,Ne,Mt,Ve),Te=new Fy(G,Ne,Mt,Ve),Mt.programs=J.programs,v.capabilities=Ve,v.extensions=Ne,v.properties=Qe,v.renderLists=de,v.shadowMap=fe,v.state=We,v.info=Mt}_t();const N=new SS(v,G);this.xr=N,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const L=Ne.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ne.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(L){L!==void 0&&(Z=L,this.setSize(B,le,!1))},this.getSize=function(L){return L.set(B,le)},this.setSize=function(L,z,se=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,le=z,t.width=Math.floor(L*Z),t.height=Math.floor(z*Z),se===!0&&(t.style.width=L+"px",t.style.height=z+"px"),this.setViewport(0,0,L,z)},this.getDrawingBufferSize=function(L){return L.set(B*Z,le*Z).floor()},this.setDrawingBufferSize=function(L,z,se){B=L,le=z,Z=se,t.width=Math.floor(L*se),t.height=Math.floor(z*se),this.setViewport(0,0,L,z)},this.getCurrentViewport=function(L){return L.copy(R)},this.getViewport=function(L){return L.copy(re)},this.setViewport=function(L,z,se,H){L.isVector4?re.set(L.x,L.y,L.z,L.w):re.set(L,z,se,H),We.viewport(R.copy(re).multiplyScalar(Z).floor())},this.getScissor=function(L){return L.copy(W)},this.setScissor=function(L,z,se,H){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,z,se,H),We.scissor(X.copy(W).multiplyScalar(Z).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(L){We.setScissorTest(te=L)},this.setOpaqueSort=function(L){$=L},this.setTransparentSort=function(L){Q=L},this.getClearColor=function(L){return L.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(L=!0,z=!0,se=!0){let H=0;if(L){let ie=!1;if(S!==null){const Ie=S.texture.format;ie=Ie===em||Ie===Qp||Ie===Jp}if(ie){const Ie=S.texture.type,Be=Ie===Ls||Ie===Es||Ie===Ih||Ie===fo||Ie===$p||Ie===Zp,et=ee.getClearColor(),tt=ee.getClearAlpha(),dt=et.r,$e=et.g,nt=et.b;Be?(d[0]=dt,d[1]=$e,d[2]=nt,d[3]=tt,G.clearBufferuiv(G.COLOR,0,d)):(g[0]=dt,g[1]=$e,g[2]=nt,g[3]=tt,G.clearBufferiv(G.COLOR,0,g))}else H|=G.COLOR_BUFFER_BIT}z&&(H|=G.DEPTH_BUFFER_BIT),se&&(H|=G.STENCIL_BUFFER_BIT),G.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),de.dispose(),ve.dispose(),Qe.dispose(),Ge.dispose(),Ot.dispose(),b.dispose(),Ae.dispose(),je.dispose(),J.dispose(),N.dispose(),N.removeEventListener("sessionstart",Bt),N.removeEventListener("sessionend",Ri),De&&(De.dispose(),De=null),qt.stop()};function be(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const L=Mt.autoReset,z=fe.enabled,se=fe.autoUpdate,H=fe.needsUpdate,ie=fe.type;_t(),Mt.autoReset=L,fe.enabled=z,fe.autoUpdate=se,fe.needsUpdate=H,fe.type=ie}function pe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function xe(L){const z=L.target;z.removeEventListener("dispose",xe),ct(z)}function ct(L){Ct(L),Qe.remove(L)}function Ct(L){const z=Qe.get(L).programs;z!==void 0&&(z.forEach(function(se){J.releaseProgram(se)}),L.isShaderMaterial&&J.releaseShaderCache(L))}this.renderBufferDirect=function(L,z,se,H,ie,Ie){z===null&&(z=Ce);const Be=ie.isMesh&&ie.matrixWorld.determinant()<0,et=Jc(L,z,se,H,ie);We.setMaterial(H,Be);let tt=se.index,dt=1;if(H.wireframe===!0){if(tt=P.getWireframeAttribute(se),tt===void 0)return;dt=2}const $e=se.drawRange,nt=se.attributes.position;let Ut=$e.start*dt,Ht=($e.start+$e.count)*dt;Ie!==null&&(Ut=Math.max(Ut,Ie.start*dt),Ht=Math.min(Ht,(Ie.start+Ie.count)*dt)),tt!==null?(Ut=Math.max(Ut,0),Ht=Math.min(Ht,tt.count)):nt!=null&&(Ut=Math.max(Ut,0),Ht=Math.min(Ht,nt.count));const Pn=Ht-Ut;if(Pn<0||Pn===1/0)return;Ae.setup(ie,H,et,se,tt);let oi,Kt=ue;if(tt!==null&&(oi=Jt.get(tt),Kt=Te,Kt.setIndex(oi)),ie.isMesh)H.wireframe===!0?(We.setLineWidth(H.wireframeLinewidth*Me()),Kt.setMode(G.LINES)):Kt.setMode(G.TRIANGLES);else if(ie.isLine){let ke=H.linewidth;ke===void 0&&(ke=1),We.setLineWidth(ke*Me()),ie.isLineSegments?Kt.setMode(G.LINES):ie.isLineLoop?Kt.setMode(G.LINE_LOOP):Kt.setMode(G.LINE_STRIP)}else ie.isPoints?Kt.setMode(G.POINTS):ie.isSprite&&Kt.setMode(G.TRIANGLES);if(ie.isInstancedMesh)Kt.renderInstances(Ut,Pn,ie.count);else if(se.isInstancedBufferGeometry){const ke=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,$n=Math.min(se.instanceCount,ke);Kt.renderInstances(Ut,Pn,$n)}else Kt.render(Ut,Pn)},this.compile=function(L,z){function se(H,ie,Ie){H.transparent===!0&&H.side===Cr&&H.forceSinglePass===!1?(H.side=gi,H.needsUpdate=!0,ks(H,ie,Ie),H.side=os,H.needsUpdate=!0,ks(H,ie,Ie),H.side=Cr):ks(H,ie,Ie)}p=ve.get(L),p.init(),y.push(p),L.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(v._useLegacyLights),L.traverse(function(H){const ie=H.material;if(ie)if(Array.isArray(ie))for(let Ie=0;Ie<ie.length;Ie++){const Be=ie[Ie];se(Be,L,H)}else se(ie,L,H)}),y.pop(),p=null};let Ft=null;function Sr(L){Ft&&Ft(L)}function Bt(){qt.stop()}function Ri(){qt.start()}const qt=new gm;qt.setAnimationLoop(Sr),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(L){Ft=L,N.setAnimationLoop(L),L===null?qt.stop():qt.start()},N.addEventListener("sessionstart",Bt),N.addEventListener("sessionend",Ri),this.render=function(L,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(z),z=N.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,z,S),p=ve.get(L,y.length),p.init(),y.push(p),Pe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ye.setFromProjectionMatrix(Pe),Ee=this.localClippingEnabled,ge=Fe.init(this.clippingPlanes,Ee),_=de.get(L,m.length),_.init(),m.push(_),us(L,z,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort($,Q),this.info.render.frame++,ge===!0&&Fe.beginShadows();const se=p.state.shadowsArray;if(fe.render(se,L,z),ge===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(_,L),p.setupLights(v._useLegacyLights),z.isArrayCamera){const H=z.cameras;for(let ie=0,Ie=H.length;ie<Ie;ie++){const Be=H[ie];Ha(_,L,Be,Be.viewport)}}else Ha(_,L,z);S!==null&&(Ke.updateMultisampleRenderTarget(S),Ke.updateRenderTargetMipmap(S)),L.isScene===!0&&L.onAfterRender(v,L,z),Ae.resetDefaultState(),I=-1,x=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function us(L,z,se,H){if(L.visible===!1)return;if(L.layers.test(z.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(z);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ye.intersectsSprite(L)){H&&ht.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Pe);const Be=b.update(L),et=L.material;et.visible&&_.push(L,Be,et,se,ht.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ye.intersectsObject(L))){const Be=b.update(L),et=L.material;if(H&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ht.copy(L.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),ht.copy(Be.boundingSphere.center)),ht.applyMatrix4(L.matrixWorld).applyMatrix4(Pe)),Array.isArray(et)){const tt=Be.groups;for(let dt=0,$e=tt.length;dt<$e;dt++){const nt=tt[dt],Ut=et[nt.materialIndex];Ut&&Ut.visible&&_.push(L,Be,Ut,se,ht.z,nt)}}else et.visible&&_.push(L,Be,et,se,ht.z,null)}}const Ie=L.children;for(let Be=0,et=Ie.length;Be<et;Be++)us(Ie[Be],z,se,H)}function Ha(L,z,se,H){const ie=L.opaque,Ie=L.transmissive,Be=L.transparent;p.setupLightsView(se),ge===!0&&Fe.setGlobalState(v.clippingPlanes,se),Ie.length>0&&Il(ie,Ie,z,se),H&&We.viewport(R.copy(H)),ie.length>0&&Wi(ie,z,se),Ie.length>0&&Wi(Ie,z,se),Be.length>0&&Wi(Be,z,se),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Il(L,z,se,H){const ie=Ve.isWebGL2;De===null&&(De=new Mo(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")?vl:Ls,minFilter:yo,samples:ie?4:0})),v.getDrawingBufferSize(ce),ie?De.setSize(ce.x,ce.y):De.setSize(Ic(ce.x),Ic(ce.y));const Ie=v.getRenderTarget();v.setRenderTarget(De),v.getClearColor(F),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear();const Be=v.toneMapping;v.toneMapping=Cs,Wi(L,se,H),Ke.updateMultisampleRenderTarget(De),Ke.updateRenderTargetMipmap(De);let et=!1;for(let tt=0,dt=z.length;tt<dt;tt++){const $e=z[tt],nt=$e.object,Ut=$e.geometry,Ht=$e.material,Pn=$e.group;if(Ht.side===Cr&&nt.layers.test(H.layers)){const oi=Ht.side;Ht.side=gi,Ht.needsUpdate=!0,Ga(nt,se,H,Ut,Ht,Pn),Ht.side=oi,Ht.needsUpdate=!0,et=!0}}et===!0&&(Ke.updateMultisampleRenderTarget(De),Ke.updateRenderTargetMipmap(De)),v.setRenderTarget(Ie),v.setClearColor(F,j),v.toneMapping=Be}function Wi(L,z,se){const H=z.isScene===!0?z.overrideMaterial:null;for(let ie=0,Ie=L.length;ie<Ie;ie++){const Be=L[ie],et=Be.object,tt=Be.geometry,dt=H===null?Be.material:H,$e=Be.group;et.layers.test(se.layers)&&Ga(et,z,se,tt,dt,$e)}}function Ga(L,z,se,H,ie,Ie){L.onBeforeRender(v,z,se,H,ie,Ie),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ie.onBeforeRender(v,z,se,H,L,Ie),ie.transparent===!0&&ie.side===Cr&&ie.forceSinglePass===!1?(ie.side=gi,ie.needsUpdate=!0,v.renderBufferDirect(se,z,H,ie,L,Ie),ie.side=os,ie.needsUpdate=!0,v.renderBufferDirect(se,z,H,ie,L,Ie),ie.side=Cr):v.renderBufferDirect(se,z,H,ie,L,Ie),L.onAfterRender(v,z,se,H,ie,Ie)}function ks(L,z,se){z.isScene!==!0&&(z=Ce);const H=Qe.get(L),ie=p.state.lights,Ie=p.state.shadowsArray,Be=ie.state.version,et=J.getParameters(L,ie.state,Ie,z,se),tt=J.getProgramCacheKey(et);let dt=H.programs;H.environment=L.isMeshStandardMaterial?z.environment:null,H.fog=z.fog,H.envMap=(L.isMeshStandardMaterial?Ot:Ge).get(L.envMap||H.environment),dt===void 0&&(L.addEventListener("dispose",xe),dt=new Map,H.programs=dt);let $e=dt.get(tt);if($e!==void 0){if(H.currentProgram===$e&&H.lightsStateVersion===Be)return Dl(L,et),$e}else et.uniforms=J.getUniforms(L),L.onBuild(se,et,v),L.onBeforeCompile(et,v),$e=J.acquireProgram(et,tt),dt.set(tt,$e),H.uniforms=et.uniforms;const nt=H.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(nt.clippingPlanes=Fe.uniform),Dl(L,et),H.needsLights=wo(L),H.lightsStateVersion=Be,H.needsLights&&(nt.ambientLightColor.value=ie.state.ambient,nt.lightProbe.value=ie.state.probe,nt.directionalLights.value=ie.state.directional,nt.directionalLightShadows.value=ie.state.directionalShadow,nt.spotLights.value=ie.state.spot,nt.spotLightShadows.value=ie.state.spotShadow,nt.rectAreaLights.value=ie.state.rectArea,nt.ltc_1.value=ie.state.rectAreaLTC1,nt.ltc_2.value=ie.state.rectAreaLTC2,nt.pointLights.value=ie.state.point,nt.pointLightShadows.value=ie.state.pointShadow,nt.hemisphereLights.value=ie.state.hemi,nt.directionalShadowMap.value=ie.state.directionalShadowMap,nt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,nt.spotShadowMap.value=ie.state.spotShadowMap,nt.spotLightMatrix.value=ie.state.spotLightMatrix,nt.spotLightMap.value=ie.state.spotLightMap,nt.pointShadowMap.value=ie.state.pointShadowMap,nt.pointShadowMatrix.value=ie.state.pointShadowMatrix);const Ut=$e.getUniforms(),Ht=Tc.seqWithValue(Ut.seq,nt);return H.currentProgram=$e,H.uniformsList=Ht,$e}function Dl(L,z){const se=Qe.get(L);se.outputColorSpace=z.outputColorSpace,se.instancing=z.instancing,se.instancingColor=z.instancingColor,se.skinning=z.skinning,se.morphTargets=z.morphTargets,se.morphNormals=z.morphNormals,se.morphColors=z.morphColors,se.morphTargetsCount=z.morphTargetsCount,se.numClippingPlanes=z.numClippingPlanes,se.numIntersection=z.numClipIntersection,se.vertexAlphas=z.vertexAlphas,se.vertexTangents=z.vertexTangents,se.toneMapping=z.toneMapping}function Jc(L,z,se,H,ie){z.isScene!==!0&&(z=Ce),Ke.resetTextureUnits();const Ie=z.fog,Be=H.isMeshStandardMaterial?z.environment:null,et=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:yr,tt=(H.isMeshStandardMaterial?Ot:Ge).get(H.envMap||Be),dt=H.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,$e=!!se.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),nt=!!se.morphAttributes.position,Ut=!!se.morphAttributes.normal,Ht=!!se.morphAttributes.color;let Pn=Cs;H.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Pn=v.toneMapping);const oi=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Kt=oi!==void 0?oi.length:0,ke=Qe.get(H),$n=p.state.lights;if(ge===!0&&(Ee===!0||L!==x)){const Zn=L===x&&H.id===I;Fe.setState(H,L,Zn)}let Gt=!1;H.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==$n.state.version||ke.outputColorSpace!==et||ie.isInstancedMesh&&ke.instancing===!1||!ie.isInstancedMesh&&ke.instancing===!0||ie.isSkinnedMesh&&ke.skinning===!1||!ie.isSkinnedMesh&&ke.skinning===!0||ie.isInstancedMesh&&ke.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ke.instancingColor===!1&&ie.instanceColor!==null||ke.envMap!==tt||H.fog===!0&&ke.fog!==Ie||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Fe.numPlanes||ke.numIntersection!==Fe.numIntersection)||ke.vertexAlphas!==dt||ke.vertexTangents!==$e||ke.morphTargets!==nt||ke.morphNormals!==Ut||ke.morphColors!==Ht||ke.toneMapping!==Pn||Ve.isWebGL2===!0&&ke.morphTargetsCount!==Kt)&&(Gt=!0):(Gt=!0,ke.__version=H.version);let sr=ke.currentProgram;Gt===!0&&(sr=ks(H,z,ie));let gn=!1,In=!1,Va=!1;const Dn=sr.getUniforms(),zn=ke.uniforms;if(We.useProgram(sr.program)&&(gn=!0,In=!0,Va=!0),H.id!==I&&(I=H.id,In=!0),gn||x!==L){if(Dn.setValue(G,"projectionMatrix",L.projectionMatrix),Ve.logarithmicDepthBuffer&&Dn.setValue(G,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),x!==L&&(x=L,In=!0,Va=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Zn=Dn.map.cameraPosition;Zn!==void 0&&Zn.setValue(G,ht.setFromMatrixPosition(L.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Dn.setValue(G,"isOrthographic",L.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||ie.isSkinnedMesh)&&Dn.setValue(G,"viewMatrix",L.matrixWorldInverse)}if(ie.isSkinnedMesh){Dn.setOptional(G,ie,"bindMatrix"),Dn.setOptional(G,ie,"bindMatrixInverse");const Zn=ie.skeleton;Zn&&(Ve.floatVertexTextures?(Zn.boneTexture===null&&Zn.computeBoneTexture(),Dn.setValue(G,"boneTexture",Zn.boneTexture,Ke),Dn.setValue(G,"boneTextureSize",Zn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zs=se.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0&&Ve.isWebGL2===!0)&&U.update(ie,se,sr),(In||ke.receiveShadow!==ie.receiveShadow)&&(ke.receiveShadow=ie.receiveShadow,Dn.setValue(G,"receiveShadow",ie.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(zn.envMap.value=tt,zn.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),In&&(Dn.setValue(G,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&rr(zn,Va),Ie&&H.fog===!0&&me.refreshFogUniforms(zn,Ie),me.refreshMaterialUniforms(zn,H,Z,le,De),Tc.upload(G,ke.uniformsList,zn,Ke)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Tc.upload(G,ke.uniformsList,zn,Ke),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Dn.setValue(G,"center",ie.center),Dn.setValue(G,"modelViewMatrix",ie.modelViewMatrix),Dn.setValue(G,"normalMatrix",ie.normalMatrix),Dn.setValue(G,"modelMatrix",ie.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Zn=H.uniformsGroups;for(let Wa=0,Xa=Zn.length;Wa<Xa;Wa++)if(Ve.isWebGL2){const Ul=Zn[Wa];je.update(Ul,sr),je.bind(Ul,sr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return sr}function rr(L,z){L.ambientLightColor.needsUpdate=z,L.lightProbe.needsUpdate=z,L.directionalLights.needsUpdate=z,L.directionalLightShadows.needsUpdate=z,L.pointLights.needsUpdate=z,L.pointLightShadows.needsUpdate=z,L.spotLights.needsUpdate=z,L.spotLightShadows.needsUpdate=z,L.rectAreaLights.needsUpdate=z,L.hemisphereLights.needsUpdate=z}function wo(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(L,z,se){Qe.get(L.texture).__webglTexture=z,Qe.get(L.depthTexture).__webglTexture=se;const H=Qe.get(L);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=se===void 0,H.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,z){const se=Qe.get(L);se.__webglFramebuffer=z,se.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(L,z=0,se=0){S=L,M=z,C=se;let H=!0,ie=null,Ie=!1,Be=!1;if(L){const tt=Qe.get(L);tt.__useDefaultFramebuffer!==void 0?(We.bindFramebuffer(G.FRAMEBUFFER,null),H=!1):tt.__webglFramebuffer===void 0?Ke.setupRenderTarget(L):tt.__hasExternalTextures&&Ke.rebindTextures(L,Qe.get(L.texture).__webglTexture,Qe.get(L.depthTexture).__webglTexture);const dt=L.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Be=!0);const $e=Qe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray($e[z])?ie=$e[z][se]:ie=$e[z],Ie=!0):Ve.isWebGL2&&L.samples>0&&Ke.useMultisampledRTT(L)===!1?ie=Qe.get(L).__webglMultisampledFramebuffer:Array.isArray($e)?ie=$e[se]:ie=$e,R.copy(L.viewport),X.copy(L.scissor),ne=L.scissorTest}else R.copy(re).multiplyScalar(Z).floor(),X.copy(W).multiplyScalar(Z).floor(),ne=te;if(We.bindFramebuffer(G.FRAMEBUFFER,ie)&&Ve.drawBuffers&&H&&We.drawBuffers(L,ie),We.viewport(R),We.scissor(X),We.setScissorTest(ne),Ie){const tt=Qe.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,tt.__webglTexture,se)}else if(Be){const tt=Qe.get(L.texture),dt=z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,tt.__webglTexture,se||0,dt)}I=-1},this.readRenderTargetPixels=function(L,z,se,H,ie,Ie,Be){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=Qe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Be!==void 0&&(et=et[Be]),et){We.bindFramebuffer(G.FRAMEBUFFER,et);try{const tt=L.texture,dt=tt.format,$e=tt.type;if(dt!==Ji&&Se.convert(dt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const nt=$e===vl&&(Ne.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Ne.has("EXT_color_buffer_float"));if($e!==Ls&&Se.convert($e)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===ns&&(Ve.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=L.width-H&&se>=0&&se<=L.height-ie&&G.readPixels(z,se,H,ie,Se.convert(dt),Se.convert($e),Ie)}finally{const tt=S!==null?Qe.get(S).__webglFramebuffer:null;We.bindFramebuffer(G.FRAMEBUFFER,tt)}}},this.copyFramebufferToTexture=function(L,z,se=0){const H=Math.pow(2,-se),ie=Math.floor(z.image.width*H),Ie=Math.floor(z.image.height*H);Ke.setTexture2D(z,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,L.x,L.y,ie,Ie),We.unbindTexture()},this.copyTextureToTexture=function(L,z,se,H=0){const ie=z.image.width,Ie=z.image.height,Be=Se.convert(se.format),et=Se.convert(se.type);Ke.setTexture2D(se,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,se.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,se.unpackAlignment),z.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,H,L.x,L.y,ie,Ie,Be,et,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,H,L.x,L.y,z.mipmaps[0].width,z.mipmaps[0].height,Be,z.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,H,L.x,L.y,Be,et,z.image),H===0&&se.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),We.unbindTexture()},this.copyTextureToTexture3D=function(L,z,se,H,ie=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=L.max.x-L.min.x+1,Be=L.max.y-L.min.y+1,et=L.max.z-L.min.z+1,tt=Se.convert(H.format),dt=Se.convert(H.type);let $e;if(H.isData3DTexture)Ke.setTexture3D(H,0),$e=G.TEXTURE_3D;else if(H.isDataArrayTexture)Ke.setTexture2DArray(H,0),$e=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);const nt=G.getParameter(G.UNPACK_ROW_LENGTH),Ut=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ht=G.getParameter(G.UNPACK_SKIP_PIXELS),Pn=G.getParameter(G.UNPACK_SKIP_ROWS),oi=G.getParameter(G.UNPACK_SKIP_IMAGES),Kt=se.isCompressedTexture?se.mipmaps[0]:se.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Kt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Kt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,L.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,L.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,L.min.z),se.isDataTexture||se.isData3DTexture?G.texSubImage3D($e,ie,z.x,z.y,z.z,Ie,Be,et,tt,dt,Kt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D($e,ie,z.x,z.y,z.z,Ie,Be,et,tt,Kt.data)):G.texSubImage3D($e,ie,z.x,z.y,z.z,Ie,Be,et,tt,dt,Kt),G.pixelStorei(G.UNPACK_ROW_LENGTH,nt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ut),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ht),G.pixelStorei(G.UNPACK_SKIP_ROWS,Pn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oi),ie===0&&H.generateMipmaps&&G.generateMipmap($e),We.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Ke.setTextureCube(L,0):L.isData3DTexture?Ke.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ke.setTexture2DArray(L,0):Ke.setTexture2D(L,0),We.unbindTexture()},this.resetState=function(){M=0,C=0,S=null,We.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?Ps:nm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ps?rt:yr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class AS extends Sm{}AS.prototype.isWebGL1Renderer=!0;class wS extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class RS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sh,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=gr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pi=new O;class Bh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix4(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyNormalMatrix(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.transformDirection(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Lr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Lr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Lr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Lr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vd=new O,Wd=new jt,Xd=new jt,CS=new O,Yd=new yt,Jo=new O,Nu=new Fr,jd=new yt,Ou=new Rl;class LS extends ki{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cs),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Jo.fromBufferAttribute(t,n),this.applyBoneTransform(n,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Jo.fromBufferAttribute(t,n),this.applyBoneTransform(n,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nu.copy(this.boundingSphere),Nu.applyMatrix4(i),e.ray.intersectsSphere(Nu)!==!1&&(jd.copy(i).invert(),Ou.copy(e.ray).applyMatrix4(jd),!(this.boundingBox!==null&&Ou.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ou)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new jt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wd.fromBufferAttribute(i.attributes.skinIndex,e),Xd.fromBufferAttribute(i.attributes.skinWeight,e),Vd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Xd.getComponent(r);if(o!==0){const a=Wd.getComponent(r);Yd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(CS.copy(Vd).applyMatrix4(Yd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Em extends an{constructor(){super(),this.isBone=!0,this.type="Bone"}}class PS extends qn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Bn,u=Bn,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qd=new yt,IS=new yt;class kh{constructor(e=[],t=[]){this.uuid=gr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new yt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:IS;qd.multiplyMatrices(a,t[r]),qd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new kh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=rm(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new PS(t,e,e,Ji,ns);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Em),this.bones.push(o),this.boneInverses.push(new yt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Kd extends Kn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qo=new yt,$d=new yt,_c=[],Zd=new cs,DS=new yt,il=new ki,rl=new Fr;class US extends ki{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kd(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,DS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qo),Zd.copy(e.boundingBox).applyMatrix4(Qo),this.boundingBox.union(Zd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qo),rl.copy(e.boundingSphere).applyMatrix4(Qo),this.boundingSphere.union(rl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(il.geometry=this.geometry,il.material=this.material,il.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(n),e.ray.intersectsSphere(rl)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qo),$d.multiplyMatrices(n,Qo),il.matrixWorld=$d,il.raycast(e,_c);for(let o=0,a=_c.length;o<a;o++){const l=_c[o];l.instanceId=r,l.object=this,t.push(l)}_c.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Tm extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jd=new O,Qd=new O,ep=new yt,Fu=new Rl,gc=new Fr;class zh extends an{constructor(e=new Mr,t=new Tm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Jd.fromBufferAttribute(t,i-1),Qd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jd.distanceTo(Qd);e.setAttribute("lineDistance",new ss(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gc.copy(n.boundingSphere),gc.applyMatrix4(i),gc.radius+=r,e.ray.intersectsSphere(gc)===!1)return;ep.copy(i).invert(),Fu.copy(e.ray).applyMatrix4(ep);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,u=new O,h=new O,f=new O,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=m,E=y-1;v<E;v+=d){const M=g.getX(v),C=g.getX(v+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,C),Fu.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=m,E=y-1;v<E;v+=d){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Fu.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const tp=new O,np=new O;class NS extends zh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)tp.fromBufferAttribute(t,i),np.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tp.distanceTo(np);e.setAttribute("lineDistance",new ss(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class OS extends zh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bm extends vr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ip=new yt,ch=new Rl,vc=new Fr,xc=new O;class FS extends an{constructor(e=new Mr,t=new bm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(i),vc.radius+=r,e.ray.intersectsSphere(vc)===!1)return;ip.copy(i).invert(),ch.copy(e.ray).applyMatrix4(ip);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);xc.fromBufferAttribute(h,p),rp(xc,p,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)xc.fromBufferAttribute(h,g),rp(xc,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rp(s,e,t,n,i,r,o){const a=ch.distanceSqToPoint(s);if(a<t){const l=new O;ch.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Hh extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fs extends Hh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class BS extends vr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ut(16777215),this.specular=new ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function xs(s,e,t){return Am(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function yc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Am(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function kS(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function sp(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function wm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Ll{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zS extends Ll{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:aa,endingEnd:aa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case la:r=e,a=2*t-n;break;case Lc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case la:o=e,l=2*n-t;break;case Lc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,y=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-d)*p+(1.5+d)*_+.5*g,E=d*p-d*_;for(let M=0;M!==a;++M)r[M]=m*o[u+M]+y*o[c+M]+v*o[l+M]+E*o[h+M];return r}}class Rm extends Ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class HS extends Ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Br{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yc(t,this.TimeBufferType),this.values=yc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yc(e.times,Array),values:yc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new HS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xl:t=this.InterpolantFactoryMethodDiscrete;break;case Ta:t=this.InterpolantFactoryMethodLinear;break;case fu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xl;case this.InterpolantFactoryMethodLinear:return Ta;case this.InterpolantFactoryMethodSmooth:return fu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=xs(n,r,o),this.values=xs(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Am(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=xs(this.times),t=xs(this.values),n=this.getValueSize(),i=this.getInterpolation()===fu,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=xs(e,0,o),this.values=xs(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=xs(this.times,0),t=xs(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Br.prototype.TimeBufferType=Float32Array;Br.prototype.ValueBufferType=Float32Array;Br.prototype.DefaultInterpolation=Ta;class ka extends Br{}ka.prototype.ValueTypeName="bool";ka.prototype.ValueBufferType=Array;ka.prototype.DefaultInterpolation=xl;ka.prototype.InterpolantFactoryMethodLinear=void 0;ka.prototype.InterpolantFactoryMethodSmooth=void 0;class Cm extends Br{}Cm.prototype.ValueTypeName="color";class wa extends Br{}wa.prototype.ValueTypeName="number";class GS extends Ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)zi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Eo extends Br{InterpolantFactoryMethodLinear(e){return new GS(this.times,this.values,this.getValueSize(),e)}}Eo.prototype.ValueTypeName="quaternion";Eo.prototype.DefaultInterpolation=Ta;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;class za extends Br{}za.prototype.ValueTypeName="string";za.prototype.ValueBufferType=Array;za.prototype.DefaultInterpolation=xl;za.prototype.InterpolantFactoryMethodLinear=void 0;za.prototype.InterpolantFactoryMethodSmooth=void 0;class Ra extends Br{}Ra.prototype.ValueTypeName="vector";class uh{constructor(e,t=-1,n,i=Dh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(WS(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Br.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=kS(l);l=sp(l,1,u),c=sp(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new wa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const p=[],m=[];wm(d,p,m,g),p.length!==0&&_.push(new h(f,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const p=[],m=[];for(let y=0;y!==f[g].morphTargets.length;++y){const v=f[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new wa(".morphTargetInfluence["+_+"]",p,m))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(Ra,d+".position",f,"pos",i),n(Eo,d+".quaternion",f,"rot",i),n(Ra,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function VS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wa;case"vector":case"vector2":case"vector3":case"vector4":return Ra;case"color":return Cm;case"quaternion":return Eo;case"bool":case"boolean":return ka;case"string":return za}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function WS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=VS(s.type);if(s.times===void 0){const t=[],n=[];wm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ca={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Lm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const XS=new Lm;class bo{constructor(e){this.manager=e!==void 0?e:XS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zr={};class YS extends Error{constructor(e,t){super(e),this.response=t}}class Dc extends bo{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ca.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zr[e]!==void 0){Zr[e].push({onLoad:t,onProgress:n,onError:i});return}Zr[e]=[],Zr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zr[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const p=new ReadableStream({start(m){y();function y(){h.read().then(({done:v,value:E})=>{if(v)m.close();else{_+=E.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let C=0,S=u.length;C<S;C++){const I=u[C];I.onProgress&&I.onProgress(M)}m.enqueue(E),y()}})}}});return new Response(p)}else throw new YS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ca.add(e,c);const u=Zr[e];delete Zr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Zr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jS extends bo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ca.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=yl("img");function l(){u(),Ca.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class qS extends bo{constructor(e){super(e)}load(e,t,n,i){const r=new qn,o=new jS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class jc extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Bu=new yt,op=new O,ap=new O;class Gh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oh,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;op.setFromMatrixPosition(e.matrixWorld),t.position.copy(op),ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ap),t.updateMatrixWorld(),Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KS extends Gh{constructor(){super(new _i(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ba*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $S extends jc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new KS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lp=new yt,sl=new O,ku=new O;class ZS extends Gh{constructor(){super(new _i(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sl.setFromMatrixPosition(e.matrixWorld),n.position.copy(sl),ku.copy(n.position),ku.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ku),n.updateMatrixWorld(),i.makeTranslation(-sl.x,-sl.y,-sl.z),lp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lp)}}class JS extends jc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ZS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class QS extends Gh{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pm extends jc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new QS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eE extends jc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class hh{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class tE extends bo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ca.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ca.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class nE{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){zi.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;zi.multiplyQuaternionsFlat(e,o,e,t,e,n),zi.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Vh="\\[\\]\\.:\\/",iE=new RegExp("["+Vh+"]","g"),Wh="[^"+Vh+"]",rE="[^"+Vh.replace("\\.","")+"]",sE=/((?:WC+[\/:])*)/.source.replace("WC",Wh),oE=/(WCOD+)?/.source.replace("WCOD",rE),aE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),lE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),cE=new RegExp("^"+sE+oE+aE+lE+"$"),uE=["material","materials","bones","map"];class hE{constructor(e,t,n){const i=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Nt{constructor(e,t,n){this.path=t,this.parsedPath=n||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,n):new Nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iE,"")}static parseTrackName(e){const t=cE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);uE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=hE;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fE{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:aa,endingEnd:aa};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Xg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jg:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Dh:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Yg;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Wg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=la,i.endingEnd=la):(e?i.endingStart=this.zeroSlopeAtStart?la:aa:i.endingStart=Lc,t?i.endingEnd=this.zeroSlopeAtEnd?la:aa:i.endingEnd=Lc)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const dE=new Float32Array(1);class pE extends Os{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=i[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new nE(Nt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Rm(new Float32Array(2),new Float32Array(2),1,dE),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?uh.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Dh),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new fE(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?uh.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class cp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Yn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);var mE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xh={exports:{}},ma=typeof Reflect=="object"?Reflect:null,up=ma&&typeof ma.apply=="function"?ma.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},bc;ma&&typeof ma.ownKeys=="function"?bc=ma.ownKeys:Object.getOwnPropertySymbols?bc=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:bc=function(e){return Object.getOwnPropertyNames(e)};function _E(s){console&&console.warn&&console.warn(s)}var Im=Number.isNaN||function(e){return e!==e};function zt(){zt.init.call(this)}Xh.exports=zt;Xh.exports.once=yE;zt.EventEmitter=zt;zt.prototype._events=void 0;zt.prototype._eventsCount=0;zt.prototype._maxListeners=void 0;var hp=10;function qc(s){if(typeof s!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof s)}Object.defineProperty(zt,"defaultMaxListeners",{enumerable:!0,get:function(){return hp},set:function(s){if(typeof s!="number"||s<0||Im(s))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+s+".");hp=s}});zt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};zt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Im(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Dm(s){return s._maxListeners===void 0?zt.defaultMaxListeners:s._maxListeners}zt.prototype.getMaxListeners=function(){return Dm(this)};zt.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",r=this._events;if(r!==void 0)i=i&&r.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=r[e];if(l===void 0)return!1;if(typeof l=="function")up(l,this,t);else for(var c=l.length,u=Bm(l,c),n=0;n<c;++n)up(u[n],this,t);return!0};function Um(s,e,t,n){var i,r,o;if(qc(t),r=s._events,r===void 0?(r=s._events=Object.create(null),s._eventsCount=0):(r.newListener!==void 0&&(s.emit("newListener",e,t.listener?t.listener:t),r=s._events),o=r[e]),o===void 0)o=r[e]=t,++s._eventsCount;else if(typeof o=="function"?o=r[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=Dm(s),i>0&&o.length>i&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=s,a.type=e,a.count=o.length,_E(a)}return s}zt.prototype.addListener=function(e,t){return Um(this,e,t,!1)};zt.prototype.on=zt.prototype.addListener;zt.prototype.prependListener=function(e,t){return Um(this,e,t,!0)};function gE(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Nm(s,e,t){var n={fired:!1,wrapFn:void 0,target:s,type:e,listener:t},i=gE.bind(n);return i.listener=t,n.wrapFn=i,i}zt.prototype.once=function(e,t){return qc(t),this.on(e,Nm(this,e,t)),this};zt.prototype.prependOnceListener=function(e,t){return qc(t),this.prependListener(e,Nm(this,e,t)),this};zt.prototype.removeListener=function(e,t){var n,i,r,o,a;if(qc(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,r=o;break}if(r<0)return this;r===0?n.shift():vE(n,r),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};zt.prototype.off=zt.prototype.removeListener;zt.prototype.removeAllListeners=function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var r=Object.keys(n),o;for(i=0;i<r.length;++i)o=r[i],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this};function Om(s,e,t){var n=s._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?xE(i):Bm(i,i.length)}zt.prototype.listeners=function(e){return Om(this,e,!0)};zt.prototype.rawListeners=function(e){return Om(this,e,!1)};zt.listenerCount=function(s,e){return typeof s.listenerCount=="function"?s.listenerCount(e):Fm.call(s,e)};zt.prototype.listenerCount=Fm;function Fm(s){var e=this._events;if(e!==void 0){var t=e[s];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}zt.prototype.eventNames=function(){return this._eventsCount>0?bc(this._events):[]};function Bm(s,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=s[n];return t}function vE(s,e){for(;e+1<s.length;e++)s[e]=s[e+1];s.pop()}function xE(s){for(var e=new Array(s.length),t=0;t<e.length;++t)e[t]=s[t].listener||s[t];return e}function yE(s,e){return new Promise(function(t,n){function i(o){s.removeListener(e,r),n(o)}function r(){typeof s.removeListener=="function"&&s.removeListener("error",i),t([].slice.call(arguments))}km(s,e,r,{once:!0}),e!=="error"&&ME(s,i,{once:!0})})}function ME(s,e,t){typeof s.on=="function"&&km(s,"error",e,t)}function km(s,e,t,n){if(typeof s.on=="function")n.once?s.once(e,t):s.on(e,t);else if(typeof s.addEventListener=="function")s.addEventListener(e,function i(r){n.once&&s.removeEventListener(e,i),t(r)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof s)}var Yh=Xh.exports;class SE extends Yh.EventEmitter{constructor(){super(),this.experience=new Gi,this.canvas=this.experience.canvas,this.deviceType=window.innerWidth<1200?"mobile":"desktop",this.deviceType==="mobile"?(this.width=window.innerWidth,this.height=window.innerHeight/2,this.aspect=this.width/this.height):(this.width=this.canvas.offsetWidth,this.height=window.innerHeight),this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.frustrum=5,window.addEventListener("resize",()=>{this.deviceType!="mobile"&&(this.width=this.canvas.offsetWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.emit("resize"))})}}class EE extends Yh.EventEmitter{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.update()}update(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.emit("update"),window.requestAnimationFrame(()=>this.update())}}function fp(s,e){if(e===qg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===rh||e===tm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===rh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class TE extends bo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CE(t)}),this.register(function(t){return new FE(t)}),this.register(function(t){return new BE(t)}),this.register(function(t){return new kE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new OE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new zE(t)}),this.register(function(t){return new HE(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=hh.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Dc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zm){try{o[Tt.KHR_BINARY_GLTF]=new GE(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new tT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Tt.KHR_MATERIALS_UNLIT:o[h]=new wE;break;case Tt.KHR_DRACO_MESH_COMPRESSION:o[h]=new VE(r,this.dracoLoader);break;case Tt.KHR_TEXTURE_TRANSFORM:o[h]=new WE;break;case Tt.KHR_MESH_QUANTIZATION:o[h]=new XE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function bE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class AE{constructor(e){this.parser=e,this.name=Tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ut(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Pm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new JS(u),c.distance=h;break;case"spot":c=new $S(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ss(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class wE{constructor(){this.name=Tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ts}extendParams(e,t,n){const i=[];e.color=new ut(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,rt))}return Promise.all(i)}}class RE{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class CE{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new st(a,a)}return Promise.all(r)}}class LE{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class PE{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,rt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class IE{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class DE{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ut(a[0],a[1],a[2]),Promise.all(r)}}class UE{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fs}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class NE{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ut(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,rt)),Promise.all(r)}}class OE{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fs}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class FE{constructor(e){this.parser=e,this.name=Tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class BE{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kE{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zE{constructor(e){this.name=Tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class HE{constructor(e){this.name=Tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ki.TRIANGLES&&c.mode!==Ki.TRIANGLE_STRIP&&c.mode!==Ki.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new yt,p=new O,m=new zi,y=new O(1,1,1),v=new US(g.geometry,g.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&y.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,_.compose(p,m,y));for(const E in l)E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);an.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const zm="glTF",ol=12,dp={JSON:1313821514,BIN:5130562};class GE{constructor(e){this.name=Tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ol),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ol,r=new DataView(e,ol);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===dp.JSON){const c=new Uint8Array(e,ol+o,a);this.content=n.decode(c)}else if(l===dp.BIN){const c=ol+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class VE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=fh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=fh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=_a[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],_=l[d];_!==void 0&&(g.normalized=_)}h(f)},a,c)})})}}class WE{constructor(){this.name=Tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class XE{constructor(){this.name=Tt.KHR_MESH_QUANTIZATION}}class Hm extends Ll{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,p=-2*d+3*f,m=d-f,y=1-p,v=m-f+h;for(let E=0;E!==a;E++){const M=o[_+E+a],C=o[_+E+l]*u,S=o[g+E+a],I=o[g+E]*u;r[E]=y*M+v*C+p*S+m*I}return r}}const YE=new zi;class jE extends Hm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return YE.fromArray(r).normalize().toArray(r),r}}const Ki={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_a={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pp={9728:Bn,9729:Si,9984:ih,9985:qp,9986:Ec,9987:yo},mp={33071:Zi,33648:Cc,10497:Sa},zu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ys={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qE={CUBICSPLINE:void 0,LINEAR:Ta,STEP:xl},Hu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Hh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:os})),s.DefaultMaterial}function so(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ss(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $E(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function ZE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function JE(s){let e;const t=s.extensions&&s.extensions[Tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gu(t.attributes):e=s.indices+":"+Gu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Gu(s.targets[n]);return e}function Gu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function dh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const eT=new yt;class tT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new qS(this.options.manager):this.textureLoader=new tE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};so(r,a,i),Ss(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Tt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(hh.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=zu[i.type],a=_a[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Kn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=zu[i.type],c=_a[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(d&&d!==h){const m=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(y);v||(_=new c(a,m*d,i.count*d/u),v=new RS(_,d/u),t.cache.add(y,v)),p=new Bh(v,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),p=new Kn(_,l,g);if(i.sparse!==void 0){const m=zu.SCALAR,y=_a[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,M=new y(o[1],v,i.sparse.count*m),C=new c(o[2],E,i.sparse.count*l);a!==null&&(p=new Kn(p.array.slice(),p.itemSize,p.normalized));for(let S=0,I=M.length;S<I;S++){const x=M[S];if(p.setX(x,C[S*l]),l>=2&&p.setY(x,C[S*l+1]),l>=3&&p.setZ(x,C[S*l+2]),l>=4&&p.setW(x,C[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=pp[f.magFilter]||Si,u.minFilter=pp[f.minFilter]||yo,u.wrapS=mp[f.wrapS]||Sa,u.wrapT=mp[f.wrapT]||Sa,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new qn(_);p.needsUpdate=!0,f(p)}),t.load(hh.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||QE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Tt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new bm,vr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Tm,vr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Hh}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Tt.KHR_MATERIALS_UNLIT]){const h=i[Tt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ut(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,rt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Cr);const u=r.alphaMode||Hu.OPAQUE;if(u===Hu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Hu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ts&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new st(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==Ts&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ts&&(a.emissive=new ut().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Ts&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,rt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Ss(h,r),t.associations.set(h,{materials:e}),r.extensions&&so(i,h,r),h})}createUniqueName(e){const t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return _p(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=JE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Tt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=_p(new Mr,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?KE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],p=o[d];let m;const y=c[d];if(p.mode===Ki.TRIANGLES||p.mode===Ki.TRIANGLE_STRIP||p.mode===Ki.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new LS(_,y):new ki(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Ki.TRIANGLE_STRIP?m.geometry=fp(m.geometry,tm):p.mode===Ki.TRIANGLE_FAN&&(m.geometry=fp(m.geometry,rh));else if(p.mode===Ki.LINES)m=new NS(_,y);else if(p.mode===Ki.LINE_STRIP)m=new zh(_,y);else if(p.mode===Ki.LINE_LOOP)m=new OS(_,y);else if(p.mode===Ki.POINTS)m=new FS(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&ZE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ss(m,r),p.extensions&&so(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&so(i,h[0],r),h[0];const f=new bs;r.extensions&&so(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _i(sm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ss(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new yt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new kh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let y=0,v=f.length;y<v;y++){const E=f[y],M=d[y],C=g[y],S=_[y],I=p[y];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const x=n._createAnimationTracks(E,M,C,S,I);if(x)for(let R=0;R<x.length;R++)m.push(x[R])}return new uh(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,eT)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Em:c.length>1?u=new bs:c.length===1?u=c[0]:u=new an,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ss(u,r),r.extensions&&so(n,u,r),r.matrix!==void 0){const h=new yt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new bs;n.name&&(r.name=i.createUniqueName(n.name)),Ss(r,n),n.extensions&&so(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof vr||f instanceof qn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ys[r.path]===ys.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ys[r.path]){case ys.weights:c=wa;break;case ys.rotation:c=Eo;break;case ys.position:case ys.scale:c=Ra;break;default:switch(n.itemSize){case 1:c=wa;break;case 2:case 3:default:c=Ra;break}break}const u=i.interpolation!==void 0?qE[i.interpolation]:Ta,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+ys[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Eo?jE:Hm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nT(s,e,t){const n=e.attributes,i=new cs;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const u=dh(_a[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new O,l=new O;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=dh(_a[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Fr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function _p(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=fh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ss(s,e),nT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?$E(s,e.targets,t):s})}const Vu=new WeakMap;class iT extends bo{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Dc(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,rt).catch(n)}decodeDracoFile(e,t,n,i,r=yr){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Vu.has(e)){const l=Vu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Vu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Mr;e.index&&t.setIndex(new Kn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Kn(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==rt)return;const n=new ut;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Dc(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=rT.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function rT(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),g=d.attributes.map(_=>_.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const p in u){const m=self[h[p]];let y,v;if(c.useUniqueIDs)v=u[p],y=a.GetAttributeByUniqueId(f,v);else{if(v=a.GetAttributeId(f,o[u[p]]),v===-1)continue;y=a.GetAttribute(f,v)}const E=i(o,a,f,p,m,y);p==="color"&&(E.vertexColorSpace=c.vertexColorSpace),_.attributes.push(E)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,f)),o.destroy(f),_}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,_=g*u.BYTES_PER_ELEMENT,p=r(o,u),m=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,h,p,_,m);const y=new u(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:y,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class sT extends Yh.EventEmitter{constructor(e){super(),this.experience=new Gi,this.renderer=this.experience.renderer,this.assets=e,this.items={},this.queue=this.assets.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loadingManager=new Lm;const e=document.getElementById("loading-screen");console.log("Loading started"),this.loadingManager.onStart=()=>{console.log("Loading manager onStart"),e.style.display="fixed"},this.loadingManager.onLoad=()=>{console.log("Loading manager onLoad"),e.style.display="none"},this.loaders={},this.loaders.gltfLoader=new TE(this.loadingManager),this.loaders.dracoLoader=new iT(this.loadingManager),this.loaders.dracoLoader.setDecoderPath("/draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}startLoading(){for(const e of this.assets)e.type==="glbModel"?this.loaders.gltfLoader.load(e.path,t=>{this.singleAssetLoaded(e,t)}):e.type}singleAssetLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.queue&&this.emit("ready")}}const oT=[{name:"room",type:"glbModel",path:"/models/merged-character2.glb"}],gp={type:"change"},Wu={type:"start"},vp={type:"end"},Mc=new Rl,xp=new Ms,aT=Math.cos(70*sm.DEG2RAD);class lT extends Os{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Uo.ROTATE,MIDDLE:Uo.DOLLY,RIGHT:Uo.PAN},this.touches={ONE:No.ROTATE,TWO:No.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",b),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(gp),n.update(),r=i.NONE},this.update=function(){const U=new O,ue=new zi().setFromUnitVectors(e.up,new O(0,1,0)),Te=ue.clone().invert(),Se=new O,Ae=new zi,je=new O,_t=2*Math.PI;return function(){const be=n.object.position;U.copy(be).sub(n.target),U.applyQuaternion(ue),a.setFromVector3(U),n.autoRotate&&r===i.NONE&&X(x()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Y=n.minAzimuthAngle,pe=n.maxAzimuthAngle;isFinite(Y)&&isFinite(pe)&&(Y<-Math.PI?Y+=_t:Y>Math.PI&&(Y-=_t),pe<-Math.PI?pe+=_t:pe>Math.PI&&(pe-=_t),Y<=pe?a.theta=Math.max(Y,Math.min(pe,a.theta)):a.theta=a.theta>(Y+pe)/2?Math.max(Y,a.theta):Math.min(pe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=Q(a.radius):a.radius=Q(a.radius*c),U.setFromSpherical(a),U.applyQuaternion(Te),be.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let xe=!1;if(n.zoomToCursor&&C){let ct=null;if(n.object.isPerspectiveCamera){const Ct=U.length();ct=Q(Ct*c);const Ft=Ct-ct;n.object.position.addScaledVector(E,Ft),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ct=new O(M.x,M.y,0);Ct.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),xe=!0;const Ft=new O(M.x,M.y,0);Ft.unproject(n.object),n.object.position.sub(Ft).add(Ct),n.object.updateMatrixWorld(),ct=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ct!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ct).add(n.object.position):(Mc.origin.copy(n.object.position),Mc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Mc.direction))<aT?e.lookAt(n.target):(xp.setFromNormalAndCoplanarPoint(n.object.up,n.target),Mc.intersectPlane(xp,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),xe=!0);return c=1,C=!1,xe||Se.distanceToSquared(n.object.position)>o||8*(1-Ae.dot(n.object.quaternion))>o||je.distanceToSquared(n.target)>0?(n.dispatchEvent(gp),Se.copy(n.object.position),Ae.copy(n.object.quaternion),je.copy(n.target),xe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",de),n.domElement.removeEventListener("pointerdown",Qe),n.domElement.removeEventListener("pointercancel",Ge),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",Ge),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",b),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new cp,l=new cp;let c=1;const u=new O,h=new st,f=new st,d=new st,g=new st,_=new st,p=new st,m=new st,y=new st,v=new st,E=new O,M=new st;let C=!1;const S=[],I={};function x(){return 2*Math.PI/60/60*n.autoRotateSpeed}function R(){return Math.pow(.95,n.zoomSpeed)}function X(U){l.theta-=U}function ne(U){l.phi-=U}const F=function(){const U=new O;return function(Te,Se){U.setFromMatrixColumn(Se,0),U.multiplyScalar(-Te),u.add(U)}}(),j=function(){const U=new O;return function(Te,Se){n.screenSpacePanning===!0?U.setFromMatrixColumn(Se,1):(U.setFromMatrixColumn(Se,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Te),u.add(U)}}(),B=function(){const U=new O;return function(Te,Se){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const je=n.object.position;U.copy(je).sub(n.target);let _t=U.length();_t*=Math.tan(n.object.fov/2*Math.PI/180),F(2*Te*_t/Ae.clientHeight,n.object.matrix),j(2*Se*_t/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(Te*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),j(Se*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function le(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(U){if(!n.zoomToCursor)return;C=!0;const ue=n.domElement.getBoundingClientRect(),Te=U.clientX-ue.left,Se=U.clientY-ue.top,Ae=ue.width,je=ue.height;M.x=Te/Ae*2-1,M.y=-(Se/je)*2+1,E.set(M.x,M.y,1).unproject(e).sub(e.position).normalize()}function Q(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function re(U){h.set(U.clientX,U.clientY)}function W(U){$(U),m.set(U.clientX,U.clientY)}function te(U){g.set(U.clientX,U.clientY)}function ye(U){f.set(U.clientX,U.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ue=n.domElement;X(2*Math.PI*d.x/ue.clientHeight),ne(2*Math.PI*d.y/ue.clientHeight),h.copy(f),n.update()}function ge(U){y.set(U.clientX,U.clientY),v.subVectors(y,m),v.y>0?le(R()):v.y<0&&Z(R()),m.copy(y),n.update()}function Ee(U){_.set(U.clientX,U.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),B(p.x,p.y),g.copy(_),n.update()}function De(U){$(U),U.deltaY<0?Z(R()):U.deltaY>0&&le(R()),n.update()}function Pe(U){let ue=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?ne(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ue=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?ne(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ue=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ue=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ue=!0;break}ue&&(U.preventDefault(),n.update())}function ce(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const U=.5*(S[0].pageX+S[1].pageX),ue=.5*(S[0].pageY+S[1].pageY);h.set(U,ue)}}function ht(){if(S.length===1)g.set(S[0].pageX,S[0].pageY);else{const U=.5*(S[0].pageX+S[1].pageX),ue=.5*(S[0].pageY+S[1].pageY);g.set(U,ue)}}function Ce(){const U=S[0].pageX-S[1].pageX,ue=S[0].pageY-S[1].pageY,Te=Math.sqrt(U*U+ue*ue);m.set(0,Te)}function Me(){n.enableZoom&&Ce(),n.enablePan&&ht()}function G(){n.enableZoom&&Ce(),n.enableRotate&&ce()}function Je(U){if(S.length==1)f.set(U.pageX,U.pageY);else{const Te=ee(U),Se=.5*(U.pageX+Te.x),Ae=.5*(U.pageY+Te.y);f.set(Se,Ae)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ue=n.domElement;X(2*Math.PI*d.x/ue.clientHeight),ne(2*Math.PI*d.y/ue.clientHeight),h.copy(f)}function Ne(U){if(S.length===1)_.set(U.pageX,U.pageY);else{const ue=ee(U),Te=.5*(U.pageX+ue.x),Se=.5*(U.pageY+ue.y);_.set(Te,Se)}p.subVectors(_,g).multiplyScalar(n.panSpeed),B(p.x,p.y),g.copy(_)}function Ve(U){const ue=ee(U),Te=U.pageX-ue.x,Se=U.pageY-ue.y,Ae=Math.sqrt(Te*Te+Se*Se);y.set(0,Ae),v.set(0,Math.pow(y.y/m.y,n.zoomSpeed)),le(v.y),m.copy(y)}function We(U){n.enableZoom&&Ve(U),n.enablePan&&Ne(U)}function Mt(U){n.enableZoom&&Ve(U),n.enableRotate&&Je(U)}function Qe(U){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",Ke),n.domElement.addEventListener("pointerup",Ge)),ve(U),U.pointerType==="touch"?J(U):Ot(U))}function Ke(U){n.enabled!==!1&&(U.pointerType==="touch"?me(U):Jt(U))}function Ge(U){Fe(U),S.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",Ke),n.domElement.removeEventListener("pointerup",Ge)),n.dispatchEvent(vp),r=i.NONE}function Ot(U){let ue;switch(U.button){case 0:ue=n.mouseButtons.LEFT;break;case 1:ue=n.mouseButtons.MIDDLE;break;case 2:ue=n.mouseButtons.RIGHT;break;default:ue=-1}switch(ue){case Uo.DOLLY:if(n.enableZoom===!1)return;W(U),r=i.DOLLY;break;case Uo.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;te(U),r=i.PAN}else{if(n.enableRotate===!1)return;re(U),r=i.ROTATE}break;case Uo.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;re(U),r=i.ROTATE}else{if(n.enablePan===!1)return;te(U),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Wu)}function Jt(U){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ye(U);break;case i.DOLLY:if(n.enableZoom===!1)return;ge(U);break;case i.PAN:if(n.enablePan===!1)return;Ee(U);break}}function P(U){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(U.preventDefault(),n.dispatchEvent(Wu),De(U),n.dispatchEvent(vp))}function b(U){n.enabled===!1||n.enablePan===!1||Pe(U)}function J(U){switch(fe(U),S.length){case 1:switch(n.touches.ONE){case No.ROTATE:if(n.enableRotate===!1)return;ce(),r=i.TOUCH_ROTATE;break;case No.PAN:if(n.enablePan===!1)return;ht(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case No.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(),r=i.TOUCH_DOLLY_PAN;break;case No.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;G(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Wu)}function me(U){switch(fe(U),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Je(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Ne(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;We(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Mt(U),n.update();break;default:r=i.NONE}}function de(U){n.enabled!==!1&&U.preventDefault()}function ve(U){S.push(U)}function Fe(U){delete I[U.pointerId];for(let ue=0;ue<S.length;ue++)if(S[ue].pointerId==U.pointerId){S.splice(ue,1);return}}function fe(U){let ue=I[U.pointerId];ue===void 0&&(ue=new st,I[U.pointerId]=ue),ue.set(U.pageX,U.pageY)}function ee(U){const ue=U.pointerId===S[0].pointerId?S[1]:S[0];return I[ue.pointerId]}n.domElement.addEventListener("contextmenu",de),n.domElement.addEventListener("pointerdown",Qe),n.domElement.addEventListener("pointercancel",Ge),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}class cT{constructor(){this.experience=new Gi,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.deviceType=this.experience.sizes.deviceType,this.createPerspectiveCamera(),this.createOrthographicCamera(),this.setOrbitControls()}createPerspectiveCamera(){this.perspectiveCamera=new _i(35,this.sizes.aspect,.1,1e3),this.scene.add(this.perspectiveCamera),this.deviceType==="mobile"?(this.perspectiveCamera.position.x=0,this.perspectiveCamera.position.y=.7,this.perspectiveCamera.position.z=5):(this.perspectiveCamera.position.x=.229975,this.perspectiveCamera.position.y=1.89521,this.perspectiveCamera.position.z=8.20785,this.perspectiveCamera.rotation.x=-.347,this.perspectiveCamera.rotation.y=.02797,this.perspectiveCamera.rotation.z=.010115)}createOrthographicCamera(){this.orthographicCamera=new Xc(-this.sizes.aspect*this.sizes.frustrum/2,this.sizes.aspect*this.sizes.frustrum/2,this.sizes.frustrum/2,-this.sizes.frustrum/2,-10,10),this.orthographicCamera.position.y=3.5,this.orthographicCamera.position.z=5,this.orthographicCamera.rotation.x=-Math.PI/6}setOrbitControls(){this.deviceType==="desktop"?(this.controls=new lT(this.perspectiveCamera,this.canvas),this.controls.target.set(0,1,0),this.controls.enableDampingDamping=!0,this.controls.enableZoom=!1):this.deviceType}resize(){this.perspectiveCamera.aspect=this.sizes.aspect,this.perspectiveCamera.updateProjectionMatrix(),this.orthographicCamera.left=-this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.right=this.sizes.aspect*this.sizes.frustrum/2,this.orthographicCamera.top=this.sizes.frustrum/2,this.orthographicCamera.bottom=-this.sizes.frustrum/2,this.orthographicCamera.updateProjectionMatrix()}update(){this.deviceType==="desktop"&&this.controls.update()}}class uT{constructor(){this.experience=new Gi,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.setRenderer()}setRenderer(){this.renderer=new Sm({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=Ps,this.renderer.toneMapping=Yp,this.renderer.toneMappingExposure=1.75,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Vp,this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}update(){this.renderer.render(this.scene,this.camera.perspectiveCamera)}}function Qr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Gm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},La={duration:.5,overwrite:!1,delay:0},jh,ri,hn,er=1e8,Yt=1/er,ph=Math.PI*2,hT=ph/4,fT=0,Vm=Math.sqrt,dT=Math.cos,pT=Math.sin,kn=function(e){return typeof e=="string"},fn=function(e){return typeof e=="function"},as=function(e){return typeof e=="number"},qh=function(e){return typeof e>"u"},Or=function(e){return typeof e=="object"},Ti=function(e){return e!==!1},Kh=function(){return typeof window<"u"},Sc=function(e){return fn(e)||kn(e)},Wm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},si=Array.isArray,mh=/(?:-?\.?\d|\.)+/gi,Xm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ua=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ym=/[+-]=-?[.\d]+/,jm=/[^,'"\[\]\s]+/gi,mT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,sn,$i,_h,$h,Vi={},Uc={},qm,Km=function(e){return(Uc=To(e,Vi))&&wi},Zh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Nc=function(e,t){return!t&&console.warn(e)},$m=function(e,t){return e&&(Vi[e]=t)&&Uc&&(Uc[e]=t)||Vi},Ml=function(){return 0},_T={suppressEvents:!0,isStart:!0,kill:!1},Ac={suppressEvents:!0,kill:!1},gT={suppressEvents:!0},Jh={},Is=[],gh={},Zm,Fi={},Yu={},yp=30,wc=[],Qh="",ef=function(e){var t=e[0],n,i;if(Or(t)||fn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=wc.length;i--&&!wc[i].targetTest(t););n=wc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new M_(e[i],n)))||e.splice(i,1);return e},_o=function(e){return e._gsap||ef(tr(e))[0]._gsap},Jm=function(e,t,n){return(n=e[t])&&fn(n)?e[t]():qh(n)&&e.getAttribute&&e.getAttribute(t)||n},bi=function(e,t){return(e=e.split(",")).forEach(t)||e},_n=function(e){return Math.round(e*1e5)/1e5||0},jn=function(e){return Math.round(e*1e7)/1e7||0},ga=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},vT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Oc=function(){var e=Is.length,t=Is.slice(0),n,i;for(gh={},Is.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Qm=function(e,t,n,i){Is.length&&!ri&&Oc(),e.render(t,n,i||ri&&t<0&&(e._initted||e._startAt)),Is.length&&!ri&&Oc()},e_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jm).length<2?t:kn(e)?e.trim():e},t_=function(e){return e},ir=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},To=function(e,t){for(var n in t)e[n]=t[n];return e},Mp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Or(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Fc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},pl=function(e){var t=e.parent||sn,n=e.keyframes?xT(si(e.keyframes)):ir;if(Ti(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},yT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},n_=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Kc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Us=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},go=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},MT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vh=function(e,t,n,i){return e._startAt&&(ri?e._startAt.revert(Ac):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},ST=function s(e){return!e||e._ts&&s(e.parent)},Sp=function(e){return e._repeat?Pa(e._tTime,e=e.duration()+e._rDelay)*e:0},Pa=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Bc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},$c=function(e){return e._end=jn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Yt)||0))},Zc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=jn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),$c(e),n._dirty||go(n,e)),e},i_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Bc(e.rawTime(),t),(!t._dur||Pl(0,t.totalDuration(),n)-t._tTime>Yt)&&t.render(n,!0)),go(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Yt}},Pr=function(e,t,n,i){return t.parent&&Us(t),t._start=jn((as(n)?n:n||e!==sn?qi(e,n,t):e._time)+t._delay),t._end=jn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),n_(e,t,"_first","_last",e._sort?"_start":0),xh(t)||(e._recent=t),i||i_(e,t),e._ts<0&&Zc(e,e._tTime),e},r_=function(e,t){return(Vi.ScrollTrigger||Zh("scrollTrigger",t))&&Vi.ScrollTrigger.create(t,e)},s_=function(e,t,n,i,r){if(nf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!ri&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zm!==Bi.frame)return Is.push(e),e._lazy=[r,i],1},ET=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},xh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},TT=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&ET(e)&&!(!e._initted&&xh(e))||(e._ts<0||e._dp._ts<0)&&!xh(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Pl(0,e._tDur,t),u=Pa(l,a),e._yoyo&&u&1&&(o=1-o),u!==Pa(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||ri||i||e._zTime===Yt||!t&&e._zTime){if(!e._initted&&s_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Yt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&vh(e,t,n,!0),e._onUpdate&&!n&&nr(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&nr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Us(e,1),!n&&!ri&&(nr(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ia=function(e,t,n,i){var r=e._repeat,o=jn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:jn(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Zc(e,e._tTime=e._tDur*a),e.parent&&$c(e),n||go(e.parent,e),e},Ep=function(e){return e instanceof Ei?go(e):Ia(e,e._dur)},AT={_start:0,endTime:Ml,totalDuration:Ml},qi=function s(e,t,n){var i=e.labels,r=e._recent||AT,o=e.duration()>=er?r.endTime(!1):e._dur,a,l,c;return kn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(si(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ml=function(e,t,n){var i=as(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ti(l.vars.inherit)&&l.parent;o.immediateRender=Ti(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Tn(t[0],o,t[r+1])},Bs=function(e,t){return e||e===0?t(e):t},Pl=function(e,t,n){return n<e?e:n>t?t:n},ii=function(e,t){return!kn(e)||!(t=mT.exec(e))?"":t[1]},wT=function(e,t,n){return Bs(n,function(i){return Pl(e,t,i)})},yh=[].slice,o_=function(e,t){return e&&Or(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Or(e[0]))&&!e.nodeType&&e!==$i},RT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return kn(i)&&!t||o_(i,1)?(r=n).push.apply(r,tr(i)):n.push(i)})||n},tr=function(e,t,n){return hn&&!t&&hn.selector?hn.selector(e):kn(e)&&!n&&(_h||!Da())?yh.call((t||$h).querySelectorAll(e),0):si(e)?RT(e,n):o_(e)?yh.call(e,0):e?[e]:[]},Mh=function(e){return e=tr(e)[0]||Nc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return tr(t,n.querySelectorAll?n:n===e?Nc("Invalid scope")||$h.createElement("div"):e)}},a_=function(e){return e.sort(function(){return .5-Math.random()})},l_=function(e){if(fn(e))return e;var t=Or(e)?e:{each:e},n=vo(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return kn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,p=o[_],m,y,v,E,M,C,S,I,x;if(!p){if(x=t.grid==="auto"?0:(t.grid||[1,er])[1],!x){for(S=-er;S<(S=g[x++].getBoundingClientRect().left)&&x<_;);x--}for(p=o[_]=[],m=l?Math.min(x,_)*u-.5:i%x,y=x===er?0:l?_*h/x-.5:i/x|0,S=0,I=er,C=0;C<_;C++)v=C%x-m,E=y-(C/x|0),p[C]=M=c?Math.abs(c==="y"?E:v):Vm(v*v+E*E),M>S&&(S=M),M<I&&(I=M);i==="random"&&a_(p),p.max=S-I,p.min=I,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=ii(t.amount||t.each)||0,n=n&&_<0?v_(n):n}return _=(p[f]-p.min)/p.max||0,jn(p.b+(n?n(_):_)*p.v)+p.u}},Sh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=jn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(as(n)?0:ii(n))}},c_=function(e,t){var n=si(e),i,r;return!n&&Or(e)&&(i=n=e.radius||er,e.values?(e=tr(e.values),(r=!as(e[0]))&&(i*=i)):e=Sh(e.increment)),Bs(t,n?fn(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=er,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||as(o)?u:u+ii(o)}:Sh(e))},u_=function(e,t,n,i){return Bs(si(e)?!t:n===!0?!!(n=0):!i,function(){return si(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},CT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},LT=function(e,t){return function(n){return e(parseFloat(n))+(t||ii(n))}},PT=function(e,t,n){return f_(e,t,0,1,n)},h_=function(e,t,n){return Bs(n,function(i){return e[~~t(i)]})},IT=function s(e,t,n){var i=t-e;return si(e)?h_(e,s(0,e.length),t):Bs(n,function(r){return(i+(r-e)%i)%i+e})},DT=function s(e,t,n){var i=t-e,r=i*2;return si(e)?h_(e,s(0,e.length-1),t):Bs(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Sl=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?jm:mh),n+=e.substr(t,i-t)+u_(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},f_=function(e,t,n,i,r){var o=t-e,a=i-n;return Bs(r,function(l){return n+((l-e)/o*a||0)})},UT=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=kn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(si(e)&&!si(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=To(si(e)?[]:{},e));if(!u){for(l in t)tf.call(a,e,l,"get",t[l]);r=function(g){return of(g,a)||(o?e.p:e)}}}return Bs(n,r)},Tp=function(e,t,n){var i=e.labels,r=er,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},nr=function(e,t,n){var i=e.vars,r=i[t],o=hn,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Is.length&&Oc(),a&&(hn=a),u=l?r.apply(c,l):r.call(c),hn=o,u},cl=function(e){return Us(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ri),e.progress()<1&&nr(e,"onInterrupt"),e},ha,d_=[],p_=function(e){if(Kh()&&e){e=!e.name&&e.default||e;var t=e.name,n=fn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ml,render:of,add:tf,kill:$T,modifier:KT,rawVars:0},o={targetTest:0,get:0,getSetter:sf,aliases:{},register:0};if(Da(),e!==i){if(Fi[t])return;ir(i,ir(Fc(e,r),o)),To(i.prototype,To(r,Fc(e,o))),Fi[i.prop=t]=i,e.targetTest&&(wc.push(i),Jh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$m(t,i),e.register&&e.register(wi,i,Ai)}else e&&d_.push(e)},Xt=255,ul={aqua:[0,Xt,Xt],lime:[0,Xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xt],navy:[0,0,128],white:[Xt,Xt,Xt],olive:[128,128,0],yellow:[Xt,Xt,0],orange:[Xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xt,0,0],pink:[Xt,192,203],cyan:[0,Xt,Xt],transparent:[Xt,Xt,Xt,0]},ju=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Xt+.5|0},m_=function(e,t,n){var i=e?as(e)?[e>>16,e>>8&Xt,e&Xt]:0:ul.black,r,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ul[e])i=ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Xt,i&Xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Xt,e&Xt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(mh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=ju(l+1/3,r,o),i[1]=ju(l,r,o),i[2]=ju(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Xm),n&&i.length<4&&(i[3]=1),i}else i=e.match(mh)||ul.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Xt,o=i[1]/Xt,a=i[2]/Xt,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},__=function(e){var t=[],n=[],i=-1;return e.split(Ds).forEach(function(r){var o=r.match(ua)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},bp=function(e,t,n){var i="",r=(e+i).match(Ds),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=m_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=__(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ds,"1").split(ua),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Ds),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Ds=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ul)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),NT=/hsl[a]?\(/,g_=function(e){var t=e.join(" "),n;if(Ds.lastIndex=0,Ds.test(t))return n=NT.test(t),e[1]=bp(e[1],n),e[0]=bp(e[0],n,__(e[1])),!0},El,Bi=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,g=function _(p){var m=s()-i,y=p===!0,v,E,M,C;if(m>e&&(n+=m-t),i+=m,M=i-n,v=M-o,(v>0||y)&&(C=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=v+(v>=r?4:r-v),E=1),y||(l=c(_)),E)for(d=0;d<a.length;d++)a[d](M,f,C,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){qm&&(!_h&&Kh()&&($i=_h=window,$h=$i.document||{},Vi.gsap=wi,($i.gsapVersions||($i.gsapVersions=[])).push(wi.version),Km(Uc||$i.GreenSockGlobals||!$i.gsap&&$i||{}),u=$i.requestAnimationFrame,d_.forEach(p_)),l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},El=1,g(2))},sleep:function(){(u?$i.cancelAnimationFrame:clearTimeout)(l),El=0,c=Ml},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,m,y){var v=m?function(E,M,C,S){p(E,M,C,S),h.remove(v)}:p;return h.remove(p),a[y?"unshift":"push"](v),Da(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),Da=function(){return!El&&Bi.wake()},bt={},OT=/^[\d.\-M][\d.\-,\s]/,FT=/["']/g,BT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(FT,"").trim():+c,i=l.substr(a+1).trim();return t},kT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},zT=function(e){var t=(e+"").split("("),n=bt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[BT(t[1])]:kT(e).split(",").map(e_)):bt._CE&&OT.test(e)?bt._CE("",e):n},v_=function(e){return function(t){return 1-e(1-t)}},x_=function s(e,t){for(var n=e._first,i;n;)n instanceof Ei?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},vo=function(e,t){return e&&(fn(e)?e:bt[e]||zT(e))||t},Ao=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return bi(e,function(a){bt[a]=Vi[a]=r,bt[o=a.toLowerCase()]=n;for(var l in r)bt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=bt[a+"."+l]=r[l]}),r},y_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/ph*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*pT((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:y_(a);return r=ph/r,l.config=function(c,u){return s(e,c,u)},l},Ku=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:y_(n);return i.config=function(r){return s(e,r)},i};bi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ao(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});bt.Linear.easeNone=bt.none=bt.Linear.easeIn;Ao("Elastic",qu("in"),qu("out"),qu());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ao("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ao("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Ao("Circ",function(s){return-(Vm(1-s*s)-1)});Ao("Sine",function(s){return s===1?1:-dT(s*hT)+1});Ao("Back",Ku("in"),Ku("out"),Ku());bt.SteppedEase=bt.steps=Vi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Yt;return function(a){return((i*Pl(0,o,a)|0)+r)*n}}};La.ease=bt["quad.out"];bi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Qh+=s+","+s+"Params,"});var M_=function(e,t){this.id=fT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jm,this.set=t?t.getSetter:sf},Tl=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ia(this,+t.duration,1,1),this.data=t.data,hn&&(this._ctx=hn,hn.data.push(this)),El||Bi.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ia(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Da(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Zc(this,n),!r._dp||r.parent||i_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Yt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Pa(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Yt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Bc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Yt?0:this._rts,this.totalTime(Pl(-Math.abs(this._delay),this._tDur,i),!0),$c(this),MT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Da(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Yt&&(this._tTime-=Yt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pr(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ti(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=gT);var i=ri;return ri=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ri=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ep(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ep(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qi(this,n),Ti(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ti(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Yt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Yt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=fn(n)?n:t_,a=function(){var c=i.then;i.then=null,fn(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){cl(this)},s}();ir(Tl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Yt,_prom:0,_ps:!1,_rts:1});var Ei=function(s){Gm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ti(n.sortChildren),sn&&Pr(n.parent||sn,Qr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&r_(Qr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return ml(0,arguments,this),this},t.from=function(i,r,o){return ml(1,arguments,this),this},t.fromTo=function(i,r,o,a){return ml(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,pl(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Tn(i,r,qi(this,o),1),this},t.call=function(i,r,o){return Pr(this,Tn.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Tn(i,o,qi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,pl(o).immediateRender=Ti(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,pl(a).immediateRender=Ti(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:jn(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,p,m,y,v,E,M,C,S;if(this!==sn&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,E=this._start,v=this._ts,m=!v,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=jn(u%p),u===l?(_=this._repeat,f=c):(_=~~(u/p),_&&_===u/p&&(f=c,_--),f>c&&(f=c)),M=Pa(this._tTime,p),!a&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),C&&_&1&&(f=c-f,S=1),_!==M&&!this._lock){var I=C&&M&1,x=I===(C&&_&1);if(_<M&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(S?0:jn(_*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&nr(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;x_(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=bT(this,jn(a),jn(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!_&&(nr(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-Yt);break}}d=g}else{d=this._last;for(var R=i<0?i:f;d;){if(g=d._prev,(d._act||R<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,r,o||ri&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=R?-Yt:Yt);break}}d=g}}if(y&&!r&&(this.pause(),y.render(f>=a?0:-Yt)._zTime=f>=a?1:-1,this._ts))return this._start=E,$c(this),this.render(i,r,o);this._onUpdate&&!r&&nr(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Us(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(nr(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(as(r)||(r=qi(this,r,i)),!(i instanceof Tl)){if(si(i))return i.forEach(function(a){return o.add(a,r)}),this;if(kn(i))return this.addLabel(i,r);if(fn(i))i=Tn.delayedCall(0,i);else return this}return this!==i?Pr(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-er);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Tn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return kn(i)?this.removeLabel(i):fn(i)?this.killTweensOf(i):(Kc(this,i),i===this._recent&&(this._recent=this._last),go(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jn(Bi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=qi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Tn.delayedCall(0,r||Ml,o);return a.data="isPause",this._hasPause=1,Pr(this,a,qi(this,i))},t.removePause=function(i){var r=this._first;for(i=qi(this,i);r;)r._start===i&&r.data==="isPause"&&Us(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)As!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=tr(i),l=this._first,c=as(r),u;l;)l instanceof Tn?vT(l._targets,a)&&(c?(!As||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=qi(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Tn.to(o,ir({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Yt,onStart:function(){if(o.pause(),!d){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Ia(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,ir({startAt:{time:qi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Tp(this,qi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Tp(this,qi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Yt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return go(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),go(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=er,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ia(o,o===sn&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(sn._ts&&(Qm(sn,Bc(i,sn)),Zm=Bi.frame),Bi.frame>=yp){yp+=Hi.autoSleep||120;var r=sn._first;if((!r||!r._ts)&&Hi.autoSleep&&Bi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Bi.sleep()}}},e}(Tl);ir(Ei.prototype,{_lock:0,_hasPause:0,_forcing:0});var HT=function(e,t,n,i,r,o,a){var l=new Ai(this._pt,e,t,0,1,w_,null,r),c=0,u=0,h,f,d,g,_,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Sl(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(Xu)||[];h=Xu.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ga(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Xu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ym.test(i)||m)&&(l.e=0),this._pt=l,l},tf=function(e,t,n,i,r,o,a,l,c,u){fn(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:fn(h)?c?e[t.indexOf("set")||!fn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=fn(h)?c?YT:b_:rf,g;if(kn(i)&&(~i.indexOf("random(")&&(i=Sl(i)),i.charAt(1)==="="&&(g=ga(f,i)+(ii(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Eh)return!isNaN(f*i)&&i!==""?(g=new Ai(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?qT:A_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Zh(t,i),HT.call(this,e,t,f,i,d,l||Hi.stringFilter,c))},GT=function(e,t,n,i,r){if(fn(e)&&(e=_l(e,r,t,n,i)),!Or(e)||e.style&&e.nodeType||si(e)||Wm(e))return kn(e)?_l(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=_l(e[a],r,t,n,i);return o},S_=function(e,t,n,i,r,o){var a,l,c,u;if(Fi[e]&&(a=new Fi[e]).init(r,a.rawVars?t[e]:GT(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Ai(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==ha))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},As,Eh,nf=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,_=i.autoRevert,p=e._dur,m=e._startAt,y=e._targets,v=e.parent,E=v&&v.data==="nested"?v.vars.targets:y,M=e._overwrite==="auto"&&!jh,C=e.timeline,S,I,x,R,X,ne,F,j,B,le,Z,$,Q;if(C&&(!g||!r)&&(r="none"),e._ease=vo(r,La.ease),e._yEase=d?v_(vo(d===!0?r:d,La.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!C&&!!i.runBackwards,!C||g&&!i.stagger){if(j=y[0]?_o(y[0]).harness:0,$=j&&i[j.prop],S=Fc(i,Jh),m&&(m._zTime<0&&m.progress(1),t<0&&f&&a&&!_?m.render(-1,!0):m.revert(f&&p?Ac:_T),m._lazy=0),o){if(Us(e._startAt=Tn.set(y,ir({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!m&&Ti(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ri||!a&&!_)&&e._startAt.revert(Ac),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!m){if(t&&(a=!1),x=ir({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Ti(l),immediateRender:a,stagger:0,parent:v},S),$&&(x[j.prop]=$),Us(e._startAt=Tn.set(y,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ri?e._startAt.revert(Ac):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Yt,Yt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Ti(l)||l&&!p,I=0;I<y.length;I++){if(X=y[I],F=X._gsap||ef(y)[I]._gsap,e._ptLookup[I]=le={},gh[F.id]&&Is.length&&Oc(),Z=E===y?I:E.indexOf(X),j&&(B=new j).init(X,$||S,e,Z,E)!==!1&&(e._pt=R=new Ai(e._pt,X,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(re){le[re]=R}),B.priority&&(ne=1)),!j||$)for(x in S)Fi[x]&&(B=S_(x,S,e,Z,X,E))?B.priority&&(ne=1):le[x]=R=tf.call(e,X,x,"get",S[x],Z,E,0,i.stringFilter);e._op&&e._op[I]&&e.kill(X,e._op[I]),M&&e._pt&&(As=e,sn.killTweensOf(X,le,e.globalTime(t)),Q=!e.parent,As=0),e._pt&&l&&(gh[F.id]=1)}ne&&R_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,g&&t<=0&&C.render(er,!0,!0)},VT=function(e,t,n,i,r,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Eh=1,e.vars[t]="+=0",nf(e,a),Eh=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=_n(n)+ii(u.e)),u.b&&(u.b=c.s+ii(u.b))},WT=function(e,t){var n=e[0]?_o(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=To({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},XT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(si(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},_l=function(e,t,n,i,r){return fn(e)?e.call(t,n,i,r):kn(e)&&~e.indexOf("random(")?Sl(e):e},E_=Qh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",T_={};bi(E_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return T_[s]=1});var Tn=function(s){Gm(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:pl(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=i.parent||sn,v=(si(n)||Wm(n)?as(n[0]):"length"in i)?[n]:tr(n),E,M,C,S,I,x,R,X;if(a._targets=v.length?ef(v):Nc("GSAP target "+n+" not found. https://greensock.com",!Hi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Sc(c)||Sc(u)){if(i=a.vars,E=a.timeline=new Ei({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),E.kill(),E.parent=E._dp=Qr(a),E._start=0,f||Sc(c)||Sc(u)){if(S=v.length,R=f&&l_(f),Or(f))for(I in f)~E_.indexOf(I)&&(X||(X={}),X[I]=f[I]);for(M=0;M<S;M++)C=Fc(i,T_),C.stagger=0,m&&(C.yoyoEase=m),X&&To(C,X),x=v[M],C.duration=+_l(c,Qr(a),M,x,v),C.delay=(+_l(u,Qr(a),M,x,v)||0)-a._delay,!f&&S===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),E.to(x,C,R?R(M,x,v):0),E._ease=bt.none;E.duration()?c=u=0:a.timeline=0}else if(g){pl(ir(E.vars.defaults,{ease:"none"})),E._ease=vo(g.ease||i.ease||"none");var ne=0,F,j,B;if(si(g))g.forEach(function(le){return E.to(v,le,">")}),E.duration();else{C={};for(I in g)I==="ease"||I==="easeEach"||XT(I,g[I],C,g.easeEach);for(I in C)for(F=C[I].sort(function(le,Z){return le.t-Z.t}),ne=0,M=0;M<F.length;M++)j=F[M],B={ease:j.e,duration:(j.t-(M?F[M-1].t:0))/100*c},B[I]=j.v,E.to(v,B,ne),ne+=B.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return d===!0&&!jh&&(As=Qr(a),sn.killTweensOf(v),As=0),Pr(y,Qr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===jn(y._time)&&Ti(h)&&ST(Qr(a))&&y.data!=="nested")&&(a._tTime=-Yt,a.render(Math.max(0,-u)||0)),p&&r_(Qr(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Yt&&!u?l:i<Yt?0:i,f,d,g,_,p,m,y,v,E;if(!c)TT(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(f=jn(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),m=this._yoyo&&g&1,m&&(E=this._yEase,f=c-f),p=Pa(this._tTime,_),f===a&&!o&&this._initted)return this._tTime=h,this;g!==p&&(v&&this._yEase&&x_(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=o=1,this.render(jn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(s_(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(E||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!a&&!r&&!g&&(nr(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:!f&&m?-Yt:v._dur*v._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&vh(this,i,r,o),nr(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&nr(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&vh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Us(this,1),!r&&!(u&&!a)&&(h||a||m)&&(nr(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a){El||Bi.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||nf(this,l),c=this._ease(l/this._dur),VT(this,i,r,o,a,c,l)?this.resetTo(i,r,o,a):(Zc(this,0),this.parent||n_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?cl(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,As&&As.vars.overwrite!==!0)._first||cl(this),this.parent&&o!==this.timeline.totalDuration()&&Ia(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?tr(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,p,m;if((!r||r==="all")&&yT(a,l))return r==="all"&&(this._pt=0),cl(this);for(h=this._op=this._op||[],r!=="all"&&(kn(r)&&(_={},bi(r,function(y){return _[y]=1}),r=_),r=WT(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],r==="all"?(h[m]=r,g=f,d={}):(d=h[m]=h[m]||{},g=r);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Kc(this,p,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&cl(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ml(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return ml(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return sn.killTweensOf(i,r,o)},e}(Tl);ir(Tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bi("staggerTo,staggerFrom,staggerFromTo",function(s){Tn[s]=function(){var e=new Ei,t=yh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var rf=function(e,t,n){return e[t]=n},b_=function(e,t,n){return e[t](n)},YT=function(e,t,n,i){return e[t](i.fp,n)},jT=function(e,t,n){return e.setAttribute(t,n)},sf=function(e,t){return fn(e[t])?b_:qh(e[t])&&e.setAttribute?jT:rf},A_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},w_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},of=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},KT=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},$T=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Kc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ZT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},R_=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Ai=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||A_,this.d=l||this,this.set=c||rf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ZT,this.m=n,this.mt=r,this.tween=i},s}();bi(Qh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Jh[s]=1});Vi.TweenMax=Vi.TweenLite=Tn;Vi.TimelineLite=Vi.TimelineMax=Ei;sn=new Ei({sortChildren:!1,defaults:La,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hi.stringFilter=g_;var xo=[],Rc={},JT=[],Ap=0,QT=0,$u=function(e){return(Rc[e]||JT).map(function(t){return t()})},Th=function(){var e=Date.now(),t=[];e-Ap>2&&($u("matchMediaInit"),xo.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=$i.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),$u("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Ap=e,$u("matchMedia"))},C_=function(){function s(t,n){this.selector=n&&Mh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=QT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){fn(n)&&(r=i,i=n,n=fn);var o=this,a=function(){var c=hn,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Mh(r)),hn=o,h=i.apply(o,arguments),fn(h)&&o._r.push(h),hn=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===fn?a(o):n?o[n]=a:a},e.ignore=function(n){var i=hn;hn=null,n(this),hn=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Tn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Tn)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var a=xo.length;a--;)xo[a].id===this.id&&xo.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),eb=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Or(n)||(n={matches:n});var o=new C_(0,r||this.scope),a=o.conditions={},l,c,u;hn&&!o.selector&&(o.selector=hn.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=$i.matchMedia(n[c]),l&&(xo.indexOf(o)<0&&xo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Th):l.addEventListener("change",Th)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),kc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return p_(i)})},timeline:function(e){return new Ei(e)},getTweensOf:function(e,t){return sn.getTweensOf(e,t)},getProperty:function(e,t,n,i){kn(e)&&(e=tr(e)[0]);var r=_o(e||{}).get,o=n?t_:e_;return n==="native"&&(n=""),e&&(t?o((Fi[t]&&Fi[t].get||r)(e,t,n,i)):function(a,l,c){return o((Fi[a]&&Fi[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=tr(e),e.length>1){var i=e.map(function(u){return wi.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Fi[t],a=_o(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ha._pt=0,h.init(e,n?u+n:u,ha,0,[e]),h.render(1,h),ha._pt&&of(1,ha)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=wi.to(e,To((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return sn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vo(e.ease,La.ease)),Mp(La,e||{})},config:function(e){return Mp(Hi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Fi[a]&&!Vi[a]&&Nc(t+" effect requires "+a+" plugin.")}),Yu[t]=function(a,l,c){return n(tr(a),ir(l||{},r),c)},o&&(Ei.prototype[t]=function(a,l,c){return this.add(Yu[t](a,Or(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){bt[e]=vo(t)},parseEase:function(e,t){return arguments.length?vo(e,t):bt},getById:function(e){return sn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ei(e),i,r;for(n.smoothChildTiming=Ti(e.smoothChildTiming),sn.remove(n),n._dp=0,n._time=n._tTime=sn._time,i=sn._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Tn&&i.vars.onComplete===i._targets[0]))&&Pr(n,i,i._start-i._delay),i=r;return Pr(sn,n,0),n},context:function(e,t){return e?new C_(e,t):hn},matchMedia:function(e){return new eb(e)},matchMediaRefresh:function(){return xo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Th()},addEventListener:function(e,t){var n=Rc[e]||(Rc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Rc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:IT,wrapYoyo:DT,distribute:l_,random:u_,snap:c_,normalize:PT,getUnit:ii,clamp:wT,splitColor:m_,toArray:tr,selector:Mh,mapRange:f_,pipe:CT,unitize:LT,interpolate:UT,shuffle:a_},install:Km,effects:Yu,ticker:Bi,updateRoot:Ei.updateRoot,plugins:Fi,globalTimeline:sn,core:{PropTween:Ai,globals:$m,Tween:Tn,Timeline:Ei,Animation:Tl,getCache:_o,_removeLinkedListItem:Kc,reverting:function(){return ri},context:function(e){return e&&hn&&(hn.data.push(e),e._ctx=hn),hn},suppressOverwrites:function(e){return jh=e}}};bi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return kc[s]=Tn[s]});Bi.add(Ei.updateRoot);ha=kc.to({},{duration:0});var tb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},nb=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=tb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Zu=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(kn(r)&&(l={},bi(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}nb(a,r)}}}},wi=kc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)ri?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Zu("roundProps",Sh),Zu("modifiers"),Zu("snap",c_))||kc;Tn.version=Ei.version=wi.version="3.12.2";qm=1;Kh()&&Da();bt.Power0;bt.Power1;bt.Power2;bt.Power3;bt.Power4;bt.Linear;bt.Quad;bt.Cubic;bt.Quart;bt.Quint;bt.Strong;bt.Elastic;bt.Back;bt.SteppedEase;bt.Bounce;bt.Sine;bt.Expo;bt.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wp,ws,va,af,ho,Rp,lf,ib=function(){return typeof window<"u"},ls={},co=180/Math.PI,xa=Math.PI/180,ea=Math.atan2,Cp=1e8,cf=/([A-Z])/g,rb=/(left|right|width|margin|padding|x)/i,sb=/[\s,\(]\S/,Dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ob=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ab=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},L_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},P_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cb=function(e,t,n){return e.style[t]=n},ub=function(e,t,n){return e.style.setProperty(t,n)},hb=function(e,t,n){return e._gsap[t]=n},fb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},db=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},pb=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},on="transform",xr=on+"Origin",mb=function s(e,t){var n=this,i=this.target,r=i.style;if(e in ls&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Dr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ts(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:ts(i,e);else return Dr.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(on)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(xr,t,"")),e=on}(r||t)&&this.props.push(e,t,r[e])},I_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},_b=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(cf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=lf(),(!r||!r.isStart)&&!n[on]&&(I_(n),i.uncache=1)}},D_=function(e,t){var n={target:e,props:[],revert:_b,save:mb};return e._gsap||wi.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},U_,Ah=function(e,t){var n=ws.createElementNS?ws.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ws.createElement(e);return n.style?n:ws.createElement(e)},Nr=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ua(t)||t,1)||""},Lp="O,Moz,ms,Ms,Webkit".split(","),Ua=function(e,t,n){var i=t||ho,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Lp[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Lp[o]:"")+e},wh=function(){ib()&&window.document&&(wp=window,ws=wp.document,va=ws.documentElement,ho=Ah("div")||{style:{}},Ah("div"),on=Ua(on),xr=on+"Origin",ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",U_=!!Ua("perspective"),lf=wi.core.reverting,af=1)},Ju=function s(e){var t=Ah("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(va.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),va.removeChild(t),this.style.cssText=r,o},Pp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},N_=function(e){var t;try{t=e.getBBox()}catch{t=Ju.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ju||(t=Ju.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Pp(e,["x","cx","x1"])||0,y:+Pp(e,["y","cy","y1"])||0,width:0,height:0}:t},O_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&N_(e))},bl=function(e,t){if(t){var n=e.style;t in ls&&t!==xr&&(t=on),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(cf,"-$1").toLowerCase())):n.removeAttribute(t)}},Rs=function(e,t,n,i,r,o){var a=new Ai(e._pt,t,n,0,1,o?P_:L_);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Ip={deg:1,rad:1,turn:1},gb={grid:1,flex:1},Ns=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ho.style,l=rb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,p,m;return i===o||!r||Ip[i]||Ip[o]?r:(o!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&O_(e),(d||o==="%")&&(ls[t]||~t.indexOf("adius"))?(g=m?e.getBBox()[l?"width":"height"]:e[u],_n(d?r/g*h:r/100*g)):(a[l?"width":"height"]=h+(f?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ws||!_.appendChild)&&(_=ws.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Bi.time&&!p.uncache?_n(r/p.width*h):((d||o==="%")&&!gb[Nr(_,"display")]&&(a.position=Nr(e,"position")),_===e&&(a.position="static"),_.appendChild(ho),g=ho[u],_.removeChild(ho),a.position="absolute",l&&d&&(p=_o(_),p.time=Bi.time,p.width=_[u]),_n(f?g*r/h:g&&r?h/g*r:0))))},ts=function(e,t,n,i){var r;return af||wh(),t in Dr&&t!=="transform"&&(t=Dr[t],~t.indexOf(",")&&(t=t.split(",")[0])),ls[t]&&t!=="transform"?(r=wl(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Hc(Nr(e,xr))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=zc[t]&&zc[t](e,t,n)||Nr(e,t)||Jm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ns(e,t,r,n)+n:r},vb=function(e,t,n,i){if(!n||n==="none"){var r=Ua(t,e,1),o=r&&Nr(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Nr(e,"borderTopColor"))}var a=new Ai(this._pt,e.style,t,0,1,w_),l=0,c=0,u,h,f,d,g,_,p,m,y,v,E,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Nr(e,t)||i,e.style[t]=n),u=[n,i],g_(u),n=u[0],i=u[1],f=n.match(ua)||[],M=i.match(ua)||[],M.length){for(;h=ua.exec(i);)p=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(d=parseFloat(_)||0,E=_.substr((d+"").length),p.charAt(1)==="="&&(p=ga(d,p)+E),m=parseFloat(p),v=p.substr((m+"").length),l=ua.lastIndex-v.length,v||(v=v||Hi.units[t]||E,l===i.length&&(i+=v,a.e+=v)),E!==v&&(d=Ns(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?P_:L_;return Ym.test(i)&&(a.e=0),this._pt=a,a},Dp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Dp[n]||n,t[1]=Dp[i]||i,t.join(" ")},yb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ls[a]&&(l=1,a=a==="transformOrigin"?xr:on),bl(n,a);l&&(bl(n,on),o&&(o.svg&&n.removeAttribute("transform"),wl(n,1),o.uncache=1,I_(i)))}},zc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Ai(e._pt,t,n,0,0,yb);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Al=[1,0,0,1,0,0],F_={},B_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Up=function(e){var t=Nr(e,on);return B_(t)?Al:t.substr(7).match(Xm).map(_n)},uf=function(e,t){var n=e._gsap||_o(e),i=e.style,r=Up(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Al:r):(r===Al&&!e.offsetParent&&e!==va&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,va.appendChild(e)),r=Up(e),l?i.display=l:bl(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):va.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Rh=function(e,t,n,i,r,o){var a=e._gsap,l=r||uf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],v=t.split(" "),E=parseFloat(v[0])||0,M=parseFloat(v[1])||0,C,S,I,x;n?l!==Al&&(S=d*p-g*_)&&(I=E*(p/S)+M*(-_/S)+(_*y-p*m)/S,x=E*(-g/S)+M*(d/S)-(d*y-g*m)/S,E=I,M=x):(C=N_(e),E=C.x+(~v[0].indexOf("%")?E/100*C.width:E),M=C.y+(~(v[1]||v[0]).indexOf("%")?M/100*C.height:M)),i||i!==!1&&a.smooth?(m=E-c,y=M-u,a.xOffset=h+(m*d+y*_)-m,a.yOffset=f+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[xr]="0px 0px",o&&(Rs(o,a,"xOrigin",c,E),Rs(o,a,"yOrigin",u,M),Rs(o,a,"xOffset",h,a.xOffset),Rs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",E+" "+M)},wl=function(e,t){var n=e._gsap||new M_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Nr(e,xr)||"0",u,h,f,d,g,_,p,m,y,v,E,M,C,S,I,x,R,X,ne,F,j,B,le,Z,$,Q,re,W,te,ye,ge,Ee;return u=h=f=_=p=m=y=v=E=0,d=g=1,n.svg=!!(e.getCTM&&O_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[on]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[on]!=="none"?l[on]:"")),i.scale=i.rotate=i.translate="none"),S=uf(e,n.svg),n.svg&&(n.uncache?($=e.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),Rh(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,S)),M=n.xOrigin||0,C=n.yOrigin||0,S!==Al&&(X=S[0],ne=S[1],F=S[2],j=S[3],u=B=S[4],h=le=S[5],S.length===6?(d=Math.sqrt(X*X+ne*ne),g=Math.sqrt(j*j+F*F),_=X||ne?ea(ne,X)*co:0,y=F||j?ea(F,j)*co+_:0,y&&(g*=Math.abs(Math.cos(y*xa))),n.svg&&(u-=M-(M*X+C*F),h-=C-(M*ne+C*j))):(Ee=S[6],ye=S[7],re=S[8],W=S[9],te=S[10],ge=S[11],u=S[12],h=S[13],f=S[14],I=ea(Ee,te),p=I*co,I&&(x=Math.cos(-I),R=Math.sin(-I),Z=B*x+re*R,$=le*x+W*R,Q=Ee*x+te*R,re=B*-R+re*x,W=le*-R+W*x,te=Ee*-R+te*x,ge=ye*-R+ge*x,B=Z,le=$,Ee=Q),I=ea(-F,te),m=I*co,I&&(x=Math.cos(-I),R=Math.sin(-I),Z=X*x-re*R,$=ne*x-W*R,Q=F*x-te*R,ge=j*R+ge*x,X=Z,ne=$,F=Q),I=ea(ne,X),_=I*co,I&&(x=Math.cos(I),R=Math.sin(I),Z=X*x+ne*R,$=B*x+le*R,ne=ne*x-X*R,le=le*x-B*R,X=Z,B=$),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=_n(Math.sqrt(X*X+ne*ne+F*F)),g=_n(Math.sqrt(le*le+Ee*Ee)),I=ea(B,le),y=Math.abs(I)>2e-4?I*co:0,E=ge?1/(ge<0?-ge:ge):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!B_(Nr(e,on)),Z&&e.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=_n(d),n.scaleY=_n(g),n.rotation=_n(_)+a,n.rotationX=_n(p)+a,n.rotationY=_n(m)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=E+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[xr]=Hc(c)),n.xOffset=n.yOffset=0,n.force3D=Hi.force3D,n.renderTransform=n.svg?Sb:U_?k_:Mb,n.uncache=0,n},Hc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qu=function(e,t,n){var i=ii(t);return _n(parseFloat(t)+parseFloat(Ns(e,"x",n+"px",i)))+i},Mb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,k_(e,t)},oo="0deg",al="0px",ao=") ",k_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,v=n.zOrigin,E="",M=m==="auto"&&e&&e!==1||m===!0;if(v&&(h!==oo||u!==oo)){var C=parseFloat(u)*xa,S=Math.sin(C),I=Math.cos(C),x;C=parseFloat(h)*xa,x=Math.cos(C),o=Qu(y,o,S*x*-v),a=Qu(y,a,-Math.sin(C)*-v),l=Qu(y,l,I*x*-v+v)}p!==al&&(E+="perspective("+p+ao),(i||r)&&(E+="translate("+i+"%, "+r+"%) "),(M||o!==al||a!==al||l!==al)&&(E+=l!==al||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ao),c!==oo&&(E+="rotate("+c+ao),u!==oo&&(E+="rotateY("+u+ao),h!==oo&&(E+="rotateX("+h+ao),(f!==oo||d!==oo)&&(E+="skew("+f+", "+d+ao),(g!==1||_!==1)&&(E+="scale("+g+", "+_+ao),y.style[on]=E||"translate(0, 0)"},Sb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,v=parseFloat(o),E=parseFloat(a),M,C,S,I,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=xa,c*=xa,M=Math.cos(l)*h,C=Math.sin(l)*h,S=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(u*=xa,x=Math.tan(c-u),x=Math.sqrt(1+x*x),S*=x,I*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),M*=x,C*=x)),M=_n(M),C=_n(C),S=_n(S),I=_n(I)):(M=h,I=f,C=S=0),(v&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(v=Ns(d,"x",o,"px"),E=Ns(d,"y",a,"px")),(g||_||p||m)&&(v=_n(v+g-(g*M+_*S)+p),E=_n(E+_-(g*C+_*I)+m)),(i||r)&&(x=d.getBBox(),v=_n(v+i/100*x.width),E=_n(E+r/100*x.height)),x="matrix("+M+","+C+","+S+","+I+","+v+","+E+")",d.setAttribute("transform",x),y&&(d.style[on]=x)},Eb=function(e,t,n,i,r){var o=360,a=kn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?co:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Cp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Cp)%o-~~(c/o)*o)),e._pt=f=new Ai(e._pt,t,n,i,c,ob),f.e=u,f.u="deg",e._props.push(n),f},Np=function(e,t){for(var n in t)e[n]=t[n];return e},Tb=function(e,t,n){var i=Np({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[on]=t,a=wl(n,1),bl(n,on),n.setAttribute("transform",c)):(c=getComputedStyle(n)[on],o[on]=t,a=wl(n,1),o[on]=c);for(l in ls)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=ii(c),g=ii(u),h=d!==g?Ns(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Ai(e._pt,a,l,h,f-h,bh),e._pt.u=g||0,e._props.push(l));Np(a,i)};bi("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});zc[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return ts(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var z_={name:"css",register:wh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,p,m,y,v,E,M,C,S,I;af||wh(),this.styles=this.styles||D_(e),I=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Fi[_]&&S_(_,t,n,i,e,r)))){if(d=typeof u,g=zc[_],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Sl(u)),g)g(this,e,_,u,n)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ds.lastIndex=0,Ds.test(c)||(p=ii(c),m=ii(u)),m?p!==m&&(c=Ns(e,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),I.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],kn(c)&&~c.indexOf("random(")&&(c=Sl(c)),ii(c+"")||(c+=Hi.units[_]||ii(ts(e,_))||""),(c+"").charAt(1)==="="&&(c=ts(e,_))):c=ts(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in Dr&&(_==="autoAlpha"&&(f===1&&ts(e,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,a.visibility),Rs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Dr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ls,v){if(this.styles.save(_),E||(M=e._gsap,M.renderTransform&&!t.parseTransform||wl(e,t.parseTransform),C=t.smoothOrigin!==!1&&M.smooth,E=this._pt=new Ai(this._pt,a,on,0,1,M.renderTransform,M,0,-1),E.dep=1),_==="scale")this._pt=new Ai(this._pt,M,"scaleY",M.scaleY,(y?ga(M.scaleY,y+h):h)-M.scaleY||0,bh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(xr,0,a[xr]),u=xb(u),M.svg?Rh(e,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==M.zOrigin&&Rs(this,M,"zOrigin",M.zOrigin,m),Rs(this,a,_,Hc(c),Hc(u)));continue}else if(_==="svgOrigin"){Rh(e,u,1,C,0,this);continue}else if(_ in F_){Eb(this,M,_,f,y?ga(f,y+u):u);continue}else if(_==="smoothOrigin"){Rs(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){Tb(this,u,e);continue}}else _ in a||(_=Ua(_)||_);if(v||(h||h===0)&&(f||f===0)&&!sb.test(u)&&_ in a)p=(c+"").substr((f+"").length),h||(h=0),m=ii(u)||(_ in Hi.units?Hi.units[_]:p),p!==m&&(f=Ns(e,_,c,m)),this._pt=new Ai(this._pt,v?M:a,_,f,(y?ga(f,y+h):h)-f,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?lb:bh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=ab);else if(_ in a)vb.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,r);else if(_!=="parseTransform"){Zh(_,u);continue}v||(_ in a?I.push(_,0,a[_]):I.push(_,1,c||e[_])),o.push(_)}}S&&R_(this)},render:function(e,t){if(t.tween._time||!lf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ts,aliases:Dr,getSetter:function(e,t,n){var i=Dr[t];return i&&i.indexOf(",")<0&&(t=i),t in ls&&t!==xr&&(e._gsap.x||ts(e,"x"))?n&&Rp===n?t==="scale"?fb:hb:(Rp=n||{})&&(t==="scale"?db:pb):e.style&&!qh(e.style[t])?cb:~t.indexOf("-")?ub:sf(e,t)},core:{_removeProperty:bl,_getMatrix:uf}};wi.utils.checkPrefix=Ua;wi.core.getStyleSaver=D_;(function(s,e,t,n){var i=bi(s+","+e+","+t,function(r){ls[r]=1});bi(e,function(r){Hi.units[r]="deg",F_[r]=1}),Dr[i[13]]=s+","+e,bi(n,function(r){var o=r.split(":");Dr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Hi.units[s]="px"});wi.registerPlugin(z_);var gl=wi.registerPlugin(z_)||wi;gl.core.Tween;let bb=class{constructor(){this.experience=new Gi,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.room=this.resources.items.room,this.actualRoom=this.room.scene,this.lerp={current:0,target:0,ease:.1},this.setModel(),this.setAnimation(),this.onMouseMove()}setModel(){this.actualRoom.children.forEach(e=>{e.castShadow=!0,e.receiveShadow=!0,e instanceof bs&&e.children.forEach(t=>{t.castShadow=!0,t.receiveShadow=!0}),e.name==="Screen"&&(e.material=new Ts({map:this.resources.items.screen}))}),this.scene.add(this.actualRoom),this.actualRoom.scale.set(.5,.5,.5),this.actualRoom.rotation.y=0}setAnimation(){this.mixer=new pE(this.actualRoom),this.typing=this.mixer.clipAction(this.room.animations[1]),this.typing.play()}onMouseMove(){window.addEventListener("mousemove",e=>{this.rotation=(e.clientX-window.innerWidth/2)*2/window.innerWidth,this.lerp.target=this.rotation*.05})}resize(){}update(){this.mixer.update(this.time.delta*.001),this.lerp.current=gl.utils.interpolate(this.lerp.current,this.lerp.target,this.lerp.ease),this.actualRoom.rotation.y=this.lerp.current,this.mixer.update(this.time.delta*9e-4)}};class Ab{constructor(){this.experience=new Gi,this.scene=this.experience.scene,this.setFloor()}setFloor(){this.geometry=new Wc(100,100),this.material=new BS({opacity:0,color:0,blending:rs,side:gi}),this.plane=new ki(this.geometry,this.material),this.scene.add(this.plane),this.plane.rotation.x=Math.PI/2,this.plane.position.y=-.3,this.plane.receiveShadow=!0}resize(){}update(){}}var Ch={exports:{}};(function(s,e){(function(t,n){n(e)})(mE,function(t){function n(V,T){for(var D=0;D<T.length;D++){var A=T[D];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(V,A.key,A)}}function i(V,T,D){return T&&n(V.prototype,T),D&&n(V,D),V}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var r,o,a,l,c,u,h,f,d,g,_,p,m,y=function(){return r||typeof window<"u"&&(r=window.gsap)&&r.registerPlugin&&r},v=1,E=[],M=[],C=[],S=Date.now,I=function(T,D){return D},x=function(){var T=d.core,D=T.bridge||{},A=T._scrollers,w=T._proxies;A.push.apply(A,M),w.push.apply(w,C),M=A,C=w,I=function(oe,K){return D[oe](K)}},R=function(T,D){return~C.indexOf(T)&&C[C.indexOf(T)+1][D]},X=function(T){return!!~g.indexOf(T)},ne=function(T,D,A,w,k){return T.addEventListener(D,A,{passive:!w,capture:!!k})},F=function(T,D,A,w){return T.removeEventListener(D,A,!!w)},j="scrollLeft",B="scrollTop",le=function(){return _&&_.isPressed||M.cache++},Z=function(T,D){var A=function w(k){if(k||k===0){v&&(a.history.scrollRestoration="manual");var oe=_&&_.isPressed;k=w.v=Math.round(k)||(_&&_.iOS?1:0),T(k),w.cacheID=M.cache,oe&&I("ss",k)}else(D||M.cache!==w.cacheID||I("ref"))&&(w.cacheID=M.cache,w.v=T());return w.v+w.offset};return A.offset=0,T&&A},$={s:j,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Z(function(V){return arguments.length?a.scrollTo(V,Q.sc()):a.pageXOffset||l[j]||c[j]||u[j]||0})},Q={s:B,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$,sc:Z(function(V){return arguments.length?a.scrollTo($.sc(),V):a.pageYOffset||l[B]||c[B]||u[B]||0})},re=function(T,D){return(D&&D._ctx&&D._ctx.selector||r.utils.toArray)(T)[0]||(typeof T=="string"&&r.config().nullTargetWarn!==!1?console.warn("Element not found:",T):null)},W=function(T,D){var A=D.s,w=D.sc;X(T)&&(T=l.scrollingElement||c);var k=M.indexOf(T),oe=w===Q.sc?1:2;!~k&&(k=M.push(T)-1),M[k+oe]||ne(T,"scroll",le);var K=M[k+oe],Le=K||(M[k+oe]=Z(R(T,A),!0)||(X(T)?w:Z(function(ot){return arguments.length?T[A]=ot:T[A]})));return Le.target=T,K||(Le.smooth=r.getProperty(T,"scrollBehavior")==="smooth"),Le},te=function(T,D,A){var w=T,k=T,oe=S(),K=oe,Le=D||50,ot=Math.max(500,Le*3),Lt=function(qe,dn){var Qt=S();dn||Qt-oe>Le?(k=w,w=qe,K=oe,oe=Qt):A?w+=qe:w=k+(qe-k)/(Qt-K)*(oe-K)},Pt=function(){k=w=A?0:w,K=oe=0},Xe=function(qe){var dn=K,Qt=k,bn=S();return(qe||qe===0)&&qe!==w&&Lt(qe),oe===K||bn-K>ot?0:(w+(A?Qt:-Qt))/((A?bn:oe)-dn)*1e3};return{update:Lt,reset:Pt,getVelocity:Xe}},ye=function(T,D){return D&&!T._gsapAllow&&T.preventDefault(),T.changedTouches?T.changedTouches[0]:T},ge=function(T){var D=Math.max.apply(Math,T),A=Math.min.apply(Math,T);return Math.abs(D)>=Math.abs(A)?D:A},Ee=function(){d=r.core.globals().ScrollTrigger,d&&d.core&&x()},De=function(T){return r=T||y(),r&&typeof document<"u"&&document.body&&(a=window,l=document,c=l.documentElement,u=l.body,g=[a,l,c,u],r.utils.clamp,m=r.core.context||function(){},f="onpointerenter"in u?"pointer":"mouse",h=Pe.isTouch=a.matchMedia&&a.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in a||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,p=Pe.eventTypes=("ontouchstart"in c?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in c?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return v=0},500),Ee(),o=1),o};$.op=Q,M.cache=0;var Pe=function(){function V(D){this.init(D)}var T=V.prototype;return T.init=function(A){o||De(r)||console.warn("Please gsap.registerPlugin(Observer)"),d||Ee();var w=A.tolerance,k=A.dragMinimum,oe=A.type,K=A.target,Le=A.lineHeight,ot=A.debounce,Lt=A.preventDefault,Pt=A.onStop,Xe=A.onStopDelay,he=A.ignore,qe=A.wheelSpeed,dn=A.event,Qt=A.onDragStart,bn=A.onDragEnd,tn=A.onDrag,Hn=A.onPress,pt=A.onRelease,Xi=A.onRight,en=A.onLeft,at=A.onUp,li=A.onDown,vi=A.onChangeX,Ye=A.onChangeY,Gn=A.onChange,lt=A.onToggleX,zr=A.onToggleY,An=A.onHover,ci=A.onHoverEnd,ui=A.onMove,Vt=A.ignoreCheck,vn=A.isNormalizer,xn=A.onGestureStart,q=A.onGestureEnd,wn=A.onWheel,Xs=A.onEnable,hs=A.onDisable,Yi=A.onClick,Hr=A.scrollSpeed,hi=A.capture,yn=A.allowClicks,fi=A.lockAxis,Jn=A.onLockAxis;this.target=K=re(K)||c,this.vars=A,he&&(he=r.utils.toArray(he)),w=w||1e-9,k=k||0,qe=qe||1,Hr=Hr||1,oe=oe||"wheel,touch,pointer",ot=ot!==!1,Le||(Le=parseFloat(a.getComputedStyle(u).lineHeight)||22);var fs,xi,Er,It,Mn,yi,Li,ae=this,Pi=0,Gr=0,Ys=W(K,$),Sn=W(K,Q),js=Ys(),qs=Sn(),Ka=~oe.indexOf("touch")&&!~oe.indexOf("pointer")&&p[0]==="pointerdown",Vn=X(K),pn=K.ownerDocument||l,or=[0,0,0],ar=[0,0,0],Ks=0,Vr=function(){return Ks=S()},Tr=function(Ze,Dt){return(ae.event=Ze)&&he&&~he.indexOf(Ze.target)||Dt&&Ka&&Ze.pointerType!=="touch"||Vt&&Vt(Ze,Dt)},Mi=function(){ae._vx.reset(),ae._vy.reset(),xi.pause(),Pt&&Pt(ae)},$s=function(){var Ze=ae.deltaX=ge(or),Dt=ae.deltaY=ge(ar),ln=Math.abs(Ze)>=w,Ue=Math.abs(Dt)>=w;Gn&&(ln||Ue)&&Gn(ae,Ze,Dt,or,ar),ln&&(Xi&&ae.deltaX>0&&Xi(ae),en&&ae.deltaX<0&&en(ae),vi&&vi(ae),lt&&ae.deltaX<0!=Pi<0&&lt(ae),Pi=ae.deltaX,or[0]=or[1]=or[2]=0),Ue&&(li&&ae.deltaY>0&&li(ae),at&&ae.deltaY<0&&at(ae),Ye&&Ye(ae),zr&&ae.deltaY<0!=Gr<0&&zr(ae),Gr=ae.deltaY,ar[0]=ar[1]=ar[2]=0),(It||Er)&&(ui&&ui(ae),Er&&(tn(ae),Er=!1),It=!1),yi&&!(yi=!1)&&Jn&&Jn(ae),Mn&&(wn(ae),Mn=!1),fs=0},Lo=function(Ze,Dt,ln){or[ln]+=Ze,ar[ln]+=Dt,ae._vx.update(Ze),ae._vy.update(Dt),ot?fs||(fs=requestAnimationFrame($s)):$s()},Po=function(Ze,Dt){fi&&!Li&&(ae.axis=Li=Math.abs(Ze)>Math.abs(Dt)?"x":"y",yi=!0),Li!=="y"&&(or[2]+=Ze,ae._vx.update(Ze,!0)),Li!=="x"&&(ar[2]+=Dt,ae._vy.update(Dt,!0)),ot?fs||(fs=requestAnimationFrame($s)):$s()},Zs=function(Ze){if(!Tr(Ze,1)){Ze=ye(Ze,Lt);var Dt=Ze.clientX,ln=Ze.clientY,Ue=Dt-ae.x,At=ln-ae.y,it=ae.isDragging;ae.x=Dt,ae.y=ln,(it||Math.abs(ae.startX-Dt)>=k||Math.abs(ae.startY-ln)>=k)&&(tn&&(Er=!0),it||(ae.isDragging=!0),Po(Ue,At),it||Qt&&Qt(ae))}},ds=ae.onPress=function(ft){Tr(ft,1)||ft&&ft.button||(ae.axis=Li=null,xi.pause(),ae.isPressed=!0,ft=ye(ft),Pi=Gr=0,ae.startX=ae.x=ft.clientX,ae.startY=ae.y=ft.clientY,ae._vx.reset(),ae._vy.reset(),ne(vn?K:pn,p[1],Zs,Lt,!0),ae.deltaX=ae.deltaY=0,Hn&&Hn(ae))},ps=ae.onRelease=function(ft){if(!Tr(ft,1)){F(vn?K:pn,p[1],Zs,!0);var Ze=!isNaN(ae.y-ae.startY),Dt=ae.isDragging&&(Math.abs(ae.x-ae.startX)>3||Math.abs(ae.y-ae.startY)>3),ln=ye(ft);!Dt&&Ze&&(ae._vx.reset(),ae._vy.reset(),Lt&&yn&&r.delayedCall(.08,function(){if(S()-Ks>300&&!ft.defaultPrevented){if(ft.target.click)ft.target.click();else if(pn.createEvent){var Ue=pn.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,a,1,ln.screenX,ln.screenY,ln.clientX,ln.clientY,!1,!1,!1,!1,0,null),ft.target.dispatchEvent(Ue)}}})),ae.isDragging=ae.isGesturing=ae.isPressed=!1,Pt&&!vn&&xi.restart(!0),bn&&Dt&&bn(ae),pt&&pt(ae,Dt)}},wt=function(Ze){return Ze.touches&&Ze.touches.length>1&&(ae.isGesturing=!0)&&xn(Ze,ae.isDragging)},Js=function(){return(ae.isGesturing=!1)||q(ae)},lr=function(Ze){if(!Tr(Ze)){var Dt=Ys(),ln=Sn();Lo((Dt-js)*Hr,(ln-qs)*Hr,1),js=Dt,qs=ln,Pt&&xi.restart(!0)}},cr=function(Ze){if(!Tr(Ze)){Ze=ye(Ze,Lt),wn&&(Mn=!0);var Dt=(Ze.deltaMode===1?Le:Ze.deltaMode===2?a.innerHeight:1)*qe;Lo(Ze.deltaX*Dt,Ze.deltaY*Dt,0),Pt&&!vn&&xi.restart(!0)}},ur=function(Ze){if(!Tr(Ze)){var Dt=Ze.clientX,ln=Ze.clientY,Ue=Dt-ae.x,At=ln-ae.y;ae.x=Dt,ae.y=ln,It=!0,(Ue||At)&&Po(Ue,At)}},Qs=function(Ze){ae.event=Ze,An(ae)},Io=function(Ze){ae.event=Ze,ci(ae)},Wr=function(Ze){return Tr(Ze)||ye(Ze,Lt)&&Yi(ae)};xi=ae._dc=r.delayedCall(Xe||.25,Mi).pause(),ae.deltaX=ae.deltaY=0,ae._vx=te(0,50,!0),ae._vy=te(0,50,!0),ae.scrollX=Ys,ae.scrollY=Sn,ae.isDragging=ae.isGesturing=ae.isPressed=!1,m(this),ae.enable=function(ft){return ae.isEnabled||(ne(Vn?pn:K,"scroll",le),oe.indexOf("scroll")>=0&&ne(Vn?pn:K,"scroll",lr,Lt,hi),oe.indexOf("wheel")>=0&&ne(K,"wheel",cr,Lt,hi),(oe.indexOf("touch")>=0&&h||oe.indexOf("pointer")>=0)&&(ne(K,p[0],ds,Lt,hi),ne(pn,p[2],ps),ne(pn,p[3],ps),yn&&ne(K,"click",Vr,!1,!0),Yi&&ne(K,"click",Wr),xn&&ne(pn,"gesturestart",wt),q&&ne(pn,"gestureend",Js),An&&ne(K,f+"enter",Qs),ci&&ne(K,f+"leave",Io),ui&&ne(K,f+"move",ur)),ae.isEnabled=!0,ft&&ft.type&&ds(ft),Xs&&Xs(ae)),ae},ae.disable=function(){ae.isEnabled&&(E.filter(function(ft){return ft!==ae&&X(ft.target)}).length||F(Vn?pn:K,"scroll",le),ae.isPressed&&(ae._vx.reset(),ae._vy.reset(),F(vn?K:pn,p[1],Zs,!0)),F(Vn?pn:K,"scroll",lr,hi),F(K,"wheel",cr,hi),F(K,p[0],ds,hi),F(pn,p[2],ps),F(pn,p[3],ps),F(K,"click",Vr,!0),F(K,"click",Wr),F(pn,"gesturestart",wt),F(pn,"gestureend",Js),F(K,f+"enter",Qs),F(K,f+"leave",Io),F(K,f+"move",ur),ae.isEnabled=ae.isPressed=ae.isDragging=!1,hs&&hs(ae))},ae.kill=ae.revert=function(){ae.disable();var ft=E.indexOf(ae);ft>=0&&E.splice(ft,1),_===ae&&(_=0)},E.push(ae),vn&&X(K)&&(_=ae),ae.enable(dn)},i(V,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),V}();Pe.version="3.12.2",Pe.create=function(V){return new Pe(V)},Pe.register=De,Pe.getAll=function(){return E.slice()},Pe.getById=function(V){return E.filter(function(T){return T.vars.id===V})[0]},y()&&r.registerPlugin(Pe);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ce,ht,Ce,Me,G,Je,Ne,Ve,We,Mt,Qe,Ke,Ge,Ot,Jt,P,b,J,me,de,ve,Fe,fe,ee,U,ue,Te,Se,Ae,je,_t,N,be=1,Y=Date.now,pe=Y(),xe=0,ct=0,Ct=function(T,D,A){var w=L(T)&&(T.substr(0,6)==="clamp("||T.indexOf("max")>-1);return A["_"+D+"Clamp"]=w,w?T.substr(6,T.length-7):T},Ft=function(T,D){return D&&(!L(T)||T.substr(0,6)!=="clamp(")?"clamp("+T+")":T},Sr=function V(){return ct&&requestAnimationFrame(V)},Bt=function(){return Ot=1},Ri=function(){return Ot=0},qt=function(T){return T},us=function(T){return Math.round(T*1e5)/1e5||0},Ha=function(){return typeof window<"u"},Il=function(){return ce||Ha()&&(ce=window.gsap)&&ce.registerPlugin&&ce},Wi=function(T){return!!~Ne.indexOf(T)},Ga=function(T){return(T==="Height"?_t:Ce["inner"+T])||G["client"+T]||Je["client"+T]},ks=function(T){return R(T,"getBoundingClientRect")||(Wi(T)?function(){return Xl.width=Ce.innerWidth,Xl.height=_t,Xl}:function(){return zn(T)})},Dl=function(T,D,A){var w=A.d,k=A.d2,oe=A.a;return(oe=R(T,"getBoundingClientRect"))?function(){return oe()[w]}:function(){return(D?Ga(k):T["client"+k])||0}},Jc=function(T,D){return!D||~C.indexOf(T)?ks(T):function(){return Xl}},rr=function(T,D){var A=D.s,w=D.d2,k=D.d,oe=D.a;return Math.max(0,(A="scroll"+w)&&(oe=R(T,A))?oe()-ks(T)()[k]:Wi(T)?(G[A]||Je[A])-Ga(w):T[A]-T["offset"+w])},wo=function(T,D){for(var A=0;A<me.length;A+=3)(!D||~D.indexOf(me[A+1]))&&T(me[A],me[A+1],me[A+2])},L=function(T){return typeof T=="string"},z=function(T){return typeof T=="function"},se=function(T){return typeof T=="number"},H=function(T){return typeof T=="object"},ie=function(T,D,A){return T&&T.progress(D?0:1)&&A&&T.pause()},Ie=function(T,D){if(T.enabled){var A=D(T);A&&A.totalTime&&(T.callbackAnimation=A)}},Be=Math.abs,et="left",tt="top",dt="right",$e="bottom",nt="width",Ut="height",Ht="Right",Pn="Left",oi="Top",Kt="Bottom",ke="padding",$n="margin",Gt="Width",sr="Height",gn="px",In=function(T){return Ce.getComputedStyle(T)},Va=function(T){var D=In(T).position;T.style.position=D==="absolute"||D==="fixed"?D:"relative"},Dn=function(T,D){for(var A in D)A in T||(T[A]=D[A]);return T},zn=function(T,D){var A=D&&In(T)[Jt]!=="matrix(1, 0, 0, 1, 0, 0)"&&ce.to(T,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),w=T.getBoundingClientRect();return A&&A.progress(0).kill(),w},zs=function(T,D){var A=D.d2;return T["offset"+A]||T["client"+A]||0},Zn=function(T){var D=[],A=T.labels,w=T.duration(),k;for(k in A)D.push(A[k]/w);return D},Wa=function(T){return function(D){return ce.utils.snap(Zn(T),D)}},Xa=function(T){var D=ce.utils.snap(T),A=Array.isArray(T)&&T.slice(0).sort(function(w,k){return w-k});return A?function(w,k,oe){oe===void 0&&(oe=.001);var K;if(!k)return D(w);if(k>0){for(w-=oe,K=0;K<A.length;K++)if(A[K]>=w)return A[K];return A[K-1]}else for(K=A.length,w+=oe;K--;)if(A[K]<=w)return A[K];return A[0]}:function(w,k,oe){oe===void 0&&(oe=.001);var K=D(w);return!k||Math.abs(K-w)<oe||K-w<0==k<0?K:D(k<0?w-T:w+T)}},Ul=function(T){return function(D,A){return Xa(Zn(T))(D,A.direction)}},Nl=function(T,D,A,w){return A.split(",").forEach(function(k){return T(D,k,w)})},Un=function(T,D,A,w,k){return T.addEventListener(D,A,{passive:!w,capture:!!k})},Nn=function(T,D,A,w){return T.removeEventListener(D,A,!!w)},Ol=function(T,D,A){A=A&&A.wheelHandler,A&&(T(D,"wheel",A),T(D,"touchmove",A))},hf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fl={toggleActions:"play",anticipatePin:0},Bl={top:0,left:0,center:.5,bottom:1,right:1},kl=function(T,D){if(L(T)){var A=T.indexOf("="),w=~A?+(T.charAt(A-1)+1)*parseFloat(T.substr(A+1)):0;~A&&(T.indexOf("%")>A&&(w*=D/100),T=T.substr(0,A-1)),T=w+(T in Bl?Bl[T]*D:~T.indexOf("%")?parseFloat(T)*D/100:parseFloat(T)||0)}return T},zl=function(T,D,A,w,k,oe,K,Le){var ot=k.startColor,Lt=k.endColor,Pt=k.fontSize,Xe=k.indent,he=k.fontWeight,qe=Me.createElement("div"),dn=Wi(A)||R(A,"pinType")==="fixed",Qt=T.indexOf("scroller")!==-1,bn=dn?Je:A,tn=T.indexOf("start")!==-1,Hn=tn?ot:Lt,pt="border-color:"+Hn+";font-size:"+Pt+";color:"+Hn+";font-weight:"+he+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return pt+="position:"+((Qt||Le)&&dn?"fixed;":"absolute;"),(Qt||Le||!dn)&&(pt+=(w===Q?dt:$e)+":"+(oe+parseFloat(Xe))+"px;"),K&&(pt+="box-sizing:border-box;text-align:left;width:"+K.offsetWidth+"px;"),qe._isStart=tn,qe.setAttribute("class","gsap-marker-"+T+(D?" marker-"+D:"")),qe.style.cssText=pt,qe.innerText=D||D===0?T+"-"+D:T,bn.children[0]?bn.insertBefore(qe,bn.children[0]):bn.appendChild(qe),qe._offset=qe["offset"+w.op.d2],Hl(qe,0,w,tn),qe},Hl=function(T,D,A,w){var k={display:"block"},oe=A[w?"os2":"p2"],K=A[w?"p2":"os2"];T._isFlipped=w,k[A.a+"Percent"]=w?-100:0,k[A.a]=w?"1px":0,k["border"+oe+Gt]=1,k["border"+K+Gt]=0,k[A.p]=D+"px",ce.set(T,k)},vt=[],Qc={},Ya,ff=function(){return Y()-xe>34&&(Ya||(Ya=requestAnimationFrame(kr)))},Ro=function(){(!fe||!fe.isPressed||fe.startX>Je.clientWidth)&&(M.cache++,fe?Ya||(Ya=requestAnimationFrame(kr)):kr(),xe||Gs("scrollStart"),xe=Y())},eu=function(){ue=Ce.innerWidth,U=Ce.innerHeight},ja=function(){M.cache++,!Ge&&!Fe&&!Me.fullscreenElement&&!Me.webkitFullscreenElement&&(!ee||ue!==Ce.innerWidth||Math.abs(Ce.innerHeight-U)>Ce.innerHeight*.25)&&Ve.restart(!0)},Hs={},H_=[],df=function V(){return Nn(St,"scrollEnd",V)||Ws(!0)},Gs=function(T){return Hs[T]&&Hs[T].map(function(D){return D()})||H_},Ci=[],pf=function(T){for(var D=0;D<Ci.length;D+=5)(!T||Ci[D+4]&&Ci[D+4].query===T)&&(Ci[D].style.cssText=Ci[D+1],Ci[D].getBBox&&Ci[D].setAttribute("transform",Ci[D+2]||""),Ci[D+3].uncache=1)},tu=function(T,D){var A;for(P=0;P<vt.length;P++)A=vt[P],A&&(!D||A._ctx===D)&&(T?A.kill(1):A.revert(!0,!0));D&&pf(D),D||Gs("revert")},mf=function(T,D){M.cache++,(D||!ai)&&M.forEach(function(A){return z(A)&&A.cacheID++&&(A.rec=0)}),L(T)&&(Ce.history.scrollRestoration=Ae=T)},ai,Vs=0,_f,G_=function(){if(_f!==Vs){var T=_f=Vs;requestAnimationFrame(function(){return T===Vs&&Ws(!0)})}},gf=function(){Je.appendChild(je),_t=je.offsetHeight||Ce.innerHeight,Je.removeChild(je)},Ws=function(T,D){if(xe&&!T){Un(St,"scrollEnd",df);return}gf(),ai=St.isRefreshing=!0,M.forEach(function(w){return z(w)&&++w.cacheID&&(w.rec=w())});var A=Gs("refreshInit");de&&St.sort(),D||tu(),M.forEach(function(w){z(w)&&(w.smooth&&(w.target.style.scrollBehavior="auto"),w(0))}),vt.slice(0).forEach(function(w){return w.refresh()}),vt.forEach(function(w,k){if(w._subPinOffset&&w.pin){var oe=w.vars.horizontal?"offsetWidth":"offsetHeight",K=w.pin[oe];w.revert(!0,1),w.adjustPinSpacing(w.pin[oe]-K),w.refresh()}}),vt.forEach(function(w){var k=rr(w.scroller,w._dir);(w.vars.end==="max"||w._endClamp&&w.end>k)&&w.setPositions(w.start,Math.max(w.start+1,k),!0)}),A.forEach(function(w){return w&&w.render&&w.render(-1)}),M.forEach(function(w){z(w)&&(w.smooth&&requestAnimationFrame(function(){return w.target.style.scrollBehavior="smooth"}),w.rec&&w(w.rec))}),mf(Ae,1),Ve.pause(),Vs++,ai=2,kr(2),vt.forEach(function(w){return z(w.vars.onRefresh)&&w.vars.onRefresh(w)}),ai=St.isRefreshing=!1,Gs("refresh")},nu=0,Gl=1,qa,kr=function(T){if(!ai||T===2){St.isUpdating=!0,qa&&qa.update(0);var D=vt.length,A=Y(),w=A-pe>=50,k=D&&vt[0].scroll();if(Gl=nu>k?-1:1,ai||(nu=k),w&&(xe&&!Ot&&A-xe>200&&(xe=0,Gs("scrollEnd")),Qe=pe,pe=A),Gl<0){for(P=D;P-- >0;)vt[P]&&vt[P].update(0,w);Gl=1}else for(P=0;P<D;P++)vt[P]&&vt[P].update(0,w);St.isUpdating=!1}Ya=0},iu=[et,tt,$e,dt,$n+Kt,$n+Ht,$n+oi,$n+Pn,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vl=iu.concat([nt,Ut,"boxSizing","max"+Gt,"max"+sr,"position",$n,ke,ke+oi,ke+Ht,ke+Kt,ke+Pn]),V_=function(T,D,A){Co(A);var w=T._gsap;if(w.spacerIsNative)Co(w.spacerState);else if(T._gsap.swappedIn){var k=D.parentNode;k&&(k.insertBefore(T,D),k.removeChild(D))}T._gsap.swappedIn=!1},ru=function(T,D,A,w){if(!T._gsap.swappedIn){for(var k=iu.length,oe=D.style,K=T.style,Le;k--;)Le=iu[k],oe[Le]=A[Le];oe.position=A.position==="absolute"?"absolute":"relative",A.display==="inline"&&(oe.display="inline-block"),K[$e]=K[dt]="auto",oe.flexBasis=A.flexBasis||"auto",oe.overflow="visible",oe.boxSizing="border-box",oe[nt]=zs(T,$)+gn,oe[Ut]=zs(T,Q)+gn,oe[ke]=K[$n]=K[tt]=K[et]="0",Co(w),K[nt]=K["max"+Gt]=A[nt],K[Ut]=K["max"+sr]=A[Ut],K[ke]=A[ke],T.parentNode!==D&&(T.parentNode.insertBefore(D,T),D.appendChild(T)),T._gsap.swappedIn=!0}},W_=/([A-Z])/g,Co=function(T){if(T){var D=T.t.style,A=T.length,w=0,k,oe;for((T.t._gsap||ce.core.getCache(T.t)).uncache=1;w<A;w+=2)oe=T[w+1],k=T[w],oe?D[k]=oe:D[k]&&D.removeProperty(k.replace(W_,"-$1").toLowerCase())}},Wl=function(T){for(var D=Vl.length,A=T.style,w=[],k=0;k<D;k++)w.push(Vl[k],A[Vl[k]]);return w.t=T,w},X_=function(T,D,A){for(var w=[],k=T.length,oe=A?8:0,K;oe<k;oe+=2)K=T[oe],w.push(K,K in D?D[K]:T[oe+1]);return w.t=T.t,w},Xl={left:0,top:0},vf=function(T,D,A,w,k,oe,K,Le,ot,Lt,Pt,Xe,he,qe){z(T)&&(T=T(Le)),L(T)&&T.substr(0,3)==="max"&&(T=Xe+(T.charAt(4)==="="?kl("0"+T.substr(3),A):0));var dn=he?he.time():0,Qt,bn,tn;if(he&&he.seek(0),isNaN(T)||(T=+T),se(T))he&&(T=ce.utils.mapRange(he.scrollTrigger.start,he.scrollTrigger.end,0,Xe,T)),K&&Hl(K,A,w,!0);else{z(D)&&(D=D(Le));var Hn=(T||"0").split(" "),pt,Xi,en,at;tn=re(D,Le)||Je,pt=zn(tn)||{},(!pt||!pt.left&&!pt.top)&&In(tn).display==="none"&&(at=tn.style.display,tn.style.display="block",pt=zn(tn),at?tn.style.display=at:tn.style.removeProperty("display")),Xi=kl(Hn[0],pt[w.d]),en=kl(Hn[1]||"0",A),T=pt[w.p]-ot[w.p]-Lt+Xi+k-en,K&&Hl(K,en,w,A-en<20||K._isStart&&en>20),A-=A-en}if(qe&&(Le[qe]=T||-.001,T<0&&(T=0)),oe){var li=T+A,vi=oe._isStart;Qt="scroll"+w.d2,Hl(oe,li,w,vi&&li>20||!vi&&(Pt?Math.max(Je[Qt],G[Qt]):oe.parentNode[Qt])<=li+1),Pt&&(ot=zn(K),Pt&&(oe.style[w.op.p]=ot[w.op.p]-w.op.m-oe._offset+gn))}return he&&tn&&(Qt=zn(tn),he.seek(Xe),bn=zn(tn),he._caScrollDist=Qt[w.p]-bn[w.p],T=T/he._caScrollDist*Xe),he&&he.seek(dn),he?T:Math.round(T)},Y_=/(webkit|moz|length|cssText|inset)/i,xf=function(T,D,A,w){if(T.parentNode!==D){var k=T.style,oe,K;if(D===Je){T._stOrig=k.cssText,K=In(T);for(oe in K)!+oe&&!Y_.test(oe)&&K[oe]&&typeof k[oe]=="string"&&oe!=="0"&&(k[oe]=K[oe]);k.top=A,k.left=w}else k.cssText=T._stOrig;ce.core.getCache(T).uncache=1,D.appendChild(T)}},yf=function(T,D,A){var w=D,k=w;return function(oe){var K=Math.round(T());return K!==w&&K!==k&&Math.abs(K-w)>3&&Math.abs(K-k)>3&&(oe=K,A&&A()),k=w,w=oe,oe}},Yl=function(T,D,A){var w={};w[D.p]="+="+A,ce.set(T,w)},Mf=function(T,D){var A=W(T,D),w="_scroll"+D.p2,k=function oe(K,Le,ot,Lt,Pt){var Xe=oe.tween,he=Le.onComplete,qe={};ot=ot||A();var dn=yf(A,ot,function(){Xe.kill(),oe.tween=0});return Pt=Lt&&Pt||0,Lt=Lt||K-ot,Xe&&Xe.kill(),Le[w]=K,Le.modifiers=qe,qe[w]=function(){return dn(ot+Lt*Xe.ratio+Pt*Xe.ratio*Xe.ratio)},Le.onUpdate=function(){M.cache++,kr()},Le.onComplete=function(){oe.tween=0,he&&he.call(Xe)},Xe=oe.tween=ce.to(T,Le),Xe};return T[w]=A,A.wheelHandler=function(){return k.tween&&k.tween.kill()&&(k.tween=0)},Un(T,"wheel",A.wheelHandler),St.isTouch&&Un(T,"touchmove",A.wheelHandler),k},St=function(){function V(D,A){ht||V.register(ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Se(this),this.init(D,A)}var T=V.prototype;return T.init=function(A,w){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ct){this.update=this.refresh=this.kill=qt;return}A=Dn(L(A)||se(A)||A.nodeType?{trigger:A}:A,Fl);var k=A,oe=k.onUpdate,K=k.toggleClass,Le=k.id,ot=k.onToggle,Lt=k.onRefresh,Pt=k.scrub,Xe=k.trigger,he=k.pin,qe=k.pinSpacing,dn=k.invalidateOnRefresh,Qt=k.anticipatePin,bn=k.onScrubComplete,tn=k.onSnapComplete,Hn=k.once,pt=k.snap,Xi=k.pinReparent,en=k.pinSpacer,at=k.containerAnimation,li=k.fastScrollEnd,vi=k.preventOverlaps,Ye=A.horizontal||A.containerAnimation&&A.horizontal!==!1?$:Q,Gn=!Pt&&Pt!==0,lt=re(A.scroller||Ce),zr=ce.core.getCache(lt),An=Wi(lt),ci=("pinType"in A?A.pinType:R(lt,"pinType")||An&&"fixed")==="fixed",ui=[A.onEnter,A.onLeave,A.onEnterBack,A.onLeaveBack],Vt=Gn&&A.toggleActions.split(" "),vn="markers"in A?A.markers:Fl.markers,xn=An?0:parseFloat(In(lt)["border"+Ye.p2+Gt])||0,q=this,wn=A.onRefreshInit&&function(){return A.onRefreshInit(q)},Xs=Dl(lt,An,Ye),hs=Jc(lt,An),Yi=0,Hr=0,hi=0,yn=W(lt,Ye),fi,Jn,fs,xi,Er,It,Mn,yi,Li,ae,Pi,Gr,Ys,Sn,js,qs,Ka,Vn,pn,or,ar,Ks,Vr,Tr,Mi,$s,Lo,Po,Zs,ds,ps,wt,Js,lr,cr,ur,Qs,Io,Wr;if(q._startClamp=q._endClamp=!1,q._dir=Ye,Qt*=45,q.scroller=lt,q.scroll=at?at.time.bind(at):yn,xi=yn(),q.vars=A,w=w||A.animation,"refreshPriority"in A&&(de=1,A.refreshPriority===-9999&&(qa=q)),zr.tweenScroll=zr.tweenScroll||{top:Mf(lt,Q),left:Mf(lt,$)},q.tweenTo=fi=zr.tweenScroll[Ye.p],q.scrubDuration=function(Ue){Js=se(Ue)&&Ue,Js?wt?wt.duration(Ue):wt=ce.to(w,{ease:"expo",totalProgress:"+=0",duration:Js,paused:!0,onComplete:function(){return bn&&bn(q)}}):(wt&&wt.progress(1).kill(),wt=0)},w&&(w.vars.lazy=!1,w._initted&&!q.isReverted||w.vars.immediateRender!==!1&&A.immediateRender!==!1&&w.duration()&&w.render(0,!0,!0),q.animation=w.pause(),w.scrollTrigger=q,q.scrubDuration(Pt),ds=0,Le||(Le=w.vars.id)),pt&&((!H(pt)||pt.push)&&(pt={snapTo:pt}),"scrollBehavior"in Je.style&&ce.set(An?[Je,G]:lt,{scrollBehavior:"auto"}),M.forEach(function(Ue){return z(Ue)&&Ue.target===(An?Me.scrollingElement||G:lt)&&(Ue.smooth=!1)}),fs=z(pt.snapTo)?pt.snapTo:pt.snapTo==="labels"?Wa(w):pt.snapTo==="labelsDirectional"?Ul(w):pt.directional!==!1?function(Ue,At){return Xa(pt.snapTo)(Ue,Y()-Hr<500?0:At.direction)}:ce.utils.snap(pt.snapTo),lr=pt.duration||{min:.1,max:2},lr=H(lr)?Mt(lr.min,lr.max):Mt(lr,lr),cr=ce.delayedCall(pt.delay||Js/2||.1,function(){var Ue=yn(),At=Y()-Hr<500,it=fi.tween;if((At||Math.abs(q.getVelocity())<10)&&!it&&!Ot&&Yi!==Ue){var Et=(Ue-It)/Sn,On=w&&!Gn?w.totalProgress():Et,Rt=At?0:(On-ps)/(Y()-Qe)*1e3||0,mn=ce.utils.clamp(-Et,1-Et,Be(Rt/2)*Rt/.185),di=Et+(pt.inertia===!1?0:mn),Wn=Mt(0,1,fs(di,q)),nn=Math.round(It+Wn*Sn),Wt=pt,hr=Wt.onStart,rn=Wt.onInterrupt,Ii=Wt.onComplete;if(Ue<=Mn&&Ue>=It&&nn!==Ue){if(it&&!it._initted&&it.data<=Be(nn-Ue))return;pt.inertia===!1&&(mn=Wn-Et),fi(nn,{duration:lr(Be(Math.max(Be(di-On),Be(Wn-On))*.185/Rt/.05||0)),ease:pt.ease||"power3",data:Be(nn-Ue),onInterrupt:function(){return cr.restart(!0)&&rn&&rn(q)},onComplete:function(){q.update(),Yi=yn(),ds=ps=w&&!Gn?w.totalProgress():q.progress,tn&&tn(q),Ii&&Ii(q)}},Ue,mn*Sn,nn-Ue-mn*Sn),hr&&hr(q,fi.tween)}}else q.isActive&&Yi!==Ue&&cr.restart(!0)}).pause()),Le&&(Qc[Le]=q),Xe=q.trigger=re(Xe||he!==!0&&he),Wr=Xe&&Xe._gsap&&Xe._gsap.stRevert,Wr&&(Wr=Wr(q)),he=he===!0?Xe:re(he),L(K)&&(K={targets:Xe,className:K}),he&&(qe===!1||qe===$n||(qe=!qe&&he.parentNode&&he.parentNode.style&&In(he.parentNode).display==="flex"?!1:ke),q.pin=he,Jn=ce.core.getCache(he),Jn.spacer?js=Jn.pinState:(en&&(en=re(en),en&&!en.nodeType&&(en=en.current||en.nativeElement),Jn.spacerIsNative=!!en,en&&(Jn.spacerState=Wl(en))),Jn.spacer=Vn=en||Me.createElement("div"),Vn.classList.add("pin-spacer"),Le&&Vn.classList.add("pin-spacer-"+Le),Jn.pinState=js=Wl(he)),A.force3D!==!1&&ce.set(he,{force3D:!0}),q.spacer=Vn=Jn.spacer,Zs=In(he),Tr=Zs[qe+Ye.os2],or=ce.getProperty(he),ar=ce.quickSetter(he,Ye.a,gn),ru(he,Vn,Zs),Ka=Wl(he)),vn){Gr=H(vn)?Dn(vn,hf):hf,ae=zl("scroller-start",Le,lt,Ye,Gr,0),Pi=zl("scroller-end",Le,lt,Ye,Gr,0,ae),pn=ae["offset"+Ye.op.d2];var ft=re(R(lt,"content")||lt);yi=this.markerStart=zl("start",Le,ft,Ye,Gr,pn,0,at),Li=this.markerEnd=zl("end",Le,ft,Ye,Gr,pn,0,at),at&&(Io=ce.quickSetter([yi,Li],Ye.a,gn)),!ci&&!(C.length&&R(lt,"fixedMarkers")===!0)&&(Va(An?Je:lt),ce.set([ae,Pi],{force3D:!0}),$s=ce.quickSetter(ae,Ye.a,gn),Po=ce.quickSetter(Pi,Ye.a,gn))}if(at){var Ze=at.vars.onUpdate,Dt=at.vars.onUpdateParams;at.eventCallback("onUpdate",function(){q.update(0,0,1),Ze&&Ze.apply(at,Dt||[])})}if(q.previous=function(){return vt[vt.indexOf(q)-1]},q.next=function(){return vt[vt.indexOf(q)+1]},q.revert=function(Ue,At){if(!At)return q.kill(!0);var it=Ue!==!1||!q.enabled,Et=Ge;it!==q.isReverted&&(it&&(ur=Math.max(yn(),q.scroll.rec||0),hi=q.progress,Qs=w&&w.progress()),yi&&[yi,Li,ae,Pi].forEach(function(On){return On.style.display=it?"none":"block"}),it&&(Ge=q,q.update(it)),he&&(!Xi||!q.isActive)&&(it?V_(he,Vn,js):ru(he,Vn,In(he),Mi)),it||q.update(it),Ge=Et,q.isReverted=it)},q.refresh=function(Ue,At,it,Et){if(!((Ge||!q.enabled)&&!At)){if(he&&Ue&&xe){Un(V,"scrollEnd",df);return}!ai&&wn&&wn(q),Ge=q,fi.tween&&!it&&(fi.tween.kill(),fi.tween=0),wt&&wt.pause(),dn&&w&&w.revert({kill:!1}).invalidate(),q.isReverted||q.revert(!0,!0),q._subPinOffset=!1;var On=Xs(),Rt=hs(),mn=at?at.duration():rr(lt,Ye),di=Sn<=.01,Wn=0,nn=Et||0,Wt=H(it)?it.end:A.end,hr=A.endTrigger||Xe,rn=H(it)?it.start:A.start||(A.start===0||!Xe?0:he?"0 0":"0 100%"),Ii=q.pinnedContainer=A.pinnedContainer&&re(A.pinnedContainer,q),br=Xe&&Math.max(0,vt.indexOf(q))||0,Di=br,Xn,Qn,eo,ql,ei,Rn,Ar,ou,Af,$a,wr,Za,Kl;for(vn&&H(it)&&(Za=ce.getProperty(ae,Ye.p),Kl=ce.getProperty(Pi,Ye.p));Di--;)Rn=vt[Di],Rn.end||Rn.refresh(0,1)||(Ge=q),Ar=Rn.pin,Ar&&(Ar===Xe||Ar===he||Ar===Ii)&&!Rn.isReverted&&($a||($a=[]),$a.unshift(Rn),Rn.revert(!0,!0)),Rn!==vt[Di]&&(br--,Di--);for(z(rn)&&(rn=rn(q)),rn=Ct(rn,"start",q),It=vf(rn,Xe,On,Ye,yn(),yi,ae,q,Rt,xn,ci,mn,at,q._startClamp&&"_startClamp")||(he?-.001:0),z(Wt)&&(Wt=Wt(q)),L(Wt)&&!Wt.indexOf("+=")&&(~Wt.indexOf(" ")?Wt=(L(rn)?rn.split(" ")[0]:"")+Wt:(Wn=kl(Wt.substr(2),On),Wt=L(rn)?rn:(at?ce.utils.mapRange(0,at.duration(),at.scrollTrigger.start,at.scrollTrigger.end,It):It)+Wn,hr=Xe)),Wt=Ct(Wt,"end",q),Mn=Math.max(It,vf(Wt||(hr?"100% 0":mn),hr,On,Ye,yn()+Wn,Li,Pi,q,Rt,xn,ci,mn,at,q._endClamp&&"_endClamp"))||-.001,Wn=0,Di=br;Di--;)Rn=vt[Di],Ar=Rn.pin,Ar&&Rn.start-Rn._pinPush<=It&&!at&&Rn.end>0&&(Xn=Rn.end-(q._startClamp?Math.max(0,Rn.start):Rn.start),(Ar===Xe&&Rn.start-Rn._pinPush<It||Ar===Ii)&&isNaN(rn)&&(Wn+=Xn*(1-Rn.progress)),Ar===he&&(nn+=Xn));if(It+=Wn,Mn+=Wn,q._startClamp&&(q._startClamp+=Wn),q._endClamp&&!ai&&(q._endClamp=Mn||-.001,Mn=Math.min(Mn,rr(lt,Ye))),Sn=Mn-It||(It-=.01)&&.001,di&&(hi=ce.utils.clamp(0,1,ce.utils.normalize(It,Mn,ur))),q._pinPush=nn,yi&&Wn&&(Xn={},Xn[Ye.a]="+="+Wn,Ii&&(Xn[Ye.p]="-="+yn()),ce.set([yi,Li],Xn)),he)Xn=In(he),ql=Ye===Q,eo=yn(),Ks=parseFloat(or(Ye.a))+nn,!mn&&Mn>1&&(wr=(An?Me.scrollingElement||G:lt).style,wr={style:wr,value:wr["overflow"+Ye.a.toUpperCase()]},An&&In(Je)["overflow"+Ye.a.toUpperCase()]!=="scroll"&&(wr.style["overflow"+Ye.a.toUpperCase()]="scroll")),ru(he,Vn,Xn),Ka=Wl(he),Qn=zn(he,!0),ou=ci&&W(lt,ql?$:Q)(),qe&&(Mi=[qe+Ye.os2,Sn+nn+gn],Mi.t=Vn,Di=qe===ke?zs(he,Ye)+Sn+nn:0,Di&&Mi.push(Ye.d,Di+gn),Co(Mi),Ii&&vt.forEach(function(Ja){Ja.pin===Ii&&Ja.vars.pinSpacing!==!1&&(Ja._subPinOffset=!0)}),ci&&yn(ur)),ci&&(ei={top:Qn.top+(ql?eo-It:ou)+gn,left:Qn.left+(ql?ou:eo-It)+gn,boxSizing:"border-box",position:"fixed"},ei[nt]=ei["max"+Gt]=Math.ceil(Qn.width)+gn,ei[Ut]=ei["max"+sr]=Math.ceil(Qn.height)+gn,ei[$n]=ei[$n+oi]=ei[$n+Ht]=ei[$n+Kt]=ei[$n+Pn]="0",ei[ke]=Xn[ke],ei[ke+oi]=Xn[ke+oi],ei[ke+Ht]=Xn[ke+Ht],ei[ke+Kt]=Xn[ke+Kt],ei[ke+Pn]=Xn[ke+Pn],qs=X_(js,ei,Xi),ai&&yn(0)),w?(Af=w._initted,ve(1),w.render(w.duration(),!0,!0),Vr=or(Ye.a)-Ks+Sn+nn,Lo=Math.abs(Sn-Vr)>1,ci&&Lo&&qs.splice(qs.length-2,2),w.render(0,!0,!0),Af||w.invalidate(!0),w.parent||w.totalTime(w.totalTime()),ve(0)):Vr=Sn,wr&&(wr.value?wr.style["overflow"+Ye.a.toUpperCase()]=wr.value:wr.style.removeProperty("overflow-"+Ye.a));else if(Xe&&yn()&&!at)for(Qn=Xe.parentNode;Qn&&Qn!==Je;)Qn._pinOffset&&(It-=Qn._pinOffset,Mn-=Qn._pinOffset),Qn=Qn.parentNode;$a&&$a.forEach(function(Ja){return Ja.revert(!1,!0)}),q.start=It,q.end=Mn,xi=Er=ai?ur:yn(),!at&&!ai&&(xi<ur&&yn(ur),q.scroll.rec=0),q.revert(!1,!0),Hr=Y(),cr&&(Yi=-1,cr.restart(!0)),Ge=0,w&&Gn&&(w._initted||Qs)&&w.progress()!==Qs&&w.progress(Qs||0,!0).render(w.time(),!0,!0),(di||hi!==q.progress||at)&&(w&&!Gn&&w.totalProgress(at&&It<-.001&&!hi?ce.utils.normalize(It,Mn,0):hi,!0),q.progress=di||(xi-It)/Sn===hi?0:hi),he&&qe&&(Vn._pinOffset=Math.round(q.progress*Vr)),wt&&wt.invalidate(),isNaN(Za)||(Za-=ce.getProperty(ae,Ye.p),Kl-=ce.getProperty(Pi,Ye.p),Yl(ae,Ye,Za),Yl(yi,Ye,Za-(Et||0)),Yl(Pi,Ye,Kl),Yl(Li,Ye,Kl-(Et||0))),di&&!ai&&q.update(),Lt&&!ai&&!Ys&&(Ys=!0,Lt(q),Ys=!1)}},q.getVelocity=function(){return(yn()-Er)/(Y()-Qe)*1e3||0},q.endAnimation=function(){ie(q.callbackAnimation),w&&(wt?wt.progress(1):w.paused()?Gn||ie(w,q.direction<0,1):ie(w,w.reversed()))},q.labelToScroll=function(Ue){return w&&w.labels&&(It||q.refresh()||It)+w.labels[Ue]/w.duration()*Sn||0},q.getTrailing=function(Ue){var At=vt.indexOf(q),it=q.direction>0?vt.slice(0,At).reverse():vt.slice(At+1);return(L(Ue)?it.filter(function(Et){return Et.vars.preventOverlaps===Ue}):it).filter(function(Et){return q.direction>0?Et.end<=It:Et.start>=Mn})},q.update=function(Ue,At,it){if(!(at&&!it&&!Ue)){var Et=ai===!0?ur:q.scroll(),On=Ue?0:(Et-It)/Sn,Rt=On<0?0:On>1?1:On||0,mn=q.progress,di,Wn,nn,Wt,hr,rn,Ii,br;if(At&&(Er=xi,xi=at?yn():Et,pt&&(ps=ds,ds=w&&!Gn?w.totalProgress():Rt)),Qt&&!Rt&&he&&!Ge&&!be&&xe&&It<Et+(Et-Er)/(Y()-Qe)*Qt&&(Rt=1e-4),Rt!==mn&&q.enabled){if(di=q.isActive=!!Rt&&Rt<1,Wn=!!mn&&mn<1,rn=di!==Wn,hr=rn||!!Rt!=!!mn,q.direction=Rt>mn?1:-1,q.progress=Rt,hr&&!Ge&&(nn=Rt&&!mn?0:Rt===1?1:mn===1?2:3,Gn&&(Wt=!rn&&Vt[nn+1]!=="none"&&Vt[nn+1]||Vt[nn],br=w&&(Wt==="complete"||Wt==="reset"||Wt in w))),vi&&(rn||br)&&(br||Pt||!w)&&(z(vi)?vi(q):q.getTrailing(vi).forEach(function(eo){return eo.endAnimation()})),Gn||(wt&&!Ge&&!be?(wt._dp._time-wt._start!==wt._time&&wt.render(wt._dp._time-wt._start),wt.resetTo?wt.resetTo("totalProgress",Rt,w._tTime/w._tDur):(wt.vars.totalProgress=Rt,wt.invalidate().restart())):w&&w.totalProgress(Rt,!!(Ge&&(Hr||Ue)))),he){if(Ue&&qe&&(Vn.style[qe+Ye.os2]=Tr),!ci)ar(us(Ks+Vr*Rt));else if(hr){if(Ii=!Ue&&Rt>mn&&Mn+1>Et&&Et+1>=rr(lt,Ye),Xi)if(!Ue&&(di||Ii)){var Di=zn(he,!0),Xn=Et-It;xf(he,Je,Di.top+(Ye===Q?Xn:0)+gn,Di.left+(Ye===Q?0:Xn)+gn)}else xf(he,Vn);Co(di||Ii?qs:Ka),Lo&&Rt<1&&di||ar(Ks+(Rt===1&&!Ii?Vr:0))}}pt&&!fi.tween&&!Ge&&!be&&cr.restart(!0),K&&(rn||Hn&&Rt&&(Rt<1||!N))&&We(K.targets).forEach(function(eo){return eo.classList[di||Hn?"add":"remove"](K.className)}),oe&&!Gn&&!Ue&&oe(q),hr&&!Ge?(Gn&&(br&&(Wt==="complete"?w.pause().totalProgress(1):Wt==="reset"?w.restart(!0).pause():Wt==="restart"?w.restart(!0):w[Wt]()),oe&&oe(q)),(rn||!N)&&(ot&&rn&&Ie(q,ot),ui[nn]&&Ie(q,ui[nn]),Hn&&(Rt===1?q.kill(!1,1):ui[nn]=0),rn||(nn=Rt===1?1:3,ui[nn]&&Ie(q,ui[nn]))),li&&!di&&Math.abs(q.getVelocity())>(se(li)?li:2500)&&(ie(q.callbackAnimation),wt?wt.progress(1):ie(w,Wt==="reverse"?1:!Rt,1))):Gn&&oe&&!Ge&&oe(q)}if(Po){var Qn=at?Et/at.duration()*(at._caScrollDist||0):Et;$s(Qn+(ae._isFlipped?1:0)),Po(Qn)}Io&&Io(-Et/at.duration()*(at._caScrollDist||0))}},q.enable=function(Ue,At){q.enabled||(q.enabled=!0,Un(lt,"resize",ja),An||Un(lt,"scroll",Ro),wn&&Un(V,"refreshInit",wn),Ue!==!1&&(q.progress=hi=0,xi=Er=Yi=yn()),At!==!1&&q.refresh())},q.getTween=function(Ue){return Ue&&fi?fi.tween:wt},q.setPositions=function(Ue,At,it,Et){if(at){var On=at.scrollTrigger,Rt=at.duration(),mn=On.end-On.start;Ue=On.start+mn*Ue/Rt,At=On.start+mn*At/Rt}q.refresh(!1,!1,{start:Ft(Ue,it&&!!q._startClamp),end:Ft(At,it&&!!q._endClamp)},Et),q.update()},q.adjustPinSpacing=function(Ue){if(Mi&&Ue){var At=Mi.indexOf(Ye.d)+1;Mi[At]=parseFloat(Mi[At])+Ue+gn,Mi[1]=parseFloat(Mi[1])+Ue+gn,Co(Mi)}},q.disable=function(Ue,At){if(q.enabled&&(Ue!==!1&&q.revert(!0,!0),q.enabled=q.isActive=!1,At||wt&&wt.pause(),ur=0,Jn&&(Jn.uncache=1),wn&&Nn(V,"refreshInit",wn),cr&&(cr.pause(),fi.tween&&fi.tween.kill()&&(fi.tween=0)),!An)){for(var it=vt.length;it--;)if(vt[it].scroller===lt&&vt[it]!==q)return;Nn(lt,"resize",ja),An||Nn(lt,"scroll",Ro)}},q.kill=function(Ue,At){q.disable(Ue,At),wt&&!At&&wt.kill(),Le&&delete Qc[Le];var it=vt.indexOf(q);it>=0&&vt.splice(it,1),it===P&&Gl>0&&P--,it=0,vt.forEach(function(Et){return Et.scroller===q.scroller&&(it=1)}),it||ai||(q.scroll.rec=0),w&&(w.scrollTrigger=null,Ue&&w.revert({kill:!1}),At||w.kill()),yi&&[yi,Li,ae,Pi].forEach(function(Et){return Et.parentNode&&Et.parentNode.removeChild(Et)}),qa===q&&(qa=0),he&&(Jn&&(Jn.uncache=1),it=0,vt.forEach(function(Et){return Et.pin===he&&it++}),it||(Jn.spacer=0)),A.onKill&&A.onKill(q)},vt.push(q),q.enable(!1,!1),Wr&&Wr(q),w&&w.add&&!Sn){var ln=q.update;q.update=function(){q.update=ln,It||Mn||q.refresh()},ce.delayedCall(.01,q.update),Sn=.01,It=Mn=0}else q.refresh();he&&G_()},V.register=function(A){return ht||(ce=A||Il(),Ha()&&window.document&&V.enable(),ht=ct),ht},V.defaults=function(A){if(A)for(var w in A)Fl[w]=A[w];return Fl},V.disable=function(A,w){ct=0,vt.forEach(function(oe){return oe[w?"kill":"disable"](A)}),Nn(Ce,"wheel",Ro),Nn(Me,"scroll",Ro),clearInterval(Ke),Nn(Me,"touchcancel",qt),Nn(Je,"touchstart",qt),Nl(Nn,Me,"pointerdown,touchstart,mousedown",Bt),Nl(Nn,Me,"pointerup,touchend,mouseup",Ri),Ve.kill(),wo(Nn);for(var k=0;k<M.length;k+=3)Ol(Nn,M[k],M[k+1]),Ol(Nn,M[k],M[k+2])},V.enable=function(){if(Ce=window,Me=document,G=Me.documentElement,Je=Me.body,ce&&(We=ce.utils.toArray,Mt=ce.utils.clamp,Se=ce.core.context||qt,ve=ce.core.suppressOverwrites||qt,Ae=Ce.history.scrollRestoration||"auto",nu=Ce.pageYOffset,ce.core.globals("ScrollTrigger",V),Je)){ct=1,je=document.createElement("div"),je.style.height="100vh",je.style.position="absolute",gf(),Sr(),Pe.register(ce),V.isTouch=Pe.isTouch,Te=Pe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Un(Ce,"wheel",Ro),Ne=[Ce,Me,G,Je],ce.matchMedia?(V.matchMedia=function(Le){var ot=ce.matchMedia(),Lt;for(Lt in Le)ot.add(Lt,Le[Lt]);return ot},ce.addEventListener("matchMediaInit",function(){return tu()}),ce.addEventListener("matchMediaRevert",function(){return pf()}),ce.addEventListener("matchMedia",function(){Ws(0,1),Gs("matchMedia")}),ce.matchMedia("(orientation: portrait)",function(){return eu(),eu})):console.warn("Requires GSAP 3.11.0 or later"),eu(),Un(Me,"scroll",Ro);var A=Je.style,w=A.borderTopStyle,k=ce.core.Animation.prototype,oe,K;for(k.revert||Object.defineProperty(k,"revert",{value:function(){return this.time(-.01,!0)}}),A.borderTopStyle="solid",oe=zn(Je),Q.m=Math.round(oe.top+Q.sc())||0,$.m=Math.round(oe.left+$.sc())||0,w?A.borderTopStyle=w:A.removeProperty("border-top-style"),Ke=setInterval(ff,250),ce.delayedCall(.5,function(){return be=0}),Un(Me,"touchcancel",qt),Un(Je,"touchstart",qt),Nl(Un,Me,"pointerdown,touchstart,mousedown",Bt),Nl(Un,Me,"pointerup,touchend,mouseup",Ri),Jt=ce.utils.checkPrefix("transform"),Vl.push(Jt),ht=Y(),Ve=ce.delayedCall(.2,Ws).pause(),me=[Me,"visibilitychange",function(){var Le=Ce.innerWidth,ot=Ce.innerHeight;Me.hidden?(b=Le,J=ot):(b!==Le||J!==ot)&&ja()},Me,"DOMContentLoaded",Ws,Ce,"load",Ws,Ce,"resize",ja],wo(Un),vt.forEach(function(Le){return Le.enable(0,1)}),K=0;K<M.length;K+=3)Ol(Nn,M[K],M[K+1]),Ol(Nn,M[K],M[K+2])}},V.config=function(A){"limitCallbacks"in A&&(N=!!A.limitCallbacks);var w=A.syncInterval;w&&clearInterval(Ke)||(Ke=w)&&setInterval(ff,w),"ignoreMobileResize"in A&&(ee=V.isTouch===1&&A.ignoreMobileResize),"autoRefreshEvents"in A&&(wo(Nn)||wo(Un,A.autoRefreshEvents||"none"),Fe=(A.autoRefreshEvents+"").indexOf("resize")===-1)},V.scrollerProxy=function(A,w){var k=re(A),oe=M.indexOf(k),K=Wi(k);~oe&&M.splice(oe,K?6:2),w&&(K?C.unshift(Ce,w,Je,w,G,w):C.unshift(k,w))},V.clearMatchMedia=function(A){vt.forEach(function(w){return w._ctx&&w._ctx.query===A&&w._ctx.kill(!0,!0)})},V.isInViewport=function(A,w,k){var oe=(L(A)?re(A):A).getBoundingClientRect(),K=oe[k?nt:Ut]*w||0;return k?oe.right-K>0&&oe.left+K<Ce.innerWidth:oe.bottom-K>0&&oe.top+K<Ce.innerHeight},V.positionInViewport=function(A,w,k){L(A)&&(A=re(A));var oe=A.getBoundingClientRect(),K=oe[k?nt:Ut],Le=w==null?K/2:w in Bl?Bl[w]*K:~w.indexOf("%")?parseFloat(w)*K/100:parseFloat(w)||0;return k?(oe.left+Le)/Ce.innerWidth:(oe.top+Le)/Ce.innerHeight},V.killAll=function(A){if(vt.slice(0).forEach(function(k){return k.vars.id!=="ScrollSmoother"&&k.kill()}),A!==!0){var w=Hs.killAll||[];Hs={},w.forEach(function(k){return k()})}},V}();St.version="3.12.2",St.saveStyles=function(V){return V?We(V).forEach(function(T){if(T&&T.style){var D=Ci.indexOf(T);D>=0&&Ci.splice(D,5),Ci.push(T,T.style.cssText,T.getBBox&&T.getAttribute("transform"),ce.core.getCache(T),Se())}}):Ci},St.revert=function(V,T){return tu(!V,T)},St.create=function(V,T){return new St(V,T)},St.refresh=function(V){return V?ja():(ht||St.register())&&Ws(!0)},St.update=function(V){return++M.cache&&kr(V===!0?2:0)},St.clearScrollMemory=mf,St.maxScroll=function(V,T){return rr(V,T?$:Q)},St.getScrollFunc=function(V,T){return W(re(V),T?$:Q)},St.getById=function(V){return Qc[V]},St.getAll=function(){return vt.filter(function(V){return V.vars.id!=="ScrollSmoother"})},St.isScrolling=function(){return!!xe},St.snapDirectional=Xa,St.addEventListener=function(V,T){var D=Hs[V]||(Hs[V]=[]);~D.indexOf(T)||D.push(T)},St.removeEventListener=function(V,T){var D=Hs[V],A=D&&D.indexOf(T);A>=0&&D.splice(A,1)},St.batch=function(V,T){var D=[],A={},w=T.interval||.016,k=T.batchMax||1e9,oe=function(ot,Lt){var Pt=[],Xe=[],he=ce.delayedCall(w,function(){Lt(Pt,Xe),Pt=[],Xe=[]}).pause();return function(qe){Pt.length||he.restart(!0),Pt.push(qe.trigger),Xe.push(qe),k<=Pt.length&&he.progress(1)}},K;for(K in T)A[K]=K.substr(0,2)==="on"&&z(T[K])&&K!=="onRefreshInit"?oe(K,T[K]):T[K];return z(k)&&(k=k(),Un(St,"refresh",function(){return k=T.batchMax()})),We(V).forEach(function(Le){var ot={};for(K in A)ot[K]=A[K];ot.trigger=Le,D.push(St.create(ot))}),D};var Sf=function(T,D,A,w){return D>w?T(w):D<0&&T(0),A>w?(w-D)/(A-D):A<0?D/(D-A):1},su=function V(T,D){D===!0?T.style.removeProperty("touch-action"):T.style.touchAction=D===!0?"auto":D?"pan-"+D+(Pe.isTouch?" pinch-zoom":""):"none",T===G&&V(Je,D)},jl={auto:1,scroll:1},j_=function(T){var D=T.event,A=T.target,w=T.axis,k=(D.changedTouches?D.changedTouches[0]:D).target,oe=k._gsap||ce.core.getCache(k),K=Y(),Le;if(!oe._isScrollT||K-oe._isScrollT>2e3){for(;k&&k!==Je&&(k.scrollHeight<=k.clientHeight&&k.scrollWidth<=k.clientWidth||!(jl[(Le=In(k)).overflowY]||jl[Le.overflowX]));)k=k.parentNode;oe._isScroll=k&&k!==A&&!Wi(k)&&(jl[(Le=In(k)).overflowY]||jl[Le.overflowX]),oe._isScrollT=K}(oe._isScroll||w==="x")&&(D.stopPropagation(),D._gsapAllow=!0)},Ef=function(T,D,A,w){return Pe.create({target:T,capture:!0,debounce:!1,lockAxis:!0,type:D,onWheel:w=w&&j_,onPress:w,onDrag:w,onScroll:w,onEnable:function(){return A&&Un(Me,Pe.eventTypes[0],bf,!1,!0)},onDisable:function(){return Nn(Me,Pe.eventTypes[0],bf,!0)}})},q_=/(input|label|select|textarea)/i,Tf,bf=function(T){var D=q_.test(T.target.tagName);(D||Tf)&&(T._gsapAllow=!0,Tf=D)},K_=function(T){H(T)||(T={}),T.preventDefault=T.isNormalizer=T.allowClicks=!0,T.type||(T.type="wheel,touch"),T.debounce=!!T.debounce,T.id=T.id||"normalizer";var D=T,A=D.normalizeScrollX,w=D.momentum,k=D.allowNestedScroll,oe=D.onRelease,K,Le,ot=re(T.target)||G,Lt=ce.core.globals().ScrollSmoother,Pt=Lt&&Lt.get(),Xe=Te&&(T.content&&re(T.content)||Pt&&T.content!==!1&&!Pt.smooth()&&Pt.content()),he=W(ot,Q),qe=W(ot,$),dn=1,Qt=(Pe.isTouch&&Ce.visualViewport?Ce.visualViewport.scale*Ce.visualViewport.width:Ce.outerWidth)/Ce.innerWidth,bn=0,tn=z(w)?function(){return w(K)}:function(){return w||2.8},Hn,pt,Xi=Ef(ot,T.type,!0,k),en=function(){return pt=!1},at=qt,li=qt,vi=function(){Le=rr(ot,Q),li=Mt(Te?1:0,Le),A&&(at=Mt(0,rr(ot,$))),Hn=Vs},Ye=function(){Xe._gsap.y=us(parseFloat(Xe._gsap.y)+he.offset)+"px",Xe.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(Xe._gsap.y)+", 0, 1)",he.offset=he.cacheID=0},Gn=function(){if(pt){requestAnimationFrame(en);var vn=us(K.deltaY/2),xn=li(he.v-vn);if(Xe&&xn!==he.v+he.offset){he.offset=xn-he.v;var q=us((parseFloat(Xe&&Xe._gsap.y)||0)-he.offset);Xe.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+q+", 0, 1)",Xe._gsap.y=q+"px",he.cacheID=M.cache,kr()}return!0}he.offset&&Ye(),pt=!0},lt,zr,An,ci,ui=function(){vi(),lt.isActive()&&lt.vars.scrollY>Le&&(he()>Le?lt.progress(1)&&he(Le):lt.resetTo("scrollY",Le))};return Xe&&ce.set(Xe,{y:"+=0"}),T.ignoreCheck=function(Vt){return Te&&Vt.type==="touchmove"&&Gn()||dn>1.05&&Vt.type!=="touchstart"||K.isGesturing||Vt.touches&&Vt.touches.length>1},T.onPress=function(){pt=!1;var Vt=dn;dn=us((Ce.visualViewport&&Ce.visualViewport.scale||1)/Qt),lt.pause(),Vt!==dn&&su(ot,dn>1.01?!0:A?!1:"x"),zr=qe(),An=he(),vi(),Hn=Vs},T.onRelease=T.onGestureStart=function(Vt,vn){if(he.offset&&Ye(),!vn)ci.restart(!0);else{M.cache++;var xn=tn(),q,wn;A&&(q=qe(),wn=q+xn*.05*-Vt.velocityX/.227,xn*=Sf(qe,q,wn,rr(ot,$)),lt.vars.scrollX=at(wn)),q=he(),wn=q+xn*.05*-Vt.velocityY/.227,xn*=Sf(he,q,wn,rr(ot,Q)),lt.vars.scrollY=li(wn),lt.invalidate().duration(xn).play(.01),(Te&&lt.vars.scrollY>=Le||q>=Le-1)&&ce.to({},{onUpdate:ui,duration:xn})}oe&&oe(Vt)},T.onWheel=function(){lt._ts&&lt.pause(),Y()-bn>1e3&&(Hn=0,bn=Y())},T.onChange=function(Vt,vn,xn,q,wn){if(Vs!==Hn&&vi(),vn&&A&&qe(at(q[2]===vn?zr+(Vt.startX-Vt.x):qe()+vn-q[1])),xn){he.offset&&Ye();var Xs=wn[2]===xn,hs=Xs?An+Vt.startY-Vt.y:he()+xn-wn[1],Yi=li(hs);Xs&&hs!==Yi&&(An+=Yi-hs),he(Yi)}(xn||vn)&&kr()},T.onEnable=function(){su(ot,A?!1:"x"),St.addEventListener("refresh",ui),Un(Ce,"resize",ui),he.smooth&&(he.target.style.scrollBehavior="auto",he.smooth=qe.smooth=!1),Xi.enable()},T.onDisable=function(){su(ot,!0),Nn(Ce,"resize",ui),St.removeEventListener("refresh",ui),Xi.kill()},T.lockAxis=T.lockAxis!==!1,K=new Pe(T),K.iOS=Te,Te&&!he()&&he(1),Te&&ce.ticker.add(qt),ci=K._dc,lt=ce.to(K,{ease:"power4",paused:!0,scrollX:A?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yf(he,he(),function(){return lt.pause()})},onUpdate:kr,onComplete:ci.vars.onComplete}),K};St.sort=function(V){return vt.sort(V||function(T,D){return(T.vars.refreshPriority||0)*-1e6+T.start-(D.start+(D.vars.refreshPriority||0)*-1e6)})},St.observe=function(V){return new Pe(V)},St.normalizeScroll=function(V){if(typeof V>"u")return fe;if(V===!0&&fe)return fe.enable();if(V===!1)return fe&&fe.kill();var T=V instanceof Pe?V:K_(V);return fe&&fe.target===T.target&&fe.kill(),Wi(T.target)&&(fe=T),T},St.core={_getVelocityProp:te,_inputObserver:Ef,_scrollers:M,_proxies:C,bridge:{ss:function(){xe||Gs("scrollStart"),xe=Y()},ref:function(){return Ge}}},Il()&&ce.registerPlugin(St),t.ScrollTrigger=St,t.default=St,typeof window>"u"||window!==t?Object.defineProperty(t,"__esModule",{value:!0}):delete window.default})})(Ch,Ch.exports);var wb=Ch.exports;class Rb{constructor(){this.experience=new Gi,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.camera=this.experience.camera,this.room=this.experience.world.room.actualRoom,this.deviceType=this.experience.sizes.deviceType,gl.registerPlugin(wb.ScrollTrigger),this.setPath()}setPath(){this.timeline=new gl.timeline,this.timeline2=new gl.timeline,this.deviceType==="desktop"?(this.timeline.to(this.camera.perspectiveCamera.position,{x:-1.88499,y:1.618579,z:2.49078,scrollTrigger:{trigger:".hero",start:"top-=100px top",end:"bottom .about",scrub:!0,onEnter:e=>{document.querySelectorAll(".experience").forEach(n=>{n.classList.remove("relative")})},onLeaveBack:e=>{document.querySelectorAll(".experience").forEach(n=>{n.classList.add("relative")})},onEnterBack:e=>{document.querySelectorAll(".experience").forEach(n=>{n.classList.remove("relative")})},onLeave:e=>{document.querySelectorAll(".experience").forEach(n=>{n.classList.add("relative")})}}}),this.timeline2.to(this.camera.perspectiveCamera.rotation,{x:-.3141,y:-.45459999,z:-.141716,scrollTrigger:{trigger:".hero",start:"top-=100px top",end:"bottom .about",scrub:!0,onEnter:e=>{document.querySelectorAll(".experience").forEach(n=>{n.classList.remove("relative")})},onLeaveBack:e=>{document.querySelectorAll(".experience").forEach(n=>{n.classList.add("relative")})},onEnterBack:e=>{document.querySelectorAll(".experience").forEach(n=>{n.classList.remove("relative")})},onLeave:e=>{document.querySelectorAll(".experience").forEach(n=>{n.classList.add("relative")})}}})):document.querySelectorAll(".experience").forEach(t=>{t.classList.add("relative")})}resize(){}update(){}}class Cb{constructor(){this.experience=new Gi,this.scene=this.experience.scene,this.resources=this.experience.resources,this.setSunlight()}setSunlight(){this.sunLight=new Pm("#ffffff",3),this.sunLight.castShadow=!0,this.sunLight.shadow.camera.far=20,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(-1.5,7,3),this.scene.add(this.sunLight),this.ambientLight=new eE("#ffffff",1),this.scene.add(this.ambientLight)}resize(){}update(){}}class Lb{constructor(){this.experience=new Gi,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.resources=this.experience.resources,this.deviceType=this.sizes.deviceType,this.resources.on("ready",()=>{this.environment=new Cb,this.room=new bb,this.floor=new Ab,this.controls=new Rb})}resize(){}update(){this.room&&this.room.update(),this.controls&&this.deviceType==="desktop"&&this.controls.update()}}const fa=class{constructor(e,t){if(t&&(fa.instance=null),fa.instance)return fa.instance;fa.instance=this,this.canvas=e,this.scene=new wS,this.time=new EE,this.sizes=new SE,this.camera=new cT,this.renderer=new uT,this.resources=new sT(oT),this.world=new Lb,this.sizes.on("resize",()=>{this.resize()}),this.time.on("update",()=>{this.update()})}resize(){this.camera.resize(),this.world.resize(),this.renderer.resize()}update(){this.camera.update(),this.world.update(),this.renderer.update()}};let Gi=fa;wf(Gi,"instance");function Pb(s){let e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,p,m,y,v,E,M,C,S,I,x,R;return{c(){e=ze("section"),t=ze("div"),n=ze("h2"),i=cn("About Me"),r=$t(),o=ze("p"),a=cn(`Hey, I'm Jon, an 18-year-old programming enthusiast. I caught the coding bug at age 12,\r
            and it's been an exciting journey ever since. Web development has become my passion, and\r
            with my recent completion of the matura, I'm all set to explore computer science\r
            in-depth. This website showcases my\r
            `),l=ze("a"),c=cn("projects"),u=cn(`\r
            and provides a way to `),h=ze("a"),f=cn("connect"),d=cn(`.\r
            `),g=ze("br"),_=$t(),p=ze("br"),m=cn(`\r
            Happy coding!\r
            `),y=ze("br"),v=$t(),E=ze("span"),M=cn("Jon"),C=$t(),S=ze("div"),I=ze("span"),x=$t(),R=ze("div"),this.h()},l(X){e=He(X,"SECTION",{class:!0,id:!0});var ne=gt(e);t=He(ne,"DIV",{class:!0});var F=gt(t);n=He(F,"H2",{});var j=gt(n);i=un(j,"About Me"),j.forEach(Oe),r=Zt(F),o=He(F,"P",{});var B=gt(o);a=un(B,`Hey, I'm Jon, an 18-year-old programming enthusiast. I caught the coding bug at age 12,\r
            and it's been an exciting journey ever since. Web development has become my passion, and\r
            with my recent completion of the matura, I'm all set to explore computer science\r
            in-depth. This website showcases my\r
            `),l=He(B,"A",{href:!0,style:!0});var le=gt(l);c=un(le,"projects"),le.forEach(Oe),u=un(B,`\r
            and provides a way to `),h=He(B,"A",{href:!0,style:!0});var Z=gt(h);f=un(Z,"connect"),Z.forEach(Oe),d=un(B,`.\r
            `),g=He(B,"BR",{}),_=Zt(B),p=He(B,"BR",{}),m=un(B,`\r
            Happy coding!\r
            `),y=He(B,"BR",{}),v=Zt(B),E=He(B,"SPAN",{});var $=gt(E);M=un($,"Jon"),$.forEach(Oe),B.forEach(Oe),F.forEach(Oe),C=Zt(ne),S=He(ne,"DIV",{id:!0});var Q=gt(S);I=He(Q,"SPAN",{class:!0}),gt(I).forEach(Oe),Q.forEach(Oe),x=Zt(ne),R=He(ne,"DIV",{class:!0,id:!0});var re=gt(R);re.forEach(Oe),ne.forEach(Oe),this.h()},h(){Re(l,"href","/projects"),es(l,"color","var(--white)"),Re(h,"href","#contact"),es(h,"color","var(--white)"),Re(t,"class","text"),Re(I,"class","loader"),Re(S,"id","loading-screen"),Re(R,"class","experience"),Re(R,"id","experience"),Re(e,"class","about"),Re(e,"id","about")},m(X,ne){Oi(X,e,ne),_e(e,t),_e(t,n),_e(n,i),_e(t,r),_e(t,o),_e(o,a),_e(o,l),_e(l,c),_e(o,u),_e(o,h),_e(h,f),_e(o,d),_e(o,g),_e(o,_),_e(o,p),_e(o,m),_e(o,y),_e(o,v),_e(o,E),_e(E,M),_e(e,C),_e(e,S),_e(S,I),_e(e,x),_e(e,R)},p:Ur,i:Ur,o:Ur,d(X){X&&Oe(e)}}}function Ib(s){let e;return J_(()=>{e=document.createElement("canvas"),e.className="experience-canvas",document.getElementById("experience").appendChild(e),new Gi(e,!0)}),[]}class Db extends Na{constructor(e){super(),Oa(this,e,Ib,Pb,Fa,{})}}function Op(s,e,t){const n=s.slice();return n[1]=e[t],n}function Fp(s){let e,t;return e=new ig({props:{project:s[1]}}),{c(){ia(e.$$.fragment)},l(n){ra(e.$$.fragment,n)},m(n,i){sa(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.project=n[1]),e.$set(r)},i(n){t||(Qi(e.$$.fragment,n),t=!0)},o(n){Ir(e.$$.fragment,n),t=!1},d(n){oa(e,n)}}}function Bp(s){let e,t,n=s[1].public&&s[1].main&&Fp(s);return{c(){n&&n.c(),e=Rf()},l(i){n&&n.l(i),e=Rf()},m(i,r){n&&n.m(i,r),Oi(i,e,r),t=!0},p(i,r){i[1].public&&i[1].main?n?(n.p(i,r),r&1&&Qi(n,1)):(n=Fp(i),n.c(),Qi(n,1),n.m(e.parentNode,e)):n&&(kp(),Ir(n,1,1,()=>{n=null}),zp())},i(i){t||(Qi(n),t=!0)},o(i){Ir(n),t=!1},d(i){n&&n.d(i),i&&Oe(e)}}}function Ub(s){let e,t,n=s[0],i=[];for(let o=0;o<n.length;o+=1)i[o]=Bp(Op(s,n,o));const r=o=>Ir(i[o],1,1,()=>{i[o]=null});return{c(){e=ze("div");for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=He(o,"DIV",{class:!0});var a=gt(e);for(let l=0;l<i.length;l+=1)i[l].l(a);a.forEach(Oe),this.h()},h(){Re(e,"class","projects-container")},m(o,a){Oi(o,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);t=!0},p(o,[a]){if(a&1){n=o[0];let l;for(l=0;l<n.length;l+=1){const c=Op(o,n,l);i[l]?(i[l].p(c,a),Qi(i[l],1)):(i[l]=Bp(c),i[l].c(),Qi(i[l],1),i[l].m(e,null))}for(kp(),l=n.length;l<i.length;l+=1)r(l);zp()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)Qi(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)Ir(i[a]);t=!1},d(o){o&&Oe(e),Q_(i,o)}}}function Nb(s,e,t){let{projects:n}=e;return s.$$set=i=>{"projects"in i&&t(0,n=i.projects)},[n]}class Ob extends Na{constructor(e){super(),Oa(this,e,Nb,Ub,Fa,{projects:0})}}function Fb(s){let e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,p,m;return u=new Ob({props:{projects:rg}}),{c(){e=ze("section"),t=ze("h2"),n=cn("Projects"),i=$t(),r=ze("p"),o=cn("View all my projects "),a=ze("a"),l=cn("here"),c=$t(),ia(u.$$.fragment),h=$t(),f=ze("div"),d=ze("button"),g=cn("All my projects"),this.h()},l(y){e=He(y,"SECTION",{class:!0});var v=gt(e);t=He(v,"H2",{});var E=gt(t);n=un(E,"Projects"),E.forEach(Oe),i=Zt(v),r=He(v,"P",{class:!0});var M=gt(r);o=un(M,"View all my projects "),a=He(M,"A",{href:!0});var C=gt(a);l=un(C,"here"),C.forEach(Oe),M.forEach(Oe),c=Zt(v),ra(u.$$.fragment,v),h=Zt(v),f=He(v,"DIV",{class:!0});var S=gt(f);d=He(S,"BUTTON",{class:!0});var I=gt(d);g=un(I,"All my projects"),I.forEach(Oe),S.forEach(Oe),v.forEach(Oe),this.h()},h(){Re(a,"href","/projects"),Re(r,"class","title-info"),Re(d,"class","btn accent"),Re(f,"class","center"),Re(e,"class","projects")},m(y,v){Oi(y,e,v),_e(e,t),_e(t,n),_e(e,i),_e(e,r),_e(r,o),_e(r,a),_e(a,l),_e(e,c),sa(u,e,null),_e(e,h),_e(e,f),_e(f,d),_e(d,g),_=!0,p||(m=na(d,"click",s[0]),p=!0)},p:Ur,i(y){_||(Qi(u.$$.fragment,y),_=!0)},o(y){Ir(u.$$.fragment,y),_=!1},d(y){y&&Oe(e),oa(u),p=!1,m()}}}function Bb(s){return[()=>Hp("/projects")]}class kb extends Na{constructor(e){super(),Oa(this,e,Bb,Fb,Fa,{})}}function zb(s){let e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,p,m,y,v,E,M,C,S,I,x,R,X,ne,F,j,B,le,Z,$,Q,re,W,te,ye,ge,Ee,De,Pe,ce,ht;return{c(){e=ze("section"),t=ze("h2"),n=cn("Contact"),i=$t(),r=ze("p"),o=cn("Get in touch with me 👋"),a=$t(),l=ze("form"),c=ze("div"),u=ze("label"),h=cn("Name"),f=$t(),d=ze("div"),g=ze("input"),_=$t(),p=ze("img"),v=$t(),E=ze("div"),M=ze("label"),C=cn("Email"),S=$t(),I=ze("div"),x=ze("input"),R=$t(),X=ze("img"),j=$t(),B=ze("div"),le=ze("label"),Z=cn("Message"),$=$t(),Q=ze("div"),re=ze("textarea"),W=$t(),te=ze("img"),Ee=$t(),De=ze("button"),Pe=cn("Send"),this.h()},l(Ce){e=He(Ce,"SECTION",{class:!0,id:!0});var Me=gt(e);t=He(Me,"H2",{});var G=gt(t);n=un(G,"Contact"),G.forEach(Oe),i=Zt(Me),r=He(Me,"P",{class:!0});var Je=gt(r);o=un(Je,"Get in touch with me 👋"),Je.forEach(Oe),a=Zt(Me),l=He(Me,"FORM",{id:!0});var Ne=gt(l);c=He(Ne,"DIV",{class:!0});var Ve=gt(c);u=He(Ve,"LABEL",{for:!0});var We=gt(u);h=un(We,"Name"),We.forEach(Oe),f=Zt(Ve),d=He(Ve,"DIV",{class:!0});var Mt=gt(d);g=He(Mt,"INPUT",{type:!0,name:!0,id:!0}),_=Zt(Mt),p=He(Mt,"IMG",{src:!0,class:!0,style:!0}),Mt.forEach(Oe),Ve.forEach(Oe),v=Zt(Ne),E=He(Ne,"DIV",{class:!0});var Qe=gt(E);M=He(Qe,"LABEL",{for:!0});var Ke=gt(M);C=un(Ke,"Email"),Ke.forEach(Oe),S=Zt(Qe),I=He(Qe,"DIV",{class:!0});var Ge=gt(I);x=He(Ge,"INPUT",{type:!0,name:!0,id:!0}),R=Zt(Ge),X=He(Ge,"IMG",{src:!0,class:!0,style:!0}),Ge.forEach(Oe),Qe.forEach(Oe),j=Zt(Ne),B=He(Ne,"DIV",{class:!0});var Ot=gt(B);le=He(Ot,"LABEL",{for:!0});var Jt=gt(le);Z=un(Jt,"Message"),Jt.forEach(Oe),$=Zt(Ot),Q=He(Ot,"DIV",{class:!0});var P=gt(Q);re=He(P,"TEXTAREA",{name:!0,id:!0}),gt(re).forEach(Oe),W=Zt(P),te=He(P,"IMG",{src:!0,class:!0,style:!0}),P.forEach(Oe),Ot.forEach(Oe),Ee=Zt(Ne),De=He(Ne,"BUTTON",{class:!0,type:!0,title:!0});var b=gt(De);Pe=un(b,"Send"),b.forEach(Oe),Ne.forEach(Oe),Me.forEach(Oe),this.h()},h(){Re(r,"class","title-info"),Re(u,"for","nameInput"),Re(g,"type","text"),Re(g,"name","name"),Re(g,"id","nameInput"),g.required=!0,Do(p.src,m="/google-icons/"+(s[0]?"check":"close")+".svg")||Re(p,"src",m),Re(p,"class",y=(s[0]?"":"red")+" center"),es(p,"display",s[3]),Re(d,"class","validation"),Re(c,"class","inputLabel"),Re(M,"for","emailInput"),Re(x,"type","text"),Re(x,"name","email"),Re(x,"id","emailInput"),x.required=!0,Do(X.src,ne="/google-icons/"+(s[1]?"check":"close")+".svg")||Re(X,"src",ne),Re(X,"class",F=(s[1]?"":"red")+" center"),es(X,"display",s[4]),Re(I,"class","validation"),Re(E,"class","inputLabel"),Re(le,"for","messageInput"),Re(re,"name","message"),Re(re,"id","messageInput"),re.required=!0,Do(te.src,ye="/google-icons/"+(s[2]?"check":"close")+".svg")||Re(te,"src",ye),Re(te,"class",ge=(s[2]?"":"red")+" bottom"),es(te,"display",s[5]),Re(Q,"class","validation"),Re(B,"class","inputLabel"),Re(De,"class","btn primary"),Re(De,"type","submit"),De.disabled=s[6],Re(De,"title",s[7]),Re(l,"id","form"),Re(e,"class","contactForm"),Re(e,"id","contact")},m(Ce,Me){Oi(Ce,e,Me),_e(e,t),_e(t,n),_e(e,i),_e(e,r),_e(r,o),_e(e,a),_e(e,l),_e(l,c),_e(c,u),_e(u,h),_e(c,f),_e(c,d),_e(d,g),_e(d,_),_e(d,p),_e(l,v),_e(l,E),_e(E,M),_e(M,C),_e(E,S),_e(E,I),_e(I,x),_e(I,R),_e(I,X),_e(l,j),_e(l,B),_e(B,le),_e(le,Z),_e(B,$),_e(B,Q),_e(Q,re),_e(Q,W),_e(Q,te),_e(l,Ee),_e(l,De),_e(De,Pe),ce||(ht=[na(g,"keyup",s[8]),na(x,"keyup",s[9]),na(re,"keyup",s[10]),na(l,"submit",eg(s[11]))],ce=!0)},p(Ce,[Me]){Me&1&&!Do(p.src,m="/google-icons/"+(Ce[0]?"check":"close")+".svg")&&Re(p,"src",m),Me&1&&y!==(y=(Ce[0]?"":"red")+" center")&&Re(p,"class",y),Me&8&&es(p,"display",Ce[3]),Me&2&&!Do(X.src,ne="/google-icons/"+(Ce[1]?"check":"close")+".svg")&&Re(X,"src",ne),Me&2&&F!==(F=(Ce[1]?"":"red")+" center")&&Re(X,"class",F),Me&16&&es(X,"display",Ce[4]),Me&4&&!Do(te.src,ye="/google-icons/"+(Ce[2]?"check":"close")+".svg")&&Re(te,"src",ye),Me&4&&ge!==(ge=(Ce[2]?"":"red")+" bottom")&&Re(te,"class",ge),Me&32&&es(te,"display",Ce[5]),Me&64&&(De.disabled=Ce[6]),Me&128&&Re(De,"title",Ce[7])},i:Ur,o:Ur,d(Ce){Ce&&Oe(e),ce=!1,tg(ht)}}}function Hb(s,e,t){let n=!1,i=!1,r=!1,o="none",a="none",l="none",c=!0,u="Please fill out all fields";function h(_){t(3,o="block"),t(0,n=!!_.target.value)}function f(_){t(4,a="block");var p=_.target.value.indexOf("@"),m=_.target.value.lastIndexOf(".");t(1,i=p>0&&m>p+1&&m<_.target.value.length-1)}function d(_){t(5,l="block"),t(2,r=!!_.target.value)}const g=async _=>{let p=new FormData;p.append("name",_.target.name.value),p.append("email",_.target.email.value),p.append("message",_.target.message.value),await fetch("/sendEmail.php",{method:"POST",body:p}),alert("Message sent successfully. You will receive a confirmation email shortly."),document.getElementById("form").reset()};return s.$$.update=()=>{s.$$.dirty&7&&(n&&i&&r?(t(7,u="Send message"),t(6,c=!1)):(t(7,u="Please fill out all fields"),t(6,c=!0)))},[n,i,r,o,a,l,c,u,h,f,d,g]}class Gb extends Na{constructor(e){super(),Oa(this,e,Hb,zb,Fa,{})}}function Vb(s){let e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,p,m,y,v,E,M,C;return h=new ag({}),d=new Db({}),_=new kb({}),y=new Gb({}),{c(){e=ze("meta"),t=ze("link"),n=ze("meta"),i=ze("meta"),r=ze("meta"),o=ze("meta"),a=ze("meta"),l=ze("meta"),c=ze("meta"),u=$t(),ia(h.$$.fragment),f=$t(),ia(d.$$.fragment),g=$t(),ia(_.$$.fragment),p=$t(),m=ze("section"),ia(y.$$.fragment),v=$t(),E=ze("a"),M=cn("Mastodon"),this.h()},l(S){const I=ng("svelte-1wc2ehq",document.head);e=He(I,"META",{name:!0,content:!0}),t=He(I,"LINK",{rel:!0,href:!0}),n=He(I,"META",{property:!0,content:!0}),i=He(I,"META",{property:!0,content:!0}),r=He(I,"META",{property:!0,content:!0}),o=He(I,"META",{property:!0,content:!0}),a=He(I,"META",{name:!0,content:!0}),l=He(I,"META",{name:!0,content:!0}),c=He(I,"META",{name:!0,content:!0}),I.forEach(Oe),u=Zt(S),ra(h.$$.fragment,S),f=Zt(S),ra(d.$$.fragment,S),g=Zt(S),ra(_.$$.fragment,S),p=Zt(S),m=He(S,"SECTION",{class:!0});var x=gt(m);ra(y.$$.fragment,x),x.forEach(Oe),v=Zt(S),E=He(S,"A",{rel:!0,href:!0,style:!0});var R=gt(E);M=un(R,"Mastodon"),R.forEach(Oe),this.h()},h(){document.title="Jon Jampen | Coding enthusiast",Re(e,"name","description"),Re(e,"content",`I'm Jon, an 18-year-old programming enthusiast. I
    started programming at age 12, and web
    development has become my passion. Now I'm all
    set to explore computer science in-depth. This website showcases my projects and
    provides a way to connect.`),Re(t,"rel","“canonical“"),Re(t,"href","https://jonjampen.ch"),Re(n,"property","og:title"),Re(n,"content","Jon Jampen | Coding enthusiast"),Re(i,"property","og:url"),Re(i,"content","https://jonjampen.ch"),Re(r,"property","og:description"),Re(r,"content","I'm Jon, an 18-year-old programming enthusiast. I started programming at age 12, and web development has become my passion. Now I'm all set to explore computer science in-depth. This website showcases my projects and provides a way to connect."),Re(o,"property","og:image"),Re(o,"content","/favicon.svg"),Re(a,"name","twitter:card"),Re(a,"content","summary_large_image"),Re(l,"name","twitter:title"),Re(l,"content","Jon Jampen | Coding enthusiast"),Re(c,"name","twitter:description"),Re(c,"content","I'm Jon, an 18-year-old programming enthusiast. I started programming at age 12, and web development has become my passion. Now I'm all set to explore computer science in-depth. This website showcases my projects and provides a way to connect."),Re(m,"class","contact"),Re(E,"rel","me"),Re(E,"href","https://mastodon.social/@jonjampen"),es(E,"display","none")},m(S,I){_e(document.head,e),_e(document.head,t),_e(document.head,n),_e(document.head,i),_e(document.head,r),_e(document.head,o),_e(document.head,a),_e(document.head,l),_e(document.head,c),Oi(S,u,I),sa(h,S,I),Oi(S,f,I),sa(d,S,I),Oi(S,g,I),sa(_,S,I),Oi(S,p,I),Oi(S,m,I),sa(y,m,null),Oi(S,v,I),Oi(S,E,I),_e(E,M),C=!0},p:Ur,i(S){C||(Qi(h.$$.fragment,S),Qi(d.$$.fragment,S),Qi(_.$$.fragment,S),Qi(y.$$.fragment,S),C=!0)},o(S){Ir(h.$$.fragment,S),Ir(d.$$.fragment,S),Ir(_.$$.fragment,S),Ir(y.$$.fragment,S),C=!1},d(S){Oe(e),Oe(t),Oe(n),Oe(i),Oe(r),Oe(o),Oe(a),Oe(l),Oe(c),S&&Oe(u),oa(h,S),S&&Oe(f),oa(d,S),S&&Oe(g),oa(_,S),S&&Oe(p),S&&Oe(m),oa(y),S&&Oe(v),S&&Oe(E)}}}class Zb extends Na{constructor(e){super(),Oa(this,e,null,Vb,Fa,{})}}export{Zb as component,qb as universal};
