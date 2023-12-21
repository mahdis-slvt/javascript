function generaterandom(min , max){
    if(!max && !min){
        console.log("Enter numbers")
        return 0;
    }
    if(!max){
        max = min;
        min = 0;
    }
    const num=min + Math.floor(Math.random() * (max - min + 1))
    console.log(num)
}

//when we have two numbers
generaterandom(20,25)
//when no number added
generaterandom()
//when one number added
generaterandom(100)
