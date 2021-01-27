let name1 = document.querySelector('.subscription-name');
let yourThoughts = document.querySelector('.share')
let form = document.querySelector('.form');
let message1 = document.querySelector('.subscription-message-first');
let message2 = document.querySelector('.subscription-message-second');

form.onsubmit = function (evt) {
    console.log(evt);
    evt.preventDefault();
    message1.textContent = name1.value;
    message2.textContent = yourThoughts.value;

    const postDiv = document.createElement("div")
    postDiv.innerHTML(`
    <span>${name1.value}</span>
    <span>${yourThoughts.value}</span>
    `)
    
    document.querySelector('body > div:nth-child(2)').appendChild(postDiv)

}

