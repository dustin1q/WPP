---

title: Stepper Bar
cat: ui-accelerators
image: image
desc: A custom step progress bar with CSS, which can be easily integrated into every application.
---


<html-code>
<div class="stepper-wrapper">
      <div class="stepper-item completed">
        <div class="step-counter">1</div>
      </div>
      <div class="stepper-item completed">
        <div class="step-counter">2</div>
      </div>
      <div class="stepper-item active">
        <div class="step-counter">3</div>
      </div>
      <div class="stepper-item">
        <div class="step-counter">4</div>
      </div>
    </div>
</html-code>

<css-code>
.stepper-wrapper {
  font-family: Arial;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.stepper-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: -50%;
  z-index: 2;
}

.stepper-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 2;
}

.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  margin-bottom: 6px;
}

.stepper-item.active {
  font-weight: bold;
}

.stepper-item.completed .step-counter {
  background-color: #4bb543;
}

.stepper-item.completed::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #4bb543;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 3;
}

.stepper-item:first-child::before {
  content: none;
}
.stepper-item:last-child::after {
  content: none;
}


</css-code>
