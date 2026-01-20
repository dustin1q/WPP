---

title: CSS Image Compare 
cat: ui-accelerators
image: image
desc: Using CSS grid, masks and an input type range to create a comparison component. 
---


<html-code>
<section class="container">
     <div class="compare">
        <section class="before">
            <img src="https://behindtheframework.com/sampleImages/southern-ring-nebula-before.jpg" alt="Hubble before shot">
        </section>
        <section class="after">
            <img src="https://behindtheframework.com/sampleImages/southern-ring-nebula-after.jpg" alt="Webb after shot">
        </section>
        <input type="range" id="bridge" step="0.1">
    </div>
</section>
</html-code>

<css-code>
.compare {
  display: grid;
  border: #000 solid 1px;
  width: 35em;
  margin:0.5em;
  & * {
    grid-area: 1 / 1;
  }
  
  > section {
    display: grid;
    place-content: center;
  }
  & img{
    width: 35em;
  }
  .before {
    mask: linear-gradient(to right, #000 0, var(--pos, 50%), #0000 0);
  }

  .after {
    mask: linear-gradient(to right, #0000 0, var(--pos, 50%), #000 0);
  }

  input[type="range"] {
    z-index: 1000;
    appearance: none;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    
    &::-webkit-slider-thumb {
      appearance: none;
      inline-size: 1px;
      block-size: 105dvb;
      background-color: gray;
    } 
    
    &::-moz-range-thumb {
      inline-size: 4px;
      block-size: 100%;
      background-color: rgb(227, 17, 17);
    }
  }
}
.container{
  display: flex;
}
</css-code>

<js-code>
bridge.oninput = () => document.body.style.setProperty('--pos', bridge.value + '%')
wallPainting.oninput = () => document.body.style.setProperty('--pos', wallPainting.value + '%')
/// both instances get set at the same time because they share the --pos CSS variable 
</js-code>

https://github.com/argyleink/gui-challenges/tree/main/compare