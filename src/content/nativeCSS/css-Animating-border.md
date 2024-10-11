---

title: Animating Boarders - @property
cat: native-css
image: image
desc: CSS Border Animations using css pseudo-elements ::before and ::after. Creating a border animation in css using conic-gradients and custom propertie variables. 
---

<html-code>
<div class="card" id="cometTail">
    <h2>Comet</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae .</p>
</div>
<div class="card" id="rainbow">
    <h2>Rainbow</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae .</p>
</div>
<div class="card" id="blue">
    <h2>One Colour</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae .</p>
</div>
</html-code>

<css-code>body {
  background: #000F;
  color: #FFFA;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7em;
  h2{
   margin-block: 0em;
  }
}

/* Using @property instead of CSS variables to set a type and update later through keyframes */
@property --angle{
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.card{
  margin:  0 auto;
  padding: 2em;
  width: clamp(15ch, 20%, 20ch);
  height: 150px;
  background: #1d1d1d;
  text-align: center;
  border-radius: 10px;
  position: relative;
}
.card::after, .card::before{
  content:'';
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 1px; /* set width of the boarder */
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  border-radius: 10px;
  animation: 1.5s spin linear infinite;
}
.card::before{
  filter: blur(1.5rem);
  opacity: 0.5;
}

@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
   --angle: 360deg;
  }
}

#cometTail::before, #cometTail::after{
   /*comet tail effect*/
  background-image: conic-gradient(from var(--angle), transparent 20%, #2d2c2c, #acacac, #ffffff);
 }
#rainbow::before, #rainbow::after{
   /*Rainbow*/
  background-image: conic-gradient(from var(--angle), transparent 80%, #ff4545, #00ff99, #006aff, #ff0095, #ff4545);
}
#bue::before, #blue::after{
   /*Rainbow*/
  background-image: conic-gradient(from var(--angle), transparent 90%, #1e38ff); 
  filter: blur(0);
  opacity: 1;
  padding: 3px; /* set width of the boarder */
}
</css-code>