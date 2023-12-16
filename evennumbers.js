const numbers=[12,15,16,18,23,25,26,31,36]
const evenNums=[]

for(let i of numbers){
    if(i%2==0){
        evenNums.push(i)
    }
}
console.log(evenNums)