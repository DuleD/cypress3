describe('login spec', () => {
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })

    /*it('click login button', () => { //ovo i ovo ispod getuju isto
        cy.get('a[href="/login"]').click()
    })*/

    it('click login button', () => {
        cy.get('a[class="nav-link nav-buttons"]').eq(0).click() //eq je ugradjena funkcija koja hvata (element)
    })
})