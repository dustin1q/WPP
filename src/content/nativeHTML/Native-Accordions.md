---

title: Native Accordions
cat: native-html
image: image
desc: Native accordions using details and summary tags.
---


<html-code>
<details name="accordionGroup">  
    <summary>Title 1</summary> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</details> 
<details name="accordionGroup">  
    <summary>Title 2</summary> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</details> 
<details name="accordionGroup">  
    <summary>Title 3</summary> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</details>
<details>  
    <summary>New Accordion</summary> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    <article>
      <pre>
        <code>
summary {
  cursor: pointer;
}
      </code>
      </pre>
    </article>
</details>
</html-code>

<css-code>

summary  {
  cursor: pointer;
}

summary  {
  background-color: #2196F3;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

details[open] summary {border-radius: 5px 5px 0 0;}

details {
  background: #b1cadf;
  border-radius: 5px;
  margin: 0.5em;
}

/* extra styles */

* {box-sizing: border-box;}
body {font-family: system-ui, sans-serif; margin: 20px; background: #fff9f1;}
h1 {font-size: 1.2em;}
article > *:first-child {margin: 0;}
article > * + * {margin: 0.75em 0 0 0;}
pre {color: white; background: #455e7b; padding: 1em; border-radius: 5px;}
article {padding: 10px; margin: 0;}
details code {font-size: 1.1em;}
</css-code>

