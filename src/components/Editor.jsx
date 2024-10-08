import MonacoEditor from "@monaco-editor/react";
import { useState } from 'react';

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onEditorChange,
    readOnly = props.readOnly === undefined ? false : props.readOnly,
    checked
  } = props
  const [open, setOpen] = useState(true)
  
  function onChange (newValue){
    console.log("onChange", newValue); 
    onEditorChange(newValue)
  };
  //moneco settings
  const options = {
    
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 11,
    lineHeight: 18,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: false,
    },
    /* scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    }, */
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: readOnly,
    cursorStyle: 'line',
    automaticLayout: true,
  }; 

	return (
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
	);
}