var readLineSync = require("readline-sync")
log = console.log
var chalk = require("chalk")

var score = 0
var name=chalk.green.bold
var quesc =chalk.red.bold
var ansc = chalk.yellowBright.bold
var answ =  chalk.blueBright.bold
var inst = chalk.cyan.bold



var leaderboard = [
  {
    Name: "John",
    Score: 20
  },
  {
    Name: "Fudge",
    Score: 18
  },
  {
    Name: "Michael",
    Score: 16
  },
  {
    Name: "fernandase",
    Score: 14
  },
  {
    Name: "punk",
    Score: 12
  }
]

var questions = [
  {
    question:" who is known as the God of Cricket _______",
    ans:3,
    options:["M.S.Dhoni","Virat Kohli","Sachin Tendulkar","Kapil Dev"]
  },
  {
    question:"who has won medals in various badminton tournaments including a gold at the 2019 World Championships ________",
    ans:2,
    options:["Sakshi Malik","P.V.Sindhu","Saina Nehwal","P.T.Usha"]
  },
  {
    question:"What does the Olympic Flame symbolize?",
    ans:3,
    options:["zeal to play sports","Challenge","Continuity","Integrity"]
  },
  {
    question:"Who among the following is the first Indian to score a century in Indian Premier League (IPL)?",
    ans:2,
    options:["Gautam Gambhir"," Manish Pandey","Sachin","Rahul Dravid"]
  },
  {
    question:" Who among the following Cricketer was the winner of Orange Cap in the Indian Premier League (IPL) 2020?",
    ans:3,
    options:["Virat Kohli","Rohit Sharma"," K L Rahul"," Kieron Pollard"]
  },
  {
    question:"Who won the first T20 World Cup?",
    ans:3,
    options:["Sri Lanka","USA","India","Canada"]

  },
  {
    question:"Which country has won the Cricket World Cup three times in a row?",
    ans:4,
    options:["South Aftrica","India","England","Australia"]
  },
  {
    question:"How many times has India won the ICC World Cup? ",
    ans:1,
    options:["2","1","4","3"]
  },
  {
    question:"Who is known as the Flying Sikh of India?",
    ans:2,
    options:["Usain Bolt","Milkha Singh","Sandeep Singh","Navjot Singh"]
  },
  {
    question:"Name the woman who is the first Indian to win a medal in Badminton at the Olympics ________",
    ans:3,
    options:["P.V.Singhu","P.T.Usha","Saina Nehwal","Sania Mirza"]
  },
  {
    question:" Who among the following cricketer won the Purple Cap in the Indian Premier League (IPL) 2020?",
    ans:2,
    options:["Ravichandran Ashwin","Kagiso Rabada","Jasprit Bumrah","Mohammed Shami"]
  },
  {
    question:"The term “Tee” is used commonly in which among the following sports? ",
    ans:3,
    options:["Tennis","Polo","Golf","Racing"]
  },
  {
    question:"Euro Cup is related to which sports?" ,
    ans:2,
    options:["Badminton","Football","Table Tennis","Hockey"]
  },
  {
    question:"What is the duration of a Test Match? ",
    ans:4,
    options:["3 days","4 days","1 day","5 days"]
  },
  {
    question:"On which of the following positions is the Umpire supposed to be present?" ,
    ans:1,
    options:[" Square Leg","Mid-off","Mid-on","Fine leg"]
  },
]

function play(ques,ans){
    log(quesc(ques[i].question))
  var userans = readLineSync.keyInSelect(ques[i].options,"CHOOSE:")
  if (userans+1 === ques[i].ans){
   log(ansc("Wow! You answer is right."))
   score += 2
  }
  else
  {
    log(answ("Oops! Your answer is wrong"))
    
  }
}

var username = readLineSync.question("Enter your name : ")
log(name("Hi! "+chalk.bgRed(username)+ " Welcome to sports quiz "))
log(quesc("--------------------"))
log(quesc("Welcome to level 01"))
log(quesc("--------------------"))
log(inst("Score more than 5 points to enter level 02"))

var ready = readLineSync.keyInYNStrict("If you are ready press y :")
for(i=0;i<5;i++){
    play(questions,questions[i].ans)
    log("Your current score is :", score)
}
if (score >5){
  log(quesc("------------------------------------"))
  log(name("Hurray! You are entered into level 2"))
  log(quesc("------------------------------------"))
  log(inst("Now Score more than 10 points to enter level 3"))
  var ready = readLineSync.keyInYNStrict("If you are ready press y :")
  for(i=5;i<10;i++){
    play(questions,questions[i].ans)
    log("Your current score is :",score)
}
}
if(score >11){
  log(quesc("----------------------------------"))
  log(name("Congrats! You are entered into level 3"))
  log(quesc("----------------------------------"))
  var ready = readLineSync.keyInYNStrict("If you are ready press y :")
  for(i=10;i<15;i++){
    play(questions,questions[i].ans)
    log("Your current score is :",score)
}

}
for (i=0;i<leaderboard.length;i++){
  if(score>leaderboard[i].Score){
    log(answ("Wow! you have beaten the highscore"))
    log(answ("Send me a screenshot so that I can update the leaderboard"))
    break;
  }
}
log("Thank you for spending your time!")

