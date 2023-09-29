// 이건 내가 억지로 짠 코드 아래는 리팩토링한 코드
// function solution(a, d, included) {
//     var answer = 0;
//     let arr = [a];
//     included.forEach(b => {
//         a += d
//         arr.push(a)
//     })
//     let deleteLast = arr.pop()
//     arr.forEach((num,idx) => {
//         if(included[idx]){
//             answer += num
//         }
//     })
//     return answer;
// }

function solution(a, d, included) {
    let answer = 0;
    let num = a;
    
    included.forEach(isIncluded => {
        if (isIncluded) {
            answer += num;
        }
        num += d;
    });
    
    return answer;
}