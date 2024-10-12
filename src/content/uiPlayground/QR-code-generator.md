---

title: QR Code Generator
cat: ui-playground
image: image
desc: Using simple HTML, CSS & Javascript we create a QR code generator. 
---

<html-code>
<script src="/lib/qrcode.js"></script>
<div class="container">
<form name="qrForm">
  <label for="protocol" >Protocol:</label>
  <select name="protocol" id="protocol" aria-label="QR code type">
		<option value="https://" selected="">https://</option>
		<option value="http://">http://</option>
		<option value="TEL:">Call</option>
		<option value="SMSTO:">SMS to</option>
		<option value="MAILTO:">Email to</option>
		<option value="">Search</option>
	</select>
  <label for="t" >TypeNumber:</label>
  <select name="t" id="t"><option value="0">Auto Detect</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option></select>
    <label for="e" >ErrorCorrectionLevel:</label>
    <select name="e" id="e">
      <option value="L">L(7%)</option>
      <option value="M" selected="selected">M(15%)</option>
      <option value="Q">Q(25%)</option>
      <option value="H">H(30%)</option>
    </select>
    <label for="m" >Mode:</label>
      <select name="m" id="m">
        <option value="Numeric">Numeric</option>
        <option value="Alphanumeric">Alphanumeric</option>
        <option value="Byte" selected>Byte</option>
        <option value="Kanji">Kanji</option>
      </select>
      <span>Multibyte:</span>
      <select name="mb" id="mb">
        <option value="default">None</option>
        <option value="SJIS">SJIS</option>
        <option value="UTF-8" selected>UTF-8</option>
      </select>
      <p>Enter text or URL</p>
      <input name="msg" id="msg" rows="10" cols="40" placeholder="Text or URL" id="inputText"/>
      <button type="button"  id="submit" onclick="update_qrcode()">Generate QR Code</button>
    </form>
 <div id="qr"></div>
</div>
</html-code>

<css-code>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: Arial, Helvetica, sans-serif;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(196, 191, 191);
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #ffffff;
    padding: 2em;
    border-radius: 12px;
    width:90%;
    p{
        font-weight:bold;
        font-size:1em;
        margin:1em 0 1em;
    }
    input{
        width:100%;
        height: 50px;
        outline: 0;
        border: 1px solid #999999;
        padding: 0.5em;
        margin:10px 0 20px;
        border-radius: 5px;
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
}
#qr{
    margin:1em auto;
    img{
        border: 1px solid #d1cece;
        border-radius: 5px;
    }
}
.error{
    animation: 0.3s linear 0s infinite alternate shake;
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

<js-code>
let qrElement = document.getElementById("qr");
let tElement = document.getElementById("t");
let eElement = document.getElementById("e");
let mElement = document.getElementById("m");
let mbElement = document.getElementById("mb");
let msgElement = document.getElementById("msg");
let protocolElement = document.getElementById("protocol");

draw_qrcode = function(text, typeNumber, errorCorrectionLevel) {
  document.write(create_qrcode(text, typeNumber, errorCorrectionLevel) );
};

create_qrcode = function(text, typeNumber, errorCorrectionLevel, mode, mb) {
  qrcode.stringToBytes = qrcode.stringToBytesFuncs[mb];
  let qr = qrcode(typeNumber || 4, errorCorrectionLevel || 'M');
  qr.addData(text, mode);
  qr.make();
//  return qr.createTableTag();
//  return qr.createSvgTag();
  return qr.createImgTag();
};

update_qrcode = function() {
  let text = msgElement.value.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '');
  let protocol = protocolElement.value;
  let url = protocol + text;
  
  let t = tElement.value;
  let e = eElement.value;
  let m =  mElement.value;
  let mb = mbElement.value;
  
  if(msgElement.value.length > 0){
    qrElement.innerHTML = create_qrcode(url, t, e, m, mb);
  }else{ 
    msgElement.classList.add("error");
     qrElement.innerHTML = "";
        setTimeout(()=>{
             msgElement.classList.remove("error");
        }, 1000)
  }
  
};
</js-code>

