function solution(my_string) {
    const regex = /[a-zA-Z]/g;
    let onlyNumberArr = my_string.replaceAll(regex,'').split('');
    return onlyNumberArr.reduce((acc,cur) => +acc+ +cur);
}