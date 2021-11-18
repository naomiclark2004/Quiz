function final()
{
    var score = 0;
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var q5a = document.quiz.q5a.checked;
    var q5d = document.quiz.q5d.checked;
    var q5e = document.quiz.q5e.checked;
    var q6c = document.quiz.q6c.checked;
    var q6e = document.quiz.q6e.checked;
    var q6f = document.quiz.q6f.checked;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var q9a = document.quiz.q9a.checked;
    var q9b = document.quiz.q9b.checked;
    var q9d = document.quiz.q9d.checked;
    var q10b = document.quiz.q10b.checked;
    var q10c = document.quiz.q10c.checked;
    var q10d = document.quiz.q10d.checked;
    var q11a = document.quiz.q11a.checked;
    var q11b = document.quiz.q11b.checked;
    var q11d = document.quiz.q11d.checked;
    var question12 = document.quiz.question12.value;
    var q13a = document.quiz.q13a.checked;
    var q13c = document.quiz.q13c.checked;
    var q13e = document.quiz.q13e.checked;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;

    if (question1=="C"){score++;}
    if (question2=="D"){score++;}
    if (question3=="A"){score++;}
    if (question4=="B"){score++;}
    if (q5a==true && q5d== true && q5e== true){score++;}
    if (q6c==true && q6e==true && q6f==true){score++;}
    if (question7=="C"){score++;}
    if (question8=="D"){score++;}
    if (q9a==true && q9b==true && q9d==true){score++;}
    if (q10b==true && q10c==true && q10d==true){score++;}
    if (q11a==true && q11b==true && q11d==true){score++;}
    if (question12=="A"){score++;}
    if (q13a==true && q13c==true && q13e==true){score++;}
    if (question14=="B"){score++;}
    if (question15=="C"){score++;}

    var percent = (score/15)*100;
    document.getElementById('result').innerHTML="Your score is:" + parseInt(percent);
}

//Sets the date that it is counting down to
var countDate = new Date("December 31, 2021 23:59:59").getTime();
//makes it count down every 1 second
//setInterval will repeat the function  
//let timerOff = false;
var x = setInterval(function(){
//getting todays date to compare it to countDate
var now = new Date().getTime();
var timeleft = countDate - now;

//claculate the time for days, hours, minutes, seconds
//(milliseconds , seconds, minutes, and hours)
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

//Output the result in the timer element
//document.getElementById("timer").innerHTML = days + ":" + hours + ":"
// + minutes + ":" + seconds ;
 
//Output the result in the timer element and add 0 before value if it is between 10 and 0.
document.getElementById("timer").innerHTML = 
(days < 10 ? "0" + days + ":" : days + ":") +
(hours < 10 ? "0" + hours + ":" : hours + ":")+
(minutes < 10 ? "0" + minutes + ":" : minutes + ":")+ 
(seconds < 10 ? "0" + seconds : seconds);

//if timeruns out alert pops up to tell you the time is up, timer doesnt display , and your score becomes 0.
//Also submit button is disabled so the quiz can not be completed after the timer runs out.
if (timeleft < 0) {
clearInterval(x);
alert('Times Up!')
document.getElementById("timer").innerHTML = "";
document.getElementById('result').innerHTML="Your score is: 0";
document.getElementById("submitButton").disabled = true;
}
}, 1000);