---
title: Native Multi Select
image: ""
desc: The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
---


<html-code>
<label>Choose one or more :</label>
<select name="pets" multiple size="4" class="selectStyle">
  <optgroup label="4-legged pets">
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster" disabled>Hamster</option>
  </optgroup>
  <optgroup label="Flying pets">
    <option value="parrot">Parrot</option>
    <option value="macaw">Macaw</option>
    <option value="albatross">Albatross</option>
  </optgroup>
</select>


<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
</html-code>

<css-code>
.selectStyle {
   background: transparent;
   width: 250px;
   padding: 4px;
   font-size: 1em;
   border: 1px solid #ddd;
   height: 150px;
}
</css-code>
