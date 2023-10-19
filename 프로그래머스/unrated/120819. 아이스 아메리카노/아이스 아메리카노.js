function solution(money) {
    let answer = [0,0];
    let americano = 5500;
    let stack = 1;
    let mon = money
    while(money >= stack*americano){
        answer[0]++;
        stack++;
        mon -= americano
    }
    answer[1] = mon
    
    return answer;
}