---

title: Native Accordions
cat: native-html
image: image
desc: Native accordions using details and summary tags.
---


<html-code>
    <details>  
        <summary>Title 1</summary> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </details> 
     <details>  
        <summary>Title 2</summary> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </details> 
</html-code>

<css-code>
details {
 font-weight: normal;
  margin-bottom: 1rem;
  padding: .2rem 0 .2rem .2rem;
  color:#1c1a1a;
  border-bottom: 1px solid black;
}
summary { 
  font-weight: bold;
  cursor: pointer;
  color:#0d0c0c
}
summary > * {
  display: inline;
}

summary::marker {
  font-size: 1.5em;
  content: "\21E8";
}
[open] summary::marker {
  font-size: 1.5em;
  content: "\21E9";
}
</css-code>

