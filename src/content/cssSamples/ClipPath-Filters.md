---
title: Clip Path & Filters

image: ""
desc: The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden. The filter CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
---

<html-code>
<picture class="img-pic">
  <source media="(min-width:960px)" srcset="https://cdn.britannica.com/88/125688-050-3D31632D/spacecraft-Gemini-12-John-F-Kennedy-Space-Nov-11-1966.jpg" width="300" height="300">
  <img src="https://cdn.britannica.com/88/125688-050-3D31632D/spacecraft-Gemini-12-John-F-Kennedy-Space-Nov-11-1966.jpg" width="300" height="300">
</picture>
</html-code>
<img src="https://cdn.britannica.com/88/125688-050-3D31632D/spacecraft-Gemini-12-John-F-Kennedy-Space-Nov-11-1966.jpg" alt="Rocket" width="300" height="300">

<css-code>
img {
  filter: grayscale(100%);
}
.img-pic{
  clip-path: circle(50% at 150px -150px );
  > img{
    filter: sepia(100%)
  }
}
</css-code>
