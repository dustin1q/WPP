---
title: Date & Color Picker
cat: nativeHTML
image: ""
desc: <input> elements of type="date" create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface. This example sets a default value date of 2022-04-01 and then we use JS to update the value to 2006-10-31 and log to console. Only using CSS, it also validates input with a visual indicator. 
---


<html-code>
<label for="start">Select a date:</label>
<input type="date" id="start" name="trip-start" value="2022-04-01" min="2001-01-01" max="2030-12-31" />
<span class="validity"></span>


<label for="time">Select a time:</label>
<input type="time" id="time"/>

<label for="color">Select a color:</label>
<input type="color" id="color"/>


</html-code>

<css-code>
label {
  display: flex;
  align-items: center;
}
span::after {
  padding-left: 5px;
}
input:invalid + span::after {
  color:red;
  content: "✖";
}
input:valid + span::after {
  color:green;
  content: "✓";
}
</css-code>
<js-code>

const dateControl = document.querySelector('input[type="date"]');
console.log("defalt value: "+dateControl.value); // default value "2022-04-01"
dateControl.value = "2006-10-31";
console.log("updated value: "+dateControl.value); // updated value "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a 


</js-code>
