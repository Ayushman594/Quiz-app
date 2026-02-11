// let quiz = [
//   {
//     question: "1. When was the first battle of panipat happened?",
//     options: {
//       optionA: "1987",
//       optionB: "1567",
//       optionC: "1761",
//       optionD: "1526",
//     },
//     correctAns: "1526",
//     name: "quiz1",
//     gotright:"you are correct",
//     gotwrong:"Incorrect Answer"
//   },
//   {
//     question:
//       "2. Where was first meeting of indian and Arab Foreign Ministers held in 2026?",
//     options: {
//       optionA: "Delhi",
//       optionB: "Mumbai",
//       optionC: "Surat",
//       optionD: "Chennai",
//     },
//     correctAns: "Delhi",
//     name: "quiz2",
//     gotright:"you are correct",
//     gotwrong:"Incorrect Answer"
//   },
//   {
//     question:
//       "3. In which state was the 9th National conference of the Bureau of police Research and development held ?",
//     options: {
//       optionA: "Maharashtra",
//       optionB: "Andhra pradesh",
//       optionC: "Tamil Nadu",
//       optionD: "Goa",
//     },
//     correctAns: "Andhra pradesh",
//     name: "quiz3",
//     gotright:"you are correct",
//     gotwrong:"Incorrect Answer"
//   },
//   {
//     question: "4. On which day is world wetlands day celebrated every year?",
//     options: {
//       optionA: "4th June",
//       optionB: "19th December",
//       optionC: "2nd February",
//       optionD: "11th January",
//     },
//     correctAns: "2nd February",
//     name: "quiz4",
//     gotright:"you are correct",
//     gotwrong:"Incorrect Answer"
//   },
//   {
//     question: "5. Ustad Bismillah Khan is associated with which instrument?",
//     options: {
//       optionA: "Sitar",
//       optionB: "Tabla",
//       optionC: "Santoor",
//       optionD: "Shehnai",
//     },
//     correctAns: "Shehnai",
//     name: "quiz5",
//     gotright:"you are correct",
//     gotwrong:"Incorrect Answer"
//   },
// ];

// let options = document.querySelectorAll("input");
// let checkButton = document.querySelector("button");
// let display = document.querySelectorAll(".display-result");
// let container = document.querySelector(".container");
// let newHtml = "";
// quiz.forEach((d) => {
//   newHtml =newHtml +`<p>${d.question}</p>
//     <ol>
//         <li><input type="radio" name=${d.name} value="1987">${d.options.optionA}</li>
//         <li><input type="radio" name="${d.name}" value="1567">${d.options.optionB}</li>
//         <li><input type="radio" name=${d.name} value="1761">${d.options.optionC}</li>
//         <li><input type="radio" name=${d.name} value="1526">${d.options.optionD}</li>
//     </ol>
//     <p class="display-result"></p>`;

// });

// checkButton.addEventListener("click", () => {
//       quiz.forEach((d)=>{
//       display.forEach((res)=>{
//          if (options.checked && d.options.optionA==d.correctAns || d.options.optionB==d.correctAns || d.options.optionC==d.correctAns || d.options.optionD==d.correctAns){
//           res.innerText= d.gotright;
//           res.setAttribute("class", "green");
//         } else{
//           res.innerText= d.gotwrong;
//           res.setAttribute("class", "red");
//         }

//       })
//     })
//   })

// container.innerHTML = newHtml;

let quiz = [
  {
    question: "1. When was the first battle of Panipat happened?",
    options: {
      optionA: "1987",
      optionB: "1567",
      optionC: "1761",
      optionD: "1526",
    },
    correctAns: "1526",
    name: "quiz1",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:
      "2. Where was first meeting of Indian and Arab Foreign Ministers held in 2026?",
    options: {
      optionA: "Delhi",
      optionB: "Mumbai",
      optionC: "Surat",
      optionD: "Chennai",
    },
    correctAns: "Delhi",
    name: "quiz2",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:
      "3. In which state was the 9th National conference of the Bureau of Police Research and Development held?",
    options: {
      optionA: "Maharashtra",
      optionB: "Andhra pradesh",
      optionC: "Tamil Nadu",
      optionD: "Goa",
    },
    correctAns: "Andhra pradesh",
    name: "quiz3",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question: "4. On which day is World Wetlands Day celebrated every year?",
    options: {
      optionA: "4th June",
      optionB: "19th December",
      optionC: "2nd February",
      optionD: "11th January",
    },
    correctAns: "2nd February",
    name: "quiz4",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question: "5. Ustad Bismillah Khan is associated with which instrument?",
    options: {
      optionA: "Sitar",
      optionB: "Tabla",
      optionC: "Santoor",
      optionD: "Shehnai",
    },
    correctAns: "Shehnai",
    name: "quiz5",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"6. Baul mela is related to which state?",
    options:{
      optionA:"Meghalaya",
      optionB:"Tripura",
      optionC:"West Bengal",
      optionD:"Maharashtra"
    },
    correctAns:"West Bengal",
    name:"quiz6",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"7. How many military personnel were awarded the Kirti Chakra in 2026?",
    options:{
      optionA:"2",
      optionB:"3",
      optionC:"4",
      optionD:"5"
    },
    correctAns:"3",
    name:"quiz7",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"8. Palghat Mani Iyer was associated with which instrument?",
    options:{
      optionA:"Mridangam",
      optionB:"Sitar",
      optionC:"Santoor",
      optionD:"Flute"
    },
    correctAns:"Mridangam",
    name:"quiz8",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"9. Where has India's first off-grid greenhydrogen pilot plant been launched?",
    options:{
      optionA:"Haryana",
      optionB:"Odisha",
      optionC:"Andhra Pradesh",
      optionD:"Gujarat"
    },
    correctAns:"Gujarat",
    name:"quiz9",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"10. The famous Ambubachi Mela was held in which of the following states?",
    options:{
      optionA:"Assam",
      optionB:"Tripura",
      optionC:"Meghalaya",
      optionD:"Mizoram"
    },
    correctAns:"Assam",
    name:"quiz10",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"11. The world's first jet-powered flyinghumanoid robot has been developed in which country?",
    options:{
      optionA:"India",
      optionB:"Italy",
      optionC:"Argentina",
      optionD:"Canada"
    },
    correctAns:"Italy",
    name:"quiz11",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"12. Who has become the first Indian woman toswim across the North Channel?",
    options:{
      optionA:"Ankita soni",
      optionB:"Sayani Das",
      optionC:"Aparna Das",
      optionD:"Vrinda Mishra"
    },
    correctAns:"Sayani Das",
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
