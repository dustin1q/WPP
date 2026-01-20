---
title: Object-fit
cat: native-css
image: ""
desc: The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.


---

<html-code>
<h2>object-fit: fill</h2>
<img class="fill" src="https://behindtheframework.com/sampleImages/dragon.jpg" alt="Dragon Spacecraft" />

<img class="fill narrow" src="https://behindtheframework.com/sampleImages/dragon.jpg" alt="Dragon Spacecraft" />

<h2>object-fit: contain</h2>
<img class="contain" src="https://behindtheframework.com/sampleImages/dragon.jpg" alt="Dragon Spacecraft" />

<img class="contain narrow" src="https://behindtheframework.com/sampleImages/dragon.jpg" alt="Dragon Spacecraft" />

<h2>object-fit: cover</h2>
<img class="cover" src="https://behindtheframework.com/sampleImages/dragon.jpg" alt="Dragon Spacecraft" />

<img class="cover narrow" src="https://behindtheframework.com/sampleImages/dragon.jpg" alt="Dragon Spacecraft" />

<h2>object-fit: none</h2>
<img class="none" src="https://behindtheframework.com/sampleImages/dragon.jpg" alt="Dragon Spacecraft" />

<img class="none narrow" src="https://behindtheframework.com/sampleImages/dragon.jpg" alt="Dragon Spacecraft" />

<h2>object-fit: scale-down</h2>
<img class="scale-down" src="https://behindtheframework.com/sampleImages/dragon.jpg" alt="Dragon Spacecraft" />

<img class="scale-down narrow" src="https://behindtheframework.com/sampleImages/dragon.jpg" alt="Dragon Spacecraft" />


</html-code>

<css-code>
img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
  margin: 10px 0;
}

.narrow {
  width: 100px;
  height: 150px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
</css-code>
You can alter the alignment of the replaced element's content object within the element's box using the object-position property.

## Values
### **contain**
The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box. The entire object is made to fill the box, while preserving its aspect ratio, so the object will be "letterboxed" if its aspect ratio does not match the aspect ratio of the box.

### **cover**
The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.

### **fill**
The replaced content is sized to fill the element's content box. The entire object will completely fill the box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be stretched to fit.

### **none**
The replaced content is not resized.

### **scale-down**
The content is sized as if none or contain were specified, whichever would result in a smaller concrete object size.


### **Additionally**
Consider using aspect-ratio` 
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
`