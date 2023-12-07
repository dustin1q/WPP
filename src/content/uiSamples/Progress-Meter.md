---
title: Progress Bar

desc: The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
---


<html-code>
<label for="file">File progress:</label>
<progress
  id="html2"
  class="uam"
  max="100"
  value="0"
  data-timeout="1000"
  tabindex="-1"
  aria-label="File Progress"
>
</progress>
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
</css-code>
