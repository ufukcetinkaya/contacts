import{r as d,j as e}from"./jsx-runtime-56DGgGmo.js";import{q as p,t as j,v as f,w as g,_ as y,u as S,x as w,y as v,M as N,L as k,F as u,N as L,O as b,S as M}from"./components-rn3DVdx0.js";/**
 * @remix-run/react v2.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let m="positions";function q({getKey:i,...r}){let{isSpaMode:a}=p(),l=j(),n=f();g({getKey:i,storageKey:m});let s=d.useMemo(()=>{if(!i)return null;let t=i(l,n);return t!==l.key?t:null},[]);if(a)return null;let o=((t,x)=>{if(!window.history.state||!window.history.state.key){let c=Math.random().toString(32).slice(2);window.history.replaceState({key:c},"")}try{let h=JSON.parse(sessionStorage.getItem(t)||"{}")[x||window.history.state.key];typeof h=="number"&&window.scrollTo(0,h)}catch(c){console.error(c),sessionStorage.removeItem(t)}}).toString();return d.createElement("script",y({},r,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${o})(${JSON.stringify(m)}, ${JSON.stringify(s)})`}}))}const E="/assets/app-BFkgwlLe.css",I=()=>[{rel:"stylesheet",href:E}];function O(){const{contacts:i,q:r}=S(),a=w(),l=v(),n=a.location&&new URLSearchParams(a.location.search).has("q");return d.useEffect(()=>{const s=document.getElementById("q");s instanceof HTMLInputElement&&(s.value=r||"")},[r]),e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(N,{}),e.jsx(k,{})]}),e.jsxs("body",{children:[e.jsxs("div",{id:"sidebar",children:[e.jsx("h1",{children:"Remix Contacts"}),e.jsxs("div",{children:[e.jsxs(u,{id:"search-form",onChange:s=>{const o=r===null;l(s.currentTarget,{replace:!o})},role:"search",children:[e.jsx("input",{id:"q","aria-label":"Search contacts",className:n?"loading":"",defaultValue:r||"",placeholder:"Search",type:"search",name:"q"}),e.jsx("div",{id:"search-spinner","aria-hidden":!0,hidden:!n})]}),e.jsx(u,{method:"post",children:e.jsx("button",{type:"submit",children:"New"})})]}),e.jsx("nav",{children:i.length?e.jsx("ul",{children:i.map(s=>e.jsx("li",{children:e.jsxs(L,{className:({isActive:o,isPending:t})=>o?"active":t?"pending":"",to:`contacts/${s.id}`,children:[s.first||s.last?e.jsxs(e.Fragment,{children:[s.first," ",s.last]}):e.jsx("i",{children:"No Name"})," ",s.favorite?e.jsx("span",{children:"★"}):null]})},s.id))}):e.jsx("p",{children:e.jsx("i",{children:"No contacts"})})})]}),e.jsx("div",{className:a.state==="loading"&&!n?"loading":"",id:"detail",children:e.jsx(b,{})}),e.jsx(q,{}),e.jsx(M,{})]})]})}export{O as default,I as links};
