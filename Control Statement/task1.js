let a = 3
let b = -7
let c = 2

if (a < 0 && b > 0 && c < 0){
    console.log("+")
}
else if (a > 0 && b < 0 && c > 0){
    console.log("-")
}
else if (a + 0 && b + 0 && c + 0){
    console.log("*")
}
else if (a - 0 && b - 0 && c - 0){
    console.log("/")
}
else {
    console.log("^")
}