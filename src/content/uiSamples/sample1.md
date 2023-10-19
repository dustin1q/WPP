---

title: Accordions
image: Himanshu
desc: Native accordions using details and summary tags.
---
This is a post written in Markdown.
<div class="editor" id="HTML">
    <details>  
        <summary>Title 1</summary> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </details> 
     <details>  
        <summary>Title 2</summary> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </details> 
</div>

<div class="editor" id="CSS">
details {
  background: #eee; 
  margin-bottom: 2rem;
  padding: .5rem 1rem;
}

summary {
  cursor: pointer;
}

summary > * {
  display: inline;
}
</div>
<div class="editor" id="JS">
    console.log("working");
</div>