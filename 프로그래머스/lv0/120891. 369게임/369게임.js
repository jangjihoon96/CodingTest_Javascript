function solution(order) {
    let answer = 0;
    String(order).split('').forEach(str => {
        if(+str == 3 || +str == 6 || +str == 9){
            answer++
        }
    })
    return answer;
}