function solution(my_string) {
    const numbers = my_string.match(/\d+/g);
    console.log(numbers)
    
    if (!numbers) {
        return 0;
    }

    const sum = numbers.reduce((acc, cur) => acc + parseInt(cur), 0);

    return sum;
}