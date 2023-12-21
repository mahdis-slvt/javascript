const choices = ["rock", "paper", "scissors"];

const checkWinner = (player , computer) => {
    if(player == computer){
        console.log(`you are equal!`)
    }else if( player == "rock"){
        if(computer == "paper"){
            console.log("you loose");
        }else{
            console.log("you wone");
        }
    }else if( player == "paper"){
        if(computer == "scissors"){
            console.log("you loose");
        }else{
            console.log("you wone");
        }
    }else if( player == "scissors"){
        if(computer == "rock"){
            console.log("you loose");
        }else{
            console.log("you wone");
        }
    }
}

const play= () => {
    const userChoise=prompt("please enter rock,paper or scissors");
    if(userChoise){
        console.log(`you chose ${userChoise}`)
    }else{
        console.log(`you cheated`)
    }

    const computerChoice=choices[Math.floor(Math.random()*3)];
    console.log(`computer chose ${computerChoice}`);

    const result=checkWinner(userChoise, computerChoice)
}
play()

