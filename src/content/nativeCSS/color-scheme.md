---

title: Custom Color-Scheme 
cat: nativeCSS
image: ""
desc: The color-scheme CSS property allows an element to indicate which color schemes it can comfortably be rendered in. In this example we explore ways to add accent colors to input elements. 
---

<html-code>
<label>
  Checkbox
  <input type="checkbox" checked>
</label>

<label>
  Radio Buttons
  <fieldset>
    <input type="radio" name="accented-demo" checked>
    <input type="radio" name="accented-demo">
    <input type="radio" name="accented-demo">
  </fieldset>
</label>

<label>
  Range Slider
  <input type="range">
</label>

<label>
  Progress element
  <progress max="100" value="50">50%</progress>
</label>
</html-code>

<css-code>
:root {
  accent-color: rgb(110, 220, 36);
}
@media (prefers-color-scheme: dark) {
  :root {
    accent-color: rgb(110, 220, 36);
  }
}
label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}
fieldset {
  border: none;
  padding: 0;
}
* {
  box-sizing: border-box;
  margin: 0;
}
html {
  block-size: 100%;
  color-scheme: light dark;
}
body {
  min-block-size: 100%;
  font-family: system-ui, sans-serif;
  display: grid;
  place-content: center;
  gap: 2rem;
}
</css-code>


