const userInput = document.getElementById('temp');
const celciusBtn = document.getElementById('celcius');
const fahrenheitBtn = document.getElementById('fahrenheit');
const result = document.getElementById('result');

celciusBtn.addEventListener('click', toCelcius(userInput.value));
// fahrenheitBtn.addEventListener('click', toFahrenheit(userInput));

function toCelcius(temp) {
    return (5 / 9) * (temp - 32);
}

result.innerHTML = toCelcius(userInput.value);

