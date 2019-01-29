let count = 0;

const timer = setInterval(tick, 10);

const ten = function() {
  console.log("TEST");
};
const hundred = function() {
  console.log("TESTER");
};
const thousand = function() {
  console.log("TESTERER");
};
const tenThousand = function() {
  console.log("TESTERERER");
  clearInterval(timer);
};

function tick() {
  count += 10;
  console.log(count);
  if (Number.isInteger(count / 10000) === true) {
    ten();
    hundred();
    thousand();
    tenThousand();
  } else if (Number.isInteger(count / 1000) === true) {
    ten();
    hundred();
    thousand();
  } else if (Number.isInteger(count / 100) === true) {
    ten();
    hundred();
  } else if (Number.isInteger(count / 10) === true) {
    ten();
  }
}
