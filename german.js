var test="Німецька з нуля";
document.getElementById("text").innerHTML = test;
document.getElementById("hamster").style.display = "none";
 
var step=0
document.getElementById("results").style.display = "none";

var pics = ["katze.jpg", "mops.jpg", "ham.jpg"] 

var text = ["Ist das eine Katze?", "Ist das ein Schaf?", "Ist das ein Kanninchen?"]
document.getElementById("question").innerHTML = text[step];

var answer = ["Ja", "Nein", "Nein"]

var correctSum = 0

var incorrectSum = 0

function firstStep(){
    document.getElementById("hamster").style.display = "inline";
    document.getElementById("second").style.display = "none";
}

function nextStep() {
    step = step + 1;
    if (step < pics.length) {
        document.getElementById("picture").src = pics [step];
        document.getElementById("question").innerHTML = text[step];
    }else{
        document.getElementById("hamster").style.display = "none";
        showResults()
    }
}

function yes() {
    correctanswer = answer[step]
    if (correctanswer === "Ja"){
        correctSum = correctSum + 1;
    } else {
        incorrectSum = incorrectSum + 1;
    }
    nextStep()
}

function no() {
correctanswer = answer[step]
    if (correctanswer === "Nein"){
       correctSum = correctSum + 1;
    } else {
        incorrectSum = incorrectSum + 1;
    }
    nextStep()
}

function showResults() {
    document.getElementById("correctResults").innerHTML = correctSum ;
    document.getElementById("incorrectResults").innerHTML = incorrectSum ;
    document.getElementById("results").style.display = "inline";
}