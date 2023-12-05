---
title: CSS Tabs
image: ""
desc: CSS-only tabs to show you don't need to adopt a whole library when creating a tab interface. 
---


<html-code>
<div class="tabs">
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" checked>
  <label for="tab1" class="tabs__label">Falcon 9</label>
  <div class="tabs__content">
   </p> <strong>Falcon 9</strong> is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit.</p>
  </div>
  <input type="radio" class="tabs__radio" name="tabs-example" id="tab2">
  <label for="tab2" class="tabs__label">Saturn 5</label>
  <div class="tabs__content">
   <p><strong>Saturn V</strong> is a retired American super heavy-lift launch vehicle developed by NASA under the Apollo program for human exploration of the Moon. </p>
   <p>There are only three Saturn V rockets on display in the world. The rocket at NASA Johnson Space Center is the only one comprised of all flight-certified hardware. The other two rockets are made of flight hardware, mock-ups and test components.</p>

  </div>
</div>
</html-code>

<css-code>


body {
  margin: 1em;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  max-width: 30em;
  font-family: sans-serif;
}

.tabs__label {
  padding: .5em .5em;
  margin: 0 1em;
  cursor: pointer; 

}

.tabs__radio {
  display: none;
}

.tabs__content {
  order: 1;
  width: 100%;
  border: 3px solid #dddddd;
  padding: 0 1em 0 1em;
  line-height: 1.5;
  font-size: 0.9em;
  display: none;
}

.tabs__radio:checked + .tabs__label {
  font-weight: bold;
  background-color: #dddddd;
  border: 2px solid #dddddd;
  border-bottom: 0;
}

.tabs__radio:checked + .tabs__label + .tabs__content {
  display: initial;
}

</css-code>
