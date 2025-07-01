let userscore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if(userchoice === compChoice) {
        console.log("its a tie");
        msg.innerText = `Game was draw. Try again!`;
        msg.style.backgroundColor = "darkgreen";
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compChoice);
    }
}

const showWinner = (userwin, userchoice, compChoice) => {
    if(userwin) {
        userscore++;
        userScore.innerText = userscore;
        msg.innerText = `YOU WIN! Your choice ${userchoice} beats computer's choice ${compChoice}`;
        console.log("YOU win!!!");
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScore.innerText = computerScore;
        msg.innerText = `YOU LOSE! Computer's choice ${compChoice} beats your choice ${userchoice}`;
        console.log("YOU lose!!!");
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});