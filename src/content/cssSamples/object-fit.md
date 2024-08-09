---
title: Object-fit

image: ""
desc: The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.


---

<html-code>
<img class="fill" src="https://assets.newatlas.com/dims4/default/0fa9d1d/2147483647/strip/true/crop/1688x1125+308+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff3%2Fe1%2F41e61a0c4d468823070534adbb84%2Fdragon-carousel-0007-2.jpg" alt="Dragon Spacecraft" />

  <img class="fill narrow" src="https://assets.newatlas.com/dims4/default/0fa9d1d/2147483647/strip/true/crop/1688x1125+308+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff3%2Fe1%2F41e61a0c4d468823070534adbb84%2Fdragon-carousel-0007-2.jpg" alt="Dragon Spacecraft" />

  <h2>object-fit: contain</h2>
  <img class="contain" src="https://assets.newatlas.com/dims4/default/0fa9d1d/2147483647/strip/true/crop/1688x1125+308+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff3%2Fe1%2F41e61a0c4d468823070534adbb84%2Fdragon-carousel-0007-2.jpg" alt="Dragon Spacecraft" />

  <img class="contain narrow" src="https://assets.newatlas.com/dims4/default/0fa9d1d/2147483647/strip/true/crop/1688x1125+308+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff3%2Fe1%2F41e61a0c4d468823070534adbb84%2Fdragon-carousel-0007-2.jpg" alt="Dragon Spacecraft" />

  <h2>object-fit: cover</h2>
  <img class="cover" src="https://assets.newatlas.com/dims4/default/0fa9d1d/2147483647/strip/true/crop/1688x1125+308+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff3%2Fe1%2F41e61a0c4d468823070534adbb84%2Fdragon-carousel-0007-2.jpg" alt="Dragon Spacecraft" />

  <img class="cover narrow" src="https://assets.newatlas.com/dims4/default/0fa9d1d/2147483647/strip/true/crop/1688x1125+308+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff3%2Fe1%2F41e61a0c4d468823070534adbb84%2Fdragon-carousel-0007-2.jpg" alt="Dragon Spacecraft" />

  <h2>object-fit: none</h2>
  <img class="none" src="https://assets.newatlas.com/dims4/default/0fa9d1d/2147483647/strip/true/crop/1688x1125+308+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff3%2Fe1%2F41e61a0c4d468823070534adbb84%2Fdragon-carousel-0007-2.jpg" alt="Dragon Spacecraft" />

  <img class="none narrow" src="https://assets.newatlas.com/dims4/default/0fa9d1d/2147483647/strip/true/crop/1688x1125+308+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff3%2Fe1%2F41e61a0c4d468823070534adbb84%2Fdragon-carousel-0007-2.jpg" alt="Dragon Spacecraft" />

  <h2>object-fit: scale-down</h2>
  <img class="scale-down" src="https://assets.newatlas.com/dims4/default/0fa9d1d/2147483647/strip/true/crop/1688x1125+308+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff3%2Fe1%2F41e61a0c4d468823070534adbb84%2Fdragon-carousel-0007-2.jpg" alt="Dragon Spacecraft" />

  <img class="scale-down narrow" src="https://assets.newatlas.com/dims4/default/0fa9d1d/2147483647/strip/true/crop/1688x1125+308+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff3%2Fe1%2F41e61a0c4d468823070534adbb84%2Fdragon-carousel-0007-2.jpg" alt="Dragon Spacecraft" />


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