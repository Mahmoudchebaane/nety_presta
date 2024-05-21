// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./observers"],function(m,d,t){async function u({icon:a,scale:c}){c=n[c];a=v(a);const e="F"===a.charAt(a.length-1),b=`${e?a.substring(0,a.length-1):a}${c}${e?"F":""}`;if(h[b])return h[b];k[b]||(k[b]=fetch(d.getAssetPath(`./assets/icon/${b}.json`)).then(f=>f.json()).catch(()=>{console.error(`"${b}" is not a valid calcite-ui-icon name`);return""}));c=await k[b];return h[b]=c}function v(a){const c=!isNaN(Number(a.charAt(0))),e=a.split("-");return 1===e.length?c?
`i${a}`:a:e.map((b,f)=>0===f?c?`i${b.toUpperCase()}`:b:b.charAt(0).toUpperCase()+b.slice(1)).join("")}function p(){"undefined"!==typeof customElements&&["calcite-icon"].forEach(a=>{switch(a){case "calcite-icon":customElements.get(a)||customElements.define(a,q)}})}const h={},k={},n={s:16,m:24,l:32},q=d.proxyCustomElement(class extends d.H{constructor(){super();this.__registerHost();this.__attachShadow();this.icon=null;this.flipRtl=!1;this.scale="m";this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>
{this.visible=!0;this.loadIconPathData()})}disconnectedCallback(){var a;null===(a=this.intersectionObserver)||void 0===a?void 0:a.disconnect();this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const {el:a,flipRtl:c,pathData:e,scale:b,textLabel:f}=this,w=d.getElementDir(a),r=n[b],l=!!f,x=[].concat(e||"");return d.h(d.Host,{"aria-hidden":d.toAriaBoolean(!l),"aria-label":l?f:null,role:l?"img":null},d.h("svg",{class:{["flip-rtl"]:"rtl"===w&&c,svg:!0},fill:"currentColor",
height:"100%",viewBox:`0 0 ${r} ${r}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},x.map(g=>"string"===typeof g?d.h("path",{d:g}):d.h("path",{d:g.d,opacity:"opacity"in g?g.opacity:1}))))}async loadIconPathData(){const {icon:a,scale:c,visible:e}=this;d.Build.isBrowser&&a&&e&&(this.pathData=await u({icon:a,scale:c}))}waitUntilVisible(a){(this.intersectionObserver=t.createObserver("intersection",c=>{c.forEach(e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=
null,a())})},{rootMargin:"50px"}))?this.intersectionObserver.observe(this.el):a()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale\x3ds]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale\x3dm]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale\x3dl]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}"}},
[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);p();m.Icon=q;m.defineCustomElement=p});