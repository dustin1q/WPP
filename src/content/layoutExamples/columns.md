---
title: Columns
cat: layout-Examples
image: ""
desc: Use the Columns property for masonry layouts without using Flex or grid.   
---

<html-code>
<div class="container">
    <img width="100px" src="https://loremflickr.com/g/100/140/rocket">
    <img width="100px" src="https://loremflickr.com/g/100/100/rocket">
    <img width="100px" src="https://loremflickr.com/g/100/200/rocket">
    <img width="100px" src="https://loremflickr.com/g/100/140/rocket">
    <img width="100px" src="https://loremflickr.com/g/100/180/rocket">
    <img width="100px" src="https://loremflickr.com/g/100/80/rocket">
    <img width="100px" src="https://loremflickr.com/g/100/140/rocket">
    <img width="100px" src="https://loremflickr.com/g/100/100/rocket">
    <img width="100px" src="https://loremflickr.com/g/100/200/rocket">
    <img width="100px" src="https://loremflickr.com/g/100/140/rocket">
</div>
</html-code>

<css-code>
.container{
    width: min(320px, 100%);
    margin: 0 auto;
    columns: 3 100px;
    column-gap: 0.2em;
}
img{
    width: 100%;
    display: block;
    margin-bottom: 0.2em;
}
</css-code>
