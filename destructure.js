const data =[
    {
        identity:{
            name:"mahdis",
            lastName:"slvt",
            city:"hamedan",
            age:23
        },
    },
    {skills:["js", "react.js", "node.js"]}
]
let [arrIdentitiy, arrSkills]=data
let {identity:{name, lastName, city, age}}=arrIdentitiy
let {skills:[one, two, tree]}=arrSkills
// console.log(name)
// console.log(tree)
