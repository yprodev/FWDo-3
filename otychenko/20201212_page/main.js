let userName = document.getElementById('userName');
let formWrapper = document.getElementById('form');
let formGet = document.createElement('div');
let but = document.getElementById('subButton');
formWrapper.after(formGet);
let userMessage = document.getElementById('userMessage');
let checkbox =document.getElementById('adlabel');
let togButton = document.getElementById('togButton')


let func = () => {
    formGet.className = "afterForm";
    formGet.innerHTML = `UserName: ${userName.value}<br>UserMessage: ${userMessage.value}<br>Box Checked: ${checkbox.checked}`;
    userName.value = '';
    userMessage.value = '';
    checkbox.checked = false;
};

let togleFunk = () => {
    document.body.classList.toggle('bodyForToggle')
}

but.onclick = func;
togButton.onclick = togleFunk;