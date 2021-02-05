let customer;
customer = confirm ('Шановний клієнт, Вам виповнилося 18 років?');


let taryf;
taryf = 0;

if (customer) {
    question1 = confirm ('Ви вживаєте алкоголь?');
    if (question1) {
        taryf = taryf + 0,1;
    }

    question2 = confirm ('Ви палите сигарети?');
    if (question2) {
        taryf = taryf + 0,2;
    }

    question3 = confirm ('Ви займаєтеся спортом?');
    if (question3) {
        taryf = taryf - 0,4;
    }

    let age;
    age = prompt ('Скільки Вам виповнилося повних років?');
    if ( (30 < age) && (age < = 60) ) {
        taryf = taryf + 0,1;
    } else {
        if (age > = 60) {
            alert ('Вибачте, але ми, на жаль, не маємо стахових полісів для Вас');
        } else {
            if ( (20 < age) && (age < =30) ) {
                taryf = taryf + 0;
            } else {
                alert ('Вітаємо! Ви дуже крутий студент, адже попри всі п\'янки у вас залишилися гроші на страховку');
            }
        }
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