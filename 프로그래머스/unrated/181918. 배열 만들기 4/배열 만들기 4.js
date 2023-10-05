function solution(arr) {
    var stk = [];
    let i = 0;
    while(i < arr.length){
        if(stk.length === 0){
            stk.push(arr[i]);
            i++;
        } else if(arr[i] > stk[stk.length - 1] && stk.length !== 0){
            stk.push(arr[i]);
            i++;
        } else if(arr[i] <= stk[stk.length - 1]){
            stk.pop();
        }
    }
    // i = 0; // arr[0] stk = [1] i++
    // i = 1; // arr[1] stk = [1,4] i++
    // i = 2; // arr[2] stk = [1]
    // i = 2; // arr[2] stk = [1,2] i++
    // i = 3; // arr[3] stk = [1,2,5] i++
    // i = 4; // arr[4] stk = [1,2]
    // i = 4; // arr[4] stk = [1,2,3] i++
    // i = 5; // arr[5] === false; 반복문 종료
    return stk;
}

