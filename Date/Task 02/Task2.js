let year=parseInt(prompt("Enter the year : "));
let month=parseInt(prompt("Enter the month : "));
        
let days=(a,b)=>{
    let name=new Date(a,b,0).getDate();
    console.log("This month has ",name,"days");
}
    days(year,month)