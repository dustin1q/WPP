---
title: Clip Path & Filters
cat: native-css
image: ""
desc: The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden. The filter CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
---

<html-code>
<picture class="img-pic">
  <source media="(min-width:960px)" srcset="https://behindtheframework.com/sampleImages/spacecraft-Gemini-12-John-F-Kennedy-Space-Nov-11-1966.webp" width="300" height="300">
  <img src="https://behindtheframework.com/sampleImages/spacecraft-Gemini-12-John-F-Kennedy-Space-Nov-11-1966.webp" width="300" height="300">
</picture>
<img src="https://behindtheframework.com/sampleImages/spacecraft-Gemini-12-John-F-Kennedy-Space-Nov-11-1966.webp" alt="Rocket" width="300" height="300">

</html-code>

<css-code>
img {
  filter: grayscale(100%);
}
.img-pic{
  clip-path: circle(50% at 150px -150px );
  > img{
    filter: sepia(100%);
    /*
   filter: blur(5px);
   filter: contrast(200%);
   filter: hue-rotate(90deg);
   filter: drop-shadow(16px 16px 20px red) invert(75%);
    */
  }
}

</css-code>
