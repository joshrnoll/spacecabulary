export class UserDeck {
  constructor() {
    if (localStorage.getItem("userDeck")) {
      this.deck = JSON.parse(localStorage.getItem("userDeck"));
    } else {
      this.deck = [
        {
          word: "testword",
          definition: "some definition",
          timeLastCorrect: new Date(),
          correctCount: 0,
          hidden: false,
        },
        {
          word: "testword2",
          definition: "some definition2",
          timeLastCorrect: new Date(),
          correctCount: 0,
          hidden: false,
        },
      ];
    }
  }
  getDeck() {
    return this.deck;
  }
  addWord(word) {
    this.deck.push(word);
    // let wordsString = JSON.stringify(this.words)
    // localStorage.setItem('userDeck', wordsString)
  }

  correctWord(word) {
    for (let i in this.deck) {
      if (this.deck[i] === word) {
        this.deck[i].correctCount += 1;
      }
    }
  }
}
