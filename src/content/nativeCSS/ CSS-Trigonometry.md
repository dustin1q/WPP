---
title: CSS Trigonometry 
cat: native-css
image: ""
desc: Use the sin() and cos() functions in CSS to place elements perfectly around a circle — and build a circular menu without JavaScript.
---

<html-code>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
<ul>
  <li style="--i: 0">
    <span class="material-symbols-outlined">
      home
    </span>
  </li>
   <li style="--i: 1">
    <span class="material-symbols-outlined">
      search
    </span>
  </li>
  <li style="--i: 2">
    <span class="material-symbols-outlined">
      event
    </span>
  </li>
  <li style="--i: 3">
    <span class="material-symbols-outlined">
      payment
    </span>
  </li>
  <li style="--i: 4">
    <span class="material-symbols-outlined">
      assignment
    </span>
  </li>
  <li style="--i: 5">
    <span class="material-symbols-outlined">
      analytics
    </span>
  </li>
  <li style="--i: 6">
    <span class="material-symbols-outlined">
      stars
    </span>
  </li>
  <li style="--i: 7">
    <span class="material-symbols-outlined">
      source
    </span>
  </li>
</ul>
</html-code>

<css-code>


body{
  display:grid;
  place-items: center;
  gap: 50px;
}
.material-symbols-outlined{
  font-size: 20px;
}
ul{
  list-style:none;
  position: relative;
/* config */
  --totalicons:8;
  --radius: 4rem;

  /* make the container the diameter so left:50%/top:50% centers correctly */
  width: calc(var(--radius) * 2);
  height: calc(var(--radius) * 2);

  li{
    background-color: gray;
    width:40px;
    aspect-ratio: 1;
    display:grid;
    place-items: center;
    border-radius: 50%;
    color: #fff;
    position:absolute;
    left: 50%;
    top: 50%;

    /* rotation angle for each icon */
    --rotation:calc(360deg / var(--totalicons) * var(--i));

    transform:translateX(calc(cos(var(--rotation)) * var(--radius))) 
              translateY(calc(sin(var(--rotation)) * var(--radius)));
  }
}

</css-code>
