export class UserDeck {
    constructor() {        
        if(localStorage.getItem('userDeck')) {
            this.words = JSON.parse(localStorage.getItem('userDeck'))
        }else{
            this.words = [
                // word: ,
                // definition: ,
                // timeLastCorrect: ,
                // correctCount: ,
                // hidden:Boolean,
            ]
        }        
    }
    addWord(word) {
        this.words.push(word) 
        // let wordsString = JSON.stringify(this.words)
        // localStorage.setItem('userDeck', wordsString)
    }
    hideWord(word) {
        for(let i in this.words) {
            if(this.words[i] === word) {
                this.words[i].hidden = true
            }
        }
    }
    correctWord(word) {
        for(let i in this.words) {
            if(this.words[i] === word) {
                this.words[i].correctCount += 1                
            }
        }
    }
}