const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const button = document.getElementById("button");
const resultValue = document.querySelector(".result");
const resultStatus = document.querySelector(".status");
const weightError = document.getElementById("weightInputError");
const heightError = document.getElementById("heightInputError");

button.addEventListener('click', () => {
    weightError.textContent = "";
    heightError.textContent = "";
    resultValue.innerHTML = "";
    resultStatus.innerHTML = "";

    const weight = weightInput.value.trim().replace(',', '.');
    const height = heightInput.value.trim().replace(',', '.');

    let hasError = false;
    if (weight === "" || isNaN(weight) || Number(weight) <= 0) {
        weightError.textContent = "Введите корректный вес";
        hasError = true;
    }

    if (height === "" || isNaN(height) || Number(height) <= 0) {
        heightError.textContent = "Введите корректный рост";
        hasError = true;
    }

    if (hasError) return;

    const weightNum = Number(weight);
    const heightNum = Number(height) / 100;
    const imt = weightNum / (heightNum * heightNum);
    const roundedImt = imt.toFixed(1);

    resultValue.innerHTML = roundedImt;
    let statusText = "";
    let statusColor = "";

    if (imt < 16) {
        statusText = "Выраженный дефицит массы тела";
        statusColor = "red";
    } else if (imt >= 16 && imt < 18.5) {
        statusText = "Недостаточная масса тела";
        statusColor = "orange";
    } else if (imt >= 18.5 && imt < 25) {
        statusText = "Норма";
        statusColor = "green";
    } else if (imt >= 25 && imt < 30) {
        statusText = "Избыточная масса тела";
        statusColor = "orange";
    } else if (imt >= 30 && imt < 35) {
        statusText = "Ожирение I степени";
        statusColor = "red";
    } else if (imt >= 35 && imt < 40) {
        statusText = "Ожирение II степени";
        statusColor = "red";
    } else {
        statusText = "Ожирение III степени";
        statusColor = "darkred";
    }

    resultStatus.innerHTML = statusText;
    resultStatus.style.color = statusColor;
});