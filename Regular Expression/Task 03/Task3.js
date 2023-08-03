let name=prompt("Enter the Your Phone Number : ")
let RegEx=/([6-9]{1})([0-9]{9}$)/
if (name.match(RegEx)){
    console.log("-")
}
else{
    console.log("Invaild Phone Number")
}