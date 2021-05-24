//<reference types="Cypress" />  //da nam ne bi menjalo stalno pre i posle tacke

/*describe('create gallery tests', () => {  //requestovali smo preko post, link i body ako ga ima. dobijamo odgovor u obliku tokena koji je body i selektujemo ga preko its i u localstorage ga setujemo kao token
    before (() => {
        cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {  //stavili smo u support commandsjs
            email: "highhook@gmail.com",
            password: "12345678"
        }).its('body').then((response) => {
            window.localStorage.setItem('token', response.access_token)
            cy.log(response.access_token)
        })
    })

    it('visit gallery', () => {
        cy.visit('')
    })
})*/

/*describe('create gallery tests', () => {  //skracena verzija ovog gore posle ubacivanja u commandsjs
    before(() => {
        cy.logInThroughBackend('highhook@gmail.com', '12345678')
    })

    it('visit gallery', () => {
        cy.visit('')
    })
})*/

describe('create gallery tests', () => {
    before(() => {
        cy.logInThroughBackend()  //Obrisali smo sve u ovoj fji jer smo u commands js preko cypress json cypress.env
    })

    it('visit gallery', () => {
        cy.visit('')
    })
})

