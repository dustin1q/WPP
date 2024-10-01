---

title: Star Rating 
cat: uiAccelerators
image: image
desc: Using CSS Background values to limit DOM count and complexity, we render a dynamic star rating view. 
---


<html-code>
<div class="rating"></div>
<p>How was your experience?</p>
<select>
  <option value="0">0 Stars</option>
  <option value="1">1 Star</option>
  <option value="2">2 Stars</option>
  <option value="3">3 Stars</option>
  <option value="4">4 Stars</option>
  <option value="5">5 Stars</option>
</select>
</html-code>

<css-code>
.rating {
  /* settings, you can play with these */
  --star-size: 5rem;
  --gap: 15px;
  
  /* calculations, don't touch these :) */
  --gap-max-size: min(var(--gap), var(--star-size) / 5);
  --gap-calc: calc( (var(--star-count, 0) - 1) * var(--gap-max-size) );
  
  height: var(--star-size);
  width: 
    calc(var(--star-count, 0) * var(--star-size) + var(--gap-calc));
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/star.svg);
  background-repeat: space no-repeat;
  background-size: var(--star-size);
}

@layer not-demo-related {
  body {
    font-size: 2rem;
    font-family: system-ui;
    padding: 4rem;
    background: #111;
    color: hsl(0 0% 90%);
  }
  
  select {
    font: inherit;
    padding: 1rem 3rem;
  }
  
  .rating {
/*     margin-inline: auto; */
  }
}
</css-code>
<js-code>
let starRating = document.querySelector('select')

starRating.addEventListener('change', e =>
  document.body.style.setProperty('--star-count', e.target.value),
)

</js-code>