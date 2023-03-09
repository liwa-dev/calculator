const result = document.getElementById('result');
const colorPicker = document.getElementById('color-picker');
const colorPicker2 = document.getElementById('color-picker2');
const colorPicker1 = document.getElementById('color-picker1');

let total = "";

const section3Buttons = document.querySelector('.section3').children;

colorPicker.addEventListener('change', (event) => {
  const color = event.target.value;
  for (let i = 0; i < section3Buttons.length; i++) {
    section3Buttons[i].style.backgroundColor = color;
  }
});

const section2Buttons = document.querySelector('.section2').children;

colorPicker2.addEventListener('change', (event) => {
  const color = event.target.value;
  for (let i = 0; i < section2Buttons.length; i++) {
    section2Buttons[i].style.backgroundColor = color;
  }
});

const section1Buttons = document.querySelector('.section1').children;

colorPicker1.addEventListener('change', (event) => {
  const color = event.target.value;
  for (let i = 0; i < section1Buttons.length; i++) {
    section1Buttons[i].style.backgroundColor = color;
  }
});


// Section 1: AC, C, /, *
for (let i = 0; i < document.querySelector('.section1').children.length; i++) {
  document.querySelector('.section1').children[i].addEventListener('click', (event) => {
    const value = event.target.textContent;
    if (value === "AC") {
      total = "";
      result.textContent = "0";
    } else if (value === "C") {
      total = total.slice(0, -1);
      result.textContent = total || "0";
    } else if (value === "/" || value === "*") {
      total += value;
    }
  });
}

// Section 2: -, +, ., =
for (let i = 0; i < document.querySelector('.section2').children.length; i++) {
  document.querySelector('.section2').children[i].addEventListener('click', (event) => {
    const value = event.target.textContent;
    if (value === "-" || value === "+") {
      total += value;
    } else if (value === ".") {
      if (!total.includes(".")) {
        total += ".";
      }
    } else if (value === "=") {
      total = eval(total);
      if (total.toString().length > 12) {
        total = "Error";
      }
      result.textContent = total;
    }
  });
}

// Section 3: 1234567890()
for (let i = 0; i < document.querySelector('.section3').children.length; i++) {
  document.querySelector('.section3').children[i].addEventListener('click', (event) => {
    const value = event.target.textContent;
    if (value === "(" || value === ")") {
      total += value;
    } else {
      if (total.length < 12) {
        total += Number(value);
      }
    }
    result.textContent = total;
  });
}
