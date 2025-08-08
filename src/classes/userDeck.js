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

  correctWord(word) {
    this.deck = this.deck.map(item => {
      if(item.word === word.word) {
        console.log('should iterate and add')
        return{...item, correctCount: item.correctCount + 1, hidden: true}
      } else {
        console.log('fail');
        return item;
      }
    });
  }
  //   for (let i in this.deck) {
  //     if (this.deck[i] === word) {
  //       this.deck[i].correctCount += 1;
  //     }
  //   }
  // }
}
