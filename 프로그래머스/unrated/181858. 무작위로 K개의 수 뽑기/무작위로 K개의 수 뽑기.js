function solution(arr, k) {
    const set = new Set(arr);
    const newArr = [...set].slice(0,k)
    if(newArr.length < k){
        for(let i = newArr.length; i < k; i++){
            newArr.push(-1)
        }
    }
    console.log(newArr)
    return newArr
}
