import{r as V,a as u,o as r,c as d,b as t,w as a,k as c,l as D,v as B,x as y,F as C}from"./index-a8cd6f86.js";import v from"./ImageItem-cb98de51.js";const w={key:0},U={__name:"СontentPercentInfo",props:["componentData"],emits:["deleteCombination"],setup(f,{emit:P}){const n=f,i=V(!1),_=()=>{i.value=!i.value},x={menubar:!1,plugins:"lists ",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | degButton | supButton | subButton | fontselect fontsizeselect forecolor",entity_encoding:"named",fontsize_formats:"8px 10px 12px 14px 18px 24px 36px",entities:"deg, sup, sub",setup:function(o){o.ui.registry.addButton("degButton",{text:"&deg",onAction:function(e){o.insertContent("&deg;")}}),o.ui.registry.addButton("supButton",{text:"Верх",onAction:function(e){o.insertContent("<sup>2</sup> ")}}),o.ui.registry.addButton("subButton",{text:"Низ",onAction:function(e){o.insertContent("<sub>2</sub> ")}})}};return(o,e)=>{const g=u("el-input"),m=u("el-col"),b=u("el-button"),s=u("el-form-item"),p=u("el-input-number");return r(),d(C,null,[t(s,{label:"Текст:"},{default:a(()=>[t(m,{span:22},{default:a(()=>[t(g,{modelValue:n.componentData.text,"onUpdate:modelValue":e[0]||(e[0]=l=>n.componentData.text=l),width:"30vw"},null,8,["modelValue"])]),_:1}),t(m,{span:2},{default:a(()=>[t(b,{type:"primary",icon:c(D),plain:"",onClick:_},null,8,["icon"])]),_:1})]),_:1}),t(m,{span:24},{default:a(()=>[i.value?(r(),d("div",w,[t(c(B),{width:"100%",init:x,"output-format":"html",modelValue:n.componentData.text,"onUpdate:modelValue":e[1]||(e[1]=l=>n.componentData.text=l),autosize:"",type:"textarea",placeholder:"Please input"},null,8,["modelValue"])])):y("",!0)]),_:1}),t(s,{label:"Первое значение:"},{default:a(()=>[t(p,{modelValue:n.componentData.firstPercent,"onUpdate:modelValue":e[2]||(e[2]=l=>n.componentData.firstPercent=l),min:1,max:100},null,8,["modelValue"])]),_:1}),t(s,{label:"Второе значение:"},{default:a(()=>[t(p,{modelValue:n.componentData.secondPercent,"onUpdate:modelValue":e[3]||(e[3]=l=>n.componentData.secondPercent=l),min:1,max:100},null,8,["modelValue"])]),_:1}),t(s,{label:"Картинка:"},{default:a(()=>[t(v,{imageData:n.componentData.image},null,8,["imageData"])]),_:1})],64)}}};export{U as default};
