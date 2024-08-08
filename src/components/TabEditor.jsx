import MonacoEditor from "@monaco-editor/react";
export default function TabEditor(props) {
  const {
    language,
    selectedTab,
    displayName,
    value,
    onEditorChange,
    onTabClick,
    readOnly = props.readOnly === undefined ? false : props.readOnly
  } = props
let selected=false;
if(language==selectedTab){
  selected = true;
}
  function onChange (newValue){
    //console.log("onChange", newValue); 
    onEditorChange(newValue)
  };
  function onTabClicked (){
    return(language)
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
        <input type="radio" className="editor-tabs-radio" name="tabs-example"
        id={language} 
        defaultChecked={selected} 
        onClick={onTabClicked}
        />
        
        <label htmlFor={language} className="editor-title">{displayName}</label>
        <div className="editor-tabs-content"> 
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