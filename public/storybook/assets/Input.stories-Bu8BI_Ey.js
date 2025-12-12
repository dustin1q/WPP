import{j as r}from"./jsx-runtime-BxWfoq_t.js";import"./index-Dv7uYCMj.js";import"./_commonjsHelpers-CqkleIqs.js";const _=({label:u,error:e,onChange:p,className:$="",type:V="text",disabled:L=!1,...a})=>{const O=C=>{p==null||p(C.target.value)};return r.jsxs("div",{className:"ui-input-container",children:[u&&r.jsx("label",{className:"ui-input-label",htmlFor:a.id,children:u}),r.jsx("input",{...a,type:V,disabled:L,className:`ui-input ${e?"error":""} ${$}`,onChange:O,"aria-invalid":e?"true":"false","aria-describedby":e?`${a.id}-error`:void 0}),e&&r.jsx("span",{className:"ui-input-error",id:`${a.id}-error`,role:"alert",children:e})]})};_.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1},type:{defaultValue:{value:"'text'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const k={title:"UI/Input",component:_,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url"]},disabled:{control:"boolean"}}},t={args:{type:"text",placeholder:"Enter text...",label:"Text Input",id:"text-input"}},s={args:{type:"email",placeholder:"Enter your email...",label:"Email Address",id:"email-input"}},l={args:{type:"password",placeholder:"Enter password...",label:"Password",id:"password-input"}},n={args:{type:"number",placeholder:"Enter a number...",label:"Number Input",id:"number-input"}},i={args:{type:"email",placeholder:"Enter your email...",label:"Email Address",id:"email-error",error:"Please enter a valid email address",value:"invalid-email"}},o={args:{type:"text",placeholder:"This input is disabled",label:"Disabled Input",id:"disabled-input",disabled:!0,value:"Cannot edit this"}},d={args:{type:"text",placeholder:"Input without label...",id:"no-label-input"}};var c,m,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    label: 'Text Input',
    id: 'text-input'
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,h,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter your email...',
    label: 'Email Address',
    id: 'email-input'
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,E,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    label: 'Password',
    id: 'password-input'
  }
}`,...(f=(E=l.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var v,w,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: 'Enter a number...',
    label: 'Number Input',
    id: 'number-input'
  }
}`,...(I=(w=n.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var N,T,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter your email...',
    label: 'Email Address',
    id: 'email-error',
    error: 'Please enter a valid email address',
    value: 'invalid-email'
  }
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var j,q,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'This input is disabled',
    label: 'Disabled Input',
    id: 'disabled-input',
    disabled: true,
    value: 'Cannot edit this'
  }
}`,...(P=(q=o.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var A,D,W;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Input without label...',
    id: 'no-label-input'
  }
}`,...(W=(D=d.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const z=["Text","Email","Password","Number","WithError","Disabled","WithoutLabel"];export{o as Disabled,s as Email,n as Number,l as Password,t as Text,i as WithError,d as WithoutLabel,z as __namedExportsOrder,k as default};
