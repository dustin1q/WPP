---

title: QR Code Generator
cat: ui-playground
image: image
desc: Create a QR code generator using a small dependancy free QR code library (qrcode.js). 
---
Inspired by this Veritasium video 
[How do QR codes work? (I built one myself to find out)](https://www.youtube.com/watch?v=w5ebcowAJD8)
<br/>
Link to library file [qrcode.min.js](/lib/qrcode.min.js)
<html-code><script src="/lib/qrcode.min.js"></script>
<div class="container">
<form name="qrForm">
  <label  for="msg"l>Enter text or URL</label>
  <input name="msg" id="msg" rows="10" cols="40" placeholder="Text or URL" id="inputText"/>
  <details>
    <summary>Addtional Options</summary>
    <div class="formElement">
    <label for="protocol" >Protocol:</label>
    <select name="protocol" id="protocol" aria-label="QR code type">
      <option value="https://" selected="">https://</option>
      <option value="http://">http://</option>
      <option value="TEL:">Call</option>
      <option value="SMSTO:">SMS to</option>
      <option value="MAILTO:">Email to</option>
      <option value="">Search</option>
	  </select>
  </div>
  <div class="formElement">
    <label for="e" >ErrorCorrectionLevel:</label>
    <select name="e" id="e">
      <option value="L">L(7%)</option>
      <option value="M" selected="selected">M(15%)</option>
      <option value="Q">Q(25%)</option>
      <option value="H">H(30%)</option>
    </select>
  </div>
  <div class="formElement">
    <label for="background-color" >Background Colour:</label>
    <input id="background-color" type="color" value="#ffffff" aria-label="QR code background color">
  </div>
  <div class="formElement">
    <label for="foreground-color" >Foreground Colour:</label>
    <input id="foreground-color" type="color" value="#000000" aria-label="QR code foreground color">
  </div>
  <div class="formElement">
    <label for="height" >Height: (Pixels)</label>
    <input type='number' id='height' name='mynumber' value='200' />
  </div>
  <div class="formElement">
    <label for="width" >Width: (Pixels)</label>
    <input type='number' id='width' name='mynumber' value='200' />
  </div>
  </details>
        <button type="button"  id="submit" onclick="update_qrcode()">Generate QR Code</button>
    </form>
 <div id="qr"></div>
</div>
</html-code>

<css-code>body{
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    background: rgb(196, 191, 191);
}
form{
    display: flex;
    flex-direction: column;
}
form .formElement:nth-last-child(even){ 
  background-color: rgb(233, 233, 233);
}
.formElement{
    width:100%;
    display: flex;
    justify-content:space-between;
    border: 1px solid rgb(233, 233, 233);
    padding: 0.6em;
    border-radius: 5px;
}
select{
    width:50%;
    border-radius: 5px;
    height:2em;
    padding: 3px;
}
input{
    width:100%;
    height: 1em;
    outline: 0;
    border: 1px solid #999999;
    padding: 0.5em;
    margin:1px 0 10px 0;
    border-radius: 5px;
}
input[type=color]{
   width:50%;
   height:2em;
   padding: 0;
   margin: 0;
}
input[type=number]{
   width:3.3em;
   height:2em;
   padding: 3px;
   margin: 0;
   text-align: center;
}
label summary{
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0 0 0.8em 0 ;
}
details{
    padding: 0;
    margin: 0 0 1em 0 ;
}
button{
    width:100%;
    height:2em;
    background: #80cef9;
    border-radius: 5px;
    color: #fff;
    border:0;
    outline: 0;
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
    font-weight: bold;
    cursor:pointer;
}
.container{
    background-color: #ffffff;
    padding: 2em;
    border-radius: 12px;
    width:90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
#qr{
    margin:1em auto;
}
.error{
    animation: 0.3s linear 0s infinite alternate shake;
    border: 1px solid red;
}
.error::placeholder{
    color: red;
}
@keyframes shake {
    0% {
        transform: translateX(0px);
    }
    25% {
        transform: translateX(-3px);
    }
    50% {
        transform: translateX(0px);
    }
    75% {
        transform: translateX(3px);
    }
    100% {
        transform: translateX(0px);
    }
}
</css-code>

<js-code>//get all needed elements 
let qrCodeElement = document.getElementById("qr")
let eElement = document.getElementById("e");
let msgElement = document.getElementById("msg");
let protocolElement = document.getElementById("protocol");
let bgColorElement = document.getElementById("background-color");
let fgColorElement = document.getElementById("foreground-color");
let heightElement = document.getElementById("height");
let widthElement = document.getElementById("width");

update_qrcode = function() {
  let text = msgElement.value.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '');
  let protocol = protocolElement.value;
  let url = protocol + text;
  let fgColor = fgColorElement.value;
  let bgColor = bgColorElement.value;
  let height = heightElement.value;
  let width = widthElement.value;
  let e = eElement.value;
  //check if user entered a text value
  if(msgElement.value.length > 0){
    qrCodeElement.innerHTML = "";
    let qrcode = new QRCode(qrCodeElement, {
		text: url,
		width: width,
		height: height,
		colorDark :fgColor,
		colorLight : bgColor,
		correctLevel : QRCode.CorrectLevel[e]
	});
  }else{ // add error class to impt element to iniciate shake animation
    msgElement.classList.add("error");
        setTimeout(()=>{
             msgElement.classList.remove("error");
             msgElement.focus();
        }, 1000)
  }
};
</js-code>



