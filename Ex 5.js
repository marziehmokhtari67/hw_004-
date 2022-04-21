function merging_two_arrays(array1,array2){
    let new_array=[]
    array1.forEach(function(item){
        if(new_array.indexOf(item)===-1){
        new_array.push(item)}
        
    })
    array2.forEach(function(item){
        if(new_array.indexOf(item)===-1){
            new_array.push(item)  
        }
    })
    return new_array
}
console.log(merging_two_arrays([1,2,3,2],[5,6,2,9]))