import{S as ee,i as te,s as re,C as z,k,l as E,m as y,h,b as T,D as G,g as se,t as S,d as ae,f as V,E as ne,o as oe,F as ie,e as K,G as ce,B as $,q,a as M,r as C,c as R,n as c,H as le,I as m,J as Q,K as ue,u as fe,L as _e,M as de,w as me,x as he,y as pe,N as ve,O as ge,P as be,z as ke}from"../../chunks/index-935fee70.js";import{_ as D}from"../../chunks/preload-helper-41c905a7.js";import{p as Ee}from"../../chunks/stores-96295cf5.js";import{j as N}from"../../chunks/singletons-9728eba3.js";function we(a){const e=a-1;return e*e*e+1}function B(a,{delay:e=0,duration:t=400,easing:r=we,x:l=0,y:i=0,opacity:p=0}={}){const o=getComputedStyle(a),s=+o.opacity,f=o.transform==="none"?"":o.transform,n=s*(1-p);return{delay:e,duration:t,easing:r,css:(u,_)=>`
			transform: ${f} translate(${(1-u)*l}px, ${(1-u)*i}px);
			opacity: ${s-n*_}`}}const ye=""+new URL("../../assets/angle-left-b7f30c51.svg",import.meta.url).href,$e=""+new URL("../../assets/angle-right-76a31ee1.svg",import.meta.url).href;function X(a,e,t){const r=a.slice();return r[8]=e[t][0],r[9]=e[t][1],r}function xe(a){let e,t={ctx:a,current:null,token:null,hasCatch:!1,pending:Ae,then:Oe,catch:Le};return ie(Te(j),t),{c(){e=K(),t.block.c()},l(r){e=K(),t.block.l(r)},m(r,l){T(r,e,l),t.block.m(r,t.anchor=l),t.mount=()=>e.parentNode,t.anchor=e},p(r,l){a=r,ce(t,a,l)},i(r){V(t.block)},o:$,d(r){r&&h(e),t.block.d(r),t.token=null,t=null}}}function Ie(a){let e,t,r,l,i,p,o,s,f,n,u,_,A,v,g,x,O,L=Object.entries(a[2]),w=[];for(let d=0;d<L.length;d+=1)w[d]=Z(X(a,L,d));return{c(){e=k("div"),t=k("div"),r=k("div"),l=k("p"),i=q("Linux x64-86 ASMBLY"),p=M(),o=k("div"),s=k("nav"),f=k("ul");for(let d=0;d<w.length;d+=1)w[d].c();n=M(),u=k("button"),_=k("img"),this.h()},l(d){e=E(d,"DIV",{class:!0});var I=y(e);t=E(I,"DIV",{class:!0});var b=y(t);r=E(b,"DIV",{class:!0});var P=y(r);l=E(P,"P",{class:!0});var H=y(l);i=C(H,"Linux x64-86 ASMBLY"),H.forEach(h),P.forEach(h),p=R(b),o=E(b,"DIV",{});var F=y(o);s=E(F,"NAV",{class:!0});var W=y(s);f=E(W,"UL",{});var Y=y(f);for(let U=0;U<w.length;U+=1)w[U].l(Y);Y.forEach(h),W.forEach(h),F.forEach(h),b.forEach(h),n=R(I),u=E(I,"BUTTON",{type:!0,class:!0});var J=y(u);_=E(J,"IMG",{src:!0,alt:!0,srcset:!0,style:!0}),J.forEach(h),I.forEach(h),this.h()},h(){c(l,"class","font-bold"),c(r,"class","pb-4"),c(s,"class","flex flex-col svelte-157qc93"),c(t,"class","max-h-screen h-full"),le(_.src,A=ye)||c(_,"src",A),c(_,"alt",""),c(_,"srcset",""),c(_,"style",""),c(u,"type","button"),c(u,"class","w-6 pr-2"),c(e,"class","max-h-screen h-full flex p-5 pr-0 shadow-lg shadow-[var(--color-theme-2)] w-[20rem]")},m(d,I){T(d,e,I),m(e,t),m(t,r),m(r,l),m(l,i),m(t,p),m(t,o),m(o,s),m(s,f);for(let b=0;b<w.length;b+=1)w[b].m(f,null);m(e,n),m(e,u),m(u,_),g=!0,x||(O=G(u,"click",a[5]),x=!0)},p(d,I){if(a=d,I&12){L=Object.entries(a[2]);let b;for(b=0;b<L.length;b+=1){const P=X(a,L,b);w[b]?w[b].p(P,I):(w[b]=Z(P),w[b].c(),w[b].m(f,null))}for(;b<w.length;b+=1)w[b].d(1);w.length=L.length}},i(d){g||(z(()=>{v||(v=Q(e,B,{x:-250,duration:j},!0)),v.run(1)}),g=!0)},o(d){v||(v=Q(e,B,{x:-250,duration:j},!1)),v.run(0),g=!1},d(d){d&&h(e),ue(w,d),d&&v&&v.end(),x=!1,O()}}}function Le(a){return{c:$,l:$,m:$,p:$,i:$,o:$,d:$}}function Oe(a){let e,t,r,l,i,p;return{c(){e=k("button"),t=k("img"),this.h()},l(o){e=E(o,"BUTTON",{type:!0,class:!0});var s=y(e);t=E(s,"IMG",{src:!0,alt:!0,srcset:!0,style:!0,class:!0}),s.forEach(h),this.h()},h(){le(t.src,r=$e)||c(t,"src",r),c(t,"alt",""),c(t,"srcset",""),c(t,"style",""),c(t,"class","w-[10px]"),c(e,"type","button"),c(e,"class","absolute p-2.5 h-screen z-10")},m(o,s){T(o,e,s),m(e,t),i||(p=G(e,"click",a[6]),i=!0)},p:$,i(o){l||z(()=>{l=_e(e,B,{x:-250}),l.start()})},o:$,d(o){o&&h(e),i=!1,p()}}}function Ae(a){return{c:$,l:$,m:$,p:$,i:$,o:$,d:$}}function Z(a){let e,t,r=a[9]+"",l,i,p,o;return{c(){e=k("li"),t=k("a"),l=q(r),p=M(),this.h()},l(s){e=E(s,"LI",{class:!0,"aria-current":!0});var f=y(e);t=E(f,"A",{href:!0,class:!0});var n=y(t);l=C(n,r),n.forEach(h),p=R(f),f.forEach(h),this.h()},h(){c(t,"href",i=`${N}/x${a[8]}`),c(t,"class","svelte-157qc93"),c(e,"class","pb-2 svelte-157qc93"),c(e,"aria-current",o=a[3].url.pathname===`${N}?md=${a[8]}`?"page":void 0)},m(s,f){T(s,e,f),m(e,t),m(t,l),m(e,p)},p(s,f){f&4&&r!==(r=s[9]+"")&&fe(l,r),f&4&&i!==(i=`${N}/x${s[8]}`)&&c(t,"href",i),f&12&&o!==(o=s[3].url.pathname===`${N}?md=${s[8]}`?"page":void 0)&&c(e,"aria-current",o)},d(s){s&&h(e)}}}function De(a){let e,t,r,l,i,p;z(a[4]);const o=[Ie,xe],s=[];function f(n,u){return n[0]?0:1}return t=f(a),r=s[t]=o[t](a),{c(){e=k("section"),r.c()},l(n){e=E(n,"SECTION",{});var u=y(e);r.l(u),u.forEach(h)},m(n,u){T(n,e,u),s[t].m(e,null),l=!0,i||(p=G(window,"resize",a[4]),i=!0)},p(n,[u]){let _=t;t=f(n),t===_?s[t].p(n,u):(se(),S(s[_],1,1,()=>{s[_]=null}),ae(),r=s[t],r?r.p(n,u):(r=s[t]=o[t](n),r.c()),V(r,1),r.m(e,null))},i(n){l||(V(r),l=!0)},o(n){S(r),l=!1},d(n){n&&h(e),s[t].d(),i=!1,p()}}}const j=250;function Te(a){return new Promise(e=>setTimeout(e,a))}function Pe(a,e,t){let r;ne(a,Ee,u=>t(3,r=u));let l=!0,i,p={};const o=Object.assign({"/md/1.Perkenalan.md":()=>D(()=>import("../../chunks/1.Perkenalan-4c94b534.js"),[],import.meta.url),"/md/2.Ukuran-data-memori-statis-register.md":()=>D(()=>import("../../chunks/2.Ukuran-data-memori-statis-register-dbd988cf.js"),[],import.meta.url),"/md/3. Mengambil Input dan Mencetaknya.md":()=>D(()=>import("../../chunks/3. Mengambil Input dan Mencetaknya-a07fc71d.js"),[],import.meta.url),"/md/4. Instruksi Aritmatika serta basic debugging.md":()=>D(()=>import("../../chunks/4. Instruksi Aritmatika serta basic debugging-06f099b8.js"),[],import.meta.url),"/md/LICENSE.md":()=>D(()=>import("../../chunks/LICENSE-05d730a3.js"),[],import.meta.url),"/md/README.md":()=>D(()=>import("../../chunks/README-b2de6886.js"),[],import.meta.url)});for(const u in o){const _=u.match(new RegExp("(?<=md\\/\\d.).*?(?=.md)"));_&&(p[u]=_.toString())}oe(()=>{i<=690&&t(0,l=!1)});function s(){t(1,i=window.innerWidth)}return[l,i,p,r,s,u=>{t(0,l=l!=!0)},u=>{t(0,l=l!=!0)}]}class Ve extends ee{constructor(e){super(),te(this,e,Pe,De,re,{})}}function Me(a){let e,t,r,l,i,p,o,s,f,n,u,_;t=new Ve({});const A=a[1].default,v=de(A,a,a[0],null);return{c(){e=k("div"),me(t.$$.fragment),r=M(),l=k("div"),i=k("main"),v&&v.c(),p=M(),o=k("footer"),s=k("p"),f=q("don't forget to visit "),n=k("a"),u=q("kawaii-ghost/linux-x64-asm"),this.h()},l(g){e=E(g,"DIV",{class:!0});var x=y(e);he(t.$$.fragment,x),r=R(x),l=E(x,"DIV",{class:!0});var O=y(l);i=E(O,"MAIN",{class:!0});var L=y(i);v&&v.l(L),L.forEach(h),p=R(O),o=E(O,"FOOTER",{class:!0});var w=y(o);s=E(w,"P",{});var d=y(s);f=C(d,"don't forget to visit "),n=E(d,"A",{class:!0,target:!0,rel:!0,href:!0});var I=y(n);u=C(I,"kawaii-ghost/linux-x64-asm"),I.forEach(h),d.forEach(h),w.forEach(h),O.forEach(h),x.forEach(h),this.h()},h(){c(i,"class","relative flex-1 max-h-full max-w-full h-screen p-10 overflow-y-scroll"),c(n,"class","font-bold"),c(n,"target","_blank"),c(n,"rel","noreferrer"),c(n,"href","https://github.com/kawaii-ghost/linux-x64-asm"),c(o,"class","flex flex-col items-center"),c(l,"class","flex flex-col w-screen"),c(e,"class","flex flex-row max-h-full max-w-full h-screen")},m(g,x){T(g,e,x),pe(t,e,null),m(e,r),m(e,l),m(l,i),v&&v.m(i,null),m(l,p),m(l,o),m(o,s),m(s,f),m(s,n),m(n,u),_=!0},p(g,[x]){v&&v.p&&(!_||x&1)&&ve(v,A,g,g[0],_?be(A,g[0],x,null):ge(g[0]),null)},i(g){_||(V(t.$$.fragment,g),V(v,g),_=!0)},o(g){S(t.$$.fragment,g),S(v,g),_=!1},d(g){g&&h(e),ke(t),v&&v.d(g)}}}function Re(a,e,t){let{$$slots:r={},$$scope:l}=e;return a.$$set=i=>{"$$scope"in i&&t(0,l=i.$$scope)},[l,r]}class Ue extends ee{constructor(e){super(),te(this,e,Re,Me,re,{})}}export{Ue as default};
