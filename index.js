let options=["rock","paper","scissors"];
const container =document.querySelector(".container")
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const outcomeDiv = document.querySelector(".outcome")
const score = document.querySelector(".score")
const runningScore = document.querySelector(".runningScore")

// keeping score
let tie=0, win=0 , lose=0;


const t = document.createElement("h2")
t.innerText = `Tie: ${tie}`
runningScore.appendChild(t)

const w = document.createElement("h2")
w.innerText = `Win: ${win}`
runningScore.appendChild(w)

const l = document.createElement("h2")
l.innerText = `Lose: ${lose}`
runningScore.appendChild(l)


function getComputerChoice() {
    Choice = options[Math.floor(Math.random()*options.length)]
    return Choice;
}

// checking winner of 1 round
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

// 1 round
function playRound(playerSelection,computerSelection) {
    const result = Winner(playerSelection,computerSelection);
    if(result == "Tie"){
        tie=tie+1;
        const p = document.createElement("p")
        t.textContent=`Tie:`+tie;
        p.innerText = `It is a Tie both picked ${playerSelection}`
        outcomeDiv.appendChild(p)
    }
    else if(result == "Player"){
        win=win+1;
        const p = document.createElement("p")
        w.textContent=`Win:`+win;
        p.innerText = `You win , ${playerSelection} beats ${computerSelection}`
        outcomeDiv.appendChild(p)
    }
    else{
        lose=lose+1;
        l.textContent=`Lose:`+lose;
        const p = document.createElement("p")
        p.innerText =  `You lose , ${computerSelection} beats ${playerSelection}`
        outcomeDiv.appendChild(p)
    }
}

//buttons
rockButton.addEventListener("click",()=>{
    const computerSelection = getComputerChoice()
    const playerSelection = "rock"
    playRound(playerSelection,computerSelection)
    checkWinner(win,lose)
    
})

scissorsButton.addEventListener("click",()=>{
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors"
    playRound(playerSelection,computerSelection)
    checkWinner(win,lose)
})

paperButton.addEventListener("click",()=>{
    const computerSelection = getComputerChoice()
    const playerSelection = "paper"
    playRound(playerSelection,computerSelection)
    checkWinner(win,lose)
})

// winner of 5 rounds
const checkWinner=(win,lose) =>{
    if(win === 5 ){
        const h1= document.createElement("h1")
        h1.innerText="You win!"
        score.appendChild(h1)
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        tryAgain();

    }
    if(lose === 5){
        const h1= document.createElement("h1")
        h1.innerText="You lose!"
        score.appendChild(h1)
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        tryAgain();
    }
    if (tie === 5){
        const h1= document.createElement("h1")
        h1.innerText="Tied!"
        score.appendChild(h1)
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        tryAgain();
    }
}

// try again / restart button
function tryAgain() {
        const playAgain = document.createElement("button")
        playAgain.innerText = "Play again ?"
        container.appendChild(playAgain)
        playAgain.addEventListener("click",()=>{
            location.reload();
        })
}

