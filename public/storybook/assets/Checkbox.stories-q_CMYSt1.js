import{j as d}from"./jsx-runtime-B4YVSejH.js";import"./index-DrAYhtg2.js";const A=({checked:n=!1,onChange:t,label:l,disabled:i=!1,className:D="",id:_})=>{const w=U=>{t==null||t(U.target.checked)},p=_||`checkbox-${Math.random().toString(36).substr(2,9)}`;return d.jsxs("div",{className:`ui-checkbox-container ${i?"disabled":""} ${D}`,children:[d.jsx("input",{type:"checkbox",id:p,className:"ui-checkbox",checked:n,onChange:w,disabled:i,"aria-checked":n}),l&&d.jsx("label",{htmlFor:p,className:"ui-checkbox-label",children:l})]})};A.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"UI/Checkbox",component:A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},e={args:{label:"Accept terms and conditions",checked:!1}},a={args:{label:"Accept terms and conditions",checked:!0}},s={args:{label:"This checkbox is disabled",disabled:!0,checked:!1}},c={args:{label:"This checkbox is disabled and checked",disabled:!0,checked:!0}},r={args:{checked:!1}},o={args:{label:"I agree to the terms and conditions, privacy policy, and all other legal documents associated with this service",checked:!1}};var u,m,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    checked: false
  }
}`,...(h=(m=e.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,k,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    checked: true
  }
}`,...(g=(k=a.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var f,x,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'This checkbox is disabled',
    disabled: true,
    checked: false
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,v,S;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'This checkbox is disabled and checked',
    disabled: true,
    checked: true
  }
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var q,C,L;r.parameters={...r.parameters,docs:{...(q=r.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(L=(C=r.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var j,I,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions, privacy policy, and all other legal documents associated with this service',
    checked: false
  }
}`,...(N=(I=o.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const W=["Unchecked","Checked","Disabled","DisabledChecked","WithoutLabel","LongLabel"];export{a as Checked,s as Disabled,c as DisabledChecked,o as LongLabel,e as Unchecked,r as WithoutLabel,W as __namedExportsOrder,E as default};
