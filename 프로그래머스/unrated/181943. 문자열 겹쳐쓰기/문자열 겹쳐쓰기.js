function solution(my_string, overwrite_string, s) {
    let answer = '';
    let str1 = my_string.slice(0,s)
    let str2 = str1 + overwrite_string;
    let str3 = my_string.slice(str2.length,my_string.length);
    answer = str2 + str3
    return answer;
}