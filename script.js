time = 0;
limit = 5 * 60; // 10 minutes converted to seconds

function final() {
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

  if (question1 == "C") {
    score++;
  }
  if (question2 == "D") {
    score++;
  }
  if (question3 == "A") {
    score++;
  }
  if (question4 == "B") {
    score++;
  }
  if (q5a == true && q5d == true && q5e == true) {
    score++;
  }
  if (q6c == true && q6e == true && q6f == true) {
    score++;
  }
  if (question7 == "C") {
    score++;
  }
  if (question8 == "D") {
    score++;
  }
  if (q9a == true && q9b == true && q9d == true) {
    score++;
  }
  if (q10b == true && q10c == true && q10d == true) {
    score++;
  }
  if (q11a == true && q11b == true && q11d == true) {
    score++;
  }
  if (question12 == "A") {
    score++;
  }
  if (q13a == true && q13c == true && q13e == true) {
    score++;
  }
  if (question14 == "B") {
    score++;
  }
  if (question15 == "C") {
    score++;
  }

  var percent = Math.floor((score / 15) * 100);
  return percent;
}

function grade() {
  var result = final();
  document.getElementById("result").innerHTML =
    "Your score is:" + parseInt(result);
  limit = 0;
}

function startTimer() {
  setInterval(() => {
    if (time < limit) {
      if (time == limit / 2) {
        console.log("half over");
      }
      time++;
      var left = limit - time;

      const minutes_left = Math.floor(left / 60);
      const seconds_left = left - minutes_left * 60;
      document.getElementById("timer").innerHTML =
        minutes_left + " min " + seconds_left + "s";
    } else {
      var grade = final();
      console.log(grade);
      alert("Times Up! Grade: " + grade + "%");
    }
  }, 1000);
}
