---
title: Anchor Interpolated Morph (AIM)
cat: ui-accelerators
image: ""
desc: The gist of AIM is to use CSS to access properties from where another element is (first), to where natural render is (last), and let transition handle invert and play. Using anchor(), anchor-size(), @starting-style, and interpolate-size.
---

<html-code>
<button commandfor="demo" command="show-modal">New Message</button> 

<dialog id="demo" closedBy="any">
  <form method="dialog">
    <textarea rows="4" placeholder="New Message…"></textarea>
    <div>
      <button value="cancel" formmethod="dialog" type="submit">Cancel</button>
      <button type="submit">Send</button>
    </div>
  </form>
</dialog>
</html-code>

<css-code>
@import "https://unpkg.com/open-props/easings.min.css";

button {
  /* enable observing my height/width/position */
  anchor-name: --⚓︎-morph; 
}

dialog {
  /* used by the layout container first child of the dialog */
  /* extrinsic for the mask effect as dialog height/width change */
  --_size: 200px;
  
  /* overall speed of the effect, go large for debug */
  --_speed-in: .3s;
  --_speed-out: .2s;
  --_speed: var(--_speed-in);
  
  /* polish+ ability to match achor radius during transition (needs JS or known value) */
  --_anchor-radius: 5px;
  /* polish+ match bg color (needs JS or known value) */
  --_anchor-bg: ;
  
  /* polish+ dur, ease and delay for perfectly timing the dialog bg with the morph */
  --_bg-transition: calc(var(--_speed) * .25) var(--ease-3) 0s;
  
  /* polish+? top has different timing/easing when going in vs out */
  --_top-transition: calc(var(--_speed) * 2.5) var(--ease-spring-3);
  
  /* observe properties from anchor */
  position-anchor: --⚓︎-morph;
  
  /* enable transition to auto width/height */
  interpolate-size: allow-keywords;
  
  /* resets */
  margin: 0;
  padding: 0;
  
  /* mask effect */
  overflow: clip;
  
  /* ON STAGE position (natural) */
  /* top left morph */
  left: anchor(left);
  top: anchor(top);
  
  /* center morph */
  place-items: center;
  left: calc(anchor(left) - (var(--_size) * .25));
  top: calc(anchor(top) - 25px); /* nice subtle top offset */
  
  @media (prefers-reduced-motion: no-preference) {
    transition:
      display var(--_speed) allow-discrete,
      overlay var(--_speed) allow-discrete,
      height var(--_speed) var(--ease-3),
      width var(--_speed) var(--ease-3),
      top var(--_top-transition),
      right var(--_speed) var(--ease-3),
      bottom var(--_speed) var(--ease-3),
      left var(--_speed) var(--ease-3),
      border-radius var(--_speed) var(--ease-3),
      background var(--_bg-transition);
  }
  
  > * {
    /* must have for the height/width to be a mask */
    inline-size: var(--_size);
    
    /* motion flare */
    @media (prefers-reduced-motion: no-preference) {
      transition: 
        opacity var(--_speed) var(--ease-3), 
        transform var(--_speed) var(--ease-3);
    }
    
    /* slide in from top */
    @starting-style {
      transform: translateY(-50px);
    }
  }
  
  /* EXIT STAGE TO */
  &:not([open]) {    
    left: anchor(left);
    top: anchor(top);
    right: anchor(right);
    bottom: anchor(bottom);
    width: anchor-size(width);
    height: anchor-size(height);
    background-color: #0000;
    border-radius: var(--_anchor-radius);
    
    /* outgoing timing mods */
    --_speed: var(--_speed-out);
    --_bg-transition: var(--_speed) var(--ease-3) calc(var(--_speed) * .5);
    --_top-transition: var(--_speed) var(--ease-3);
    
    > * {
      opacity: 0;
    }
  }
  
  /* ENTER STAGE FROM */
  @starting-style {
    &[open] {
      left: anchor(left);
      top: anchor(top);
      right: anchor(right);
      bottom: anchor(bottom);
      width: anchor-size(width);
      height: anchor-size(height);
      background-color: #0000;
      border-radius: var(--_anchor-radius);
      
      > * {
        opacity: 0;
      }
    }
  }

  /* hide backdrop entirely */
  &::backdrop {
    opacity: 0;
  }
}










@layer demo.support {
  *:not(dialog) {
    box-sizing: border-box;
    margin: 0;
  }
  
  html {
    block-size: 100%;
    color-scheme: dark light;
    scrollbar-color: color-mix(in srgb, CanvasText, #0000 50%) #0000;
  }

  body {
    min-block-size: 100%;
    font-family: system-ui, sans-serif;
    display: grid;
    place-content: center;
  }
  
  dialog {
    overscroll-behavior: contain;
    border: none;
    background: color-mix(in srgb, CanvasText, Canvas 80%);
    
    &::backdrop {
      overflow: hidden;
      overscroll-behavior: contain;
    }
    
    form {
      display: grid;
      gap: 10px;
      padding: 10px;
      
      > div {
        display: flex;
        place-content: end;
        gap: 10px;
      }
    }
  }
}
</css-code>

see: https://nerdy.dev/anchor-interpolated-morphing#aim
