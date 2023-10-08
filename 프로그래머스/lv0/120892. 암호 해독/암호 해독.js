function solution(cipher, code) {
    let answer = '';
    let sArr = cipher.split('');
    sArr.forEach((str,idx) => {
        if((idx+1)%code === 0){
            answer += str
        }
    })
    return answer;
}