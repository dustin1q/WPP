import{j as n}from"./jsx-runtime-B4YVSejH.js";import"./index-DrAYhtg2.js";const h=({options:k,value:O,onChange:s,placeholder:p="Select an option...",disabled:x=!1,className:T=""})=>{const V=e=>{s==null||s(e.target.value)};return n.jsxs("select",{className:`ui-select ${T}`,value:O,onChange:V,disabled:x,"aria-label":"Select input",children:[p&&n.jsx("option",{value:"",disabled:!0,children:p}),k.map(e=>n.jsx("option",{value:e.value,children:e.label},e.value))]})};h.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option...'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const j={title:"UI/Select",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},placeholder:{control:"text"}}},t=[{value:"Falcon 9",label:"Falcon 9"},{value:"Falcon Heavy",label:"Falcon Heavy"},{value:"Starship",label:"Starship"},{value:"Saturn V",label:"Saturn V"},{value:"Apollo 11",label:"Apollo 11"}],l={args:{options:t,placeholder:"Select a rocket..."}},o={args:{options:t,value:"Falcon 9"}},a={args:{options:t,placeholder:"Select a rocket...",disabled:!0}},r={args:{options:[...t,{value:"Apollo 12",label:"Apollo 12"},{value:"Apollo 13",label:"Apollo 13"},{value:"Apollo 14",label:"Apollo 14"},{value:"Apollo 15",label:"Apollo 15"},{value:"Apollo 16",label:"Apollo 16"},{value:"Apollo 17",label:"Apollo 17"}],placeholder:"Choose your favorite Apollo mission and rocket..."}};var c,i,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    placeholder: 'Select a rocket...'
  }
}`,...(u=(i=l.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,v;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    value: 'Falcon 9'
  }
}`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var A,b,g;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    options: rocketOptions,
    placeholder: 'Select a rocket...',
    disabled: true
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,S,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const D=["Default","WithValue","Disabled","ManyOptions"];export{l as Default,a as Disabled,r as ManyOptions,o as WithValue,D as __namedExportsOrder,j as default};
