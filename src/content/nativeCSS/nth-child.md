---
title: nth-child selectors & more
cat: nativeCSS
image: ""
desc: Review nth-child capabilities and why its so powerfull. 
---

## see extra content
Focus areas include:
* Simplifying Layouts
* Asset Loading Strategies
* Native UI Web Components
* Emerging and lesser-known CSS techniques 
[Astro Documentation](https://github.com/withastro/astro) 


<html-code><ul class="alternate-color">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
</html-code>

<css-code>ul{
  display: flex;
  flex-direction:row;
  margin:0px;
  gap: 10px;
  width: 100%;
  height: 3rem;
}
li{
  height:100%;
  width: 100%;
  list-style: none;
  border-radius: 0.25rem;
  background-color: rgb(0, 0, 0);
} 

/*selecting every other element in the ul*/
.alternate-color li:nth-last-child(2n){ 
  background-color: rgb(157, 158, 158);
}

/*selecting last 2 elements*/
/* ul li:nth-last-child(-n +2){
  background-color: rgb(157, 158, 158);
}*/
</css-code>
