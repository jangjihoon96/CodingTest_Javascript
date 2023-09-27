function solution(n) {
    var answer = 0;
    if(n%2 === 1){
        for(let i = n; i > 0; i--){
            if(i%2 === 1){
                answer += i
            }
        }
    } else {
        for(let i = n; i > 0; i--){
            if(i%2 === 0){
                answer += i**2
            }
        }
    }
    return answer;
}