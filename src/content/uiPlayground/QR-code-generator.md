---

title: QR Code Generator
cat: ui-playground
image: image
desc: Using simple HTML, CSS & Javascript we create a QR code generator. 
---

<html-code>
<div class="container">
    <p>Enter text or URL</p>
    <input type="text" placeholder="Text or URL" id="inputText"/>
    <div class="img">
        <img src="" alt="QR Code" id="QRImage"/>
    </div>
    <button type="button" id="submit">Generate QR Code</button>
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
    background-color: #ffffff;
    padding: 2em;
    border-radius: 12px;
    width:90%;
    p{
        font-weight:bold;
        font-size:1em;
        margin-bottom:1em;
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
.img{
    border-radius: 5px;
    max-height: 0;
    width:200px;
    overflow: hidden; 
    img{
        width:100%;
        padding:0.5em;
    } 
}
.img.show{
        max-height: 300px;
        margin:10px auto;
        border: 1px solid #d1cece;
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
let imgContainer = document.querySelector(".img");
let QRImage = document.getElementById("QRImage");
let QRText = document.getElementById("inputText");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () =>{
    if(QRText.value.length > 0){
        QRImage.src =" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+QRText.value;
        imgContainer.classList.add("show");
    }else{
        QRText.classList.add("error");
        setTimeout(()=>{
             QRText.classList.remove("error");
        }, 1000)
    }
});
</js-code>