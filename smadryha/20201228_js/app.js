
result = confirm("Are you 18 years old?");



if (result) {
    let firstQuestion = confirm("Do you drink alcohol?");


    let tariff = 0;
    let tariff1;
    let tariff2;
    let tariff3;
    let tariff4;

    if (firstQuestion) {
        tariff1 = tariff + 0.1;
    }
    let secondQuestion = confirm("Do you smoke?");
    if (secondQuestion) {
         tariff2 = tariff1 + 0.2;
    }
    let thirdQuestion = confirm("Do you do sport exercixe?");
    if (thirdQuestion) {
         tariff3 = tariff2 - 0.4;

    }
    let fourthQuestion = prompt("How old are you?");
    if (fourthQuestion > 30 ) {
        tariff4 = tariff3 + 0.3;
        alert('Your tariff ' + tariff4)
    }

    if (fourthQuestion <= 20) {
        alert("Congratulations - you are the first student who has money for insurance")
    }
    if (fourthQuestion > 60) {
        alert('There are no products for you ')
    }
} else {
    let anotherQuestion = prompt("How old are you?")
    if (anotherQuestion < 10) {
        alert('Call the parents')
    }
    if (anotherQuestion > 10. < 18) {
        alert('Write to us')

    }


}



