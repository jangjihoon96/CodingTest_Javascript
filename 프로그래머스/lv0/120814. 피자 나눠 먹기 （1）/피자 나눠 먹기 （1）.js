const solution = (n) => {
    let result = 1;
    let pizza = 7;
    while(pizza < n){
        result++
        pizza+=7
    }
    return result
}