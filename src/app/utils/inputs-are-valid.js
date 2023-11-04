const inputsAreValid = (...input) => {
    return input.every(num => typeof num === "number" && !isNaN(num));
};

// function split from the original app.js file verifys inputs are a number