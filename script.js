
let words = ["apple", "bread", "chair", "planet", "computer"];


let currentWord = "";
let score = 0;


let scrambledWord = document.getElementById("scrambledWord");
let userInput = document.getElementById("userInput");
let result = document.getElementById("result");
let scoreDisplay = document.getElementById("score");

let startBtn = document.getElementById("startBtn");
let submitBtn = document.getElementById("submitBtn");
let nextBtn = document.getElementById("nextBtn"); 


function shuffle(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}


function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    newWord();
}


function newWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    scrambledWord.textContent = shuffle(currentWord);
    userInput.value = "";
    result.textContent = "";
}


function checkAnswer() {
    let answer = userInput.value.toLowerCase();

    if (answer === currentWord) {
        score++;
        scoreDisplay.textContent = score;
        result.textContent = "Correct!";

        
        setTimeout(function() {
            newWord();
        }, 1000);

    } else {
        result.textContent = "Wrong! Try again.";
    }
}


startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", newWord); 
