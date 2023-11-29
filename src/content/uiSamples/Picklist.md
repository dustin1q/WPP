---

title: Picklist
image: Himanshu
desc: Leverage checkboxs or radio groups for highly functional and native picking experiences. Note the use of grid-area 1/1 placing the label over the checkbox element. 
---


<html-code>

<form id="selectRockets">
<fieldset class="taglist" id="rocketlist">
    <legend><b>Rockets</b>: (choose many)</legend>
    <div class="tag-toggle">
      <input type="checkbox" name="rocket-taglist" value="falcon9" id="rocketlist-falcon9">
      <label for="rocketlist-falcon9">Falcon 9</label>
     </div>
    <div class="tag-toggle">
      <input type="checkbox" name="rocket-taglist" value="falcon-heavey" id="rocketlist-falcon-heavey">
      <label for="rocketlist-falcon-heavey">Falcon Heavey</label>
    </div>
    <div class="tag-toggle">
      <input type="checkbox" name="rocket-taglist" value="starship" id="rocketlist-starship">
      <label for="rocketlist-starship">Starship</label>
    </div>
    <div class="tag-toggle">
      <input type="checkbox" name="rocket-taglist" value="electron" id="rocketlist-electron">
      <label for="rocketlist-electron">Electron</label>
    </div>
    <div class="tag-toggle">
      <input type="checkbox" name="rocket-taglist" value="saturn5" id="rocketlist-saturn5">
      <label for="rocketlist-saturn5">Saturn 5</label>
    </div>
    <div class="tag-toggle">
      <input type="checkbox" name="rocket-taglist" value="atlas4" id="rocketlist-atlas4">
      <label for="rocketlist-atlas4">Atlas 4</label>
  </div>
</fieldset>
</form>
<button id="getSelected">console.log selected</button>
</html-code>

<css-code>
.taglist {
    padding: 1em;
    border: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: .5rem;
    max-inline-size: 45ch;

     & > .tag-toggle{
      display:grid;
     > * {
      grid-area: 1/1;
    }
     > label {
      padding: 0.5em;
      background:rgb(176, 176, 176);
      cursor:pointer;
      color:rgb(47, 44, 44);
      font-family: Arial, Helvetica, sans-serif;
      font-size: 0.8rem;
      border-radius: 5px;
     }
      > input {
      appearance:none;
      background:none;
      border:none;
      inline-size:100%;
      block-size:100%;
      &:checked ~ label {
        background-color: black;
        color:white;
      }
      }
  }
}
</css-code>

<js-code>
document.getElementById("getSelected").addEventListener("click", logSelected);
function logSelected() {
    //one line of JS required to get selevted values within FormData
    console.log(new FormData(selectRockets).getAll('rocket-taglist'))
}
</js-code>