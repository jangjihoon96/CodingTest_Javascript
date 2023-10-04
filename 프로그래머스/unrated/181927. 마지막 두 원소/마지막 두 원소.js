function solution(num_list) {
    var answer = [...num_list];
    let num1 = num_list[num_list.length-1]
    let num2 = num_list[num_list.length-2]
    if(num1 > num2){
        answer.push(num1 - num2)
    } else {
        answer.push(num1 * 2)
    }
    return answer;
}