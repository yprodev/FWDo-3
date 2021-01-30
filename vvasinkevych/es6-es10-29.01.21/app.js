// es6
import { utilFuncion } from "./utils";

utilFuncion('asdasdasdkjakjds')

let a = 1
const b = 2
const func = () => { }
// особливості стрілкової функціїї

const str = `${a} as;ldsa; ${b} ` // '1  as;ldsa;'
// Array and object destructing

const contacts = {
  name: 'Vitalii',
  age: 332,
  surname: 'Vasink'
}

var name = contacts.name
var age = contacts.age

var { name, age } = contacts

name.toLowerCase()

const arrNames = ['Lionel', 'laura', 'John']

const john = arrNames[2]

const [lionellkasjdlkas, laora, john1] = arrNames


//rest operator
const arr = ['said', 20, 'JavaScript enthusiast', 'Hi', 'Said', 'How are you?'];

const [said, numberq, ...newArr] = arr;

// promises

// es7 

const hasSaid = arr.includes('Said')

const exponenetiation = 2 ** 3

// es8

async function getData() {
  return Promise.resolve('data');
}

async function getMoreData(data) {
  return Promise.resolve(data + 'more data');
}

async function getAll() {
  const data = await getData();
  const moreData = await getMoreData(data);
  return `All the data: data, moreData`;
}

function* name(params) {
  
}

// es10
const arrs = [1, [3]]
arrs.flatMap(el => el * 4)
arrs.flat()


function sayHi(name, messsage = 'Hello') {
  console.log(`${message}  ${name}`);
}



// nulish

const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42