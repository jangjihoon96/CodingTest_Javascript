function solution(num_list) {
    var answer = 0;
    let a = num_list.reduce((acc, cur) => {
        return acc*cur
    })
    let b = num_list.reduce((acc, cur) => {
        return acc+cur
    })
    if(a < b**2){
        answer = 1
    } else {
        answer = 0
    }
    return answer;
}