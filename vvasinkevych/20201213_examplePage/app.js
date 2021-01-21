
const btn = document.querySelector('.rightButton') // #someId 
const btn2 = document.getElementsByClassName('rightButton')

// const btn2 = document.querySelectorAll('button')

console.log('one ', btn);

btn.addEventListener('click', (event) => { 
  console.log(event);
  btn.style.backgroundColor = 'blue'
  btn.removeEventListener()
})


const table = document.querySelector('table')

table.onclick = (event) => {
  console.log(event.target);
  const row = event.target.parentElement.dataset.row

  const exist = btn.contains(event.target)
  console.log(exist);
  switch (row) {
    case '1':
      event.target.parentElement.style.backgroundColor = "red"

      event.target.innerHTML = `
        <div>some test</div>
      `
      break;
    
    case '2':
      event.target.parentElement.style.backgroundColor = "blue"
      break;
  
    default:
      event.target.parentElement.style.backgroundColor = "green"
      break;
  }
}

console.log('all ', btn2);