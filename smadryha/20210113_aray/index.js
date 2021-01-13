let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[(styles.length - 1) / 2] = ('Classic')
const a = styles.shift()
// alert(styles);
styles.unshift("Rap", "Reggae")


console.log(styles);

function reverseName(name = '') {
    const lngh = name.length
    const array = []

    for (let index = 0; index < lngh; index++) {
        console.log(index);

        array[index] = name[lngh - 1 - index]
    }

    return array.join('')

}
debugger
console.log(reverseName("Sofiya"));


function info(name, surname, age) {
    name = "Sofiya";
    surname = "Madryha";
    age = 18;
    console.log("Hello, " + "my name is " + name);
}
info();


var arr = [1, 2, 3, 4, 5]
var callback = function (acc, el) {
    return acc + el;
};
var result = arr.reduce(callback, 0);
alert(result);