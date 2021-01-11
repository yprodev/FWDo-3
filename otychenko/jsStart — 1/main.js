
function adultfunc () {
    var adultAge, value;
    value = 1;
    (confirm("Are you drinking alcohol?")) ? value += 0.1 : '' ;
    (confirm("Are you smoking?")) ? value += 0.2 : '';
    (confirm("Are you an athlete?")) ? value -= 0.4 : '';
    adultAge = prompt("How old are you?");
    ((adultAge <=60 && adultAge >= 30)) ? value += 0.1 :
    ((adultAge > 60) === true) ? alert("нажаль не маємо страхових продуків для вас"):
    ((adultAge <= 20 && adultAge >= 18)) ? alert("вітаємо - ви перший студент який має гроші на страховку") :
    '';
    alert((value)); 
  };
  
  if ((confirm("Are you an adult?")) === true) {
      adultfunc();
    }  
    else {
      var nonAdult = prompt("How old are you?");
      if (nonAdult < 10) {
        alert("Покличте батьків");
      }
      else if (nonAdult >= 10 && nonAdult <= 18) {
        alert("Go have fun")
      }
      else {
        alert("You are not a child")
      }
    };

// var ans = prompt("What is the \"official\" name of JavaScript? ","?");
// if (ans === "ECMAScript") {
//   alert("Right!")
// } else {
//   alert("You don't know? \"ECMAScript\"!");
// }

// var ans = prompt("What is the \"official\" name of JavaScript?");
// ans === "ECMAScript" ? alert("Right!") : alert("You don't know? \"ECMAScript\"!");

// var ans2 = prompt("What's your favorite number?"); 
// +ans2 > 0 ? alert(1) :
// +ans2 < 0 ? alert (-1) :
// alert(0);

// var ans3;
// var a = 1;
// var b = 3;
// console.log((a + b < 4) ? ans3 = "Below" : ans3 = "Over or equal");

// let login = prompt("Your nickname?");
// let ans4 = (login === "Employee") ? "Hello" :
// login === "Director" ? "Greetings" :
// login === "" ? "No login" :
// "Wrong login, create a new one";
// console.log(ans4);

// var age = 91;
// var ans5 = (age>=14 && age<=90);
// console.log(+ans5);

// var age = prompt("How old are you?");
// var result = function  compare () {
//   if (age < 14 || age > 90) {
//     return "Your age is less than 14 and more than 90"
//   }
//   return "Your age is between 14 and 90"
// }
// console.log(result());

// var age = prompt("How old are you?");
// var result = function  compare () {
//   if(!(age >= 14 && age <=90)) {
//     return "Your age is less than 14 and more than 90"
//   }
//   return "Your age is between 14 and 90"
// }
// console.log(result());

// var userName = prompt("Who's there?");
// var userPass;
// userName === "" ? prompt("Canceled") :
// userName === "Admin" ? userPass = prompt("Password?") :
// alert("I don't know you!");
// if (userPass) {
// userPass === "" ? alert("Canceled") :
// userPass === "TheMaster" ? alert("Welcome") :
// alert("Wrong password");
// }

//loops
// for (let i = 1; i<10; i++) {
//     if (i % 2 !==0) continue;
//     console.log(i);
// }

// let i = 1;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// do {
//   var ans = prompt("Number must be more than 100", '')
//   if (ans === null) {break};
// } while(ans < 100);                                                      } while (num <= 100 && num);

// let n = prompt("Write your number");
// nextLoop:
// for(let i = 2;i<=n;i++) {
//   for (let j = 2;j<=Math.sqrt(i);j++) {
//     if (i % j === 0) continue nextLoop;
//   }
//   console.log(i); 
// }


//switch
// let browser = prompt("What browser are you using?");
// if (browser === 'Edge') {
//    alert('You\'ve got the Edge');
// } else if (browser === 'Chrome' 
// || browser === 'Firefox' 
// || browser === 'Safari' 
// || browser === 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// } 

// let a = +prompt(('a?'),'');
// switch (a) {
//   case 0: {
//     alert(0);
//     break;
//   }
//   case 1: {
//     alert(1);
//     break;
//   }
//   case 2:
//   case 3: {
//     alert('2,3');
//     break;
//   }
//   default: {
//     alert('Wrong number')
//   }
// }   

//functions
// function checkAge(age) {
//   return age > 18 ? true : confirm('Did parents allow you?');
// }
// checkAge(18);

// function checkAge2(age) {
//   return age > 18 || confirm('Did parents allow you?');
// }
// checkAge2(18);

// function checkTheLeast (a,b) {
//     return a < b ? alert(a) :
//     a > b ? alert (b) :
//     alert('They are equil');
//    };
//    checkTheLeast(11,8);

// function calcPow (x,n) {
//   return alert(parseInt(Math.pow(x,n)))
// };
// calcPow(4,4);

// function calcPow2 (x,n) {
//   let res = x;
//   for(let i = 1;i<n;i++) {
//    res *= x;
//   }
//   return res;
// }
// console.log(calcPow2(2,4));

//arrow functions
// let ask = (question, yes, no) => {(confirm(question)) ? yes() : no()};
// ask("Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution"));

// object 1
// let user = {};
// user["name"] = "John";
// user["surname"] = "Smith";
// console.log( user.name );
// user["name"] = "Pete";
// console.log( user["name"]);
// delete user.name;
// console.log( user.name ); 

// let isEmpty = function(obj) {
//     for (let prop in obj) {
//       return console.log(true);
//     }
//    return console.log(false);
//   }
  
//   let myObj = {
//     "name" : "Oleh"
//   }
  
//   isEmpty(myObj); 

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
  
//   let sumFunc = function(obj) {
//     let sum = 0;
//     for (let prop in obj) {
//       sum += obj[prop];
//       console.log(sum);
//     }
//   }  
//   sumFunc(salaries);

//      //
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   let multiplyNumeric = function (obj) {
//     for (let prop in obj) {
//       if (obj[prop] === Number) {
//       obj[prop] *= 2;
//       console.log(obj[prop]);
//     }
//     }
//   }
//   multiplyNumeric(menu);
//   console.log(menu);

//   object-methods    //
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//     read () {
//       calculator.a = prompt("Enter your value number 1","");
//       calculator.b = prompt("Enter your value number 2","");
//     },
//     sum () {
//       return +this.a + +this.b;
//     },
//     mul () {
//       return this.a * this.b;
//     }
// };
 
// calculator.read();
// console.log(calculator.a);
// console.log(calculator.b);
// alert( calculator.sum() );
// alert( calculator.mul() );

//  //          ???????????????????????????????????????????????????

// Chaining
// importance: 2
// There’s a ladder object that allows to go up and down:

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//         return this;                             ??????????????????????
//         this.step--;
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//       return this;
//     }
//   };
  // Now, if we need to make several calls in sequence, can do it like this:
  
  // ladder.up();
  // ladder.up();
  // ladder.down();
  // ladder.showStep(); // 1
  // Modify the code of up, down and showStep to make the calls chainable, like this:
  
//   ladder.up().up().down().showStep(); // 1
  // Such approach is widely used across JavaScript libraries.

//      Constructopr, operator "new"        //
// function Calculator () {
//     this.read = function () {
//     this.a = +prompt("A", 0);
//     this.b = +prompt("B", 0);
//     };
//     this.sum = function () {
//       return this.a + this.b;
//     };
//     this.mul = function () {
//       return this.a * this.b;
//     };
//   }
  
//   let calculator = new Calculator();
  
//   calculator.read();
//    console.log(`Sum = ${calculator.sum()}`);
//    console.log(`Mul = ${calculator.mul()}`);

//      FIRST      //
// function Accumulator () {
//     this.value = 0;
//     this.accum = function () {
//        this.a = +prompt("What do you wont to add?");
//        console.log(this.value += this.a);
//     }
//   }  
  
//   let accumulator = new Accumulator();
//   accumulator.accum();
//   accumulator.accum();
//   accumulator.accum();
//   accumulator.accum();
//   accumulator.accum();

//      SECOND      //
// function Accumulator(startingValue) {
//     this.value = startingValue;
  
//     this.read = function() {
//       this.value += +prompt('How much to add?', 0);
//     };
  
//   }
  
//   let accumulator = new Accumulator(1);
//   accumulator.read();
//   accumulator.read();
//   alert(accumulator.value);

//      chaining        //
// function UserCar (brand, year, color) {
//     this.brand = brand;
//     this.showBrand = function() {
//       console.log(this.brand);
//       return this;
//     }
//     this.year = year;
//     this.showYear = function() {
//       console.log(this.year);
//       return this;
//     }
//     this.color = color;
//     this.showColor = function () {
//       console.log(this.color);
//       return this;
//     }
//   }

//   let userCar = new UserCar("Nissan", 2010, "brown");

//   userCar.showBrand().showYear().showColor();
// userCar.showBrand();
// userCar.showYear();
// userCar.showColor(); 

//      NUMBERS     //
// let sum = function() {
//     let a = +prompt('Enter first number');
//     let b = +prompt('Enter second number');
//     console.log(a+b);
//   } 
//   sum();

//      1 var       //
// let inputNum = function () {
//     let num = prompt('Enter your number', 0);
//     if (num === "CANCEL" || num === null) return console.log("null");
//     else if (isNaN(num)) {
//       num = inputNum();
//   }
//     else console.log(+num);
//   }   
  
//   inputNum(); 

//      second, the best one        //
// function readNumber() {
//     let num;
  
//     do {
//       num = prompt("Enter a number please?", 0);
//     } while ( !isFinite(num) );
  
//     if (num === null || num === '') return null;
  
//     return +num;
//   }
  
//   alert(`Read: ${readNumber()}`);

//   first   //
// let getRandomInt = function (min,max) {
//     min = Math.floor(min);
//     max = Math.ceil(max);
//     console.log(Math.round(Math.random() * (max-min) + +min));
//   };
  
//   getRandomInt(2,4);               
//      second(true)        //
// function randomInteger(min, max) {
//     // here rand is from min to (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  
//   alert( randomInteger(1, 3) );

//        STRINGS         //

// let ucFirst = function (str) {
//     console.log( str[0].toUpperCase() + str.slice(1));
//   }
  
//   ucFirst("oleh");
//   ucFirst("Djonatan");
//   ucFirst("");


//      2       //


// let checkSpam = function(str) {
//     if (str.includes('buy ViAgRA now') || str.includes('free xxxxx' != -1)) {
//         return true;
//     }
//     else return false;
//   }
  
//   console.log(checkSpam('buy ViAgRA now'));

//      3       //
// let extractCurrencyValue = function(str) {
//     return str = +str.slice(1);
//   }
  
//   console.log( extractCurrencyValue('$340') === 340 );

//       RECUSSION       //

//    1 task loop   //

// let sumTo = function(n) {
//   let sum = 0; 
//   for (let i = 0; i<=n; i++) {
//     sum += i; 
//   }
//   return sum;
// }
// console.log(sumTo(100));

//    1 task recursion    //
// let sum = 0;
// let sumTo = function(n) {
//   n == 0 ? n :
//   sum = n + sumTo(n-1);
//   return sum;
// }
// console.log(sumTo(5));

//    1 task arithmetic prog(ne zrobyv)    //
// function sumTo(n) {
//   return n * (n + 1) / 2;
// }
// alert( sumTo(3) );


//      2 task      //
//      WRONG ONE       //
// let res = 0;
// let fib = function (n) {
//   return n <= 1 ? n :
//   res = fib(n-1) + fib(n-2);
// }

// console.log(fib(77));
//      GOOD ONE        //
// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//     }
//     return b;
//   }
  
//   alert( fib(3) ); // 2
//   alert( fib(7) ); // 13
//   alert( fib(77) ); // 5527939700884757

//      task 3      //
//      NE ZROBYV PERSHE        //
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
//   function printList(list) {
//     let tmp = list;
  
//     while (tmp) {
//       alert(tmp.value);
//       tmp = tmp.next;
//     }
  
//   }
  
//   printList(list);

//      CE PEREROBYV        //
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
//   let printList = (list) => {
//     let print = list;
//      if (print == null) {
//        console.log("end");
//      }
//      else {
//        console.log(print.value);
//        print = printList(print.next);
//      }
//   }
  
//   printList(list);

//    LAST TASk  //
//      ZROBYV NO NE TAK        //
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
//   let arr =[];
  
//   let printList = (list) => {
//     let print = list;
//      if (print == null) {
//       let showArr = (array) => {
//         for (let i = 0; i<arr.length; i++) {
//           console.log(array[i]);
//         }
//       }
//       showArr(arr);
//        console.log("end");
//      }
//      else {
//        arr.unshift(print.value);
//        print = printList(print.next);
//      }
//   }
//   printList(list);

//      NFE        //


//    //   task 1   //
// function makeCounter() {
//   counter.count = 0;
//   function counter() {
//      return ++counter.count;
//   };
//   counter.set = function(num) {
//    return counter.count = num;
//   }
//   counter.decrease = function () {
//     return --counter.count;
//   }
//   return counter;
//   }

// let counter1 = makeCounter();

// console.log(counter1()); 
// console.log(counter1.set(4));
// console.log(counter1()); 
// console.log(counter1());
// console.log(counter1.decrease());    
// console.log(counter1.decrease());    
// console.log(counter1.decrease());   

//    task 2    //

