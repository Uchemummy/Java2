// const students = [
//   'Chidebere', 
//   'Oluwaseun',
//   'Nelson',
//   'Uduak',
//   'Nath',
//   'Stecia',
//   'Ezeuzo',
//   'Tina',
//   'Moses',
//   'Micheal',];
// console.log(students);

// //TO REPLACE ELEMENT IN THE ARRAY
// students[3] = 'Baby Girl';
// students[4] = 'Baby Boy';

// //adds more Students to the list. Starting from the top
// students.unshift = 'strawberry'

// //adds more Students to the list. Starting from the buttom
// students.push = 'grape';

// console.log(Array.isArray(students));

// //To Remove An Object from the List
// students.pop([1]) 



document.addEventListener("DOMContentLoaded", function() {
  // Sample array of students
  let students = [
    {name: "Chidebere", passcode: "pass-1234"},
    {name: "Oluwaseun", passcode: "pass-1234"},
    {name: "Nelson", passcode: "pass-1234"},
    {name: "Udusk", passcode: "pass-1234"},
    {name: "Nath", passcode: "pass-1234"},
    {name: "Stecia", passcode: "pass-1234"},
    {name: "Uzoeze", passcode: "pass-1234"},
    {name: "Tina", passcode: "pass-1234"},
    {name: "Moses", passcode: "pass-1234"},
    {name: "Ticket_G", passcode: "pass-1234"},
    {name: "Chike", passcode: "pass-1234"},
    {name: "Micheal", passcode: "pass-1234"}
  ];

  // Function to display Student List
//This line declares function named displayStudents() which is responsible for displaying the list of students in the HTML document.
  function displayStudents() {

//This line retrieves the DOM element with the ID 'studentsList' and assigns it to the variable studentList.
    const studentList = document.getElementById('studentsList');

//This line clears the previous content of the studentList element by setting its innerHTML property to an empty string.
    studentList.innerHTML = ""; // Clear Previous Content

//This line iterates/repeat/dublicates over each student in the students array using the forEach method and creates a list item for each student.
    students.forEach((student, index) => {
//This line creates a new list item element (<li>) and assigns it to the variable listItem.
      const listItem = document.createElement("li");

//This line sets the text content of the listItem to display the name and passcode of the current student.     
      listItem.textContent = `Name: ${student.name}, Passcode: ${student.passcode} `;

// This line appends the listItem as a child of the studentList element, adding it to the list of students in the HTML document.
      studentList.appendChild(listItem);
    });
  }

//This line declares a function named deleteStudent(index) which is responsible for deleting a student from the students array based on the given index.
  // Function to delete student by index
  function deleteStudent(index) {

//This line checks if the given index is not null, is a valid number, and falls within the range of the students array.
    if (index !== null && !isNaN(index) && index >= 0 && index < students.length) {

//This line removes one element from the students array at the specified index.
      students.splice(index, 1);

// This line calls the displayStudents() function to update the HTML content after deleting the student.
      displayStudents(); // Update HTML Content
    } else {
      if (index !== null) {
        alert("Invalid index. Please Enter a valid index.");
      } else {
        alert("Prompt canceled. No index provided.");
      }
    }
  }

  // Initial display of students
  displayStudents();  

  // Prompt user for index to delete student
  const indexToDelete = prompt("Enter the index of the student to delete:");

  // First Convert the inputstring  to a number
  const index = parseInt(indexToDelete);

  // Check if the input is a valid number
//This line checks if the input is a valid number using isNaN(). If it's a valid number, it calls the deleteStudent() function with the provided index. Otherwise, it displays an alert message indicating invalid input.
  if (!isNaN(index)) {
    deleteStudent(index);
  } else {
    alert("Invalid input. Please enter a number.");
  }
});
