
// PRVO SMO ODRADILI NEVALIDAN TEST (EMAIL BEZ @) pa ovo isto prekopirano dole su validni
describe('nevalidan login', () => {
    it('visit gallery app', () => {
        cy.visit('') // ako posle it stavimo it.only onda ce se samo taj test izvrsiti
        //ako u cypress.json upisemo baseurl mozemo da ostavimo prazno cy.visit a ako dodamo /blabla otici ce na baseurl/blabla
    })

    /*it('click login button', () => { //ovo i ovo ispod getuju isto
        cy.get('a[href="/login"]').click()
    })*/

    it('click login button', () => {
        cy.get('a[class="nav-link nav-buttons"]').eq(0).click() //eq je ugradjena funkcija koja hvata (element)
    })

    it('enter user name', () => {
        cy.get('input[id="email"]').type('highhookgmail.com') //cy.wait(6000) iznad cy.get ceka pre nego sto odradi test
    })

    it('enter password', () => {
        cy.get('input[id="password"]').type('12345678')
    })

    it('click submit', () => {
        cy.get('button[class="btn btn-custom"]').click()
    })
})

describe('login spec', () => {
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/') // ako posle it stavimo it.only onda ce se samo taj test izvrsiti
        //ako u cypress.json upisemo baseurl mozemo da ostavimo prazno cy.visit a ako dodamo /blabla otici ce na baseurl/blabla
    })

    /*it('click login button', () => { //ovo i ovo ispod getuju isto
        cy.get('a[href="/login"]').click()
    })*/

    it('click login button', () => {
        cy.get('a[class="nav-link nav-buttons"]').eq(0).click() //eq je ugradjena funkcija koja hvata (element)
    })

    it('enter user name', () => {
        cy.get('input[id="email"]').type('highhook@gmail.com') //cy.wait(6000) iznad cy.get ceka pre nego sto odradi test
    })

    it('enter password', () => {
        cy.get('input[id="password"]').type('12345678')
    })

    it('click submit', () => {
        cy.get('button[class="btn btn-custom"]').click()
    })
})


/*describe('logout', () => {  //Ovako ga hvatamo bez snipera
    it('click logout', () => {
        cy.get('ul[class="navbar-nav ml-auto mt-2 mt-lg-0"] > li[class="nav-item"] > a[class="nav-link nav-buttons"]').click()
    })
})*/

describe('logout', () => {
    it('click logout', () =>{
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click() //preko cypress snipera
    })
})