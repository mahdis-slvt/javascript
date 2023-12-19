function findletters(letter,str){
    
    str= str.toLowerCase()
    letter= letter.toLowerCase()
    const straaray=str.split(" ")
    let x=0;

    for(let i of straaray){
        // console.log(i)
        if(i === letter){
            x++;
        }
    }
    return x;
}
const count=findletters("mahdis","hello Mahdis , heare is mahdis account")
console.log(`count of letter is ${count}`)