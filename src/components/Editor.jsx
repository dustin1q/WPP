import MonacoEditor from "@monaco-editor/react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onEditorChange
  } = props
  const [open, setOpen] = useState(true)
  
  function onChange (newValue){
    console.log("onChange", newValue); 
    onEditorChange(newValue)
  };
  //moneco settings
  const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: true,
    },
    /* scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    }, */
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
  }; 

	return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} /> 
        </button>
      </div>
      <div className="monaco-wrapper">
        <MonacoEditor 
                options={options}
                theme="vs-dark"
                language={language}
                value={value}
                className="Monaco"
                onChange={onChange}
              />
      </div>
  </div>
	);
}