//  >-- First task --<

// const myArr = ['Jazz', 'Blues'];
// myArr.push('Rock-n-Roll');
// myArr[Math.floor(myArr.length / 2)] = 'Classics';
// myArr.shift();
// myArr.unshift('Rap', 'Reggae')
// console.log(myArr);

//  >-- Second task --<

// const sumInput = () => {
//     let sum = 0;
//     const arr = [];
//     while (1) {
//         let num = prompt('Input your number to add')
//         if (num === null || num === '' || num === undefined || !isFinite(num)) break;
//         arr.push(+num);
//         sum += +num;
//     }
//     console.log(arr);
//     return sum;
// }

//  >-- Third task --<

// -- 1(without reverse) --

// const myArr3 = [1, 2, 3, 4, 5];

// const funcReverse = (arr) => {
//     const reverseArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reverseArr.push(arr[i])
//     }
//     return reverseArr;
// }

// console.log(funcReverse(myArr3));

// -- 1(with reverse) --

// const myArr3 = [1, 2, 3, 4, 5];

// const reverseArr3 = myArr3.reverse();

// console.log(myArr3);
// console.log(reverseArr3);

// -- 2 --

// const revString = (string) => {
//     const arr = [];
//     for (let i = 0; i <= string.length - 1; i++) {
//         arr.push(string[i]);
//     }
//     let newstring = '';
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newstring += arr[i];
//     }
//     return newstring;
// }

// console.log(revString("Oleg"));

// -- 3 --

// const user = {
//     name: "Oleh",
//     surname: "Tychenko",
//     age: 22,
// };

// const sayHello = person => alert(`Hello, my name is ${person.name} ${person.surname}, and I am ${person.age} years old.`);

// sayHello(user);

// -- 4 --

// const week = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
// ]

// const showDay = () => alert ( week [ prompt("Input number from 1 to 7") - 1 ] )

// showDay();