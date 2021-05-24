import { navigation } from '../../pageObjects/navigation.js'
import { registration } from '../../pageObjects/fillregister.js'

describe ('Registrujem account', () => {
    before (() => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    it ('Open register page', () => {
        navigation.clickRegister()
        cy.url().should('include', '/register')
        registration.naslov.should('have.text', 'Register')
    })

    it('Fill register form', () => {  //Odraditi negativne i asertacije
        registration.registerAccount('Branko', 'Kockica', 'highhook@gmail.com', '12345678', '12345678')
        registration.clickAcceptTerms()
        registration.clickSubmit()
        registration.errorEmail.should('be.visible')  //Eror email vec postoji
    })


    /*it('Fill register form', () => {  //Pravilna registracija
        registration.registerAccount('Branko', 'Kockica', 'bla123@gmail.com', '12345678', '12345678')
        registration.clickAcceptTerms()
        registration.clickSubmit()
    })*/
})