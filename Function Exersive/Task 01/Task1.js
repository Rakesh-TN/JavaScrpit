let num1 = parseInt(prompt("Enter the value 01"))
let num2 = parseInt(prompt("Enter the value 02"))
let num3 = parseInt(prompt("Enter the value 03"))
if (num1>num2 && num1>num3){
    console.log(num1,"is Greater than",num2,"and",num3)
}
else if (num2>num1 && num2>num3){
    console.log(num1,"is Greater than",num2,"and",num3)
}
else{
    console.log(num3,"is Greater than",num1,"and",num2)
}