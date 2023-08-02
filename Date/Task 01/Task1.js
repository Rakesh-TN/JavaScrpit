let date = new Date()

function result(){
    let d = date.getDate();
    let m = date.getMonth()+1;
    let y = date.getFullYear();
    let value = d+"-"+m+"-"+y;
    console.log(value)
    let value1 = d+"*"+m+"*"+y;
    console.log(value1)
}
result();