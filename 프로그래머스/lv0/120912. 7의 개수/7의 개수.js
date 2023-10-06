function solution(array) {
    var answer = 0;
    array.join('').split('').forEach((seven)=>{
        if(+seven === 7){
            answer += 1
        }
    }),0
    return answer;
}