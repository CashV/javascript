const tinderUser = new Object() //this is singleton object
//const tinderUser = {}          //non singleton object
console.log(tinderUser);

tinderUser.id ="123abc"
tinderUser.name = "glichrist"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "adam@gmail.com",
    fullname: {
        userFullname:{
            firstName: "adam",
            lastName: "gilcrist"
        }
    }
}
console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1:"a", 2: "b"}
const obj2 = {10:"c", 4: "d"}
const obj3 = {5:"e", 6: "f"}

//const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3} 
console.log(obj4)

//data from database in the form of array of objects shown below

const users = [
    {
        id: "abc1",
        email: "adam@gpt.com"
    },
    {
    },
    {
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));