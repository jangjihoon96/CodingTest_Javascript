function solution(numbers) {
    let sortArr = numbers.sort((a,b) => a-b);
    let answer = sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2];
    return answer;
}