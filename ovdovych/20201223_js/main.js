let adult = confirm('Вам виповнилось 18 років?');

if (adult) {
    let alcohol = confirm('Чи вживаєте Ви алкоголь?');
    if (alcohol) {
        console.log(adult + 0.1);
    }
    let smoke = confirm('Ви курите?');
    if (smoke) {
        console.log(smoke + 0.2);
    }
    let sport = confirm('Ви займаєтесь спортом?');
    if (sport) {
        console.log(sport - 0.4);
    }
    let old = prompt('Скільки Вам років?');
    if (old >= 30) {
        console.log(old + 0.1);
    } 
    if (old >= 60) {
        alert ('На жаль, ми немаємо страхових продуктів для Вас')
    }
    if (old <= 20) {
        alert ('Вітаємо!!! Ви перший студент, який має кошти на страхування!')
    }
    let yourTariff;
    if (yourTariff = old <= 60) {
        alert ('Ваш тариф ' + [adult + smoke + sport + old]);
    }
} else {
    let ageChild = prompt('Скільки Вам років?');
    if (ageChild < 10) {
        alert ('Покличте своїх батьків!');
    } else if (ageChild = 10-17) {
        alert ('Дочекайтеся повноліття для перегляду інформації на цьому сайті...');
    }
}