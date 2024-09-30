---

title: CSS Typewriter Effect
image: image
desc: Typewriter animation using only CSS
---

<html-code>
<div class="typewriter">
  <div>
    <p>CSS Typewriter Effect</p>
  </div>
</div>
</html-code>

<css-code>

.typewriter{
  display:flex;
  /*justify-content: center;*/
}
.typewriter p{
  font-family: monospace;
  font-size: 1.5rem;
  margin-inline: auto;
  overflow: hidden;
  /* keep on one line */
  white-space: nowrap;
  /* the cursor */
  border-right: 1px solid;
  animation: typing 3s steps(22) forwards, blink 1s step-end infinite;

}
@keyframes typing{
  from{
    width:0;
  }
  to{
    width:100%;
  }
}
@keyframes blink{
  50% {
    border-color: transparent;
  }
}

</css-code>