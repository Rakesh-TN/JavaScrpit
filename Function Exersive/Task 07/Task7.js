let year = parseInt(prompt("Enter the Year "))
let month = parseInt(prompt("Enter the Month "))
function indDaysInMonth(){
    if (month<1 || month>12){
        console.log("Invaild Month")
    }
    else if (month==2){
        if(year%4==0){
            console.log("29 Days in a Month")    
        }
        else{
            console.log("28 Days in a Month")
        }
    }
    else if (month==4 || month==6 || month==9 || month==11 ) {
        console.log("30 Days in a Month")
    }
    else{
        console.log("31 Days in a Month")
    }
}
indDaysInMonth()