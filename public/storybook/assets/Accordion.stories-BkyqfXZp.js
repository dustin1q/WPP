import{j as e}from"./jsx-runtime-B4YVSejH.js";import{r as B}from"./index-DrAYhtg2.js";/* empty css               */const q=({summary:T,children:O,defaultOpen:R=!1,className:A=""})=>{const[o,S]=B.useState(R),C=()=>{S(!o)};return e.jsxs("details",{className:`ui-details ${A}`,open:o,children:[e.jsx("summary",{className:"ui-summary",onClick:N=>{N.preventDefault(),C()},children:T}),o&&e.jsx("div",{className:"ui-details-content",children:O})]})};q.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{summary:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const E={title:"UI/Accordion",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{defaultOpen:{control:"boolean"}}},n={args:{summary:"Click to expand",children:"This is the content that appears when you expand the accordion."}},t={args:{summary:"This is open by default",defaultOpen:!0,children:"This content is visible immediately because defaultOpen is true."}},a={args:{summary:"View detailed information",children:e.jsxs("div",{children:[e.jsx("h4",{style:{marginTop:0},children:"Rich Content Example"}),e.jsx("p",{children:"This accordion component can contain any React content:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Lists"}),e.jsx("li",{children:"Images"}),e.jsx("li",{children:"Other components"}),e.jsx("li",{children:"Formatted text"})]}),e.jsxs("p",{style:{marginBottom:0},children:[e.jsx("strong",{children:"Note:"})," The expand/collapse animation is smooth and accessible."]})]})}},i={args:{summary:"What is an Accordion component?",children:e.jsxs("div",{children:[e.jsx("p",{children:"The Accordion component is a native HTML details element that provides an interactive disclosure widget. Users can click on the summary to reveal or hide additional content."}),e.jsx("p",{style:{marginBottom:0},children:"It's commonly used for FAQs, accordion menus, and collapsible sections."})]})}},s={args:{summary:"Read the full article",children:e.jsxs("div",{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{style:{marginBottom:0},children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."})]})}};var r,c,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    summary: 'Click to expand',
    children: 'This is the content that appears when you expand the accordion.'
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    summary: 'This is open by default',
    defaultOpen: true,
    children: 'This content is visible immediately because defaultOpen is true.'
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,h,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,y,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,b,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const I=["Default","OpenByDefault","WithRichContent","FAQ","LongContent"];export{n as Default,i as FAQ,s as LongContent,t as OpenByDefault,a as WithRichContent,I as __namedExportsOrder,E as default};
