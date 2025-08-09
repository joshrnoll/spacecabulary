export class UserDeck {
  constructor() {
    if (localStorage.getItem("userDeck")) {
      this.deck = JSON.parse(localStorage.getItem("userDeck"));
    } else {
      this.deck = [];
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

  markCorrectWord(word) {
    this.deck = this.deck.map((item) => {
      if (item.word === word.word) {
        return { ...item, correctCount: item.correctCount + 1, hidden: true };
      } else {
        return item;
      }
    });
  }
}
