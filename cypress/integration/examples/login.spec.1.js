const locators = require('../../fixtures/locators.json')
import { authLogin } from '../../pageObjects/loginPage.js'




describe('nevalidan login', () => {
    beforeEach(() => {
        cy.visit('/')  
        cy.get(locators.navigation.loginButton).click()        
      })

      it('Login form', () => {
        authLogin.login('highhook@gmail.com', '12345678')
      })

})

