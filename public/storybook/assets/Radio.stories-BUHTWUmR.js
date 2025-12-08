import{j as a}from"./jsx-runtime-B4YVSejH.js";import{r as F}from"./index-DrAYhtg2.js";const s=({checked:o=!1,onChange:e,label:p,disabled:u=!1,className:E="",id:U,name:V,value:$})=>{const G=W=>{e==null||e(W.target.checked)},m=U||`radio-${Math.random().toString(36).substr(2,9)}`;return a.jsxs("div",{className:`ui-radio-container ${u?"disabled":""} ${E}`,children:[a.jsx("input",{type:"radio",id:m,name:V,value:$,className:"ui-radio",checked:o,onChange:G,disabled:u,"aria-checked":o}),p&&a.jsx("label",{htmlFor:m,className:"ui-radio-label",children:p})]})};s.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""}}};const A={title:"UI/Radio",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{label:"Option 1",checked:!1,name:"example",value:"option1"}},r={args:{label:"Option 1",checked:!0,name:"example",value:"option1"}},t={args:{label:"This radio is disabled",disabled:!0,checked:!1,name:"example",value:"disabled"}},l={args:{label:"This radio is disabled and checked",disabled:!0,checked:!0,name:"example",value:"disabled-checked"}},d={args:{checked:!1,name:"example",value:"no-label"}},i={args:{label:"I agree to the terms and conditions, privacy policy, and all other legal documents associated with this service",checked:!1,name:"example",value:"long"}},c={render:()=>{const[o,e]=F.useState("option1");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsx(s,{label:"Option 1",name:"group",value:"option1",checked:o==="option1",onChange:()=>e("option1")}),a.jsx(s,{label:"Option 2",name:"group",value:"option2",checked:o==="option2",onChange:()=>e("option2")}),a.jsx(s,{label:"Option 3",name:"group",value:"option3",checked:o==="option3",onChange:()=>e("option3")}),a.jsx(s,{label:"Disabled Option",name:"group",value:"option4",checked:o==="option4",onChange:()=>e("option4"),disabled:!0})]})}};var h,g,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    checked: false,
    name: 'example',
    value: 'option1'
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,k,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Option 1',
    checked: true,
    name: 'example',
    value: 'option1'
  }
}`,...(v=(k=r.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var x,y,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'This radio is disabled',
    disabled: true,
    checked: false,
    name: 'example',
    value: 'disabled'
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var O,T,C;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'This radio is disabled and checked',
    disabled: true,
    checked: true,
    name: 'example',
    value: 'disabled-checked'
  }
}`,...(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var j,R,q;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    checked: false,
    name: 'example',
    value: 'no-label'
  }
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var D,L,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'I agree to the terms and conditions, privacy policy, and all other legal documents associated with this service',
    checked: false,
    name: 'example',
    value: 'long'
  }
}`,...(I=(L=i.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var N,_,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
                <Radio label="Option 1" name="group" value="option1" checked={selected === 'option1'} onChange={() => setSelected('option1')} />
                <Radio label="Option 2" name="group" value="option2" checked={selected === 'option2'} onChange={() => setSelected('option2')} />
                <Radio label="Option 3" name="group" value="option3" checked={selected === 'option3'} onChange={() => setSelected('option3')} />
                <Radio label="Disabled Option" name="group" value="option4" checked={selected === 'option4'} onChange={() => setSelected('option4')} disabled />
            </div>;
  }
}`,...(w=(_=c.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};const B=["Unchecked","Checked","Disabled","DisabledChecked","WithoutLabel","LongLabel","RadioGroup"];export{r as Checked,t as Disabled,l as DisabledChecked,i as LongLabel,c as RadioGroup,n as Unchecked,d as WithoutLabel,B as __namedExportsOrder,A as default};
