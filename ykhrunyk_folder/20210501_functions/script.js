// function sumTo(n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         return sumTo(n - 1) + n;
//     }
// }

// alert ( sumTo(100) );


// function sumTo(n) {
//     let x = 0;
//     for (let i = 0; i <= n; i++) {
//         x += i;
//     }
//     return x;
// }

// alert (sumTo(100));

// function factorial(n) {
//     if (n == 1) {
//         return n;
//     } else {
//         return n * factorial(n-1);
//     }
// }
// alert(factorial(5));

function fib(n) {
    let x = 1;
    if (n == 1) {
        return x;
    } else {
        if (n == 2){
            return x;
        } else {
            return fib(n-2) + fib(n-1);
        }
    }
}

alert (fib(9));
