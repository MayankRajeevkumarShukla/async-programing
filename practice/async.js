// call back function in js
console.log("start")
function longOperation(waitMs = 2000){
    console.log("longOperation started")
    setTimeout(function(){
        console.log("longOperation ended")

    }, waitMs)


}

longOperation(0)
console.log("end")

