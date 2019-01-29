const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const colon = document.getElementById("colon");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");
const digits = document.getElementsByClassName("digit");
const digitsArray = Array.from(digits);

let counterA = 0;
let counterB = 0;
let counterC = 0;

const timer = setInterval(tick, 10);

function tick() {
  if (counterC === 0 && counterB === 0 && counterA === 0) {
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
  }
  if (counterA !== 9) {
    counterA += 1;
    msTens.textContent = counterA;
  } else {
    counterA -= 9;
    msTens.textContent = counterA;
    rainbow();
    resize();
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
  digitsArray.forEach(element => (element.style.color = "red"));
  digitsArray.forEach(element => (element.style.fontSize = "600px"));
  clearInterval(timer);
};

const rainbow = function() {
  msTens.style.color = htmlColors[Math.floor(Math.random() * 139)];
  msHundreds.style.color = htmlColors[Math.floor(Math.random() * 139)];
  colon.style.color = htmlColors[Math.floor(Math.random() * 139)];
  secondOnes.style.color = htmlColors[Math.floor(Math.random() * 139)];
  secondTens.style.color = htmlColors[Math.floor(Math.random() * 139)];
};

const resize = function() {
  msTens.style.fontSize = `${Math.floor(Math.random() * 299 + 300)}px`;
  msHundreds.style.fontSize = `${Math.floor(Math.random() * 299 + 300)}px`;
  colon.style.fontSize = `${Math.floor(Math.random() * 299 + 300)}px`;
  secondOnes.style.fontSize = `${Math.floor(Math.random() * 299 + 300)}px`;
  secondTens.style.fontSize = `${Math.floor(Math.random() * 299 + 300)}px`;
};

const htmlColors = [
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
