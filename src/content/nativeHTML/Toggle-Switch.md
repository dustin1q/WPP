---
title: Toggle Switch
cat: native-html
image: ""
desc: A "toggle switch" (on/off button) with CSS using a checkbox.
---

<html-code>
<label>
  <input type="checkbox"/>
  HTML & CSS Toggle Switch
</label>
</html-code>

<css-code>
input{
  appearance: none;
  position: relative;
  display: inline;
  background: lightgray;
  height: 1.65rem;
  width: 2.75rem;
  vertical-align: middle;
  border-radius: 2rem;
  box-shadow: 0px 1px 3px #0003 inset;
  transition: 0.25s linear background;
}
input::before{
  content: '';
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  background: #fff;
  border-radius: 1.2rem;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  box-shadow: 0px 1px 3px #0003;
  transition: 0.25s linear background;
  transform: translateX(0rem);
}
input:checked{
  background: green;
}
input:checked::before{
  transform: translateX(1rem);
}
input:focus-visible{
  outline: 2px solid blue;
}
input:focus{
  outline-color: transparent;
}
</css-code>


