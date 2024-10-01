---
title: CSS Counters
cat: nativeCSS
image: ""
desc: CSS Counters are one of those things a lot of people aren't aware of. CSS Counters are a method of controlling number values in generated content, using the counter-reset and counter-increment properties. No Javascript required. 
---

<html-code>
<ul class="counter">
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
  <li>
    <article>
      <h3>Card Title</h3>
      <p>Card description. orem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida aliquam libero, sed consequat justo scelerisque ut. </p>
    </article>
  </li>
</ul>


</html-code>

<css-code>*{
  margin: 0px;
  padding: 0px;
}
.counter{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.5em;
  font-family: Arial, Helvetica, sans-serif;
  counter-reset: article-counter;
  li{
     background: #d6d4d4;
     padding:0.3em;
     width:130px;
     border-radius:5px;
     p{
      display: -webkit-inline-box;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      -webkit-line-clamp: 4;
      font-size: 0.57rem;
     }
     h3{
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 1rem;
      margin: 0px 0px 10px 20px;
     }
  }
}
.counter > li{
  /*
  counter-increment:article-counter 2; 
  */
  counter-increment:article-counter;
}
article::before{
  /*
  content: counter(article-counter);
  content: counter(article-counter , decimal-leading-zero);
  content: counter(article-counter, lower-alpha);
  content: counter(article-counter, upper-alpha);
  content: counter(article-counter, lower-roman);
  content: counter(article-counter, upper-roman);
   */
 content: counter(article-counter , decimal-leading-zero);
 font-size: 0.7rem;
 position: absolute;
 padding-top: 4px;
}

</css-code>
