dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("test"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

///////////////////////////////////////////////////////////////////////////

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}



//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
  console.log(result)
};

// Truth questions
var truthQuestions = [
	"Wat is het ergste dat je ooit hebt gedaan?",
	"Wat is je grootste angst?",
  "Als je een fictief personage zou kunnen daten, wie zou dat dan zijn?",
  "Hou je van grote dingen?",
  "Wat is de vreemdste droom die je ooit hebt gehad?",
  "Wat is de ergste fysieke pijn die je ooit hebt meegemaakt?",
  "Wat is je grootste onzekerheid?",
  "Plas jij onder de douche?",
  "Heb jij een verborgen talent?",
  "Heb je fetisjen (als ja Wat)?",
  "Wat is je type?",
  "Ben je ooit ontslagen van een baan?",
  "Als je een geest zou ontmoeten, wat zouden dan je drie wensen zijn?",
  "Wat is het gemeenste dat je ooit over iemand anders hebt gezegd?",
  "Wat is het domste dat je ooit hebt gedaan?",
  "Wat is een geheim dat je nog nooit aan iemand hebt verteld?",
  "Wat is je favoriete deel van je lichaam? Waarom?",
  "Ben je ooit vreemd gegaan?",

];

// Dare questions
var dareQuestions = [
	"Twerk even",
	"Doe ijsblokjes in je broek",
	"Doe een handstand!",
	"Update je relatiestatus naar 'verloofd' op Facebook",
	"Post de oudste selfie op je telefoon op Instagram Stories",
  "Eet een eetlepel zout.",
  "Geef de persoon links van je een kus op het voorhoofd.",
  "Dans één minuut zonder muziek",
  "Laat de rest van de groep een DM sturen naar iemand op jouw Instagram",
  "Roep het eerste woord uit dat in je opkomt",
  "Probeer je elleboog met je neus te raken",
  "Stuur een sexy berichtje naar de laatste persoon in je telefoonlijst",
  "Laat iedereen je DM's zien.",
  "Zing een solo van 30 seconden van een nummer naar keuze",
  "Sta op en tewerk een minuutje in het midden van de kamer!",
  "Kies een dier (allesbehalve een huisdier) en speel het uit, totdat je vrienden raden wat het is!",
  "Eet een stuk fruit zonder je handen te gebruiken.",
  "Moonwalk voor 1 minuut.",
  "Fluister iets vies tegen de persoon links van je.",
  "Bel de 3e contactpersoon op je telefoon en zing ze 30 seconden van een nummer dat de groep kiest!",
  "Geef een voetmassage aan de persoon rechts van je.",


];

// Get truth button element and add event listener
var truthButton = document.getElementById("truth-btn");
truthButton.addEventListener("click", function() {
	// Get random truth question
	var randomIndex = Math.floor(Math.random() * truthQuestions.length);
	var question = truthQuestions[randomIndex];
	// Show question in alert box
	alert(question);
});

// Get dare button element and add event listener
var dareButton = document.getElementById("dare-btn");
dareButton.addEventListener("click", function() {
	// Get random dare question
	var randomIndex = Math.floor(Math.random() * dareQuestions.length);
	var question = dareQuestions[randomIndex];
	// Show question in alert box
	alert(question);
});


