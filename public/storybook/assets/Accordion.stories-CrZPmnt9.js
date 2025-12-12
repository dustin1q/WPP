import{j as e}from"./jsx-runtime-BxWfoq_t.js";import"./index-Dv7uYCMj.js";import"./_commonjsHelpers-CqkleIqs.js";const a=({summary:c,children:O,defaultOpen:W=!1,className:k="",name:l})=>e.jsxs("details",{className:`ui-details ${k}`,open:W,...l&&{name:l},children:[e.jsx("summary",{className:"ui-summary",children:c}),e.jsx("div",{className:"ui-details-content",children:O})]});a.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{summary:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"UI/Accordion",component:a,parameters:{layout:"padded"},decorators:[c=>e.jsx("div",{style:{width:"600px",margin:"0 auto"},children:e.jsx(c,{})})],tags:["autodocs"],argTypes:{defaultOpen:{control:"boolean"}}},n={args:{summary:"Click to expand",children:"This is the content that appears when you expand the accordion."}},t={args:{summary:"This is open by default",defaultOpen:!0,children:"This content is visible immediately because defaultOpen is true."}},i={args:{summary:"View detailed information",children:e.jsxs("div",{children:[e.jsx("h4",{style:{marginTop:0},children:"Rich Content Example"}),e.jsx("p",{children:"This accordion component can contain any React content:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Lists"}),e.jsx("li",{children:"Images"}),e.jsx("li",{children:"Other components"}),e.jsx("li",{children:"Formatted text"})]}),e.jsxs("p",{style:{marginBottom:0},children:[e.jsx("strong",{children:"Note:"})," The expand/collapse animation is smooth and accessible."]})]})}},o={args:{summary:"What is an Accordion component?",children:e.jsxs("div",{children:[e.jsx("p",{children:"The Accordion component is a native HTML details element that provides an interactive disclosure widget. Users can click on the summary to reveal or hide additional content."}),e.jsx("p",{style:{marginBottom:0},children:"It's commonly used for FAQs, accordion menus, and collapsible sections."})]})}},s={args:{summary:"Read the full article",children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{style:{marginBottom:0},children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."})]})}},r={args:{summary:"",children:null},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsx(a,{name:"faq-group",summary:"What is React?",defaultOpen:!0,children:e.jsx("p",{children:"React is a JavaScript library for building user interfaces. It lets you create reusable components and manage application state efficiently."})}),e.jsx(a,{name:"faq-group",summary:"What is TypeScript?",children:e.jsx("p",{children:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."})}),e.jsx(a,{name:"faq-group",summary:"What is Storybook?",children:e.jsx("p",{children:"Storybook is a frontend workshop for building UI components and pages in isolation. It helps you develop and test components independently."})}),e.jsx(a,{name:"faq-group",summary:"What is the name attribute?",children:e.jsx("p",{children:"The name attribute on details elements creates an exclusive accordion group. When multiple details elements share the same name, only one can be open at a time. Opening one automatically closes the others in the group."})})]}),parameters:{docs:{description:{story:"Multiple accordions with the same `name` attribute form an exclusive group where only one can be open at a time. Try clicking different accordions to see how opening one automatically closes the others."}}}};var d,m,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    summary: 'Click to expand',
    children: 'This is the content that appears when you expand the accordion.'
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,h,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    summary: 'This is open by default',
    defaultOpen: true,
    children: 'This content is visible immediately because defaultOpen is true.'
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,f,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    summary: 'View detailed information',
    children: <div>
                <h4 style={{
        marginTop: 0
      }}>Rich Content Example</h4>
                <p>This accordion component can contain any React content:</p>
                <ul>
                    <li>Lists</li>
                    <li>Images</li>
                    <li>Other components</li>
                    <li>Formatted text</li>
                </ul>
                <p style={{
        marginBottom: 0
      }}>
                    <strong>Note:</strong> The expand/collapse animation is smooth and accessible.
                </p>
            </div>
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,b,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    summary: 'What is an Accordion component?',
    children: <div>
                <p>
                    The Accordion component is a native HTML details element that provides an interactive
                    disclosure widget. Users can click on the summary to reveal or hide additional
                    content.
                </p>
                <p style={{
        marginBottom: 0
      }}>
                    It's commonly used for FAQs, accordion menus, and collapsible sections.
                </p>
            </div>
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var q,T,S;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    summary: 'Read the full article',
    children: <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p style={{
        marginBottom: 0
      }}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
            </div>
  }
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var A,R,w;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    summary: '',
    children: null
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>
            <Accordion name="faq-group" summary="What is React?" defaultOpen={true}>
                <p>
                    React is a JavaScript library for building user interfaces. It lets you create
                    reusable components and manage application state efficiently.
                </p>
            </Accordion>

            <Accordion name="faq-group" summary="What is TypeScript?">
                <p>
                    TypeScript is a strongly typed programming language that builds on JavaScript,
                    giving you better tooling at any scale.
                </p>
            </Accordion>

            <Accordion name="faq-group" summary="What is Storybook?">
                <p>
                    Storybook is a frontend workshop for building UI components and pages in isolation.
                    It helps you develop and test components independently.
                </p>
            </Accordion>

            <Accordion name="faq-group" summary="What is the name attribute?">
                <p>
                    The name attribute on details elements creates an exclusive accordion group.
                    When multiple details elements share the same name, only one can be open at a time.
                    Opening one automatically closes the others in the group.
                </p>
            </Accordion>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple accordions with the same \`name\` attribute form an exclusive group where only one can be open at a time. Try clicking different accordions to see how opening one automatically closes the others.'
      }
    }
  }
}`,...(w=(R=r.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const D=["Default","OpenByDefault","WithRichContent","FAQ","LongContent","ExclusiveGroup"];export{n as Default,r as ExclusiveGroup,o as FAQ,s as LongContent,t as OpenByDefault,i as WithRichContent,D as __namedExportsOrder,C as default};
