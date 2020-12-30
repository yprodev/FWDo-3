var years = confirm('ви повнолітній?');
    console.log(years);
if (years) {
    var smoke1 = confirm ("чи вживаєте ви алкоголь");
    var smoke2 = confirm ("курите?");
    var smoke3 = confirm ("займаєтеся спортом?");
    var smoke4 = prompt ("Скільки вам років?");
        smoke1 = 1;
        smoke2 = 1;
        smoke3 = 1;
        smoke4 = 1; 
        var result;
        result = smoke4 + smoke3 + smoke2 + smoke1;
        document.write(result);  
}else{
    var old = prompt ("скільки вам років");
    console.log(old);
    if (old < 18){
       alert ("Де твої Ancestors") 
}
}
