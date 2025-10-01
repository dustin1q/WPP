---
title: Relative Colour
cat: native-css
image: ""
desc: The CSS colors module defines relative color syntax, which allows a CSS <color> value to be defined relative to another color. This is a powerful feature that enables easy creation of complements to existing colors — such as lighter, darker, saturated, semi-transparent, or inverted variants — enabling more effective color palette creation.
---

<html-code>
<div class="wrap">
  <div class="box">
    <div class="color" style="background-color:var(--base);"></div>
    <div class="name">Base</div>
  </div>
  <div class="box">
    <div class="color" style="background-color:var(--lighter);"></div>
    <div class="name">Lighter</div>
  </div>
  <div class="box">
    <div class="color" style="background-color:var(--darker);"></div>
    <div class="name">Darker</div>
  </div>
  <div class="box">
    <div class="color" style="background-color:var(--complement);"></div>
    <div class="name">Complement</div>
  </div>
</div>
</html-code>

<css-code>
:root {
  --base: #7c3aed;

  --lighter: oklch(from var(--base) clamp(0, l + 0.22, 1) calc(c * 0.9) h);
  --darker: oklch(from var(--base) clamp(0, l - 0.22, 1) calc(c * 0.92) h);
  --complement: hsl(from var(--base) calc(h - 180) s l);
  
  font-family: system-ui, sans-serif;
}

.wrap{
  height: 100vh;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.box {
  width: 150px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 2px 2px 12px #ddd;
}

.color {
  aspect-ratio: 1 / 1;
}

.name{
  padding: 0.5rem 1rem;
  font-weight: light;
}

</css-code>
