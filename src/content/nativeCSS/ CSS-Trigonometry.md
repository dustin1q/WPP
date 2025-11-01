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
  <li style="--i: 0" class="menue-item">
    <span class="material-symbols-outlined">
      home
    </span>
  </li>
   <li style="--i: 1" class="menue-item">
    <span class="material-symbols-outlined">
      search
    </span>
  </li>
  <li style="--i: 2" class="menue-item">
    <span class="material-symbols-outlined">
      event
    </span>
  </li>
  <li style="--i: 3" class="menue-item">
    <span class="material-symbols-outlined">
      payment
    </span>
  </li>
  <li style="--i: 4" class="menue-item">
    <span class="material-symbols-outlined">
      assignment
    </span>
  </li>
  <li style="--i: 5" class="menue-item">
    <span class="material-symbols-outlined">
      analytics
    </span>
  </li>
  <li style="--i: 6" class="menue-item">
    <span class="material-symbols-outlined">
      stars
    </span>
  </li>
  <li style="--i: 7" class="menue-item">
    <span class="material-symbols-outlined">
      source
    </span>
  </li>
  <li>
  <li>
    <input id="toggle-cb" type="checkbox" />
    <label class="toggle-btn" for="toggle-cb" aria-pressed="false">
      <div class="material-symbols-outlined btn-open" aria-hidden="true">menu</div>
      <div class="material-symbols-outlined btn-close" aria-hidden="true">close</div>
    </label>
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
    cursor:pointer;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out; 
  }
  .menue-item span{
    opacity: 0; 
    transition: opacity 0.3s ease-in-out; 
  }
}


  /* hide the real checkbox but keep it accessible */
  #toggle-cb{
    position:relative;
    width:1px;
    height:1px;
    margin:-1px;
    border:0;
    padding:0;
    clip:rect(0 0 0 0);
    overflow:hidden;
    white-space:nowrap;
  }

  /* button look */
  .toggle-btn{
    background-color: gray;
    width:40px;
    aspect-ratio: 1;
    display:grid;
    place-items: center;
    border-radius: 50%;
    color: #fff;
    cursor:pointer; 
    user-select:none;
    width: 40px;
    opacity: 1;
  }

  .material-symbols-outlined{
    font-size: 20px;
    position:absolute;
    transform: rotate(0deg);
    opacity: 1; /* Fully visible initially */
    transition: transform 0.5s ease-in-out, opacity 0.3s ease-in-out; /* Transition for both properties */
  }
  /* btn-open state */
  .btn-open{
    opacity: 1; 
  }
  .btn-close{
     opacity: 0;
  }
  
#toggle-cb:checked + .toggle-btn .btn-open{
  opacity: 0;
  transform: rotate(180deg) scale(2);
}
#toggle-cb:checked + .toggle-btn .btn-close{
  opacity: 1;
  transform: rotate(-180deg);
}
ul:has(#toggle-cb:checked) .menue-item span{
  opacity: 1;
}
ul:has(#toggle-cb:checked) li {
   /* rotation angle for each icon */
    --rotation:calc(360deg / var(--totalicons) * var(--i));
    transform:
    translateX(calc(cos(var(--rotation)) * var(--radius))) 
    translateY(calc(sin(var(--rotation)) * var(--radius)));
}
</css-code>
