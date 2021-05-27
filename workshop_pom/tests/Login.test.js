import loginPage from '../pages/LoginPage'
import productsPage from '../pages/ProductsPage'
import cart from '../pages/Cart'
import checkout from '../pages/Checkout'
import checkoutYourInformation from '../pages/CheckoutYourInformation'
import { Selector } from 'testcafe'




fixture('Login')
    .page('https://www.saucedemo.com/')


    test('Login with a valid user', async t => {
        await t.
           typeText(loginPage.userName, "standard_user", {paste:true}) 
           .typeText(loginPage.passwordUser, "secret_sauce", {paste:true})
           .click(loginPage.loginButton)

           await t.expect(loginPage.acceptedUsernamesAre.exists).ok

    })


    fixture('Login')
    .page('https://www.saucedemo.com/')


    test('Login with invalid user', async t => {
        await t.
           typeText(loginPage.userName, "standard", {paste:true}) 
           .typeText(loginPage.passwordUser, "secret", {paste:true})
           .click(loginPage.loginButton)

           await t.expect(loginPage.acceptedUsernamesAre.exists).ok

    })

    fixture('Login')
    .page('https://www.saucedemo.com/')


    test('Logout form products page', async t => {
        await t.
           typeText(loginPage.userName, "standard_user", {paste:true}) 
           .typeText(loginPage.passwordUser, "secret_sauce", {paste:true})
           .click(loginPage.loginButton)
            .click(productsPage.burguerbtn)
            .click(productsPage.logoutbtn)

           await t.expect(productsPage.sauceLabsbackpackLabel.exists).ok

    })


    fixture('Login')
    .page('https://www.saucedemo.com/')


    test('Navigate to the shopping cart', async t => {
        await t.
           typeText(loginPage.userName, "standard_user", {paste:true}) 
           .typeText(loginPage.passwordUser, "secret_sauce", {paste:true})
           .click(loginPage.loginButton)
           .click(productsPage.sauceLabsbackpackLabel)
            

           await t.expect(productsPage.sauceLabsbackpackLabel.exists).ok

    })


    fixture('Login')
    .page('https://www.saucedemo.com/')


    test('Add a single item to the shopping cart', async t => {
        await t.
           typeText(loginPage.userName, "standard_user", {paste:true}) 
           .typeText(loginPage.passwordUser, "secret_sauce", {paste:true})
           .click(loginPage.loginButton)
           .click(productsPage.sauceLabsbackpackLabel)
           .click(productsPage.addBackpack)
            

           await t.expect(productsPage.sauceLabsbackpackLabel.exists).ok

    })

    fixture('Login')
    .page('https://www.saucedemo.com/')


    test('Add a multiple items to the shopping cart', async t => {
        await t.
        
           typeText(loginPage.userName, "standard_user", {paste:true}) 
           .typeText(loginPage.passwordUser, "secret_sauce", {paste:true})
           .click(loginPage.loginButton)   
           .wait(3000)
           var addProducts = Selector('button[name]')
           var count = await addProducts.count;        
            
            for (var i = 0; i < count; i++){
        await t.
                click(addProducts.nth(i));    
            }  
        await t
        .wait (3000)
            

           await t.expect(productsPage.sauceLabsbackpackLabel.exists).ok

    })

    fixture('Login')
    .page('https://www.saucedemo.com/')


    test('Continue with missing mail information', async t => {
        await t.
           typeText(loginPage.userName, "standard_user", {paste:true}) 
           .typeText(loginPage.passwordUser, "secret_sauce", {paste:true})
           .click(loginPage.loginButton)
          .click(productsPage.sauceLabsbackpackLabel)
           .click(productsPage.addBackpack)
           .wait(300)
           .click(productsPage.shoppingCartLink)
           .click(cart.checkoutBtn)
           .typeText(checkoutYourInformation.firstName, "Jorge")
           .wait(5000)
           .click(checkoutYourInformation.continueBtn)            

          await t.expect(checkoutYourInformation.errorLastName.exists).ok 

    })

    fixture('Login')
    .page('https://www.saucedemo.com/')


    test('Fill users information', async t => {
        await t.
           typeText(loginPage.userName, "standard_user", {paste:true}) 
           .typeText(loginPage.passwordUser, "secret_sauce", {paste:true})
           .click(loginPage.loginButton)
          .click(productsPage.sauceLabsbackpackLabel)
           .click(productsPage.addBackpack)
           .wait(300)
           .click(productsPage.shoppingCartLink)
           .click(cart.checkoutBtn)
           .typeText(checkoutYourInformation.firstName, "Jorge")
           .typeText(checkoutYourInformation.lastName, "Gonzalez")
           .typeText(checkoutYourInformation.postalCode, "45507")
           .wait(5000)
           .click(checkoutYourInformation.continueBtn)            

          await t.expect(checkoutYourInformation.errorLastName.exists).ok 

    })

    

    test('Final order Items', async t => {
    console.log('Items Selected');    

        await t.          
        
        typeText(loginPage.userName, "standard_user", {paste:true}) 
        .typeText(loginPage.passwordUser, "secret_sauce", {paste:true})
        .click(loginPage.loginButton)   
        .wait(4000)
        const addProducts = Selector('button[name]')
        const count = await addProducts.count;        
         
         for (var i = 0; i < count; i++){
     await t.
             click(addProducts.nth(i));    
         }  
     await t
     .wait (5000)

        
            
           
           .click(productsPage.shoppingCartLink)
           .click(cart.checkoutBtn)
           .typeText(checkoutYourInformation.firstName, "Jorge")
           .typeText(checkoutYourInformation.lastName, "Gonzalez")
           .typeText(checkoutYourInformation.postalCode, "45507")
           .wait(5000)
           .click(checkoutYourInformation.continueBtn)  //continue button   
           
            .wait(5000)
            var lista = Selector ('div[class="cart_quantity"]');
            var conteo    = await lista.count;
            var sh = await Selector ('a[class="shopping_cart_link"]').innerText;

              
            console.log(sh)
            if(conteo==sh){
                console.log('Matched as expeced')
                
            }
            else
            console.log('not matched')



        await t.expect(productsPage.sauceLabsbackpackLabel.exists).ok
    })


  


    test('Final order items', async t => {
        await t.
           typeText(loginPage.userName, "standard_user", {paste:true}) 
           .typeText(loginPage.passwordUser, "secret_sauce", {paste:true})
           .click(loginPage.loginButton)
          .click(productsPage.sauceLabsbackpackLabel)
           .click(productsPage.addBackpack)
           .wait(300)
           .click(productsPage.shoppingCartLink)
           .click(cart.checkoutBtn)
           .typeText(checkoutYourInformation.firstName, "Jorge")
           .typeText(checkoutYourInformation.lastName, "Gonzalez")
           .typeText(checkoutYourInformation.postalCode, "45507")
           .wait(5000)
           .click(checkoutYourInformation.continueBtn)  //continue button   
           .click(checkout.finishBtn)        

          await t.expect(checkoutYourInformation.errorLastName.exists).ok 
          

    })