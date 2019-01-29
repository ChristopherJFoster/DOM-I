const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const colon = document.getElementById("colon");
const secondOnes = document.getElementById("secondOnes");
const secondTens = document.getElementById("secondTens");

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
        clearInterval(timer);
      }
    }
  }
}
