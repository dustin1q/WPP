---

title: ScrollSnap Carousel 
image: ""
desc: Implement a simple carousel with pure HTML and CSS. OK Maybe a little JS.
---

<html-code>
<div class="wrapper">
  <div class="carousel-container">
    <div class="carousel">
      <div id="skyline" class="carousel__item">
        <img src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80" alt="Skyline of Wai Tan, Shanghai" class="carousel__image">
      </div>
      <div id="great-wall-of-china" class="carousel__item">
        <img src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80" alt="Great wall of China." class="carousel__image">
      </div>
      <div id="sunset-on-the-li-river" class="carousel__item">
        <img src="https://images.unsplash.com/photo-1543097692-fa13c6cd8595?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&h=420&q=80" alt="Sunset on the Li River as the few remaining cormorant fisherman pack their." class="carousel__image">
      </div>
    </div>
    <div id="controls" class="controls">
      <a href="#skyline" class="controls__dot">
        <span class="visuallyhidden">Skyline of Wai Tan, Shanghai</span>
      </a>
      <a href="#great-wall-of-china" class="controls__dot">
        <span class="visuallyhidden">Great wall of China</span>
      </a>
      <a href="#sunset-on-the-li-river" class="controls__dot">
        <span class="visuallyhidden">Sunset on the Li River</span>
      </a>
    </div>
  </div>
  
</html-code>

<css-code>

.carousel-container {
  position: relative;
}

.carousel {
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;
  // Hide scrollbar in IE.
  -ms-overflow-style: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}


.carousel__item {
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
}

.carousel__image {
  display: block;
  max-width: 20em;
 
}

.controls {
  position: absolute;
  right: 0;
  bottom: 1em;
  left: 0;
  text-align: center;
}

.controls__dot {
  display: inline-block;
  width: 0.85em;
  height: 0.85em;
  border-radius: 50%;
  outline: none;
  background-color: #fff;
  opacity: 0.8;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:not(:first-child) {
    margin-left: 0.25em;
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
}

// Other styles
p {
  line-height: 1.5;
}

.wrapper {
  margin-right: auto;
  margin-left: auto;
  max-width: 20em;
  
  box-shadow: 0 0 1em 1em rgba(0, 0, 0, 0.1);
  
}

.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}


</css-code>

<js-code>

document.querySelector('#controls').addEventListener('click', (event) => {
  const $slide = document.querySelector(event.target.getAttribute('href'));
  if (!$slide) return;
  
  if ($slide.scrollIntoViewIfNeeded) {
    event.preventDefault();
    $slide.scrollIntoViewIfNeeded();
  } else if ($slide.scrollIntoView) {
    event.preventDefault();
    $slide.scrollIntoView();
  }
});
</js-code>