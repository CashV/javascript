const myNums = [1,2,3,4,5]
const initialValue = 0


let total = myNums.reduce( (acc,currval)=>{
    return acc + currval                      
}, initialValue)
console.log(total);

total  = myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
},10)

const ShoppingCart = [
    {
        itemName: 'javascript',
        itemCost: 3000
    },
    {
        itemName: 'python',
        itemCost: 599
    },
    {
        itemName: 'cpp',
        itemCost: 499
    }
]

let price = ShoppingCart.reduce((acc,item) => acc + item.itemCost, 0)
console.log(price);