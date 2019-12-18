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
    this[prop] = this[prop] + num;
  }
}

var party = new Party();
console.log(party.numberOfGuests);
party.numGuests = 20;
console.log(party.numberOfGuests);
console.log(`
numGiftBoxes: ${party.numberOfGiftBoxes},
numBrigadeiros: ${party.numberOfBrigadeiros}
`);
party.changeAmount(-1, 'numberOfCakeHolders');
console.log(party.numberOfCakeHolders);
