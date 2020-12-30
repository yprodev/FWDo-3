let adult = confirm('Вам виповнилось 18 років?');

if (adult) {
    alert = confirm('Чи вживаєте Ви алкоголь?');
    console.log (adult + 0,1);
    alert = confirm('Ви курите?');
    console.log (adult + 0,2);
    alert = confirm('Ви займаєтесь спортом?');
    console.log (adult - 0,4);

    let old = prompt('Скільки Вам років?');
    old = "..";
} else {
    let ageChild = prompt('Скільки Вам років?');
    if (ageChild < 10) {
        alert ('Покличте своїх батьків!');
    } else if (ageChild == 10, 11, 12, 13, 14, 15, 16, 17, 18) {
        alert ('Дочекайтеся повноліття для перегляду інформації на цьому сайті...');
    }
}








