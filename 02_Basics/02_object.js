// 2. constructor
const twitterUser = new Object()
twitterUser.id = "2905"
twitterUser.name = "Tanu"
twitterUser.isLoggedin = false
// console.log(twitterUser);
twitterUser.regularUser = {
    tweets : 200,
    FullName : {
        Firstname : "Tanu",
        Lastname : "Yadav",
        Nickname :{
            one : "xyz",
            second : "abc"
        }
    },
    active : false 
}
// console.log(twitterUser.regularUser.FullName.Nickname.second);
const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = { 3 : "c" ,  4: "d"}
const obj3 = { 5 : "e" , 6 : "f"}

// const obj4 = {obj1,obj2,obj3}
// console.log(obj4);
const obj4 = Object.assign({}, obj1,obj2,obj3)
// console.log(obj4);
const obj5 = {...obj1, ...obj2,...obj3}
// console.log(obj5);
// assign and spread operator give same result

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "hii@gmail.com"
    },
    {
        id: 1,
        email: "hello@gmail.com"
    },
]

// console.log(users[2].email);
// console.log(Object.keys(twitterUser));       /*it give is array of keys */
// console.log(Object.values(twitterUser));
// console.log(twitterUser.hasOwnProperty('isLoggedin'));
// console.log(twitterUser.hasOwnProperty('gender'));

// Destructuring ...

const course = {
    coursename: "javascript",
    price : "999",
    courseinstructor : "deja vu"

}
const {courseinstructor: tutor} = course
// console.log(courseinstructor);
console.log(tutor);












