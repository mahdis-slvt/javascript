const choices = ["rock", "paper", "scissors"];

const userChoise=prompt("please enter rock,paper or scissors");
console.log(userChoise);
if(userChoise){
    console.log(`you chose ${userChoise}`)
}else{
    console.log(`you cheated`)
}

const computerChoice=choices[Math.floor(Math.random()*3)];
console.log(`computer chose ${computerChoice}`);

if(userChoise == computerChoice){
    console.log(`you are equal!`)
}else if( userChoise == "rock"){
    if(computerChoice == "paper"){
        console.log("you loose");
    }else{
        console.log("you wone");
    }
}else if( userChoise == "paper"){
    if(computerChoice == "scissors"){
        console.log("you loose");
    }else{
        console.log("you wone");
    }
}else if( userChoise == "scissors"){
    if(computerChoice == "rock"){
        console.log("you loose");
    }else{
        console.log("you wone");
    }
}
