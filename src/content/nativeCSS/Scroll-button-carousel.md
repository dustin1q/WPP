---

title: Carousel using scroll-button()  
cat: native-css
image: ""
desc: Implement a simple carousel with pure HTML and CSS using scroll-button(), scroll-snap-type and scroll-marker.
---

<html-code>
<div class="carousel">
  <div class="card">
    <h3>Skyline of Wai Tan, Shanghai</h3>
    <img src="/sampleImages/Skyline_of_Wai.jpg" class="carousel_image">
  </div>
  <div class="card">
    <h3>Great wall of China</h3>
    <img src="/sampleImages/great_wall.jpg" class="carousel_image">
    </div>
  <div class="card">
    <h3>Sunset on the Li River</h3>
    <img src="/sampleImages/Sunset_on_Li_River.jpg" class="carousel_image">
  </div>
</div>

</html-code>

<css-code>
.carousel {
  width: 90%;
  overflow-x: auto;
  margin: 3em auto;
  display: flex;
  gap: 2em;
  scroll-behavior: smooth;
  anchor-name: --carousel;
  scroll-snap-type: x mandatory;
  scroll-marker-group: after;
}
.carousel::scroll-marker-group{
  display: flex;
  justify-content: center;
  gap: .5em;
}
.card::scroll-marker{
  content: '';
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: lightgrey;
} 
.card::scroll-marker:target-current{
  background-color: black;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel::scroll-button(right), .carousel::scroll-button(left){
  content: '→';
  border: none;
  background-color: black;
  font-family: Consolas, sans-serif;
  font-size: 1.5em;
  color: white;
  border-radius: 50%;
  height: 1.5em;
  width: 1.5em;
  padding-bottom: .1em;
  cursor: pointer;
  position: fixed;
  position-anchor: --carousel;
  position-area: right center;
  translate: -50%;
}
.carousel::scroll-button(left) {
  content: '←';
  position-area: left center;
  translate: 50%;
}
.carousel::scroll-button(right):disabled, .carousel::scroll-button(left):disabled {
  opacity: .5;
  cursor: auto;
}
.card {
  scroll-snap-align: start;
  flex: 0 0 20em;
  aspect-ratio: 5/3;
  background-color: lightgrey;
  padding: 1em;
  border-radius: .5em;
  test-align: center;
  align-content: center;
  font-family: Consolas, sans-serif;

}
.carousel_image{
  width:100%;
  border-radius: .5em;
}
@media(max-width: 500px){
  .card{
    flex: 0 0 90%;
  }
}
</css-code>