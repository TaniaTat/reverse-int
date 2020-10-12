module.exports = function reverse (n) {
    n = Math.abs(n);
    n = n.toString();
    return Array.from(n).reverse().join("");
}
