let a = parseInt(prompt("Enter the value A "))
let b = parseInt(prompt("Enter the value B "))
let num = prompt("Operation ")
function calculator(){
    if (num=="+"){
        console.log(a+b)
    }
    else if(num=="-"){
        console.log(a-b)
    }
    else if(num=="*"){
        console.log(a*b)
    }
    else if(num=="/"){
        console.log(a/b)
    }
    else if(num=="%"){
        console.log(a%b)
    }
    else{
        console.log("Invaild Information")
    }
}
calculator()