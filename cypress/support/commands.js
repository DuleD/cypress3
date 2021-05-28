// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/*Cypress.Commands.add('logInThroughBackend', (userName, password) => {
    cy.request({
        method:'POST',  //moze i ovako sa method url body ali i ne mora
        url: 'https://gallery-api.vivifyideas.com/api/auth/login',
        body: {
            email: userName,
            password: password
        }
    }).its('body').then((response) => {
        window.localStorage.setItem('token', response.access_token)
    })
})*/

Cypress.Commands.add('logInThroughBackend', () => {  //promenili email i password u cypress json
    cy.request({
        method:'POST', 
        url: 'https://gallery-api.vivifyideas.com/api/auth/login',
        body: {
            email: Cypress.env('userName'),
            password: Cypress.env('password')
        }
    }).its('body').then((response) => {
        window.localStorage.setItem('token', response.access_token)
    })
})


const faker = require('faker')
var userData = {
    randomName: faker.name.findName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password() + faker.datatype.number(),
    randomConfirmPassword: faker.internet.password(),
    randomShortPassword: faker.internet.password(2),
    randomPasswordOnlyString: faker.datatype.string()
}


Cypress.Commands.add('registerThroughBackend', () => {
    cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', {
            email: userData.randomEmail,
            first_name: userData.randomName,
            last_name: userData.randomLastName,
            password: userData.randomPassword,
            password_confirmation: userData.randomPassword,
            terms_and_conditions: true
        }).its('body').then((response) => {
            window.localStorage.setItem('token', response.access_token)
        })
})