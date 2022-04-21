function converting_first_letter_of_word_to_capital (string){
    let new_str=''
    let array = string.split(' ')
    array.forEach(function(item){
     let new_item  = item[0].toUpperCase() + item.slice(1)
    new_str +=(' '+ new_item)})
    
    return new_str    
}
console.log(converting_first_letter_of_word_to_capital('the quick brown fox'))