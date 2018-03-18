var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "How many propellers does a quadcopter have?",
  answers: ["3", "4", "5", "6"],
  correctAnswer: "4"
}, {
  question: "How many propellers does a hexacopter have?",
  answers: ["3", "4", "5", "6"],
  correctAnswer: "6"
}, {
  question: "What are RTF drones?",
  answers: ["hobbyist drones", "military drones", "commercial drones", "huh?"],
  correctAnswer: "hobbyist drones"
}, {
  question: "In what year did the United States first deploy an armed drone?",
  answers: ["1990", "1999", "2001", "2004"],
  correctAnswer: "2001"
}, {
  question: "In 2014, entrepreneurs in Minnesota were grounded by the Federal Aviation Administration (FAA) after using drones to deliver what product to fishermen at a local lake?",
  answers: ["beer", "cheese", "worms", "drones"],
  correctAnswer: "beer"
}, {
  question: "True or false: Drones are banned at U.S. national parks.",
  answers: ["true", "false"],
  correctAnswer: "true"
}, {
  question: "As of 2016, the FAA limits consumer drones to what maximum altitude?",
  answers: ["100 ft", "200 ft", "400 ft", "1000 ft"],
  correctAnswer: "400 ft"
}, {
  question: "Before 2016, the FAA limited drones to what maximum altitude?",
  answers: ["50 ft", "100 ft", "200 ft", "700 ft"],
  correctAnswer: "200 ft"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 118,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
