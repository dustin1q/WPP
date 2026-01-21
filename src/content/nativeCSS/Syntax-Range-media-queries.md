---
title: Media Queries Syntax Range 
cat: native-css
image: ""
desc: This new syntax allows for greater accuracy. The min- and max- queries are inclusive of the specified values. The new syntax lets you be more explicit about what you mean and avoid the potential of clashing queries. For example min-width 300px tests for a width of 300px or greater.
---

<html-code>
<h3>Single-Condition Queries</h3>
<ul>
  <li>Traditional: @media (min-width: 400px) { ... }</li>
  <li>Range Syntax: @media (width >= 400px) { ... }</li>
  <li>Traditional: @media (max-width: 30em) { ... }</li>
  <li>Range Syntax: @media (width <= 30em) { ... }</li> 
</ul>
<h3>Between 2 values</h3>
<ul>
  <li>Traditional: @media (min-width: 400px) and (max-width: 30em) { ... }</li>
  <li>Range Syntax: @media (width >= 400px) and (width <= 30em) { ... }</li>
</ul>
</html-code>

<css-code>

/* When the browser is between 500px - 1000px */
@media (500px <= width <= 1000px) {
  h3 {
    color: rgb(246, 95, 95);
  }
}
/* When the browser is greater than 600px */
@media (width >= 600px) {
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

</css-code>
