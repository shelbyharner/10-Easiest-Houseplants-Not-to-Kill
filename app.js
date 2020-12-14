console.log("Greetings Earthlings");

var myVariableName = "Greetings Earthlings";
console.log(myVariableName);

myVariableName = "Farewell planet Earth";
console.log(myVariableName);

//Display greeting based on current time
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.write(greeting);

var promptQuestion = "What is your favorite houseplant?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;

if (response === "Snake Plant") {
    alertMessage = "What a beautiful plant!";
} else if (response === "Pothos Plant") {
    alertMessage = "Great choice!";
} else if (response === "Prayer Plant") {
    alertMessage = "That's my favorite too!";
} else {
    alertMessage = "All houseplants need love!"
}
alert(alertMessage);
