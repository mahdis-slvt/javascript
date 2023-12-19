function determineage(birthdate){
    const birthdatems=new Date(birthdate).getTime()
    const nowms=new Date().getTime()
    
    const calcute=24 * 60 * 60 * 1000 //ms
    const secondsbetween=(nowms - birthdatems)/calcute;
    const age=Math.floor(secondsbetween/365)
    console.log(age)

}
determineage("8/12/2000")