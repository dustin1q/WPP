---

title: Popover Hamburger Menu
cat: uiAccelerators
image: image
desc: Using the Popover API you can build out this simple hamburger menu with no javascript. 
---

<html-code>
 <button class="menu-btn" popovertarget="menu">
  <span>&#9776;</span>
  <span class="sr-only">Open menu</span>
</button>

<nav popover id="menu">
  <button class="close-btn" popovertarget="menu" popovertargetaction="hide">
    <span aria-hidden="true">&#10006;</span>
    <span class="sr-only">Close menu</span>
  </button>
  <ul>
    <li><a href="#">Falcon 9</a></li>
    <li><a href="#">Saturn 5</a></li>
    <li><a href="#">Starship</a></li>
    <li><a href="#">Atlas</a></li>
    <li><a href="#">New Glen</a></li>
  </ul>
</nav>
<h3>Hamburger menu Using Popover API - No Javascript</h3>
<p>Click open the hamburger menu to see a demo of JavaScript-free interaction handling! By using the <code>popover</code> attribute, you can allow the browser to handle the keyboard management (including navigation via <kbd>esc</kbd>, <kbd>spacebar</kbd>, and <kbd>enter</kbd>), optional light-dismiss (clicking outside the boundaries of the popover), and click handlers such as on the open and close buttons. Note: I removed the backdrop styling because popover doesn't inert the page so it might be confusing.</p>
</html-code>
<css-code>
#menu {
  width: 250px;
  height: 100%;
  box-shadow: 0 2px 40px darkgrey;
   
  /*  undo popover styles  */
  border: none;
  padding: 0;
  margin: 0;
  right: auto;

  /*  animate  */
  transition: translate 0.5s ease-out, display 0.5s ease-out allow-discrete,
    overlay 0.5s ease-out allow-discrete;
  translate: -250px 0;

  /*   &::backdrop {
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.5s;
  } */

  &:popover-open {
    translate: 0 0;

    /* &::backdrop {
      opacity: 1;
    } */

    @starting-style {
      translate: -250px 0;

      /* &::backdrop {
        opacity: 0;
      } */
    }
  }
}

/* Other styles */

@property --col-2 {
  syntax: "<color>";
  inherits: false;
  initial-value: #5f1dff;
}

@property --col-1 {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}

.menu-btn {
  position: fixed;
  top: 0;
  left: 0;
  background: none;
  border: none;
  font-size:30px;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
   font-size:30px;
}

ul {
  display: grid;
  gap: 1rem;
  padding: 0;
  margin: 3.5rem 0 0 2rem;
}

li {
  list-style: none;
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

body {
  font-size: 1.5rem;
  font-family: system-ui;
  overflow-x: hidden;
  padding: 2rem;
}
</css-code>
