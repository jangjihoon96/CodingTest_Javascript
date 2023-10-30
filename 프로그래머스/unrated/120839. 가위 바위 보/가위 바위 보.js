function solution(rsp) {
    let answer = '';
    rsp.split('').forEach(num => {
        if(num == 2){
            answer += 0
        } else if(num == 0){
            answer += 5
        } else {
            answer += 2
        }
    })
    return answer;
}