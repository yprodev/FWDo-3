//---First task---//

let myArray = ["Jazz", "Blues"];
console.log(myArray);
myArray.push("Rock-n-Roll");
console.log(myArray);
myArray.splice(1, 1, "Classics");
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift("Rap", "Reggy");
console.log(myArray)


//---Second task---//

function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введіть число", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert( sumInput() )

//---Third Task---//

//---1---//

/*let num = [1, 2, 3, 4, 5];
    console.log( num.sort() )

*/

//---2---//

/*let myName = ["Olena"];
console.log(myName);
myName.reverse("4", "3", "2", "1", "0");
console.log(myName)*/

//---3---//

function userInfo (name, surname, age) {
    name = "Olena";
    surname = "Vdovych";
    age = "32";
    console.log("Hello! " + "My " + "name " + name);
    console.log("Hello! " + "My " + "surname " + surname);
    console.log("Hello! " + "I am " + age + " old")
}
userInfo()

//---4---//
let date = new Date();
let day = date.getDay();

function showDay(day) {
    let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    return days[day];
}
console.log(showDay(3))
