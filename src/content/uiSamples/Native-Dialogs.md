---

title: Native Dialog
image: ""
desc: The HTML <dialog> element is used to create both modal and non-modal dialog boxes. Modal dialog boxes interrupt interaction with the rest of the page being inert, while non-modal dialog boxes allow interaction with the rest of the page. <br/> <strong>Note</strong>
---


<div id="HTML">
<dialog id="dialog">
    <button onclick="closeDialog()" id="closeDialogHeader">&#x2716</button>
    <p>This is a dialog. with a blured backdrop</p>
</dialog>
<button onclick="showDialog()"id="openDialogBox">Open dialog box</button>
</div>

<div id="CSS">
 #dialog::backdrop {
        background-color: rgb(4, 4, 16, 0.25);
        backdrop-filter: blur(2px);
      }
</div>

<div id="JS">
  let dialog=document.getElementById("dialog")
      function showDialog(){
        dialog.showModal();
      }

      function closeDialog(){
        dialog.close(); 
      }
</div>