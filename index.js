const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const thirdInput = document.getElementById("thirdInput");
const button = document.getElementById("button");
const result = document.querySelector(".result");

const firstError = document.getElementById("firstInputError");
const secondError = document.getElementById("secondInputError");
const thirdError = document.getElementById("thirdInputError");

button.addEventListener('click', () => {
    firstError.textContent = "";
    secondError.textContent = "";
    thirdError.textContent = "";
    result.innerHTML = "";

    const first = firstInput.value.trim();
    const second = secondInput.value.trim();
    const third = thirdInput.value.trim();

    let hasError = false;

    if (first === "" || isNaN(first)) {
        firstError.textContent = "Введите число";
        hasError = true;
    }

    if (third === "" || isNaN(third)) {
        thirdError.textContent = "Введите число";
        hasError = true;
    }

    if (second === "") {
        secondError.textContent = "Введите знак";
        hasError = true;
    }

    if (hasError) return;

    const num1 = Number(first);
    const num2 = Number(third);

    if (second === "+") {
        result.innerHTML = num1 + num2;
    } else if (second === "-") {
        result.innerHTML = num1 - num2;
    } else if (second === "*") {
        result.innerHTML = num1 * num2;
    } else if (second === "/") {
        if (num2 === 0) {
            secondError.textContent = "На ноль делить нельзя!";
            result.innerHTML = "Ошибка";
        } else {
            result.innerHTML = num1 / num2;
        }
    } else {
        secondError.textContent = "Используйте +, -, * или /";
    }
});