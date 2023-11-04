/** 
splitting this file into seperate files that provide the same function 
//* these varibles were moved into the component.service.js as well with slight changes
const numberOneInput = document.getElementById("numberOne");
const numberTwoInput = document.getElementById("numberTwo");
const addValuesButton = document.getElementById("addValues");
const resultDiv = document.getElementById("result");
const errorBox = document.getElementById("error");

const parseInputs = (...input) => {   //* this function is put into parse-inputs.js 
  return input.map(str => parseInt(str));
};

const inputsAreValid = (...input) => {  //* this function is put into inputs-are-valid.js
  return input.every(num => typeof num === "number" && !isNaN(num));
};


//* this function is put into alert-service.js as it handles the error message
const handleAdditionError = (inputs, numbers) => {
  const fullMessage = inputs.reduce((message, str, index) => {
    if (inputsAreValid(numbers[index])) {
      return message + "";
    } else {
      return message + `${str} is not a number. `;
    }
  }, "Please enter two valid numbers! ");

  errorBox.classList.remove("invisible");
  errorBox.innerText = fullMessage;
};

const hideErrors = () => {
  errorBox.classList.add("invisible");
};

hideErrors();

//* this function has parts put into component.service.js as it handles the parts of the main functionality of the webpage.
  //*the obtaining of values from the user inputs into the webpage is split to components 
  //* the addtion functionality is kept in the new app file under src.
addValuesButton.addEventListener("click", () => {
  hideErrors();
  const inputs = [numberOneInput.value, numberTwoInput.value];
  const parsedInputs = parseInputs(...inputs);
  if (inputsAreValid(...parsedInputs)) {
    const [numA, numB] = parsedInputs;
    resultDiv.innerText = numA + numB;
  } else {
    resultDiv.innerText = "";
    handleAdditionError(inputs, parsedInputs);
  }
});

**/