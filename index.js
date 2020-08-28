let inputFieldElement = document.getElementById("studentNumber");
let buttonElement = document.getElementById("button");
let resultElement = document.getElementById("result");
const students = {
  801: {
    fullName: "lock kenrickr",
    phoneNumber: 999999999,
  },

  385: {
    fullName: "James dood",
    phoneNumber: 9765858677,
  },
};
buttonElement.addEventListener("click", function () {
  const studentNumber = inputFieldElement.value;
  const student = students[studentNumber];
  if (student) {
    resultElement.innerText = `Student Name: ${student.fullName}\nPhone Number:${student.phoneNumber}`;
  } else {
    resultElement.innerText = "Wrong Number";
  }
});
