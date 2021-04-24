

function startquiz() {
 var myTimer = setInterval(myClock, 1000)
    var c = 75
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
    document.getElementById("question1").style.display="none";
    document.getElementById("question2").style.display="block";
}
function submit2() {
    document.getElementById("question2").style.display="none";
    document.getElementById("question3").style.display="block";
}
function submit3() {
    document.getElementById("question3").style.display="none";
    document.getElementById("question4").style.display="block";
}
function submit4() {
    document.getElementById("question4").style.display="none";
    document.getElementById("question5").style.display="block";
}
function submit5() {
    document.getElementById("question5").style.display="none";
    document.getElementById("finished").style.display="block";
}

function reset() {
    document.getElementById("Start").style.display="flex";
    document.getElementById("timer").style.display="block";
    document.getElementById("finished").style.display="none";
}