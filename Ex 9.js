function hideEmailAdress(adress){
    let array = adress.split('@')
    part1= array[0].slice(0,(array[0].length/2))
    part2= array[1]
    return part1+'...'+ '@' +part2
}
console.log(hideEmailAdress("robin_singh@example.com"))