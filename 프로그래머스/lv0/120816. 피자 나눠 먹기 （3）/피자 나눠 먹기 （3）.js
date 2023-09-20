function solution(slice, n) {
    let answer = 1;
    let add = slice;
    while(slice < n){
        answer++
        slice = slice+add;
    }
    return answer;
}