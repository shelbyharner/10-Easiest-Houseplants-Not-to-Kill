console.log("Greetings Earthlings");

var myVariableName = "Greetings Earthlings";
console.log(myVariableName);

myVariableName = "Farewell planet Earth";
console.log(myVariableName);

//Display greeting based on current time
var today = new Date();
var hourNow = today.getHours();
var greeting;

function sayGreeting(hourNow) {

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.getElementById("web-greeting").innerHTML = greeting;
}

sayGreeting(greeting);

var promptQuestion = "What is your favorite houseplant?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;

if (response === "snake plant") {
    alertMessage = "What a beautiful plant!";
} else if (response === "pothos plant") {
    alertMessage = "Great choice!";
} else if (response === "prayer plant") {
    alertMessage = "That's my favorite too!";
} else {
    alertMessage = "All houseplants need love!"
}
alert(alertMessage);

function navAction () {
    var navHighlight = document.getElementById("navHighlight");
    if (navHighlight.className === "active") {
        navHighlight.className += "responsive";
    } else {
        navHighlight.className = "topnav";
    }
}

