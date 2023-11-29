import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage.js'
import '../styles/editor.css';

export default function CodeEditor(props) {

  //assign to local storage hook
  const [html, setHtml] = useLocalStorage(props.title,'html',''+props.defaultHTML+'')
  const [css, setCss] = useLocalStorage(props.title,'css', ''+props.defaultCSS+'')
  const [js, setJs] = useLocalStorage(props.title,'js', ''+props.defaultJS+'')
  const [srcDoc, setSrcDoc] = useState('')

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
      {html != "null" &&
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onEditorChange={setHtml}
          />
      }
        {css != "null" &&
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onEditorChange={setCss}
          />
        }
        {js != "null" &&
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onEditorChange={setJs}
          />
        }
      </div>
      <div className="pane middle-pane">
       <h3>Preview</h3> 
        </div>
      <div className="pane resizable">
      
          <iframe 
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            width="100%"
            height="100%"
          />
        
      </div>
    </>
  )
}

