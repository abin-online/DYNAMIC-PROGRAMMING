 const fib = (n , memo = {}) => {
    if(n in memo) return memo[n]
    if(n<=2) return 1
    memo[n] = fib(n-2 , memo) + fib(n-1 , memo)
    return memo[n]
}  

console.log(fib(769));



const fibo = (n)=> {
    if(n<= 2) return 1
    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(769));


//Time complexity : 0(M+N);
