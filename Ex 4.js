function removing(array){
    return array.filter(function(item){
      return item !== 'null'&& item !== 'null'&& item !=='0'&& item !== 'undefined'&& item !=='""'&& item !=='false'&& item !=='NAN'
    })
        
    
    
}

console.log(removing(['null',0, 23 ,'0',56]))