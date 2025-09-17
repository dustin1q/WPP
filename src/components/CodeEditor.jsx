import React, { useState, useEffect } from 'react';
import TabEditor from './TabEditor.jsx'
import Editor from './Editor.jsx'
import useLocalStorage from '../hooks/useLocalStorage.js'
import '../styles/editor.css';

import  Modal  from "./Modal.jsx";
export default function CodeEditor(props) {
  
  //assign to local storage hook
  const [html, setHtml] = useLocalStorage(props.title,'html',''+props.defaultHTML+'')
  const [css, setCss] = useLocalStorage(props.title,'css', ''+props.defaultCSS+'')
  const [js, setJs] = useLocalStorage(props.title,'js', ''+props.defaultJS+'')

  const [selectedTab, setSelectedTab] = useState('xml')//set HTML as default tab
  const [srcDoc, setSrcDoc] = useState('')

  const [modal, setModal] = useState(false);

  const [htmlChange, setHTMLChange] = useState(html != props.defaultHTML);
  const [cssChange, setCssChange] = useState(css != props.defaultCSS);
  const [jsChange, setJSChange] = useState(js != props.defaultJS);

  const cssVars = props.cssVars;


  function resetHTML(){
    setHtml(''+props.defaultHTML+'');
  }
  function resetCSS(){
    setCss(''+props.defaultCSS+'');
  }
  function resetJS(){
    setJs(''+props.defaultJS+'');
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      
      setSrcDoc(`
        <html>
          <head><style>${cssVars}</style></head>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
      setHTMLChange(html != props.defaultHTML)
      setCssChange(css != props.defaultCSS)
      setJSChange(js != props.defaultJS)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js, cssVars])

  return (
    <> 
     {/* <button onClick={() => setModal(true)}>CSS Variables</button>*/}
    <div className="pane">
      <div className="tab-editor-pane">
        {html != "null" &&
            <TabEditor
              language="xml"
              onTabClick={setSelectedTab}
              selectedTab={selectedTab}
              displayName="HTML"
              value={html}
              onEditorChange={setHtml}
              onUndoChanges= {resetHTML}
              codeChange={htmlChange}
              title={props.title}
            />
          
        }
          {css != "null" &&
            <TabEditor
              language="css"
              onTabClick={"css"}
              displayName="CSS"
              value={css}
              onEditorChange={setCss}
              onUndoChanges= {resetCSS}
              title={props.title}
              codeChange={cssChange}
            />
          }
          {js != "null" &&
            <TabEditor
              language="javascript"
              onTabClick={"javascript"}
              displayName="JS"
              value={js}
              onEditorChange={setJs}
              onUndoChanges= {resetJS}
              codeChange={jsChange}
              title={props.title}
            />
          }
        </div>
        <div className="preview">
          <label onClick={() => setModal(true)}>Mobile Preview
            <img src="/assets/full-screen-105.svg" alt="full screen icon"/>
          </label>
            <iframe 
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts allow-popups allow-forms"
              width="100%"
              height="100%"
            />
        </div>
      </div>
      <Modal openModal={modal} closeModal={() => setModal(false)} title={"Desktop Preview"} id="previewModel">
          {/*<Editor
              language="css"
              displayName="CSS Variables"
              value={cssVars}
              readOnly={true}
              />*/}
              <iframe 
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts allow-popups allow-forms"
              id="l-iframe"
            />
      </Modal>
    </>
  )
}

