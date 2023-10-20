---
title: Select

desc: The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
---


<div class="editor" id="HTML">


<label class="custom-select" for="styledSelect1"><select id="styledSelect1" name="options">
    <option value="">
      Select an option
    </option>
    <option value="1">
      Option 1
    </option>
    <option value="2">
      Option 2
    </option>
    <option value="3">
      Option 3
    </option>
    <option value="4">
      Option 4
    </option>
  </select>
  
  </label>


</div>


<div class="editor" id="CSS">
:root {
--select-border:#777;
--select-focus:blue;
--select-arrow: var(--select-border);
}

.select {
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}

</div>
