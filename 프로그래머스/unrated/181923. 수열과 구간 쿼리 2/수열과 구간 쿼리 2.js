function solution(arr, queries) {
    var answer = [];
    queries.forEach((query, idx) => {
        const [start,end,num] = query;
        let a = arr.slice(start, end+1);
        let c = a.map(b => {
            if(b > num){
                return b
            }
        })
        c.sort((a,b) => a-b)
        if(c[0]){
            answer.push(c[0])    
        } else{
            answer.push(-1)
        }
    })
    
    return answer;
}