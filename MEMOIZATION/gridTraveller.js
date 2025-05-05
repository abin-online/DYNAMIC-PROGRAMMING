function gridTraveller(m, n, memo) {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m <= 1 || n <= 1) {
        return Math.min(m, n)
    }
    memo[key] = gridTraveller((m - 1), n, memo) + gridTraveller(m, (n - 1), memo);
    return memo[key];
}
const  memo = {}
console.log(gridTraveller(18, 18, memo));
console.log(memo);

