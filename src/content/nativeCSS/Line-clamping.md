---

title: Line-Clamping
image: ""
cat: native-css
desc: Line Clamping specifies the number of lines after which the content will be clamped and clamp() CSS function which clamps a middle value within a range of values between a defined minimum bound and a maximum bound. See below example showcasing line-clamp on a block of text and clamp() affecting the width of an element.
---

<html-code>
<div class="card-holder">
  <div class="card" id="card1">
      <h3>Card 1</h3>
      <div class="image-holder">
        <code>
          -webkit-line-clamp: 2;
          width: clamp(23ch, 20%, 46ch);
        </code>
      </div>
      <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
  </div>
  <div class="card" id="card2">
      <h3>Card 2</h3>
      <div class="image-holder">
      <code>
          -webkit-line-clamp: 3;
          width: min(100px, 25%, 50vh, 30ch);
        </code>
      </div>
      <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.
          Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.
      </p>
  </div>
  <div class="card" id="card3">
      <h3>Card 3</h3>
      <div class="image-holder"> 
      <code>
        -webkit-line-clamp: 2;
        width: clamp(23ch, 20%, 46ch);
        </code>          
      </div>
      <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.
          Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.
      </p>
  </div>
</div>
</html-code>

<css-code>
.card-holder{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
}
  .image-holder {
    height: 100px;
   /* aspect-ratio: 16 / 9;*/
    background: rgb(71, 70, 70);
    margin: 0.5rem auto;
    padding: 1rem;
    color:#ffffff;
  }
  .card {
    background-color: rgb(194, 190, 190);
    padding: 1rem;
    border: 1px solid #141414;  
    min-width: 200px;
  }
  .card ul{
    list-style-type:none;
  }
  /*Min Max Clamp */
  #card1 {
    width: clamp(15ch, 30%, 46ch);    
  }
  #card2 {
    width: min(100px, 25%, 50vh, 30ch);  
  }
  #card3 {
    width: clamp(23ch, 20%, 46ch);    
  }
  p{
     display: -webkit-inline-box;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
   /* adjust line-clamp on each card */
#card3 p {
    -webkit-line-clamp: 2;
}
#card2 p {
    -webkit-line-clamp: 3;
}
#card1 p {
    -webkit-line-clamp: 2;
}
</css-code>