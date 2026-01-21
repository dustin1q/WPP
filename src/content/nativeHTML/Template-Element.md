---
title: Template-Element
cat: native-html
image: ""
desc: <template> elements are used to declare fragments of HTML that are not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript. this is more performant than using innerHTML maore managable than creating elements in JS.
---


<html-code>
<h3>To Do List</h3>
<input id="taskInput" placeholder="add task" />
<button id="addBtn">Add</button>
<ul id="task-list"></ul>
<template id="task-row">
  <li class="task">
    <span class="name"></span>
  </li>
</template>
</html-code>

<js-code>
const list = document.getElementById("task-list");
const input = document.getElementById("taskInput");

document.getElementById("addBtn").onclick = () => {
  const clone = document.getElementById("task-row").content.cloneNode(true);
  clone.querySelector(".task").textContent = input.value;
  list.appendChild(clone);
  input.value = "";
};
</js-code>
