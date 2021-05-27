
import  {Selector} from 'testcafe'

class ProductsPage {
    constructor(){
        this.addBackpack = Selector ('#add-to-cart-sauce-labs-backpack')
        this.sauceLabsbackpackLabel = Selector ('div[class="inventory_item_name"]')
        this.burguerbtn = Selector ('#react-burger-menu-btn')
        this.logoutbtn = Selector ('#logout_sidebar_link')
        this.addProducts = Selector ('button[name]')
        this.shoppingCartLink = Selector ('a[class="shopping_cart_link"]')

    }

}

export default new ProductsPage()