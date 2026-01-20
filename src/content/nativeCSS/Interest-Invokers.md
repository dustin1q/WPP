---
title: Interest Invokers
cat: native-css
image: ""
desc: Interest invokers provide a mechanism for updating an interface or running custom code when a user "shows interest" or "loses interest" in an element (for example, by hovering or unhovering it). They are most commonly used to show and hide popovers. 
---

<html-code>
<p>
  I think
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using_interest_invokers"
    interestfor="interest-info"
    target="_blank">
    Interest Invokers
  </a>
  are useful.
</p>

<div id="interest-info" popover="hint">
  <div class="wrapper">
    <img src="https://behindtheframework.com/sampleImages/spacecraft-Gemini-12-John-F-Kennedy-Space-Nov-11-1966.webp" alt="rocket" />
    <section>
      <p><strong>Interest Invoker</strong></p>
      <p>
        Interest invokers provide a mechanism for updating an interface or running custom code when a user "shows interest" or "loses interest" in an element.<button>Interest invoker examples</button>
      </p>
    </section>
  </div>

</html-code>

<css-code>

.no-interest-invokers body::before {
  content: "Your browser doesn't support interest invokers.";
  background-color: wheat;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
}
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}
a[interestfor] {
  interest-delay-start: 1s;
}
#interest-info {
  position-area: bottom right;
}
#interest-info {
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 0 10px;
  margin: 5px;
  background-color: white;
  font-size: 0.8rem;
}

#interest-info .wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 300px;
  font-size: 0.8rem;
  img{
    max-width: 150px; /* Ensures the image never overflows its container */
  height: auto;  
  }
}

</css-code>
