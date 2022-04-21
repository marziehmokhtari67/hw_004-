function remove_first_accurence(str,first){
let array =str.split(' ') 
let new_array = array.filter(function(item){
    return item!==first
})
return new_array.join(' ')
}
console.log(remove_first_accurence('The quick brown fox jumps over the lazy dog','the'))