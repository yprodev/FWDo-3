let adult = confirm('Вам виповнилось 18 років?');
let taryf = 0.3;

if (adult) {
    let isAlcohol = confirm('Чи вживаєте Ви алкоголь?');
    if (isAlcohol) {
        taryf = taryf + 0.1
        console.log(taryf);
    }
    let smoke = confirm('Ви курите?');
    if (smoke) {
        taryf = taryf + 0.2
        console.log(taryf);

    }
    let sport = confirm('Ви займаєтесь спортом?');
    if (sport) {
        taryf = taryf - 0.4
        console.log(taryf);
    }
    let old = +prompt('Скільки Вам років?');
    if (old >= 30) {
        taryf = taryf + 0.1
        console.log(taryf);
    }
    if (old >= 60) {
        alert('На жаль, ми немаємо страхових продуктів для Вас')
    }
    if (old <= 20) {

        alert('Вітаємо!!! Ви перший студент, який має кошти на страхування!')
    }
    let yourTariff;
    if (old <= 60) {
        alert('Ваш тариф ' + taryf);
    }
} else {
    let ageChild = +prompt('Скільки Вам років?');
    if (ageChild < 10) {
        alert('Покличте своїх батьків!');
    } else if (ageChild > 10 && ageChild <= 17) {
        alert('Дочекайтеся повноліття для перегляду інформації на цьому сайті...');
    }
}