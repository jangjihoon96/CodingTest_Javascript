function solution(age) {
    let answer = '';
    const lang = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let arr = age.toString().split('')
    arr.forEach(a => {
        answer += lang[a]
    })
    return answer;
}