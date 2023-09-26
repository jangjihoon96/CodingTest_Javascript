function solution(str1, str2) {
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    let newArr = []
    for(let i = 0; i < arr1.length; i++){
        newArr.push(arr1[i] + arr2[i])
    }
    return newArr.join('');
}