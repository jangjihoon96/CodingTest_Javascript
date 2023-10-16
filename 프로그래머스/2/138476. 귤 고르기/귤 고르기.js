function solution(k, tangerine) {
    const obj = {};
    tangerine.forEach((n) => {
        obj[n] = ++obj[n] || 1;
    })
    let arr = Object.values(obj).sort((a,b)=>b-a);
    let answer = 0;
    let num = 0;
    for(let i = 0; i < arr.length; i++){
        num += arr[i];
        answer++;   
        if(num >= k){
            break;
        }
    }
    
    return answer;
}