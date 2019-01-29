const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const colon = document.getElementById("colon");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");
const digits = document.getElementsByClassName("digit");
const digitsArray = Array.from(digits);
const buttonElement = document.getElementById("btn");

let timer = ""; // If this is inside the EventListener, then the clearInterval() (see ending(), below) cannot see it.
let buttonState = 0; // Allows two button states

buttonElement.addEventListener("click", function(event) {
  if (buttonState === 0) {
    buttonState = 1;
    timer = setInterval(tick, 10);
    buttonElement.style.visibility = "hidden"; // Timer function can sort of stack on itself if the button is pressed repeatedly. Hiding the button prevents this (and looks pretty good, also).
  } else {
    // If the button was in the "<<< Again? >>>" state, this will reset the digits to black dashes and reset the button.
    buttonState = 0;
    msTens.textContent = "-";
    msTens.style.color = "black";
    msHundreds.textContent = "-";
    msHundreds.style.color = "black";
    secondOnes.textContent = "-";
    secondOnes.style.color = "black";
    secondTens.textContent = "-";
    secondTens.style.color = "black";
    buttonElement.textContent = "Taste the Rainbow";
  }
});

let counterA = 0;
let counterB = 0;
let counterC = 0;

function tick() {
  if (counterC === 0 && counterB === 0 && counterA === 0) {
    // Sets all the dashes to zeroes when the timer starts.
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
  }
  if (counterA !== 9) {
    // If 0-8, count up by 1; IF 9, go back to 0.
    counterA += 1;
    msTens.textContent = counterA;
  } else {
    counterA -= 9;
    msTens.textContent = counterA;
    rainbow(); // See function below
    if (counterB !== 9) {
      counterB += 1;
      msHundreds.textContent = counterB;
    } else {
      counterB -= 9;
      msHundreds.textContent = counterB;
      if (counterC !== 9) {
        counterC += 1;
        secondOnes.textContent = counterC;
      } else {
        counterC -= 9;
        secondOnes.textContent = counterC;
        secondTens.textContent = 1;
        ending();
      }
    }
  }
}

const ending = function() {
  digitsArray.forEach(element => (element.style.color = "red")); // Turns final numbers red
  clearInterval(timer); // Stops timer function
  buttonElement.textContent = "<<< Again? >>>"; // Changes button text and makes button visible again
  buttonElement.style.visibility = "visible";
};

const rainbow = function() {
  // Randomly changes the color of each visible element
  msTens.style.color = htmlColors[Math.floor(Math.random() * 139)];
  msHundreds.style.color = htmlColors[Math.floor(Math.random() * 139)];
  colon.style.color = htmlColors[Math.floor(Math.random() * 139)];
  secondOnes.style.color = htmlColors[Math.floor(Math.random() * 139)];
  secondTens.style.color = htmlColors[Math.floor(Math.random() * 139)];
};

const htmlColors = [
  // All 140 named HTML/CSS colors
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "Darkorange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen"
];
