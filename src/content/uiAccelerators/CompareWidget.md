---

title: CSS Image Compare 
image: image
desc: Using CSS grid, masks and an input type range to create a comparison component. 
---
https://github.com/argyleink/gui-challenges/tree/main/compare

<html-code>
    <div class="compare">
        <section class="before">
            <img src="https://assets.codepen.io/2585/Runner.svg" alt="">
        </section>
        <section class="after">
            <img src="https://assets.codepen.io/2585/Roboto.svg" alt="">
        </section>
        <input type="range" id="range" step="0.1">
    </div>
</html-code>

<css-code>
.compare {
  display: grid;
  
  > * {
    grid-area: 1 / 1;
  }
  
  > section {
    display: grid;
    place-content: center;
  }

  .before {
    mask: linear-gradient(to right, #000 0, var(--pos, 50%), #0000 0);
  }

  .after {
    mask: linear-gradient(to right, #0000 0, var(--pos, 50%), #000 0);
  }

  input[type="range"] {
    z-index: 1;
    appearance: none;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    
    &::-webkit-slider-thumb {
      appearance: none;
      inline-size: 4px;
      block-size: 100dvb;
      background-color: CanvasText;
    } 
    
    &::-moz-range-thumb {
      appearance: none;
      inline-size: 4px;
      block-size: 100dvb;
      background-color: CanvasText;
    }
  }
}
</css-code>

<js-code>
range.oninput = () =>
  document.body.style.setProperty('--pos', range.value + '%')

</js-code>