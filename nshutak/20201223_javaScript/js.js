let customer;
customer = confirm ('Шановний клієнт, Вам виповнилося 18 років?');

let taryf;
taryf = 0;
if (customer === true) {
    question1 = confirm ('Ви вживаєте алкологь?');
    if (question1 === true) {
        taryf = taryf + 0,1;
    }

    question2 = confirm ('Ви палите сигарети?');
    if (question1 === true) {
        taryf = taryf + 0,2;
    }

    question3 = confirm ('Ви займаєтеся спортом?');
    if (question3 === true) {
        taryf = taryf - 0,4;
    }

} else {
    let child;
    child = prompt ('Оскільки Вам немає 18 років, введіть Ваш точний вік');
    if (child <= 10) {
        alert ('Поклич, будь ласка, дорослих.')
    } else {
        prompt ('Ми не маємо поки жодного виду страхування для тебе. Можливо в тебе є якісь ідеї?')
    }

}