---

title: Native Accordions
image: Himanshu
desc: Native accordions using details and summary tags.
---


<div id="HTML">
    <details>  
        <summary>Title 1</summary> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </details> 
     <details>  
        <summary>Title 2</summary> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </details> 
</div>

<div id="CSS">
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
</div>

<div id="JS">
    console.log("working");
</div>