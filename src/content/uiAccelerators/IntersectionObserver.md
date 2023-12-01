---

title: Viewport Loading with Intersection Observer
image: Himanshu
desc: Viewport Loading with Intersection Observer in JS gives us full control of the viewport event. While loading="lazy" can be a lightweight solution, commonly lazy-loading libraries use Intersection observer-under-the-hood to give developers more control over this event. Her we are initiating the load of an image and applying a fade effect animation. 
---


<html-code>
<p>The "Load More" button using Intersection Observer. </br> Select to add image elements below the fold. Then scroll down to see images fade into view as they enter the viewport.</p>
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
.card img {
    border-radius: 10px;
    display: block;
    margin: .4rem auto;
    width: 200px;
    height: 150px;
    object-fit: cover;
    background-color: var(--color-light-grey);
}
.more-img {
    opacity: 0.25;
}
.imgOn{
 transition: opacity 1s ease-in;
}
.card {
    outline: 0.1rem solid var(--black);
    display: block;
    margin: .4rem .4rem;
    padding: 5px;
    width: 210px;
    height: auto;
    object-fit: cover; 
  }
  .card p{
    margin: 0px;
  }
</css-code>

<js-code>
const images = document.querySelectorAll(".more-img");
const imgOptions = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        
        const img = entry.target;
        // appending random number for demo only //
        img.src = img.dataset.src + Math.floor(Math.random() * 100 + 1);
        img.className = "imgOn";
        imgObserver.unobserve(entry.target);
    });
    }, imgOptions); 
        images.forEach((img) => {
        imgObserver.observe(img);
    });
  var totalcards = 0;

  
 function loadMore(n){
     console.log('load more')
    
   totalcards += n;
    
   document.getElementById("totalCardsLBL").textContent = "Total cards added: " + totalcards;

	 console.log('loadMore: '+n)
    for (let i = 0; i < n; i++) { 
            var src = document.getElementById("card-container");

            //create image
            var img = document.createElement("img");
            img.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
            img.setAttribute('data-src', 'https://cataas.com/cat?width=300&');
            img.className ="more-img";
            
            var div = document.createElement("div");
            div.className ="card";

             var p = document.createElement("p");
            p.className ="desc";
            p.textContent = "A Neque Augue Sem Eu Nam a., Lacus Integer Elit Praesent Ante Tellus in; Finibus Dui Dictum quis. Sed Quam Amet sapien"
             
             div.appendChild(img);
             div.appendChild(p);

            src.appendChild(div);
            imgObserver.observe(img);
        }
        
        
 }
 var loadMoreBtn = document.getElementById("btn");
loadMoreBtn.addEventListener("click", (e) => loadMore(50));

</js-code>