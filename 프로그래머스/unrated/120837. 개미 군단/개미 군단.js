function solution(hp) {
    let answer = 0;
    let restHp = hp;
    while(restHp > 0){
        if(restHp >= 5){
            restHp -= 5
            answer++
        } else if(restHp >= 3){
            restHp -= 3
            answer++
        } else {
            restHp -= 1
            answer++
        }
    }
    return answer;
}