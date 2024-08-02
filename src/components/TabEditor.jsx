import MonacoEditor from "@monaco-editor/react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
export default function TabEditor(props) {
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

	return (<>
        <input type="radio" class="editor-tabs-radio" name="tabs-example" id={language} checked={checked}/>
        <label for={language} class="editor-title">{displayName}</label>
        <div class="editor-tabs-content"> 
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
    </>
	);
}