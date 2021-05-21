
import { authLogin } from '../../pageObjects/loginPage.js'
import { createImg } from '../../pageObjects/createPage.js'
import { navigation } from '../../pageObjects/navigation.js'

describe('Logujem se', () => {
    before(() => {
        cy.visit('/') 
        navigation.clickLogin()
        authLogin.login('highhook@gmail.com', '12345678')
        navigation.clickCreateGallery()   
      })

      /*it('click login button', () => {
          navigation.clickLogin()
      })

      it('Login form', () => {
        authLogin.login('highhook@gmail.com', '12345678')
      })

      it('Udji u create gallery', () => {
          //cy.get(locators.createGallery.enterCreateGallery).click()
          navigation.clickCreateGallery()
      })

      it('ispuni podatke', () => {
        createImg.create('Sloboda', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
    })*/

        it ('Create gallery bez imena', () => {
            createImg.create( '', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
        })

})