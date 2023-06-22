// BMI function - calculates BMI
// Call it when the user clicks the button in the form
import {bmi} from "./functions.js"
import {puzzleAnswer} from "./functions.js"
//DOM



const topSecret = document.querySelector("#topSecret");

console.log(topSecret)

const form = document.querySelector(".form");
console.log(form)

const messageDiv = document.querySelector("#message");
console.log(messageDiv.children);

const star = document.querySelector("#star")
console.log(star)

const puzzle = document.querySelector("#puzzle")

const gallery = document.querySelector(".gallery")
console.log(gallery)

const answerRiddle = document.querySelector("#answerRiddle")

const showAnswer = document.querySelector("#showAnswer")

const msgForAnswer = document.querySelector("#msgForAnswer")

const startBtn = document.querySelector(".startBtn")

const close = document.querySelectorAll(".close")
console.log(close)

const closeSecret = close[0];
console.log(closeSecret)

const closeStar = close[1];

const closePuzzle = close[2];



setInterval(() => {
    let time = document.getElementById("currentTime");
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString("en-AU", {timeStyle: "short", hour12: true});
}, 1000)

//Making top secret folder button display/close bmi calculator and x close it

topSecret.addEventListener("click", () => {

    if (messageDiv.children.length > 0) {
        messageDiv.removeChild(document.querySelector("#msg"));
    }

    form.classList.toggle("form--clicked")
    console.log(form)
})

closeSecret.addEventListener("click", () => {

    form.classList.remove("form--clicked")
    console.log(gallery)
})

// Making star folder button open and close gallery and X close gallery

star.addEventListener("click", () => {

    gallery.classList.toggle("gallery--clicked")
    console.log(gallery)
})

closeStar.addEventListener("click", () => {

    gallery.classList.toggle("gallery--clicked")
    console.log(gallery)
})

// Making puzzle folder button open and close puzzle and X close puzzle

puzzle.addEventListener("click", () => {

    riddle.classList.toggle("riddle--clicked")
    console.log(riddle)
})

closePuzzle.addEventListener("click", () => {

    riddle.classList.toggle("riddle--clicked")
    console.log(puzzle)
})

// Opening and closing start menu

startBtn.addEventListener("click", () => {

    startMenu.classList.toggle //"startMenu" here is an id from html
    ("startMenu--clicked")
    console.log(startBtn)
})



// Making BMI calculator work

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    console.log(formData);
    const weight = formData.get("weight");
    const height = formData.get("height");
    
    let messageStr = bmi(weight, height);

    if (messageDiv.children.length > 0) {
        messageDiv.removeChild(document.querySelector("#msg"));
    }

    // create a p tag to add to the page
    const newPara = document.createElement("p");
    newPara.id = "msg";

    // create a text node from messageSTr for the p tag
    const text = document.createTextNode(messageStr);

    // tell the text to go inside my paragraph
    newPara.appendChild(text);

    // tell teh p tag where to go on the page
    messageDiv.appendChild(newPara);

    // clear the from
    form.reset();

})

// Making the puzzle work
answerRiddle.addEventListener("click", () => {
    const answer = document.getElementById("answer").value;
    let displayResult = puzzleAnswer(answer);
    let messageAns = "";
    console.log(displayResult)

    console.log(answerRiddle)

    if (msgForAnswer.children.length > 0) {
        if (document.querySelector("#ansMsg")){
            msgForAnswer.removeChild(document.querySelector("#ansMsg"))
        }
        else if (document.querySelector("#showAnsMsg")){
            msgForAnswer.removeChild(document.querySelector("#showAnsMsg"))
        }
    }

    if (displayResult){
       messageAns = "Correct!";
    }else {
        messageAns = "Wrong answer"
    }

    

    // create a p tag to add to the page
    const ansPara = document.createElement("p");
    ansPara.id = "ansMsg";

    // create a text node from messageSTr for the p tag
    const textForAnswer = document.createTextNode(messageAns);

    // tell the text to go inside my paragraph
    ansPara.appendChild(textForAnswer);

    // tell teh p tag where to go on the page
    msgForAnswer.appendChild(ansPara);

    // clear the from
    document.getElementById("answer").value = "";


})

showAnswer.addEventListener("click", () => {
    
    const showCorrect = "queue"
    console.log(showCorrect)

    if (msgForAnswer.children.length > 0) {
        if (document.querySelector("#ansMsg")){
            msgForAnswer.removeChild(document.querySelector("#ansMsg"))
        }
        else if (document.querySelector("#showAnsMsg")){
            msgForAnswer.removeChild(document.querySelector("#showAnsMsg"))
        }
        
    }

    // create a p tag to add to the page
    const showAnsPara = document.createElement("p");
    showAnsPara.id = "showAnsMsg";

    // create a text node from messageSTr for the p tag
    const textForShowAnswer = document.createTextNode(showCorrect);

    // tell the text to go inside my paragraph
    showAnsPara.appendChild(textForShowAnswer);

    // tell teh p tag where to go on the page
    msgForAnswer.appendChild(showAnsPara);

    // clear the from
    // document.getElementById("answer").value = "";


})





    



