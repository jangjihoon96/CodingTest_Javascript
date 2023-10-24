function solution(n, arr1, arr2) {
    let answer = [];
    let arr3 = [];
    let firstArr = changeBinary(arr1, n);
    let secondArr = changeBinary(arr2, n);
    
    for(let i = 0; i < firstArr.length; i++){
        let arr1 = firstArr[i].split('');
        let arr2 = secondArr[i].split('');
        let newArr = [];
        for(let j = 0; j < firstArr[i].length; j++){
            if(arr1[j] === '1' && arr2[j] !== '1' || arr1[j] !== '1' && arr2[j] === '1' || arr1[j] === '1' && arr2[j] === '1'){
                newArr.push('1');
            } else {
                newArr.push('0');
            }
        }
        arr3.push(newArr.join(''))
    }
    
    arr3.forEach(str => {
        let a = [];
        str.split('').forEach(str2 => {
            if(str2 === '1'){
                a.push('#')
            } else {
                a.push(' ')
            }
        })
        answer.push(a.join(''))
    })
    
    return answer;
}

function changeBinary(arr, n){
    let binaryArr = arr.map(num => {
        let a = num.toString(2).split('');
        let i = num.toString(2).length;
        while(i < n){
            a.unshift('0');
            i++
        }
        if(i === n){
            return a.join('');
        }
    })
    return binaryArr
}