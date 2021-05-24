//const locators = require('../../fixtures/locators.json')
import { authLogin } from '../../pageObjects/loginPage.js'
import { createImg } from '../../pageObjects/createPage.js'
import { navigation } from '../../pageObjects/navigation.js'

describe('Logujem se i pravim galeriju', () => {
    before(() => {
        cy.visit('/')         
      })

      it('click login button', () => {
          navigation.clickLogin()  // Za ove dole testove treba gettere da stavimo u pageobjects kao za register sto sam uradio
          cy.url().should('include', '/login')  //Ocekujemo da ce klikom na login imati url adresu sa loginom u sebi
          cy.get('h1[class="title-style"]').should('have.text', 'Please login')  //Ocekujemo na login stranici da pise Please login
      })

      it('Login form', () => {
        authLogin.login('highhook@gmail.com', '1234')
        cy.get('p[class="alert alert-danger"]').should('be.visible')  //Error tekst treba da postane visible
        cy.get('p[class="alert alert-danger"]').should('have.text', 'Bad Credentials') //Error teskt treba da pise Bad Credentials
        cy.get('p[class="alert alert-danger"]').should('have.css', 'background-color', 'rgb(248, 215, 218)') //Error tekst ove boje
      })

      /*it('Login form', () => {
        authLogin.login('highhook@gmail.com', '12345678')
      })

      it('Udji u create gallery', () => {
          //cy.get(locators.createGallery.enterCreateGallery).click()
          navigation.clickCreateGallery()
      })

      it('ispuni podatke za create gallery', () => {
          createImg.create('Sloboda', '', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
      })

      /*it('Ispuni podatke', () => {   //Prvi nacin
          cy.get('input[id="title"]').type('Sloboda')
          cy.get('.input-group.mb-3 > .form-control').type('http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
          cy.get('form > button:nth-of-type(1)').click()
      })*/

})
