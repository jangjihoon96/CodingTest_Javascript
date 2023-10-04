function solution(arr, queries) {
    var answer = [];
    queries.forEach((query, idx) => {
        [arr[query[0]], arr[query[1]]] = [arr[query[1]], arr[query[0]]]
    })
    answer.push(...arr)
    return answer;
}