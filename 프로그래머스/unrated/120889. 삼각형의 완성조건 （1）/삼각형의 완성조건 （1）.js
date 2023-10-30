function solution(sides) {
    let newArr= sides.sort((a,b) => b - a);
    return newArr[0] >= newArr[1]+newArr[2] ? 2 : 1;
}