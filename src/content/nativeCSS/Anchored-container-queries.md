---
title: CSS Anchor Positioning
cat: native-css
image: ""
desc: The CSS anchor positioning API provides a powerful way to tether an element (like a popover) to another (the anchor) and define a set of position-try-fallbacks used if the element runs out of room. For example, if your anchored element is initially styled to be on the top, but as you scroll and it hits the edge of the screen, the browser can handle the "flipping" to keep it in the viewport.

---

<html-code>
<div class="button-group">
  <button popovertarget="my-tooltip-1">
    <p aria-hidden="true">?</p>
    <p class="sr-only">Password Tooltip</p>
  </button>
  <div id="my-tooltip-1" class="tooltip" popover>
    <p>Must be at least 8 characters with one special symbol.</p>
  </div>

  <button popovertarget="my-tooltip-2">
    <p aria-hidden="true">?</p>
    <p class="sr-only">Display Tooltip</p>
  </button>
  <div id="my-tooltip-2" class="tooltip" popover>
    <p>Adjust display preferences and notification frequency.</p>
  </div>

  <button popovertarget="my-tooltip-3">
    <p aria-hidden="true">?</p>
    <p class="sr-only">Update Tooltip</p>
  </button>
  <div id="my-tooltip-3" class="tooltip" popover>
    <p>Finalize your changes and update the database.</p>
  </div>
</div>
</html-code>
<css-code>
.tooltip {  
  position-area: top;
  position-try-fallbacks: flip-block;
  margin: 0;
  margin-bottom: 0.5rem;
  /*  NEW  */
  container-type: anchored;
  
  /*  arrow  */
  &::before {
    content: '';
    top: 100%;
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: transparent;
    border-top-color: black;
    border-width: 8px;
    margin-left: -8px;
    
    /*   NEW   */
    @container anchored(fallback: flip-block) {
      bottom: 100%;
      top: calc(-2 * 0.5rem);
      border-top-color: transparent;
      border-bottom-color: black;
    }
  }
  
  /*  etc on tooltip popover */
  inset: auto;
  background: black;
  max-width: 210px;
  color: white;
  border: 1px solid #ddd;
  padding: 0 1rem;
  overflow: visible;
  border-radius: 0.75rem;
  box-shadow: rgba(25, 25, 26, 0.2) 0px 7px 29px 0px;
}

/* etc */
.button-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 40dvh;
}

button {
  font-size: calc(2rem - 0.75rem);
  border-radius: 2rem;
  height: 2rem;
  aspect-ratio: 3 / 2;
  display: grid;
  border: 1px solid #9e9c9c;
  box-shadow: rgba(25, 25, 26, 0.2) 0px 7px 29px 0px;
  place-content: center;
}

body {
  height: 200dvh;
  display: grid;
  justify-items: center;
  position: relative;
  font-family: system-ui, serif;
  line-height: 1.4;
}

.sr-only {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}
</css-code>
