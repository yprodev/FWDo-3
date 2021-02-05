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