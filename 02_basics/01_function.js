

function sayMyName(){
    console.log("v");
    console.log("a");
    console.log("i");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("w");
}

//sayMyName()

function addTwoNumber(number1,number2){
    //console.log(number1 + number2);
}

addTwoNumber(3,"4")
function addItemsOnCart1(...num){            //rest operator  '...'
    return num                             //this rest operator automatic takes multiple values and stores in the array
}

function addItemsOnCart2(val1,val2,...num){            //rest operator  '...'
    return num                             //this rest operator automatic takes multiple values and stores in the array
}
//console.log(addItemsOnCart2(200,500,400,200,250))        //this print all the values present inside the num
                                                        //val1 = 200, val2 = 500

const user = {
    username: "vaibhaw",
    price:"2cr"
}             
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}                     

handleObject(user)