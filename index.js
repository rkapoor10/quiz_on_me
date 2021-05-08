
console.log("Hi! My name is Ritik.")


readlineSync = require("readline-sync");
var user = readlineSync.question("What's your Name ? ");
console.log("Hi!"+user);
console.log("NOTE: Please use ALL CAPS in your answer wherever required")



var score = 0
function qna(question,answer){
  var userInput = readlineSync.question(question);


  if(userInput === answer){
  score = score + 1
  console.log("You are right! score : "+score)
  }
  else{
    console.log("You are wrong. score : "+score)
    console.log("The Correct Answer is : "+answer)
  }

}


var qone = {
  q : "How old am I ?",
  a : "21"
}
var qtwo = {
  q : "Where do I go to college(short form)?  ",
  a : "JEC"
}
var qthree = {
  q : "What is my branch(short form) ? ",
  a : "CSE"
}
var qfour = {
  q : "What is the name of my favourite anime ? ",
  a : "NARUTO SHIPPUDEN"
}
var qfive = {
  q : "Which is my favourite sport ? ",
  a : "CHESS"
}
questionsList = [qone,qtwo,qthree,qfour,qfive]

for(var i=0 ; i<questionsList.length ; i++)
{
    qna(questionsList[i].q,questionsList[i].a)
}

console.log("Thanks! for taking this QUIZ. Hope to see you soon.")
