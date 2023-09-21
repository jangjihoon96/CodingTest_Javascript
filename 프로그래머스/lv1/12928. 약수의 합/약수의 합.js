function solution(n) {
    let arr = 0;
    for(let i = 1; i <= n; i++){
        if(n%i === 0){
            arr += i
        }
    }
    return arr;
}