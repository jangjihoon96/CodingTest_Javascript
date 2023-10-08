function solution(num, k) {
    let answer = 0;
    for(let i = 0; i < String(num).length; i++){
        if(String(num)[i] == k){
            answer = i+1;
            break;
        } else {
            answer = -1
        }
    }
    return answer;
}