var c = 75;
var myTimer;
var score = 0;

function startquiz() {
 var myTimer = setInterval(myClock, 1000)
    function myClock() {
        document.getElementById("timer").innerHTML = --c;
       if (c == 0) {
           clearInterval(myTimer);
           document.getElementById("timeup");
        } 
   }

   document.getElementById("question1").style.display="block";
   document.getElementById("Start").style.display="none";
}
function submit1() {
    var userinput = document.querySelector('input[name="answer1"]:checked');
    if (userinput != null){
        alert("Correct,Good job!");
        console.log(score + 10)
    } else {
        alert("Incorrect, Sorry!")
    };
    document.getElementById("question1").style.display="none";
    document.getElementById("question2").style.display="block";
}

function submit2() {
    var userinput = document.querySelector('input[name="answer2"]:checked');
    if (userinput != null){
        alert("Correct,Good job!")
        console.log(score + 10)
    } else {
        alert("Incorrect, Sorry!")
    };
    document.getElementById("question2").style.display="none";
    document.getElementById("question3").style.display="block";
}
function submit3() {
    var userinput = document.querySelector('input[name="answer3"]:checked');
    if (userinput != null){
        alert("Correct,Good job!")
    } else {
        alert("Incorrect, Sorry!")
    };
    document.getElementById("question3").style.display="none";
    document.getElementById("question4").style.display="block";
}
function submit4() {
    var userinput = document.querySelector('input[name="answer4"]:checked');
    if (userinput != null){
        alert("Correct,Good job!")
    } else {
        alert("Incorrect, Sorry!")
    };
    document.getElementById("question4").style.display="none";
    document.getElementById("question5").style.display="block";
}
function submit5() {
    var userinput = document.querySelector('input[name="answer5"]:checked');
    if (userinput != null){
        alert("Correct,Good job!")
    } else {
        alert("Incorrect, Sorry!")
    };
    document.getElementById("question5").style.display="none";
    document.getElementById("finished").style.display="block";
    clearInterval(myTimer);
}

function reset() {
    document.getElementById("Start").style.display="flex";
    document.getElementById("timer").style.display="block";
    document.getElementById("finished").style.display="none";
}