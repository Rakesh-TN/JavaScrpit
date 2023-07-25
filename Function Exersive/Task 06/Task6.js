let mark = parseInt(prompt("Enter You Mark "))
function findGrade(){
    if (mark<=100 && mark>=91){
        console.log("S Grade")
    }
    else if (mark<=90 && mark>=81){
        console.log("A Grade")
    }
    else if (mark<=80 && mark>=71){
        console.log("B Grade")
    }
    else if (mark<=70 && mark>=61){
        console.log("C Grade")
    }
    else if (mark<=60 && mark>=51){
        console.log("D Grade")
    }
    else if (mark<=50 && mark>=40){
        console.log("E Grade")
    }
    else if (mark<=39 && mark>=1){
        console.log("Unfortunately you are Failed")
    }
    else{
        console.log("Invaild Number")
    }
}
findGrade()