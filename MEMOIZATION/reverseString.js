const reverse = (str )=> {


    if(str.length < 2 ){
        return str
    }
    let remainingStr = str.slice(1)

    return reverse(remainingStr) + str[0]
}

console.log(reverse('Hello'))