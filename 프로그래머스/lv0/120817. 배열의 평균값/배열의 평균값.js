function solution(numbers) {
    let result = (numbers.reduce((acc,cur) => {
        return acc+cur
    },0))/numbers.length;
    return result.toFixed(1);
}