// moon element
const moonElement = document.querySelector(".fa-moon");
const sunElement = document.querySelector(".fa-sun");

sunElement.style.display = "none";

moonElement.addEventListener("click", () => {
    moonElement.style.display = "none";
    sunElement.style.display = "inline";
    document.body.classList.add("dark");
})

sunElement.addEventListener("click", () => {
    sunElement.style.display = "none";
    moonElement.style.display = "inline";
    document.body.classList.remove("dark");
})