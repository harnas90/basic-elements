const head = document.querySelector(".headline");
// const fireElement = document.querySelector(".fire");
// const earthElement = document.querySelector(".earth");
// const waterElement = document.querySelector(".water");
// const airElement = document.querySelector(".air");

const elements = [...document.querySelectorAll(".element")];


function addTitle() {
    head.textContent = this.dataset.name;
    head.style.fontSize = "48px";
};

elements.forEach((event) => {
    event.addEventListener('click', addTitle);
});