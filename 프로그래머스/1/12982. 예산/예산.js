function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    d.sort((a,b) => a-b).forEach(team => {
        answer++;
        sum += team;
        if(sum > budget){
            answer--;
        }
    })
    return answer;
}