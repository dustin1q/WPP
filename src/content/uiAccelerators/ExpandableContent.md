---

title: Expandable Content
cat: ui-accelerators
image: image
desc: Multiline overflow, adding text that fades away when too long or a read more button that only appears when needed are perfect examples of this complex situation. 
---

https://blog.webdevsimplified.com/2020-01/dynamic-expandable-content/

<html-code>
 <article>
  <h2>Blog Article One</h2>
  <div data-expandable>
    <p data-expand-text>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, alias.
    </p>
    <button data-expand-button>Read More</button>
  </div>
</article>
<article>
  <h2>Blog Article Two</h2>
  <div data-expandable>
    <p data-expand-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente odio earum? Sapiente odit aut excepturi nulla? Exercitationem tempore non est neque hic, eveniet distinctio quidem cum perspiciatis ipsum nihil necessitatibus rem dolorem earum. Ipsam tempora tempore consequuntur quia? Molestiae reiciendis incidunt veniam, consequatur fuga nesciunt, ipsa error quod sint nisi eius corrupti voluptatum id? Explicabo, repudiandae consectetur! Dolorum, dolor? Modi fugit corrupti harum a sunt autem incidunt. Iusto, dolorum vero modi repellat ratione magni dolores praesentium, esse quam itaque molestias quae! Deserunt reprehenderit commodi odio dolor porro aliquid omnis! Natus, nihil voluptas voluptates eveniet voluptatem quasi velit quam beatae corporis? Modi odio vel quisquam suscipit doloremque veritatis a adipisci minus vitae incidunt deserunt nisi quo facilis ducimus commodi molestias consectetur expedita libero illo, dicta est nam eaque eveniet quam. Reprehenderit atque eius quam exercitationem fuga suscipit ut quidem omnis mollitia, fugiat ex repellat provident quibusdam sunt minus voluptate temporibus quis ullam beatae, voluptatibus, esse nemo. Eligendi esse, nisi vitae, dignissimos consequatur molestiae inventore ipsam libero aliquid dolor molestias odio voluptas velit distinctio vero ab unde ad, sunt blanditiis minima? Aliquid praesentium tempora, ex qui deleniti animi aperiam, at sequi assumenda reprehenderit, libero nisi consequuntur sunt aut quod quos asperiores!
    </p>
    <button data-expand-button>Read More</button>
  </div>
</article>
</html-code>
<css-code>
[data-expandable] [data-expand-text] {
  --line-height: 1.5;
  --lines-to-show: 3;
  position: relative;
  box-sizing: border-box;
  line-height: var(--line-height);
  overflow: hidden;
  height: calc(var(--line-height) * var(--lines-to-show) * 1em);
}

[data-overflow="false"] [data-expand-text] {
  height: initial;
}

[data-expandable].expanded [data-expand-text] {
  height: initial;
}

[data-overflow="false"] [data-expand-button] {
  display: none;
}

[data-expandable] [data-expand-text]::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, transparent, white);
}

[data-overflow="false"] [data-expand-text]::before,
[data-expandable].expanded [data-expand-text]::before {
  background: initial;
}
</css-code>
<js-code>
const expandableElements = document.querySelectorAll("[data-expandable]")
const expandableButtons = document.querySelectorAll("[data-expand-button]")

checkForOverflow()
expandableButtons.forEach(button => {
  button.addEventListener("click", toggleText)
  setExpandButtonText(button)
})

function checkForOverflow() {
  expandableElements.forEach(expandableElement => {
    if (expandableElement.classList.contains("expanded")) return
    const expandableText = expandableElement.querySelector("[data-expand-text]")
    const overflowing = expandableText.scrollHeight > expandableText.clientHeight
    expandableElement.dataset.overflow = overflowing
  })
}

function toggleText(e) {
  const expandableElement = e.target.closest("[data-expandable]")
  expandableElement.classList.toggle("expanded")
  setExpandButtonText(e.target)
}

function setExpandButtonText(button) {
  const expandableElement = button.closest("[data-expandable]")
  const expanded = expandableElement.classList.contains("expanded")
  button.innerText = expanded ? "Read Less" : "Read More"
}

</js-code>