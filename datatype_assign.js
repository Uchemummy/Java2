function checkInputType() {
  const userInput = prompt("Enter a value:");

  if (userInput === null) {
    // If the user cancels the prompt
    console.log("User canceled the prompt.");
    alert('User Canceled the prompt');
    return;
  }

  const containsLetters = /[a-zA-Z]/.test(userInput);
  const containsDigits = /\d/.test(userInput);

  if (containsLetters && containsDigits) {
    // If the input contains both letters and digits
    console.log("Mixed input of string and number:", userInput);
    alert('Mixed input of string and number: false');
    return false;
  }

  if (isNaN(userInput)) {
    // If the input is not a number
    console.log("Input is a string:", userInput);
    alert('Data type is: String: True');
  } else {
    // If the input is a number
    console.log("Input is a number:", parseFloat(userInput));
    alert('Data type is: Number: True');
  }

  return true;
}

checkInputType();
