console.log("start")
function longOperation(waitMs=2000){
    console.log("longOperation start")
    let  waitUntil = new Date(new Date().getTime() + waitMs);
    while(new Date() < waitUntil){
        // do nothing
    }
    console.log("longOperation end")
}
longOperation(5000)
// let result = 3 + 8
// console.log("Result",result)


console.log("end")

