import{r as N,a as l,o,c as k,F as D,e as S,f as u,w as s,b as n,g as v,z as U,k as p,y as F,A as G,B as I,C as P,x as _,D as z,T as A,G as E,d as Q}from"./index-a8cd6f86.js";import R from"./WarningParameters-0fb9b598.js";import j from"./ActionButton-622fa3b4.js";import"./ImageItem-cb98de51.js";import"./ActionItem-f55c767a.js";const q={class:"content-card-header"},H={key:0},X={__name:"ContentTransfers",props:["componentData"],setup(r){const t=r,c=N(t.componentData.transfersList.map(()=>!0)),C=()=>{t.componentData.transfersList.push({buttonName:"",image:{imageURL:"",label:""},action:{name:"moveToStep",internalId:0,checkQuestion:!1}}),c.value.push(!0)},g=e=>{if(e!==0){let i=t.componentData.transfersList[e];t.componentData.transfersList.splice(e,1),t.componentData.transfersList.splice(e-1,0,i)}},w=e=>{if(e!==t.componentData.transfersList.length-1){let i=t.componentData.transfersList[e];t.componentData.transfersList.splice(e,1),t.componentData.transfersList.splice(e+1,0,i)}},y=e=>{c.value[e]=!c.value[e]},L=e=>{t.componentData.transfersList.splice(e,1)};return(e,i)=>{const m=l("el-button"),b=l("el-card"),h=l("el-col"),T=l("el-row"),V=l("el-divider"),$=l("el-switch"),B=l("el-form-item");return o(),k(D,null,[(o(!0),k(D,null,S(t.componentData.transfersList,(d,a)=>(o(),u(E,{name:"transfers",key:a},{default:s(()=>[n(b,{"body-style":"padding: 0;"},{header:s(()=>[v("div",q,[v("span",null,"Переход "+U(a+1),1),v("div",null,[n(m,{type:"danger",icon:p(F),plain:"",onClick:f=>L(a)},null,8,["icon","onClick"]),n(m,{type:"success",icon:p(G),plain:"",onClick:f=>g(a)},null,8,["icon","onClick"]),n(m,{type:"success",icon:p(I),plain:"",onClick:f=>w(a)},null,8,["icon","onClick"]),c.value[a]===!0?(o(),u(m,{key:0,type:"primary",icon:p(P),plain:"",onClick:f=>y(a)},null,8,["icon","onClick"])):_("",!0),c.value[a]===!1?(o(),u(m,{key:1,type:"primary",icon:p(z),plain:"",onClick:f=>y(a)},null,8,["icon","onClick"])):_("",!0)])])]),default:s(()=>[n(A,{class:"content-card",name:"section"},{default:s(()=>[c.value[a]===!0?(o(),k("div",H,[n(j,{button:d},null,8,["button"])])):_("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),n(T,null,{default:s(()=>[n(h,{span:6},{default:s(()=>[n(m,{onClick:C,type:"success",round:""},{default:s(()=>[Q("+ Добавить переход")]),_:1})]),_:1})]),_:1}),n(V),r.componentData.warnings?(o(),u(B,{key:0,label:"Предупреждения:"},{default:s(()=>[n($,{modelValue:r.componentData.warnings,"onUpdate:modelValue":i[0]||(i[0]=d=>r.componentData.warnings=d)},null,8,["modelValue"])]),_:1})):_("",!0),r.componentData.warningParameters?(o(),u(R,{key:1,parameters:r.componentData.warningParameters},null,8,["parameters"])):_("",!0)],64)}}};export{X as default};
