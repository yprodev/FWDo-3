let name1 = document.querySelector('.subscription-name');
let yourThoughts = document.querySelector('.share')
let form = document.querySelector('.form');
let message1 = document.querySelector('.subscription-message-first');
let message2 = document.querySelector('.subscription-message-second');

form.onsubmit = function(evt) {
    evt.preventDefault();
    message1.textContent = name1.value;
    message2.textContent = yourThoughts.value;
    
}

