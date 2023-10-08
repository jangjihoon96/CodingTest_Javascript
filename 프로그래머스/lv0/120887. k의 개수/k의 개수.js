function solution(i, j, k) {
    let answer = 0;
    let newArr = [];
    for(let a = i; a <= j; a++){
        if(String(a).includes(k)){
            newArr.push(a)
        }
    }
    newArr.join('').split('').forEach(str => {
        if(str == k){
            answer++
        }
    })
    return answer;
}