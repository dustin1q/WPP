---
title: Progress, meter & range elements 
cat: native-html
desc: The <progress> & <meter> HTML elements display an indicator showing the completion progress of a task, typically displayed as a progress bar. Input type range allows a user to select a rage by draging the indicator.
---


<html-code>
<label for="file">File progress: progress</label>
<progress
  id="file"
  class="uam"
  max="100"
  value="30"
  data-timeout="1000"
  tabindex="-1"
  aria-label="File Progress"
>
</progress>

<label for="fuel">Fuel level: meter</label>
<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">at 50/100</meter>

<label for="myRange">Range slider: range </label>
  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
</html-code>


<css-code>
progress[value] {
  --color: rgb(50, 48, 48); /* the progress color */
  --background: rgb(212, 210, 210); /* the background color */

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  width: 200px;
  margin: 0 10px;
  border-radius: 5em;
  background: var(--background);
}
progress[value]::-webkit-progress-bar {
  border-radius: 10em;
  background: var(--background);
}
progress[value]::-webkit-progress-value {
  border-radius: 10em;
  background: var(--color);
}
progress[value]::-moz-progress-bar {
  border-radius: 10em;
  background: var(--color);
}

label {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  display: block;
  margin: 20px 0;
}



.slider {
  -webkit-appearance: none;
  width: 20em;
  height: 0.6em;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04AA6D;
  cursor: pointer;
}
</css-code>
