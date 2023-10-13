---

title: Accordions
desc: Native accordions using details and summary tags.
---


**Accordions
```HTML
    <details>  
        <summary>Title 1</summary> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </details> 
     <details>  
        <summary>Title 2</summary> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </details> 

```

```CSS
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
```