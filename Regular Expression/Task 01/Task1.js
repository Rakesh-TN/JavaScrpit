let name=(prompt("Enter the name"))
let RegEx=/^([A-Z]{1})([\w]{5})([\W]{1})([0-9]{0,4})$/
if (name.test(RegEx)){
    console.log("Successfully")
}
else{
    console.log("Invaild User Id")
}