const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const thirdInput = document.getElementById("thirdInput");
const button = document.getElementById("button");
const result = document.querySelector(".result");

button.addEventListener('click', () => {
    const first = firstInput.value;
    const second = secondInput.value;
    const third = thirdInput.value;

    if (second === "+") {
        result.innerHTML = Number(first) + Number(third);
    } else if (second === "-") {
        result.innerHTML = Number(first) - Number(third);
    }
});