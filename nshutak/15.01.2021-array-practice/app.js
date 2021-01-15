const users = [
  { id: "1", name: 'John', score: 10 },
  { id: "2", name: 'Pete', score: 5 },
  { id: "3", name: 'Mary', score: 20 },
  { id: "4", name: 'Mary', score: 15 },
  { id: "5", name: 'Mary', score: 15 },
  { id: "6", name: 'Mary', score: 13 },
];

let results = [];

for (let i=0; i<users.length; i++){
  if (users.score < 14) {
    results.push(users[i]);
  }
}
console.log("Result is:", results);





//task2
const users = [
  { id: "id1", name: 'John', score: 10 },
  { id: "id2", name: 'Pete', score: 5 },
  { id: "id3", name: 'Mary', score: 20 },
  { id: "id4", name: 'Mary', score: 15 },
  { id: "id5", name: 'Mary', score: 15 },
  { id: "id6", name: 'Mary', score: 13 },
];
const admins = [
  { id: "id1", isAdmin: true },
  { id: "id2", isAdmin: true },
  { id: "id3", isAdmin: false },
  { id: "id4", isAdmin: true },
  { id: "id5", isAdmin: false },
  { id: "id6", isAdmin: true },
]


//first sposib
const arr = [];
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  console.log(user);
  const admin = admins.find((elem) => user.id === elem.id)
  const mergedObj = Object.assign(user, admin);
  arr.push(mergedObj);

}
console.log(arr);

//second sposib more good
const newArr = users.map(user => {
  const admin = admins.find(admin => {
    return admin.id === user.id
  })
  return Object.assign(admin, user);
})

console.log(newArr);







//task3

const extraScoreForUser = {
  id: 'id5',
  extraScope: 4
}

//solution task3
const newEra = users.map((user) => {
  if (user.id === extraScoreForUser.id) {
    return {
      ...user,
      score: user.score + extraScoreForUser.extraScope
    }
  } else {
    return user
  }
}

)
console.log(newEra);




// tasks
// 1. filter users with score less than  11
// 2. create new array that has all properties eg { id: "1", isAdmin: true, name: 'John', score: 10ß }

// 3. create new array with that has where extraScoreForUser result should be { id: "5", name: 'Mary', score: 15+ },

// 4. create object like from array:
// const result = {
//   id1: { id: "1", isAdmin: true },
//   id2: { id: "2", isAdmin: true },
//   id3: { id: "3", isAdmin: false },
// }


// 5. create array from this object

const weather = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  temperature: ['12', '13', '23', '24', '18', '17', '19'],
  wind: ['6', '2', '4', '5', '7', '23', '1'],
}

// result has to be 
// newWeather = [{ day: "Sunday", temperature: "12", wind: 3} ...]


