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
};

// Truth questions
var truthQuestions = [
	"What is the most embarrassing thing you've ever done?",
	"What is the craziest thing you've ever done?",
	"What is your biggest fear?",
	"What is your deepest secret?",
	"What is the most difficult decision you've ever had to make?",
];

// Dare questions
var dareQuestions = [
	"Do your best dance move!",
	"Sing a song in front of everyone!",
	"Do a handstand!",
	"Eat a spoonful of mustard!",
	"Make a funny face and take a selfie!",
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


