function solution(n, control) {
    var answer = 0;
    control.split('').forEach(i => {
        if(i === 'w'){
            n += 1
        } else if(i === 's'){
            n -= 1
        } else if(i === 'd'){
            n += 10
        } else if(i === 'a'){
            n -= 10
        } else {
            return false
        }
    })
    answer = n
    return answer;
}