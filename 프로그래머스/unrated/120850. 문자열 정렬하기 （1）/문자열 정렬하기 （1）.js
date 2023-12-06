function solution(my_string) {
    let regex = /\d/g
    const numbers = my_string.match(regex)
    if(!numbers) return []
    let sortNum = numbers.sort((a,b)=>a-b);
    
    return sortNum.map((str)=> +str);
}