let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function returnRandomHands() {
  let randoms = Math.floor(Math.random() * 3) + 1;
  if (randoms === 1) {
    return hands[0];
  } else if (randoms === 2) {
    return hands[1];
  } else {
    return hands[2];
  }
}

console.log(returnRandomHands());
