function solution(my_string, num1, num2) {
    let sArr = my_string.split('');
    let changeStr1 = sArr[num1];
    let changeStr2 = sArr[num2];
    let newArr = [...sArr];
    newArr[num1] = changeStr2;
    newArr[num2] = changeStr1;
    return newArr.join('');
}