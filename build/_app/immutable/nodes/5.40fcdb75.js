import{p as Re}from"../chunks/projects.8f0cb070.js";import{H as Se}from"../chunks/control.f5b05b5f.js";import{_ as z}from"../chunks/preload-helper.41c905a7.js";import{S as qe,i as Ce,s as Ge,x as Te,k as i,a as I,q as B,y as Ve,H as Ne,l as c,h as l,c as y,m as p,r as F,z as ze,n as r,D as o,b as K,A as Me,d as $e,f as Be,g as Je,B as Le,O as Fe,o as Ke,C as ge,F as re,v as Ue}from"../chunks/index.9e2cf2f4.js";function Qe(a,e){return new Se(a,e)}new TextEncoder;const We=({params:a})=>{let e=!1;if(Re.map(t=>{t.slug===a.projectSlug&&(e=t)}),!e)throw Qe(404,"Project not found");return{project:{...e}}},st=Object.freeze(Object.defineProperty({__proto__:null,load:We},Symbol.toStringTag,{value:"Module"})),Xe=(a,e)=>{const t=a[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((d,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function Oe(a,e,t){const d=a.slice();return d[4]=e[t],d}function Ye(a){let e,t,d;return{c(){e=i("a"),t=i("img"),this.h()},l(n){e=c(n,"A",{href:!0,target:!0});var u=p(e);t=c(u,"IMG",{src:!0,alt:!0,class:!0}),u.forEach(l),this.h()},h(){ge(t.src,d="/google-icons/external.svg")||r(t,"src",d),r(t,"alt","Live version of the Project"),r(t,"class","icon"),r(e,"href",a[1].links.website),r(e,"target","_blank")},m(n,u){K(n,e,u),o(e,t)},p:re,d(n){n&&l(e)}}}function Ze(a){let e,t,d;return{c(){e=i("a"),t=i("img"),this.h()},l(n){e=c(n,"A",{href:!0,target:!0});var u=p(e);t=c(u,"IMG",{src:!0,alt:!0,class:!0}),u.forEach(l),this.h()},h(){ge(t.src,d="/google-icons/github.svg")||r(t,"src",d),r(t,"alt","Project on GitHub"),r(t,"class","icon"),r(e,"href",a[1].links.github),r(e,"target","_blank")},m(n,u){K(n,e,u),o(e,t)},p:re,d(n){n&&l(e)}}}function xe(a){let e,t,d;return{c(){e=i("a"),t=i("img"),this.h()},l(n){e=c(n,"A",{href:!0,target:!0,download:!0});var u=p(e);t=c(u,"IMG",{src:!0,alt:!0,class:!0}),u.forEach(l),this.h()},h(){ge(t.src,d="/google-icons/download.svg")||r(t,"src",d),r(t,"alt","Download"),r(t,"class","icon"),r(e,"href",a[1].links.download),r(e,"target","_blank"),r(e,"download","")},m(n,u){K(n,e,u),o(e,t)},p:re,d(n){n&&l(e)}}}function He(a){let e,t=a[4]+"",d;return{c(){e=i("div"),d=B(t),this.h()},l(n){e=c(n,"DIV",{class:!0});var u=p(e);d=F(u,t),u.forEach(l),this.h()},h(){r(e,"class","stack-tag")},m(n,u){K(n,e,u),o(e,d)},p:re,d(n){n&&l(e)}}}function et(a){let e,t,d,n,u,g,E,L,O,H,Y,b,A,R,D,U,Ee=a[1].title+"",ae,oe,S,q,be=a[1].date+"",ne,le,se,M,f,ie,P,T,Q,ce,ue,v,de,me,_e,V,W,fe,pe,$,X;document.title=e=a[1].title+" by Jon Jampen";var C=a[0];function ke(s){return{}}C&&(f=Te(C,ke()));let k=a[1].links.website&&Ye(a),j=a[1].links.github&&Ze(a),w=a[1].links.download&&xe(a),G=a[1].stack,h=[];for(let s=0;s<G.length;s+=1)h[s]=He(Oe(a,G,s));return{c(){t=i("meta"),d=i("link"),n=i("meta"),u=i("meta"),g=i("meta"),E=i("meta"),L=i("meta"),O=i("meta"),H=i("meta"),Y=I(),b=i("section"),A=i("div"),R=i("div"),D=i("div"),U=i("h1"),ae=B(Ee),oe=I(),S=i("div"),q=i("p"),ne=B(be),le=B(" • Jon Jampen"),se=I(),M=i("article"),f&&Ve(f.$$.fragment),ie=I(),P=i("div"),T=i("div"),Q=i("h3"),ce=B("Project Links"),ue=I(),v=i("div"),k&&k.c(),de=I(),j&&j.c(),me=I(),w&&w.c(),_e=I(),V=i("div"),W=i("h3"),fe=B("Project Stack"),pe=I(),$=i("div");for(let s=0;s<h.length;s+=1)h[s].c();this.h()},l(s){const _=Ne("svelte-m118uw",document.head);t=c(_,"META",{name:!0,content:!0}),d=c(_,"LINK",{rel:!0,href:!0}),n=c(_,"META",{property:!0,content:!0}),u=c(_,"META",{property:!0,content:!0}),g=c(_,"META",{property:!0,content:!0}),E=c(_,"META",{property:!0,content:!0}),L=c(_,"META",{name:!0,content:!0}),O=c(_,"META",{name:!0,content:!0}),H=c(_,"META",{name:!0,content:!0}),_.forEach(l),Y=y(s),b=c(s,"SECTION",{class:!0});var m=p(b);A=c(m,"DIV",{class:!0});var J=p(A);R=c(J,"DIV",{class:!0});var je=p(R);D=c(je,"DIV",{class:!0});var Z=p(D);U=c(Z,"H1",{});var we=p(U);ae=F(we,Ee),we.forEach(l),oe=y(Z),S=c(Z,"DIV",{class:!0});var Ie=p(S);q=c(Ie,"P",{});var he=p(q);ne=F(he,be),le=F(he," • Jon Jampen"),he.forEach(l),Ie.forEach(l),Z.forEach(l),je.forEach(l),se=y(J),M=c(J,"ARTICLE",{class:!0});var ye=p(M);f&&ze(f.$$.fragment,ye),ye.forEach(l),J.forEach(l),ie=y(m),P=c(m,"DIV",{class:!0});var x=p(P);T=c(x,"DIV",{class:!0});var ee=p(T);Q=c(ee,"H3",{});var Ae=p(Q);ce=F(Ae,"Project Links"),Ae.forEach(l),ue=y(ee),v=c(ee,"DIV",{class:!0});var N=p(v);k&&k.l(N),de=y(N),j&&j.l(N),me=y(N),w&&w.l(N),N.forEach(l),ee.forEach(l),_e=y(x),V=c(x,"DIV",{class:!0});var te=p(V);W=c(te,"H3",{});var De=p(W);fe=F(De,"Project Stack"),De.forEach(l),pe=y(te),$=c(te,"DIV",{class:!0});var Pe=p($);for(let ve=0;ve<h.length;ve+=1)h[ve].l(Pe);Pe.forEach(l),te.forEach(l),x.forEach(l),m.forEach(l),this.h()},h(){r(t,"name","description"),r(t,"content",a[1].description),r(d,"rel","“canonical“"),r(d,"href","https://jonjampen.ch/projects/"+a[1].slug),r(n,"property","og:title"),r(n,"content",a[1].title+" by Jon Jampen"),r(u,"property","og:url"),r(u,"content","https://jonjampen.ch/projects/"+a[1].slug),r(g,"property","og:description"),r(g,"content",a[1].description),r(E,"property","og:image"),r(E,"content",a[1].image),r(L,"name","twitter:card"),r(L,"content","summary_large_image"),r(O,"name","twitter:title"),r(O,"content",a[1].title+" by Jon Jampen"),r(H,"name","twitter:description"),r(H,"content",a[1].description),r(S,"class","meta"),r(D,"class","title"),r(R,"class","titlebar"),r(M,"class","body"),r(A,"class","content card"),r(v,"class","icons"),r(T,"class","links card"),r($,"class","stack"),r(V,"class","tags card"),r(P,"class","right-content"),r(b,"class","project-content")},m(s,_){o(document.head,t),o(document.head,d),o(document.head,n),o(document.head,u),o(document.head,g),o(document.head,E),o(document.head,L),o(document.head,O),o(document.head,H),K(s,Y,_),K(s,b,_),o(b,A),o(A,R),o(R,D),o(D,U),o(U,ae),o(D,oe),o(D,S),o(S,q),o(q,ne),o(q,le),o(A,se),o(A,M),f&&Me(f,M,null),o(b,ie),o(b,P),o(P,T),o(T,Q),o(Q,ce),o(T,ue),o(T,v),k&&k.m(v,null),o(v,de),j&&j.m(v,null),o(v,me),w&&w.m(v,null),o(P,_e),o(P,V),o(V,W),o(W,fe),o(V,pe),o(V,$);for(let m=0;m<h.length;m+=1)h[m]&&h[m].m($,null);X=!0},p(s,[_]){if((!X||_&2)&&e!==(e=s[1].title+" by Jon Jampen")&&(document.title=e),_&1&&C!==(C=s[0])){if(f){Ue();const m=f;$e(m.$$.fragment,1,0,()=>{Le(m,1)}),Be()}C?(f=Te(C,ke()),Ve(f.$$.fragment),Je(f.$$.fragment,1),Me(f,M,null)):f=null}if(s[1].links.website&&k.p(s,_),s[1].links.github&&j.p(s,_),s[1].links.download&&w.p(s,_),_&2){G=s[1].stack;let m;for(m=0;m<G.length;m+=1){const J=Oe(s,G,m);h[m]?h[m].p(J,_):(h[m]=He(J),h[m].c(),h[m].m($,null))}for(;m<h.length;m+=1)h[m].d(1);h.length=G.length}},i(s){X||(f&&Je(f.$$.fragment,s),X=!0)},o(s){f&&$e(f.$$.fragment,s),X=!1},d(s){l(t),l(d),l(n),l(u),l(g),l(E),l(L),l(O),l(H),s&&l(Y),s&&l(b),f&&Le(f),k&&k.d(),j&&j.d(),w&&w.d(),Fe(h,s)}}}function tt(a){return Xe(Object.assign({"../../../data/projects/cybercrusade.svelte":()=>z(()=>import("../chunks/cybercrusade.24b1f477.js"),["..\\chunks\\cybercrusade.24b1f477.js","..\\chunks\\index.9e2cf2f4.js"],import.meta.url),"../../../data/projects/fatiguediary.svelte":()=>z(()=>import("../chunks/fatiguediary.05e1fdad.js"),["..\\chunks\\fatiguediary.05e1fdad.js","..\\chunks\\index.9e2cf2f4.js"],import.meta.url),"../../../data/projects/mandelbrot.svelte":()=>z(()=>import("../chunks/mandelbrot.0fcf8036.js"),["..\\chunks\\mandelbrot.0fcf8036.js","..\\chunks\\index.9e2cf2f4.js"],import.meta.url),"../../../data/projects/mountainsunset.svelte":()=>z(()=>import("../chunks/mountainsunset.c9e2b5b7.js"),["..\\chunks\\mountainsunset.c9e2b5b7.js","..\\chunks\\index.9e2cf2f4.js"],import.meta.url),"../../../data/projects/portfolio.svelte":()=>z(()=>import("../chunks/portfolio.24e7237b.js"),["..\\chunks\\portfolio.24e7237b.js","..\\chunks\\index.9e2cf2f4.js"],import.meta.url),"../../../data/projects/solarlog.svelte":()=>z(()=>import("../chunks/solarlog.9ce8f7a2.js"),["..\\chunks\\solarlog.9ce8f7a2.js","..\\chunks\\index.9e2cf2f4.js"],import.meta.url)}),`../../../data/projects/${a}.svelte`)}function rt(a,e,t){let{data:d}=e,n=d.project,u=n.slug,g;return Ke(async()=>{t(0,g=(await tt(u)).default)}),a.$$set=E=>{"data"in E&&t(2,d=E.data)},[g,n,d]}class it extends qe{constructor(e){super(),Ce(this,e,rt,et,Ge,{data:2})}}export{it as component,st as universal};
