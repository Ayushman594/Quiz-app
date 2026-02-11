let quiz = [
  {
    question: "1. Which number among 98984, 99008, 98998, 98992 is not divisible by 8",
    options: {
      optionA: "98984",
      optionB: "99008",
      optionC: "98998",
      optionD: "98992",
    },
    correctAns: "98998",
    name: "quiz1",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:
      "2. The LCM of 144, 360 and 450 is",
    options: {
      optionA: "4800",
      optionB: "7200",
      optionC: "3600",
      optionD: "2400",
    },
    correctAns: "3600",
    name: "quiz2",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:
      "3. The Value of N in the equation 9 x N of 4/4-15 x 4 = 12 is",
    options: {
      optionA: "9",
      optionB: "12",
      optionC: "0",
      optionD: "8",
    },
    correctAns: "8",
    name: "quiz3",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question: "4. A group of 30 students appeared in a test. The average score of 12 students is 62 and that of the rest is 72. What is the average score of the class?",
    options: {
      optionA: "66",
      optionB: "68",
      optionC: "69",
      optionD: "67",
    },
    correctAns: "68",
    name: "quiz4",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question: "5. The fourth proportional to 16, 26 and 32 is",
    options: {
      optionA: "52",
      optionB: "16",
      optionC: "54",
      optionD: "34",
    },
    correctAns: "52",
    name: "quiz5",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"6. The Sum of ages of 6 children born at an interval of 2 yr each is 90 yr. What is the age of the eldest child?",
    options:{
      optionA:"14",
      optionB:"16",
      optionC:"20",
      optionD:"10"
    },
    correctAns:"20",
    name:"quiz6",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"7. A woman spends 2/3 of her income. if her income increase by 18% and the expenditure increases by 24%, then the percentage increase in her savings will be",
    options:{
      optionA:"6%",
      optionB:"3%",
      optionC:"4%",
      optionD:"5%"
    },
    correctAns:"6%",
    name:"quiz7",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"8. A Shopkeeper sold a pair of headphones for Rs 5520 at a gain of 20%. What would have been the gain or loss per cent, if it had been sold for Rs 4370?",
    options:{
      optionA:"Gain 15%",
      optionB:"Loss 5%",
      optionC:"Gain 2%",
      optionD:"Loss 10%"
    },
    correctAns:"Loss 5%",
    name:"quiz8",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
     question:"9. Three Successive Discounts of 15%, 20% and 25% are given. What will be net discount in percentage?",
      options:{
          optionA:"52%",
          optionB:"49%",
          optionC:"46%",
          optionD:"40%"
    },
    correctAns:"49%",
    name:"quiz9",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"10. Swati starts a business with Rs 4200, and after 5 months, Bani joins swati as her partner. After a year, the profit is divided among Swati and bani in the ratio 2:5. What is Bani's contribution ?",
    options:{
      optionA:"Rs 18000",
      optionB:"Rs 17050",
      optionC:"Rs 19000",
      optionD:"Rs 16500"
    },
    correctAns:"Rs 18000",
    name:"quiz10",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"11. 42 L of milk at Rs 25 per L is mixed with 28 L of milk at Rs 40 per L. Find the average price of the mixture.",
    options:{
      optionA:"Rs 31.5",
      optionB:"Rs 31",
      optionC:"Rs 32",
      optionD:"Rs 29"
    },
    correctAns:"Rs 31",
    name:"quiz11",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"12. What annual installment will discharge a debt of Rs 26160 due in 4 yr at a 6% simple interest p.a ?",
    options:{
      optionA:"Rs 4500",
      optionB:"Rs 5500",
      optionC:"Rs 5800",
      optionD:"Rs 6000"
    },
    correctAns:"Rs 6000",
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