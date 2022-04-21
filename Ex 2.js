function sumOfItemsOfAnArray(array){
    let sum = 0
    array.forEach(function(item)
         {return sum+=item });
         return sum
}
console.log(sumOfItemsOfAnArray([1,2,3,4,5,6]))