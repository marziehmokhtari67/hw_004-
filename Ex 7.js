function curday(seperator){
    let date= new Date()
   let date1 = [date.getDate(),date.getMonth(),date.getFullYear()]
   let new_date = date1.join(seperator)
   return new_date
 }
 console.log(curday('-'))