import{u as f,r as w,d as x,o as t,c as a,e as T,b as c,a as h,f as r,F as p,g as d,n as C}from"./index-777c7f63.js";import L from"./ButtonAnswer-fb611b14.js";import b from"./CheckboxAnswer-355ef806.js";import y from"./CheckboxImageAnswer-18a146f7.js";import v from"./ContentImages-372d07f3.js";import _ from"./ContentText-dcae0aba.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./answerCheckMark-ad851b66.js";import"./ModalImage-9988c375.js";const A={key:0,class:"left-side"},R={class:"content-answers"},$={key:0},B=["innerHTML"],S={key:1,class:"answers-checkboxes-list"},H={key:2,class:"answers-image-checkboxes-list"},M={key:3,class:"answers-buttons-list"},V=["innerHTML"],J={__name:"ContentAnswers",props:["componentData","testStyle"],emits:["action","chooseAction"],setup(n,{emit:D}){const e=n;f(o=>({"2137074a":m.value}));const m=w("");e.componentData.columns?m.value=`repeat(${e.componentData.columns}, minmax(0, 1fr))`:m.value="repeat(2, minmax(0, 1fr))";const g=x(()=>`<p>${e.componentData.legendText} <span style="color: ${e.componentData.legendTextColor};">${e.componentData.legendColoredText}</span>`),u=o=>{if(!e.componentData.isComplete)if(e.componentData.multiple)e.componentData.answersList[o].isChecked?e.componentData.answersList[o].isChecked=!1:e.componentData.answersList[o].isChecked=!0;else{for(let l=0;l<e.componentData.answersList.length;l++)e.componentData.answersList[l].isChecked=!1;e.componentData.answersList[o].isChecked=!0,e.componentData.answersList[o].action.clickAction?D("action",e.componentData.answersList[o].action):D("chooseAction",e.componentData.answersList[o].action)}};return(o,l)=>(t(),a("div",{class:C({"multi-wrapper":n.componentData.imagesData!=null})},[n.componentData.imagesData!=null?(t(),a("div",A,[T(v,{componentData:n.componentData.imagesData},null,8,["componentData"])])):c("",!0),h("div",{class:C({"right-side":n.componentData.imagesData!=null})},[n.componentData.textData!=null?(t(),r(_,{key:0,componentData:n.componentData.textData,testStyle:e.testStyle},null,8,["componentData","testStyle"])):c("",!0),h("div",R,[e.componentData.hints?(t(),a("div",$,[h("div",{innerHTML:e.componentData.hintText,class:"answers-hint-text"},null,8,B)])):c("",!0),e.componentData.answersButtonType==="checkboxes"?(t(),a("ul",S,[(t(!0),a(p,null,d(e.componentData.answersList,(s,i)=>(t(),r(b,{key:i,answerText:s.answerText,isChecked:!!s.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!s.isRight,isRightAlt:!!s.isRightAlt,checkboxColor:n.componentData.legendTextColor,onClick:k=>u(i),class:"answers-checkboxes-list-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","onClick"]))),128))])):c("",!0),e.componentData.answersButtonType==="imageCheckboxes"?(t(),a("ul",H,[(t(!0),a(p,null,d(e.componentData.answersList,(s,i)=>(t(),r(y,{key:i,answerText:s.answerText,isChecked:!!s.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!s.isRight,isRightAlt:!!s.isRightAlt,checkboxColor:n.componentData.legendTextColor,imageURL:s.image.imageURL,onClick:k=>u(i),class:"answers-checkboxeslist-image-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","imageURL","onClick"]))),128))])):c("",!0),e.componentData.answersButtonType==="buttons"?(t(),a("div",M,[(t(!0),a(p,null,d(e.componentData.answersList,(s,i)=>(t(),r(L,{answerText:s.answerText,isChecked:!!s.isChecked,onClick:k=>u(i),class:"answers-buttons-list-iiem"},null,8,["answerText","isChecked","onClick"]))),256))])):c("",!0),n.componentData.showLegend?(t(),a("div",{key:4,innerHTML:g.value,class:"answers-legend"},null,8,V)):c("",!0)])],2)],2))}};export{J as default};
