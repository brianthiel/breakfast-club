class DeckOfCards {
  constructor() {
    this.deck = [];
    this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    this.numberOfPlayers = 5;
  }

  // using the data provided (suits and values) construct a deck of 52 cards
  createDeck() {
    for (let suit of this.suits) {
      for (let value of this.values) {
        let newObject = {};
        newObject[suit] = value;
        this.deck.push(newObject);
      }
    }
    // You would probably want to check for unique values, no duplicates
    // What happens if you'd like to add Two Jokers?
  }

  // feel free to use the shuffle methods that we defined previously
  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);

      let temp = this.deck[i];
      this.deck[i] = this.deck[randomIndex];
      this.deck[randomIndex] = temp;
    }
  }

  // Deal five cards, when you've hit the end of the deck and there are less than 5 to deal return a notification
  dealFive() {
    // Create and object of players
    let objectOfPlayers = {};
    let counter = 1;
    // Key reprsents their position
    for (let i = 1; i <= this.numberOfPlayers; i++) {
      objectOfPlayers[i] = [];
    }
    
    while(this.deck.length !== 0 && counter < 6) {
        let topCard = this.deck.pop();
        objectOfPlayers[counter].push(topCard);
        counter++;
    }
    console.log(objectOfPlayers)
    console.log(`There are ${this.deck.length} cards left in the deck`)
    counter = 0;
    return objectOfPlayers
  }
}

module.exports = DeckOfCards;

const deck1 = new DeckOfCards()
console.log(deck1.deck)
deck1.createDeck()
console.log(deck1.deck)
console.log(deck1.deck.length)
deck1.shuffle()
console.log(deck1.deck)
deck1.dealFive()
console.log(deck1.deck.length)
deck1.dealFive()
console.log(deck1.deck.length)
deck1.dealFive()
console.log(deck1.deck.length)