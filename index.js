let options=["rock","paper","scissors"];

let tie=0, win=0 , lose=0;

function getComputerChoice() {
    Choice = options[Math.floor(Math.random()*options.length)]
    return Choice;
}

function Winner(playerSelection,computerSelection) {
    
    if(playerSelection =="rock" && computerSelection == "scissors"){
        return "Player";
    }
    if(playerSelection == "scissors" && computerSelection == "paper"){
        return "Player";
    }
    if(playerSelection == "paper" && computerSelection == "rock"){
        return "Player";
    }
    else if(computerSelection =="rock" && playerSelection == "scissors"){
        return "Computer";
    }
    else if(computerSelection == "scissors" && playerSelection == "paper"){
        return "Computer";
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        return "Computer";
    }
    else{ 
        return "Tie";
    }
}

function playRound(playerSelection,computerSelection) {
    const result = Winner(playerSelection,computerSelection);
    if(result == "Tie"){
        tie=tie+1;
        return `It is a Tie! [Win:${win} Lose:${lose} Tie:${tie}]`
    }
    else if(result == "Player"){
        win=win+1;
        return `You win , ${playerSelection} beats ${computerSelection} ! [Win:${win} Lose:${lose} Tie:${tie}]`
    }
    else{
        lose=lose+1;
        return `You lose , ${computerSelection} beats ${playerSelection} ! [Win:${win} Lose:${lose} Tie:${tie}]`

    }
    
}

function getPlayerChoice(){
    let validinput = false;
    while (validinput == false) {
        const choice = prompt("Enter choice!")

        if (choice == null){
            continue;
        }
        const lowerChoice = choice.toLowerCase();
        if (options.includes(lowerChoice)) {
            validinput =true;
            return lowerChoice;
        }
        
    }
}
function game(){
    console.log("Welcome!")
    console.log("Get Ready Human")
    for (let i = 0 ; i<5 ; i++){
        console.log(`Round ${i+1} Begins! `);
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();