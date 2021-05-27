import {Selector} from 'testcafe'

class Cart {
    constructor(){
        this.checkoutBtn = Selector ('#checkout')
        
    }
}


export default new Cart()