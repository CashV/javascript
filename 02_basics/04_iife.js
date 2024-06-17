//global scope ke pollution se problem hoti hai bahut baar toh uss problem ko hatane ke liye humne iife ka use kiya
//ye problem mainly function declaration ke time hoti hai

//Imediately Invoked Function Expressions (IIFE)

function database1(){
    console.log('new database');
}
//database1()

(function Database2(){              //named IIFE
    console.log('setting up database');
})();       //semicolon is very important for it, as it is stop execution for the flow of function calling otherwise it get also invoked next function immediatly after the first one. which give us error


(()=>{
    console.log('database is connected');
})();

((name)=>{                  //unnamed IIFE
    console.log(`database is connected, ready ${name}`);
})("vaibhaw");