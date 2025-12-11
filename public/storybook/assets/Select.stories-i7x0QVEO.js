import{j as o}from"./jsx-runtime-B4YVSejH.js";import"./index-DrAYhtg2.js";const _=({options:$,value:w,onChange:u,placeholder:m="Select an option...",disabled:H=!1,className:I="",label:v,error:l,id:r})=>{const M=a=>{u==null||u(a.target.value)};return o.jsxs("div",{className:"ui-select-container",children:[v&&o.jsx("label",{className:"ui-select-label",htmlFor:r,children:v}),o.jsxs("select",{id:r,className:`ui-select ${l?"error":""} ${I}`,value:w,onChange:M,disabled:H,"aria-invalid":l?"true":"false","aria-describedby":l?`${r}-error`:void 0,children:[m&&o.jsx("option",{value:"",disabled:!0,children:m}),$.map(a=>o.jsx("option",{value:a.value,children:a.label},a.value))]}),l&&o.jsx("span",{className:"ui-select-error",id:`${r}-error`,role:"alert",children:l})]})};_.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option...'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const U={title:"UI/Select",component:_,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},placeholder:{control:"text"},label:{control:"text"},error:{control:"text"}}},e=[{value:"Falcon 9",label:"Falcon 9"},{value:"Falcon Heavy",label:"Falcon Heavy"},{value:"Starship",label:"Starship"},{value:"Saturn V",label:"Saturn V"},{value:"Apollo 11",label:"Apollo 11"}],s={args:{options:e,placeholder:"Select a rocket..."}},t={args:{options:e,value:"Falcon 9"}},n={args:{options:e,placeholder:"Select a rocket...",disabled:!0}},c={args:{options:[...e,{value:"Apollo 12",label:"Apollo 12"},{value:"Apollo 13",label:"Apollo 13"},{value:"Apollo 14",label:"Apollo 14"},{value:"Apollo 15",label:"Apollo 15"},{value:"Apollo 16",label:"Apollo 16"},{value:"Apollo 17",label:"Apollo 17"}],placeholder:"Choose your favorite Apollo mission and rocket..."}},i={args:{options:e,label:"Choose a rocket",placeholder:"Select a rocket...",id:"rocket-select"}},p={args:{options:e,placeholder:"Select a rocket...",error:"Please select a valid rocket",id:"rocket-select-error"}},d={args:{options:e,label:"Choose a rocket",placeholder:"Select a rocket...",error:"This field is required",id:"rocket-select-full"}};var b,h,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    placeholder: 'Select a rocket...'
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var k,A,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    value: 'Falcon 9'
  }
}`,...(f=(A=t.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var S,y,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    placeholder: 'Select a rocket...',
    disabled: true
  }
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var O,T,q;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var j,W,F;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    label: 'Choose a rocket',
    placeholder: 'Select a rocket...',
    id: 'rocket-select'
  }
}`,...(F=(W=i.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var V,E,N;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    placeholder: 'Select a rocket...',
    error: 'Please select a valid rocket',
    id: 'rocket-select-error'
  }
}`,...(N=(E=p.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var C,D,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    label: 'Choose a rocket',
    placeholder: 'Select a rocket...',
    error: 'This field is required',
    id: 'rocket-select-full'
  }
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const z=["Default","WithValue","Disabled","ManyOptions","WithLabel","WithError","WithLabelAndError"];export{s as Default,n as Disabled,c as ManyOptions,p as WithError,i as WithLabel,d as WithLabelAndError,t as WithValue,z as __namedExportsOrder,U as default};
