
//{}        scope
//agar ye {} object ke sath aata hai toh hm isko object declaration bolte hai na ki scope
// {} ko scope ham if-else statement ya function declaration ke sath use krte hai
var c = 300
//let a = 300
if(true){
    let a = 10      
    const b = 20
    var c = 30
}


//console.log(a);           // this print global let a declaration variable
//console.log(b);
//console.log(c);         // this print the inside var declaration variable

//NOTE:- global scope is different in both web browser environment and vsCode environment

//nested scope
function one(){
    const username = "vaibhaw"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    two()
}
//one()
//  ++++++++++++++interesting++++++++++++++//

console.log(addOne(5))                  //this addOne() will be called from anywhere and dosenot gives me error
function addOne(num){                   //this type of syntax is for function only
    return num +1                                 
}

console.log(addTwo(5));                 //this gives me error and we always called expression after intiallization
const addTwo = function(num){           //Hoisting
    return num + 2                      //this type of syntax also called as expression
}

