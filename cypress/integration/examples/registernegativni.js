import { navigation } from '../../pageObjects/navigation.js'
import { registration } from '../../pageObjects/fillregister.js'
const faker = require('faker')

var userData = {
    randomName: faker.name.findName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password() + faker.datatype.number(),
    randomConfirmPassword: faker.internet.password(),
    randomShortPassword: faker.internet.password(2),
    randomPasswordOnlyString: faker.lorem.word(8)
}

describe ('Registrujem account', () => {
    beforeEach (() => {
        cy.visit('')
        navigation.clickRegister()
    })

    it ('Open register page, URL should include /register, header Register on the page, 6 labels with correct names, 6 input boxes, submit button, T&C should be unchecked', () => {
        navigation.clickRegister()
        cy.url().should('include', '/register')
        registration.galleryAppButton.should('be.visible').and('have.text', 'Gallery App')
        registration.naslov.should('have.text', 'Register')
        registration.termsAndConditions.should('not.be.checked')
        registration.registerLabels.should('have.length', 6).and('have.text', 'First NameLast NameEmailPasswordConfirmed PasswordAccepted terms and conditions')
        registration.registerInputs.should('have.length', 6)
        registration.submit.should('be.visible').and('have.text', 'Submit').and('have.css', 'background-color', 'rgb(72, 73, 75)')
    })

    it('Register with already existing email', () => {
        var duplicateMail = faker.internet.email()

        registration.registerAccount(userData.randomName, userData.randomLastName, duplicateMail, userData.randomPassword, userData.randomPassword)
        registration.clickAcceptTerms()
        registration.clickSubmit()
        navigation.clickLogoutAfterRegister()
        
        navigation.clickRegister()
        registration.registerAccount(userData.randomName, userData.randomLastName, duplicateMail, userData.randomPassword, userData.randomPassword)
        registration.clickAcceptTerms()
        registration.clickSubmit()
        registration.errorEmail.should('be.visible').and('have.text', 'The email has already been taken.').and('have.css', 'background-color', 'rgb(248, 215, 218)')
    })

    it('Register with diffrent password confirmation', () => {
        registration.registerAccount(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomConfirmPassword)
        registration.clickAcceptTerms()
        registration.clickSubmit()
        registration.errorPassword.should('be.visible').and('have.text', 'The password confirmation does not match.').and('have.css', 'background-color', 'rgb(248, 215, 218)')
    })

    it('Register with password too short', () => {
        registration.registerAccount(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomShortPassword, userData.randomShortPassword)
        registration.clickAcceptTerms()
        registration.clickSubmit()
        registration.errorPassword.should('be.visible').and('have.text', 'The password must be at least 8 characters.').and('have.css', 'background-color', 'rgb(248, 215, 218)')
    })

    it('Register without accepting T&C', () => {  
        registration.registerAccount(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
        registration.clickSubmit()
        registration.errorTermsAndConditions.should('be.visible').and('have.text', 'The terms and conditions must be accepted.').and('have.css', 'background-color', 'rgb(248, 215, 218)')
    })

    it('Register with only string password', () => {
        registration.registerAccount(userData.randomName, userData.randomLastName, userData.randomEmail, userData.randomPasswordOnlyString, userData.randomPasswordOnlyString)
        registration.clickAcceptTerms()
        registration.clickSubmit()
        registration.errorPassword.should('be.visible').and('have.text', 'The password format is invalid.').and('have.css', 'background-color', 'rgb(248, 215, 218)')
    })

})