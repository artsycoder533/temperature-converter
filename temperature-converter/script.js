const userInput = document.getElementById('temp');
const celciusBtn = document.getElementById('celcius');
const fahrenheitBtn = document.getElementById('fahrenheit');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

convert.addEventListener('click', toCelcius(77));
// fahrenheitBtn.addEventListener('click', toFahrenheit(userInput));

function toCelcius(temp) {
    let convertedTemp = (5 / 9) * (temp - 32);
    result.innerHTML = convertedTemp;
    return convertedTemp;
}



