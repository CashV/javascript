//singleton
//koi bhi constructor hum isse banate hai toh ek hi objects bnta hai means singleton.
//agar ham literal ki tarah declare krte hai toh singleton nahi bnega
const mysym = Symbol("key1")
const JsUser = {    // literal method
    name: "Vaibhaw",
    age: 18,
    [mysym]: "mykey1", // acces by using symbol
    location: "allahabad",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","friday"]
} 
//Object.create // constructor method for declaring object

//two method to acces object

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym])

JsUser.email = "cashvaish@gpt.com"
//Object.freeze(JsUser)
JsUser.email = "cashvaish@chatgpt.com"
 //console.log(JsUser);

JsUser.greeting = function(){
    console.log(JsUser.greeting());
}