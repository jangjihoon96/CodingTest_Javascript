function solution(numbers) {
    let sArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    sArr.forEach((str,idx) => {
        numbers = numbers.split(str).join(idx);
    });
    return +numbers;
}