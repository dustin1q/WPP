import{j as o}from"./jsx-runtime-B4YVSejH.js";import"./index-DrAYhtg2.js";/* empty css               */const w=({options:O,value:x,onChange:s,placeholder:i="Select an option...",disabled:T=!1,className:q=""})=>{const P=e=>{s==null||s(e.target.value)};return o.jsxs("select",{className:`ui-select ${q}`,value:x,onChange:P,disabled:T,"aria-label":"Select input",children:[i&&o.jsx("option",{value:"",disabled:!0,children:i}),O.map(e=>o.jsx("option",{value:e.value,children:e.label},e.value))]})};w.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option...'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const W={title:"UI/Select",component:w,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},placeholder:{control:"text"}}},n=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],a={args:{options:n,placeholder:"Select a fruit..."}},r={args:{options:n,value:"banana"}},l={args:{options:n,placeholder:"Select a fruit...",disabled:!0}},t={args:{options:[...n,{value:"strawberry",label:"Strawberry"},{value:"blueberry",label:"Blueberry"},{value:"raspberry",label:"Raspberry"},{value:"watermelon",label:"Watermelon"},{value:"pineapple",label:"Pineapple"},{value:"kiwi",label:"Kiwi"},{value:"peach",label:"Peach"},{value:"pear",label:"Pear"}],placeholder:"Choose your favorite fruit..."}};var p,u,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    placeholder: 'Select a fruit...'
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,m,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    value: 'banana'
  }
}`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,f,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options: fruitOptions,
    placeholder: 'Select a fruit...',
    disabled: true
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,h,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    options: [...fruitOptions, {
      value: 'strawberry',
      label: 'Strawberry'
    }, {
      value: 'blueberry',
      label: 'Blueberry'
    }, {
      value: 'raspberry',
      label: 'Raspberry'
    }, {
      value: 'watermelon',
      label: 'Watermelon'
    }, {
      value: 'pineapple',
      label: 'Pineapple'
    }, {
      value: 'kiwi',
      label: 'Kiwi'
    }, {
      value: 'peach',
      label: 'Peach'
    }, {
      value: 'pear',
      label: 'Pear'
    }],
    placeholder: 'Choose your favorite fruit...'
  }
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const _=["Default","WithValue","Disabled","ManyOptions"];export{a as Default,l as Disabled,t as ManyOptions,r as WithValue,_ as __namedExportsOrder,W as default};
