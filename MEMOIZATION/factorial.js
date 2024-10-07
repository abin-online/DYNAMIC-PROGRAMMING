const factorial = (n , memo = {})=> {
    if(n < 2){
        return 1
    }

    if(n in memo) return memo[n]

    memo[n] = factorial(n-1, memo) * n
    return memo[n]
}

console.log(factorial(100))