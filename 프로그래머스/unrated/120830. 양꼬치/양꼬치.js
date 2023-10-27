// const solution = (n, k) => n*12000 + (k - Math.trunc(n/10))*2000;

const solution = (n, k) => {
    let service = parseInt(n/10);
    return n*12000+(k-service)*2000
}