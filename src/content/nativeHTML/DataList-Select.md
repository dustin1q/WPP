---
title: Data List Select
cat: native-html
image: ""
desc: The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls.
---


<html-code>
<label for="rocket-choice">Choose a Rocket :</label>
<input list="rockets" id="rocket-choice" />
<datalist id="rockets">
    <option value="Falcon 9">
    <option value="Starship">
    <option value="Saturn 5">
    <option value="Atlas 4">
    <option value="Electron">
</datalist>
</html-code>

<css-code>
label {
  display: block;
  margin-bottom: 10px;
}
</css-code>
