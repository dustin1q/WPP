---

title: Native Dialog
image: ""
desc: The HTML <dialog> element is used to create both modal and non-modal dialog boxes. Modal dialog boxes interrupt interaction with the rest of the page being inert, while non-modal dialog boxes allow interaction with the rest of the page. 
---


<html-code>
<button onclick="window.dialog.showModal();">Open dialog</button>
<dialog id="dialog">
    <p>I'm a native dialog.</p>
    <form method="dialog">
    <button>Close</button>
    </form>
</dialog>
</html-code>

<css-code>

dialog{
  opacity: 1;
  transform: scale(1);
  transition: all 0.5s ease-in-out;
  width:80%;
  height: 80%;
  @starting-style{
    opacity: 0;
    transform: scale(0.8);
  }
}
 dialog::backdrop {
    background-color: rgb(4, 4, 16, 0.25);
    backdrop-filter: blur(2px);
}

</css-code>

