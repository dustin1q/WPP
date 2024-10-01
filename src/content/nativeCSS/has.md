---
title: :has() & :not(:has())
cat: native-css
image: ""
desc: The functional :has() CSS pseudo-class represents an element if any of the relative selectors that are passed as an argument match at least one element when anchored against this element. This pseudo-class presents a way of selecting a parent element or a previous sibling element with respect to a reference element by taking a relative selector list as an argument.
---

<html-code>
<div class="wrapper">
    <!--Example 1 Card has image -->
    <article class="card">
        <h2>Card title</h2>
        <div class="thumb">Image</div><!--image thumb on one card -->
        <p>A bit of a description text</p>
    </article>
    <article class="card">
        <h2>Card title</h2>
        <p>A bit of a description text</p>
    </article>

    <!--Example 2 Form has selected element -->
    <fieldset>
        <legend>Select a rocket</legend>
        <lable><input name="rocket" type="radio">Falcon 9</lable>
        <lable><input name="rocket" type="radio">Falcon Heavy</lable>
        <lable><input name="rocket" type="radio">Starship</lable>
        <lable><input name="rocket" type="radio">Satun 5 </lable>
        <lable><input name="rocket" type="radio" id="other">Other</lable>
        <input id="other-input">
    </fieldset>
</div>
</html-code>

<css-code>
.wrapper{
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
}
/*example #1 */
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

/*example #2 */
fieldset{
  display: flex;
  flex-direction: column;
  width: 20rem;
}

fieldset #other-input{
  display: none;
}
fieldset:has(#other:checked) #other-input{
  display: block;
}
</css-code>
