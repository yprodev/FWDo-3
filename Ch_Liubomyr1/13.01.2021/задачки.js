// var myarrey = ["o","l","e", "k","s","a","n","d","r" ]
// myarrey.sort ()

// let styles = ["Dzhaz", "Blyuz", "Rock","Reggi"];
// let centerItem = (styles.length - 1) / 2;
// console.log(centerItem + ' centerItem');
// let y = styles.splice(centerItem, 1, 'clasic');
// console.log(styles);

// zadcha1
let styles = ['Dzhaz', 'Blyuz'];
styles.push('Rock');
styles[1] = ['clasic'];

styles.shift()
styles.unshift('Rap', 'Reggi')
alert( styles );


// zadecha2
function sumInput() {
const arr = [];
while (true) {
const value = prompt('enter a value');
const num = +value;
if (value === '' || value === null || isNaN(num)) {
break;
}
arr.push(num);
}
let sum = 0;
for (let item of arr) {
sum += item;
}
return sum;
}
sumInput();

// zadacha 3
var myarrey = ["9","8","7", "6","5","4","3","2","1" ]
myarrey.sort ()


var Sanya = ["o","l","e", "k","s","a","n","d","r"]
Sanya.reverse();
// Sanya.sort();


var days = [
    'Неділя',
    'Понеділок',
    'Вівторок',
    'Среда',
    'Четверг',
    'Пятниця',
    'Субота'
  ];
  var d = new Date();
  var n = d.getDay();
  console.log(days[n]);
