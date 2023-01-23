const resultMeike = document.querySelector('#resultMeike');
const resultJohn = document.querySelector('#resultJohn');

let winner = document.querySelector('#winner');


const ageMeike = 34;
const heightMeike = 168;
const pointsMeike = (ageMeike * 5 + heightMeike);

const ageJohn = 22;
const heightJohn = 170;
const pointsJohn = (ageJohn * 5 + heightJohn);


function game() {
  resultMeike.innerHTML = pointsMeike;
  resultJohn.innerHTML = pointsJohn;

  if (pointsMeike > pointsJohn) {
    winner.innerHTML = " Meike hat gewonnen!";
  } else if (pointsMeike < pointsJohn) {
    winner.innerHTML = " John hat gewonnen!";
  } else if (pointsMeike === pointsJohn) {
    winner.innerHTML = " Unentschieden..";
  } else {
    winner.innerHTML = " Etwas ist schief gelaufen..";
  }
}

game();
