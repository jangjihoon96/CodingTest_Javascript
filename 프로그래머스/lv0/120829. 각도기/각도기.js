function solution(angle) {
    if(angle === 180){
        return 4
    } else if(angle === 90){
        return 2
    } else if(angle < 90 && angle > 0){
        return 1
    }
    return 3
}