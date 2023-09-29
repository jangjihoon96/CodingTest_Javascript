function solution(num_list) {
    var answer = 0;
    let a = '';
    let b = '';
    num_list.forEach(num => {
        if(num % 2 === 1){
            a += num.toString()
        } else{
            b += num.toString()
        }
    })
    answer = Number(a) + Number(b)
    return answer;
}