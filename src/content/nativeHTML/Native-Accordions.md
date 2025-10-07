---

title: Native Accordions
cat: native-html
image: image
desc: Native accordions using details and summary tags. Using the "name" attribute restricts the open state to one instance in a common named group. Alternatively, not using the "name" attribute allows the open/close state to act independent of the other accordion instances on the same page.
---


<html-code>
<details name="accordionGroup">  
    <summary>Accordion 1</summary> 
    <div class="details-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</details> 
<details name="accordionGroup">  
    <summary>Accordion 2</summary> 
    <div class="details-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</details> 
<details name="accordionGroup">  
    <summary>Accordion 3</summary> 
    <div class="details-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</details>
<details>  
    <summary>New Accordion</summary> 
    <div class="details-content">
     
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <article>
      <pre>
        <code>
summary {
  cursor: pointer;
}
      </code>
      </pre>
    </article>
    </div>
</details>
</html-code>

<css-code>

summary  {
  cursor: pointer;
}

summary  {
  background-color: #4d4d4d;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
details[open] summary {
  border-radius: 5px 5px 0 0;
  background-color: #000000;
}
details {
  background: #e0e0e0;
  border-radius: 5px;
  margin: 0.5em;
  interpolate-size: allow-keywords; /* Required for height: auto transitions */
}
/* extra styles */
* {box-sizing: border-box;}
body {font-family: system-ui, sans-serif; margin: 20px; }
h1 {font-size: 1.2em;}
p {padding: 0.3em; margin: 0px;}
article > *:first-child {margin: 0;}
article > * + * {margin: 0.75em 0 0 0;}
pre {color: white; background: #717070; padding: 1em; border-radius: 5px;}
article {padding: 10px; margin: 0;}
details code {font-size: 1.1em;}

details::details-content {
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out, content-visibility 0.3s ease allow-discrete;
    opacity: 0;
}

details[open]::details-content {
    height: auto;
    opacity: 1;
}


</css-code>

