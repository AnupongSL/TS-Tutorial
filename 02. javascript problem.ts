const total = (a, b) => {
    return a + b;
}

console.log(total(10, 20)); //30
console.log(total("10", "20")); //1020
console.log(total(true, false)); // true = 1, false = 0 , 1 + 0 = 1
console.log(total(true, true)); //2