

describe('negativan register', () => {
    it('open gallery app', () => {
        cy.visit('')
    })

    it('click register button', () =>{
        cy.get('a[href="/register"]').click()
    })

    it('fill register form', () => {
        //cy.get('input[id="first-name"]').type('') prazan username ili ga samo izbrisemo da ne popunjava jer je default prazan
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type('vecnaslava@rusija.com')
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
    })
})

/*describe('register spec', () => {
    it('open gallery app', () => {
        cy.visit('')
    })

    it('click register button', () =>{
        cy.get('a[href="/register"]').click()
    })

    it('fill register form', () => {
        cy.get('input[id="first-name"]').type('Steva')
        cy.get('input[id="last-name"]').type('Regal')
        cy.get('input[id="email"]').type('vecnaslava@rusija.com')
        cy.get('input[id="password"]').type('12345678')
        cy.get('input[id="password-confirmation"]').type('12345678')
        cy.get('input[class="form-check-input"]').check()
        cy.get('button[class="btn btn-custom"]').click()
    })

    
})*/