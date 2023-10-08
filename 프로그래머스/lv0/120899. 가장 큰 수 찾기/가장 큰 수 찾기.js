const solution = (array) => {
    let sortArr = [...array].sort((num1, num2) => num1 - num2);
    let largestNumber = sortArr[sortArr.length - 1];
    let findIndex = array.indexOf(largestNumber);
    return [largestNumber, findIndex];
}