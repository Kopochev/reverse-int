module.exports = function reverse(n) {
    let absN = Math.abs(n);
    let rev = 0;
    
    while (absN > 0) {
        rev = rev * 10 + absN % 10;
        absN = Math.floor(absN / 10);
    }
    return rev;
}
