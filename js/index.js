class Party {
  constructor() {
    this.numberOfGuests;
    this.numberOfCakeHolders = 0;
    this.numberOfBrigadeiros = 0;
    this.numberOfGiftBoxes = 0;
  }

  set numGuests(num) {
    const setUp = {
      10: {
        numberOfBrigadeiros: 50,
        numberOfGiftBoxes: 10
      },
      15: {
        numberOfBrigadeiros: 75,
        numberOfGiftBoxes: 15
      },
      20: {
        numberOfBrigadeiros: 100,
        numberOfGiftBoxes: 20
      }
    };

    this.numberOfGuests = num;
    this.numberOfCakeHolders = 1;
    this.numberOfBrigadeiros = setUp[num].numberOfBrigadeiros;
    this.numberOfGiftBoxes = setUp[num].numberOfGiftBoxes;
  }

  changeAmount(num, prop) {
    let result = this[prop] + num;
    this[prop] = result < 0 ? 0 : result;
  }

  setAmountToZero(prop) {
    this[prop] = 0;
  }

  getItemTotal(prop) {
    const prices = {
      numberOfCakeHolders: '50',
      numberOfBrigadeiros: '0.1',
      numberOfGiftBoxes: '5'
    };

    return eval(String(this[prop]) * prices[prop]);
  }
}

// Instanciate Party
const party = new Party();

// DOM references
const options = document.querySelectorAll(
  '.guests-container .options-container p'
);

const cakeCloseBtn = document.querySelector('#cake-holder .close-btn');
const cakeMinusBtn = document.querySelector('#cake-holder .minus');
const cakeQtyDisplay = document.querySelector('#cake-holder .item-qty');
const cakePlusBtn = document.querySelector('#cake-holder .plus');
const cakeTotalSum = document.querySelector(
  '#cake-holder .item-total-sum span'
);

const brigadeiroCloseBtn = document.querySelector('#brigadeiro .close-btn');
const brigadeiroMinusBtn = document.querySelector('#brigadeiro .minus');
const brigadeiroQtyDisplay = document.querySelector('#brigadeiro .item-qty');
const brigadeiroPlusBtn = document.querySelector('#brigadeiro .plus');
const brigadeiroTotalSum = document.querySelector(
  '#brigadeiro .item-total-sum span'
);

const giftBoxCloseBtn = document.querySelector('#gift-box .close-btn');
const giftBoxMinusBtn = document.querySelector('#gift-box .minus');
const giftBoxQtyDisplay = document.querySelector('#gift-box .item-qty');
const giftBoxPlusBtn = document.querySelector('#gift-box .plus');
const giftBoxTotalSum = document.querySelector(
  '#gift-box .item-total-sum span'
);

const totalSum = document.querySelector(
  '.total-container .total-sum-container span'
);

// Functionality
options.forEach(option => {
  option.addEventListener('click', () => {
    party.numGuests = option.innerHTML;
    cakeQtyDisplay.value = party.numberOfCakeHolders;
    brigadeiroQtyDisplay.value = party.numberOfBrigadeiros;
    giftBoxQtyDisplay.value = party.numberOfGiftBoxes;

    const cakeSum = party.getItemTotal('numberOfCakeHolders');
    const brigadeiroSum = party.getItemTotal('numberOfBrigadeiros');
    const giftBoxSum = party.getItemTotal('numberOfGiftBoxes');

    cakeTotalSum.innerHTML = cakeSum;
    brigadeiroTotalSum.innerHTML = brigadeiroSum;
    giftBoxTotalSum.innerHTML = giftBoxSum;

    totalSum.innerHTML = cakeSum + brigadeiroSum + giftBoxSum;
  });
});

cakeMinusBtn.addEventListener('click', () => {
  party.changeAmount(-1, 'numberOfCakeHolders');

  cakeQtyDisplay.value = party.numberOfCakeHolders;

  const cakeSum = party.getItemTotal('numberOfCakeHolders');
  const brigadeiroSum = party.getItemTotal('numberOfBrigadeiros');
  const giftBoxSum = party.getItemTotal('numberOfGiftBoxes');

  cakeTotalSum.innerHTML = cakeSum;

  totalSum.innerHTML = cakeSum + brigadeiroSum + giftBoxSum;
});

cakePlusBtn.addEventListener('click', () => {
  party.changeAmount(1, 'numberOfCakeHolders');

  cakeQtyDisplay.value = party.numberOfCakeHolders;

  const cakeSum = party.getItemTotal('numberOfCakeHolders');
  const brigadeiroSum = party.getItemTotal('numberOfBrigadeiros');
  const giftBoxSum = party.getItemTotal('numberOfGiftBoxes');

  cakeTotalSum.innerHTML = cakeSum;

  totalSum.innerHTML = cakeSum + brigadeiroSum + giftBoxSum;
});