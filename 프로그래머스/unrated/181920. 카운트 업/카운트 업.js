function solution(start_num, end_num) {
    var answer = [];
    let num = start_num
    while(num <= end_num){
        answer.push(num);
        num++;
    }
    return answer;
}