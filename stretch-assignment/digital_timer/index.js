let count = 0;

const timer = setInterval(tick, 1000);

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
  //clearInterval(timer);
};

function tick() {
  switch (count) {
    case 10000:
      ten();
      hundred();
      thousand();
      tenThousand();
      break;
    case 1000:
      ten();
      hundred();
      thousand();
      break;
    case 100:
      ten();
      hundred();
      break;
    case 10:
      ten();
      break;
  }
  count += 10;
}

tick();
