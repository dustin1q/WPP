---

title: Native Popover
image: ""
desc: The Popover API provides developers with a standard, consistent, flexible mechanism for displaying popover content on top of other page content. Popover content can be controlled either declaratively using HTML attributes, or via JavaScript.

---


<html-code>

<button popovertarget="mydiv">Toggle the popover</button>
<div popover id="mydiv">
  <h2>Popover</h2>
  <hr>
  <p>A popover is an element that is placed on top of everything else.</p>
  <p>It can be used when you want to tell something important.</p>
  <button popovertarget="mydiv" popovertargetaction="hide">Close</button>
</div>
</html-code>

<css-code>
 button {
  font-size: 1.2rem;
  padding: 5px 15px;
}
</css-code>