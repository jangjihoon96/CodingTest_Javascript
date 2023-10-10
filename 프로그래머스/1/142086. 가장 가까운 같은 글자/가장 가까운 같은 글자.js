function solution(s) {
    var answer = [];
    let checkArr = [];
    s.split('').forEach((str, idx) => {
        if(checkArr.indexOf(str) === -1){
            answer.push(-1)
        } else {
            answer.push(idx - checkArr.lastIndexOf(str));
        }
        checkArr.push(str);
    })
    return answer;
}