function solution(s){
    let sArr = s.toLowerCase().split('');
    let pCount = 0;
    let yCount = 0;
    for(let i = 0; i < sArr.length; i++){
        if(sArr[i] === 'p'){
            pCount++
        } else if(sArr[i] === 'y'){
            yCount++
        }
    }
    return pCount === yCount ? true : false
}

// stack의 길이가 0
// sArr[i]가 'p'
// sArr[i]가 'y'