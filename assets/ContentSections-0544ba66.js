import{o as e,c as n,F as m,r as u,a as s,t as p}from"./index-b3cc15ff.js";const d={class:"content-sections"},g=["onClick"],v={class:"section-image-container"},h=["src"],C={class:"section-text-container"},x={__name:"ContentSections",props:["componentData"],emits:["action"],setup(i,{emit:r}){const o=i,_=(c,a)=>{o.componentData.sectionsList[a].isComplete=!0,r("action",c)};return(c,a)=>(e(),n("div",d,[(e(!0),n(m,null,u(o.componentData.sectionsList,(t,l)=>(e(),n("div",{class:"section-button",onClick:k=>_(t.action,l)},[s("div",v,[s("img",{src:t.image.imageURL,alt:"section",class:"section-button-image"},null,8,h)]),s("div",C,p(t.buttonName),1)],8,g))),256))]))}};export{x as default};
