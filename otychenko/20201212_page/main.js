let userName = document.getElementById('userName');
let formWrapper = document.getElementById('form');
let formGet = document.createElement('div');
let but = document.getElementById('subButton');
formWrapper.after(formGet);
let userMessage = document.getElementById('userMessage');
let checkbox =document.getElementById('adlabel');
let togButton = document.getElementById('togButton')

function getDataFromForm() {
    return {
        userName: userName.value,
        userMessage: userMessage.value,
        agreement: agreement.checked
    }
}


const post = {
    "author": "Сlown",
    "date": "Z pokon Vekov",
    "likes": "vse",
    "title": "Dinamicheskaya tipizatsiya luchshe staticheskoy!",
    "content": "Chto ty tam lyapnul, kloun? Idi syuda! Ty kuda pobezhal?"
}

function sendData(data) {
    // fetch('http:url') // GET
    fetch('http:url', { method: "POST", body: JSON.stringify(data) }) // P:OST
}

let func = () => {

    formGet.className = "afterForm";
    formGet.innerHTML = `UserName: ${userName.value}<br>UserMessage: ${userMessage.value}<br>Box Checked: ${checkbox.checked}`;
    userName.value = '';
    userMessage.value = '';
    checkbox.checked = false;

    sendData(post)
};




let togleFunk = () => {
    document.body.classList.toggle('bodyForToggle')
}

but.onclick = func;
togButton.onclick = togleFunk;