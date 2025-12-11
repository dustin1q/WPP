import{j as o}from"./jsx-runtime-B4YVSejH.js";import{r as B}from"./index-DrAYhtg2.js";const H=({options:I,value:m,onChange:u,placeholder:v="Select an option...",disabled:b=!1,className:M="",label:h,error:l,id:r})=>{const[P,R]=B.useState(""),U=m!==void 0?m:P,z=a=>{const g=a.target.value;R(g),u==null||u(g)};return o.jsxs("div",{className:"ui-select-container",children:[h&&o.jsx("label",{className:"ui-select-label",htmlFor:r,children:h}),o.jsxs("select",{id:r,className:`ui-select ${l?"error":""} ${M}`,value:U,onChange:z,disabled:b,"aria-invalid":l?"true":"false","aria-describedby":l?`${r}-error`:void 0,children:[v&&o.jsx("option",{value:"",disabled:!b,children:v}),I.map(a=>o.jsx("option",{value:a.value,children:a.label},a.value))]}),l&&o.jsx("span",{className:"ui-select-error",id:`${r}-error`,role:"alert",children:l})]})};H.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option...'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const K={title:"UI/Select",component:H,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},placeholder:{control:"text"},label:{control:"text"},error:{control:"text"}}},e=[{value:"Falcon 9",label:"Falcon 9"},{value:"Falcon Heavy",label:"Falcon Heavy"},{value:"Starship",label:"Starship"},{value:"Saturn V",label:"Saturn V"},{value:"Apollo 11",label:"Apollo 11"}],s={args:{options:e,placeholder:"Select a rocket..."}},t={args:{options:e,value:"Falcon 9"}},n={args:{options:e,placeholder:"Select a rocket...",disabled:!0}},c={args:{options:[...e,{value:"Apollo 12",label:"Apollo 12"},{value:"Apollo 13",label:"Apollo 13"},{value:"Apollo 14",label:"Apollo 14"},{value:"Apollo 15",label:"Apollo 15"},{value:"Apollo 16",label:"Apollo 16"},{value:"Apollo 17",label:"Apollo 17"}],placeholder:"Choose your favorite Apollo mission and rocket..."}},i={args:{options:e,label:"Choose a rocket",placeholder:"Select a rocket...",id:"rocket-select"}},p={args:{options:e,placeholder:"Select a rocket...",error:"Please select a valid rocket",id:"rocket-select-error"}},d={args:{options:e,label:"Choose a rocket",placeholder:"Select a rocket...",error:"This field is required",id:"rocket-select-full"}};var k,A,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    placeholder: 'Select a rocket...'
  }
}`,...(f=(A=s.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var S,y,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    value: 'Falcon 9'
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var O,T,q;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    placeholder: 'Select a rocket...',
    disabled: true
  }
}`,...(q=(T=n.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var V,j,W;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options: [...rocketOptions, {
      value: 'Apollo 12',
      label: 'Apollo 12'
    }, {
      value: 'Apollo 13',
      label: 'Apollo 13'
    }, {
      value: 'Apollo 14',
      label: 'Apollo 14'
    }, {
      value: 'Apollo 15',
      label: 'Apollo 15'
    }, {
      value: 'Apollo 16',
      label: 'Apollo 16'
    }, {
      value: 'Apollo 17',
      label: 'Apollo 17'
    }],
    placeholder: 'Choose your favorite Apollo mission and rocket...'
  }
}`,...(W=(j=c.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var E,F,N;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    label: 'Choose a rocket',
    placeholder: 'Select a rocket...',
    id: 'rocket-select'
  }
}`,...(N=(F=i.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var C,D,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    placeholder: 'Select a rocket...',
    error: 'Please select a valid rocket',
    id: 'rocket-select-error'
  }
}`,...(L=(D=p.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var _,$,w;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    label: 'Choose a rocket',
    placeholder: 'Select a rocket...',
    error: 'This field is required',
    id: 'rocket-select-full'
  }
}`,...(w=($=d.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};const Q=["Default","WithValue","Disabled","ManyOptions","WithLabel","WithError","WithLabelAndError"];export{s as Default,n as Disabled,c as ManyOptions,p as WithError,i as WithLabel,d as WithLabelAndError,t as WithValue,Q as __namedExportsOrder,K as default};
