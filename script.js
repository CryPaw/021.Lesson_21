// з використанням циклу

function sumto(n) {

let result = 0;
for (let i = 0; i <= n; i++){
result = result + i
}
return result
}

console.log(sumto(100))


// з використанням рекурсії

function sumto(n) {
    if (n === 1) return 1
    return n + sumto(n-1)
    }
    
    console.log(sumto(100))