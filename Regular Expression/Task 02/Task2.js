let name=prompt("Enter the name :")
let RegEx=/^([\w]{0,6})([\W]{1})([0-9]{0,5})/i
if (name.match(RegEx)){
    console.log("Login Successfully")
}
else{
    console.log("Invaild Password")
}