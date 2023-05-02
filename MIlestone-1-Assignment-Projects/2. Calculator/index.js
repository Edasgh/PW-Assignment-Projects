// getting all the required elements
const previousInput = document.querySelector("#calculateInputPrev");
const currentInput = document.querySelector("#calculateInputCurr");
const numButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const allClearButton = document.querySelector(".all-clear");
const deleteButton = document.querySelector(".delete");
const pointButton = document.querySelector("#point");
const equalsButton = document.querySelector("#EqualBtn");
// functionality of DEL button
const deletion = () => {
  currentInput.value = currentInput.value.toString().slice(0, -1);
};
// functionality of AC button
const allClear = () => {
  // clean both the currentInput and previousInput field
  currentInput.value = "";
  previousInput.value = "";
};
allClearButton.addEventListener("click", allClear); //calling the allClear function as user clicks the AC button
deleteButton.addEventListener("click", deletion);//calling the deletion function as user clicks the DEL button
numButtons.forEach((numButton) => {
  // select each element (number-button) of all the number buttons
  numButton.addEventListener("click", () => {
    // as user clicks any number button , display and add the number in the currentInput field
    currentInput.value += numButton.textContent;
  });
});

operationButtons.forEach((operator) => {
   // select each element (operator-button) of all the operator buttons
  operator.addEventListener("click", () => {
    let operation = operator.textContent;
    // if there is no number entered before then don't display or add  the operator
    if (currentInput.value == "") return;
    // if any operator already exists then don't display or add it
    if (previousInput.value.includes(operation)) return;
    // as user clicks any operator button , display and add the operator in the currentInput field along with any number /numbers entered before
    previousInput.value = currentInput.value + operation;
    // as user enters any operator , clean the currentInput field
    currentInput.value = "";
    equalsButton.addEventListener("click", () => {
      let computation;
      // convert the values of currentInput and previousInput to numbers
      let current = parseFloat(currentInput.value);
      let prev = parseFloat(previousInput.value);
      //don't do computation  if the values of currentInput and previousInput are not numbers
      if (isNaN(prev) || isNaN(current)) return;
      if (!current) return; // if the currentInput dosen't contain any number then don't compute
      // The computation as per the operators
      switch (operation) {
        case "+":
          computation = prev + current;
          break;
        case "-":
          computation = prev - current;
          break;
        case "*":
          computation = prev * current;
          break;
        case "/":
          computation = prev / current;
          break;

        default:
          return;
      }
     // at the end of the function (after clicking equals button) , show the result in the currentInput field , clear the previousInput field and set the operation as undefined
      currentInput.value = computation;
      previousInput.value = "";
      operation = undefined;
    });
  });
});

pointButton.addEventListener("click", () => {
  // as a user clicks a point button , if a point (.) already exists either in the currentInput or in the previousInput field then it'll not either be displayed or added
  if (previousInput.value.includes(".") || currentInput.value.includes("."))
    return;
    // and display & add the point if it dosen't exist either in the currentInput or in  previousInput field
  currentInput.value += pointButton.textContent;
});
