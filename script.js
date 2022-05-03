//declaring the necessary variables
let userInput = "" ; 
let userScore = 0;
let computerScore = 0 ;
//creating a function that prompts users to give input
function getUserInput(){
 userInput = prompt("common...show me What you've got.... what do you wanna play:" );
}

// creating a function that randomly picks either rock paper or scissor
/*Math.random method usually generates a random number between 0 and 1.
so to make it pick a number between two given numbers we want, we should use "math.random*(max-min) + min" and then round the value off,
here we are generating a random number between 0 and 2 so (math.random*2 + 0)*/  

function computerInput(){
    const inputCase = ['rock', 'paper', 'scissor']
    return inputCase[Math.round(Math.random() * (2))] 

}
/*here this is the actual logic of the game, this function takes userinput and compares it with computer's random choice and using a switch case we 
return the result of the game  and also whenever someone gets a point we increment their score*/ 
function play(userInput){
    let result = "" 
    if(userInput == "rock"){
        switch(computerInput()){
        case "rock" :
            return result = "womp womp... it's a tie nobody got a point"
            break;
        case "paper" :
            computerScore++ ;
            return result ="paper beats rock and you lost this"
            break;
        case "scissor" :
            userScore++;
            return result = "rock beats scissor my friend... and you got a point"
            break;
        }


}   
if(userInput == "paper"){
        switch(computerInput()){
        case "rock" :
            userScore++ ;
            return result = "paper beats rock my friend... and you got a point"
            break;
        case "paper" :

            return result = "womp womp... it's a tie nobody got a point"
            break;
        case "scissor" :
            computerScore++;
            return result = "scissor cuts paper and you lost this round"
            break;
        }


}
if(userInput == "scissor"){
        switch(computerInput()){
        case "rock" :
            computerScore++;
            return result = "rock beats scissors and you lost this point"
            break;
        case "paper" :
            userScore++;
            return result = "scissors cut the paper down champion.. you've got a point"
            break;
        case "scissor" :
            return result = "womp womp... it's a tie nobody got a point"
            break;
        }


} 
}
/*in this function we are looping the code 5 times and at the end we are displaying who won the game*/
function game(){
for(let i = 0 ; i<5 ; i++){
    getUserInput()
    alert(play(userInput))
}

if(userScore == computerScore){
    alert("the game is a tie")
}
if(userScore > computerScore){
    alert("you won this game")
}
if(userScore < computerScore){
    alert("you lost this game")
}

}
game() //game callback