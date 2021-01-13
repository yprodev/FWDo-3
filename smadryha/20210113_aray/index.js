let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[(styles.length - 1) / 2] = ('Classic')
alert(styles.shift());
styles.unshift("Rap", "Reggae")


console.log(styles);

function reverseName(name) {
    return name.split("").reverse().join("")
}
console.log(reverseName("Sofiya")); 


function info (name,surname, age){
    name = "Sofiya";
    surname= "Madryha";
    age =18;
    console.log("Hello, "+ "my name is " + name);
}
info();