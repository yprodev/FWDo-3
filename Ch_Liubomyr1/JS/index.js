var years = confirm('ви повнолітній?');
    console.log(years);

if (years) {
    var smoke1 = confirm ("чи вживаєте ви алкоголь");
        if (smoke1) {
            console.log(smoke1 + 0.1);
        }

    var smoke2 = confirm ("курите?");
        if (smoke2) {
            console.log(smoke2 + 0.2);
        }

    var smoke3 = confirm ("займаєтеся спортом?");
        if (smoke3) {
            console.log(smoke3 - 0.4);
        }

    var smoke4 = prompt ("Скільки вам років?");
        if (smoke4 >= 30) {
            console.log(smoke4 + 0.1);
        }

    if (smoke4 >=18 && smoke4 <=20){
        alert ("ВІТАЄМО ви перший студент який має доляри на страхівку")
    }
    
    if (smoke4 >= 60) {
        alert ('Вибачте, але ми, на жаль, не маємо стахових полісів для Вас');
    }

        if (result = smoke4 <=60) {
        alert ('Ваш тариф ' + [smoke1 + smoke2 + smoke3 + smoke4])
    }
}

else{
    var old = prompt ("скільки вам років");
    console.log(old);

    if (old >= 10 && old <= 18){
    alert ("Де твої Ancestors") 

    }else{(old <=9)
    alert ("Поклич предків!")}
}
