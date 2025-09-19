---

title: Light & Dark Modes
cat: native-css
desc: A fun CSS example for demonstrating the use of color-scheme to support light and dark mode toggle. 
---

<html-code>
<div class="container">
  <label class="switch">
    <input id="input" type="checkbox" checked="darkTheme" />
    <div class="slider round">
      <div class="sun-moon">
        <svg id="moon-dot-1" class="moon-dot" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="moon-dot-2" class="moon-dot" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="moon-dot-3" class="moon-dot" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="light-ray-1" class="light-ray" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="light-ray-2" class="light-ray" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="light-ray-3" class="light-ray" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-1" class="cloud-dark" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-2" class="cloud-dark" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-3" class="cloud-dark" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-4" class="cloud-light" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-5" class="cloud-light" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-6" class="cloud-light" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
      </div>
      <div class="stars">
        <svg id="star-1" class="star" viewBox="0 0 20 20">
          <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
        </svg>
        <svg id="star-2" class="star" viewBox="0 0 20 20">
          <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
        </svg>
        <svg id="star-3" class="star" viewBox="0 0 20 20">
          <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
        </svg>
        <svg id="star-4" class="star" viewBox="0 0 20 20">
          <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
        </svg>
      </div>
    </div>
  </label>
</div>

</html-code>

<css-code>
:root {
  --scale: 2;
  color-scheme: light;

  &:has(input:checked) {
    color-scheme: dark;
  }
}

body {
  padding: 0;
  margin: 0;
}

.container {
  background: linear-gradient(
    135deg,
    light-dark(#f7faff, #0b1220) 0%,
    light-dark(#e8f0ff, #15213a) 50%,
    light-dark(#d8e3ff, #22345a) 100%
  );
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: calc(var(--scale) * 60px);
  height: calc(var(--scale) * 34px);
}

.switch #input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #2196f3;
  transition: 0.4s;
  z-index: 0;
  overflow: hidden;
}

.sun-moon {
  position: absolute;
  content: "";
  height: calc(var(--scale) * 26px);
  width: calc(var(--scale) * 26px);
  left: calc(var(--scale) * 4px);
  bottom: calc(var(--scale) * 4px);
  background-color: yellow;
  transition: 0.4s;
}

#input:checked + .slider {
  background-color: black;
}

#input:focus + .slider {
  box-shadow: 0 0 calc(var(--scale) * 1px) #2196f3;
}

#input:checked + .slider .sun-moon {
  transform: translateX(calc(var(--scale) * 26px));
  background-color: white;
  animation: rotate-center 0.6s ease-in-out both;
}

.moon-dot {
  opacity: 0;
  transition: 0.4s;
  fill: gray;
}
#input:checked + .slider .sun-moon .moon-dot {
  opacity: 1;
}

.slider.round {
  border-radius: calc(var(--scale) * 34px);
}
.slider.round .sun-moon {
  border-radius: 50%;
}

#moon-dot-1 {
  left: calc(var(--scale) * 10px);
  top: calc(var(--scale) * 3px);
  position: absolute;
  width: calc(var(--scale) * 6px);
  height: calc(var(--scale) * 6px);
  z-index: 4;
}

#moon-dot-2 {
  left: calc(var(--scale) * 2px);
  top: calc(var(--scale) * 10px);
  position: absolute;
  width: calc(var(--scale) * 10px);
  height: calc(var(--scale) * 10px);
  z-index: 4;
}

#moon-dot-3 {
  left: calc(var(--scale) * 16px);
  top: calc(var(--scale) * 18px);
  position: absolute;
  width: calc(var(--scale) * 3px);
  height: calc(var(--scale) * 3px);
  z-index: 4;
}

#light-ray-1,
#light-ray-3,
#light-ray-2 {
  position: absolute;
  z-index: -1;
  fill: white;
  opacity: 10%;
}
#light-ray-1 {
  left: calc(var(--scale) * -8px);
  top: calc(var(--scale) * -8px);
  width: calc(var(--scale) * 43px);
  height: calc(var(--scale) * 43px);
}
#light-ray-2 {
  left: -50%;
  top: -50%;
  width: calc(var(--scale) * 55px);
  height: calc(var(--scale) * 55px);
}
#light-ray-3 {
  left: calc(var(--scale) * -18px);
  top: calc(var(--scale) * -18px);
  width: calc(var(--scale) * 60px);
  height: calc(var(--scale) * 60px);
}

.cloud-light,
.cloud-dark {
  position: absolute;
  animation-name: cloud-move;
  animation-duration: 6s;
  animation-iteration-count: infinite;
}
.cloud-light {
  fill: #eee;
}
.cloud-dark {
  fill: #ccc;
  animation-delay: 1s;
}

#cloud-1 {
  left: calc(var(--scale) * 30px);
  top: calc(var(--scale) * 15px);
  width: calc(var(--scale) * 40px);
}
#cloud-2 {
  left: calc(var(--scale) * 44px);
  top: calc(var(--scale) * 10px);
  width: calc(var(--scale) * 20px);
}
#cloud-3 {
  left: calc(var(--scale) * 18px);
  top: calc(var(--scale) * 24px);
  width: calc(var(--scale) * 30px);
}
#cloud-4 {
  left: calc(var(--scale) * 36px);
  top: calc(var(--scale) * 18px);
  width: calc(var(--scale) * 40px);
}
#cloud-5 {
  left: calc(var(--scale) * 48px);
  top: calc(var(--scale) * 14px);
  width: calc(var(--scale) * 20px);
}
#cloud-6 {
  left: calc(var(--scale) * 22px);
  top: calc(var(--scale) * 26px);
  width: calc(var(--scale) * 30px);
}

@keyframes cloud-move {
  0% {
    transform: translateX(0px);
  }
  40% {
    transform: translateX(calc(var(--scale) * 4px));
  }
  80% {
    transform: translateX(calc(var(--scale) * -4px));
  }
  100% {
    transform: translateX(0px);
  }
}

.stars {
  transform: translateY(calc(var(--scale) * -32px));
  opacity: 0;
  transition: 0.4s;
}

.star {
  fill: white;
  position: absolute;
  transition: 0.4s;
  animation-name: star-twinkle;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

#input:checked + .slider .stars {
  transform: translateY(0);
  opacity: 1;
}

#star-1 {
  width: calc(var(--scale) * 20px);
  top: calc(var(--scale) * 2px);
  left: calc(var(--scale) * 3px);
  animation-delay: 0.3s;
}
#star-2 {
  width: calc(var(--scale) * 6px);
  top: calc(var(--scale) * 16px);
  left: calc(var(--scale) * 3px);
}
#star-3 {
  width: calc(var(--scale) * 12px);
  top: calc(var(--scale) * 20px);
  left: calc(var(--scale) * 10px);
  animation-delay: 0.6s;
}
#star-4 {
  width: calc(var(--scale) * 18px);
  top: calc(var(--scale) * 0px);
  left: calc(var(--scale) * 18px);
  animation-delay: 1.3s;
}

@keyframes star-twinkle {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

</css-code>


