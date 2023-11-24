import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage.js'
import '../styles/editor.css';

export default function CodeEditor(props) {


  const [html, setHtml] = useLocalStorage('html',''+props.defaultHTML+'')
  const [css, setCss] = useLocalStorage('css', ''+props.defaultCSS+'')
  const [js, setJs] = useLocalStorage('js', ''+props.defaultJS+'')
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
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onEditorChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onEditorChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onEditorChange={setJs}
        />
      </div>
    
      <div className="pane">
     
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

