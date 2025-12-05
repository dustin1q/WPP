---

title: content-visibility
cat: native-css
image: image
desc: Viewport Loading with Intersection Observer in JS gives us full control of the viewport event. While loading="lazy" can be a lightweight solution, commonly lazy-loading libraries use Intersection observer-under-the-hood to give developers more control over this event. Her we are initiating the load of an image and applying a fade effect animation. 
---


<html-code>
<p>The "Load More" button  with CSS setting content-visibility:auto;. </br> Select to add image elements below the fold. Then scroll down to see images fade into view as they enter the viewport.</p>
  <button id="btn">Load More</button>
  <p id="totalCardsLBL"></p>
<div id="card-container"></div>
</html-code>

<css-code>
#card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
}
.card {
    outline: 0.1rem solid var(--black);
    display: block;
    margin: .4rem .4rem;
    padding: 5px;
    width: 210px;
    height: auto;
    background-color: rgb(240, 240, 240);
    background-image: attr(bg-img) url; /* The 'url' type hint is important for older browsers and best practice */
    background-size: cover;
    content-visibility:auto;
  }
  .card p{
    margin: 0px;
    color: rgb(255, 255, 255);
  }
</css-code>

<js-code>
let totalcards = 0;
 function loadMore(n){
   totalcards += n;
   document.getElementById("totalCardsLBL").textContent = "Total cards added: " + totalcards;
    for (let i = 0; i < n; i++) { 
            let container = document.getElementById("card-container");
            let card = document.createElement("div");
            card.style.backgroundImage = "url('https://cataas.com/cat?width=300&"+Math.floor(Math.random() * 100 + 1)+"')"; 
            let p = document.createElement("p");
            p.className ="desc";
            p.textContent = "A Neque Augue Sem Eu Nam a. sapien"
            card.appendChild(p); 
            card.className ="card";
           container.appendChild(card);
        }       
 }
 let loadMoreBtn = document.getElementById("btn");
loadMoreBtn.addEventListener("click", (e) => loadMore(50));
</js-code>