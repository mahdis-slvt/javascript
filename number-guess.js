const cpnumber=Math.ceil(Math.random()*100)
let guessnum=0;
// console.log(cpnumber)

const validatenumber=(value)=>{
    if(isNaN(value)){
        return "please enter a valid number";
    }else if(value<1 || value>100){
        return "please enter a number between 1 to 100";
    }
};
const check=(guess)=>{
    guessnum++;
    if(guess == cpnumber){
        console.log("your guess is correct")
    }else if(guess < cpnumber){
        console.log("too small");
        play();
    }else if(guess > cpnumber){
        console.log("too big") 
        play();
    }
}
const play=()=>{
    const usernumber=prompt("choose a number")

    if(usernumber === null) return;
    
    console.log(guessnum)
    if(guessnum>=10){
        console.log("game over");
        return;
    }
    const validation=validatenumber(usernumber)
    if(validation){
        console.log(validation);
        return play();
    }
    check(usernumber)
}
play()

