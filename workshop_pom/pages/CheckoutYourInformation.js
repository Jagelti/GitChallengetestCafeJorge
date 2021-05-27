import {Selector} from 'testcafe'

class CheckoutYourInformation {
    constructor(){
        this.firstName = Selector ('#first-name')
        this.lastName = Selector ('#last-name')
        this.postalCode = Selector ('#postal-code')
        this.continueBtn = Selector ('#continue')
        this.errorLastName = Selector('h3')
        
    }
}


export default new CheckoutYourInformation()