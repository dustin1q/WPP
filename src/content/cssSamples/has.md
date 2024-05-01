---
title: :has() & :not(:has())

image: ""
desc: The functional :has() CSS pseudo-class represents an element if any of the relative selectors that are passed as an argument match at least one element when anchored against this element. This pseudo-class presents a way of selecting a parent element or a previous sibling element with respect to a reference element by taking a relative selector list as an argument.
---

<html-code>
<div class="wrapper">
    <article class="card">
        <h2>Card title</h2>
        <div class="thumb">Image</div><!--image thumb on one card -->
        <p>A bit of a description text</p>
    </article>
    <article class="card">
        <h2>Card title</h2>
        <p>A bit of a description text</p>
    </article>
</div>
</html-code>

<css-code>
.wrapper{
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
}
.card {
  display: flex;
  flex-wrap: wrap;
  max-width: 230px; 
  gap: 1rem;
  padding: 0.5rem;
  border: 1px solid;
  border-radius: 5px;
  h2 {
    margin-top: 0;
  }
  p{
      font-size: 1.5rem;
  }
}
.thumb {
  aspect-ratio: 4/3;
  width: 200px;
  align-content: center;
  text-align: center;
  padding: 0.5rem;
  background-color: #bcbcbc;
  border: 1px solid black;
}
.card:has(.thumb) {/*select cards and its child elements containing a thumb element */
  align-items: center;
 p {
    font-size: 0.8rem;
  }
}
.card:not(:has(.thumb)) {/*select cards and its child elements NOT containing a thumb element */
  border-top: 5px solid;
  display: flex;
  align-items: center;
 h2 {
    font-size: 3.5rem;
  }
}
</css-code>
