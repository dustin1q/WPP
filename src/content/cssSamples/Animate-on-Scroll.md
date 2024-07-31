---

title: Animate On Scroll 
image: ""
desc: CSS only, elements are animated when the page is scrolled and they enter the viewport. 
---

<html-code>
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
  <div>11</div>
  <div>12</div>
</div>
</html-code>

<css-code>
@keyframes appear{
  from{
    opacity:0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
.container{
  display: flex;
  flex-wrap: wrap;
 text-align: center;
  background: rgb(103, 103, 141);
  color: white;
}
.container div:nth-last-child(2n){ 
  background-color: rgb(157, 158, 158);
}
.container div{
  width: 200px;
  height: 200px;
  margin: .2em;
  padding-top:.7em;
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0;
  background-color: rgb(0, 0, 0);
}
</css-code>

