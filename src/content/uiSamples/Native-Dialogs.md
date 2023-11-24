---

title: Native Dialog
image: ""
desc: The HTML <dialog> element is used to create both modal and non-modal dialog boxes. Modal dialog boxes interrupt interaction with the rest of the page being inert, while non-modal dialog boxes allow interaction with the rest of the page. 
---


<div id="HTML">
<button onclick="window.dialog.showModal();">Open dialog</button>
<dialog id="dialog">
    <p>I'm a native dialog.</p>
    <form method="dialog">
    <button>Close</button>
    </form>
</dialog>
</div>

<div id="CSS">
 #dialog::backdrop {
        background-color: rgb(4, 4, 16, 0.25);
        backdrop-filter: blur(2px);
      }
</div>

