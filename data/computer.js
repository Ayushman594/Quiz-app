let quiz = [
  {
    question: "1. Which file extension is most commonly used for executable installation files on a window system?",
    options: {
      optionA: ".mp3",
      optionB: ".exe",
      optionC: ".jpg",
      optionD: ".txt",
    },
    correctAns: ".exe",
    name: "quiz1",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:
      "2. What does acronym SMPS stands for?",
    options: {
      optionA: "Switched-mode power supply",
      optionB: "Single-mode power supply",
      optionC: "Start-mode power supply",
      optionD: "Store-mode power supply",
    },
    correctAns: "Switched-mode power supply",
    name: "quiz2",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:
      "3. What is the function of WinZip?",
    options: {
      optionA: "It compresses large files into smaller files",
      optionB: "It is an antivirus software",
      optionC: "It expands smaller files into a large file",
      optionD: "It extracts smaller files from a larger files",
    },
    correctAns: "It compresses large files into smaller files",
    name: "quiz3",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question: "4. Which of the following is an input device of a computer?",
    options: {
      optionA: "Speaker",
      optionB: "Printer",
      optionC: "Monitor",
      optionD: "Scanner",
    },
    correctAns: "Scanner",
    name: "quiz4",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question: "5. What does 'M' represent in OMR?",
    options: {
      optionA: "Mark",
      optionB: "Magnetic",
      optionC: "Both a and b are correct",
      optionD: "Both a and b are not correct",
    },
    correctAns: "Mark",
    name: "quiz5",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"6. Neeti wants to use an input device that works by sensing the user's finger movement and downward pressure. Which among the following should she use?",
    options:{
      optionA:"Scanner",
      optionB:"Touchpad",
      optionC:"Keyboard",
      optionD:"Light pen"
    },
    correctAns:"Touchpad",
    name:"quiz6",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"7. What is a Visual Display unit (VDU) ?",
    options:{
      optionA:"Storage Unit",
      optionB:"Monitor",
      optionC:"Server",
      optionD:"System memory"
    },
    correctAns:"Monitor",
    name:"quiz7",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"8. Graphical User Interface (GUI) Was developed during which of the following generations of computer?",
    options:{
      optionA:"Fourth Generation",
      optionB:"Second Generation",
      optionC:"First Generation",
      optionD:"Third Generation"
    },
    correctAns:"Fourth Generation",
    name:"quiz8",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
     question:"9. Which of the following is a second generation system?",
      options:{
          optionA:"IBM Notebooks",
          optionB:"Sun Workstations",
          optionC:"Honeywell 400",
          optionD:"Apple II"
    },
    correctAns:"Honeywell 400",
    name:"quiz9",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"10. The _____ key opens the context menu?",
    options:{
      optionA:"ESC",
      optionB:"Windows Button",
      optionC:"PrtScr",
      optionD:"Shift"
    },
    correctAns:"Windows Button",
    name:"quiz10",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"11. Which keyboard Shortcut opens File Explorer in Windows 10?",
    options:{
      optionA:"Ctrl + P",
      optionB:"Win + E",
      optionC:"Alt + Tab",
      optionD:"Ctrl + C"
    },
    correctAns:"Win + E",
    name:"quiz11",
    gotright: "You are correct",
    gotwrong: "Incorrect Answer",
  },
  {
    question:"12. Payroll system and bank statements are example of _______ operating systems?",
    options:{
      optionA:"Multiprogramming Batch",
      optionB:"Simple Batch",
      optionC:"Time Sharing",
      optionD:"Multiprocessing"
    },
    correctAns:"Simple Batch",
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