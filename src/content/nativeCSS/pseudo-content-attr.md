---
title: Pseudo Content & attr()
cat: native-css
desc: Using attr() functions to apply values to the content property of a psedo element. The example below passes a string value through the HTML data-lable attribute. In CSS this value is applied to the content property of the :before pseudo element using the attr() function. 
---

<html-code>

<h2>Light, Medium & Heavy lift Rockets</h2>
<div class="wrapper">
    <lable class="rocket" data-lable="Heavy">Falcon Heavy</lable>
    <lable class="rocket" data-lable="Medium">Falcon 9</lable>
    <lable class="rocket" data-lable="Light ">Electon</lable>
</div>
</html-code>
<css-code>
*{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.wrapper{
  display: flex;
  flex-direction: column;
}
.rocket{
  width:20%;
  border: 1px solid rgb(7, 7, 7);
  margin: 2em;
  padding: 1em;
  font-size: 1rem;
  position:relative;
}
.rocket::before{
  content: attr(data-lable); /*attr() function uses data-lable from HTML*/
  position:absolute;
  top:-23px;
  left: -1px;
  background-color: gray;
  border: 1px solid rgb(7, 7, 7);
  color: white;
  padding: .5em;
  border-radius: 10px 10px 0px 0px;
  text-transform: uppercase;
  font-size: .6rem;
}
</css-code>


