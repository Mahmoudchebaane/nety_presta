// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./key","./icon","./switch"],function(l,a,r,t,u){function n(){"undefined"!==typeof customElements&&["calcite-block-section","calcite-icon","calcite-switch"].forEach(b=>{switch(b){case "calcite-block-section":customElements.get(b)||customElements.define(b,p);break;case "calcite-icon":customElements.get(b)||t.defineCustomElement();break;case "calcite-switch":customElements.get(b)||u.defineCustomElement()}})}const h={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",
menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},p=a.proxyCustomElement(class extends a.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteBlockSectionToggle=a.createEvent(this,"calciteBlockSectionToggle",6);this.open=!1;this.toggleDisplay="button";this.guid=a.guid();this.handleHeaderKeyDown=b=>{r.isActivationKey(b.key)&&(this.toggleSection(),b.preventDefault(),b.stopPropagation())};this.toggleSection=()=>{this.open=!this.open;
this.calciteBlockSectionToggle.emit()}}renderStatusIcon(){var b;const {status:d}=this,k=null!==(b=h[d])&&void 0!==b?b:!1;b={["status-icon"]:!0,valid:"valid"==d,invalid:"invalid"==d};return k?a.h("calcite-icon",{class:b,icon:k,scale:"s"}):null}render(){const {el:b,intlCollapse:d,intlExpand:k,open:e,text:q,toggleDisplay:v}=this;var f=a.getElementDir(b),m=e?h.menuOpen:"rtl"===f?h.menuClosedLeft:h.menuClosedRight;const g=e?d||"Collapse":k||"Expand";var {guid:c}=this;f=`${c}-region`;c=`${c}-button`;m=
"switch"===v?a.h("div",{"aria-controls":f,"aria-label":g,class:{toggle:!0,["toggle--switch"]:!0},id:c,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,tabIndex:0,title:g},a.h("div",{class:"toggle--switch__content"},a.h("span",{class:"toggle--switch__text"},q)),a.h("calcite-switch",{checked:e,label:g,scale:"s",tabIndex:-1}),this.renderStatusIcon()):a.h("button",{"aria-controls":f,"aria-label":g,class:{["section-header"]:!0,toggle:!0},id:c,name:g,onClick:this.toggleSection},a.h("calcite-icon",
{icon:m,scale:"s"}),a.h("span",{class:"section-header__text"},q),this.renderStatusIcon());return a.h(a.Host,null,m,a.h("section",{"aria-expanded":a.toAriaBoolean(e),"aria-labelledby":c,class:"content",hidden:!e,id:f},a.h("slot",null)))}get el(){return this}static get style(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}"}},
[1,"calcite-block-section",{intlCollapse:[1,"intl-collapse"],intlExpand:[1,"intl-expand"],open:[1540],status:[513],text:[1],toggleDisplay:[513,"toggle-display"]}]);n();l.CalciteBlockSection=p;l.defineCustomElement=n;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});