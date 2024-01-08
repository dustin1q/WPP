---
title: Styling a Native Select Element
image: ""
desc: This example uses CSS variables and a small theming system to showcase styling capabilities on a native select. Here the browser chrome defines the UI when selecting options. This native implementation assures a reliable and predictable user experience on desktop and mobile devices.  
---


<html-code>
<select>
  <option>Select a rocket</option>
  <option>Falcon 9<o/ption>
  <option>Falcon Heavy<o/ption>
  <option>Starship<o/ption>
  <option>Saturn 5<o/ption>
</select>
<select class="theme-pink-pill">
  <option>Select a rocket</option>
  <option>Falcon 9<o/ption>
  <option>Falcon Heavy<o/ption>
  <option>Starship<o/ption>
  <option>Saturn 5<o/ption>
</select>
<select class="theme-dark">
  <option>Select a rocket</option>
  <option>Falcon 9<o/ption>
  <option>Falcon Heavy<o/ption>
  <option>Starship<o/ption>
  <option>Saturn 5<o/ption>
</select>
</html-code>

<css-code>

:root {
  /* default theme */
  --radius: 2px;
  --baseFg: rgb(128, 126, 126);
  --baseBg: white;
  --accentFg: #0d0d0d;
  --accentBg: #d3eff3;
}

.theme-pink-pill {
  --radius: 2em;
  --baseFg: #c70062;
  --baseBg: #ffe3f1;
  --accentFg: #c70062;
  --accentBg: #ffaad4;
}

.theme-dark {
  --radius: 0;
  --baseFg: white;
  --baseBg: black;
  --accentFg: rgb(245, 240, 240);
  --accentBg: rgb(83, 82, 82);
}

select {
  font: 400 12px/1.3 sans-serif;
  -webkit-appearance: none;
  appearance: none;
  color: var(--baseFg);
  border: 1px solid var(--baseFg);
  line-height: 1;
  outline: 0;
  padding: 0.65em 2.5em 0.55em 0.75em;
  border-radius: var(--radius);
  background-color: var(--baseBg);
  background-image: linear-gradient(var(--baseFg), var(--baseFg)),
    linear-gradient(-135deg, transparent 50%, var(--accentBg) 50%),
    linear-gradient(-225deg, transparent 50%, var(--accentBg) 50%),
    linear-gradient(var(--accentBg) 42%, var(--accentFg) 42%);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: 1px 100%, 20px 22px, 20px 22px, 20px 100%;
  background-position: right 20px center, right bottom, right bottom, right bottom;   
}

select:hover {
  background-image: linear-gradient(var(--accentFg), var(--accentFg)),
    linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
    linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
    linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
}

select:active {
  background-image: linear-gradient(var(--accentFg), var(--accentFg)),
    linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
    linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
    linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
  color: var(--accentBg);
  border-color: var(--accentFg);
  background-color: var(--accentFg);
}


</css-code>
