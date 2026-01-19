---
title: text-box-trim
cat: native-css
image: ""
desc: The text-box-trim property let us specify whether to clip the whitespace above and/or below text. It’s used along the text-box-edge property to set how much of the whitespace should be trimmed.
---

<html-code>
<main>
  <section>
    <h1>No <code>text-box-trim</code>   </h1>
    <p><code>none</code></p>
  </section>

  <section class="trim-both">
    <h1>With <code>text-box-trim</code> </h1>
    <p><code>trim-both</code></p>
  </section>
</main>
</html-code>

<css-code>
.trim-both h1 {
  text-box-trim: trim-both;
  text-box-edge: ex alphabetic;
/*
text-box-edge: cap text;
text-box-edge: cap alphabetic;

text-box-trim: none;
text-box-trim: trim-start;
text-box-trim: trim-end;
text-box-trim: trim-both;
*/
}
main {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;

    border: 0.5px solid lch(from red l c h / 0.6);
    padding: 0px 20px;
  }

  section {
    display: flex;
    flex-flow: column-reverse;
    gap: 20px;

    width: min(600px, 100%);
  }

  h1 {
    border: 0.5px solid lch(from red l c h / 0.6);
    border-width: 0.5px 0px;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }
</css-code>
