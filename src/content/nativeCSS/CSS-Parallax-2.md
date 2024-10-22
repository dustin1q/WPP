---
title: CSS Parallax 2 w/ Sections
cat: native-css
desc: Pure CSS Parallax Scroll with 3 sections using three layers of perspective. Base, Mid & Top 
---

<html-code><div class="px-container">
  <div class="px-section px-begin">Begining</div>
  <div class="px-section" id="section-1">
    <p>Section 1<p>
    <div class="px-layer px-base">Base Layer</div>
    <div class="px-layer px-mid">Mid Layer</div>
  </div>
  <div class="px-section" id="section-2">
    <p>Section 2<p>
    <div class="px-layer px-mid">Mid Layer</div>
    <div class="px-layer px-top">Top Layer</div>
  </div>
  <div class="px-section" id="section-3">
    <p>Section 3<p>
    <div class="px-layer px-base">Base Layer</div>
    <div class="px-layer px-mid">Mid Layer</div>
    <div class="px-layer px-top">Top Layer</div>
  </div>
  <div class="px-section px-end">The End</div>
</div>
</html-code>
<css-code>*{
  margin: 0;
  padding: 0;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 1em;
}
.px-container{
  height:100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 300px;
}
.px-begin{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  background-color: rgb(51, 221, 240); 
  z-index: 0;
}
.px-end{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  background-color: rgb(11, 79, 87); 
}
.px-section{ 
  position: relative;
  height:100vh;
  transform-style: preserve-3d;
}
.px-layer{ 
  font-size: 2.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
}
.px-base{
  /*scale calculations: 1 + (z transform value * -1) / perspective */
  transform: translateZ(0px)
}
.px-mid{
  transform: translateZ(50px) scale(0.8); ;
}
.px-top{
   transform: translateZ(130px) scale(0.6);
}
/*customize each section using a section ID*/
#section-1{
  z-index: -1;   
  background-color: rgb(32, 100, 203); 
}
#section-2{
  z-index: -2; 
   background-color: rgb(26, 57, 179); 
}
#section-3{
  z-index: -3; 
   background-color: rgb(60, 106, 255); 
}
</css-code>


