const user = {
    userName: "vaibhaw_vaish",
    post: 45,
    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to instagram`);//for accesing current context we use this keyword for access data
        console.log(this);
    }                                                        //current context means object declaration body
}

// user.welcomeMessage()
// user.userName = "messi"
// user.welcomeMessage()

//console.log(this);      //yaha pe {} (empty object) print hoga but browser mein iss "this" ko bahar run karenge toh window print hoga
//window mera global object hai jo ki browser ke ander paya jaata hai

// function chai(){
//     let userName = "vaibhaw_vaish"
//     console.log(this.userName);     //yaha pe o/p hame undefine milega kyoki this sirf object ke ander use ho skta hai function ke ander nahi
// }
//chai();

const chai = function(){
    let userName = "vaibhaw_vaish"
    console.log(this.userName);  
}
//chai()

//+++++++++++++ARROW FUNCTION++++++++++++//
const coffee = () =>{
    let userName = "vaibhaw_vaish"
    console.log(this);          //NULL 
}
//coffee()

const addTwo = (num) => {           //method 1 for defineing arrow function
    return num + 2;
}
console.log(addTwo(10));

const addThree = (num) => (num + 3)     //method 2
console.log(addThree(10));

const addFour = (num) => num + 4        //method 3
console.log(addFour(10));

const addFive = (num) => ({userName: "vaibhaw_vaish"})     //method 2
console.log(addThree(10));

//method 2 and method 3 are implicit return type declaration of arrow function

