//falsey value
//false, 0, -0, BinInt 0n, "", null, undefined,Nan;

//truthy value
//true, "0",'false', " ", [], {}, function(){};

//Nullish Coalescing Operator (??): null undefined

let val1
val1 = 5 ?? 10
val1 = null ?? 10
val1 = null ?? 5 ?? 10
