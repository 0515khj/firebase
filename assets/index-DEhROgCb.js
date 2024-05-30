function gv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function vv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jf={exports:{}},Os={},Xf={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zi=Symbol.for("react.element"),yv=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),_v=Symbol.for("react.strict_mode"),Sv=Symbol.for("react.profiler"),Ev=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),kv=Symbol.for("react.forward_ref"),Cv=Symbol.for("react.suspense"),Tv=Symbol.for("react.memo"),Pv=Symbol.for("react.lazy"),Lc=Symbol.iterator;function Rv(e){return e===null||typeof e!="object"?null:(e=Lc&&e[Lc]||e["@@iterator"],typeof e=="function"?e:null)}var Zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eh=Object.assign,th={};function xr(e,t,n){this.props=e,this.context=t,this.refs=th,this.updater=n||Zf}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nh(){}nh.prototype=xr.prototype;function du(e,t,n){this.props=e,this.context=t,this.refs=th,this.updater=n||Zf}var fu=du.prototype=new nh;fu.constructor=du;eh(fu,xr.prototype);fu.isPureReactComponent=!0;var bc=Array.isArray,rh=Object.prototype.hasOwnProperty,hu={current:null},ih={key:!0,ref:!0,__self:!0,__source:!0};function oh(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)rh.call(t,r)&&!ih.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zi,type:e,key:o,ref:s,props:i,_owner:hu.current}}function Nv(e,t){return{$$typeof:zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pu(e){return typeof e=="object"&&e!==null&&e.$$typeof===zi}function Ov(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dc=/\/+/g;function la(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ov(""+e.key):t.toString(36)}function ko(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case zi:case yv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+la(s,0):r,bc(i)?(n="",e!=null&&(n=e.replace(Dc,"$&/")+"/"),ko(i,t,n,"",function(u){return u})):i!=null&&(pu(i)&&(i=Nv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Dc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",bc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+la(o,a);s+=ko(o,t,n,l,i)}else if(l=Rv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+la(o,a++),s+=ko(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ro(e,t,n){if(e==null)return e;var r=[],i=0;return ko(e,r,"","",function(o){return t.call(n,o,i++)}),r}function xv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},Co={transition:null},Av={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Co,ReactCurrentOwner:hu};function sh(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:ro,forEach:function(e,t,n){ro(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ro(e,function(){t++}),t},toArray:function(e){return ro(e,function(t){return t})||[]},only:function(e){if(!pu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=xr;D.Fragment=wv;D.Profiler=Sv;D.PureComponent=du;D.StrictMode=_v;D.Suspense=Cv;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;D.act=sh;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=eh({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=hu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)rh.call(t,l)&&!ih.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:zi,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:Iv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ev,_context:e},e.Consumer=e};D.createElement=oh;D.createFactory=function(e){var t=oh.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:kv,render:e}};D.isValidElement=pu;D.lazy=function(e){return{$$typeof:Pv,_payload:{_status:-1,_result:e},_init:xv}};D.memo=function(e,t){return{$$typeof:Tv,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=Co.transition;Co.transition={};try{e()}finally{Co.transition=t}};D.unstable_act=sh;D.useCallback=function(e,t){return _e.current.useCallback(e,t)};D.useContext=function(e){return _e.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};D.useEffect=function(e,t){return _e.current.useEffect(e,t)};D.useId=function(){return _e.current.useId()};D.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return _e.current.useMemo(e,t)};D.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};D.useRef=function(e){return _e.current.useRef(e)};D.useState=function(e){return _e.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return _e.current.useTransition()};D.version="18.3.1";Xf.exports=D;var C=Xf.exports;const ae=vv(C),Lv=gv({__proto__:null,default:ae},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv=C,Dv=Symbol.for("react.element"),Mv=Symbol.for("react.fragment"),Uv=Object.prototype.hasOwnProperty,jv=bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$v={key:!0,ref:!0,__self:!0,__source:!0};function ah(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Uv.call(t,r)&&!$v.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Dv,type:e,key:o,ref:s,props:i,_owner:jv.current}}Os.Fragment=Mv;Os.jsx=ah;Os.jsxs=ah;Jf.exports=Os;var N=Jf.exports,Qa={},lh={exports:{}},je={},uh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,x){var A=T.length;T.push(x);e:for(;0<A;){var F=A-1>>>1,z=T[F];if(0<i(z,x))T[F]=x,T[A]=z,A=F;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var x=T[0],A=T.pop();if(A!==x){T[0]=A;e:for(var F=0,z=T.length,yn=z>>>1;F<yn;){var Ye=2*(F+1)-1,bt=T[Ye],Oe=Ye+1,gt=T[Oe];if(0>i(bt,A))Oe<z&&0>i(gt,bt)?(T[F]=gt,T[Oe]=A,F=Oe):(T[F]=bt,T[Ye]=A,F=Ye);else if(Oe<z&&0>i(gt,A))T[F]=gt,T[Oe]=A,F=Oe;else break e}}return x}function i(T,x){var A=T.sortIndex-x.sortIndex;return A!==0?A:T.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,m=3,g=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var x=n(u);x!==null;){if(x.callback===null)r(u);else if(x.startTime<=T)r(u),x.sortIndex=x.expirationTime,t(l,x);else break;x=n(u)}}function v(T){if(w=!1,h(T),!y)if(n(l)!==null)y=!0,$r(_);else{var x=n(u);x!==null&&vn(v,x.startTime-T)}}function _(T,x){y=!1,w&&(w=!1,p(O),O=-1),g=!0;var A=m;try{for(h(x),f=n(l);f!==null&&(!(f.expirationTime>x)||T&&!Ne());){var F=f.callback;if(typeof F=="function"){f.callback=null,m=f.priorityLevel;var z=F(f.expirationTime<=x);x=e.unstable_now(),typeof z=="function"?f.callback=z:f===n(l)&&r(l),h(x)}else r(l);f=n(l)}if(f!==null)var yn=!0;else{var Ye=n(u);Ye!==null&&vn(v,Ye.startTime-x),yn=!1}return yn}finally{f=null,m=A,g=!1}}var I=!1,S=null,O=-1,U=5,b=-1;function Ne(){return!(e.unstable_now()-b<U)}function mn(){if(S!==null){var T=e.unstable_now();b=T;var x=!0;try{x=S(!0,T)}finally{x?gn():(I=!1,S=null)}}else I=!1}var gn;if(typeof d=="function")gn=function(){d(mn)};else if(typeof MessageChannel<"u"){var to=new MessageChannel,sa=to.port2;to.port1.onmessage=mn,gn=function(){sa.postMessage(null)}}else gn=function(){k(mn,0)};function $r(T){S=T,I||(I=!0,gn())}function vn(T,x){O=k(function(){T(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,$r(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var x=3;break;default:x=m}var A=m;m=x;try{return T()}finally{m=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,x){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var A=m;m=T;try{return x()}finally{m=A}},e.unstable_scheduleCallback=function(T,x,A){var F=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?F+A:F):A=F,T){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=A+z,T={id:c++,callback:x,priorityLevel:T,startTime:A,expirationTime:z,sortIndex:-1},A>F?(T.sortIndex=A,t(u,T),n(l)===null&&T===n(u)&&(w?(p(O),O=-1):w=!0,vn(v,A-F))):(T.sortIndex=z,t(l,T),y||g||(y=!0,$r(_))),T},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(T){var x=m;return function(){var A=m;m=x;try{return T.apply(this,arguments)}finally{m=A}}}})(ch);uh.exports=ch;var Fv=uh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=C,Ue=Fv;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dh=new Set,vi={};function Bn(e,t){yr(e,t),yr(e+"Capture",t)}function yr(e,t){for(vi[e]=t,e=0;e<t.length;e++)dh.add(t[e])}var Tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ja=Object.prototype.hasOwnProperty,Bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mc={},Uc={};function Vv(e){return Ja.call(Uc,e)?!0:Ja.call(Mc,e)?!1:Bv.test(e)?Uc[e]=!0:(Mc[e]=!0,!1)}function Wv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hv(e,t,n,r){if(t===null||typeof t>"u"||Wv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var mu=/[\-:]([a-z])/g;function gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mu,gu);de[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mu,gu);de[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mu,gu);de[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function vu(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hv(t,n,i,r)&&(n=null),r||i===null?Vv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),yu=Symbol.for("react.strict_mode"),Xa=Symbol.for("react.profiler"),fh=Symbol.for("react.provider"),hh=Symbol.for("react.context"),wu=Symbol.for("react.forward_ref"),Za=Symbol.for("react.suspense"),el=Symbol.for("react.suspense_list"),_u=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),ph=Symbol.for("react.offscreen"),jc=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=jc&&e[jc]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ua;function Yr(e){if(ua===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ua=t&&t[1]||""}return`
`+ua+e}var ca=!1;function da(e,t){if(!e||ca)return"";ca=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ca=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function Kv(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=da(e.type,!1),e;case 11:return e=da(e.type.render,!1),e;case 1:return e=da(e.type,!0),e;default:return""}}function tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Yn:return"Portal";case Xa:return"Profiler";case yu:return"StrictMode";case Za:return"Suspense";case el:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hh:return(e.displayName||"Context")+".Consumer";case fh:return(e._context.displayName||"Context")+".Provider";case wu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _u:return t=e.displayName||null,t!==null?t:tl(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return tl(e(t))}catch{}}return null}function Gv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tl(t);case 8:return t===yu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qv(e){var t=mh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oo(e){e._valueTracker||(e._valueTracker=qv(e))}function gh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nl(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vh(e,t){t=t.checked,t!=null&&vu(e,"checked",t,!1)}function rl(e,t){vh(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?il(e,t.type,n):t.hasOwnProperty("defaultValue")&&il(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function il(e,t,n){(t!=="number"||Ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qr=Array.isArray;function ur(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Qr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function yh(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,_h=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(ii).forEach(function(e){Yv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ii[t]=ii[e]})});function Sh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ii.hasOwnProperty(e)&&ii[e]?(""+t).trim():t+"px"}function Eh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Qv=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(e,t){if(t){if(Qv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ll(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,cr=null,dr=null;function Vc(e){if(e=Wi(e)){if(typeof cl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ds(t),cl(e.stateNode,e.type,t))}}function Ih(e){cr?dr?dr.push(e):dr=[e]:cr=e}function kh(){if(cr){var e=cr,t=dr;if(dr=cr=null,Vc(e),t)for(e=0;e<t.length;e++)Vc(t[e])}}function Ch(e,t){return e(t)}function Th(){}var fa=!1;function Ph(e,t,n){if(fa)return e(t,n);fa=!0;try{return Ch(e,t,n)}finally{fa=!1,(cr!==null||dr!==null)&&(Th(),kh())}}function wi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var dl=!1;if(Tt)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){dl=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{dl=!1}function Jv(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var oi=!1,Ko=null,Go=!1,fl=null,Xv={onError:function(e){oi=!0,Ko=e}};function Zv(e,t,n,r,i,o,s,a,l){oi=!1,Ko=null,Jv.apply(Xv,arguments)}function ey(e,t,n,r,i,o,s,a,l){if(Zv.apply(this,arguments),oi){if(oi){var u=Ko;oi=!1,Ko=null}else throw Error(E(198));Go||(Go=!0,fl=u)}}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wc(e){if(Vn(e)!==e)throw Error(E(188))}function ty(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Wc(i),e;if(o===r)return Wc(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Nh(e){return e=ty(e),e!==null?Oh(e):null}function Oh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Oh(e);if(t!==null)return t;e=e.sibling}return null}var xh=Ue.unstable_scheduleCallback,Hc=Ue.unstable_cancelCallback,ny=Ue.unstable_shouldYield,ry=Ue.unstable_requestPaint,X=Ue.unstable_now,iy=Ue.unstable_getCurrentPriorityLevel,Eu=Ue.unstable_ImmediatePriority,Ah=Ue.unstable_UserBlockingPriority,qo=Ue.unstable_NormalPriority,oy=Ue.unstable_LowPriority,Lh=Ue.unstable_IdlePriority,xs=null,ct=null;function sy(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:uy,ay=Math.log,ly=Math.LN2;function uy(e){return e>>>=0,e===0?32:31-(ay(e)/ly|0)|0}var ao=64,lo=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Jr(a):(o&=s,o!==0&&(r=Jr(o)))}else s=n&~i,s!==0?r=Jr(s):o!==0&&(r=Jr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function cy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-tt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=cy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bh(){var e=ao;return ao<<=1,!(ao&4194240)&&(ao=64),e}function ha(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function fy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Iu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $=0;function Dh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Mh,ku,Uh,jh,$h,pl=!1,uo=[],Qt=null,Jt=null,Xt=null,_i=new Map,Si=new Map,zt=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kc(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function Vr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Wi(t),t!==null&&ku(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function py(e,t,n,r,i){switch(t){case"focusin":return Qt=Vr(Qt,e,t,n,r,i),!0;case"dragenter":return Jt=Vr(Jt,e,t,n,r,i),!0;case"mouseover":return Xt=Vr(Xt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _i.set(o,Vr(_i.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Si.set(o,Vr(Si.get(o)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=In(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Rh(n),t!==null){e.blockedOn=t,$h(e.priority,function(){Uh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function To(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ul=r,n.target.dispatchEvent(r),ul=null}else return t=Wi(n),t!==null&&ku(t),e.blockedOn=n,!1;t.shift()}return!0}function Gc(e,t,n){To(e)&&n.delete(t)}function my(){pl=!1,Qt!==null&&To(Qt)&&(Qt=null),Jt!==null&&To(Jt)&&(Jt=null),Xt!==null&&To(Xt)&&(Xt=null),_i.forEach(Gc),Si.forEach(Gc)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,pl||(pl=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,my)))}function Ei(e){function t(i){return Wr(i,e)}if(0<uo.length){Wr(uo[0],e);for(var n=1;n<uo.length;n++){var r=uo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Wr(Qt,e),Jt!==null&&Wr(Jt,e),Xt!==null&&Wr(Xt,e),_i.forEach(t),Si.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&zt.shift()}var fr=At.ReactCurrentBatchConfig,Qo=!0;function gy(e,t,n,r){var i=$,o=fr.transition;fr.transition=null;try{$=1,Cu(e,t,n,r)}finally{$=i,fr.transition=o}}function vy(e,t,n,r){var i=$,o=fr.transition;fr.transition=null;try{$=4,Cu(e,t,n,r)}finally{$=i,fr.transition=o}}function Cu(e,t,n,r){if(Qo){var i=ml(e,t,n,r);if(i===null)Ia(e,t,r,Jo,n),Kc(e,r);else if(py(i,e,t,n,r))r.stopPropagation();else if(Kc(e,r),t&4&&-1<hy.indexOf(e)){for(;i!==null;){var o=Wi(i);if(o!==null&&Mh(o),o=ml(e,t,n,r),o===null&&Ia(e,t,r,Jo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ia(e,t,r,null,n)}}var Jo=null;function ml(e,t,n,r){if(Jo=null,e=Su(r),e=In(e),e!==null)if(t=Vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jo=e,null}function zh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iy()){case Eu:return 1;case Ah:return 4;case qo:case oy:return 16;case Lh:return 536870912;default:return 16}default:return 16}}var Gt=null,Tu=null,Po=null;function Bh(){if(Po)return Po;var e,t=Tu,n=t.length,r,i="value"in Gt?Gt.value:Gt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Po=i.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function qc(){return!1}function $e(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?co:qc,this.isPropagationStopped=qc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=$e(Ar),Vi=Q({},Ar,{view:0,detail:0}),yy=$e(Vi),pa,ma,Hr,As=Q({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(pa=e.screenX-Hr.screenX,ma=e.screenY-Hr.screenY):ma=pa=0,Hr=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),Yc=$e(As),wy=Q({},As,{dataTransfer:0}),_y=$e(wy),Sy=Q({},Vi,{relatedTarget:0}),ga=$e(Sy),Ey=Q({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Iy=$e(Ey),ky=Q({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cy=$e(ky),Ty=Q({},Ar,{data:0}),Qc=$e(Ty),Py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ny[e])?!!t[e]:!1}function Ru(){return Oy}var xy=Q({},Vi,{key:function(e){if(e.key){var t=Py[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ay=$e(xy),Ly=Q({},As,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jc=$e(Ly),by=Q({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Dy=$e(by),My=Q({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=$e(My),jy=Q({},As,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$y=$e(jy),Fy=[9,13,27,32],Nu=Tt&&"CompositionEvent"in window,si=null;Tt&&"documentMode"in document&&(si=document.documentMode);var zy=Tt&&"TextEvent"in window&&!si,Vh=Tt&&(!Nu||si&&8<si&&11>=si),Xc=" ",Zc=!1;function Wh(e,t){switch(e){case"keyup":return Fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function By(e,t){switch(e){case"compositionend":return Hh(t);case"keypress":return t.which!==32?null:(Zc=!0,Xc);case"textInput":return e=t.data,e===Xc&&Zc?null:e;default:return null}}function Vy(e,t){if(Jn)return e==="compositionend"||!Nu&&Wh(e,t)?(e=Bh(),Po=Tu=Gt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vh&&t.locale!=="ko"?null:t.data;default:return null}}var Wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wy[e.type]:t==="textarea"}function Kh(e,t,n,r){Ih(r),t=Xo(t,"onChange"),0<t.length&&(n=new Pu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ai=null,Ii=null;function Hy(e){rp(e,0)}function Ls(e){var t=er(e);if(gh(t))return e}function Ky(e,t){if(e==="change")return t}var Gh=!1;if(Tt){var va;if(Tt){var ya="oninput"in document;if(!ya){var td=document.createElement("div");td.setAttribute("oninput","return;"),ya=typeof td.oninput=="function"}va=ya}else va=!1;Gh=va&&(!document.documentMode||9<document.documentMode)}function nd(){ai&&(ai.detachEvent("onpropertychange",qh),Ii=ai=null)}function qh(e){if(e.propertyName==="value"&&Ls(Ii)){var t=[];Kh(t,Ii,e,Su(e)),Ph(Hy,t)}}function Gy(e,t,n){e==="focusin"?(nd(),ai=t,Ii=n,ai.attachEvent("onpropertychange",qh)):e==="focusout"&&nd()}function qy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ls(Ii)}function Yy(e,t){if(e==="click")return Ls(t)}function Qy(e,t){if(e==="input"||e==="change")return Ls(t)}function Jy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:Jy;function ki(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ja.call(t,i)||!it(e[i],t[i]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function id(e,t){var n=rd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rd(n)}}function Yh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qh(){for(var e=window,t=Ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ho(e.document)}return t}function Ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xy(e){var t=Qh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yh(n.ownerDocument.documentElement,n)){if(r!==null&&Ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=id(n,o);var s=id(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zy=Tt&&"documentMode"in document&&11>=document.documentMode,Xn=null,gl=null,li=null,vl=!1;function od(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||Xn==null||Xn!==Ho(r)||(r=Xn,"selectionStart"in r&&Ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),li&&ki(li,r)||(li=r,r=Xo(gl,"onSelect"),0<r.length&&(t=new Pu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zn={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},wa={},Jh={};Tt&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function bs(e){if(wa[e])return wa[e];if(!Zn[e])return e;var t=Zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jh)return wa[e]=t[n];return e}var Xh=bs("animationend"),Zh=bs("animationiteration"),ep=bs("animationstart"),tp=bs("transitionend"),np=new Map,sd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){np.set(e,t),Bn(t,[e])}for(var _a=0;_a<sd.length;_a++){var Sa=sd[_a],e0=Sa.toLowerCase(),t0=Sa[0].toUpperCase()+Sa.slice(1);dn(e0,"on"+t0)}dn(Xh,"onAnimationEnd");dn(Zh,"onAnimationIteration");dn(ep,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(tp,"onTransitionEnd");yr("onMouseEnter",["mouseout","mouseover"]);yr("onMouseLeave",["mouseout","mouseover"]);yr("onPointerEnter",["pointerout","pointerover"]);yr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));function ad(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ey(r,t,void 0,e),e.currentTarget=null}function rp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ad(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ad(i,a,u),o=l}}}if(Go)throw e=fl,Go=!1,fl=null,e}function W(e,t){var n=t[El];n===void 0&&(n=t[El]=new Set);var r=e+"__bubble";n.has(r)||(ip(t,e,2,!1),n.add(r))}function Ea(e,t,n){var r=0;t&&(r|=4),ip(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Ci(e){if(!e[ho]){e[ho]=!0,dh.forEach(function(n){n!=="selectionchange"&&(n0.has(n)||Ea(n,!1,e),Ea(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,Ea("selectionchange",!1,t))}}function ip(e,t,n,r){switch(zh(t)){case 1:var i=gy;break;case 4:i=vy;break;default:i=Cu}n=i.bind(null,t,n,e),i=void 0,!dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ia(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=In(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ph(function(){var u=o,c=Su(n),f=[];e:{var m=np.get(e);if(m!==void 0){var g=Pu,y=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":g=Ay;break;case"focusin":y="focus",g=ga;break;case"focusout":y="blur",g=ga;break;case"beforeblur":case"afterblur":g=ga;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Dy;break;case Xh:case Zh:case ep:g=Iy;break;case tp:g=Uy;break;case"scroll":g=yy;break;case"wheel":g=$y;break;case"copy":case"cut":case"paste":g=Cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Jc}var w=(t&4)!==0,k=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var d=u,h;d!==null;){h=d;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,p!==null&&(v=wi(d,p),v!=null&&w.push(Ti(d,v,h)))),k)break;d=d.return}0<w.length&&(m=new g(m,y,null,n,c),f.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==ul&&(y=n.relatedTarget||n.fromElement)&&(In(y)||y[Pt]))break e;if((g||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?In(y):null,y!==null&&(k=Vn(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=Yc,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Jc,v="onPointerLeave",p="onPointerEnter",d="pointer"),k=g==null?m:er(g),h=y==null?m:er(y),m=new w(v,d+"leave",g,n,c),m.target=k,m.relatedTarget=h,v=null,In(c)===u&&(w=new w(p,d+"enter",y,n,c),w.target=h,w.relatedTarget=k,v=w),k=v,g&&y)t:{for(w=g,p=y,d=0,h=w;h;h=Gn(h))d++;for(h=0,v=p;v;v=Gn(v))h++;for(;0<d-h;)w=Gn(w),d--;for(;0<h-d;)p=Gn(p),h--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=Gn(w),p=Gn(p)}w=null}else w=null;g!==null&&ld(f,m,g,w,!1),y!==null&&k!==null&&ld(f,k,y,w,!0)}}e:{if(m=u?er(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var _=Ky;else if(ed(m))if(Gh)_=Qy;else{_=qy;var I=Gy}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=Yy);if(_&&(_=_(e,u))){Kh(f,_,n,c);break e}I&&I(e,m,u),e==="focusout"&&(I=m._wrapperState)&&I.controlled&&m.type==="number"&&il(m,"number",m.value)}switch(I=u?er(u):window,e){case"focusin":(ed(I)||I.contentEditable==="true")&&(Xn=I,gl=u,li=null);break;case"focusout":li=gl=Xn=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,od(f,n,c);break;case"selectionchange":if(Zy)break;case"keydown":case"keyup":od(f,n,c)}var S;if(Nu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Jn?Wh(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Vh&&n.locale!=="ko"&&(Jn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Jn&&(S=Bh()):(Gt=c,Tu="value"in Gt?Gt.value:Gt.textContent,Jn=!0)),I=Xo(u,O),0<I.length&&(O=new Qc(O,e,null,n,c),f.push({event:O,listeners:I}),S?O.data=S:(S=Hh(n),S!==null&&(O.data=S)))),(S=zy?By(e,n):Vy(e,n))&&(u=Xo(u,"onBeforeInput"),0<u.length&&(c=new Qc("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=S))}rp(f,t)})}function Ti(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wi(e,n),o!=null&&r.unshift(Ti(e,o,i)),o=wi(e,t),o!=null&&r.push(Ti(e,o,i))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ld(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=wi(n,o),l!=null&&s.unshift(Ti(n,l,a))):i||(l=wi(n,o),l!=null&&s.push(Ti(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var r0=/\r\n?/g,i0=/\u0000|\uFFFD/g;function ud(e){return(typeof e=="string"?e:""+e).replace(r0,`
`).replace(i0,"")}function po(e,t,n){if(t=ud(t),ud(e)!==t&&n)throw Error(E(425))}function Zo(){}var yl=null,wl=null;function _l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sl=typeof setTimeout=="function"?setTimeout:void 0,o0=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(e){return cd.resolve(null).then(e).catch(a0)}:Sl;function a0(e){setTimeout(function(){throw e})}function ka(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ei(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),ut="__reactFiber$"+Lr,Pi="__reactProps$"+Lr,Pt="__reactContainer$"+Lr,El="__reactEvents$"+Lr,l0="__reactListeners$"+Lr,u0="__reactHandles$"+Lr;function In(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dd(e);e!==null;){if(n=e[ut])return n;e=dd(e)}return t}e=n,n=e.parentNode}return null}function Wi(e){return e=e[ut]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ds(e){return e[Pi]||null}var Il=[],tr=-1;function fn(e){return{current:e}}function K(e){0>tr||(e.current=Il[tr],Il[tr]=null,tr--)}function V(e,t){tr++,Il[tr]=e.current,e.current=t}var cn={},ge=fn(cn),ke=fn(!1),An=cn;function wr(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function es(){K(ke),K(ge)}function fd(e,t,n){if(ge.current!==cn)throw Error(E(168));V(ge,t),V(ke,n)}function op(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Gv(e)||"Unknown",i));return Q({},n,r)}function ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,An=ge.current,V(ge,e),V(ke,ke.current),!0}function hd(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=op(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,K(ke),K(ge),V(ge,e)):K(ke),V(ke,n)}var wt=null,Ms=!1,Ca=!1;function sp(e){wt===null?wt=[e]:wt.push(e)}function c0(e){Ms=!0,sp(e)}function hn(){if(!Ca&&wt!==null){Ca=!0;var e=0,t=$;try{var n=wt;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Ms=!1}catch(i){throw wt!==null&&(wt=wt.slice(e+1)),xh(Eu,hn),i}finally{$=t,Ca=!1}}return null}var nr=[],rr=0,ns=null,rs=0,Be=[],Ve=0,Ln=null,_t=1,St="";function _n(e,t){nr[rr++]=rs,nr[rr++]=ns,ns=e,rs=t}function ap(e,t,n){Be[Ve++]=_t,Be[Ve++]=St,Be[Ve++]=Ln,Ln=e;var r=_t;e=St;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var o=32-tt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,_t=1<<32-tt(t)+i|n<<i|r,St=o+e}else _t=1<<o|n<<i|r,St=e}function xu(e){e.return!==null&&(_n(e,1),ap(e,1,0))}function Au(e){for(;e===ns;)ns=nr[--rr],nr[rr]=null,rs=nr[--rr],nr[rr]=null;for(;e===Ln;)Ln=Be[--Ve],Be[Ve]=null,St=Be[--Ve],Be[Ve]=null,_t=Be[--Ve],Be[Ve]=null}var be=null,Le=null,G=!1,Ze=null;function lp(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Le=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:_t,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Le=null,!0):!1;default:return!1}}function kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(G){var t=Le;if(t){var n=t;if(!pd(e,t)){if(kl(e))throw Error(E(418));t=Zt(n.nextSibling);var r=be;t&&pd(e,t)?lp(r,n):(e.flags=e.flags&-4097|2,G=!1,be=e)}}else{if(kl(e))throw Error(E(418));e.flags=e.flags&-4097|2,G=!1,be=e}}}function md(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function mo(e){if(e!==be)return!1;if(!G)return md(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_l(e.type,e.memoizedProps)),t&&(t=Le)){if(kl(e))throw up(),Error(E(418));for(;t;)lp(e,t),t=Zt(t.nextSibling)}if(md(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=be?Zt(e.stateNode.nextSibling):null;return!0}function up(){for(var e=Le;e;)e=Zt(e.nextSibling)}function _r(){Le=be=null,G=!1}function Lu(e){Ze===null?Ze=[e]:Ze.push(e)}var d0=At.ReactCurrentBatchConfig;function Kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gd(e){var t=e._init;return t(e._payload)}function cp(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=rn(p,d),p.index=0,p.sibling=null,p}function o(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,h,v){return d===null||d.tag!==6?(d=Aa(h,p.mode,v),d.return=p,d):(d=i(d,h),d.return=p,d)}function l(p,d,h,v){var _=h.type;return _===Qn?c(p,d,h.props.children,v,h.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===$t&&gd(_)===d.type)?(v=i(d,h.props),v.ref=Kr(p,d,h),v.return=p,v):(v=Do(h.type,h.key,h.props,null,p.mode,v),v.ref=Kr(p,d,h),v.return=p,v)}function u(p,d,h,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=La(h,p.mode,v),d.return=p,d):(d=i(d,h.children||[]),d.return=p,d)}function c(p,d,h,v,_){return d===null||d.tag!==7?(d=Nn(h,p.mode,v,_),d.return=p,d):(d=i(d,h),d.return=p,d)}function f(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Aa(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case io:return h=Do(d.type,d.key,d.props,null,p.mode,h),h.ref=Kr(p,null,d),h.return=p,h;case Yn:return d=La(d,p.mode,h),d.return=p,d;case $t:var v=d._init;return f(p,v(d._payload),h)}if(Qr(d)||zr(d))return d=Nn(d,p.mode,h,null),d.return=p,d;go(p,d)}return null}function m(p,d,h,v){var _=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:a(p,d,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case io:return h.key===_?l(p,d,h,v):null;case Yn:return h.key===_?u(p,d,h,v):null;case $t:return _=h._init,m(p,d,_(h._payload),v)}if(Qr(h)||zr(h))return _!==null?null:c(p,d,h,v,null);go(p,h)}return null}function g(p,d,h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(h)||null,a(d,p,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case io:return p=p.get(v.key===null?h:v.key)||null,l(d,p,v,_);case Yn:return p=p.get(v.key===null?h:v.key)||null,u(d,p,v,_);case $t:var I=v._init;return g(p,d,h,I(v._payload),_)}if(Qr(v)||zr(v))return p=p.get(h)||null,c(d,p,v,_,null);go(d,v)}return null}function y(p,d,h,v){for(var _=null,I=null,S=d,O=d=0,U=null;S!==null&&O<h.length;O++){S.index>O?(U=S,S=null):U=S.sibling;var b=m(p,S,h[O],v);if(b===null){S===null&&(S=U);break}e&&S&&b.alternate===null&&t(p,S),d=o(b,d,O),I===null?_=b:I.sibling=b,I=b,S=U}if(O===h.length)return n(p,S),G&&_n(p,O),_;if(S===null){for(;O<h.length;O++)S=f(p,h[O],v),S!==null&&(d=o(S,d,O),I===null?_=S:I.sibling=S,I=S);return G&&_n(p,O),_}for(S=r(p,S);O<h.length;O++)U=g(S,p,O,h[O],v),U!==null&&(e&&U.alternate!==null&&S.delete(U.key===null?O:U.key),d=o(U,d,O),I===null?_=U:I.sibling=U,I=U);return e&&S.forEach(function(Ne){return t(p,Ne)}),G&&_n(p,O),_}function w(p,d,h,v){var _=zr(h);if(typeof _!="function")throw Error(E(150));if(h=_.call(h),h==null)throw Error(E(151));for(var I=_=null,S=d,O=d=0,U=null,b=h.next();S!==null&&!b.done;O++,b=h.next()){S.index>O?(U=S,S=null):U=S.sibling;var Ne=m(p,S,b.value,v);if(Ne===null){S===null&&(S=U);break}e&&S&&Ne.alternate===null&&t(p,S),d=o(Ne,d,O),I===null?_=Ne:I.sibling=Ne,I=Ne,S=U}if(b.done)return n(p,S),G&&_n(p,O),_;if(S===null){for(;!b.done;O++,b=h.next())b=f(p,b.value,v),b!==null&&(d=o(b,d,O),I===null?_=b:I.sibling=b,I=b);return G&&_n(p,O),_}for(S=r(p,S);!b.done;O++,b=h.next())b=g(S,p,O,b.value,v),b!==null&&(e&&b.alternate!==null&&S.delete(b.key===null?O:b.key),d=o(b,d,O),I===null?_=b:I.sibling=b,I=b);return e&&S.forEach(function(mn){return t(p,mn)}),G&&_n(p,O),_}function k(p,d,h,v){if(typeof h=="object"&&h!==null&&h.type===Qn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case io:e:{for(var _=h.key,I=d;I!==null;){if(I.key===_){if(_=h.type,_===Qn){if(I.tag===7){n(p,I.sibling),d=i(I,h.props.children),d.return=p,p=d;break e}}else if(I.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===$t&&gd(_)===I.type){n(p,I.sibling),d=i(I,h.props),d.ref=Kr(p,I,h),d.return=p,p=d;break e}n(p,I);break}else t(p,I);I=I.sibling}h.type===Qn?(d=Nn(h.props.children,p.mode,v,h.key),d.return=p,p=d):(v=Do(h.type,h.key,h.props,null,p.mode,v),v.ref=Kr(p,d,h),v.return=p,p=v)}return s(p);case Yn:e:{for(I=h.key;d!==null;){if(d.key===I)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=i(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=La(h,p.mode,v),d.return=p,p=d}return s(p);case $t:return I=h._init,k(p,d,I(h._payload),v)}if(Qr(h))return y(p,d,h,v);if(zr(h))return w(p,d,h,v);go(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,h),d.return=p,p=d):(n(p,d),d=Aa(h,p.mode,v),d.return=p,p=d),s(p)):n(p,d)}return k}var Sr=cp(!0),dp=cp(!1),is=fn(null),os=null,ir=null,bu=null;function Du(){bu=ir=os=null}function Mu(e){var t=is.current;K(is),e._currentValue=t}function Tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){os=e,bu=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(bu!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(os===null)throw Error(E(308));ir=e,os.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var kn=null;function Uu(e){kn===null?kn=[e]:kn.push(e)}function fp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Uu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Uu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rt(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Iu(e,n)}}function vd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ss(e,t,n,r){var i=e.updateQueue;Ft=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(m=t,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(g,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(g,f,m):y,m==null)break e;f=Q({},f,m);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Dn|=s,e.lanes=s,e.memoizedState=f}}function yd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Hi={},dt=fn(Hi),Ri=fn(Hi),Ni=fn(Hi);function Cn(e){if(e===Hi)throw Error(E(174));return e}function $u(e,t){switch(V(Ni,t),V(Ri,e),V(dt,Hi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sl(t,e)}K(dt),V(dt,t)}function Er(){K(dt),K(Ri),K(Ni)}function pp(e){Cn(Ni.current);var t=Cn(dt.current),n=sl(t,e.type);t!==n&&(V(Ri,e),V(dt,n))}function Fu(e){Ri.current===e&&(K(dt),K(Ri))}var q=fn(0);function as(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=[];function zu(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var Oo=At.ReactCurrentDispatcher,Pa=At.ReactCurrentBatchConfig,bn=0,Y=null,re=null,oe=null,ls=!1,ui=!1,Oi=0,f0=0;function fe(){throw Error(E(321))}function Bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Vu(e,t,n,r,i,o){if(bn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?g0:v0,e=n(r,i),ui){o=0;do{if(ui=!1,Oi=0,25<=o)throw Error(E(301));o+=1,oe=re=null,t.updateQueue=null,Oo.current=y0,e=n(r,i)}while(ui)}if(Oo.current=us,t=re!==null&&re.next!==null,bn=0,oe=re=Y=null,ls=!1,t)throw Error(E(300));return e}function Wu(){var e=Oi!==0;return Oi=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Y.memoizedState=oe=e:oe=oe.next=e,oe}function Ge(){if(re===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=oe===null?Y.memoizedState:oe.next;if(t!==null)oe=t,re=e;else{if(e===null)throw Error(E(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},oe===null?Y.memoizedState=oe=e:oe=oe.next=e}return oe}function xi(e,t){return typeof t=="function"?t(e):t}function Ra(e){var t=Ge(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((bn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,Y.lanes|=c,Dn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,it(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,Dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Na(e){var t=Ge(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);it(o,t.memoizedState)||(Ie=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function mp(){}function gp(e,t){var n=Y,r=Ge(),i=t(),o=!it(r.memoizedState,i);if(o&&(r.memoizedState=i,Ie=!0),r=r.queue,Hu(wp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Ai(9,yp.bind(null,n,r,i,t),void 0,null),le===null)throw Error(E(349));bn&30||vp(n,t,i)}return i}function vp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yp(e,t,n,r){t.value=n,t.getSnapshot=r,_p(t)&&Sp(e)}function wp(e,t,n){return n(function(){_p(t)&&Sp(e)})}function _p(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function Sp(e){var t=Rt(e,1);t!==null&&nt(t,e,1,-1)}function wd(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t.queue=e,e=e.dispatch=m0.bind(null,Y,e),[t.memoizedState,e]}function Ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ep(){return Ge().memoizedState}function xo(e,t,n,r){var i=at();Y.flags|=e,i.memoizedState=Ai(1|t,n,void 0,r===void 0?null:r)}function Us(e,t,n,r){var i=Ge();r=r===void 0?null:r;var o=void 0;if(re!==null){var s=re.memoizedState;if(o=s.destroy,r!==null&&Bu(r,s.deps)){i.memoizedState=Ai(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Ai(1|t,n,o,r)}function _d(e,t){return xo(8390656,8,e,t)}function Hu(e,t){return Us(2048,8,e,t)}function Ip(e,t){return Us(4,2,e,t)}function kp(e,t){return Us(4,4,e,t)}function Cp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tp(e,t,n){return n=n!=null?n.concat([e]):null,Us(4,4,Cp.bind(null,t,e),n)}function Ku(){}function Pp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rp(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Np(e,t,n){return bn&21?(it(n,t)||(n=bh(),Y.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function h0(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Pa.transition;Pa.transition={};try{e(!1),t()}finally{$=n,Pa.transition=r}}function Op(){return Ge().memoizedState}function p0(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xp(e))Ap(t,n);else if(n=fp(e,t,n,r),n!==null){var i=we();nt(n,e,r,i),Lp(n,t,r)}}function m0(e,t,n){var r=nn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xp(e))Ap(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,it(a,s)){var l=t.interleaved;l===null?(i.next=i,Uu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=fp(e,t,i,r),n!==null&&(i=we(),nt(n,e,r,i),Lp(n,t,r))}}function xp(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Ap(e,t){ui=ls=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Iu(e,n)}}var us={readContext:Ke,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},g0={readContext:Ke,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:_d,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xo(4194308,4,Cp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xo(4194308,4,e,t)},useInsertionEffect:function(e,t){return xo(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=p0.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:wd,useDebugValue:Ku,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=wd(!1),t=e[0];return e=h0.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=at();if(G){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),le===null)throw Error(E(349));bn&30||vp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,_d(wp.bind(null,r,o,e),[e]),r.flags|=2048,Ai(9,yp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=at(),t=le.identifierPrefix;if(G){var n=St,r=_t;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=f0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v0={readContext:Ke,useCallback:Pp,useContext:Ke,useEffect:Hu,useImperativeHandle:Tp,useInsertionEffect:Ip,useLayoutEffect:kp,useMemo:Rp,useReducer:Ra,useRef:Ep,useState:function(){return Ra(xi)},useDebugValue:Ku,useDeferredValue:function(e){var t=Ge();return Np(t,re.memoizedState,e)},useTransition:function(){var e=Ra(xi)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:gp,useId:Op,unstable_isNewReconciler:!1},y0={readContext:Ke,useCallback:Pp,useContext:Ke,useEffect:Hu,useImperativeHandle:Tp,useInsertionEffect:Ip,useLayoutEffect:kp,useMemo:Rp,useReducer:Na,useRef:Ep,useState:function(){return Na(xi)},useDebugValue:Ku,useDeferredValue:function(e){var t=Ge();return re===null?t.memoizedState=e:Np(t,re.memoizedState,e)},useTransition:function(){var e=Na(xi)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:mp,useSyncExternalStore:gp,useId:Op,unstable_isNewReconciler:!1};function Je(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var js={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),i=nn(e),o=Ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(nt(t,e,i,r),No(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),i=nn(e),o=Ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=en(e,o,i),t!==null&&(nt(t,e,i,r),No(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=nn(e),i=Ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=en(e,i,r),t!==null&&(nt(t,e,r,n),No(t,e,r))}};function Sd(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ki(n,r)||!ki(i,o):!0}function bp(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=Ce(t)?An:ge.current,r=t.contextTypes,o=(r=r!=null)?wr(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=js,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&js.enqueueReplaceState(t,t.state,null)}function Rl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ju(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=Ce(t)?An:ge.current,i.context=wr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Pl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&js.enqueueReplaceState(i,i.state,null),ss(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ir(e,t){try{var n="",r=t;do n+=Kv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Oa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var w0=typeof WeakMap=="function"?WeakMap:Map;function Dp(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ds||(ds=!0,$l=r),Nl(e,t)},n}function Mp(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Nl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Nl(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new w0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=L0.bind(null,e,t,n),t.then(e,e))}function kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e)}var _0=At.ReactCurrentOwner,Ie=!1;function ye(e,t,n,r){t.child=e===null?dp(t,null,n,r):Sr(t,e.child,n,r)}function Td(e,t,n,r,i){n=n.render;var o=t.ref;return hr(t,i),r=Vu(e,t,n,r,o,i),n=Wu(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(G&&n&&xu(t),t.flags|=1,ye(e,t,r,i),t.child)}function Pd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ec(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Up(e,t,o,r,i)):(e=Do(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ki,n(s,r)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=rn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Up(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ki(o,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return Ol(e,t,n,r,i)}function jp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(sr,Ae),Ae|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(sr,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(sr,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(sr,Ae),Ae|=r;return ye(e,t,i,n),t.child}function $p(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,i){var o=Ce(n)?An:ge.current;return o=wr(t,o),hr(t,i),n=Vu(e,t,n,r,o,i),r=Wu(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(G&&r&&xu(t),t.flags|=1,ye(e,t,n,i),t.child)}function Rd(e,t,n,r,i){if(Ce(n)){var o=!0;ts(t)}else o=!1;if(hr(t,i),t.stateNode===null)Ao(e,t),bp(t,n,r),Rl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=Ce(n)?An:ge.current,u=wr(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ed(t,s,r,u),Ft=!1;var m=t.memoizedState;s.state=m,ss(t,r,s,i),l=t.memoizedState,a!==r||m!==l||ke.current||Ft?(typeof c=="function"&&(Pl(t,n,c,r),l=t.memoizedState),(a=Ft||Sd(t,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,hp(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Je(t.type,a),s.props=u,f=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ke(l):(l=Ce(n)?An:ge.current,l=wr(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Ed(t,s,r,l),Ft=!1,m=t.memoizedState,s.state=m,ss(t,r,s,i);var y=t.memoizedState;a!==f||m!==y||ke.current||Ft?(typeof g=="function"&&(Pl(t,n,g,r),y=t.memoizedState),(u=Ft||Sd(t,n,u,r,m,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return xl(e,t,n,r,o,i)}function xl(e,t,n,r,i,o){$p(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&hd(t,n,!1),Nt(e,t,o);r=t.stateNode,_0.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Sr(t,e.child,null,o),t.child=Sr(t,null,a,o)):ye(e,t,a,o),t.memoizedState=r.state,i&&hd(t,n,!0),t.child}function Fp(e){var t=e.stateNode;t.pendingContext?fd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fd(e,t.context,!1),$u(e,t.containerInfo)}function Nd(e,t,n,r,i){return _r(),Lu(i),t.flags|=256,ye(e,t,n,r),t.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function zp(e,t,n){var r=t.pendingProps,i=q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(q,i&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=zs(s,r,0,null),e=Nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ll(n),t.memoizedState=Al,e):Gu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return S0(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=rn(a,o):(o=Nn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ll(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Al,r}return o=e.child,e=o.sibling,r=rn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gu(e,t){return t=zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vo(e,t,n,r){return r!==null&&Lu(r),Sr(t,e.child,null,n),e=Gu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function S0(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Oa(Error(E(422))),vo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=zs({mode:"visible",children:r.children},i,0,null),o=Nn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Sr(t,e.child,null,s),t.child.memoizedState=Ll(s),t.memoizedState=Al,o);if(!(t.mode&1))return vo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=Oa(o,r,void 0),vo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ie||a){if(r=le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Rt(e,i),nt(r,e,i,-1))}return Zu(),r=Oa(Error(E(421))),vo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=b0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Le=Zt(i.nextSibling),be=t,G=!0,Ze=null,e!==null&&(Be[Ve++]=_t,Be[Ve++]=St,Be[Ve++]=Ln,_t=e.id,St=e.overflow,Ln=t),t=Gu(t,r.children),t.flags|=4096,t)}function Od(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Tl(e.return,t,n)}function xa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ye(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Od(e,n,t);else if(e.tag===19)Od(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&as(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),xa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&as(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}xa(t,!0,n,null,o);break;case"together":xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ao(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function E0(e,t,n){switch(t.tag){case 3:Fp(t),_r();break;case 5:pp(t);break;case 1:Ce(t.type)&&ts(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(is,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?zp(e,t,n):(V(q,q.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);V(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,jp(e,t,n)}return Nt(e,t,n)}var Vp,bl,Wp,Hp;Vp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bl=function(){};Wp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Cn(dt.current);var o=null;switch(n){case"input":i=nl(e,i),r=nl(e,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=ol(e,i),r=ol(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zo)}al(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Hp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function I0(e,t,n){var r=t.pendingProps;switch(Au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ce(t.type)&&es(),he(t),null;case 3:return r=t.stateNode,Er(),K(ke),K(ge),zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Bl(Ze),Ze=null))),bl(e,t),he(t),null;case 5:Fu(t);var i=Cn(Ni.current);if(n=t.type,e!==null&&t.stateNode!=null)Wp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return he(t),null}if(e=Cn(dt.current),mo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ut]=t,r[Pi]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Xr.length;i++)W(Xr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":$c(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":zc(r,o),W("invalid",r)}al(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&po(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&po(r.textContent,a,e),i=["children",""+a]):vi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&W("scroll",r)}switch(n){case"input":oo(r),Fc(r,o,!0);break;case"textarea":oo(r),Bc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ut]=t,e[Pi]=r,Vp(e,t,!1,!1),t.stateNode=e;e:{switch(s=ll(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Xr.length;i++)W(Xr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":$c(e,r),i=nl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),W("invalid",e);break;case"textarea":zc(e,r),i=ol(e,r),W("invalid",e);break;default:i=r}al(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Eh(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_h(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yi(e,l):typeof l=="number"&&yi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&W("scroll",e):l!=null&&vu(e,o,l,s))}switch(n){case"input":oo(e),Fc(e,r,!1);break;case"textarea":oo(e),Bc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ur(e,!!r.multiple,o,!1):r.defaultValue!=null&&ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Hp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Cn(Ni.current),Cn(dt.current),mo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ut]=t,(o=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=t,t.stateNode=r}return he(t),null;case 13:if(K(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Le!==null&&t.mode&1&&!(t.flags&128))up(),_r(),t.flags|=98560,o=!1;else if(o=mo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[ut]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else Ze!==null&&(Bl(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ie===0&&(ie=3):Zu())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Er(),bl(e,t),e===null&&Ci(t.stateNode.containerInfo),he(t),null;case 10:return Mu(t.type._context),he(t),null;case 17:return Ce(t.type)&&es(),he(t),null;case 19:if(K(q),o=t.memoizedState,o===null)return he(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Gr(o,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=as(e),s!==null){for(t.flags|=128,Gr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&X()>kr&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=as(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!G)return he(t),null}else 2*X()-o.renderingStartTime>kr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=X(),t.sibling=null,n=q.current,V(q,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function k0(e,t){switch(Au(t),t.tag){case 1:return Ce(t.type)&&es(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),K(ke),K(ge),zu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fu(t),null;case 13:if(K(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(q),null;case 4:return Er(),null;case 10:return Mu(t.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var yo=!1,pe=!1,C0=typeof WeakSet=="function"?WeakSet:Set,P=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Dl(e,t,n){try{n()}catch(r){J(e,t,r)}}var xd=!1;function T0(e,t){if(yl=Qo,e=Qh(),Ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,m=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wl={focusedElem:e,selectionRange:n},Qo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Je(t.type,w),k);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(v){J(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=xd,xd=!1,y}function ci(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Dl(t,n,o)}i=i.next}while(i!==r)}}function $s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ml(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Kp(e){var t=e.alternate;t!==null&&(e.alternate=null,Kp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[Pi],delete t[El],delete t[l0],delete t[u0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gp(e){return e.tag===5||e.tag===3||e.tag===4}function Ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zo));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jl(e,t,n),e=e.sibling;e!==null;)jl(e,t,n),e=e.sibling}var ue=null,Xe=!1;function Mt(e,t,n){for(n=n.child;n!==null;)qp(e,t,n),n=n.sibling}function qp(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(xs,n)}catch{}switch(n.tag){case 5:pe||or(n,t);case 6:var r=ue,i=Xe;ue=null,Mt(e,t,n),ue=r,Xe=i,ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Xe?(e=ue,n=n.stateNode,e.nodeType===8?ka(e.parentNode,n):e.nodeType===1&&ka(e,n),Ei(e)):ka(ue,n.stateNode));break;case 4:r=ue,i=Xe,ue=n.stateNode.containerInfo,Xe=!0,Mt(e,t,n),ue=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Dl(n,t,s),i=i.next}while(i!==r)}Mt(e,t,n);break;case 1:if(!pe&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){J(n,t,a)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,Mt(e,t,n),pe=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function Ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new C0),t.forEach(function(r){var i=D0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Xe=!1;break e;case 3:ue=a.stateNode.containerInfo,Xe=!0;break e;case 4:ue=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(ue===null)throw Error(E(160));qp(o,s,i),ue=null,Xe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){J(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yp(t,e),t=t.sibling}function Yp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),st(e),r&4){try{ci(3,e,e.return),$s(3,e)}catch(w){J(e,e.return,w)}try{ci(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:Qe(t,e),st(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(Qe(t,e),st(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var i=e.stateNode;try{yi(i,"")}catch(w){J(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vh(i,o),ll(a,s);var u=ll(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Eh(i,f):c==="dangerouslySetInnerHTML"?_h(i,f):c==="children"?yi(i,f):vu(i,c,f,u)}switch(a){case"input":rl(i,o);break;case"textarea":yh(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?ur(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?ur(i,!!o.multiple,o.defaultValue,!0):ur(i,!!o.multiple,o.multiple?[]:"",!1))}i[Pi]=o}catch(w){J(e,e.return,w)}}break;case 6:if(Qe(t,e),st(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){J(e,e.return,w)}}break;case 3:if(Qe(t,e),st(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:Qe(t,e),st(e);break;case 13:Qe(t,e),st(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qu=X())),r&4&&Ld(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||c,Qe(t,e),pe=u):Qe(t,e),st(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(P=e,c=e.child;c!==null;){for(f=P=c;P!==null;){switch(m=P,g=m.child,m.tag){case 0:case 11:case 14:case 15:ci(4,m,m.return);break;case 1:or(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){J(r,n,w)}}break;case 5:or(m,m.return);break;case 22:if(m.memoizedState!==null){Dd(f);continue}}g!==null?(g.return=m,P=g):Dd(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sh("display",s))}catch(w){J(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){J(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qe(t,e),st(e),r&4&&Ld(e);break;case 21:break;default:Qe(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gp(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yi(i,""),r.flags&=-33);var o=Ad(e);jl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ad(e);Ul(e,a,s);break;default:throw Error(E(161))}}catch(l){J(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function P0(e,t,n){P=e,Qp(e)}function Qp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||yo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||pe;a=yo;var u=pe;if(yo=s,(pe=l)&&!u)for(P=i;P!==null;)s=P,l=s.child,s.tag===22&&s.memoizedState!==null?Md(i):l!==null?(l.return=s,P=l):Md(i);for(;o!==null;)P=o,Qp(o),o=o.sibling;P=i,yo=a,pe=u}bd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):bd(e)}}function bd(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||$s(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Je(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&yd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yd(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ei(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}pe||t.flags&512&&Ml(t)}catch(m){J(t,t.return,m)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Dd(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Md(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$s(4,t)}catch(l){J(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){J(t,i,l)}}var o=t.return;try{Ml(t)}catch(l){J(t,o,l)}break;case 5:var s=t.return;try{Ml(t)}catch(l){J(t,s,l)}}}catch(l){J(t,t.return,l)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var R0=Math.ceil,cs=At.ReactCurrentDispatcher,qu=At.ReactCurrentOwner,He=At.ReactCurrentBatchConfig,M=0,le=null,te=null,ce=0,Ae=0,sr=fn(0),ie=0,Li=null,Dn=0,Fs=0,Yu=0,di=null,Ee=null,Qu=0,kr=1/0,vt=null,ds=!1,$l=null,tn=null,wo=!1,qt=null,fs=0,fi=0,Fl=null,Lo=-1,bo=0;function we(){return M&6?X():Lo!==-1?Lo:Lo=X()}function nn(e){return e.mode&1?M&2&&ce!==0?ce&-ce:d0.transition!==null?(bo===0&&(bo=bh()),bo):(e=$,e!==0||(e=window.event,e=e===void 0?16:zh(e.type)),e):1}function nt(e,t,n,r){if(50<fi)throw fi=0,Fl=null,Error(E(185));Bi(e,n,r),(!(M&2)||e!==le)&&(e===le&&(!(M&2)&&(Fs|=n),ie===4&&Bt(e,ce)),Te(e,r),n===1&&M===0&&!(t.mode&1)&&(kr=X()+500,Ms&&hn()))}function Te(e,t){var n=e.callbackNode;dy(e,t);var r=Yo(e,e===le?ce:0);if(r===0)n!==null&&Hc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Hc(n),t===1)e.tag===0?c0(Ud.bind(null,e)):sp(Ud.bind(null,e)),s0(function(){!(M&6)&&hn()}),n=null;else{switch(Dh(r)){case 1:n=Eu;break;case 4:n=Ah;break;case 16:n=qo;break;case 536870912:n=Lh;break;default:n=qo}n=im(n,Jp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jp(e,t){if(Lo=-1,bo=0,M&6)throw Error(E(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var r=Yo(e,e===le?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=hs(e,r);else{t=r;var i=M;M|=2;var o=Zp();(le!==e||ce!==t)&&(vt=null,kr=X()+500,Rn(e,t));do try{x0();break}catch(a){Xp(e,a)}while(!0);Du(),cs.current=o,M=i,te!==null?t=0:(le=null,ce=0,t=ie)}if(t!==0){if(t===2&&(i=hl(e),i!==0&&(r=i,t=zl(e,i))),t===1)throw n=Li,Rn(e,0),Bt(e,r),Te(e,X()),n;if(t===6)Bt(e,r);else{if(i=e.current.alternate,!(r&30)&&!N0(i)&&(t=hs(e,r),t===2&&(o=hl(e),o!==0&&(r=o,t=zl(e,o))),t===1))throw n=Li,Rn(e,0),Bt(e,r),Te(e,X()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Sn(e,Ee,vt);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=Qu+500-X(),10<t)){if(Yo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sl(Sn.bind(null,e,Ee,vt),t);break}Sn(e,Ee,vt);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-tt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R0(r/1960))-r,10<r){e.timeoutHandle=Sl(Sn.bind(null,e,Ee,vt),r);break}Sn(e,Ee,vt);break;case 5:Sn(e,Ee,vt);break;default:throw Error(E(329))}}}return Te(e,X()),e.callbackNode===n?Jp.bind(null,e):null}function zl(e,t){var n=di;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=hs(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&Bl(t)),e}function Bl(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function N0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!it(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~Yu,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function Ud(e){if(M&6)throw Error(E(327));pr();var t=Yo(e,0);if(!(t&1))return Te(e,X()),null;var n=hs(e,t);if(e.tag!==0&&n===2){var r=hl(e);r!==0&&(t=r,n=zl(e,r))}if(n===1)throw n=Li,Rn(e,0),Bt(e,t),Te(e,X()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,Ee,vt),Te(e,X()),null}function Ju(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(kr=X()+500,Ms&&hn())}}function Mn(e){qt!==null&&qt.tag===0&&!(M&6)&&pr();var t=M;M|=1;var n=He.transition,r=$;try{if(He.transition=null,$=1,e)return e()}finally{$=r,He.transition=n,M=t,!(M&6)&&hn()}}function Xu(){Ae=sr.current,K(sr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,o0(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&es();break;case 3:Er(),K(ke),K(ge),zu();break;case 5:Fu(r);break;case 4:Er();break;case 13:K(q);break;case 19:K(q);break;case 10:Mu(r.type._context);break;case 22:case 23:Xu()}n=n.return}if(le=e,te=e=rn(e.current,null),ce=Ae=t,ie=0,Li=null,Yu=Fs=Dn=0,Ee=di=null,kn!==null){for(t=0;t<kn.length;t++)if(n=kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}kn=null}return e}function Xp(e,t){do{var n=te;try{if(Du(),Oo.current=us,ls){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ls=!1}if(bn=0,oe=re=Y=null,ui=!1,Oi=0,qu.current=null,n===null||n.return===null){ie=1,Li=t,te=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=kd(s);if(g!==null){g.flags&=-257,Cd(g,s,a,o,t),g.mode&1&&Id(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Id(o,u,t),Zu();break e}l=Error(E(426))}}else if(G&&a.mode&1){var k=kd(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Cd(k,s,a,o,t),Lu(Ir(l,a));break e}}o=l=Ir(l,a),ie!==4&&(ie=2),di===null?di=[o]:di.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Dp(o,l,t);vd(o,p);break e;case 1:a=l;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tn===null||!tn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Mp(o,a,t);vd(o,v);break e}}o=o.return}while(o!==null)}tm(n)}catch(_){t=_,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Zp(){var e=cs.current;return cs.current=us,e===null?us:e}function Zu(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(Dn&268435455)&&!(Fs&268435455)||Bt(le,ce)}function hs(e,t){var n=M;M|=2;var r=Zp();(le!==e||ce!==t)&&(vt=null,Rn(e,t));do try{O0();break}catch(i){Xp(e,i)}while(!0);if(Du(),M=n,cs.current=r,te!==null)throw Error(E(261));return le=null,ce=0,ie}function O0(){for(;te!==null;)em(te)}function x0(){for(;te!==null&&!ny();)em(te)}function em(e){var t=rm(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?tm(e):te=t,qu.current=null}function tm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=k0(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(n=I0(n,t,Ae),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function Sn(e,t,n){var r=$,i=He.transition;try{He.transition=null,$=1,A0(e,t,n,r)}finally{He.transition=i,$=r}return null}function A0(e,t,n,r){do pr();while(qt!==null);if(M&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(fy(e,o),e===le&&(te=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,im(qo,function(){return pr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var s=$;$=1;var a=M;M|=4,qu.current=null,T0(e,n),Yp(n,e),Xy(wl),Qo=!!yl,wl=yl=null,e.current=n,P0(n),ry(),M=a,$=s,He.transition=o}else e.current=n;if(wo&&(wo=!1,qt=e,fs=i),o=e.pendingLanes,o===0&&(tn=null),sy(n.stateNode),Te(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ds)throw ds=!1,e=$l,$l=null,e;return fs&1&&e.tag!==0&&pr(),o=e.pendingLanes,o&1?e===Fl?fi++:(fi=0,Fl=e):fi=0,hn(),null}function pr(){if(qt!==null){var e=Dh(fs),t=He.transition,n=$;try{if(He.transition=null,$=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,fs=0,M&6)throw Error(E(331));var i=M;for(M|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:ci(8,c,o)}var f=c.child;if(f!==null)f.return=c,P=f;else for(;P!==null;){c=P;var m=c.sibling,g=c.return;if(Kp(c),c===u){P=null;break}if(m!==null){m.return=g,P=m;break}P=g}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ci(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){s=P;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,P=h;else e:for(s=d;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$s(9,a)}}catch(_){J(a,a.return,_)}if(a===s){P=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,P=v;break e}P=a.return}}if(M=i,hn(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(xs,e)}catch{}r=!0}return r}finally{$=n,He.transition=t}}return!1}function jd(e,t,n){t=Ir(n,t),t=Dp(e,t,1),e=en(e,t,1),t=we(),e!==null&&(Bi(e,1,t),Te(e,t))}function J(e,t,n){if(e.tag===3)jd(e,e,n);else for(;t!==null;){if(t.tag===3){jd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=Ir(n,e),e=Mp(t,e,1),t=en(t,e,1),e=we(),t!==null&&(Bi(t,1,e),Te(t,e));break}}t=t.return}}function L0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>X()-Qu?Rn(e,0):Yu|=n),Te(e,t)}function nm(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=we();e=Rt(e,t),e!==null&&(Bi(e,t,n),Te(e,n))}function b0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nm(e,n)}function D0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),nm(e,n)}var rm;rm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,E0(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,G&&t.flags&1048576&&ap(t,rs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ao(e,t),e=t.pendingProps;var i=wr(t,ge.current);hr(t,n),i=Vu(null,t,r,e,i,n);var o=Wu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(o=!0,ts(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ju(t),i.updater=js,t.stateNode=i,i._reactInternals=t,Rl(t,r,e,n),t=xl(null,t,r,!0,o,n)):(t.tag=0,G&&o&&xu(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ao(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=U0(r),e=Je(r,e),i){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=Rd(null,t,r,e,n);break e;case 11:t=Td(null,t,r,e,n);break e;case 14:t=Pd(null,t,r,Je(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Rd(e,t,r,i,n);case 3:e:{if(Fp(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,hp(e,t),ss(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ir(Error(E(423)),t),t=Nd(e,t,r,n,i);break e}else if(r!==i){i=Ir(Error(E(424)),t),t=Nd(e,t,r,n,i);break e}else for(Le=Zt(t.stateNode.containerInfo.firstChild),be=t,G=!0,Ze=null,n=dp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===i){t=Nt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return pp(t),e===null&&Cl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,_l(r,i)?s=null:o!==null&&_l(r,o)&&(t.flags|=32),$p(e,t),ye(e,t,s,n),t.child;case 6:return e===null&&Cl(t),null;case 13:return zp(e,t,n);case 4:return $u(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Td(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,V(is,r._currentValue),r._currentValue=s,o!==null)if(it(o.value,s)){if(o.children===i.children&&!ke.current){t=Nt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ct(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Tl(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Tl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hr(t,n),i=Ke(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Je(r,t.pendingProps),i=Je(r.type,i),Pd(e,t,r,i,n);case 15:return Up(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Je(r,i),Ao(e,t),t.tag=1,Ce(r)?(e=!0,ts(t)):e=!1,hr(t,n),bp(t,r,i),Rl(t,r,i,n),xl(null,t,r,!0,e,n);case 19:return Bp(e,t,n);case 22:return jp(e,t,n)}throw Error(E(156,t.tag))};function im(e,t){return xh(e,t)}function M0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new M0(e,t,n,r)}function ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U0(e){if(typeof e=="function")return ec(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wu)return 11;if(e===_u)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Do(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ec(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Qn:return Nn(n.children,i,o,t);case yu:s=8,i|=8;break;case Xa:return e=We(12,n,t,i|2),e.elementType=Xa,e.lanes=o,e;case Za:return e=We(13,n,t,i),e.elementType=Za,e.lanes=o,e;case el:return e=We(19,n,t,i),e.elementType=el,e.lanes=o,e;case ph:return zs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fh:s=10;break e;case hh:s=9;break e;case wu:s=11;break e;case _u:s=14;break e;case $t:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=We(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nn(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function zs(e,t,n,r){return e=We(22,e,r,t),e.elementType=ph,e.lanes=n,e.stateNode={isHidden:!1},e}function Aa(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function La(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function j0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ha(0),this.expirationTimes=ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ha(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tc(e,t,n,r,i,o,s,a,l){return e=new j0(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=We(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(o),e}function $0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function om(e){if(!e)return cn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ce(n))return op(e,n,t)}return t}function sm(e,t,n,r,i,o,s,a,l){return e=tc(n,r,!0,e,i,o,s,a,l),e.context=om(null),n=e.current,r=we(),i=nn(n),o=Ct(r,i),o.callback=t??null,en(n,o,i),e.current.lanes=i,Bi(e,i,r),Te(e,r),e}function Bs(e,t,n,r){var i=t.current,o=we(),s=nn(i);return n=om(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(i,t,s),e!==null&&(nt(e,i,s,o),No(e,i,s)),s}function ps(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $d(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nc(e,t){$d(e,t),(e=e.alternate)&&$d(e,t)}function F0(){return null}var am=typeof reportError=="function"?reportError:function(e){console.error(e)};function rc(e){this._internalRoot=e}Vs.prototype.render=rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Bs(e,t,null,null)};Vs.prototype.unmount=rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mn(function(){Bs(null,e,null,null)}),t[Pt]=null}};function Vs(e){this._internalRoot=e}Vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=jh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&Fh(e)}};function ic(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fd(){}function z0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ps(s);o.call(u)}}var s=sm(t,r,e,0,null,!1,!1,"",Fd);return e._reactRootContainer=s,e[Pt]=s.current,Ci(e.nodeType===8?e.parentNode:e),Mn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ps(l);a.call(u)}}var l=tc(e,0,!1,null,null,!1,!1,"",Fd);return e._reactRootContainer=l,e[Pt]=l.current,Ci(e.nodeType===8?e.parentNode:e),Mn(function(){Bs(t,l,n,r)}),l}function Hs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ps(s);a.call(l)}}Bs(t,s,e,i)}else s=z0(n,t,e,i,r);return ps(s)}Mh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(Iu(t,n|1),Te(t,X()),!(M&6)&&(kr=X()+500,hn()))}break;case 13:Mn(function(){var r=Rt(e,1);if(r!==null){var i=we();nt(r,e,1,i)}}),nc(e,1)}};ku=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=we();nt(t,e,134217728,n)}nc(e,134217728)}};Uh=function(e){if(e.tag===13){var t=nn(e),n=Rt(e,t);if(n!==null){var r=we();nt(n,e,t,r)}nc(e,t)}};jh=function(){return $};$h=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};cl=function(e,t,n){switch(t){case"input":if(rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ds(r);if(!i)throw Error(E(90));gh(r),rl(r,i)}}}break;case"textarea":yh(e,n);break;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}};Ch=Ju;Th=Mn;var B0={usingClientEntryPoint:!1,Events:[Wi,er,Ds,Ih,kh,Ju]},qr={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V0={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nh(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||F0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{xs=_o.inject(V0),ct=_o}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B0;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ic(t))throw Error(E(200));return $0(e,t,null,n)};je.createRoot=function(e,t){if(!ic(e))throw Error(E(299));var n=!1,r="",i=am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=tc(e,1,!1,null,null,n,!1,r,i),e[Pt]=t.current,Ci(e.nodeType===8?e.parentNode:e),new rc(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Nh(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return Mn(e)};je.hydrate=function(e,t,n){if(!Ws(t))throw Error(E(200));return Hs(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!ic(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=am;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=sm(t,null,e,1,n??null,i,!1,o,s),e[Pt]=t.current,Ci(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vs(t)};je.render=function(e,t,n){if(!Ws(t))throw Error(E(200));return Hs(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Ws(e))throw Error(E(40));return e._reactRootContainer?(Mn(function(){Hs(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};je.unstable_batchedUpdates=Ju;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ws(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Hs(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lm)}catch(e){console.error(e)}}lm(),lh.exports=je;var W0=lh.exports,zd=W0;Qa.createRoot=zd.createRoot,Qa.hydrateRoot=zd.hydrateRoot;var Bd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},H0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},cm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[c],n[f],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(um(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):H0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new K0;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class K0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const G0=function(e){const t=um(e);return cm.encodeByteArray(t,!0)},dm=function(e){return G0(e).replace(/\./g,"")},fm=function(e){try{return cm.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=()=>q0().__FIREBASE_DEFAULTS__,Q0=()=>{if(typeof process>"u"||typeof Bd>"u")return;const e=Bd.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},J0=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&fm(e[1]);return t&&JSON.parse(t)},oc=()=>{try{return Y0()||Q0()||J0()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},X0=e=>{var t,n;return(n=(t=oc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hm=()=>{var e;return(e=oc())===null||e===void 0?void 0:e.config},pm=e=>{var t;return(t=oc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ew(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function mm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nw(){const e=ve();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function gm(){try{return typeof indexedDB=="object"}catch{return!1}}function vm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function rw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="FirebaseError";class mt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=iw,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?ow(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new mt(i,a,r)}}function ow(e,t){return e.replace(sw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const sw=/\{\$([^}]+)}/g;function aw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function bi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Vd(o)&&Vd(s)){if(!bi(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Zr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function ei(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function lw(e,t){const n=new uw(e,t);return n.subscribe.bind(n)}class uw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ba),i.error===void 0&&(i.error=ba),i.complete===void 0&&(i.complete=ba);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ba(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=1e3,fw=2,hw=4*60*60*1e3,pw=.5;function Wd(e,t=dw,n=fw){const r=t*Math.pow(n,e),i=Math.round(pw*r*(Math.random()-.5)*2);return Math.min(hw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){return e&&e._delegate?e._delegate:e}class pt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Z0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vw(t))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=En){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=En){return this.instances.has(t)}getOptions(t=En){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=En){return this.component?this.component.multipleInstances?t:En:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gw(e){return e===En?void 0:e}function vw(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new mw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const ww={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},_w=B.INFO,Sw={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Ew=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Sw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sc{constructor(t){this.name=t,this._logLevel=_w,this._logHandler=Ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ww[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const Iw=(e,t)=>t.some(n=>e instanceof n);let Hd,Kd;function kw(){return Hd||(Hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cw(){return Kd||(Kd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ym=new WeakMap,Vl=new WeakMap,wm=new WeakMap,Da=new WeakMap,ac=new WeakMap;function Tw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(on(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&ym.set(n,e)}).catch(()=>{}),ac.set(t,e),t}function Pw(e){if(Vl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Vl.set(e,t)}let Wl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Vl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Rw(e){Wl=e(Wl)}function Nw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ma(this),t,...n);return wm.set(r,t.sort?t.sort():[t]),on(r)}:Cw().includes(e)?function(...t){return e.apply(Ma(this),t),on(ym.get(this))}:function(...t){return on(e.apply(Ma(this),t))}}function Ow(e){return typeof e=="function"?Nw(e):(e instanceof IDBTransaction&&Pw(e),Iw(e,kw())?new Proxy(e,Wl):e)}function on(e){if(e instanceof IDBRequest)return Tw(e);if(Da.has(e))return Da.get(e);const t=Ow(e);return t!==e&&(Da.set(e,t),ac.set(t,e)),t}const Ma=e=>ac.get(e);function _m(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=on(s);return r&&s.addEventListener("upgradeneeded",l=>{r(on(s.result),l.oldVersion,l.newVersion,on(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const xw=["get","getKey","getAll","getAllKeys","count"],Aw=["put","add","delete","clear"],Ua=new Map;function Gd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ua.get(t))return Ua.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Aw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xw.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ua.set(t,o),o}Rw(e=>({...e,get:(t,n,r)=>Gd(t,n)||e.get(t,n,r),has:(t,n)=>!!Gd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hl="@firebase/app",qd="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new sc("@firebase/app"),Dw="@firebase/app-compat",Mw="@firebase/analytics-compat",Uw="@firebase/analytics",jw="@firebase/app-check-compat",$w="@firebase/app-check",Fw="@firebase/auth",zw="@firebase/auth-compat",Bw="@firebase/database",Vw="@firebase/database-compat",Ww="@firebase/functions",Hw="@firebase/functions-compat",Kw="@firebase/installations",Gw="@firebase/installations-compat",qw="@firebase/messaging",Yw="@firebase/messaging-compat",Qw="@firebase/performance",Jw="@firebase/performance-compat",Xw="@firebase/remote-config",Zw="@firebase/remote-config-compat",e1="@firebase/storage",t1="@firebase/storage-compat",n1="@firebase/firestore",r1="@firebase/vertexai-preview",i1="@firebase/firestore-compat",o1="firebase",s1="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="[DEFAULT]",a1={[Hl]:"fire-core",[Dw]:"fire-core-compat",[Uw]:"fire-analytics",[Mw]:"fire-analytics-compat",[$w]:"fire-app-check",[jw]:"fire-app-check-compat",[Fw]:"fire-auth",[zw]:"fire-auth-compat",[Bw]:"fire-rtdb",[Vw]:"fire-rtdb-compat",[Ww]:"fire-fn",[Hw]:"fire-fn-compat",[Kw]:"fire-iid",[Gw]:"fire-iid-compat",[qw]:"fire-fcm",[Yw]:"fire-fcm-compat",[Qw]:"fire-perf",[Jw]:"fire-perf-compat",[Xw]:"fire-rc",[Zw]:"fire-rc-compat",[e1]:"fire-gcs",[t1]:"fire-gcs-compat",[n1]:"fire-fst",[i1]:"fire-fst-compat",[r1]:"fire-vertex","fire-js":"fire-js",[o1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map,l1=new Map,Gl=new Map;function Yd(e,t){try{e.container.addComponent(t)}catch(n){Un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ot(e){const t=e.name;if(Gl.has(t))return Un.debug(`There were multiple attempts to register component ${t}.`),!1;Gl.set(t,e);for(const n of ms.values())Yd(n,e);for(const n of l1.values())Yd(n,e);return!0}function Dr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function et(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new Wn("app","Firebase",u1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=s1;function Sm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Kl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(n||(n=hm()),!n)throw sn.create("no-options");const o=ms.get(i);if(o){if(bi(n,o.options)&&bi(r,o.config))return o;throw sn.create("duplicate-app",{appName:i})}const s=new yw(i);for(const l of Gl.values())s.addComponent(l);const a=new c1(n,r,s);return ms.set(i,a),a}function Em(e=Kl){const t=ms.get(e);if(!t&&e===Kl&&hm())return Sm();if(!t)throw sn.create("no-app",{appName:e});return t}function ft(e,t,n){var r;let i=(r=a1[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Un.warn(a.join(" "));return}Ot(new pt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="firebase-heartbeat-database",f1=1,Di="firebase-heartbeat-store";let ja=null;function Im(){return ja||(ja=_m(d1,f1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Di)}catch(n){console.warn(n)}}}}).catch(e=>{throw sn.create("idb-open",{originalErrorMessage:e.message})})),ja}async function h1(e){try{const n=(await Im()).transaction(Di),r=await n.objectStore(Di).get(km(e));return await n.done,r}catch(t){if(t instanceof mt)Un.warn(t.message);else{const n=sn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Un.warn(n.message)}}}async function Qd(e,t){try{const r=(await Im()).transaction(Di,"readwrite");await r.objectStore(Di).put(t,km(e)),await r.done}catch(n){if(n instanceof mt)Un.warn(n.message);else{const r=sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function km(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=1024,m1=30*24*60*60*1e3;class g1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Jd();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=m1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jd(),{heartbeatsToSend:r,unsentEntries:i}=v1(this._heartbeatsCache.heartbeats),o=dm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Jd(){return new Date().toISOString().substring(0,10)}function v1(e,t=p1){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Xd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class y1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gm()?vm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await h1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Xd(e){return dm(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(e){Ot(new pt("platform-logger",t=>new Lw(t),"PRIVATE")),Ot(new pt("heartbeat",t=>new g1(t),"PRIVATE")),ft(Hl,qd,e),ft(Hl,qd,"esm2017"),ft("fire-js","")}w1("");var me=function(){return me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},me.apply(this,arguments)};function lc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Mi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function Cm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _1=Cm,Tm=new Wn("auth","Firebase",Cm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new sc("@firebase/auth");function S1(e,...t){gs.logLevel<=B.WARN&&gs.warn(`Auth (${Ki}): ${e}`,...t)}function Mo(e,...t){gs.logLevel<=B.ERROR&&gs.error(`Auth (${Ki}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e,...t){throw uc(e,...t)}function De(e,...t){return uc(e,...t)}function Pm(e,t,n){const r=Object.assign(Object.assign({},_1()),{[t]:n});return new Wn("auth","Firebase",r).create(t,{appName:e.name})}function ht(e){return Pm(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Tm.create(e,...t)}function R(e,t,...n){if(!e)throw uc(t,...n)}function Et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Mo(t),new Error(t)}function xt(e,t){e||Et(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Rm(){return Zd()==="http:"||Zd()==="https:"}function Zd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rm()||mm()||"connection"in navigator)?navigator.onLine:!0}function I1(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,n){this.shortDelay=t,this.longDelay=n,xt(n>t,"Short delay should be less than long delay!"),this.isMobile=ew()||tw()}get(){return E1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(e,t){xt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=new Gi(3e4,6e4);function Re(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ze(e,t,n,r,i={}){return Om(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=br(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Nm.fetch()(xm(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Om(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},k1),t);try{const i=new P1(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ti(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ti(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw ti(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pm(e,c,u);ot(e,c)}}catch(i){if(i instanceof mt)throw i;ot(e,"network-request-failed",{message:String(i)})}}async function pn(e,t,n,r,i={}){const o=await ze(e,t,n,r,i);return"mfaPendingCredential"in o&&ot(e,"multi-factor-auth-required",{_serverResponse:o}),o}function xm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?cc(e.config,i):`${e.config.apiScheme}://${i}`}function T1(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class P1{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(De(this.auth,"network-request-failed")),C1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ti(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=De(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(e){return e!==void 0&&e.getResponse!==void 0}function tf(e){return e!==void 0&&e.enterprise!==void 0}class R1{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return T1(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(e){return(await ze(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function O1(e,t){return ze(e,"GET","/v2/recaptchaConfig",Re(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(e,t){return ze(e,"POST","/v1/accounts:delete",t)}async function Am(e,t){return ze(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function A1(e,t=!1){const n=Fe(e),r=await n.getIdToken(t),i=dc(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:hi($a(i.auth_time)),issuedAtTime:hi($a(i.iat)),expirationTime:hi($a(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function $a(e){return Number(e)*1e3}function dc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=fm(n);return i?JSON.parse(i):(Mo("Failed to decode base64 JWT payload"),null)}catch(i){return Mo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nf(e){const t=dc(e);return R(t,"internal-error"),R(typeof t.exp<"u","internal-error"),R(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof mt&&L1(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function L1({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hi(this.lastLoginAt),this.creationTime=hi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Cr(e,Am(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Lm(o.providerUserInfo):[],a=M1(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Yl(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function D1(e){const t=Fe(e);await vs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function M1(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Lm(e){return e.map(t=>{var{providerId:n}=t,r=lc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(e,t){const n=await Om(e,{},async()=>{const r=br({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=xm(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nm.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function j1(e,t){return ze(e,"POST","/v2/accounts:revokeToken",Re(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken<"u","internal-error"),R(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):nf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){R(t.length!==0,"internal-error");const n=nf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await U1(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new mr;return r&&(R(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(R(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t){R(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class It{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=lc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Yl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Cr(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return A1(this,t)}reload(){return D1(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new It(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await vs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject(ht(this.auth));const t=await this.getIdToken();return await Cr(this,x1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:h,emailVerified:v,isAnonymous:_,providerData:I,stsTokenManager:S}=n;R(h&&S,t,"internal-error");const O=mr.fromJSON(this.name,S);R(typeof h=="string",t,"internal-error"),Ut(f,t.name),Ut(m,t.name),R(typeof v=="boolean",t,"internal-error"),R(typeof _=="boolean",t,"internal-error"),Ut(g,t.name),Ut(y,t.name),Ut(w,t.name),Ut(k,t.name),Ut(p,t.name),Ut(d,t.name);const U=new It({uid:h,auth:t,email:m,emailVerified:v,displayName:f,isAnonymous:_,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:O,createdAt:p,lastLoginAt:d});return I&&Array.isArray(I)&&(U.providerData=I.map(b=>Object.assign({},b))),k&&(U._redirectEventId=k),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new mr;i.updateFromServerResponse(n);const o=new It({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await vs(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];R(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Lm(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new mr;a.updateFromIdToken(r);const l=new It({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Yl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new Map;function kt(e){xt(e instanceof Function,"Expected a class definition");let t=rf.get(e);return t?(xt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,rf.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}bm.type="NONE";const of=bm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(e,t,n){return`firebase:${e}:${t}:${n}`}class gr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Uo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Uo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?It._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new gr(kt(of),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||kt(of);const s=Uo(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=It._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new gr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new gr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Um(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Dm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($m(t))return"Blackberry";if(Fm(t))return"Webos";if(fc(t))return"Safari";if((t.includes("chrome/")||Mm(t))&&!t.includes("edge/"))return"Chrome";if(jm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dm(e=ve()){return/firefox\//i.test(e)}function fc(e=ve()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Mm(e=ve()){return/crios\//i.test(e)}function Um(e=ve()){return/iemobile/i.test(e)}function jm(e=ve()){return/android/i.test(e)}function $m(e=ve()){return/blackberry/i.test(e)}function Fm(e=ve()){return/webos/i.test(e)}function Ks(e=ve()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function $1(e=ve()){var t;return Ks(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function F1(){return nw()&&document.documentMode===10}function zm(e=ve()){return Ks(e)||jm(e)||Fm(e)||$m(e)||/windows phone/i.test(e)||Um(e)}function z1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(e,t=[]){let n;switch(e){case"Browser":n=sf(ve());break;case"Worker":n=`${sf(ve())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ki}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(e,t={}){return ze(e,"GET","/v2/passwordPolicy",Re(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=6;class H1{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:W1,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new af(this),this.idTokenSubscription=new af(this),this.beforeStateQueue=new B1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await gr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Am(this,{idToken:t}),r=await It._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(et(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await vs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=I1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(et(this.app))return Promise.reject(ht(this));const n=t?Fe(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return et(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await V1(this),n=new H1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Wn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await j1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&kt(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await gr.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Bm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&S1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lt(e){return Fe(e)}class af{constructor(t){this.auth=t,this.observer=null,this.addObserver=lw(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function G1(e){qi=e}function hc(e){return qi.loadJS(e)}function q1(){return qi.recaptchaV2Script}function Y1(){return qi.recaptchaEnterpriseScript}function Q1(){return qi.gapiScript}function Vm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const J1="recaptcha-enterprise",X1="NO_RECAPTCHA";class Z1{constructor(t){this.type=J1,this.auth=Lt(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{O1(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new R1(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;tf(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:t}).then(u=>{s(u)}).catch(()=>{s(X1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&tf(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Y1();l.length!==0&&(l+=a),hc(l).then(()=>{i(a,o,s)}).catch(u=>{s(u)})}}).catch(a=>{s(a)})})}}async function lf(e,t,n,r=!1){const i=new Z1(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},t);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ql(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await lf(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await lf(e,t,n,n==="getOobCode");return r(e,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(e,t){const n=Dr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(bi(o,t??{}))return i;ot(i,"already-initialized")}return n.initialize({options:t})}function t_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function n_(e,t,n){const r=Lt(e);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Wm(t),{host:s,port:a}=r_(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i_()}function Wm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function r_(e){const t=Wm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:uf(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:uf(s)}}}function uf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function i_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Et("not implemented")}_getIdTokenResponse(t){return Et("not implemented")}_linkToIdToken(t,n){return Et("not implemented")}_getReauthenticationResolver(t){return Et("not implemented")}}async function o_(e,t){return ze(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(e,t){return pn(e,"POST","/v1/accounts:signInWithPassword",Re(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(e,t){return pn(e,"POST","/v1/accounts:signInWithEmailLink",Re(e,t))}async function l_(e,t){return pn(e,"POST","/v1/accounts:signInWithEmailLink",Re(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Gs{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ui(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ui(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ql(t,n,"signInWithPassword",s_);case"emailLink":return a_(t,{email:this._email,oobCode:this._password});default:ot(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ql(t,r,"signUpPassword",o_);case"emailLink":return l_(t,{idToken:n,email:this._email,oobCode:this._password});default:ot(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(e,t){return pn(e,"POST","/v1/accounts:signInWithIdp",Re(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="http://localhost";class jn extends Gs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new jn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=lc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new jn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return vr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,vr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,vr(t,n)}buildRequest(){const t={requestUri:u_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=br(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(e,t){return ze(e,"POST","/v1/accounts:sendVerificationCode",Re(e,t))}async function d_(e,t){return pn(e,"POST","/v1/accounts:signInWithPhoneNumber",Re(e,t))}async function f_(e,t){const n=await pn(e,"POST","/v1/accounts:signInWithPhoneNumber",Re(e,t));if(n.temporaryProof)throw ti(e,"account-exists-with-different-credential",n);return n}const h_={USER_NOT_FOUND:"user-not-found"};async function p_(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return pn(e,"POST","/v1/accounts:signInWithPhoneNumber",Re(e,n),h_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Gs{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,n){return new pi({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new pi({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(t){return d_(t,this._makeVerificationRequest())}_linkToIdToken(t,n){return f_(t,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return p_(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=t;return!r&&!n&&!i&&!o?null:new pi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g_(e){const t=Zr(ei(e)).link,n=t?Zr(ei(t)).deep_link_id:null,r=Zr(ei(e)).deep_link_id;return(r?Zr(ei(r)).link:null)||r||n||t||e}class pc{constructor(t){var n,r,i,o,s,a;const l=Zr(ei(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=m_((i=l.mode)!==null&&i!==void 0?i:null);R(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=g_(t);try{return new pc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(t,n){return Ui._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=pc.parseLink(n);return R(r,"argument-error"),Ui._fromEmailAndCode(t,r.code,r.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends Hm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Yi{constructor(){super("facebook.com")}static credential(t){return jn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vt.credential(t.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return jn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends Yi{constructor(){super("github.com")}static credential(t){return jn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ht.credential(t.oauthAccessToken)}catch{return null}}}Ht.GITHUB_SIGN_IN_METHOD="github.com";Ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Yi{constructor(){super("twitter.com")}static credential(t,n){return jn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(e,t){return pn(e,"POST","/v1/accounts:signUp",Re(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await It._fromIdTokenResponse(t,r,i),s=cf(r);return new $n({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=cf(r);return new $n({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function cf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends mt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ys(t,n,r,i)}}function Km(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(e,o,t,r):o})}async function y_(e,t,n=!1){const r=await Cr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return $n._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(e,t,n=!1){const{auth:r}=e;if(et(r.app))return Promise.reject(ht(r));const i="reauthenticate";try{const o=await Cr(e,Km(r,i,t,e),n);R(o.idToken,r,"internal-error");const s=dc(o.idToken);R(s,r,"internal-error");const{sub:a}=s;return R(e.uid===a,r,"user-mismatch"),$n._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(e,t,n=!1){if(et(e.app))return Promise.reject(ht(e));const r="signIn",i=await Km(e,r,t),o=await $n._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function qm(e,t){return Gm(Lt(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(e){const t=Lt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function __(e,t,n){if(et(e.app))return Promise.reject(ht(e));const r=Lt(e),s=await Ql(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",v_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ym(e),l}),a=await $n._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function S_(e,t,n){return et(e.app)?Promise.reject(ht(e)):qm(Fe(e),Mr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ym(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(e,t){return ze(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Fe(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Cr(r,E_(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function k_(e,t,n,r){return Fe(e).onIdTokenChanged(t,n,r)}function C_(e,t,n){return Fe(e).beforeAuthStateChanged(t,n)}function T_(e,t,n,r){return Fe(e).onAuthStateChanged(t,n,r)}function P_(e){return Fe(e).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(e,t){return ze(e,"POST","/v2/accounts/mfaEnrollment:start",Re(e,t))}const ws="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ws,"1"),this.storage.removeItem(ws),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){const e=ve();return fc(e)||Ks(e)}const O_=1e3,x_=10;class Jm extends Qm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=N_()&&z1(),this.fallbackToPolling=zm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);F1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,x_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},O_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Jm.type="LOCAL";const A_=Jm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm extends Qm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Xm.type="SESSION";const Zm=Xm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new qs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await L_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=mc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return window}function D_(e){Z().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(){return typeof Z().WorkerGlobalScope<"u"&&typeof Z().importScripts=="function"}async function M_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function j_(){return gc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="firebaseLocalStorageDb",$_=1,_s="firebaseLocalStorage",tg="fbase_key";class Qi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ys(e,t){return e.transaction([_s],t?"readwrite":"readonly").objectStore(_s)}function F_(){const e=indexedDB.deleteDatabase(eg);return new Qi(e).toPromise()}function Jl(){const e=indexedDB.open(eg,$_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(_s,{keyPath:tg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(_s)?t(r):(r.close(),await F_(),t(await Jl()))})})}async function df(e,t,n){const r=Ys(e,!0).put({[tg]:t,value:n});return new Qi(r).toPromise()}async function z_(e,t){const n=Ys(e,!1).get(t),r=await new Qi(n).toPromise();return r===void 0?null:r.value}function ff(e,t){const n=Ys(e,!0).delete(t);return new Qi(n).toPromise()}const B_=800,V_=3;class ng{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>V_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(j_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await M_(),!this.activeServiceWorker)return;this.sender=new b_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||U_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Jl();return await df(t,ws,"1"),await ff(t,ws),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>df(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>z_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ff(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ys(i,!1).getAll();return new Qi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),B_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ng.type="LOCAL";const W_=ng;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(e,t){return ze(e,"POST","/v2/accounts/mfaSignIn:start",Re(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=500,G_=6e4,So=1e12;class q_{constructor(t){this.auth=t,this.counter=So,this._widgets=new Map}render(t,n){const r=this.counter;return this._widgets.set(r,new Y_(t,this.auth.name,n||{})),this.counter++,r}reset(t){var n;const r=t||So;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(t){var n;const r=t||So;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(t){var n;const r=t||So;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Y_{constructor(t,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof t=="string"?document.getElementById(t):t;R(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Q_(50);const{callback:t,"expired-callback":n}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},G_)},K_))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Q_(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=Vm("rcb"),J_=new Gi(3e4,6e4);class X_{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=Z().grecaptcha)===null||t===void 0)&&t.render)}load(t,n=""){return R(Z_(n),t,"argument-error"),this.shouldResolveImmediately(n)&&ef(Z().grecaptcha)?Promise.resolve(Z().grecaptcha):new Promise((r,i)=>{const o=Z().setTimeout(()=>{i(De(t,"network-request-failed"))},J_.get());Z()[Fa]=()=>{Z().clearTimeout(o),delete Z()[Fa];const a=Z().grecaptcha;if(!a||!ef(a)){i(De(t,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const f=l(u,c);return this.counter++,f},this.hostLanguage=n,r(a)};const s=`${q1()}?${br({onload:Fa,render:"explicit",hl:n})}`;hc(s).catch(()=>{clearTimeout(o),i(De(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var n;return!!(!((n=Z().grecaptcha)===null||n===void 0)&&n.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Z_(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class eS{async load(t){return new q_(t)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="recaptcha",tS={theme:"light",type:"image"};class nS{constructor(t,n,r=Object.assign({},tS)){this.parameters=r,this.type=rg,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Lt(t),this.isInvisible=this.parameters.size==="invisible",R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;R(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new eS:new X_,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(t);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){R(!this.parameters.sitekey,this.auth,"argument-error"),R(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof t=="function")t(n);else if(typeof t=="string"){const r=Z()[t];typeof r=="function"&&r(n)}}}assertNotDestroyed(){R(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const n=document.createElement("div");t.appendChild(n),t=n}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){R(Rm()&&!gc(),this.auth,"internal-error"),await rS(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await N1(this.auth);R(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return R(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function rS(){let e=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(t,n){this.verificationId=t,this.onConfirmation=n}confirm(t){const n=pi._fromVerification(this.verificationId,t);return this.onConfirmation(n)}}async function oS(e,t,n){if(et(e.app))return Promise.reject(ht(e));const r=Lt(e),i=await sS(r,t,Fe(n));return new iS(i,o=>qm(r,o))}async function sS(e,t,n){var r;const i=await n.verify();try{R(typeof i=="string",e,"argument-error"),R(n.type===rg,e,"argument-error");let o;if(typeof t=="string"?o={phoneNumber:t}:o=t,"session"in o){const s=o.session;if("phoneNumber"in o)return R(s.type==="enroll",e,"internal-error"),(await R_(e,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{R(s.type==="signin",e,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return R(a,e,"missing-multi-factor-info"),(await H_(e,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await c_(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(e,t){return t?kt(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Gs{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return vr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return vr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return vr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function lS(e){return Gm(e.auth,new vc(e),e.bypassAuthState)}function uS(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),w_(n,new vc(e),e.bypassAuthState)}async function cS(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),y_(n,new vc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return lS;case"linkViaPopup":case"linkViaRedirect":return cS;case"reauthViaPopup":case"reauthViaRedirect":return uS;default:ot(this.auth,"internal-error")}}resolve(t){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new Gi(2e3,1e4);class ar extends ig{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const t=mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(De(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(De(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(De(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,dS.get())};t()}}ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="pendingRedirect",jo=new Map;class hS extends ig{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=jo.get(this.auth._key());if(!t){try{const r=await pS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}jo.set(this.auth._key(),t)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pS(e,t){const n=vS(t),r=gS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mS(e,t){jo.set(e._key(),t)}function gS(e){return kt(e._redirectPersistence)}function vS(e){return Uo(fS,e.config.apiKey,e.name)}async function yS(e,t,n=!1){if(et(e.app))return Promise.reject(ht(e));const r=Lt(e),i=aS(r,t),s=await new hS(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=10*60*1e3;class _S{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!SS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!og(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(De(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wS&&this.cachedEventUids.clear(),this.cachedEventUids.has(hf(t))}saveEventToCache(t){this.cachedEventUids.add(hf(t)),this.lastProcessedEventTime=Date.now()}}function hf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function og({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function SS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return og(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(e,t={}){return ze(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kS=/^https?/;async function CS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ES(e);for(const n of t)try{if(TS(n))return}catch{}ot(e,"unauthorized-domain")}function TS(e){const t=ql(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!kS.test(n))return!1;if(IS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=new Gi(3e4,6e4);function pf(){const e=Z().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function RS(e){return new Promise((t,n)=>{var r,i,o;function s(){pf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{pf(),n(De(e,"network-request-failed"))},timeout:PS.get()})}if(!((i=(r=Z().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Z().gapi)===null||o===void 0)&&o.load)s();else{const a=Vm("iframefcb");return Z()[a]=()=>{gapi.load?s():n(De(e,"network-request-failed"))},hc(`${Q1()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw $o=null,t})}let $o=null;function NS(e){return $o=$o||RS(e),$o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=new Gi(5e3,15e3),xS="__/auth/iframe",AS="emulator/auth/iframe",LS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DS(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?cc(t,AS):`https://${e.config.authDomain}/${xS}`,r={apiKey:t.apiKey,appName:e.name,v:Ki},i=bS.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${br(r).slice(1)}`}async function MS(e){const t=await NS(e),n=Z().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:DS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LS,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=De(e,"network-request-failed"),a=Z().setTimeout(()=>{o(s)},OS.get());function l(){Z().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jS=500,$S=600,FS="_blank",zS="http://localhost";class mf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BS(e,t,n,r=jS,i=$S){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},US),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ve().toLowerCase();n&&(a=Mm(u)?FS:n),Dm(u)&&(t=t||zS,l.scrollbars="yes");const c=Object.entries(l).reduce((m,[g,y])=>`${m}${g}=${y},`,"");if($1(u)&&a!=="_self")return VS(t||"",a),new mf(null);const f=window.open(t||"",a,c);R(f,e,"popup-blocked");try{f.focus()}catch{}return new mf(f)}function VS(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="__/auth/handler",HS="emulator/auth/handler",KS=encodeURIComponent("fac");async function gf(e,t,n,r,i,o){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ki,eventId:i};if(t instanceof Hm){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",aw(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries({}))s[c]=f}if(t instanceof Yi){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${KS}=${encodeURIComponent(l)}`:"";return`${GS(e)}?${br(a).slice(1)}${u}`}function GS({config:e}){return e.emulator?cc(e,HS):`https://${e.authDomain}/${WS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="webStorageSupport";class qS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zm,this._completeRedirectFn=yS,this._overrideRedirectResult=mS}async _openPopup(t,n,r,i){var o;xt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await gf(t,n,r,ql(),i);return BS(t,s,mc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await gf(t,n,r,ql(),i);return D_(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(xt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await MS(t),r=new _S(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(za,{type:za},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[za];s!==void 0&&n(!!s),ot(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return zm()||fc()||Ks()}}const YS=qS;var vf="@firebase/auth",yf="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XS(e){Ot(new pt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;R(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bm(e)},u=new K1(r,i,o,l);return t_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ot(new pt("auth-internal",t=>{const n=Lt(t.getProvider("auth").getImmediate());return(r=>new QS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(vf,yf,JS(e)),ft(vf,yf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=5*60,eE=pm("authIdTokenMaxAge")||ZS;let wf=null;const tE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eE)return;const i=n==null?void 0:n.token;wf!==i&&(wf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nE(e=Em()){const t=Dr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=e_(e,{popupRedirectResolver:YS,persistence:[W_,A_,Zm]}),r=pm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=tE(o.toString());C_(n,s,()=>s(n.currentUser)),k_(n,a=>s(a))}}const i=X0("auth");return i&&n_(n,`http://${i}`),n}function rE(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}G1({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=De("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",rE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XS("Browser");/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ji(){return ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ji.apply(this,arguments)}var Yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Yt||(Yt={}));const _f="popstate";function iE(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Xl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ss(i)}return sE(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function oE(){return Math.random().toString(36).substr(2,8)}function Sf(e,t){return{usr:e.state,key:e.key,idx:t}}function Xl(e,t,n,r){return n===void 0&&(n=null),ji({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ur(t):t,{state:n,key:t&&t.key||r||oE()})}function Ss(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ur(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function sE(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Yt.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(ji({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){a=Yt.Pop;let k=c(),p=k==null?null:k-u;u=k,l&&l({action:a,location:w.location,delta:p})}function m(k,p){a=Yt.Push;let d=Xl(w.location,k,p);u=c()+1;let h=Sf(d,u),v=w.createHref(d);try{s.pushState(h,"",v)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(v)}o&&l&&l({action:a,location:w.location,delta:1})}function g(k,p){a=Yt.Replace;let d=Xl(w.location,k,p);u=c();let h=Sf(d,u),v=w.createHref(d);s.replaceState(h,"",v),o&&l&&l({action:a,location:w.location,delta:0})}function y(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof k=="string"?k:Ss(k);return d=d.replace(/ $/,"%20"),ne(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let w={get action(){return a},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(_f,f),l=k,()=>{i.removeEventListener(_f,f),l=null}},createHref(k){return t(i,k)},createURL:y,encodeLocation(k){let p=y(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:g,go(k){return s.go(k)}};return w}var Ef;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ef||(Ef={}));function aE(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ur(t):t,i=yc(r.pathname||"/",n);if(i==null)return null;let o=ag(e);lE(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let l=_E(i);s=vE(o[a],l)}return s}function ag(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=an([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ag(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:mE(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of lg(o.path))i(o,s,l)}),t}function lg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=lg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function lE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uE=/^:[\w-]+$/,cE=3,dE=2,fE=1,hE=10,pE=-2,If=e=>e==="*";function mE(e,t){let n=e.split("/"),r=n.length;return n.some(If)&&(r+=pE),t&&(r+=dE),n.filter(i=>!If(i)).reduce((i,o)=>i+(uE.test(o)?cE:o===""?fE:hE),r)}function gE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function vE(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=yE({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:an([i,c.pathname]),pathnameBase:kE(an([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=an([i,c.pathnameBase]))}return o}function yE(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=wE(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:m,isOptional:g}=c;if(m==="*"){let w=a[f]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[f];return g&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function wE(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),sg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function _E(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function SE(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ur(e):e;return{pathname:n?n.startsWith("/")?n:EE(n,t):t,search:CE(r),hash:TE(i)}}function EE(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ba(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function IE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ug(e,t){let n=IE(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function cg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ur(e):(i=ji({},e),ne(!i.pathname||!i.pathname.includes("?"),Ba("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),Ba("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),Ba("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?t[f]:"/"}let l=SE(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const an=e=>e.join("/").replace(/\/\/+/g,"/"),kE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),CE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,TE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function PE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dg=["post","put","patch","delete"];new Set(dg);const RE=["get",...dg];new Set(RE);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $i(){return $i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$i.apply(this,arguments)}const wc=C.createContext(null),NE=C.createContext(null),Hn=C.createContext(null),Qs=C.createContext(null),Kn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),fg=C.createContext(null);function OE(e,t){let{relative:n}=t===void 0?{}:t;Ji()||ne(!1);let{basename:r,navigator:i}=C.useContext(Hn),{hash:o,pathname:s,search:a}=pg(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:an([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Ji(){return C.useContext(Qs)!=null}function Js(){return Ji()||ne(!1),C.useContext(Qs).location}function hg(e){C.useContext(Hn).static||C.useLayoutEffect(e)}function Xi(){let{isDataRoute:e}=C.useContext(Kn);return e?VE():xE()}function xE(){Ji()||ne(!1);let e=C.useContext(wc),{basename:t,future:n,navigator:r}=C.useContext(Hn),{matches:i}=C.useContext(Kn),{pathname:o}=Js(),s=JSON.stringify(ug(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return hg(()=>{a.current=!0}),C.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=cg(u,JSON.parse(s),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:an([t,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[t,r,s,o,e])}function pg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Hn),{matches:i}=C.useContext(Kn),{pathname:o}=Js(),s=JSON.stringify(ug(i,r.v7_relativeSplatPath));return C.useMemo(()=>cg(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function AE(e,t){return LE(e,t)}function LE(e,t,n,r){Ji()||ne(!1);let{navigator:i}=C.useContext(Hn),{matches:o}=C.useContext(Kn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Js(),c;if(t){var f;let k=typeof t=="string"?Ur(t):t;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||ne(!1),c=k}else c=u;let m=c.pathname||"/",g=m;if(l!=="/"){let k=l.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=aE(e,{pathname:g}),w=jE(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:an([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:an([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return t&&w?C.createElement(Qs.Provider,{value:{location:$i({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Yt.Pop}},w):w}function bE(){let e=BE(),t=PE(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const DE=C.createElement(bE,null);class ME extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(Kn.Provider,{value:this.props.routeContext},C.createElement(fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function UE(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(wc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Kn.Provider,{value:t},r)}function jE(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||ne(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:m,errors:g}=n,y=f.route.loader&&m[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,m)=>{let g,y=!1,w=null,k=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||DE,l&&(u<0&&m===0?(y=!0,k=null):u===m&&(y=!0,k=f.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,m+1)),d=()=>{let h;return g?h=w:y?h=k:f.route.Component?h=C.createElement(f.route.Component,null):f.route.element?h=f.route.element:h=c,C.createElement(UE,{match:f,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:h})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?C.createElement(ME,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var mg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mg||{}),Es=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Es||{});function $E(e){let t=C.useContext(wc);return t||ne(!1),t}function FE(e){let t=C.useContext(NE);return t||ne(!1),t}function zE(e){let t=C.useContext(Kn);return t||ne(!1),t}function gg(e){let t=zE(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function BE(){var e;let t=C.useContext(fg),n=FE(Es.UseRouteError),r=gg(Es.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function VE(){let{router:e}=$E(mg.UseNavigateStable),t=gg(Es.UseNavigateStable),n=C.useRef(!1);return hg(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,$i({fromRouteId:t},o)))},[e,t])}function ni(e){ne(!1)}function WE(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Yt.Pop,navigator:o,static:s=!1,future:a}=e;Ji()&&ne(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:o,static:s,future:$i({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Ur(r));let{pathname:c="/",search:f="",hash:m="",state:g=null,key:y="default"}=r,w=C.useMemo(()=>{let k=yc(c,l);return k==null?null:{location:{pathname:k,search:f,hash:m,state:g,key:y},navigationType:i}},[l,c,f,m,g,y,i]);return w==null?null:C.createElement(Hn.Provider,{value:u},C.createElement(Qs.Provider,{children:n,value:w}))}function HE(e){let{children:t,location:n}=e;return AE(Zl(t),n)}new Promise(()=>{});function Zl(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Zl(r.props.children,o));return}r.type!==ni&&ne(!1),!r.props.index||!r.props.children||ne(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Zl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eu.apply(this,arguments)}function KE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function GE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qE(e,t){return e.button===0&&(!t||t==="_self")&&!GE(e)}const YE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],QE="6";try{window.__reactRouterVersion=QE}catch{}const JE="startTransition",kf=Lv[JE];function XE(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=iE({window:i,v5Compat:!0}));let s=o.current,[a,l]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=C.useCallback(f=>{u&&kf?kf(()=>l(f)):l(f)},[l,u]);return C.useLayoutEffect(()=>s.listen(c),[s,c]),C.createElement(WE,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const ZE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tI=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=t,m=KE(t,YE),{basename:g}=C.useContext(Hn),y,w=!1;if(typeof u=="string"&&eI.test(u)&&(y=u,ZE))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),_=yc(v.pathname,g);v.origin===h.origin&&_!=null?u=_+v.search+v.hash:w=!0}catch{}let k=OE(u,{relative:i}),p=nI(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function d(h){r&&r(h),h.defaultPrevented||p(h)}return C.createElement("a",eu({},m,{href:y||k,onClick:w||o?r:d,ref:n,target:l}))});var Cf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cf||(Cf={}));var Tf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Tf||(Tf={}));function nI(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Xi(),u=Js(),c=pg(e,{relative:s});return C.useCallback(f=>{if(qE(f,n)){f.preventDefault();let m=r!==void 0?r:Ss(u)===Ss(c);l(e,{replace:m,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,c,r,i,n,e,o,s,a])}var rI="firebase",iI="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(rI,iI,"app");const vg="@firebase/installations",_c="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=1e4,wg=`w:${_c}`,_g="FIS_v2",oI="https://firebaseinstallations.googleapis.com/v1",sI=60*60*1e3,aI="installations",lI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fn=new Wn(aI,lI,uI);function Sg(e){return e instanceof mt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg({projectId:e}){return`${oI}/projects/${e}/installations`}function Ig(e){return{token:e.token,requestStatus:2,expiresIn:dI(e.expiresIn),creationTime:Date.now()}}async function kg(e,t){const r=(await t.json()).error;return Fn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Cg({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function cI(e,{refreshToken:t}){const n=Cg(e);return n.append("Authorization",fI(t)),n}async function Tg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function dI(e){return Number(e.replace("s","000"))}function fI(e){return`${_g} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Eg(e),i=Cg(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:_g,appId:e.appId,sdkVersion:wg},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Tg(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Ig(u.authToken)}}else throw await kg("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=/^[cdef][\w-]{21}$/,tu="";function gI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=vI(e);return mI.test(n)?n:tu}catch{return tu}}function vI(e){return pI(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=new Map;function Ng(e,t){const n=Xs(e);Og(n,t),yI(n,t)}function Og(e,t){const n=Rg.get(e);if(n)for(const r of n)r(t)}function yI(e,t){const n=wI();n&&n.postMessage({key:e,fid:t}),_I()}let Tn=null;function wI(){return!Tn&&"BroadcastChannel"in self&&(Tn=new BroadcastChannel("[Firebase] FID Change"),Tn.onmessage=e=>{Og(e.data.key,e.data.fid)}),Tn}function _I(){Rg.size===0&&Tn&&(Tn.close(),Tn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="firebase-installations-database",EI=1,zn="firebase-installations-store";let Va=null;function Sc(){return Va||(Va=_m(SI,EI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(zn)}}})),Va}async function Is(e,t){const n=Xs(e),i=(await Sc()).transaction(zn,"readwrite"),o=i.objectStore(zn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Ng(e,t.fid),t}async function xg(e){const t=Xs(e),r=(await Sc()).transaction(zn,"readwrite");await r.objectStore(zn).delete(t),await r.done}async function Zs(e,t){const n=Xs(e),i=(await Sc()).transaction(zn,"readwrite"),o=i.objectStore(zn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Ng(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(e){let t;const n=await Zs(e.appConfig,r=>{const i=II(r),o=kI(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===tu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function II(e){const t=e||{fid:gI(),registrationStatus:0};return Ag(t)}function kI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Fn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=CI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:TI(e)}:{installationEntry:t}}async function CI(e,t){try{const n=await hI(e,t);return Is(e.appConfig,n)}catch(n){throw Sg(n)&&n.customData.serverCode===409?await xg(e.appConfig):await Is(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function TI(e){let t=await Pf(e.appConfig);for(;t.registrationStatus===1;)await Pg(100),t=await Pf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ec(e);return r||n}return t}function Pf(e){return Zs(e,t=>{if(!t)throw Fn.create("installation-not-found");return Ag(t)})}function Ag(e){return PI(e)?{fid:e.fid,registrationStatus:0}:e}function PI(e){return e.registrationStatus===1&&e.registrationTime+yg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI({appConfig:e,heartbeatServiceProvider:t},n){const r=NI(e,n),i=cI(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:wg,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Tg(()=>fetch(r,a));if(l.ok){const u=await l.json();return Ig(u)}else throw await kg("Generate Auth Token",l)}function NI(e,{fid:t}){return`${Eg(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(e,t=!1){let n;const r=await Zs(e.appConfig,o=>{if(!Lg(o))throw Fn.create("not-registered");const s=o.authToken;if(!t&&AI(s))return o;if(s.requestStatus===1)return n=OI(e,t),o;{if(!navigator.onLine)throw Fn.create("app-offline");const a=bI(o);return n=xI(e,a),a}});return n?await n:r.authToken}async function OI(e,t){let n=await Rf(e.appConfig);for(;n.authToken.requestStatus===1;)await Pg(100),n=await Rf(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ic(e,t):r}function Rf(e){return Zs(e,t=>{if(!Lg(t))throw Fn.create("not-registered");const n=t.authToken;return DI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function xI(e,t){try{const n=await RI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Is(e.appConfig,r),n}catch(n){if(Sg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xg(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Is(e.appConfig,r)}throw n}}function Lg(e){return e!==void 0&&e.registrationStatus===2}function AI(e){return e.requestStatus===2&&!LI(e)}function LI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+sI}function bI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function DI(e){return e.requestStatus===1&&e.requestTime+yg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ec(t);return r?r.catch(console.error):Ic(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(e,t=!1){const n=e;return await jI(n),(await Ic(n,t)).token}async function jI(e){const{registrationPromise:t}=await Ec(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(e){if(!e||!e.options)throw Wa("App Configuration");if(!e.name)throw Wa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Wa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Wa(e){return Fn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="installations",FI="installations-internal",zI=e=>{const t=e.getProvider("app").getImmediate(),n=$I(t),r=Dr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},BI=e=>{const t=e.getProvider("app").getImmediate(),n=Dr(t,bg).getImmediate();return{getId:()=>MI(n),getToken:i=>UI(n,i)}};function VI(){Ot(new pt(bg,zI,"PUBLIC")),Ot(new pt(FI,BI,"PRIVATE"))}VI();ft(vg,_c);ft(vg,_c,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="analytics",WI="firebase_id",HI="origin",KI=60*1e3,GI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new sc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new Wn("analytics","Analytics",qI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(e){if(!e.startsWith(kc)){const t=Me.create("invalid-gtag-resource",{gtagURL:e});return Pe.warn(t.message),""}return e}function Dg(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function QI(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function JI(e,t){const n=QI("firebase-js-sdk-policy",{createScriptURL:YI}),r=document.createElement("script"),i=`${kc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function XI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ZI(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Dg(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Pe.error(a)}e("config",i,o)}async function ek(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Dg(n);for(const l of s){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)o.push(c);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Pe.error(o)}}function tk(e,t,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await ek(e,t,n,a,l)}else if(o==="config"){const[a,l]=s;await ZI(e,t,n,r,a,l)}else if(o==="consent"){const[a,l]=s;e("consent",a,l)}else if(o==="get"){const[a,l,u]=s;e("get",a,l,u)}else if(o==="set"){const[a]=s;e("set",a)}else e(o,...s)}catch(a){Pe.error(a)}}return i}function nk(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=tk(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function rk(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(kc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=30,ok=1e3;class sk{constructor(t={},n=ok){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Mg=new sk;function ak(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function lk(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:ak(r)},o=GI.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function uk(e,t=Mg,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Me.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Me.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new fk;return setTimeout(async()=>{a.abort()},KI),Ug({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Ug(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Mg){var o;const{appId:s,measurementId:a}=e;try{await ck(r,t)}catch(l){if(a)return Pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await lk(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!dk(u)){if(i.deleteThrottleMetadata(s),a)return Pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const c=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Wd(n,i.intervalMillis,ik):Wd(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(s,f),Pe.debug(`Calling attemptFetch again in ${c} millis`),Ug(e,f,r,i)}}function ck(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Me.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function dk(e){if(!(e instanceof mt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class fk{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function hk(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(){if(gm())try{await vm()}catch(e){return Pe.warn(Me.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Pe.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mk(e,t,n,r,i,o,s){var a;const l=uk(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Pe.error(g)),t.push(l);const u=pk().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);rk(o)||JI(o,c.measurementId),i("js",new Date);const m=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return m[HI]="firebase",m.update=!0,f!=null&&(m[WI]=f),i("config",c.measurementId,m),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(t){this.app=t}_delete(){return delete mi[this.app.options.appId],Promise.resolve()}}let mi={},Nf=[];const Of={};let Ha="dataLayer",vk="gtag",xf,jg,Af=!1;function yk(){const e=[];if(mm()&&e.push("This is a browser extension environment."),rw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Me.create("invalid-analytics-context",{errorInfo:t});Pe.warn(n.message)}}function wk(e,t,n){yk();const r=e.options.appId;if(!r)throw Me.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(mi[r]!=null)throw Me.create("already-exists",{id:r});if(!Af){XI(Ha);const{wrappedGtag:o,gtagCore:s}=nk(mi,Nf,Of,Ha,vk);jg=o,xf=s,Af=!0}return mi[r]=mk(e,Nf,Of,t,xf,Ha,n),new gk(e)}function _k(e=Em()){e=Fe(e);const t=Dr(e,ks);return t.isInitialized()?t.getImmediate():Sk(e)}function Sk(e,t={}){const n=Dr(e,ks);if(n.isInitialized()){const i=n.getImmediate();if(bi(t,n.getOptions()))return i;throw Me.create("already-initialized")}return n.initialize({options:t})}function Ek(e,t,n,r){e=Fe(e),hk(jg,mi[e.app.options.appId],t,n,r).catch(i=>Pe.error(i))}const Lf="@firebase/analytics",bf="0.10.4";function Ik(){Ot(new pt(ks,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return wk(r,i,n)},"PUBLIC")),Ot(new pt("analytics-internal",e,"PRIVATE")),ft(Lf,bf),ft(Lf,bf,"esm2017");function e(t){try{const n=t.getProvider(ks).getImmediate();return{logEvent:(r,i,o)=>Ek(n,r,i,o)}}catch(n){throw Me.create("interop-component-reg-failed",{reason:n})}}}Ik();const kk={apiKey:"AIzaSyDqpfWhilaFbIMCvM3XMPj8O1oyW5PeRqQ",authDomain:"fbgogo-2bc40.firebaseapp.com",projectId:"fbgogo-2bc40",storageBucket:"fbgogo-2bc40.appspot.com",messagingSenderId:"1048124884912",appId:"1:1048124884912:web:921a05c18e83a11d697875",measurementId:"G-YVQ662H1DT"},Ck=Sm(kk);_k(Ck);const On=nE();On.languageCode="ko";var H="-ms-",gi="-moz-",j="-webkit-",$g="comm",ea="rule",Cc="decl",Tk="@import",Fg="@keyframes",Pk="@layer",zg=Math.abs,Tc=String.fromCharCode,nu=Object.assign;function Rk(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function Bg(e){return e.trim()}function yt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function Fo(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function Tr(e,t,n){return e.slice(t,n)}function lt(e){return e.length}function Vg(e){return e.length}function ri(e,t){return t.push(e),e}function Nk(e,t){return e.map(t).join("")}function Df(e,t){return e.filter(function(n){return!yt(n,t)})}var ta=1,Pr=1,Wg=0,qe=0,ee=0,jr="";function na(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ta,column:Pr,length:s,return:"",siblings:a}}function jt(e,t){return nu(na("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qn(e){for(;e.root;)e=jt(e.root,{children:[e]});ri(e,e.siblings)}function Ok(){return ee}function xk(){return ee=qe>0?se(jr,--qe):0,Pr--,ee===10&&(Pr=1,ta--),ee}function rt(){return ee=qe<Wg?se(jr,qe++):0,Pr++,ee===10&&(Pr=1,ta++),ee}function xn(){return se(jr,qe)}function zo(){return qe}function ra(e,t){return Tr(jr,e,t)}function ru(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ak(e){return ta=Pr=1,Wg=lt(jr=e),qe=0,[]}function Lk(e){return jr="",e}function Ka(e){return Bg(ra(qe-1,iu(e===91?e+2:e===40?e+1:e)))}function bk(e){for(;(ee=xn())&&ee<33;)rt();return ru(e)>2||ru(ee)>3?"":" "}function Dk(e,t){for(;--t&&rt()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return ra(e,zo()+(t<6&&xn()==32&&rt()==32))}function iu(e){for(;rt();)switch(ee){case e:return qe;case 34:case 39:e!==34&&e!==39&&iu(ee);break;case 40:e===41&&iu(e);break;case 92:rt();break}return qe}function Mk(e,t){for(;rt()&&e+ee!==57;)if(e+ee===84&&xn()===47)break;return"/*"+ra(t,qe-1)+"*"+Tc(e===47?e:rt())}function Uk(e){for(;!ru(xn());)rt();return ra(e,qe)}function jk(e){return Lk(Bo("",null,null,null,[""],e=Ak(e),0,[0],e))}function Bo(e,t,n,r,i,o,s,a,l){for(var u=0,c=0,f=s,m=0,g=0,y=0,w=1,k=1,p=1,d=0,h="",v=i,_=o,I=r,S=h;k;)switch(y=d,d=rt()){case 40:if(y!=108&&se(S,f-1)==58){Fo(S+=L(Ka(d),"&","&\f"),"&\f",zg(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Ka(d);break;case 9:case 10:case 13:case 32:S+=bk(y);break;case 92:S+=Dk(zo()-1,7);continue;case 47:switch(xn()){case 42:case 47:ri($k(Mk(rt(),zo()),t,n,l),l);break;default:S+="/"}break;case 123*w:a[u++]=lt(S)*p;case 125*w:case 59:case 0:switch(d){case 0:case 125:k=0;case 59+c:p==-1&&(S=L(S,/\f/g,"")),g>0&&lt(S)-f&&ri(g>32?Uf(S+";",r,n,f-1,l):Uf(L(S," ","")+";",r,n,f-2,l),l);break;case 59:S+=";";default:if(ri(I=Mf(S,t,n,u,c,i,a,h,v=[],_=[],f,o),o),d===123)if(c===0)Bo(S,t,I,I,v,o,f,a,_);else switch(m===99&&se(S,3)===110?100:m){case 100:case 108:case 109:case 115:Bo(e,I,I,r&&ri(Mf(e,I,I,0,0,i,a,h,i,v=[],f,_),_),i,_,f,a,r?v:_);break;default:Bo(S,I,I,I,[""],_,0,a,_)}}u=c=g=0,w=p=1,h=S="",f=s;break;case 58:f=1+lt(S),g=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&xk()==125)continue}switch(S+=Tc(d),d*w){case 38:p=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(lt(S)-1)*p,p=1;break;case 64:xn()===45&&(S+=Ka(rt())),m=xn(),c=f=lt(h=S+=Uk(zo())),d++;break;case 45:y===45&&lt(S)==2&&(w=0)}}return o}function Mf(e,t,n,r,i,o,s,a,l,u,c,f){for(var m=i-1,g=i===0?o:[""],y=Vg(g),w=0,k=0,p=0;w<r;++w)for(var d=0,h=Tr(e,m+1,m=zg(k=s[w])),v=e;d<y;++d)(v=Bg(k>0?g[d]+" "+h:L(h,/&\f/g,g[d])))&&(l[p++]=v);return na(e,t,n,i===0?ea:a,l,u,c,f)}function $k(e,t,n,r){return na(e,t,n,$g,Tc(Ok()),Tr(e,2,-2),0,r)}function Uf(e,t,n,r,i){return na(e,t,n,Cc,Tr(e,0,r),Tr(e,r+1,-1),r,i)}function Hg(e,t,n){switch(Rk(e,t)){case 5103:return j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 4789:return gi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+gi+e+H+e+e;case 5936:switch(se(e,t+11)){case 114:return j+e+H+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return j+e+H+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return j+e+H+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return j+e+H+e+e;case 6165:return j+e+H+"flex-"+e+e;case 5187:return j+e+L(e,/(\w+).+(:[^]+)/,j+"box-$1$2"+H+"flex-$1$2")+e;case 5443:return j+e+H+"flex-item-"+L(e,/flex-|-self/g,"")+(yt(e,/flex-|baseline/)?"":H+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return j+e+H+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return j+e+H+L(e,"shrink","negative")+e;case 5292:return j+e+H+L(e,"basis","preferred-size")+e;case 6060:return j+"box-"+L(e,"-grow","")+j+e+H+L(e,"grow","positive")+e;case 4554:return j+L(e,/([^-])(transform)/g,"$1"+j+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+H+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+e+e;case 4200:if(!yt(e,/flex-|baseline/))return H+"grid-column-align"+Tr(e,t)+e;break;case 2592:case 3360:return H+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,yt(r.props,/grid-\w+-end/)})?~Fo(e+(n=n[t].value),"span",0)?e:H+L(e,"-start","")+e+H+"grid-row-span:"+(~Fo(n,"span",0)?yt(n,/\d+/):+yt(n,/\d+/)-+yt(e,/\d+/))+";":H+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return yt(r.props,/grid-\w+-start/)})?e:H+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lt(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+gi+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Fo(e,"stretch",0)?Hg(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return H+i+":"+o+u+(s?H+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(se(e,t+6)===121)return L(e,":",":"+j)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+j+(se(e,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+H+"$2box$3")+e;case 100:return L(e,":",":"+H)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Cs(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Fk(e,t,n,r){switch(e.type){case Pk:if(e.children.length)break;case Tk:case Cc:return e.return=e.return||e.value;case $g:return"";case Fg:return e.return=e.value+"{"+Cs(e.children,r)+"}";case ea:if(!lt(e.value=e.props.join(",")))return""}return lt(n=Cs(e.children,r))?e.return=e.value+"{"+n+"}":""}function zk(e){var t=Vg(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Bk(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vk(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Cc:e.return=Hg(e.value,e.length,n);return;case Fg:return Cs([jt(e,{value:L(e.value,"@","@"+j)})],r);case ea:if(e.length)return Nk(n=e.props,function(i){switch(yt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(jt(e,{props:[L(i,/:(read-\w+)/,":"+gi+"$1")]})),qn(jt(e,{props:[i]})),nu(e,{props:Df(n,r)});break;case"::placeholder":qn(jt(e,{props:[L(i,/:(plac\w+)/,":"+j+"input-$1")]})),qn(jt(e,{props:[L(i,/:(plac\w+)/,":"+gi+"$1")]})),qn(jt(e,{props:[L(i,/:(plac\w+)/,H+"input-$1")]})),qn(jt(e,{props:[i]})),nu(e,{props:Df(n,r)});break}return""})}}var Wk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xe={},Rr=typeof process<"u"&&xe!==void 0&&(xe.REACT_APP_SC_ATTR||xe.SC_ATTR)||"data-styled",Kg="active",Gg="data-styled-version",ia="6.1.11",Pc=`/*!sc*/
`,Rc=typeof window<"u"&&"HTMLElement"in window,Hk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xe!==void 0&&xe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xe.REACT_APP_SC_DISABLE_SPEEDY!==""?xe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xe!==void 0&&xe.SC_DISABLE_SPEEDY!==void 0&&xe.SC_DISABLE_SPEEDY!==""&&xe.SC_DISABLE_SPEEDY!=="false"&&xe.SC_DISABLE_SPEEDY),Kk={},oa=Object.freeze([]),Nr=Object.freeze({});function qg(e,t,n){return n===void 0&&(n=Nr),e.theme!==n.theme&&e.theme||t||n.theme}var Yg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qk=/(^-|-$)/g;function jf(e){return e.replace(Gk,"-").replace(qk,"")}var Yk=/(a)(d)/gi,Eo=52,$f=function(e){return String.fromCharCode(e+(e>25?39:97))};function ou(e){var t,n="";for(t=Math.abs(e);t>Eo;t=t/Eo|0)n=$f(t%Eo)+n;return($f(t%Eo)+n).replace(Yk,"$1-$2")}var Ga,Qg=5381,lr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jg=function(e){return lr(Qg,e)};function Xg(e){return ou(Jg(e)>>>0)}function Qk(e){return e.displayName||e.name||"Component"}function qa(e){return typeof e=="string"&&!0}var Zg=typeof Symbol=="function"&&Symbol.for,ev=Zg?Symbol.for("react.memo"):60115,Jk=Zg?Symbol.for("react.forward_ref"):60112,Xk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eC=((Ga={})[Jk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ga[ev]=tv,Ga);function Ff(e){return("type"in(t=e)&&t.type.$$typeof)===ev?tv:"$$typeof"in e?eC[e.$$typeof]:Xk;var t}var tC=Object.defineProperty,nC=Object.getOwnPropertyNames,zf=Object.getOwnPropertySymbols,rC=Object.getOwnPropertyDescriptor,iC=Object.getPrototypeOf,Bf=Object.prototype;function nv(e,t,n){if(typeof t!="string"){if(Bf){var r=iC(t);r&&r!==Bf&&nv(e,r,n)}var i=nC(t);zf&&(i=i.concat(zf(t)));for(var o=Ff(e),s=Ff(t),a=0;a<i.length;++a){var l=i[a];if(!(l in Zk||n&&n[l]||s&&l in s||o&&l in o)){var u=rC(t,l);try{tC(e,l,u)}catch{}}}}return e}function Or(e){return typeof e=="function"}function Nc(e){return typeof e=="object"&&"styledComponentId"in e}function Pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function su(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function au(e,t,n){if(n===void 0&&(n=!1),!n&&!Fi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=au(e[r],t[r]);else if(Fi(t))for(var r in t)e[r]=au(e[r],t[r]);return e}function Oc(e,t){Object.defineProperty(e,"toString",{value:t})}function Zi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var oC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Zi(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Pc);return n},e}(),Vo=new Map,Ts=new Map,Wo=1,Io=function(e){if(Vo.has(e))return Vo.get(e);for(;Ts.has(Wo);)Wo++;var t=Wo++;return Vo.set(e,t),Ts.set(t,e),t},sC=function(e,t){Wo=t+1,Vo.set(e,t),Ts.set(t,e)},aC="style[".concat(Rr,"][").concat(Gg,'="').concat(ia,'"]'),lC=new RegExp("^".concat(Rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),uC=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},cC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Pc),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(lC);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(sC(c,u),uC(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function dC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var rv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Rr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Rr,Kg),r.setAttribute(Gg,ia);var s=dC();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},fC=function(){function e(t){this.element=rv(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Zi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),hC=function(){function e(t){this.element=rv(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),pC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Vf=Rc,mC={isServer:!Rc,useCSSOMInjection:!Hk},Ps=function(){function e(t,n,r){t===void 0&&(t=Nr),n===void 0&&(n={});var i=this;this.options=me(me({},mC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Rc&&Vf&&(Vf=!1,function(o){for(var s=document.querySelectorAll(aC),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Rr)!==Kg&&(cC(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Oc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(f){var m=function(p){return Ts.get(p)}(f);if(m===void 0)return"continue";var g=o.names.get(m),y=s.getGroup(f);if(g===void 0||y.length===0)return"continue";var w="".concat(Rr,".g").concat(f,'[id="').concat(m,'"]'),k="";g!==void 0&&g.forEach(function(p){p.length>0&&(k+="".concat(p,","))}),l+="".concat(y).concat(w,'{content:"').concat(k,'"}').concat(Pc)},c=0;c<a;c++)u(c);return l}(i)})}return e.registerId=function(t){return Io(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(me(me({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new pC(i):r?new fC(i):new hC(i)}(this.options),new oC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Io(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Io(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Io(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),gC=/&/g,vC=/^\s*\/\/.*$/gm;function iv(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=iv(n.children,t)),n})}function yC(e){var t,n,r,i=Nr,o=i.options,s=o===void 0?Nr:o,a=i.plugins,l=a===void 0?oa:a,u=function(m,g,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},c=l.slice();c.push(function(m){m.type===ea&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(gC,n).replace(r,u))}),s.prefix&&c.push(Vk),c.push(Fk);var f=function(m,g,y,w){g===void 0&&(g=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var k=m.replace(vC,""),p=jk(y||g?"".concat(y," ").concat(g," { ").concat(k," }"):k);s.namespace&&(p=iv(p,s.namespace));var d=[];return Cs(p,zk(c.concat(Bk(function(h){return d.push(h)})))),d};return f.hash=l.length?l.reduce(function(m,g){return g.name||Zi(15),lr(m,g.name)},Qg).toString():"",f}var wC=new Ps,lu=yC(),ov=ae.createContext({shouldForwardProp:void 0,styleSheet:wC,stylis:lu});ov.Consumer;ae.createContext(void 0);function uu(){return C.useContext(ov)}var _C=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=lu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Oc(this,function(){throw Zi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=lu),this.name+t.hash},e}(),SC=function(e){return e>="A"&&e<="Z"};function Wf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;SC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var sv=function(e){return e==null||e===!1||e===""},av=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!sv(o)&&(Array.isArray(o)&&o.isCss||Or(o)?r.push("".concat(Wf(i),":"),o,";"):Fi(o)?r.push.apply(r,Mi(Mi(["".concat(i," {")],av(o),!1),["}"],!1)):r.push("".concat(Wf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Wk||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ln(e,t,n,r){if(sv(e))return[];if(Nc(e))return[".".concat(e.styledComponentId)];if(Or(e)){if(!Or(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return ln(i,t,n,r)}var o;return e instanceof _C?n?(e.inject(n,r),[e.getName(r)]):[e]:Fi(e)?av(e):Array.isArray(e)?Array.prototype.concat.apply(oa,e.map(function(s){return ln(s,t,n,r)})):[e.toString()]}function lv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Or(n)&&!Nc(n))return!1}return!0}var EC=Jg(ia),IC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lv(t),this.componentId=n,this.baseHash=lr(EC,n),this.baseStyle=r,Ps.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Pn(i,this.staticRulesId);else{var o=su(ln(this.rules,t,n,r)),s=ou(lr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Pn(i,s),this.staticRulesId=s}else{for(var l=lr(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var m=su(ln(f,t,n,r));l=lr(l,m+c),u+=m}}if(u){var g=ou(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Pn(i,g)}}return i},e}(),xc=ae.createContext(void 0);xc.Consumer;var Ya={};function kC(e,t,n){var r=Nc(e),i=e,o=!qa(e),s=t.attrs,a=s===void 0?oa:s,l=t.componentId,u=l===void 0?function(v,_){var I=typeof v!="string"?"sc":jf(v);Ya[I]=(Ya[I]||0)+1;var S="".concat(I,"-").concat(Xg(ia+I+Ya[I]));return _?"".concat(_,"-").concat(S):S}(t.displayName,t.parentComponentId):l,c=t.displayName,f=c===void 0?function(v){return qa(v)?"styled.".concat(v):"Styled(".concat(Qk(v),")")}(e):c,m=t.displayName&&t.componentId?"".concat(jf(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;y=function(v,_){return w(v,_)&&k(v,_)}}else y=w}var p=new IC(n,m,r?i.componentStyle:void 0);function d(v,_){return function(I,S,O){var U=I.attrs,b=I.componentStyle,Ne=I.defaultProps,mn=I.foldedComponentIds,gn=I.styledComponentId,to=I.target,sa=ae.useContext(xc),$r=uu(),vn=I.shouldForwardProp||$r.shouldForwardProp,T=qg(S,sa,Ne)||Nr,x=function(bt,Oe,gt){for(var Fr,wn=me(me({},Oe),{className:void 0,theme:gt}),aa=0;aa<bt.length;aa+=1){var no=Or(Fr=bt[aa])?Fr(wn):Fr;for(var Dt in no)wn[Dt]=Dt==="className"?Pn(wn[Dt],no[Dt]):Dt==="style"?me(me({},wn[Dt]),no[Dt]):no[Dt]}return Oe.className&&(wn.className=Pn(wn.className,Oe.className)),wn}(U,S,T),A=x.as||to,F={};for(var z in x)x[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&x.theme===T||(z==="forwardedAs"?F.as=x.forwardedAs:vn&&!vn(z,A)||(F[z]=x[z]));var yn=function(bt,Oe){var gt=uu(),Fr=bt.generateAndInjectStyles(Oe,gt.styleSheet,gt.stylis);return Fr}(b,x),Ye=Pn(mn,gn);return yn&&(Ye+=" "+yn),x.className&&(Ye+=" "+x.className),F[qa(A)&&!Yg.has(A)?"class":"className"]=Ye,F.ref=O,C.createElement(A,F)}(h,v,_)}d.displayName=f;var h=ae.forwardRef(d);return h.attrs=g,h.componentStyle=p,h.displayName=f,h.shouldForwardProp=y,h.foldedComponentIds=r?Pn(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=m,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(_){for(var I=[],S=1;S<arguments.length;S++)I[S-1]=arguments[S];for(var O=0,U=I;O<U.length;O++)au(_,U[O],!0);return _}({},i.defaultProps,v):v}}),Oc(h,function(){return".".concat(h.styledComponentId)}),o&&nv(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Hf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Kf=function(e){return Object.assign(e,{isCss:!0})};function Ac(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Or(e)||Fi(e))return Kf(ln(Hf(oa,Mi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?ln(r):Kf(ln(Hf(r,t)))}function cu(e,t,n){if(n===void 0&&(n=Nr),!t)throw Zi(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Ac.apply(void 0,Mi([i],o,!1)))};return r.attrs=function(i){return cu(e,t,me(me({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return cu(e,t,me(me({},n),i))},r}var uv=function(e){return cu(kC,e)},eo=uv;Yg.forEach(function(e){eo[e]=uv(e)});var CC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=lv(t),Ps.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(su(ln(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ps.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function cv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ac.apply(void 0,Mi([e],t,!1)),i="sc-global-".concat(Xg(JSON.stringify(r))),o=new CC(r,i),s=function(l){var u=uu(),c=ae.useContext(xc),f=ae.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(f,l,u.styleSheet,c,u.stylis),ae.useLayoutEffect(function(){if(!u.styleSheet.server)return a(f,l,u.styleSheet,c,u.stylis),function(){return o.removeStyles(f,u.styleSheet)}},[f,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,f,m){if(o.isStatic)o.renderStyles(l,Kk,c,m);else{var g=me(me({},u),{theme:qg(u,f,s.defaultProps)});o.renderStyles(l,g,c,m)}}return ae.memo(s)}const TC=eo.div`
.inner{ 
    width:100%;
    .all{  display: flex;
        flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 90vh;
   }
   h1{text-align:center;}
    button{background: #000; color:#fff;
        width:60px;
        font-size:17px;
            height:30px; line-height:1.5;
            transition:0.2s;
            cursor: pointer;
        &:hover { border: none; background: #00B0FF; } 
    }
    
    .joinform{ 
        #phnumber , #code{width:145px; height:30px; margin-right:5px;}
        #email{width:195px; height:30px;}
        #password{width:179px; height:30px;}
        #name1 , #age{ width: 250px; height:30px;}
        .back{border-radius:20px;}
}
    h1{font-size:50px; font-weight:300; margin-bottom:30px;}
    p{margin-bottom:15px;}

    .btnok{
        button{ width:150px;margin-right: 5px; border-radius:8px;}
    }

}
`,PC=eo.div`
.inner{ 
    width:100%;
    .all{  display: flex;
    justify-content: center; // 왼오
    align-items: center; // 위아래
    height:90vh;
    }
    .loginform{   
        display:flex; 
        flex-direction:column;

    h1{font-size:50px; font-weight:300; margin-bottom:30px; text-align:center;}
    p{margin-bottom:15px;}

    .back{ background: #000; color:#fff; border: none; 
        width:60px; height:30px; text-align:center; font-size:17px;
            border-radius:20px; line-height:1;
            cursor: pointer;
        &:hover{ background: #00B0FF;}
    }

        .loginbtn{ width:357px; height:45px; font-size:20px;
            background: #000; color:#fff; cursor: pointer; border: none;
            transition:0.3s;
            &:hover{ background: #00B0FF;}
        }
    #email{width:350px; height:40px; margin-bottom:10px;}
    #password{width:350px; height:40px; margin-bottom:10px;}
    .gobtn{ width:65px; font-size:13px; background: #fff; border: none; 
    cursor: pointer; 
    margin-top:10px;
    &:hover{ color:#00B0FF;}
}
    }
}

`,RC=eo.div`
.inner{
    width:100%;
    .all{
        display:flex;
        flex-direction:column;
        height:90vh;
        align-items:center;
        justify-content:center;
    }
    h1{font-size:40px; font-weight:500; margin-bottom:50px;}
    button{ width:150px; height:30px; margin-bottom:10px;
        background: #000; color:#fff; border: none;
        transition:0.2s; cursor: pointer;
        &:hover{background: #00B0FF;}
    }
}

`,NC=eo.div`
.inner{
    width:100%;
    .all{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:90vh;
    }
    h1{font-size:40px;margin-bottom:30px;}
    p{font-size:25px; margin-bottom:30px;}
    button{background: #000; color:#fff;font-size:15px; border: none; 
        width:100px; height:30px; border-radius:8px; cursor: pointer;
        transition:0.2s;
        &:hover{background: #00B0FF;}
    }
}

`;var dv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Gf=ae.createContext&&ae.createContext(dv),OC=["attr","size","title"];function xC(e,t){if(e==null)return{};var n=AC(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function AC(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Rs(){return Rs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rs.apply(this,arguments)}function qf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ns(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qf(Object(n),!0).forEach(function(r){LC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function LC(e,t,n){return t=bC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bC(e){var t=DC(e,"string");return typeof t=="symbol"?t:t+""}function DC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fv(e){return e&&e.map((t,n)=>ae.createElement(t.tag,Ns({key:n},t.attr),fv(t.child)))}function MC(e){return t=>ae.createElement(UC,Rs({attr:Ns({},e.attr)},t),fv(e.child))}function UC(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=xC(e,OC),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ae.createElement("svg",Rs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Ns(Ns({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&ae.createElement("title",null,o),e.children)};return Gf!==void 0?ae.createElement(Gf.Consumer,null,n=>t(n)):t(dv)}function hv(e){return MC({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}const jC=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),i=Xi(),o=a=>{a.preventDefault(),S_(On,e,n).then(l=>{l.user,i("/good"),alert("로그인 되었습니다.")}).catch(l=>{alert("비밀번호 or 이메일 틀림"),l.code,l.message})},s=a=>{a.preventDefault(),i(-1)};return N.jsx(PC,{children:N.jsx("div",{className:"inner",children:N.jsx("div",{className:"all",children:N.jsxs("form",{onSubmit:o,className:"loginform",children:[N.jsx("button",{type:"button",onClick:s,className:"back",children:N.jsx(hv,{})}),N.jsx("h1",{children:"FIREBASE"}),N.jsx("input",{type:"email",placeholder:"이메일",value:e,id:"email",onChange:a=>t(a.target.value)}),N.jsx("input",{type:"password",placeholder:"비밀번호",value:n,id:"password",onChange:a=>r(a.target.value)}),N.jsx("button",{type:"submit",className:"loginbtn",children:"Firebase 로그인"}),N.jsx("button",{onClick:()=>i("/join"),className:"gobtn",children:"회원가입"})]})})})})},$C=()=>{const[e,t]=C.useState(""),[n,r]=C.useState(""),[i,o]=C.useState(""),[s,a]=C.useState(""),[l,u]=C.useState(""),[c,f]=C.useState(""),[m,g]=C.useState(!1),y=Xi(),w=()=>{window.recaptchaVerifier=new nS(On,"phnumber",{size:"invisible",callback:h=>{onSignInSubmit()}})},k=h=>{h.preventDefault(),w();const v=document.getElementById("phnumber").value,_=window.recaptchaVerifier;oS(On,"+82"+v,_).then(I=>{window.confirmationResult=I,alert("인증 코드 전송 완료")}).catch(I=>{console.log("error"),alert("인증 코드 오류")})},p=h=>{if(h.preventDefault(),!window.confirmationResult){alert("인증 코드를 먼저 전송하세요");return}window.confirmationResult.confirm(c).then(v=>{alert("인증 완료"),g(!0)}).catch(v=>{alert("인증 코드가 유효하지 않습니다.")})},d=h=>{if(h.preventDefault(),s.length<6){alert("비밀번호는 6자리 이상이여야 합니다.");return}if(!m){alert("핸드폰 인증 해주세요.");return}__(On,e,s).then(v=>{const _=v.user;I_(_,{displayName:n,photoURL:i}).then(()=>{alert("회원가입이 완료되었습니다."),y("/")})}).catch(v=>{v.code,v.message})};return N.jsx(TC,{children:N.jsx("div",{className:"inner",children:N.jsx("div",{className:"all",children:N.jsxs("form",{onSubmit:d,className:"joinform",children:[N.jsx("button",{onClick:()=>y(-1),className:"back",children:N.jsx(hv,{})}),N.jsx("h1",{children:"회원가입"}),N.jsxs("p",{children:["이름 : ",N.jsx("input",{type:"text",placeholder:"홍길동",value:n,onChange:h=>r(h.target.value),id:"name1",required:!0})]}),N.jsxs("p",{children:["나이 : ",N.jsx("input",{type:"text",placeholder:"25",value:i,onChange:h=>o(h.target.value),id:"age",required:!0})]}),N.jsxs("p",{children:["이메일 입력 : ",N.jsx("input",{type:"email",placeholder:"aaa@naver.com",value:e,id:"email",onChange:h=>t(h.target.value),required:!0})]}),N.jsxs("p",{children:["비밀번호 입력 : ",N.jsx("input",{type:"password",placeholder:"*********",value:s,id:"password",onChange:h=>a(h.target.value),required:!0})]}),N.jsxs("p",{children:["번호 입력 : ",N.jsx("input",{type:"text",id:"phnumber",placeholder:"핸드폰번호 입력",value:l,onChange:h=>u(h.target.value),required:!0}),N.jsx("button",{onClick:k,children:"전송"})," "]}),N.jsxs("p",{children:["인증 번호 : ",N.jsx("input",{type:"text",placeholder:"인증코드 입력",onChange:h=>f(h.target.value),id:"code"}),N.jsxs("button",{onClick:p,children:[" ",m?"✔️":"확인"]})]}),N.jsxs("div",{className:"btnok",children:[N.jsx("button",{type:"submit",children:"확인"}),N.jsx("button",{onClick:()=>y("/"),children:"취소"})]})]})})})})},FC=()=>{const[e,t]=C.useState(""),n=Xi();C.useEffect(()=>{const i=T_(On,o=>{t(o?o.displayName:"")});return()=>i},[]);const r=async()=>{try{await P_(On),alert("로그아웃되었습니다."),n("/")}catch{console.error("error")}};return N.jsx(NC,{children:N.jsx("div",{className:"inner",children:N.jsxs("div",{className:"all",children:[N.jsx("h1",{children:"환영합니다 !"}),N.jsxs("p",{children:[e," 님"]}),N.jsx("button",{onClick:r,children:"로그아웃"})]})})})},zC=()=>{const e=Xi();return N.jsx(RC,{children:N.jsx("div",{className:"inner",children:N.jsxs("div",{className:"all",children:[N.jsx("h1",{children:"Firebase 연습 화면"}),N.jsx(tI,{to:"/login",children:N.jsx("button",{children:"로그인"})}),N.jsx("button",{onClick:()=>e("/join"),children:"회원가입"})]})})})};var pv=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},mv=Ac(Yf||(Yf=pv([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));cv(Qf||(Qf=pv(["",""],["",""])),mv);var Yf,Qf;const BC=cv`
    ${mv}

    body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;
    color:#333;
  }
  a {
    text-decoration: none;
    color:#333; 
  }

    .inner { width:1400px; margin:auto; box-sizing:border-box; position: relative;
    }

`;function VC(){return N.jsxs(N.Fragment,{children:[N.jsx(BC,{}),N.jsx(XE,{basename:"/firebase/",children:N.jsxs(HE,{children:[N.jsx(ni,{path:"/",element:N.jsx(zC,{})}),N.jsx(ni,{path:"/login",element:N.jsx(jC,{})}),N.jsx(ni,{path:"/join",element:N.jsx($C,{})}),N.jsx(ni,{path:"/good",element:N.jsx(FC,{})})]})})]})}Qa.createRoot(document.getElementById("root")).render(N.jsx(ae.StrictMode,{children:N.jsx(VC,{})}));
