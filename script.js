function getComputerChoice(){

    let randomvalue= Math.ceil(Math.random() * 3); //Get Random Value between 1-3 
    console.log("Computer: ")
    switch (randomvalue) {  // turn Random Value into Rock Paper or Scissors
        case 1:
            console.log("Scissors!")
            break;
    
        case 2:
            console.log("Rock!")
            break;

        default:
            console.log("Paper!")
            break;
    }
    console.log(" ");
    return randomvalue; 
    
}

function getUserChoice(){

    let UsersMoveStr=prompt("Whats uhr move?"); //User Input
    UsersMoveStr=UsersMoveStr.toUpperCase();  //User input into Uppercase 
    let UsersMoveValue=1;                     //User text Input as a number

    console.log("User: ");

    switch (UsersMoveStr) { //Turn User tex Input to a Number and display the text
        case "SCISSORS":
            console.log("Scissors!")
            UsersMoveValue=1;
        break;
    
        case "ROCK":
            console.log("Rock!")
            UsersMoveValue=2;
            break;

        default:
            console.log("Paper!")
            UsersMoveValue=3;
            break;
    }
    console.log(" ");
    return UsersMoveValue;
}

function playRound(UsersChoice, ComputersChoice){
roundResult=1;
/*
Result 
1=user wins
2= computer Wins
3= Draw
/*

1=Scissors
2=Rock
3=Paper

Scissors beats Paper (1 beats 3)
Rock beats Scissors (2 beats 1)
Paper beats Rock (3 beats 2)

if user got 1 
he wins if computer got 3
he loses if computer got 2
he draws if computer got 1

if user got 2
he wins if computer got 1
he loses if computer got 3
he draws if computer got 2

if user got 3
he wins if computer got 2
he loses if computer got 1
he draws if computer got 3
*/

switch (UsersChoice) {
    case 1:
        switch (ComputersChoice) {
            case 1:
                roundResult=3;
                break;
            case 2:              
                roundResult=2;
                break;
        
            default:                
                roundResult=1;
                break;
        }
        break;
    case 2:
    switch (ComputersChoice) {
        case 1:
            roundResult=1;
            break;
        case 2:

            roundResult=3;
            break;
    
        default:

            roundResult=2;
            break;
    }
        break;

    default:
        switch (ComputersChoice) {
            case 1:

                roundResult=2;
                break;
            case 2:

                roundResult=1;
                break;
        
            default:
                roundResult=3;
                break;
        }
        break;

       
        
    }
    console.log("----------------------------")
    return roundResult;
}

function game(){
    let userwins=0;
    let computerwins=0;
    let draws=0;
    for (let i = 0; i < 5; i++) {
        roundResult=playRound(getUserChoice(),getComputerChoice());
   
        switch (roundResult) {
            case 1:
                console.log("User Wins!");
                userwins++;
                break;
            case 2:
                console.log("Computer Wins!");
                computerwins++;
                break;
            default:
                console.log("Draw!");
                draws++;
                break;
        }      
    }
    console.log(`${userwins}, ${computerwins}`)
    if(userwins>computerwins) {
        console.log(`User Wins with ${userwins}`);
        
    }
    else if(userwins<computerwins){
        console.log(`Computer Wins with ${computerwins}`);
    }
    else{
        console.log(`Draw`);
    }
}
game();
