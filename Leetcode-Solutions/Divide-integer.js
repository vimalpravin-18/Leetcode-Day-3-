var divide = function(dividend, divisor) {
    // Handle overflow edge case
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647; // Max 32-bit integer
    }

    // Convert to long to avoid overflow and work with positives
    const sign = (dividend > 0) === (divisor > 0) ? 1 : -1;
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    // Subtract divisor multiples using bit shifts
    while (a >= b) {
        let temp = b, count = 1;
        while (a >= (temp << 1)) {
            temp <<= 1;
            count <<= 1;
        }
        a -= temp;
        result += count;
    }

    return sign * result;
};

console.log(divide(10, 3)) // 3
console.log(divide(7, -3)) // -2
console.log(divide(0, 1)) //  0
console.log(divide(-40, -5)) // 8