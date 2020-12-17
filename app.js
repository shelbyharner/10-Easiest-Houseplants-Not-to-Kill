console.log("Greetings Earthlings");

var myVariableName = "Greetings Earthlings";
console.log(myVariableName);

myVariableName = "Farewell planet Earth";
console.log(myVariableName);

function  validateUserPassword() {
    var storedPassword = "yes";
    var yesOrNo; 
    
    do  {
        yesOrNo = prompt("Do you love houseplants? Yes or  No?");
        yesOrNo = yesOrNo.toLowerCase();
    }while(yesOrNo !== storedPassword);
}

validateUserPassword();

function addWatercanToDocument() {
    var numberOfWatercan = prompt("How many watering cans do you want?");
    for (var i = 0; i < numberOfWatercan; i++) {
        document.write("<img src=\"water_can.jpg\">");
    }
}

addWatercanToDocument();


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

sayGreeting(hourNow);

//Pop up question to users visiting my page
var promptQuestion = "What is your favorite houseplant?";
response = prompt(promptQuestion);
response = response.toLowerCase();
var alertMessage;
console.log(response);

function promptUser(alertMessage) {
    if (alertMessage === "snake plant") {
        response = "What a beautiful plant!";
    } else if (alertMessage === "pothos plant") {
        response = "Great choice!";
    } else if (alertMessage === "prayer plant") {
        response = "That's my favorite too!";
    } else {
        response = "All houseplants need love!"
    }
    alert(response);
}

promptUser(response);



