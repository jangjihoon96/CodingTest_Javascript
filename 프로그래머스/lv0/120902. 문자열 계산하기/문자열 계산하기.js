function solution(my_string) {    
    let arr = my_string.split(' ');
    let answer = Number(arr[0]);
    
    arr.forEach((str,idx) => {
        if(str === '+'){
            answer += Number(arr[idx+1])
        } else if(str === '-'){
            answer -= Number(arr[idx+1])
        }
    })
    
    console.log(answer)
    return answer;
}