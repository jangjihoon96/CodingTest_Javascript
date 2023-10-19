function solution(array, height) {
    let answer = 0;
    array.forEach((num) => {
        if(num > height){
            answer++
        }
    })
    return answer;
}