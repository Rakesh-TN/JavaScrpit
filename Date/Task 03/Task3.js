mouth = ["Jaunary","February","March","April", "May","June","July","August","September","October","November","December",]
let a = parseInt(prompt("Enter the Month"))
let day = new Date(0,a)
let d = day.getMonth()
d-=1
console.log(mouth[d])