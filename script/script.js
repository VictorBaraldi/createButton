const controles = document.getElementById("controles");
const range = document.querySelectorAll('[type="range"]');
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

const styleChange = {
  elemento: btn,
  texto(valor) {
    this.elemento.innerHTML = valor;
  },
  color(valor) {
    this.elemento.style.color = valor;
  },
  backgroundColor(valor) {
    this.elemento.style.backgroundColor = valor;
  },
  height(valor) {
    this.elemento.style.height = valor + "px";
  },
  width(valor) {
    this.elemento.style.width = valor + "px";
  },
  border(valor) {
    this.elemento.style.border = valor;
  },
  borderRadius(valor) {
    this.elemento.style.borderRadius = valor + "px";
  },
  fontFamily(valor) {
    this.elemento.style.fontFamily = valor;
  },
  fontSize(valor) {
    this.elemento.style.fontSize = valor + "px";
  },
};

function handleChange(e) {
  const valor = e.target.value;
  const nome = e.target.name;
  styleChange[nome](valor);
  saveValues(nome, valor);
  showCss();
}

function saveValues(nome, value) {
  localStorage[nome] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((value) => {
    styleChange[value](localStorage[value]);
    controles.elements[value].value = localStorage[value];
  });
  showCss();
}

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

controles.addEventListener("change", handleChange);

range.forEach((value) => {
  ["mousemove", "touchmove"].forEach((event) => {
    value.addEventListener(event, handleChange);
  });
});

setValues();
