import{t as qn,l as D,L as Xn,r as R,y as ue}from"./chunk-K6CSEXPM-Dckekn08.js";import{c as se}from"./compiler-runtime-pJ4boU9M.js";import{a as Yn,c as be,f as gn}from"./cn-G-5VTgOO.js";import{a as Kn,g as O}from"./index-a7M-pCPy.js";import{e as Jn,f as Qn,n as et,T as vn,I as nt,g as tt}from"./transitions-DfZZ6MBU.js";const rt=new URL(Kn).origin,bn=n=>{const e=se.c(6);let t,r;e[0]!==n?({to:r,...t}=n,e[0]=n,e[1]=t,e[2]=r):(t=e[1],r=e[2]);const i=qn(),a=new URLSearchParams(i.search).get("tempo"),s=new URL(r,rt);a==="true"&&s.searchParams.set("tempo","true");const u=`${s.pathname}${s.search}`;let l;return e[3]!==t||e[4]!==u?(l=D.jsx(Xn,{to:u,...t}),e[3]=t,e[4]=u,e[5]=l):l=e[5],l};function Ve(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function it(...n){return e=>{let t=!1;const r=n.map(i=>{const o=Ve(i,e);return!t&&typeof o=="function"&&(t=!0),o});if(t)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Ve(n[i],null)}}}}function ot(n){const e=st(n),t=R.forwardRef((r,i)=>{const{children:o,...a}=r,s=R.Children.toArray(o),u=s.find(ct);if(u){const l=u.props.children,_=s.map(c=>c===u?R.Children.count(l)>1?R.Children.only(null):R.isValidElement(l)?l.props.children:null:c);return D.jsx(e,{...a,ref:i,children:R.isValidElement(l)?R.cloneElement(l,void 0,_):null})}return D.jsx(e,{...a,ref:i,children:o})});return t.displayName=`${n}.Slot`,t}var at=ot("Slot");function st(n){const e=R.forwardRef((t,r)=>{const{children:i,...o}=t;if(R.isValidElement(i)){const a=ut(i),s=dt(o,i.props);return i.type!==R.Fragment&&(s.ref=r?it(r,a):a),R.cloneElement(i,s)}return R.Children.count(i)>1?R.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var lt=Symbol("radix.slottable");function ct(n){return R.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===lt}function dt(n,e){const t={...e};for(const r in e){const i=n[r],o=e[r];/^on[A-Z]/.test(r)?i&&o?t[r]=(...s)=>{o(...s),i(...s)}:i&&(t[r]=i):r==="style"?t[r]={...i,...o}:r==="className"&&(t[r]=[i,o].filter(Boolean).join(" "))}return{...n,...t}}function ut(n){var r,i;let e=(r=Object.getOwnPropertyDescriptor(n.props,"ref"))==null?void 0:r.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=(i=Object.getOwnPropertyDescriptor(n,"ref"))==null?void 0:i.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}const Fe=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Ue=Yn,_t=(n,e)=>t=>{var r;if((e==null?void 0:e.variants)==null)return Ue(n,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:i,defaultVariants:o}=e,a=Object.keys(i).map(l=>{const _=t==null?void 0:t[l],c=o==null?void 0:o[l];if(_===null)return null;const h=Fe(_)||Fe(c);return i[l][h]}),s=t&&Object.entries(t).reduce((l,_)=>{let[c,h]=_;return h===void 0||(l[c]=h),l},{}),u=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((l,_)=>{let{class:c,className:h,...p}=_;return Object.entries(p).every(w=>{let[g,k]=w;return Array.isArray(k)?k.includes({...o,...s}[g]):{...o,...s}[g]===k})?[...l,c,h]:l},[]);return Ue(n,a,u,t==null?void 0:t.class,t==null?void 0:t.className)},ft=_t(be("inline-flex items-center font-sans text-em-[14/16] font-[500] leading-[1.2] justify-center capitalize w-full transition-colors-and-shadow duration-500 ease-soft-flow","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-overlay-blue"),{variants:{variant:{primary:"bg-foreground text-background hover:bg-background hover:text-foreground"},size:{default:"py-em-[12/16] px-em-[24/16]"}},defaultVariants:{variant:"primary",size:"default"}}),yn=R.forwardRef((n,e)=>{const t=se.c(15);let r,i,o,a,s;t[0]!==n?({className:r,variant:s,size:o,asChild:a,...i}=n,t[0]=n,t[1]=r,t[2]=i,t[3]=o,t[4]=a,t[5]=s):(r=t[1],i=t[2],o=t[3],a=t[4],s=t[5]);const l=(a===void 0?!1:a)?at:"button";let _;t[6]!==r||t[7]!==o||t[8]!==s?(_=be(ft({variant:s,size:o,className:r})),t[6]=r,t[7]=o,t[8]=s,t[9]=_):_=t[9];let c;return t[10]!==l||t[11]!==i||t[12]!==e||t[13]!==_?(c=D.jsx(l,{className:_,ref:e,...i}),t[10]=l,t[11]=i,t[12]=e,t[13]=_,t[14]=c):c=t[14],c});yn.displayName="Button";const pt=be(gn.geistBody);function ri(n){const e=se.c(15);let t,r,i,o;e[0]!==n?({content:i,className:r,blocks:t,...o}=n,e[0]=n,e[1]=t,e[2]=r,e[3]=i,e[4]=o):(t=e[1],r=e[2],i=e[3],o=e[4]);let a;e[5]!==r?(a=be(pt,r),e[5]=r,e[6]=a):a=e[6];let s;e[7]===Symbol.for("react.memo_cache_sentinel")?(s={p:vt,em:gt,a:mt,CtaComponent:ht},e[7]=s):s=e[7];let u;e[8]!==t||e[9]!==i?(u=D.jsx(Jn,{blocks:t,components:s,content:i}),e[8]=t,e[9]=i,e[10]=u):u=e[10];let l;return e[11]!==o||e[12]!==a||e[13]!==u?(l=D.jsx("div",{className:a,...o,children:u}),e[11]=o,e[12]=a,e[13]=u,e[14]=l):l=e[14],l}function ht(n){const{label:e,linkTo:t,variant:r}=n,i=t==null?void 0:t.startsWith("http");return D.jsx("div",{className:"w-full",children:D.jsx(yn,{"data-rich-text":"cta_component",variant:r,asChild:!0,children:i?D.jsx("a",{target:"_blank",rel:"noopener noreferrer",href:t??"",children:e}):D.jsx(bn,{to:t??"",children:e})})})}function mt(n){const{children:e,href:t,...r}=n;return(t==null?void 0:t.startsWith("http"))?D.jsx("a",{"data-rich-text":"a",href:t,...r,className:"underline underline-offset-[0.1em]",children:e}):D.jsx(bn,{"data-rich-text":"a",to:t,...r,className:"underline underline-offset-[0.1em]",children:e})}function gt(n){const{children:e}=n;return D.jsx("span",{className:gn.inferiBody,children:e})}function vt(n){const{children:e}=n;return D.jsx("p",{className:"mt-em-[24] first:mt-0",children:e})}var ye,x,wn,q,We,xn,kn,Sn,ze,Le,Ne,ie={},Cn=[],bt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function F(n,e){for(var t in e)n[t]=e[t];return n}function Me(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Ee(n,e,t){var r,i,o,a={};for(o in e)o=="key"?r=e[o]:o=="ref"?i=e[o]:a[o]=e[o];if(arguments.length>2&&(a.children=arguments.length>3?ye.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(o in n.defaultProps)a[o]===void 0&&(a[o]=n.defaultProps[o]);return pe(n,a,r,i,null)}function pe(n,e,t,r,i){var o={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++wn,__i:-1,__u:0};return i==null&&x.vnode!=null&&x.vnode(o),o}function L(n){return n.children}function U(n,e){this.props=n,this.context=e}function K(n,e){if(e==null)return n.__?K(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?K(n):null}function Ln(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Ln(n)}}function Be(n){(!n.__d&&(n.__d=!0)&&q.push(n)&&!me.__r++||We!==x.debounceRendering)&&((We=x.debounceRendering)||xn)(me)}function me(){for(var n,e,t,r,i,o,a,s=1;q.length;)q.length>s&&q.sort(kn),n=q.shift(),s=q.length,n.__d&&(t=void 0,i=(r=(e=n).__v).__e,o=[],a=[],e.__P&&((t=F({},r)).__v=r.__v+1,x.vnode&&x.vnode(t),He(e.__P,t,r,e.__n,e.__P.namespaceURI,32&r.__u?[i]:null,o,i??K(r),!!(32&r.__u),a),t.__v=r.__v,t.__.__k[t.__i]=t,Tn(o,t,a),t.__e!=i&&Ln(t)));me.__r=0}function Nn(n,e,t,r,i,o,a,s,u,l,_){var c,h,p,w,g,k,y=r&&r.__k||Cn,v=e.length;for(u=yt(t,e,y,u,v),c=0;c<v;c++)(p=t.__k[c])!=null&&(h=p.__i===-1?ie:y[p.__i]||ie,p.__i=c,k=He(n,p,h,i,o,a,s,u,l,_),w=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&Oe(h.ref,null,p),_.push(p.ref,p.__c||w,p)),g==null&&w!=null&&(g=w),4&p.__u||h.__k===p.__k?u=En(p,u,n):typeof p.type=="function"&&k!==void 0?u=k:w&&(u=w.nextSibling),p.__u&=-7);return t.__e=g,u}function yt(n,e,t,r,i){var o,a,s,u,l,_=t.length,c=_,h=0;for(n.__k=new Array(i),o=0;o<i;o++)(a=e[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(u=o+h,(a=n.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?pe(null,a,null,null,null):le(a)?pe(L,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?pe(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=n,a.__b=n.__b+1,s=null,(l=a.__i=wt(a,t,u,c))!==-1&&(c--,(s=t[l])&&(s.__u|=2)),s==null||s.__v===null?(l==-1&&(i>_?h--:i<_&&h++),typeof a.type!="function"&&(a.__u|=4)):l!=u&&(l==u-1?h--:l==u+1?h++:(l>u?h--:h++,a.__u|=4))):n.__k[o]=null;if(c)for(o=0;o<_;o++)(s=t[o])!=null&&!(2&s.__u)&&(s.__e==r&&(r=K(s)),Rn(s,s));return r}function En(n,e,t){var r,i;if(typeof n.type=="function"){for(r=n.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=n,e=En(r[i],e,t));return e}n.__e!=e&&(e&&n.type&&!t.contains(e)&&(e=K(n)),t.insertBefore(n.__e,e||null),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ge(n,e){return e=e||[],n==null||typeof n=="boolean"||(le(n)?n.some(function(t){ge(t,e)}):e.push(n)),e}function wt(n,e,t,r){var i,o,a=n.key,s=n.type,u=e[t];if(u===null&&n.key==null||u&&a==u.key&&s===u.type&&!(2&u.__u))return t;if(r>(u!=null&&!(2&u.__u)?1:0))for(i=t-1,o=t+1;i>=0||o<e.length;){if(i>=0){if((u=e[i])&&!(2&u.__u)&&a==u.key&&s===u.type)return i;i--}if(o<e.length){if((u=e[o])&&!(2&u.__u)&&a==u.key&&s===u.type)return o;o++}}return-1}function Ze(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||bt.test(e)?t:t+"px"}function _e(n,e,t,r,i){var o;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||Ze(n.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||Ze(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")o=e!=(e=e.replace(Sn,"$1")),e=e.toLowerCase()in n||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+o]=t,t?r?t.t=r.t:(t.t=ze,n.addEventListener(e,o?Ne:Le,o)):n.removeEventListener(e,o?Ne:Le,o);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Ge(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.u==null)e.u=ze++;else if(e.u<t.t)return;return t(x.event?x.event(e):e)}}}function He(n,e,t,r,i,o,a,s,u,l){var _,c,h,p,w,g,k,y,v,m,b,S,M,j,H,A,V,P=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(u=!!(32&t.__u),o=[s=e.__e=t.__e]),(_=x.__b)&&_(e);e:if(typeof P=="function")try{if(y=e.props,v="prototype"in P&&P.prototype.render,m=(_=P.contextType)&&r[_.__c],b=_?m?m.props.value:_.__:r,t.__c?k=(c=e.__c=t.__c).__=c.__E:(v?e.__c=c=new P(y,b):(e.__c=c=new U(y,b),c.constructor=P,c.render=kt),m&&m.sub(c),c.props=y,c.state||(c.state={}),c.context=b,c.__n=r,h=c.__d=!0,c.__h=[],c._sb=[]),v&&c.__s==null&&(c.__s=c.state),v&&P.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=F({},c.__s)),F(c.__s,P.getDerivedStateFromProps(y,c.__s))),p=c.props,w=c.state,c.__v=e,h)v&&P.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),v&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(v&&P.getDerivedStateFromProps==null&&y!==p&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,b),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,b)===!1||e.__v==t.__v)){for(e.__v!=t.__v&&(c.props=y,c.state=c.__s,c.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(C){C&&(C.__=e)}),S=0;S<c._sb.length;S++)c.__h.push(c._sb[S]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,b),v&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(p,w,g)})}if(c.context=b,c.props=y,c.__P=n,c.__e=!1,M=x.__r,j=0,v){for(c.state=c.__s,c.__d=!1,M&&M(e),_=c.render(c.props,c.state,c.context),H=0;H<c._sb.length;H++)c.__h.push(c._sb[H]);c._sb=[]}else do c.__d=!1,M&&M(e),_=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++j<25);c.state=c.__s,c.getChildContext!=null&&(r=F(F({},r),c.getChildContext())),v&&!h&&c.getSnapshotBeforeUpdate!=null&&(g=c.getSnapshotBeforeUpdate(p,w)),A=_,_!=null&&_.type===L&&_.key==null&&(A=$n(_.props.children)),s=Nn(n,le(A)?A:[A],e,t,r,i,o,a,s,u,l),c.base=e.__e,e.__u&=-161,c.__h.length&&a.push(c),k&&(c.__E=c.__=null)}catch(C){if(e.__v=null,u||o!=null)if(C.then){for(e.__u|=u?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;o[o.indexOf(s)]=null,e.__e=s}else for(V=o.length;V--;)Me(o[V]);else e.__e=t.__e,e.__k=t.__k;x.__e(C,e,t)}else o==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):s=e.__e=xt(t.__e,e,t,r,i,o,a,u,l);return(_=x.diffed)&&_(e),128&e.__u?void 0:s}function Tn(n,e,t){for(var r=0;r<t.length;r++)Oe(t[r],t[++r],t[++r]);x.__c&&x.__c(e,n),n.some(function(i){try{n=i.__h,i.__h=[],n.some(function(o){o.call(i)})}catch(o){x.__e(o,i.__v)}})}function $n(n){return typeof n!="object"||n==null?n:le(n)?n.map($n):F({},n)}function xt(n,e,t,r,i,o,a,s,u){var l,_,c,h,p,w,g,k=t.props,y=e.props,v=e.type;if(v=="svg"?i="http://www.w3.org/2000/svg":v=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((p=o[l])&&"setAttribute"in p==!!v&&(v?p.localName==v:p.nodeType==3)){n=p,o[l]=null;break}}if(n==null){if(v==null)return document.createTextNode(y);n=document.createElementNS(i,v,y.is&&y),s&&(x.__m&&x.__m(e,o),s=!1),o=null}if(v===null)k===y||s&&n.data===y||(n.data=y);else{if(o=o&&ye.call(n.childNodes),k=t.props||ie,!s&&o!=null)for(k={},l=0;l<n.attributes.length;l++)k[(p=n.attributes[l]).name]=p.value;for(l in k)if(p=k[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=p;else if(!(l in y)){if(l=="value"&&"defaultValue"in y||l=="checked"&&"defaultChecked"in y)continue;_e(n,l,null,p,i)}}for(l in y)p=y[l],l=="children"?h=p:l=="dangerouslySetInnerHTML"?_=p:l=="value"?w=p:l=="checked"?g=p:s&&typeof p!="function"||k[l]===p||_e(n,l,p,k[l],i);if(_)s||c&&(_.__html===c.__html||_.__html===n.innerHTML)||(n.innerHTML=_.__html),e.__k=[];else if(c&&(n.innerHTML=""),Nn(e.type==="template"?n.content:n,le(h)?h:[h],e,t,r,v=="foreignObject"?"http://www.w3.org/1999/xhtml":i,o,a,o?o[0]:t.__k&&K(t,0),s,u),o!=null)for(l=o.length;l--;)Me(o[l]);s||(l="value",v=="progress"&&w==null?n.removeAttribute("value"):w!==void 0&&(w!==n[l]||v=="progress"&&!w||v=="option"&&w!==k[l])&&_e(n,l,w,k[l],i),l="checked",g!==void 0&&g!==n[l]&&_e(n,l,g,k[l],i))}return n}function Oe(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(i){x.__e(i,t)}}function Rn(n,e,t){var r,i;if(x.unmount&&x.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||Oe(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){x.__e(o,e)}r.base=r.__P=null}if(r=n.__k)for(i=0;i<r.length;i++)r[i]&&Rn(r[i],e,t||typeof n.type!="function");t||Me(n.__e),n.__c=n.__=n.__e=void 0}function kt(n,e,t){return this.constructor(n,t)}function ve(n,e,t){var r,i,o,a;e==document&&(e=document.documentElement),x.__&&x.__(n,e),i=(r=!1)?null:e.__k,o=[],a=[],He(e,n=e.__k=Ee(L,null,[n]),i||ie,ie,e.namespaceURI,i?null:e.firstChild?ye.call(e.childNodes):null,o,i?i.__e:e.firstChild,r,a),Tn(o,n,a)}ye=Cn.slice,x={__e:function(n,e,t,r){for(var i,o,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(n)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(n,r||{}),a=i.__d),a)return i.__E=i}catch(s){n=s}throw n}},wn=0,U.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof n=="function"&&(n=n(F({},t),this.props)),n&&F(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Be(this))},U.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Be(this))},U.prototype.render=L,q=[],xn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,kn=function(n,e){return n.__v.__b-e.__v.__b},me.__r=0,Sn=/(PointerCapture)$|Capture$/i,ze=0,Le=Ge(!1),Ne=Ge(!0);var J,E,xe,qe,oe=0,Pn=[],$=x,Xe=$.__b,Ye=$.__r,Ke=$.diffed,Je=$.__c,Qe=$.unmount,en=$.__;function we(n,e){$.__h&&$.__h(E,n,oe||e),oe=0;var t=E.__H||(E.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function I(n){return oe=1,St(jn,n)}function St(n,e,t){var r=we(J++,2);if(r.t=n,!r.__c&&(r.__=[t?t(e):jn(void 0,e),function(s){var u=r.__N?r.__N[0]:r.__[0],l=r.t(u,s);u!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=E,!E.__f)){var i=function(s,u,l){if(!r.__c.__H)return!0;var _=r.__c.__H.__.filter(function(h){return!!h.__c});if(_.every(function(h){return!h.__N}))return!o||o.call(this,s,u,l);var c=r.__c.props!==s;return _.forEach(function(h){if(h.__N){var p=h.__[0];h.__=h.__N,h.__N=void 0,p!==h.__[0]&&(c=!0)}}),o&&o.call(this,s,u,l)||c};E.__f=!0;var o=E.shouldComponentUpdate,a=E.componentWillUpdate;E.componentWillUpdate=function(s,u,l){if(this.__e){var _=o;o=void 0,i(s,u,l),o=_}a&&a.call(this,s,u,l)},E.shouldComponentUpdate=i}return r.__N||r.__}function z(n,e){var t=we(J++,3);!$.__s&&Ae(t.__H,e)&&(t.__=n,t.u=e,E.__H.__h.push(t))}function Ct(n,e){var t=we(J++,4);!$.__s&&Ae(t.__H,e)&&(t.__=n,t.u=e,E.__h.push(t))}function W(n){return oe=5,De(function(){return{current:n}},[])}function De(n,e){var t=we(J++,7);return Ae(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Lt(n,e){return oe=8,De(function(){return n},e)}function Nt(){for(var n;n=Pn.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(he),n.__H.__h.forEach(Te),n.__H.__h=[]}catch(e){n.__H.__h=[],$.__e(e,n.__v)}}$.__b=function(n){E=null,Xe&&Xe(n)},$.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),en&&en(n,e)},$.__r=function(n){Ye&&Ye(n),J=0;var e=(E=n.__c).__H;e&&(xe===E?(e.__h=[],E.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(he),e.__h.forEach(Te),e.__h=[],J=0)),xe=E},$.diffed=function(n){Ke&&Ke(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Pn.push(e)!==1&&qe===$.requestAnimationFrame||((qe=$.requestAnimationFrame)||Et)(Nt)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),xe=E=null},$.__c=function(n,e){e.some(function(t){try{t.__h.forEach(he),t.__h=t.__h.filter(function(r){return!r.__||Te(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],$.__e(r,t.__v)}}),Je&&Je(n,e)},$.unmount=function(n){Qe&&Qe(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{he(r)}catch(i){e=i}}),t.__H=void 0,e&&$.__e(e,t.__v))};var nn=typeof requestAnimationFrame=="function";function Et(n){var e,t=function(){clearTimeout(r),nn&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,100);nn&&(e=requestAnimationFrame(t))}function he(n){var e=E,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),E=e}function Te(n){var e=E;n.__c=n.__(),E=e}function Ae(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function jn(n,e){return typeof e=="function"?e(n):e}function Tt(n,e){for(var t in e)n[t]=e[t];return n}function tn(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var r in e)if(r!=="__source"&&n[r]!==e[r])return!0;return!1}function $t(n,e){var t=e(),r=I({t:{__:t,u:e}}),i=r[0].t,o=r[1];return Ct(function(){i.__=t,i.u=e,ke(i)&&o({t:i})},[n,t,e]),z(function(){return ke(i)&&o({t:i}),n(function(){ke(i)&&o({t:i})})},[n]),t}function ke(n){var e,t,r=n.u,i=n.__;try{var o=r();return!((e=i)===(t=o)&&(e!==0||1/e==1/t)||e!=e&&t!=t)}catch{return!0}}function rn(n,e){this.props=n,this.context=e}(rn.prototype=new U).isPureReactComponent=!0,rn.prototype.shouldComponentUpdate=function(n,e){return tn(this.props,n)||tn(this.state,e)};var on=x.__b;x.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),on&&on(n)};var Rt=x.__e;x.__e=function(n,e,t,r){if(n.then){for(var i,o=e;o=o.__;)if((i=o.__c)&&i.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),i.__c(n,e)}Rt(n,e,t,r)};var an=x.unmount;function zn(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),n.__c.__H=null),(n=Tt({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c=null),n.__k=n.__k&&n.__k.map(function(r){return zn(r,e,t)})),n}function Mn(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(r){return Mn(r,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function Se(){this.__u=0,this.o=null,this.__b=null}function Hn(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function fe(){this.i=null,this.l=null}x.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),an&&an(n)},(Se.prototype=new U).__c=function(n,e){var t=e.__c,r=this;r.o==null&&(r.o=[]),r.o.push(t);var i=Hn(r.__v),o=!1,a=function(){o||(o=!0,t.__R=null,i?i(s):s())};t.__R=a;var s=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=Mn(u,u.__c.__P,u.__c.__O)}var l;for(r.setState({__a:r.__b=null});l=r.o.pop();)l.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(a,a)},Se.prototype.componentWillUnmount=function(){this.o=[]},Se.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=zn(this.__b,t,r.__O=r.__P)}this.__b=null}var i=e.__a&&Ee(L,null,n.fallback);return i&&(i.__u&=-33),[Ee(L,null,e.__a?null:n.children),i]};var sn=function(n,e,t){if(++t[1]===t[0]&&n.l.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.l.size))for(t=n.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.i=t=t[2]}};(fe.prototype=new U).__a=function(n){var e=this,t=Hn(e.__v),r=e.l.get(n);return r[0]++,function(i){var o=function(){e.props.revealOrder?(r.push(i),sn(e,n,r)):i()};t?t(o):o()}},fe.prototype.render=function(n){this.i=null,this.l=new Map;var e=ge(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.l.set(e[t],this.i=[1,0,this.i]);return n.children},fe.prototype.componentDidUpdate=fe.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(e,t){sn(n,t,e)})};var Pt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,jt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,zt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Mt=/[A-Z0-9]/g,Ht=typeof document<"u",Ot=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};U.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(U.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var ln=x.event;function Dt(){}function At(){return this.cancelBubble}function It(){return this.defaultPrevented}x.event=function(n){return ln&&(n=ln(n)),n.persist=Dt,n.isPropagationStopped=At,n.isDefaultPrevented=It,n.nativeEvent=n};var Vt={enumerable:!1,configurable:!0,get:function(){return this.class}},cn=x.vnode;x.vnode=function(n){typeof n.type=="string"&&function(e){var t=e.props,r=e.type,i={},o=r.indexOf("-")===-1;for(var a in t){var s=t[a];if(!(a==="value"&&"defaultValue"in t&&s==null||Ht&&a==="children"&&r==="noscript"||a==="class"||a==="className")){var u=a.toLowerCase();a==="defaultValue"&&"value"in t&&t.value==null?a="value":a==="download"&&s===!0?s="":u==="translate"&&s==="no"?s=!1:u[0]==="o"&&u[1]==="n"?u==="ondoubleclick"?a="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||Ot(t.type)?u==="onfocus"?a="onfocusin":u==="onblur"?a="onfocusout":zt.test(a)&&(a=u):u=a="oninput":o&&jt.test(a)?a=a.replace(Mt,"-$&").toLowerCase():s===null&&(s=void 0),u==="oninput"&&i[a=u]&&(a="oninputCapture"),i[a]=s}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=ge(t.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=ge(t.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),t.class&&!t.className?(i.class=t.class,Object.defineProperty(i,"className",Vt)):(t.className&&!t.class||t.class&&t.className)&&(i.class=i.className=t.className),e.props=i}(n),n.$$typeof=Pt,cn&&cn(n)};var dn=x.__r;x.__r=function(n){dn&&dn(n),n.__c};var un=x.diffed;x.diffed=function(n){un&&un(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value)};function On(n,e){let t;try{t=n()}catch{return}return{getItem:i=>{var o;const a=u=>u===null?null:JSON.parse(u,void 0),s=(o=t.getItem(i))!=null?o:null;return s instanceof Promise?s.then(a):a(s)},setItem:(i,o)=>t.setItem(i,JSON.stringify(o,void 0)),removeItem:i=>t.removeItem(i)}}const $e=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return $e(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return $e(r)(t)}}}},Ft=(n,e)=>(t,r,i)=>{let o={storage:On(()=>localStorage),partialize:g=>g,version:0,merge:(g,k)=>({...k,...g}),...e},a=!1;const s=new Set,u=new Set;let l=o.storage;if(!l)return n((...g)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),t(...g)},r,i);const _=()=>{const g=o.partialize({...r()});return l.setItem(o.name,{state:g,version:o.version})},c=i.setState;i.setState=(g,k)=>{c(g,k),_()};const h=n((...g)=>{t(...g),_()},r,i);i.getInitialState=()=>h;let p;const w=()=>{var g,k;if(!l)return;a=!1,s.forEach(v=>{var m;return v((m=r())!=null?m:h)});const y=((k=o.onRehydrateStorage)==null?void 0:k.call(o,(g=r())!=null?g:h))||void 0;return $e(l.getItem.bind(l))(o.name).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==o.version){if(o.migrate){const m=o.migrate(v.state,v.version);return m instanceof Promise?m.then(b=>[!0,b]):[!0,m]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,v.state];return[!1,void 0]}).then(v=>{var m;const[b,S]=v;if(p=o.merge(S,(m=r())!=null?m:h),t(p,!0),b)return _()}).then(()=>{y==null||y(p,void 0),p=r(),a=!0,u.forEach(v=>v(p))}).catch(v=>{y==null||y(void 0,v)})};return i.persist={setOptions:g=>{o={...o,...g},g.storage&&(l=g.storage)},clearStorage:()=>{l==null||l.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>w(),hasHydrated:()=>a,onHydrate:g=>(s.add(g),()=>{s.delete(g)}),onFinishHydration:g=>(u.add(g),()=>{u.delete(g)})},o.skipHydration||w(),p||h},Ut=Ft;var Wt=0;function d(n,e,t,r,i,o){e||(e={});var a,s,u=e;if("ref"in u)for(s in u={},e)s=="ref"?a=e[s]:u[s]=e[s];var l={type:n,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Wt,__i:-1,__u:0,__source:i,__self:o};if(typeof n=="function"&&(a=n.defaultProps))for(s in a)u[s]===void 0&&(u[s]=a[s]);return x.vnode&&x.vnode(l),l}typeof window<"u"&&window.addEventListener("joycostudio-tempo-mounted",({detail:{root:n}})=>{const e=document.createElement("style");e.textContent=`*,
::before,
::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
  min-width: 0;
}
::before,
::after {
  --tw-content: "";
}
html,
:host {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family:
    ui-sans-serif,
    system-ui,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
}
body {
  margin: 0;
  line-height: inherit;
}
hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
abbr:where([title]) {
  text-decoration: underline dotted;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp,
pre {
  font-family:
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    "Liberation Mono",
    "Courier New",
    monospace;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
button,
select {
  text-transform: none;
}
button,
input:where([type=button]),
input:where([type=reset]),
input:where([type=submit]) {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
:-moz-focusring {
  outline: auto;
}
:-moz-ui-invalid {
  box-shadow: none;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
dialog {
  padding: 0;
}
textarea {
  resize: vertical;
}
input::placeholder,
textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}
button,
[role=button] {
  cursor: pointer;
}
:disabled {
  cursor: default;
}
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}
img,
video {
  max-width: 100%;
  height: auto;
}
[hidden] {
  display: none;
}
`,n.shadowRoot.appendChild(e)});var ce="joycostudio",de="tempo",Bt=`${ce}-shadow-root`,Dn=`${ce}-${de}-portal`,Zt=`${ce}-${de}-mounted`,Gt=`@${ce}/${de}`,qt=`@${ce}/${de}`,Ce=`__${de}_mounted`;typeof window<"u"&&window.addEventListener("joycostudio-tempo-mounted",({detail:{root:n}})=>{const e=document.createElement("style");e.textContent=`:host,
.m_a9c72cfd {
  font-family: 'JetBrains Mono', sans-serif;
  font-style: normal;
  font-weight: 400;
}

* {
  user-select: none;
}

.m_a9c72cfd {
  --color-gray-lighter: #a3a3a3;
  --color-gray-light: #383838;
  --color-gray: #232323;
  --color-gray-dark: #121212;
  --color-black: #000;
  --color-white: #fff;
  --color-orange: #ff4d00;
  --color-row-odd: #14151a60;
  --color-row-even: #14151a90;
  --header-height: 24px;

  color-scheme: dark;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: fixed;
  left: 0;
  z-index: 9999;
  background: #2b2d37;
  border-top: 1px solid var(--color-gray-light);
  overflow: hidden;
  line-height: 1;
  visibility: hidden;
  color: var(--color-white);
  transition: opacity 0.2s ease-out;
  isolation: isolate;
}

.m_a9c72cfd.m_4fcca5da {
  top: 0;
}

.m_a9c72cfd.m_3964ab86 {
  bottom: 0;
}

.m_a9c72cfd.m_8e8041d4 {
  opacity: 0.2;
}

.m_a9c72cfd.m_8e8041d4:hover {
  opacity: 1;
}

.m_a9c72cfd.m_29c23659 {
  visibility: visible;
}

.m_a9c72cfd .m_430bf3e8 {
  background: var(--color-gray-dark);
  text-align: center;
  height: var(--header-height);
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: relative;
}

.m_a9c72cfd .m_430bf3e8 .m_42d97f83 {
  width: 64px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px 0px;
}

.m_a9c72cfd .m_430bf3e8 .m_42d97f83:hover {
  cursor: ns-resize;
}

.m_a9c72cfd .m_430bf3e8 .m_42d97f83::before,
.m_a9c72cfd .m_430bf3e8 .m_42d97f83::after {
  content: '';
  position: relative;
  display: block;
  width: 16px;
  height: 1px;
  background: var(--color-white);
}

.m_a9c72cfd .m_430bf3e8 .m_a9cb6302 {
  display: flex;
  align-items: center;
  height: 100%;
}

.m_a9c72cfd .m_430bf3e8 .m_a9cb6302 .m_39b9388d {
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 24px;
  background: var(--color-gray);
  border-left-width: 1px;
  border-style: solid;
  border-color: var(--color-gray-light);
}

.m_a9c72cfd .m_430bf3e8 .m_a9cb6302 .m_39b9388d svg {
  width: 14px;
  height: 14px;
}

.m_a9c72cfd .m_430bf3e8 .m_a9cb6302 .m_fbb67445 {
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  gap: 0 8px;
}

.m_a9c72cfd .m_430bf3e8 .m_a9cb6302 .m_fbb67445 .m_a9c7f148 {
  transform: translateY(0.05em);
}

.m_a9c72cfd .m_a9c4b1d4 {
  border-top: 1px solid var(--color-gray-light);
  border-bottom: 1px solid var(--color-gray-light);
  max-height: calc(100vh - var(--header-height));
  background: var(--color-black);
  flex: 1;
  overflow: auto;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  align-items: stretch;
  overflow-x: clip;
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 {
  position: sticky;
  top: 0;
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972.m_5c6ae5a4 {
  --controls-height: 32px;
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_a9c310c9 {
  height: calc(100% - var(--controls-height));
  width: 100%;
  overflow-y: auto;
  border-right: 1px solid var(--color-gray-light);
  font-size: 12px;
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_a9c310c9 .m_4b59cc54 {
  position: sticky;
  top: 0px;
  text-align: center;
  padding: 8px;
  background: var(--color-gray-dark);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_a9c310c9 .m_a9c45cb9 {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  height: max-content;
  min-height: 0;
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_a9c310c9 .m_a9c45cb9 .m_4fcc82e4:not(.m_10a8c7e0),
.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_a9c310c9 .m_a9c45cb9 .m_8f5068b6:not(.m_10a8c7e0) {
  padding: 8px;
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_a9c310c9 .m_a9c45cb9 .m_4fcc82e4 {
  background: var(--color-row-even);
  height: 100%;
  width: 100%;
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_a9c310c9 .m_a9c45cb9 .m_8f5068b6 {
  background: var(--color-row-odd);
  text-align: right;
  align-items: center;
  height: 100%;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_d08d6d51 {
  border-top: 1px solid var(--color-gray-light);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 20px;
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_d08d6d51 .m_da2f79f8,
.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_d08d6d51 .m_3075b814,
.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_d08d6d51 .m_a9c472bf {
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gray-dark);
  height: calc(var(--controls-height) - 1px);
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_d08d6d51 .m_a9c472bf {
  font-size: 16px;
  background: var(--color-gray);
}

.m_a9c72cfd .m_a9c4b1d4 .m_a9c78972 .m_d08d6d51 .m_a9c472bf.m_3e6b8c3 {
  background: var(--color-white);
  color: var(--color-black);
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc {
  --padding-y: 12px;
  --padding-right: 32px;
  --padding-left: 24px;
  position: relative;
  height: max-content;
  min-height: 100%;
  width: 100%;
  padding: var(--padding-y) var(--padding-right) var(--padding-y) var(--padding-left);
  display: flex;
  flex-direction: column;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_38ad900d {
  position: relative;
  width: 100%;
  flex: 1;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_423c3652 {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  pointer-events: none;
  height: 100%;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_423c3652 .m_7a40131b {
  position: sticky;
  top: var(--padding-y);
  width: 100%;
  height: calc(var(--viewport-height) - var(--padding-y) * 2 - 20px);
  padding-top: 20px;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_423c3652 .m_7a40131b .m_8e861241 {
  position: absolute;
  height: 100%;
  font-size: 14px;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_423c3652 .m_7a40131b .m_8e861241 .m_a9c45c0f {
  position: relative;
  top: 0;
  border-right: 1px dashed #fff8;
  height: 100%;
  width: 1px;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_423c3652 .m_7a40131b .m_8e861241 .m_c6937e4a {
  position: absolute;
  padding-bottom: 16px;
  top: 12px;
  display: inline-block;
  line-height: 1;
  transform: translateX(-50%) translateY(-100%);
  color: #fff8;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_b6ace8c8 {
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100%;
  top: 0;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_b6ace8c8 .m_52029511 {
  position: sticky;
  height: calc(var(--viewport-height) - var(--padding-y) * 2 - 20px);
  padding-top: 20px;
  top: var(--padding-y);
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_b6ace8c8 .m_8f3bc94b {
  position: absolute;
  height: 100%;
  left: 0;
  width: 100%;
  overflow: hidden;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_b6ace8c8 .m_8f3bc94b .m_f7b01dcb {
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  width: 200px;
  background: linear-gradient(270deg, rgb(255 255 255 / 0.14) 0.53%, rgb(255 255 255 / 0) 100%);
  transform: translateX(-100%);
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_b6ace8c8 .m_4b63a595 {
  pointer-events: all;
  position: absolute;
  height: calc(100% - 12px);
  margin-top: 12px;
  width: 1px;
  background: var(--color-white);
  box-sizing: content-box;
  font-size: 14px;
  cursor: ew-resize;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_b6ace8c8 .m_4b63a595 .m_8f37891b {
  z-index: 10;
  top: 0px;
  transform: translateX(-50%) translateY(-100%);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2px;
}

.m_a9c72cfd .m_a9c4b1d4 .m_7690fadc .m_b6ace8c8 .m_4b63a595 .m_8f37891b .m_c6937e4a {
  padding-bottom: 3px;
  display: block;
}

.m_a9c72cfd .m_a9c4b1d4 .m_588598c3 {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.m_a9c72cfd .m_a9c4b1d4 .m_588598c3 .m_4fcc9e5f {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 4px 0;
}

.m_a9c72cfd .m_a9c4b1d4 .m_588598c3 .m_4fcc9e5f:nth-child(odd) {
  background: #14151a60;
}

.m_a9c72cfd .m_a9c4b1d4 .m_588598c3 .m_4fcc9e5f:nth-child(even) {
  background: #14151a90;
}

.m_a9c72cfd .m_4035c6f6 {
  display: none;
  background: var(--color-gray-dark);
  text-transform: uppercase;
  text-align: center;
  padding: 4px 16px;
  min-height: 44px;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
}

.m_a9c72cfd .m_40036dd {
  margin-left: 12px;
  font-size: 11px;
  color: var(--color-gray-lighter);
}

.m_8f3e1db0 {
  --duration-percentage: 0;
  --start-offset-percentage: 0;
  left: var(--start-offset-percentage);
  width: calc(var(--duration-percentage) - 3px);
  cursor: default;
  font-size: 12px;
  color: var(--color-white);
  position: relative;
  display: flex;
  align-items: center;
  min-height: 12px;
  height: 18px;
  background: white;
  padding-left: 8px;
  font-weight: 500;
  border-radius: 0px 4px 4px 0px;
  margin: 0 2px;
  outline: 1px solid var(--tween-color, var(--color-gray-light));
  outline-offset: 1px;
  overflow: hidden;
  white-space: nowrap;
}

.m_4fcca0e7 {
  --duration-percentage: 0;
  --start-offset-percentage: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: var(--start-offset-percentage);
  transform: translateX(-50%);
  width: 22px;
  height: 22px;
}

.m_4fcca0e7 .m_3a5979f0 {
  position: absolute;
  min-width: 0;
  min-height: 0;
  width: 13px;
  height: 13px;
  transform-origin: 50% 50%;
  transform: rotate(45deg);
  cursor: default;
  font-size: 12px;
  color: var(--color-white);
  display: flex;
  align-items: center;
  background: white;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  outline-offset: 1px;
  outline: 1px solid var(--tween-color, var(--color-gray-light));
}

.m_1c192e9c {
  --start-offset-percentage: 0;
  --outline-color: transparent;
  position: relative;
  left: var(--start-offset-percentage);
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gray);
  border: 1px solid var(--color-gray-light);
  border-radius: 6px;
  transform: translateX(-50%);
  outline: 1px solid var(--outline-color);
}

.m_1c192e9c .m_4f6f0638,
.m_1c192e9c .m_1c834b46 {
  opacity: 0;
  transition-property: transform opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}

.m_1c192e9c .m_4f6f0638 {
  position: absolute;
  right: -8px;
  transform: translateX(50%);
}

.m_1c192e9c .m_4f6f0638.m_37069061 {
  opacity: 1;
  transform: translateX(100%) scale(1.2);
}

.m_1c192e9c .m_1c834b46 {
  position: absolute;
  left: -8px;
  transform: translateX(-50%);
}

.m_1c192e9c .m_1c834b46.m_37069061 {
  opacity: 1;
  transform: translateX(-100%) scale(1.2);
}

.m_1c192e9c.m_395e1936,
.m_8f3e1db0.m_395e1936,
.m_4fcca0e7 .m_3a5979f0.m_395e1936 {
  transition-property: outline-color outline-width;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  outline: 2px solid var(--color-orange);
}

.m_2f87563c {
  position: relative;
}

.m_2f87563c .m_55d64657 {
  appearance: none;
  cursor: pointer;
  background: var(--color-gray);
  color: var(--color-white);
  border-right: 1px solid var(--color-gray-light);
  height: 24px;
  width: max-content;
  min-width: 110px;
  padding: 0 8px;
  padding-right: 24px;
}

.m_2f87563c .m_8e304b4e {
  pointer-events: none;
  position: absolute;
  content: '';
  right: 8px;
  top: 50%;
  width: 12px;
  height: 12px;
  z-index: 10;
  transform: translateY(-50%);
}

.m_30123979 {
  background: #ec5b29aa;
  z-index: 999;
}

@media (max-width: 768px) {
  .m_a9c72cfd {
    left: 50%;
    transform: translateX(-50%);
  }

  .m_a9c72cfd .m_40036dd {
    display: none;
  }

  .m_a9c72cfd .m_fbb67445 .m_a9c7f148 {
    display: none;
  }
}
`,n.shadowRoot.appendChild(e)});var f={root:"m_a9c72cfd",top:"m_4fcca5da",bottom:"m_3964ab86",ghost:"m_8e8041d4",initialized:"m_29c23659",header:"m_430bf3e8",handle:"m_42d97f83",actions:"m_a9cb6302",button:"m_39b9388d",scrollToRoot:"m_fbb67445",text:"m_a9c7f148",main:"m_a9c4b1d4",side:"m_a9c78972","has-controls":"m_5c6ae5a4",info:"m_a9c310c9","info-title":"m_4b59cc54",list:"m_a9c45cb9",key:"m_4fcc82e4","no-padding":"m_10a8c7e0",value:"m_8f5068b6",controls:"m_d08d6d51","play-pause":"m_da2f79f8",restart:"m_3075b814",loop:"m_a9c472bf",looping:"m_3e6b8c3",timeline:"m_7690fadc","timeline-inside":"m_38ad900d",guides:"m_423c3652","guides-inner":"m_7a40131b",guide:"m_8e861241",line:"m_a9c45c0f",percent:"m_c6937e4a",progress:"m_b6ace8c8","progress-inner":"m_52029511",trail:"m_8f3bc94b",gradient:"m_f7b01dcb",marker:"m_4b63a595",thumb:"m_8f37891b",tweens:"m_588598c3",row:"m_4fcc9e5f",footer:"m_4035c6f6",version:"m_40036dd",tween:"m_8f3e1db0",set:"m_4fcca0e7","set-inner":"m_3a5979f0",waypoint:"m_1c192e9c",onCall:"m_4f6f0638",onReverseCall:"m_1c834b46",active:"m_37069061",selected:"m_395e1936",selectWrapper:"m_2f87563c",select:"m_55d64657",arrow:"m_8e304b4e",highlight:"m_30123979"},_n="0.0.5",Xt=class{constructor(){this.events={}}emit(n,...e){var r;const t=this.events[n]||[];for(let i=0,o=t.length;i<o;i++)(r=t[i])==null||r.call(t,...e)}on(n,e){var t;return(t=this.events[n])!=null&&t.push(e)||(this.events[n]=[e]),()=>{this.off(n,e)}}off(n,e){var t;this.events[n]=((t=this.events[n])==null?void 0:t.filter(r=>e!==r))??[]}destroy(){this.events={}}},Yt=class{constructor(n="none"){this.level=n}setLevel(n){this.level=n}debug(...n){this.level==="debug"&&console.debug(`%c[${qt}]%c:`,"background: #ec5b29; color: white","",...n)}},Kt=Yt,Jt=n=>n,N=Qn(Ut(()=>({dismiss:!1,version:_n,events:new Xt,logger:new Kt,roots:[],activeRoot:void 0,minimize:!1,ghost:!1,height:350,position:"bottom","last-root-selected":""}),{version:Number(_n.replace(".","")),name:Gt,partialize:n=>({minimize:n.minimize,ghost:n.ghost,height:n.height,position:n.position}),storage:On(()=>sessionStorage)})),re=(n=Jt)=>$t(N.subscribe,()=>n(N.getState())),ne=n=>{const e=re(r=>r[n]),t=Lt(r=>{N.setState(i=>({[n]:typeof r=="function"?r(i[n]):r}))},[n]);return[e,t]},B=(...n)=>n.filter(Boolean).join(" "),Qt=N.getState().logger,er=()=>{var e;return(e=document.querySelector(`#${Dn}`))==null?void 0:e.shadowRoot},nr=n=>{const e=document.createElement("div");e.style.position="fixed";const t=n.getBoundingClientRect();e.style.top=`${t.top}px`,e.style.left=`${t.left}px`,e.style.width=`${t.width}px`,e.style.height=`${t.height}px`,e.style.pointerEvents="none",e.classList.add(f.highlight);const r=er();if(!r){console.error("Tempo: Shadow root not found");return}return r.appendChild(e),()=>{try{r.removeChild(e)}catch{console.error("Failed to remove node")}}},tr=(n,e={},t="#0ae448")=>{const r=[];try{r.push(...Array.from({length:100},(i,o)=>{const a=o/100,s=n(a);return`${a*100+((e==null?void 0:e.x)??0)},${100-s*100+((e==null?void 0:e.y)??0)}`}))}catch(i){console.log(i,n)}return d("polyline",{fill:"none",stroke:t,strokeWidth:"2",points:r.join(" ")})},Z=[["#F87171","#991B1B"],["#FACC15","#854D0E"],["#4ADE80","#166534"],["#2DD4BF","#115E59"],["#38BDF8","#075985"],["#818CF8","#3730A3"],["#C084FC","#6B21A8"],["#E879F9","#86198F"],["rgba(244, 114, 182, 0.40)","#9D174D"]],An=n=>`${n.tagName.toLocaleLowerCase()}${n.id?`#${n.id}`:""}${n.classList.length?"."+n.classList[0]:""}`,In=n=>n instanceof O.core.Tween?n.targets().map(e=>{if(e instanceof SVGElement||e instanceof HTMLElement)return An(e);if(e instanceof Object){const t=Object.keys(e).filter(i=>i!="_gsap"),r=t.slice(0,3);return t.length>r.length&&r.push("..."),`${e.constructor.name} { ${r.join(", ")} }`}}).join(", "):"",fn=n=>{try{return parseInt(window.getComputedStyle(n).zIndex,10)||0}catch{return Qt.debug(`Tempo: Failed to get z-index of ${n}`),0}},rr=(n,e)=>{const t=fn(n),r=fn(e);return t>r?n:r>t||n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?e:n},ir=({root:n,tween:e,onSelect:t})=>{const[r,i]=I(!1),[,o]=I(!1);z(()=>{if(!r||!(e instanceof O.core.Tween))return;const w=e.targets().map(g=>{if(g instanceof SVGElement||g instanceof HTMLElement)return nr(g)});return()=>{w.forEach(g=>g&&g())}},[r,e]),z(()=>{const w=()=>{var v;const g=(v=n.tween)==null?void 0:v.progress();if(!g)return;const k=e._start/100,y=(e._start+e._dur)/100;g>=k&&g<=y?o(!0):o(!1)};return N.getState().events.on("timeline:update",w)},[n.tween,e._dur,e._start]);const a=In(e),s=e.vars.id||e.vars.label||null,u=w=>{var g;if(w.stopPropagation(),w.button===0&&t(e),w.button===1){const k=(g=n.tween)==null?void 0:g.scrollTrigger;if(!k)return;const y=k.start,v=k.end,m=y+(v-y)*(e._start/100),b=w.shiftKey;window.scrollTo({top:m,behavior:b?"instant":"smooth"})}};if(!n.tween)throw new Error("Root tween is missing");const l=e===n.tween,_=n.tween.duration(),c=l?0:e._start,h=c/_*100,p=(c+e._dur)/_*100;return{onMouseDown:u,targetString:a,identifier:s,startPerc:h,endPerc:p,setIsHovering:i,isHovering:r}},Vn=ir,or=({selected:n,tween:e,root:t,onSelect:r,idx:i})=>{var l,_;const{targetString:o,startPerc:a,onMouseDown:s,setIsHovering:u}=Vn({root:t,tween:e,onSelect:r});return d("div",{style:{"--start-offset-percentage":a+"%","--tween-color":(l=Z[i%Z.length])==null?void 0:l[1]},className:f.set,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),onMouseDown:s,children:d("div",{title:o,className:B(f["set-inner"],n&&[f.selected]),style:{background:"linear-gradient(90deg, transparent 0%, "+((_=Z[i%Z.length])==null?void 0:_[0])+" 100%)"}})})},ar=or,sr=({selected:n,tween:e,root:t,onSelect:r,idx:i})=>{var c,h;const{targetString:o,identifier:a,startPerc:s,endPerc:u,onMouseDown:l,setIsHovering:_}=Vn({root:t,tween:e,onSelect:r});return d("div",{title:o,className:B(f.tween,n&&[f.selected]),style:{"--duration-percentage":u-s+"%","--start-offset-percentage":s+"%","--tween-color":(c=Z[i%Z.length])==null?void 0:c[1],background:"linear-gradient(90deg, transparent 0%, "+((h=Z[i%Z.length])==null?void 0:h[0])+" 100%)"},onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),onMouseDown:l,children:[a," ",a&&o?" | "+o:o]})},lr=()=>d("div",{className:f.guides,children:d("div",{className:f["guides-inner"],children:[d("div",{className:f.guide,style:{left:"0%"},children:[d("span",{className:f.percent,children:"0%"}),d("div",{className:f.line})]}),d("div",{className:f.guide,style:{left:"25%"},children:[d("span",{className:f.percent,children:"25%"}),d("div",{className:f.line})]}),d("div",{className:f.guide,style:{left:"50%"},children:[d("span",{className:f.percent,children:"50%"}),d("div",{className:f.line})]}),d("div",{className:f.guide,style:{left:"75%"},children:[d("span",{className:f.percent,children:"75%"}),d("div",{className:f.line})]}),d("div",{className:f.guide,style:{left:"100%"},children:[d("span",{className:f.percent,children:"100%"}),d("div",{className:f.line})]})]})}),cr=({tween:n,root:e})=>{const[t,r]=I(void 0);return z(()=>{n.data._visualizer.type==="waypoint"&&(n.data._visualizer._internalOnCall=()=>{r("complete")},n.data._visualizer._internalOnReverseCall=()=>{r("reverse-complete")})},[n.data._visualizer]),d("div",{style:{"--start-offset-percentage":n._start+"%"},className:f.waypoint,onClick:()=>{var o,a;const i=(o=e.tween)==null?void 0:o.scrollTrigger;if(i&&n.data._visualizer.type==="waypoint"){if(!(e.tween instanceof gsap.core.Timeline))return;if((a=e.tween)==null?void 0:a.labels[n.data._visualizer.label]){const u=i.labelToScroll(n.data._visualizer.label);window.scrollTo({top:u+0,behavior:"smooth"})}}},children:[d("span",{className:B(f.onReverseCall,t==="reverse-complete"&&f.active),children:d("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d("path",{d:"M6.375 9.75L2.625 6L6.375 2.25M9.375 9.75L5.625 6L9.375 2.25",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),d("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d("path",{d:"M1.5 1.5V2.25V1.5ZM1.5 10.5V7.5V10.5ZM1.5 7.5L2.885 7.1535C3.9272 6.89302 5.0282 7.01398 5.989 7.4945L6.043 7.5215C6.98459 7.9921 8.06137 8.11772 9.086 7.8765L10.643 7.5105C10.4523 5.76591 10.4515 4.00577 10.6405 2.261L9.0855 2.627C8.06097 2.86794 6.98439 2.74215 6.043 2.2715L5.989 2.2445C5.0282 1.76398 3.9272 1.64302 2.885 1.9035L1.5 2.25M1.5 7.5V2.25V7.5Z",fill:"white",fillOpacity:"0.12"}),d("path",{d:"M1.5 1.5V2.25M1.5 2.25L2.885 1.9035C3.9272 1.64302 5.0282 1.76398 5.989 2.2445L6.043 2.2715C6.98439 2.74215 8.06097 2.86794 9.0855 2.627L10.6405 2.261C10.4515 4.00577 10.4523 5.76591 10.643 7.5105L9.086 7.8765C8.06137 8.11772 6.98459 7.9921 6.043 7.5215L5.989 7.4945C5.0282 7.01398 3.9272 6.89302 2.885 7.1535L1.5 7.5M1.5 2.25V7.5M1.5 10.5V7.5",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]}),d("span",{className:B(f.onCall,t==="complete"&&f.active),children:d("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d("path",{d:"M5.625 2.25L9.375 6L5.625 9.75M2.625 2.25L6.375 6L2.625 9.75",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},dr=n=>d("div",{className:f.selectWrapper,children:[d("select",{...n,className:B(f.select,n.className)}),d("svg",{className:f.arrow,width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d("path",{d:"M9.75 4.125L6 7.875L2.25 4.125",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})})]}),ur=({tween:n})=>{const e=W(null),t=W(null),r=W(null),i=O.parseEase(n.vars.ease);return z(()=>N.getState().events.on("timeline:update",()=>{const o=n.progress();!e.current||!t.current||!r.current||(e.current.setAttribute("x1",`${o*100}`),e.current.setAttribute("x2",`${o*100}`),t.current.setAttribute("cy",`${100-i(o)*100}`),t.current.setAttribute("cx",`${o*100}`),r.current.textContent=i(o).toFixed(2))}),[n]),d("div",{style:{position:"relative",fontSize:18,width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:[d("svg",{width:"100%",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d("line",{x1:"0",y1:"25",x2:"100",y2:"25",stroke:"var(--color-gray)"}),d("line",{x1:"0",y1:"50",x2:"100",y2:"50",stroke:"var(--color-gray)"}),d("line",{x1:"0",y1:"75",x2:"100",y2:"75",stroke:"var(--color-gray)"}),d("line",{x1:"25",y1:"0",x2:"25",y2:"100",stroke:"var(--color-gray)"}),d("line",{x1:"50",y1:"0",x2:"50",y2:"100",stroke:"var(--color-gray)"}),d("line",{x1:"75",y1:"0",x2:"75",y2:"100",stroke:"var(--color-gray)"}),tr(i),d("line",{x1:0,y1:"0",x2:0,y2:"100",stroke:"var(--color-white)",ref:e}),d("circle",{cx:"0",cy:"0",r:"2",fill:"var(--color-orange)",stroke:"var(--color-white)",ref:t})]}),d("p",{style:{position:"absolute",color:"var(--color-white)"},ref:r,children:i(0).toFixed(2)})]})},_r=({root:n,selectedItem:e})=>{var k,y,v,m,b,S,M,j,H,A,V,P;const[t,r]=I((k=n.tween)!=null&&k.isActive()?"playing":"paused"),[i,o]=I(((y=n.tween)==null?void 0:y.repeat())===-1),a=(m=(v=n==null?void 0:n.tween)==null?void 0:v.data)==null?void 0:m._visualizer;if(a.type!=="root")throw new Error("Selected root is not root type");const s=((b=n==null?void 0:n.tween)==null?void 0:b.duration())||0,u=a.isScrollytelling&&s!=100,l=a.isScrollytelling?"%":" seconds",_=[[d(L,{children:"Total Duration"}),d(L,{children:[s,l,u&&d("span",{title:"This timeline is not normalized! You may experience bad UI.",children:" ❗️"})]})],[d(L,{children:"Total Pixels"}),d(L,{children:[(((M=(S=n.tween)==null?void 0:S.scrollTrigger)==null?void 0:M.end)??0)-(((H=(j=n.tween)==null?void 0:j.scrollTrigger)==null?void 0:H.start)??0)," px"]})],[d(L,{children:"Total Tweens"}),d(L,{children:[n.children.length," "]})]],c=[];if(e){const C=(A=e==null?void 0:e.targets)==null?void 0:A.call(e),T=In(e);c.push([d(L,{children:"Target"}),d(L,{children:["(",C==null?void 0:C.length,") ",T]})],[d(L,{children:"Duration"}),d(L,{children:[e._dur,l]})],[d(L,{children:"Start"}),d(L,{children:[e._start,l]})],[d(L,{children:"End"}),d(L,{children:[e._start+e._dur,l]})]),e instanceof O.core.Tween&&c.push([d(L,{children:"Easing"}),d("div",{children:[d("p",{className:f["info-title"],title:(V=e.vars.ease)==null?void 0:V.toString(),children:((P=e.vars.ease)==null?void 0:P.toString())??"No ease provided"}),e.vars.ease&&d(ur,{tween:e})]})])}const h=()=>{var T,G,Q,X,ee;((T=n.tween)==null?void 0:T.repeat())===-1?(G=n.tween)==null||G.repeat(0):((Q=n.tween)==null||Q.repeat(-1),(X=n.tween)==null||X.repeatDelay(1)),o(((ee=n.tween)==null?void 0:ee.repeat())===-1)},p=()=>{var C,T,G,Q;if(t==="playing")(C=n.tween)==null||C.pause(),r("paused");else{(T=n.tween)==null||T.play();const X=(G=n.tween)==null?void 0:G.eventCallback("onComplete");(Q=n.tween)==null||Q.eventCallback("onComplete",()=>{var ee,Ie;X==null||X(),(ee=n.tween)==null||ee.pause(),r((Ie=n.tween)!=null&&Ie.isActive()?"playing":"paused")}),r("playing")}},w=()=>{var C;(C=n.tween)==null||C.seek(0,!1)};z(()=>{const C=()=>{var T;r((T=n.tween)!=null&&T.isActive()?"playing":"paused")};return N.getState().events.on("timeline:update",C)},[n.tween]);const g=!a.isScrollytelling;return d("div",{className:B(f.side,g&&f["has-controls"]),children:[d("div",{className:f.info,children:[a.isScrollytelling?d("p",{className:f["info-title"],children:"✨ Scrollytelling Timeline ✨"}):d("p",{className:f["info-title"],children:"Selected Root"}),d("div",{className:f.list,children:_.map((C,T)=>d(L,{children:[d("div",{className:f.key,children:C[0]}),d("div",{className:f.value,children:C[1]})]},T))}),e&&d(L,{children:[d("p",{className:f["info-title"],children:"Selected Tween"}),d("div",{className:f.list,children:c.map((C,T,G)=>d(L,{children:[d("div",{className:f.key,children:C[0]}),d("div",{className:B(f.value,T===G.length-1&&f["no-padding"]),children:C[1]})]},T))})]})]}),g&&d("div",{className:f.controls,children:[d("button",{className:f["play-pause"],onClick:p,children:t==="playing"?"⏸":"▶️"}),d("button",{className:f.restart,onClick:w,children:"↩"}),d("button",{className:B(f.loop,i&&f.looping),onClick:h,children:i?"looping":"loop"})]})]})},fr=_r,pr=({root:n})=>{const[e,t]=I(0);return z(()=>{const r=()=>{var o;const i=(o=n==null?void 0:n.tween)==null?void 0:o.progress();t(i??0)};return N.getState().events.on("timeline:update",r)},[n==null?void 0:n.tween]),d(L,{children:[(e*100).toFixed(0),"%"]})},hr=({root:n})=>{const e=W(null),t=W(null),r=W(null);return z(()=>{const i=()=>{var a;const o=(a=n==null?void 0:n.tween)==null?void 0:a.progress();!e.current||!t.current||o===void 0||(e.current.style.left=`${o*100}%`,t.current.style.left=`${o*100}%`)};return N.getState().events.on("timeline:update",i)},[n==null?void 0:n.tween]),z(()=>{const i=e.current,o=r.current;if(!i||!o)return;let a=!1;const s=_=>{_=_||window.event,_.preventDefault(),a=!0,document.addEventListener("mouseup",l),document.addEventListener("mousemove",u)},u=_=>{var c,h;if(_=_||window.event,_.preventDefault(),a){const p=o.getBoundingClientRect(),g=(_.clientX-p.left)/p.width;(c=n==null?void 0:n.tween)==null||c.pause(),(h=n==null?void 0:n.tween)==null||h.progress(g)}};function l(){document.removeEventListener("mouseup",l),document.removeEventListener("mousemove",u),a=!1}return i.addEventListener("mousedown",s),()=>{i.removeEventListener("mousedown",s),l()}},[n]),d("div",{className:f.progress,ref:r,children:d("div",{className:f["progress-inner"],children:[d("div",{className:f.marker,ref:e,children:d("span",{className:f.thumb,children:[d("span",{className:f.percent,children:d(pr,{root:n})}),d("svg",{width:"8",height:"11",viewBox:"0 0 8 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d("mask",{id:"path-1-inside-1_2793_1632",fill:"white",children:d("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0H0V8L4 11L8 8V0Z"})}),d("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0H0V8L4 11L8 8V0Z",fill:"white"}),d("path",{d:"M0 0V-1H-1V0H0ZM8 0H9V-1H8V0ZM0 8H-1V8.5L-0.6 8.8L0 8ZM4 11L3.4 11.8L4 12.25L4.6 11.8L4 11ZM8 8L8.6 8.8L9 8.5V8H8ZM0 1H8V-1H0V1ZM1 8V0H-1V8H1ZM4.6 10.2L0.6 7.2L-0.6 8.8L3.4 11.8L4.6 10.2ZM7.4 7.2L3.4 10.2L4.6 11.8L8.6 8.8L7.4 7.2ZM7 0V8H9V0H7Z",fill:"white",mask:"url(#path-1-inside-1_2793_1632)"})]})]})}),d("div",{className:f.trail,children:d("div",{className:f.gradient,ref:t})})]})})},mr=N.getState().logger,gr=()=>{const n=W(null),e=W(null),t=re(m=>m.roots),r=re(m=>m.activeRoot),i=re(m=>m.dismiss),[o,a]=I(!1),[s,u]=I(),[l,_]=ne("minimize"),[c,h]=ne("ghost"),[p,w]=ne("height"),[g,k]=ne("last-root-selected"),[y,v]=ne("position");return z(()=>{const m=t.find(b=>b.id===g)??t[0];m&&N.setState({activeRoot:m})},[g,t]),z(()=>{const m=n.current,b=e.current;if(!m||!b)return;const S=N.getState().height.toString()+"px";m.style.setProperty("height",S),m.style.setProperty("--viewport-height",S);let M=0,j=0,H=0;const A=C=>{C=C||window.event,C.preventDefault(),M=C.clientY,H=m.offsetHeight,document.addEventListener("mouseup",P),document.addEventListener("mousemove",V)},V=C=>{if(!m)return;C=C||window.event,C.preventDefault(),j=C.clientY;const T=Math.max(H+M-j,0)+"px";m.style.setProperty("height",T),m.style.setProperty("--viewport-height",T)};function P(){document.removeEventListener("mouseup",P),document.removeEventListener("mousemove",V);const C=m==null?void 0:m.style.getPropertyValue("height").replace("px","");m!=null&&m.style.height&&w(Number(C??350))}return b.addEventListener("mousedown",A),a(!0),()=>{b.removeEventListener("mousedown",A),P()}},[_,h,a]),z(()=>N.getState().events.on("timeline:refresh",()=>{const m=[];mr.debug("VisualizerPanel - Refreshing roots",O.globalTimeline.getChildren()),O.globalTimeline.getChildren().forEach(b=>{var M;if(!((M=b.data)!=null&&M._visualizer))return;const S=b.data._visualizer;if(S.type==="root"){if(!S.debug)return;if(b instanceof O.core.Timeline){const j=m.find(H=>H.tween===b);j?(j.debug=!0,j.tween=b,j.label=S==null?void 0:S.label):m.push({id:S==null?void 0:S.id,label:S==null?void 0:S.label,debug:!0,children:[],tween:b})}else m.push({id:S==null?void 0:S.id,label:S==null?void 0:S.label,debug:!0,children:[b],tween:b})}else if(S.type==="animation"||S.type==="waypoint"||S.type==="instant-animation"){const j=m.find(H=>H.tween===b.parent);if(j)j.children.push(b);else{if(!b.parent)return;m.push({id:"",debug:!1,label:"",children:[b],tween:b.parent})}}}),m.sort((b,S)=>{var V,P,C,T;const M=(P=(V=b.tween)==null?void 0:V.scrollTrigger)==null?void 0:P.trigger,j=(T=(C=S.tween)==null?void 0:C.scrollTrigger)==null?void 0:T.trigger;if(!M||!j)return 0;const H=M.getBoundingClientRect().top,A=j.getBoundingClientRect().top;return H-A}),N.setState({roots:m.filter(b=>b.debug)})}),[]),z(()=>{N.getState().events.emit("timeline:refresh")},[]),d("div",{style:{display:i?"none":"block"},className:B(f.root,o&&f.initialized,c&&f.ghost,y==="top"&&f.top,y==="bottom"&&f.bottom),children:[d("header",{className:f.header,children:[d("div",{className:f.actions,children:[d(dr,{value:(r==null?void 0:r.id)??"",onChange:m=>{k(m.currentTarget.value),u(void 0)},onPointerDown:m=>m.stopPropagation(),children:t.map(m=>d("option",{value:m.id,children:m.label},m.id))}),d("span",{className:f.version,children:["v",N.getState().version]})]}),d("div",{className:f.handle,style:{"--viewport-height":p+"px",visibility:l?"hidden":"visible",pointerEvents:l?"none":"auto"},ref:e}),d("div",{className:f.actions,children:[d("button",{className:f.button,onClick:()=>v(y==="top"?"bottom":"top"),children:y==="top"?"↓":"↑"}),d("button",{style:{textDecoration:c?"line-through":"none"},className:f.button,onClick:()=>h(m=>!m),children:"G"}),d("button",{className:f.button,onClick:()=>_(m=>!m),children:l?d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.43359 8C2.43359 7.72386 2.65745 7.5 2.93359 7.5H13.0669C13.3431 7.5 13.5669 7.72386 13.5669 8C13.5669 8.27614 13.3431 8.5 13.0669 8.5H2.93359C2.65745 8.5 2.43359 8.27614 2.43359 8Z",fill:"white"}),d("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 2.43311C8.27614 2.43311 8.5 2.65697 8.5 2.93311L8.5 13.0664C8.5 13.3426 8.27614 13.5664 8 13.5664C7.72386 13.5664 7.5 13.3426 7.5 13.0664L7.5 2.93311C7.5 2.65697 7.72386 2.43311 8 2.43311Z",fill:"white"})]}):d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.43359 8C2.43359 7.72386 2.65745 7.5 2.93359 7.5H13.0669C13.3431 7.5 13.5669 7.72386 13.5669 8C13.5669 8.27614 13.3431 8.5 13.0669 8.5H2.93359C2.65745 8.5 2.43359 8.27614 2.43359 8Z",fill:"white"})})}),d("button",{className:f.button,onClick:()=>N.setState({dismiss:!0}),children:d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5402 4.27333C12.7648 4.04878 12.7648 3.68471 12.5402 3.46016C12.3157 3.23561 11.9516 3.23561 11.7271 3.46016L8.00033 7.18691L4.27358 3.46016C4.04903 3.23561 3.68496 3.23561 3.46041 3.46016C3.23585 3.68471 3.23585 4.04878 3.46041 4.27333L7.18715 8.00008L3.46041 11.7268C3.23585 11.9514 3.23585 12.3154 3.46041 12.54C3.68496 12.7646 4.04903 12.7646 4.27358 12.54L8.00033 8.81325L11.7271 12.54C11.9516 12.7646 12.3157 12.7646 12.5402 12.54C12.7648 12.3154 12.7648 11.9514 12.5402 11.7268L8.8135 8.00008L12.5402 4.27333Z",fill:"white"})})})]})]}),d("div",{style:{display:l?"none":"block"},children:d("div",{className:f.main,ref:n,children:[r&&d(fr,{selectedItem:s,root:r}),d("div",{className:f.timeline,children:d("div",{className:f["timeline-inside"],children:[d(lr,{}),d("div",{className:f.tweens,children:r==null?void 0:r.children.map((m,b)=>{const S=m.data._visualizer;return S.type==="animation"||S.type==="root"?d("div",{className:f.row,children:d(sr,{selected:s===m,onSelect:u,tween:m,root:r,idx:b})},b):S.type==="instant-animation"?d("div",{className:f.row,children:d(ar,{selected:s===m,onSelect:u,tween:m,root:r,idx:b})},b):S.type==="waypoint"?d("div",{className:f.row,children:d(cr,{tween:m,root:r,idx:b})},b):d(L,{})})}),d(hr,{root:r})]})})]})})]})},Fn=(n,e)=>{var r;n.data={...n.data,_visualizer:{...(r=n.data)==null?void 0:r._visualizer,type:"root",debug:!0,id:e,label:e}},n instanceof O.core.Tween||n.getChildren().forEach(i=>{var s;if((s=i.data)!=null&&s._visualizer)return;const o=i,a=o._start===o._end&&o._dur===0;i.data={...i.data,_visualizer:{type:a?"instant-animation":"animation"}}}),N.getState().events.emit("timeline:refresh");const t=n.eventCallback("onUpdate");n.eventCallback("onUpdate",()=>{t==null||t(),N.getState().events.emit("timeline:update",n)})},Un=()=>{const[n,e]=I(!1);return z(()=>{window.addEventListener("keydown",t=>{t.key==="Shift"&&e(!0)}),window.addEventListener("keyup",t=>{t.key==="Shift"&&e(!1)})},[]),n},Y=N.getState().logger,vr=({element:n,tweens:e})=>{const[t,r]=I(),i=Un();if(z(()=>{if(!i){r(void 0);return}const a=n.getBoundingClientRect();r(a)},[i]),!i||!t)return d(L,{});const o=a=>{var s,u,l,_,c,h;if(a===((s=N.getState().activeRoot)==null?void 0:s.tween)){Y.debug("Sentinels - Already active root",a),N.setState({dismiss:!1,minimize:!1});return}if(a.parent===O.globalTimeline){const p=((l=(u=a==null?void 0:a.data)==null?void 0:u._visualizer)==null?void 0:l.label)??et(4);((_=a==null?void 0:a.data)==null?void 0:_._visualizer)===void 0&&(Y.debug("Sentinels - Labeling new root",p,a),Fn(a,p)),Y.debug(`Setting active root to: ${(h=(c=a.data)==null?void 0:c._visualizer)==null?void 0:h.label}`),N.setState({dismiss:!1,minimize:!1,activeRoot:{id:p,debug:!0,label:p,children:a instanceof O.core.Timeline?a.getChildren():[a],tween:a}})}else a.parent&&o(a.parent)};return d("div",{style:{position:"fixed",top:t==null?void 0:t.top,left:t==null?void 0:t.left,width:t==null?void 0:t.width,height:t==null?void 0:t.height,background:"#ec5b29aa",border:"1px solid #ec5b29",zIndex:999},onClick:a=>{a.preventDefault(),Y.debug("Sentinels - Clicking",n,e),e.length&&(Y.debug("Sentinels - Selecting tween",e[0]),o(e[0]))},children:d("span",{style:{fontSize:10,position:"absolute",color:"#fff",background:"#ec5b29",top:-1,left:-1,padding:"1px 4px",transform:"translate(0%, -100%)",maxWidth:"80%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:An(n)})})},br=()=>{const n=re(o=>o.events),[e,t]=I(new Map),r=De(()=>Array.from(e.entries()).sort((a,s)=>{const u=a[0],l=s[0];return rr(u,l)===u?1:-1}),[e]);z(()=>{const o=()=>{const a=new Map;Y.debug("Sentinels - Reading targets",O.globalTimeline.getChildren()),O.globalTimeline.getChildren().forEach(s=>{s instanceof O.core.Timeline||s instanceof O.core.Tween&&s.targets().forEach(u=>{var _;const l=u;(l instanceof HTMLElement||l instanceof SVGElement)&&(a.has(l)||a.set(l,[]),(_=a.get(l))==null||_.push(s))})}),t(a)};return o(),n.on("timeline:refresh",o)},[n]);const i=Un();return z(()=>{i?O.globalTimeline.pause():O.globalTimeline.play()},[i]),d(L,{children:r.map(([o,a])=>d(vr,{element:o,tweens:a},o.id))})},Wn=()=>{const[n,e]=I(!1),t=W(null);return z(()=>{const r=window;if(!r[Ce])return e(!0),r[Ce]=!0,()=>{e(!1),r[Ce]=!1}},[]),z(()=>{if(!n||!t.current)return;const r=t.current.attachShadow({mode:"open"}),i=document.createElement("link");i.href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap",i.rel="stylesheet",document.head.appendChild(i);const o=document.fonts.ready.then(()=>{window.dispatchEvent(new CustomEvent(Zt,{detail:{root:t.current}}));const a=document.createElement("div");return a.id=Bt,r.appendChild(a),ve(d(L,{children:[d(gr,{}),d(br,{})]}),a),()=>{ve(null,a)}});return()=>{o.then(a=>a())}},[n]),n?d("div",{ref:t,id:Dn}):d(L,{})},Re=N.getState().logger,yr=(n=!1)=>{if(typeof window>"u")return;const e=window.document.querySelector("body");if(!e)throw new Error("Body not found");n&&Re.setLevel("debug"),Re.debug("Initializing tempo..."),ve(d(Wn,{}),e)},wr=()=>{if(typeof window>"u")return;const n=window.document.querySelector("body");if(!n)throw new Error("Body not found");Re.debug("Destroying tempo..."),ve(null,n)};const ii=Object.freeze(Object.defineProperty({__proto__:null,Root:Wn,debug:Fn,destroy:wr,init:yr},Symbol.toStringTag,{value:"Module"}));var xr=typeof ue=="object"&&ue&&ue.Object===Object&&ue,kr=xr,Sr=kr,Cr=typeof self=="object"&&self&&self.Object===Object&&self,Lr=Sr||Cr||Function("return this")(),Nr=Lr,Er=Nr,Tr=Er.Symbol,Bn=Tr,pn=Bn,Zn=Object.prototype,$r=Zn.hasOwnProperty,Rr=Zn.toString,te=pn?pn.toStringTag:void 0;function Pr(n){var e=$r.call(n,te),t=n[te];try{n[te]=void 0;var r=!0}catch{}var i=Rr.call(n);return r&&(e?n[te]=t:delete n[te]),i}var jr=Pr,zr=Object.prototype,Mr=zr.toString;function Hr(n){return Mr.call(n)}var Or=Hr,hn=Bn,Dr=jr,Ar=Or,Ir="[object Null]",Vr="[object Undefined]",mn=hn?hn.toStringTag:void 0;function Fr(n){return n==null?n===void 0?Vr:Ir:mn&&mn in Object(n)?Dr(n):Ar(n)}var Ur=Fr;function Wr(n){return n!=null&&typeof n=="object"}var Br=Wr,Zr=Ur,Gr=Br,qr="[object Symbol]";function Xr(n){return typeof n=="symbol"||Gr(n)&&Zr(n)==qr}var oi=Xr;function Yr(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var ai=Yr;const si=(n,e)=>(n==null?void 0:n.startsWith("/notes"))&&(e==null?void 0:e.startsWith("/notes")),li=(n,e)=>(n==null?void 0:n.startsWith("/work/"))&&e.startsWith("/work/"),ci=(n,e)=>n==="/work"&&e.startsWith("/work/");var Gn=class extends vn{constructor(n,e={}){super(),this.url=n,this.loaded=!1,this.content=null,this.config=e}load(){throw new Error("Method not implemented")}_onLoaded(){var n,e;this.loaded=!0,this.emit("loaded",this),(e=(n=this.config).onLoaded)==null||e.call(n,this)}_appendConfig(n){let e=this.config.onLoaded;this.config.onLoaded=t=>{var r;e==null||e(t),(r=n.onLoaded)==null||r.call(n,t)}}},Pe=class extends Gn{constructor(n,e={}){super(n,e),this.content=new Image,this.srcSet=e.srcSet,this.sizes=e.sizes}load(){return new Promise((n,e)=>{if(this.loaded){this._onLoaded.call(this),n(this.content);return}this.srcSet&&(this.content.srcset=this.srcSet),this.sizes&&(this.content.sizes=this.sizes),this.content.src=this.url,this.content.onload=()=>{this._onLoaded.call(this),n(this.content)},this.content.onerror=t=>e(t)})}};Pe.type="image";var je=class extends Gn{constructor(n,e={}){super(n,e),this.content=e.video||document.createElement("video"),this.loadEvent=e.loadEvent||"canplay"}load(){return new Promise((n,e)=>{let t=this.content;if(this.loaded){this._onLoaded.call(this),n(this.content);return}t.src=this.url,t.addEventListener(this.loadEvent,()=>{this._onLoaded.call(this),n(this.content)}),t.addEventListener("error",r=>e(r))})}};je.type="video";var Kr=class extends vn{constructor(){super(),this.loaders={},this.queue=[],this.active=[],this.items=new Map,this.loadCount=0,this.loadLength=0}add(n,e){let t=this.loaders[e.type];if(!t)throw new Error(`Loader for type ${String(e.type)} not found`);let r=this.items.get(n);return r?e.loaderArgs&&r._appendConfig(e.loaderArgs):(r=new t(n,e.loaderArgs),this.items.set(n,r)),this.queue.push(r),r}load(n,e){let t=this.loaders[e.type];if(!t)throw new Error(`Loader for type ${String(e.type)} not found`);let r=this.items.get(n);return r?e.loaderArgs&&r._appendConfig(e.loaderArgs):(r=new t(n,e.loaderArgs),this.items.set(n,r)),r.load(),r}registerLoader(n,e){this.loaders[n]=e}_onProgress(n){this.loadCount++;let e=this.loadCount/this.loadLength;if(this.emit("progress",{value:e,item:n,susano:this}),e===1){this.emit("completed",this);return}}start({onCompleted:n,onProgress:e}={}){this.active=this.queue.splice(0,this.queue.length),this.loadLength=this.active.length,this.loadCount=0,this.emit("start",this),e&&this.on("progress",e),this.once("completed",()=>{n==null||n(this),e&&this.off("progress",e)}),this.active.map(t=>{t.once("loaded",()=>{this._onProgress(t)}),t.load()})}},ae=new Kr;ae.registerLoader(Pe.type,Pe);ae.registerLoader(je.type,je);const di=n=>{const e=se.c(25);let t,r,i,o,a,s,u;e[0]!==n?({src:s,sizes:a,width:u,height:t,quality:o,onLoaded:r,...i}=n,e[0]=n,e[1]=t,e[2]=r,e[3]=i,e[4]=o,e[5]=a,e[6]=s,e[7]=u):(t=e[1],r=e[2],i=e[3],o=e[4],a=e[5],s=e[6],u=e[7]);const[l,_]=R.useState(!1);let c;e[8]!==t||e[9]!==r||e[10]!==o||e[11]!==a||e[12]!==s||e[13]!==u?(c=()=>{if(!s)return;const w=()=>{_(!0),r==null||r()},g=ae.add(s,{type:"image",loaderArgs:{...tt({src:s,sizes:a??"",quality:o,width:u,height:t})}});return g.once("loaded",w),()=>{g.off("loaded",w)}},e[8]=t,e[9]=r,e[10]=o,e[11]=a,e[12]=s,e[13]=u,e[14]=c):c=e[14];let h;e[15]!==s?(h=[s],e[15]=s,e[16]=h):h=e[16],R.useLayoutEffect(c,h);let p;return e[17]!==t||e[18]!==l||e[19]!==i||e[20]!==o||e[21]!==a||e[22]!==s||e[23]!==u?(p=D.jsx(nt,{"data-loaded":l,decoding:"async",src:s,sizes:a,width:u,height:t,quality:o,...i}),e[17]=t,e[18]=l,e[19]=i,e[20]=o,e[21]=a,e[22]=s,e[23]=u,e[24]=p):p=e[24],p},ui=n=>{const e=se.c(8),{urls:t}=n,r=R.useRef(0),[i,o]=R.useState(!1);let a;e[0]!==t?(a=()=>{const h=new Set,p=w=>{t.includes(w.item.url)&&h.add(w.item.url),h.size===t.length&&o(!0)};return ae.on("progress",p).start(),()=>{ae.off("completed",p)}},e[0]=t,e[1]=a):a=e[1];let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s=[],e[2]=s):s=e[2],R.useEffect(a,s);let u,l;e[3]!==i?(u=()=>{i||(r.current=Date.now())},l=[i],e[3]=i,e[4]=u,e[5]=l):(u=e[4],l=e[5]),R.useEffect(u,l);let _,c;return e[6]!==i?(c={allImagesLoaded:i,imagesLoadTimemark:r},e[6]=i,e[7]=c):c=e[7],_=c,_};export{ri as C,bn as L,at as S,Ur as _,ai as a,Nr as b,Bn as c,Fn as d,Br as e,ae as f,di as g,ci as h,oi as i,si as j,li as k,ii as l,ui as u};
