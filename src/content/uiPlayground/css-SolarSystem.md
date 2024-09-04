---

title: CSS Solar System 
image: image
desc: The Solar System has been done in CSS a lot of times — just search Codepen! So why do it again? Because things get better and simpler — and we can now do a responsive solar system with just a few lines of CSS.
---
Based on Mads Stoumann's example here https://dev.to/madsstoumann/the-solar-system-in-css-51bo

<html-code>
<ol>
  <li class="sun"></li>
  <li class="mercury"></li>
  <li class="venus"></li>
  <li class="earth"></li>
  <li class="mars"></li>
  <li class="jupiter"></li>
  <li class="saturn"></li>
  <li class="uranus"></li>
  <li class="neptune"></li>
</ol>
</html-code>

<css-code>
body {
  background: #000F;
  color: #FFFA;
  margin: 0;
  width: 100vw;
}

ol {
  all: unset;
  aspect-ratio: 1 / 1;
  container-type: inline-size;
  display: grid;
  width: 100%;
}

li {
  aspect-ratio: 1 / 1;
  border: 1px dashed;
  border-radius: 50%;
  display: grid;
  grid-area: 1 / 1;
  place-self: center;
  width: var(--d, 2cqi);
  &::after {
    animation: rotate var(--t, 3s) linear infinite;
    aspect-ratio: 1 / 1;
    background: var(--b, hsl(0, 0%, 50%));
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    content: '';
    display: block;
    offset-path: content-box;
    width: var(--w, 2cqi);
  }
}

@keyframes rotate {
  to {
    offset-distance: 100%;
  }
}

.sun {
  --b: radial-gradient(circle, #f9d71c 0%, #f9a825 50%, #f9a825 100%);
  --d: 10cqi;
  --w: 8cqi;
  border: 0;
  &::after {
    animation: none;
    offset-path: none;
    place-self: center;
  }
}

.mercury {
  --b: radial-gradient(circle, #c2c2c2 0%, #8a8a8a 100%);
  --d: 15cqi;
  --t: 2105.26ms;
  --w: 2.0526cqi;
}

.venus {
  --b: radial-gradient(circle, #f4d03f 0%, #c39c43 100%);
  --d: 25cqi;
  --t: 4210.53ms;
  --w: 2.6053cqi;
}

.earth {
  --b: radial-gradient(circle, #3a82f7 0%, #2f9e44 80%, #1a5e20 100%);
  --d: 35cqi;
  --t: 6315.79ms;
  --w: 3.1579cqi;
}

.mars {
  --b: radial-gradient(circle, #e57373 0%, #af4448 100%);
  --d: 45cqi;
  --t: 8421.05ms;
  --w: 3.7105cqi;
}

.jupiter {
  --b: radial-gradient(circle, #d4a373 0%, #b36d32 50%, #f4e7d3 100%);
  --d: 60cqi;
  --t: 12631.58ms;
  --w: 4.8158cqi;
}

.saturn {
  --b: radial-gradient(circle, #e6dba0 0%, #c2a13e 100%);
  --d: 75cqi;
  --t: 14736.84ms;
  --w: 5.3684cqi;
}

.uranus {
  --b: radial-gradient(circle, #7de3f4 0%, #3ba0b5 100%);
  --d: 84.5cqi;
  --t: 10526.32ms;
  --w: 4.2632cqi;
}

.neptune {
  --b: radial-gradient(circle, #4c6ef5 0%, #1b3b8c 100%);
  --d: 94cqi;
  --t: 20000ms;
  --w: 6cqi;
}
</css-code>