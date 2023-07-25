let num1 = prompt("Enter the value A")
let num2 = prompt("Enter the value B")
let num3 = prompt("Enter the value C")
if (num1==num2 && num2==num3 && num3==num1){
    console.log("Equilateral triangle")
}
else if (num1==num2 || num2==num3){
    console.log("Isosceles triangle")
}
else{
    console.log("Scalene triangle")
}