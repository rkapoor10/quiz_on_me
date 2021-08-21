readlineSync = require("readline-sync");
const chalk = require("chalk");


console.log(chalk.yellowBright("Hi! My name is Ritik."));



var user = readlineSync.question("What's your Name ? ");
console.log("\n")
console.log("Hi",chalk.redBright(user)+"!");
if(user==="Ritik"||user==="ritik"){
  console.log("😂 Oh WOW!! same name same pinch 😂")
}
console.log("Welcome to the Quiz");
console.log(chalk.redBright("RULES:"), "Enter the option number")
console.log("\n")





 var score = 0;
function displayQuestion(que,opt){
  console.log(que)
  for(var i=0;i<opt.length;i++){
    console.log(chalk.blueBright(i+1),opt[i])
  }
}

function checkScore(s){
  if(s===5){
    console.log(chalk.bgYellowBright("Yaay!!"),"you have been stalking me, just joking ;)");
    console.log("Send Me a Screenshot to add your name to the Leader Board");
  }
  else if(s<5&&s>=3){
    console.log(chalk.bgYellowBright("Yaay!!"),"you made it!!");
    console.log("Send Me a Screenshot to add your name to the Leader Board");
  }
}

function qna(question,options,answer){
  
    displayQuestion(question,options)
    // var userInput = readlineSync.keyInSelect(options,question);
  var userInput = readlineSync.keyIn("Your Answer: ");


  if(Number(userInput) === answer){
  score = score + 1
  console.log("You are",chalk.bgGreenBright("right")+"!"," score : "+score)
  }
  else{
    console.log("You are",chalk.bgRedBright("wrong")+"!"," score : "+score)
    console.log("The Correct Answer is : "+chalk.yellowBright(options[answer-1]))
  }
  console.log("\n")

}


var qone = {
  q : "How old am I ?",
  op : ["19","20","21","22"],
  a : 3
}
var qtwo = {
  q : "Where do I go to college(short form)?  ",
  op : ["JEC","DAVV","MIT","ISB"],
  a : 1
}
var qthree = {
  q : "Which is my branch ? ",
  op : ["CSE","Civil","ECE","Mechanical"],
  a : 1
}
var qfour = {
  q : "What is the name of my favourite anime ? ",
  op : ["Black Clover","Naruto","Haikyuu","MHA"],
  a : 2
}
var qfive = {
  q : "Which is my favourite sport ? ",
  op : ["Cricket","Badminton","Chess","Basketball"],
  a : 3
}
questionsList = [qone,qtwo,qthree,qfour,qfive]

for(var i=0 ; i<questionsList.length ; i++)
{
    qna(questionsList[i].q,questionsList[i].op,questionsList[i].a)
    
}
checkScore(score);

var leaderBoard=[
  {name:"Vidhi",scr:5},
  {name:"Vihan",scr:4},
  {name:"Rohit",scr:3}
  ]

console.log("-----------------------------")
console.log(chalk.bgBlueBright("LEADER BOARD"));
console.log("-----------------------------")
for(var i=0; i<leaderBoard.length;i++){
  
  console.log(leaderBoard[i].name,leaderBoard[i].scr)
}
console.log("\n")
console.log("Thanks! for taking this QUIZ. Hope to see you soon.")
