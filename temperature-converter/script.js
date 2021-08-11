const userInput = document.querySelector(".textbox");
const convertBtn = document.querySelector('#convert');
const result = document.querySelector('#result');
const radioBtns = document.querySelectorAll('input[name="unit"]');


// add event listener for textbox, target change event once the focus leaves the textbox and the user selects something else
userInput.addEventListener('change', getInput);

//add event listener to convert button
convertBtn.addEventListener('click', function (e) {
    e.preventDefault();
    //check which radio button was selected, call function
    
});

function getInput() {
    const userTemp = this.value;
    console.log(userTemp);
    getUnit(userTemp);
}


function getUnit(input) {
     // select the group of radio buttons with the same name
    console.log("inside getUnit, input is :" + input);
    // iterate over the radio button group and check which button is selected, once found get the value of that button
    radioBtns.forEach(function (radioBtn) {
        if (radioBtn.checked) {
            const unit = radioBtn.value;
            console.log(unit);
            // call corresponding unit converting function
            if (unit === "celcius") {
                console.log("inside if celcius, input is: " + input);
                toFahrenheit(input);
            } else {
                console.log("inside if fahrenheit, input is: " + input);
                toCelcius(input);
            }
            return unit;
        }
    });
    
}

function toCelcius(temp) {
    console.log("inside toCelcius");
    let convertedTemp = (5 / 9) * (temp - 32);
    console.log(convertedTemp);
    result.textContent = convertedTemp;
	console.log(typeof convertedTemp);
    return convertedTemp;
}

function toFahrenheit(temp) {
    console.log("inside toFahrenheit");
    let convertedTemp = (temp * (9 / 5)) + 32;
    console.log(convertedTemp);
    result.textContent = convertedTemp;
    console.log(typeof convertedTemp);
    return convertedTemp;
}