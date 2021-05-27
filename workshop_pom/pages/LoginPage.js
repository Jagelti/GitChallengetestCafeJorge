import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.userName = Selector ('#user-name')
        this.passwordUser = Selector('#password')
        this.loginButton = Selector ('#login-button')
        this.acceptedUsernamesAre = Selector ('h4')
    }
}


export default new LoginPage()