import{i as c,o as n,c as i,a as o,e as m,j as r,k as _}from"./index-477cfabe.js";const d={class:"modal-image-container"},u=["src"],v={__name:"ModalImage",props:["imageURL"],emits:["closeModal"],setup(a,{emit:s}){const t=()=>{s("closeModal",!0)};return(p,e)=>{const l=c("el-button");return n(),i("div",{class:"modal-image-wrapper",onClick:e[0]||(e[0]=g=>t())},[o("div",d,[o("img",{src:a.imageURL,class:"modal-image"},null,8,u),m(l,{type:"info",class:"close-btn",icon:r(_),circle:""},null,8,["icon"])])])}}};export{v as default};
