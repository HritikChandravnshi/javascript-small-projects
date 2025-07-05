let yourScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
    
};

const drawGame=()=>{
    console.log("It was a draw.");
    msg.innerText="It was a Draw! Play again.";
    msg.style.backgroundColor="black";


};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        yourScore++;
        userScorePara.innerText=yourScore;
    }
    else{

        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;

    }
    
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    }
    else {

        let userWin = true;
        if (userChoice === "rock") {
            // paper , scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock,scissor
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            //paper,rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})


