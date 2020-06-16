euclidGCD = (a, b) => {
    return b == 0 ? a : euclidGCD(b, a % b);
}

console.log(euclidGCD(12, 20));
