---

title: Native Accordions
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
  background: #333; 
  margin-bottom: 2rem;
  padding: .5rem 1rem;
  color:#FFF
}
summary {
  cursor: pointer;
}
summary > * {
  display: inline;
}

summary::marker {
  font-size: 1.5em;
  content: "📬";
}
[open] summary::marker {
  font-size: 1.5em;
  content: "📭";
}
</css-code>

