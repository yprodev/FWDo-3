

// const user = {
//   age: 29,
//   sex: 'male',
//   isAdmin: false
// }

// const a = () => {
//   console.log('aksljdlkajdlkaj');
// }

// const books = [
//   { name: "eneida", rate: 1 },
//   { name: "Енеїда", rate: 2 },
//   { name: "Лісова пісня", rate: 3 },
//   { name: "Тигролови", rate: 4 },
//   { name: "Жовтий князь", rate: 3 },
// ]

// books.push({ name: "js", rate: 5 })
// console.log(books, ' after push');

// books.pop()
// console.log(books, ' after pop');

// books.unshift({ name: "js first", rate: 5 })
// console.log(books, ' after unshift');

// books.shift()
// console.log(books, ' after shift');

// const mybook = books.find((element, index) => {

//   return element === "Тигролови"
// });

// let mybok = { name: "eneida", rate: 1 }



// for (let index = 0; index < books.length; index++) {
//   const element = books[index];

//   console.log(element, index, ' for');
//   if (element === "Тигролови") {
//     mybok = element
//   }
// }

// const newArrMapExample = books
//   .map((book, i) => {
//     return book.name + ' - ' + i
//   })
//   .filter(element => element === "Тигролови - 3")

// const filteredNewArrMapExample = newArrMapExample
//   .filter(element => element === "Тигролови - 3")

// const newArrForFilterExample = []
// for (let index = 0; index < books.length; index++) {
//   if (books[index].rate >= 2) {
//     newArrForFilterExample.push(books[index])
//   }
// }



// console.log(newArrForFilterExample, ' newArrForFilterExample');

// const newArr = books.filter((book, i) => book.rate >= 2)

// console.log(newArr);

// console.log(books.length);

// // reduce 

// // const result = {
// //   '1': [{ name: "eneida", rate: 1 }],
// //   '2': [{ name: "eneida", rate: 2 }, { name: "eneida", rate: 2 }]
// // }

// // result['1'][{ name: "eneida", rate: 1 }]

// const groupedBooks = books.reduce((acc, currEl) => {
//   const currentRate = currEl.rate
//   if (acc[currentRate]) {
//     acc[currentRate].push(currEl)
//   } else {
//     acc[currentRate] = [currEl]
//   }
//   return acc;

// }, {})

// console.log(groupedBooks);




const userOne = {
  age: 29,
  gender: 'male',
  isAdmin: false,
  name: "Vitalii",
  surname: 'vasink'
}
const parent = document.createElement("div")

for (const key in userOne) {
  const el = document.createElement("div")
  el.innerText = `${key}:  ${userOne[key]}`
  parent.appendChild(el)
}

const el = document.createElement("div")
el.innerText = `-----------------`
parent.appendChild(el)

Object.keys(userOne).forEach(key => {
  const el = document.createElement("div")
  el.innerText = `${key}:  ${userOne[key]}`
  parent.appendChild(el)
})

console.log(Object.keys(userOne), ' keys');
console.log(Object.values(userOne), " values");
console.log(Object.entries(userOne), " entries");


document.body.appendChild(parent)


const a = 