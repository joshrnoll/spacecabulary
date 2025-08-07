export default class UserDeck {
    constructor() {
        if(localStorage.getItem('userDeck')){
            this.words = JSON.parse(localStorage.getItem).userDeck
        }else{
            this.words = []
        }        
    }
    method1() {

    }
}