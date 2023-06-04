var test="Німецька з нуля";
document.getElementById("text").innerHTML = test;

var step=0

var pics = ["cat.jpg", "dog.jpg", "hamster.jpg"] 

var text = ["Ist das eine Katze?", "Ist das ein Schaf?", "Ist das ein Kanninchen?"]
document.getElementById("question").innerHTML = text[step];

function nextStep(){
    step = step + 1;
        if (step < pics.length) {
            document.getElementById("picture").src= pics [step];
            document.getElementById("question").innerHTML = text[step];
        }
    }