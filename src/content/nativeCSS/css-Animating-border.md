---

title: Animating Boarders - @property
cat: native-css
image: image
desc: CSS Border Animations using css pseudo-elements ::before and ::after. Creating a border animation in css using conic-gradients and custom propertie variables. 
---

<html-code>
<div class="card">
<h2>Animating Boarder</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nulla ex. Sed tempor sem augue, vitae convallis turpis sodales vitae. Vestibulum tristique nisl quis nunc porttitor ornare. Donec ac urna maximus lorem congue dictum nec vel nisl. Praesent aliquet, tellus a aliquam commodo, mauris eros faucibus orci.</p>
</div>
</html-code>

<css-code>body {
  background: #000F;
  color: #FFFA;
  margin: 10px;
  width: 100vw;
}

/* Using @property instead of CSS variables to set a type and update later through keyframes */
@property --angle{
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.card{
  margin: 0 auto;
  padding: 2em;
  width: 310px;
  background: #1c1f2b;
  text-align: center;
  border-radius: 10px;
  position: relative;
}
.card::after, .card::before{
  content:'';
  position: absolute;
  height: 100%;
  width: 100%;
   background-image: conic-gradient(from var(--angle), transparent 80%, #ff4545, #00ff99, #006aff, #ff0095, #ff4545);
  /* background-image: conic-gradient(from var(--angle), transparent 70%, #1e38ff); */
  
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 3px; /* controles the width of the boarder */
  border-radius: 10px;
  animation: 2s spin linear infinite;
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
</css-code>