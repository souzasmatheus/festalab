class Party {
  constructor() {
    this.numberOfGuests;
    this.numberOfCakeHolders;
    this.numberOfBrigadeiros;
    this.numberOfGiftBoxes;
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

/*var party = new Party();
console.log(party.numberOfGuests);
party.numGuests = 20;
console.log(party.numberOfGuests);
console.log(`
numGiftBoxes: ${party.numberOfGiftBoxes},
numBrigadeiros: ${party.numberOfBrigadeiros}
`);
party.changeAmount(12, 'numberOfCakeHolders');
console.log(party.numberOfCakeHolders);
//party.setAmountToZero('numberOfCakeHolders');
//console.log(party.numberOfCakeHolders);
console.log(party.getItemTotal('numberOfCakeHolders'));*/

// DOM references
const option10 = document.querySelector('#option-10');
const option15 = document.querySelector('#option-15');
const option20 = document.querySelector('#option-20');

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
