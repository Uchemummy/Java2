// let investment = document.querySelector('.totalQuestions');
// let earning = document.querySelector('.correctAnswer');
// let balance = document.querySelector('.percentageScore');


// Get the current year
const currentYear = new Date().getFullYear();

// Initialize an array to store the names of presidents
const presidents = ["Abubaka Tafawa Belewa", "Nnamdi Azikiwe", "Aguiyi Ironsi", "Mutala Muhammed", "Olusegun Obasanjo", "Shehu Usman Aliyu Shagari", "Muhammadu Buhari", "Ibrahim Babangida", "Enerst Shonekan", "Sani Abacha", "Abdusalami Abubakar", "Olusegun Obasanjo", "Umaro Musa Yaradua", "GoodLuck Jonathan", "Muhamadu Buhari", "Ahmed Bola Tinubu"];

// Calculate the number of years since 1960
const yearsSince1960 = currentYear - 1960;

// Loop through each year since 1960
for (let i = 0; i <= yearsSince1960; i++) {
  // Calculate the year
  const year = 1960 + i;

  // Use a switch statement to determine the president based on the year
  switch (year) {
    case 1960:
      presidents.push("Abubaka Tafawa Belewa");
      break;
    case 1963:
      presidents.push("Nnamdi Azikiwe");
      break;
      case 1963:
      presidents.push("Yakubu Gowon");
      break;
      case 1966:
      presidents.push("Aguiyi Ironsi");
      break;
      case 1975:
      presidents.push("Mutala Muhamade");
      break;

      case 1976:
      presidents.push("Olusegun Obasanjo");
      break;

      case 1979:
      presidents.push("Usman Aliyu Shagari");
      break;

      case 1983:
      presidents.push("Muhammadu Buhari");
      break;

      case 1985:
      presidents.push("Ibrahim Babangida");
      break;

      case 1993:
      presidents.push("Enest Shonekan");
      break;

      case 1993:
      presidents.push("Sani Abacha");
      break;

      case 1998:
      presidents.push("Abdusalami Abubakar");
      break;

      case 1999:
      presidents.push("Olusegun Obasanjo");
      break;

      case (2007):
      presidents.push("Alhaji Umaro Musa Yaradua");
      break;

      case (2011):
      presidents.push("Ebere Goodluck Jonathan");
      break;

      case (2015):
      presidents.push("Muhammade Buhari");
      break;

      case 2024:
      presidents.push("Ahmed Bola Tinubu");
      break;
    // Add cases for subsequent years until the current year
  }
  }

// Output the names of US presidents since 1960 till date
console.log("Nigerian Presidents since 1960 till date:");
console.log(presidents);

// Define an object containing questions and answers
const quiz = {
  "What  year did  Abubakar Tafawa Belewa Assume Power": "1960",
  "What  year did  Nnamdi Azikiwe  Assume Power": "1963",
  "What  year did  Yakubu Gowon  Assume Power": "1963",
  "What  year did  Aguiyi Ironsi  Assume Power": "1966",
  "What  year did  Mutala Muhamade  Assume Power": "1975",
  "What  year did  Olusegun Obasanjo  Assume Power": "1976",
  "What  year did Usman Aliyu Shagari  Assume Power": "1979",
  "What  year did Muhammadu Buhari  Assume Power": "1983",
  "What  year did Ibrahim Babangida  Assume Power": "1985",
  "What  year did Ibrahim Babangida  Assume Power": "1993",
  "What  year did Enest Shonekan  Assume Power": "1993",
  "What  year did Sani Abacha  Assume Power": "1993",
  "What  year did Abdusalami Abubakar  Assume Power": "1998",
  "What  year did Olusegun Obasanjo  Assume Power": "1999",
  "What  year did Alhaji Umaro Musa Yaradua  Assume Power": "2007",
  "What  year did Ebere Goodluck Jonathan  Assume Power": "2011",
  "What  year did Muhammade Buhari  Assume Power": "2015",
  "What  year did Ahmed Bola Tinubu  Assume Power": "2023",
  // Add more questions and answers as needed
};

// Function to run the quiz
function runQuiz() {
  let totalQuestions = 0;
  let correctAnswers = 0;

  for (const question in quiz) {
    // Prompt the user with the question and get the user's answer
    const userAnswer = prompt(question);
    totalQuestions++;

    // Check if the user's answer is correct
    if (userAnswer === quiz[question]) {
      alert("Correct Answer 10 marks!");
    } else {
      alert("Incorrect 0 mark. The correct answer is: " + quiz[question]);
    }
  }

  // Calculate the percentage score
      const percentageScore = (correctAnswers / totalQuestions) * 100;

       // Output the total mark of the quiz and the actual mark the student got
  alert("Total questions: " + totalQuestions + "\n" +
  "Correct answers: " + correctAnswers + "\n" +
  "Percentage score: " + percentageScore.toFixed(2) + "%");

}

// Run the quiz
runQuiz();

