function getComputerChoice(){
    let randomvalue= Math.ceil(Math.random() * 3);
    console.log("Computer: ")
    switch (randomvalue) {
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
    return randomvalue;
    console.log(" ")
}

function getUserChoice(){

    let UsersMoveStr=prompt("Whats uhr move?");
    UsersMoveStr=UsersMoveStr.toUpperCase();
    let UsersMoveValue=1;

    console.log("User: ");

    switch (UsersMoveStr) {
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
    return UsersMoveValue;
}

function getWinner(UsersChoice, ComputersChoice){

    
}
getUserChoice();
