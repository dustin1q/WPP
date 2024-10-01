---

title: a11y tabs - progressively enhanced
image: image
cat: uiAccelerators
desc: Accessible tabs with progressive enhancement JS pattern.
---


<html-code>

  <div class="tabs-container">
    <ul aria-labelledby="tabs-title">
      <li><a id="tab-1" href="#falcon9"> Falcon 9 </a></li>
      <li><a id="tab-2" href="#falconheavy"> Falcon Heavy </a></li>
      <li><a id="tab-3" href="#starship"> Starship </a></li>
      <li><a id="tab-4" href="#dragon"> Dragon </a></li>
    </ul>

    <div class="tabs__panels flow">
      <div id="falcon9" aria-labelledby="tab-1">
        <p>
          Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.
        </p>
      </div>
      <div id="falconheavy" aria-labelledby="tab-2">
        <p>
          Falcon Heavy is composed of three reusable Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than 5 million pounds of thrust at liftoff, equal to approximately eighteen 747 aircraft. As one of the world’s most powerful operational rockets, Falcon Heavy can lift nearly 64 metric tons (141,000 lbs) to orbit.
        </p>
      </div>
      <div id="starship" aria-labelledby="tab-3">
        <p>
          SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship is the world’s most powerful launch vehicle ever developed, capable of carrying up to 150 metric tonnes fully reusable and 250 metric tonnes expendable.
        </p>
      </div>
      <div id="dragon" aria-labelledby="tab-4">
        <p>
          The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.
        </p>
      </div>
    </div>
  </div>

  <!-- filler content -->


</html-code>

<css-code>
[role="tablist"] {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
}

[aria-selected="true"] {
  text-decoration-thickness: 0.25em;
  text-underline-offset: 0.5em;
  color: orangered;
}

/* extra styling to make the tabs look better that wasn't in the video */
.tabs-container {
  padding: 2.5rem;
  border-radius: 0.5rem;
  background: hsl(0 0% 50% / 0.1);
}

:root {
  /* either --dark-mode or --no-dark-mode */
  --color-scheme: var(--dark-mode);

  --font-family: system-ui;

  --fs-300: clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem);
  --fs-400: clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem);
  --fs-500: clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem);
  --fs-600: clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem);
  --fs-700: clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem);
  --fs-800: clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem);
  --fs-900: clamp(2.8rem, calc(1.85rem + 4.74vw), 5.52rem);

  --clr-primary-300: hsl(219, 76%, 55%);
  --clr-primary-400: hsl(219, 76%, 40%);
  --clr-primary-500: hsl(219, 76%, 25%);
  --clr-secondary-300: hsl(269, 75%, 55%);
  --clr-secondary-400: hsl(269, 75%, 40%);
  --clr-secondary-500: hsl(269, 75%, 25%);
  --clr-accent-300: hsl(358, 72%, 65%);
  --clr-accent-400: hsl(358, 72%, 50%);
  --clr-accent-500: hsl(358, 72%, 35%);

  /* settings */
  --no-dark-mode: light;
  --dark-mode: dark light;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  color-scheme: var(--color-scheme);
}

body {
  margin: 0;
  font-family: var(--font-family);
  font-size: var(--fs-400);
  line-height: 1.6;
}

.wrapper {
  width: min(50rem, 100% - 2rem);
  margin-inline: auto;
}

.site-title {
  font-size: var(--fs-900);
  line-height: 1.05;
  text-transform: uppercase;
}

.section-title {
  font-size: var(--fs-800);
  line-height: 1.1;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

</css-code>

<js-code>
const tabsContainer = document.querySelector(".tabs-container");
const tabsList = tabsContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");

tabsList.setAttribute("role", "tablist");

tabsList.querySelectorAll("li").forEach((listitem) => {
  listitem.setAttribute("role", "presentation");
});

tabButtons.forEach((tab, index) => {
  tab.setAttribute("role", "tab");
  if (index === 0) {
    tab.setAttribute("aria-selected", "true");
    // we'll add something here
  } else {
    tab.setAttribute("tabindex", "-1");
    tabPanels[index].setAttribute("hidden", "");
  }
});

tabPanels.forEach((panel) => {
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("tabindex", "0");
});

tabsContainer.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("a");
  if (!clickedTab) return;
  e.preventDefault();

  switchTab(clickedTab);
});

tabsContainer.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    case "Home":
      e.preventDefault();
      switchTab(tabButtons[0]);
      break;
    case "End":
      e.preventDefault();
      switchTab(tabButtons[tabButtons.length - 1]);
      break;
  }
});

function moveLeft() {
  const currentTab = document.activeElement;
  if (!currentTab.parentElement.previousElementSibling) {
    switchTab(tabButtons[tabButtons.length - 1]);
  } else {
    switchTab(
      currentTab.parentElement.previousElementSibling.querySelector("a")
    );
  }
}

function moveRight() {
  const currentTab = document.activeElement;
  if (!currentTab.parentElement.nextElementSibling) {
    switchTab(tabButtons[0]);
  } else {
    switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"));
  }
}

function switchTab(newTab) {
  const activePanelId = newTab.getAttribute("href");
  const activePanel = tabsContainer.querySelector(activePanelId);

  tabButtons.forEach((button) => {
    button.setAttribute("aria-selected", false);
    button.setAttribute("tabindex", "-1");
  });

  tabPanels.forEach((panel) => {
    panel.setAttribute("hidden", true);
  });

  activePanel.removeAttribute("hidden", false);

  newTab.setAttribute("aria-selected", true);
  newTab.setAttribute("tabindex", "0");
  newTab.focus();
}

</js-code>