if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const d=e=>i(e,r),t={module:{uri:r},exports:o,require:d};s[r]=Promise.all(l.map((e=>t[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/@-b782a0f8.js",revision:null},{url:"assets/food-34529b50.js",revision:null},{url:"assets/hometown-5282a5b7.js",revision:null},{url:"assets/index-43fc8d03.css",revision:null},{url:"assets/index-55a9cded.css",revision:null},{url:"assets/index-da63061f.css",revision:null},{url:"assets/index-f865b8ab.css",revision:null},{url:"assets/modulepreload-polyfill-3cfb730f.js",revision:null},{url:"assets/profile-180600da.js",revision:null},{url:"assets/tourist-ce0e784d.js",revision:null},{url:"food/index.html",revision:"4012d7f0928e547ba51ddc155afae944"},{url:"hometown/index.html",revision:"f7eaadb9e668bc7ae3e38a9cc02ff5f3"},{url:"index.html",revision:"947cfeb7f1f5ca15d129c74d3a786341"},{url:"profile/index.html",revision:"4d98b2901ad58f411fdd75d14d1fec75"},{url:"registerSW.js",revision:"47ff687fc4eaa824c9b9d47e8f86d7a5"},{url:"tourist/index.html",revision:"85dce4d3ceb5ca20dd47fa32bc10a51f"},{url:"manifest.webmanifest",revision:"dd77ff4762359c8cda6621c562567611"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
