import{u as w,r as f,d as x,o as t,c as a,e as T,b as c,a as h,f as r,F as p,g as D,n as C}from"./index-4815377c.js";import b from"./ButtonAnswer-315e292b.js";import L from"./CheckboxAnswer-d848e18a.js";import y from"./CheckboxImageAnswer-17d30841.js";import A from"./ContentImages-cc0fa92c.js";import v from"./ContentText-dde0fec3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./answerCheckMark-ad851b66.js";import"./ModalImage-a38437cc.js";const _={key:0,class:"left-side"},R={class:"content-answers"},$={key:0},B=["innerHTML"],S={key:1,class:"answers-checkboxes-list"},H={key:2,class:"answers-image-checkboxes-list"},I={key:3,class:"answers-buttons-list"},M=["innerHTML"],G={__name:"ContentAnswers",props:["componentData","testStyle"],emits:["action","chooseAction"],setup(n,{emit:d}){const e=n;w(o=>({"587affdb":m.value}));const m=f("");e.componentData.columns?m.value=`repeat(${e.componentData.columns}, minmax(0, 1fr))`:m.value="repeat(2, minmax(0, 1fr))";const g=x(()=>`<p>${e.componentData.legendText} <span style="color: ${e.componentData.legendTextColor};">${e.componentData.legendColoredText}</span>`),u=o=>{if(!e.componentData.isComplete)if(e.componentData.multiple)e.componentData.answersList[o].isChecked?e.componentData.answersList[o].isChecked=!1:e.componentData.answersList[o].isChecked=!0;else{for(let l=0;l<e.componentData.answersList.length;l++)e.componentData.answersList[l].isChecked=!1;e.componentData.answersList[o].isChecked=!0,e.componentData.answersList[o].action.clickAction?d("action",e.componentData.answersList[o].action):d("chooseAction",e.componentData.answersList[o].action)}};return(o,l)=>(t(),a("div",{class:C({"multi-wrapper":n.componentData.isAnswersWithImage})},[n.componentData.isAnswersWithImage?(t(),a("div",_,[T(A,{componentData:n.componentData.imagesData},null,8,["componentData"])])):c("",!0),h("div",{class:C({"right-side":n.componentData.isAnswersWithImage})},[n.componentData.textData!=null?(t(),r(v,{key:0,componentData:n.componentData.textData,testStyle:e.testStyle},null,8,["componentData","testStyle"])):c("",!0),h("div",R,[e.componentData.hints?(t(),a("div",$,[h("div",{innerHTML:e.componentData.hintText,class:"answers-hint-text"},null,8,B)])):c("",!0),e.componentData.answersButtonType==="checkboxes"?(t(),a("ul",S,[(t(!0),a(p,null,D(e.componentData.answersList,(s,i)=>(t(),r(L,{key:i,answerText:s.answerText,isChecked:!!s.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!s.isRight,isRightAlt:!!s.isRightAlt,checkboxColor:n.componentData.legendTextColor,onClick:k=>u(i),class:"answers-checkboxes-list-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","onClick"]))),128))])):c("",!0),e.componentData.answersButtonType==="imageCheckboxes"?(t(),a("ul",H,[(t(!0),a(p,null,D(e.componentData.answersList,(s,i)=>(t(),r(y,{key:i,answerText:s.answerText,isChecked:!!s.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!s.isRight,isRightAlt:!!s.isRightAlt,checkboxColor:n.componentData.legendTextColor,imageURL:s.image.imageURL,onClick:k=>u(i),class:"answers-checkboxeslist-image-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","imageURL","onClick"]))),128))])):c("",!0),e.componentData.answersButtonType==="buttons"?(t(),a("div",I,[(t(!0),a(p,null,D(e.componentData.answersList,(s,i)=>(t(),r(b,{answerText:s.answerText,isChecked:!!s.isChecked,onClick:k=>u(i),class:"answers-buttons-list-iiem"},null,8,["answerText","isChecked","onClick"]))),256))])):c("",!0),n.componentData.showLegend?(t(),a("div",{key:4,innerHTML:g.value,class:"answers-legend"},null,8,M)):c("",!0)])],2)],2))}};export{G as default};
