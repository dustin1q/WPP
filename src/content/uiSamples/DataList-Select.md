---
title: Data List Select
image: ""
desc: The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls.
---


<div id="HTML">
<label for="rocket-choice">Choose a Rocket :</label>
<input list="rockets" id="rocket-choice" name="ice-cream-choice" />
<datalist id="rockets">
    <option value="Falcon 9">
    <option value="Starship">
    <option value="Saturn 5">
    <option value="Atlas 4">
    <option value="Electron">
</datalist>
</div>

<div id="CSS">
label {
  display: block;
  margin-bottom: 10px;
}
</div>
