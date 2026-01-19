

const rxHTML = new RegExp("<html-code[\\d\\D]*?\/html-code>", "g")
const rxCSS = new RegExp("<css-code[\\d\\D]*?\/css-code>", "g")
const rxJS = new RegExp("<js-code[\\d\\D]*?\/js-code>", "g")

export default function parseSampleData(data) {

  const htmlMatch = data.match(/(?<=<html-code>).*?(?=<\/html-code>)/gs)
  const cssMatch = data.match(/(?<=<css-code>).*?(?=<\/css-code>)/gs)
  const jsMatch = data.match(/(?<=<js-code>).*?(?=<\/js-code>)/gs)

  this.htmlCode = htmlMatch ? htmlMatch[0] : null
  this.cssCode = cssMatch ? cssMatch[0] : null
  this.jsCode = jsMatch ? jsMatch[0] : null

  data = data.replace(rxCSS, "")
  data = data.replace(rxHTML, "")
  data = data.replace(rxJS, "")
  this.bodyContent = data;//markdown
}