// ways to install apis in js
// the most common way is to npm library called node-fetch
const fetch = require("node-fetch");
let username = "octocat"
// let url = `https://api.github.com/users/${username}`
// let result = fetch(url).then((resp)=> console.log(resp))
//.then is used for promise
function getUserInfo(username) {
    // the above defining a function to get a json data
    let url = `https://api.github.com/users/${username}`
    return fetch(url)
        .then((resp) => resp.json())
    //it is called a then methoid which is used to convert the file into json file
    // .then((data) => console.log(data))
    // jason method to get the api request

}
// the below is function how to get followings in jason data
function getFollowings(username) {
    let url = `https://api.github.com/users/${username}/following`
    return fetch(url)
        .then((resp) => resp.json())
}
// the below is function how to get repositries in jason data
function getRepos(username) {
    let url = `https://api.github.com/users/${username}/repos`
    return fetch(url)
        .then((resp) => resp.json())
}
// combing all together
function getfollowedRepositories(username) {
    getUserInfo("octocat")
        .then((user) => {
            console.log(`the user $(username) is following $(user.following) users`)
            return getFollowings(username)
        }).then((followings) => {
            // console.log("Followings:", followings)
            return followings.map(user => user.login)
            //the above syntax is used to return one by one call the function and return a new array that contains user.login information
            //map is used to loop through an array
        }).then((usernames)=>{
            console.log("Usernames:" , usernames)
           return Promise.all (usernames.map(username =>{
                 return getRepos(username)
            }))
        }).then(repos =>{
            let flattenedRepos = repos.flat()
            //it ise used to put the result at the top level
            let repoNames=flattenedRepos.map(repo => repo.full_name)
            // console.log("repos",repos.length)
            console.log("total number of repos",repoNames.length)
            console.log("sample repos",repoNames.slice(0,4))
        })
}
getfollowedRepositories("octocat")
// getUserInfo("octocat")
// .then((data) => console.log(data[0]))
