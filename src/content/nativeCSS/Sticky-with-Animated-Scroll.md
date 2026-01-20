---

title: Sticky Positioning with scroll animation
cat: native-css
desc: CSS only, animate elements as the page is scrolled while maintaining sticky elements. Inspired by Tesla app. 
---

<html-code>
<article>
  <div class="nav">Sticky Navigation</div>
  <div class="img-container">
    <img src="https://behindtheframework.com/sampleImages/dragon.jpg">
  </div>
    <div class="main-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus ipsum, placerat eget fringilla at, efficitur nec lacus. Aenean aliquam posuere commodo. Pellentesque consequat in odio non feugiat. Aenean semper ut mi vel tincidunt. Suspendisse tristique tristique leo nec vulputate. Sed mauris elit, malesuada eu lectus non, volutpat feugiat mauris. Fusce vulputate, leo sit amet aliquet ultrices, sapien ante scelerisque lorem, id sodales ipsum lorem eget orci. Aenean volutpat condimentum sapien, ac cursus arcu imperdiet eu. Pellentesque dapibus libero at leo venenatis, sit amet aliquam metus condimentum. Donec mollis augue sed mauris pretium, quis iaculis erat scelerisque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus ipsum, placerat eget fringilla at, efficitur nec lacus. Aenean aliquam posuere commodo. Pellentesque consequat in odio non feugiat. Aenean semper ut mi vel tincidunt. Suspendisse tristique tristique leo nec vulputate. Sed mauris elit, malesuada eu lectus non, volutpat feugiat mauris. Fusce vulputate, leo sit amet aliquet ultrices, sapien ante scelerisque lorem, id sodales ipsum lorem eget orci. Aenean volutpat condimentum sapien, ac cursus arcu imperdiet eu. Pellentesque dapibus libero at leo venenatis, sit amet aliquam metus condimentum. Donec mollis augue sed mauris pretium, quis iaculis erat scelerisque.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus ipsum, placerat eget fringilla at, efficitur nec lacus. Aenean aliquam posuere commodo. Pellentesque consequat in odio non feugiat. Aenean semper ut mi vel tincidunt. Suspendisse tristique tristique leo nec vulputate. Sed mauris elit, malesuada eu lectus non, volutpat feugiat mauris. Fusce vulputate, leo sit amet aliquet ultrices, sapien ante scelerisque lorem, id sodales ipsum lorem eget orci. Aenean volutpat condimentum sapien, ac cursus arcu imperdiet eu. Pellentesque dapibus libero at leo venenatis, sit amet aliquam metus condimentum. Donec mollis augue sed mauris pretium, quis iaculis erat scelerisque.</p>
  </div></div>
</article>
</html-code>

<css-code>body {
  font-family:Arial, Helvetica, sans-serif;
  margin: 0px;
}
p {
  margin: 10px;
}
article {
  background: #9d9d9d;
  margin: auto auto 0px auto;
  width: 80vw;
  max-width: 420px;
}
.img-container {
  display: flex;
  position: sticky;
  top: 20px;
  color: #000000;
  padding: 0px;
  z-index: 0;
  height: auto;
  background-color: rgb(14, 14, 14);
  img {
    object-fit: fill;
    width:80vw;
    max-width: 420px;
    opacity:1;
    /*animation: grayscale-image linear;
    animation-timeline: scroll(root);
    animation-range: exit 20px;*/

    animation: fade-out-image linear;
    animation-timeline: scroll(root);
    animation-range: exit 5px;
  }
}
.main-content {
  position: sticky;
  font-family: Arial, Helvetica, sans-serif;
  color: #090909;
  border: 1px solid #000;
  background-color: rgb(255, 255, 255);
  margin: 0;
}
.nav{
    position: sticky;
    top: 0px;
    height:20px;
    background-color: rgb(221, 221, 221);
    border: 1px solid #000;
    font-weight: bold;
    z-index: 10;
 }
@keyframes grayscale-image{
    0% {
      filter: grayscale(20%);
    }
    100% {
      filter: grayscale(100%);
    }   
}
@keyframes fade-out-image{
 0%{
   opacity: 0.7;
 }
 20%{
   opacity: 0.3;
 }
  100% {
    opacity: 0;
  }
}
</css-code>


