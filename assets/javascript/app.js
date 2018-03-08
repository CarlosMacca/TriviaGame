

//--------------------- VARIABLES -------------------

var timer = 18;
var timerInterval;
var userGuesses;
var questions = [
    "1. ", 
    "2." ,
    "3. ",
    "4. ",
    "5. ",
    "6. ",
    "7. ",
    "8. "
];

var answers = [
    ["a. ","b. ","c. ","d. "],
    ["a. ","b. ","c. ","d. "],
    ["a. ","b. ","c. ","d. "],
    ["a. ","b. ","c. ","d. "],
    ["a. ","b. ","c. ","d. "],
    ["a. ","b. ","c. ","d. "],
    ["a. ","b. ","c. ","d. "],
    ["a. ","b. ","c. ","d. "]
];


//--------------------- Q. ANSWERS -------------------
var correctAnswer= [
    "b. ",
    "b. ",
    "c. ",
    "c. ",
    "a. ",
    "b. ",
    "d. ",
    "a. "
];


 var questionCounter = 0; 
 var wins = 0;
 var loses = 0;  
 var unanswer = 0;





//--------------------- MAIN TIMER -------------------

function time(){

   timerInterval = setInterval(time2,1000); 

 function time2(){

if(timer> 0){
timer--; 
  }

if(timer===0){
timeUp();
clearInterval(timerInterval);
    }
$("#timerDiv").text("Time Remaining: "+ timer+" Seconds");
 }
}

//--------------------- FUNCTIONS ON CLICK -------------------

$("#start").on("click",function(){

  $("#start").empty();
 time();
 questions();
 

 });

 //--------------------- RESET GAME -------------------

 reset: function(){
    wins = 0;
    losses = 0;
  },


