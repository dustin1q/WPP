import React, { useState, useEffect } from 'react';
import TabEditor from './TabEditor.jsx'
import Editor from './Editor.jsx'
import useLocalStorage from '../hooks/useLocalStorage.js'
import '../styles/editor.css';

import  Modal  from "../components/Modal";
export default function CodeEditor(props) {
  
  //assign to local storage hook
  const [html, setHtml] = useLocalStorage(props.title,'html',''+props.defaultHTML+'')
  const [css, setCss] = useLocalStorage(props.title,'css', ''+props.defaultCSS+'')
  const [js, setJs] = useLocalStorage(props.title,'js', ''+props.defaultJS+'')

  const [selectedTab, setSelectedTab] = useLocalStorage(props.title,'selectedTab','xml')

  const [srcDoc, setSrcDoc] = useState('')
  //const [cssVars, setCssVars] = useState(props.cssVars);
  const [modal, setModal] = useState(false);
  const cssVars = props.cssVars;
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
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js, cssVars])

  return (
    <>
    <div className="pane">
      <div className="pane tab-editor-pane">
        {html != "null" &&
            <TabEditor
              language="xml"
              onTabClick={setSelectedTab}
              selectedTab={selectedTab}
              displayName="HTML"
              value={html}
              onEditorChange={setHtml}
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
              title={props.title}
            />
          }
          {js != "null" &&
            <TabEditor
              language="javascript"
              onTabClick={"javascript"}
              displayName="JS"
              value={js}
              onEditorChange={setJs}
              title={props.title}
            />
          }
        </div>
        <div className="pane preview">
          <label>Preview</label>
            <iframe 
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts allow-popups allow-forms"
              width="100%"
              height="100%"
            />
        </div>
      </div>
      <button onClick={() => setModal(true)}>CSS Variables</button>
      <Modal
      openModal={modal}
      closeModal={() => setModal(false)}
      id="variablesModel">
        <div className="pane">
          <Editor
              language="css"
              displayName="CSS Variables"
              value={cssVars}
              readOnly={true}
              />
        </div>
      </Modal>
    </>
  )
}

