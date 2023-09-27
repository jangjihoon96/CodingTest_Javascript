function solution(code) {
    var answer = '';
    let arr = [];
    let trash = []
    let mode = 0;
    code.split('').forEach((str, idx) => {
        if(mode === 0){
            if(str !== '1' && idx%2 === 0){
                arr.push(str)
            } else if(str === '1'){
                mode++
            }
        } else if(mode === 1){
            if(str !== '1' && idx%2 === 1){
                arr.push(str)
            } else if(str === '1'){
                mode--
            }
        }
    })
    answer = arr.join('')
    if(answer.length === 0){
        answer = 'EMPTY'
    }
    return answer;
}
// 1. mode가 0이냐 1이냐
// 2. code[idx]가 1이냐 아니냐
// 3. idx가 짝수냐 홀수냐