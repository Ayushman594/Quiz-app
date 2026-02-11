let quiz = [
  {
    question: "1. Anklet:Ankle :: Bracelet:?",
    options: {
      optionA: "Wrists",
      optionB: "Ear",
      optionC: "Neck",
      optionD: "Waists",
    },
    correctAns: "Wrists",
    name: "quiz1",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:
      "2. (12,8,80) (16,10,131)",
    options: {
      optionA: "(11,5,55)",
      optionB: "(13,4,160)",
      optionC: "(9,6,54)",
      optionD: "(14,12,126)",
    },
    correctAns: "(9,6,54)",
    name: "quiz2",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:
      "3. Odd One out from the given options",
    options: {
      optionA: "CBE",
      optionB: "NMP",
      optionC: "UTW",
      optionD: "LKM",
    },
    correctAns: "LKM",
    name: "quiz3",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question: "4. In a certain language, DARK is coded as 3975 and READ is coded as 5873. How is 'K' coded in the given language?",
    options: {
      optionA: "7",
      optionB: "9",
      optionC: "3",
      optionD: "5",
    },
    correctAns: "9",
    name: "quiz4",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question: "5. In a certain language, 'bottle is blue' is coded as 'see mo tu' and 'sky is blue' is coded as 'mo tu lo'. What is the code for 'bottle' in that language?",
    options: {
      optionA: "see",
      optionB: "mo",
      optionC: "tu",
      optionD: "lo",
    },
    correctAns: "see",
    name: "quiz5",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"6. <img src='images/RQuesimg-1.jpg'>",
    options:{
      optionA:"<img src='images/optionimg-1 (1).jpg'>",
      optionB:"<img src='images/optionimg-1 (2).jpg'>",
      optionC:"<img src='images/optionimg-1 (3).jpg'>",
      optionD:"<img src='images/optionimg-1 (4).jpg'>"
    },
    correctAns:"<img src='images/optionimg-1 (3).jpg'>",
    name:"quiz6",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"7. 88,78,70,64,60,?,?",
    options:{
      optionA:"56,56",
      optionB:"58,58",
      optionC:"56,54",
      optionD:"57,57"
    },
    correctAns:"58,58",
    name:"quiz7",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"8. OA33,RD36,UG39,XJ42,?",
    options:{
      optionA:"CN41",
      optionB:"BO43",
      optionC:"AM45",
      optionD:"BN45"
    },
    correctAns:"AM45",
    name:"quiz8",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"9. A#B means A is the sister of B, A@B means A is the son of B, A&B means A is the father of B, A%B means A is the mother of B. If W & Q # T & Y @ M % K, then how is Q related to K ?",
    options:{
      optionA:"Mother's sister",
      optionB:"Sister",
      optionC:"Father's sister",
      optionD:"Father's mother"
    },
    correctAns:"Father's sister",
    name:"quiz9",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"10. Identify who is the Second Tallest person in the group from the Statements, One of the statements is a lie. Aditya: I am taller Than Nachiket but shorter than sanika. Rushikesh: I am taller than aditya but shorter than sanika. Nachiket: I am of the Same height that of Rushikesh and taller than Nikita. Nikita: Rushikesh is shorter than Aditya. Sanika: I am the Tallest",
    options:{
      optionA:"Nikita",
      optionB:"Aditya",
      optionC:"Rushikesh",
      optionD:"Nachiket"
    },
    correctAns:"Aditya",
    name:"quiz10",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"11. Which of the following calendar will be same as the calendar for the year 2009?",
    options:{
      optionA:"2025",
      optionB:"2015",
      optionC:"2036",
      optionD:"2042"
    },
    correctAns:"2015",
    name:"quiz11",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"12. Which two signs should be interchanged to make the following equation correct? 22 - 16 / (3 X 4) + 6 = 8",
    options:{
      optionA:"/ and +",
      optionB:"- and x",
      optionC:"/ and x",
      optionD:"- and +"
    },
    correctAns:"/ and +",
    name:"quiz12",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  }
];

let checkButton = document.querySelector("button");
let container = document.querySelector(".container");
let newHtml = "";

quiz.forEach((d) => {
  newHtml += `
    <p>${d.question}</p>
    <ol>
      <li><input type="radio" name="${d.name}" value="${d.options.optionA}">${d.options.optionA}</li>
      <li><input type="radio" name="${d.name}" value="${d.options.optionB}">${d.options.optionB}</li>
      <li><input type="radio" name="${d.name}" value="${d.options.optionC}">${d.options.optionC}</li>
      <li><input type="radio" name="${d.name}" value="${d.options.optionD}">${d.options.optionD}</li>
    </ol>
    <p class="display-result" id="${d.name}-result"></p>
  `;
});

container.innerHTML = newHtml;

checkButton.addEventListener("click", () => {
  quiz.forEach((d) => {
    let selected = document.querySelector(`input[name="${d.name}"]:checked`);
    let resultDisplay = document.getElementById(`${d.name}-result`);
    if (selected) {
      if (selected.value === d.correctAns) {
        resultDisplay.innerText = d.gotright;
        resultDisplay.setAttribute("class", "green");
      } else {
        resultDisplay.innerText = d.gotwrong;
        resultDisplay.setAttribute("class", "red");
      }
    } else {
      resultDisplay.innerText = "Please select an answer!";
      resultDisplay.setAttribute("class", "red");
    }
  });
});