

const rxHTML = new RegExp("<html-code[\\d\\D]*?\/html-code>","g")
const rxCSS = new RegExp("<css-code[\\d\\D]*?\/css-code>","g")
const rxJS = new RegExp("<js-code[\\d\\D]*?\/js-code>","g")

export default function parseSampleData(data) {
 
  this.htmlCode = data.match(/(?<=<html-code>).*?(?=<\/html-code>)/gs)
  this.cssCode = data.match(/(?<=<css-code>).*?(?=<\/css-code>)/gs)
  this.jsCode = data.match(/(?<=<js-code>).*?(?=<\/js-code>)/gs)

  data = data.replace(rxCSS,"")
  data = data.replace(rxHTML,"")
  data = data.replace(rxJS,"")
  this.bodyContent = data;//markdown
}