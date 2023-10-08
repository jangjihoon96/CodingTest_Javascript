function solution(my_string) {
    let answer = '';
    my_string.split('').forEach((str) =>{
        if(str !== str.toLowerCase()){
            answer+=str.toLowerCase();
        } else {
            answer+=str.toUpperCase();
        }
    })
    return answer;
}