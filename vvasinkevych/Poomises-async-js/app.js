const BASE_URL = 'https://api.github.com/'
const tableBodyClass = 'table-body'
const api = {
  users: 'users/',
  searchUsers: 'search/users',
}
// const baseFetchOptions = {
//   method: 'GET',
//   mode: 'cors',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/vnd.github.v3+json'
//   },
// }

const searchBtn = document.querySelector('.findBtn')

async function getUsers(query ="vasinkevych") {
  return fetch(`${BASE_URL}${api.searchUsers}?q=${query}`)
    .then((response) => {
     return response.json();
   })
}


const getUsersRepo = async (url) => {
  return fetch(url)
    .then((response) => {
      console.log(response.json())
      return response.json();

    }).then(res => {
      console.log(res, 'skaljflaksj')
    })
}


const createTableRow = (user) => {
  const cells = `
  <td > <img src="${user.avatar_url}" style="height:40px" alt="" /></td>
  <td > ${user.login}</td>
  `
  const row = document.createElement('tr')
  row.setAttribute('data-url', user.repos_url)
  row.innerHTML = cells
  row.onclick = (e) => getUsersRepo(user.repos_url)
  return row;
}

function createTable(users) {
  const tbody = document.createElement('tbody');
  tbody.classList.add(tableBodyClass)
  users.forEach(user => {
    const row = createTableRow(user)
    tbody.appendChild(row)
  })

  return tbody
}

async function init() {
  searchBtn.addEventListener('click', searchUsers)
  const users = await getUsers();
  console.log(users, '  ==');
}

const searchUsers = async () => {
  const input = document.querySelector('.searchUsers')
  const dataFromGit = await getUsers(input.value)
  console.log(dataFromGit, '  ==');

  const bodyTable = createTable(dataFromGit.items) 

  document.querySelector('table').appendChild(bodyTable)

}

init()

// fetch('https://api.github.com/users/vasinkevych')
//   // Handle success
//   .then(response => response.json())  // convert to json
//   .then(json => console.log(json))    //print data to console
//   .catch(err => console.log('Request Failed', err)); // Catch errors

// fetch('http://example.com/movies.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const data = await fetch('http://example.com/movies.json').json()