// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./utils2"],function(c,a,d){function e(){"undefined"!==typeof customElements&&["calcite-combobox-item-group"].forEach(b=>{switch(b){case "calcite-combobox-item-group":customElements.get(b)||customElements.define(b,f)}})}const f=a.proxyCustomElement(class extends a.H{constructor(){super();this.__registerHost();this.__attachShadow();this.guid=a.guid();this.scale="m"}connectedCallback(){this.ancestors=d.getAncestors(this.el);this.scale=a.getElementProp(this.el,"scale",
this.scale)}render(){const {el:b,scale:g}=this,h=`${"label"}--indent-${d.getDepth(b)}`;return a.h("ul",{"aria-labelledby":this.guid,class:{list:!0,[`scale--${g}`]:!0},role:"group"},a.h("li",{class:{label:!0,[h]:!0},id:this.guid,role:"presentation"},a.h("span",{class:"title"},this.label)),a.h("slot",null))}get el(){return this}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent-1:0.5rem;--calcite-combobox-item-spacing-indent-2:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent-1:0.75rem;--calcite-combobox-item-spacing-indent-2:1.5rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent-1:1rem;--calcite-combobox-item-spacing-indent-2:2rem}:host,.list{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%;color:var(--calcite-ui-text-3)}.label--indent-1{padding-inline-start:var(--calcite-combobox-item-spacing-indent-1)}.label--indent-2{padding-inline-start:var(--calcite-combobox-item-spacing-indent-2)}.title{border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2);word-wrap:break-word;word-break:break-word;border-block-end-color:var(--calcite-ui-border-3);padding-block:var(--calcite-combobox-item-spacing-unit-l);padding-inline:0;margin-inline:var(--calcite-combobox-item-spacing-unit-s)}"}},
[1,"calcite-combobox-item-group",{ancestors:[1040],label:[1]}]);e();c.CalciteComboboxItemGroup=f;c.defineCustomElement=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});