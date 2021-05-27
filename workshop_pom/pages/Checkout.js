import {Selector} from 'testcafe'

class Checkout {
    constructor(){
        this.finishBtn = Selector ('#finish')
        this.quantityItem = Selector ('div[class="cart_quantity"]')
        this.test = Selector ('div[class="cart_quantity"]')
       
        
    }
}


export default new Checkout()