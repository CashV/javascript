//falsey value
//false, 0, -0, BinInt 0n, "", null, undefined,Nan;

//truthy value
//true, "0",'false', " ", [], {}, function(){};

//Nullish Coalescing Operator (??): null undefined

// let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? 5 ?? 10

// const coding = [ "js","ruby", "java", "cpp", "python"]

// const value = coding.forEach((item) =>{
//     console.log(item);
//     return item;
// })

// console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const value = myNums.filter( (nums) => nums > 4)
// console.log(value);

// const value = myNums.filter((nums)=>{
//     return nums > 4;
// })
// console.log(value);

// const newNums = []
// myNums.forEach((nums)=>{
//     if(nums>4){
//         newNums.push(nums)
//     }
// })
// console.log(newNums);

let nums = myNums.map((num)=> num + 10)
//console.log(nums);

nums = myNums.map((num) => num + 10)
            .map((num)=> num *10)
//console.log(nums);

nums = myNums.map((num) => num + 10)
            .map((num) => num * 10)
            .filter((num) => num > 120 && num <=170)
//console.log(nums);