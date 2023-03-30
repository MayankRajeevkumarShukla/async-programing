// call back function in js
console.log("start")
function longOperation(waitMs = 2000){
    console.log("longOperation started")
    setTimeout(function(){
        console.log("longOperation ended")
        setTimeout(function(){
            console.log("longOperation2 ended")
            setTimeout(function(){
                console.log("longOperation3 ended")
                setTimeout(function(){
                    console.log("longOperation4 ended")
            
                }, 200)
            }, 200)
        }, 200)
    }, waitMs)


}

longOperation(200 )
console.log("end")

