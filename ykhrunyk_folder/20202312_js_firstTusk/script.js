const visitorAge = 'Are you an adult?';
let tarif = 1;
let firstQuetionFunction = function () {
    let firstAnswer = confirm(visitorAge);
    if (firstAnswer == true) {
        const secondQuetionText = 'Do you drink alcohol?';
        let secondQuetion = confirm(secondQuetionText);
        if (secondQuetion == true) {
            tarif += 0.1;
        }
        const thirdQuetionText = 'are you smoking?';
        let thirdQuetion = confirm(thirdQuetionText);
        if (thirdQuetion == true) {
            tarif += 0.2;
        }
        const forthQuetionText = 'Are you sportsmen?';
        let forthQuetion = confirm(forthQuetionText);
        if (forthQuetion == true) {
            tarif -= 0.4;
        }
        const fifthQuetionText = 'How old are you?';
        let fifthQuetion = prompt(fifthQuetionText);
        if (fifthQuetion >= 0, fifthQuetion < 18) {
            let alerMessage = 'dont lie in the first quation';
            alert(alerMessage);
        } else {
            if (fifthQuetion >= 18, fifthQuetion < 20) {
                let alerMessage1 = 'you are the first student with money for insureanse' + tarif;
                alert(alerMessage1);
            } else {
                if (fifthQuetion >= 20, fifthQuetion < 30) {
                    let alerMessage2 = 'your tarif is = ' + tarif;
                    alert(alerMessage2);
                } else {
                    if (fifthQuetion >= 30, fifthQuetion <= 60) {
                        tarif += 0.1;
                        let alerMessage3 = 'your tarif is = ' + tarif;
                        alert(alerMessage3);
                    } else {
                        if (fifthQuetion > 60) {
                            let alerMessage4 = 'you are too old, just dont leave home!';
                            alert(alerMessage4);
                        }
                    }
                }
            }
        }
    } else {
        let askAgeText = 'how old are you?'
        const askAge = prompt(askAgeText);
        if (askAge < 10) {
            let callParenth = 'call your parenth, kid';
            alert(callParenth);
        } else {
            if (askAge >= 10, askAge <= 18) {
                callParenth = 'be carefull, dont die';
                alert(callParenth);
            }
        }
    }
}
firstQuetionFunction();
