function sumOfItemsOfAnArray(array){
   
    return Math.round (array.reduce(function(acc,item){
        return  acc+item 
           
    }))
}
console.log(sumOfItemsOfAnArray([15.5, 2.3, 1.1, 4.7]))