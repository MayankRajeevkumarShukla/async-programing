// promise in javascript
console.log("start")
function longOperation(waitMS=2000){
    console.log("longOperation started")
   return new Promise((resolve, reject) => {

        setTimeout(() =>{
            console.log("longOperation finished")
            reject(100);
        }, waitMS)
    })
}
let resultPromise=longOperation();
console.log(resultPromise)
resultPromise.then(function(result){
    console.log("result:",result)
    return result *2;
}).then(function(result2){
    console.log("result2:",result2)
}).catch(function(error){
    console.error("something happend", error)
}).finally(function(res){
    console.log("finally",res)
    //code clean up
})
console.log("end")
// short hand for async function
// let fn =(result, resolve,reject,..) => {
//     console.log("result:",result)
//     return result *2;
// }