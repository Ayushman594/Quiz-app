let quiz = [
  {
    question: "1. Synonym of Enervated",
    options: {
      optionA: "weaken",
      optionB: "alleviate",
      optionC: "elevate",
      optionD: "energise",
    },
    correctAns: "weaken",
    name: "quiz1",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:
      "2. Antonym of Ambiguous",
    options: {
      optionA: "certain",
      optionB: "vague",
      optionC: "Dubious",
      optionD: "Puzzled",
    },
    correctAns: "certain",
    name: "quiz2",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:
      "3. Please Pass ..... the Salt",
    options: {
      optionA: "me",
      optionB: "mine",
      optionC: "my",
      optionD: "I",
    },
    correctAns: "me",
    name: "quiz3",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question: "4. The Company's Decision to relocate had a negative ...... on its employees",
    options: {
      optionA: "conclusion",
      optionB: "effect",
      optionC: "establish",
      optionD: "accommodation",
    },
    correctAns: "effect",
    name: "quiz4",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question: "5. No Sooner did Mr. Piyahri Mishra finish his lecture <span style='text-decoration:underline'>that the students began to leave</span>",
    options: {
      optionA: "so the students began to leave",
      optionB: "then the students began to leave",
      optionC: "than the students began to leave",
      optionD: "and the students began to leave",
    },
    correctAns: "than the students began to leave",
    name: "quiz5",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"6. The chief guest concluded his speech as <span style='text-decoration:underline'>he requested </span>to stop by the organisers",
    options:{
      optionA:"No substitution",
      optionB:"He was requested",
      optionC:"He is requested",
      optionD:"He will be requested"
    },
    correctAns:"He was requested",
    name:"quiz6",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"7. Speaking disrespectfully about sacred or religious things",
    options:{
      optionA:"Blasphemy",
      optionB:"Bigamy",
      optionC:"Biped",
      optionD:"Belligerent"
    },
    correctAns:"Blasphemy",
    name:"quiz7",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"8. A person who likes to argue about anything",
    options:{
      optionA:"Reticent",
      optionB:"Coward",
      optionC:"Contentious",
      optionD:"Veracious"
    },
    correctAns:"Contentious",
    name:"quiz8",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"9. To Steal from a Shop",
    options:{
      optionA:"Golden Opportunity",
      optionB:"Five Finger Discount",
      optionC:"Green Thumb",
      optionD:"Black sheep"
    },
    correctAns:"Five Finger Discount",
    name:"quiz9",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"10. Cooked your goose",
    options:{
      optionA:"To complete a lot of work or a wide range of things",
      optionB:"When Something develops completely and reaches maturity",
      optionC:"To spend a lot of time and energy but achieve nothing",
      optionD:"To interfere with, disrupt or ruin something for someone"
    },
    correctAns:"To interfere with, disrupt or ruin something for someone",
    name:"quiz10",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"11. Choose Incorrect Spelling",
    options:{
      optionA:"Creature",
      optionB:"Specified",
      optionC:"Decrease",
      optionD:"Pieceful"
    },
    correctAns:"Pieceful",
    name:"quiz11",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"12. Don't park your car here.(Change in Passive voice)",
    options:{
      optionA:"Let your car not be parked here",
      optionB:"Let not your car be parked here",
      optionC:"Let your car be parked here",
      optionD:"Have not your car be parked here"
    },
    correctAns:"Let your car not be parked here",
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