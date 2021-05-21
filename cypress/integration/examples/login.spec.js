const locators = require('../../fixtures/locators.json')


// PRVO SMO ODRADILI NEVALIDAN TEST (EMAIL BEZ @) pa ovo isto prekopirano dole su validni
describe('nevalidan login', () => {
    beforeEach(() => {
        cy.visit('/')  //beforeach radi se pre svakog testa i sada nam ne treba cy reload, ali bismo morali sve da podelimo u vise it-ova
        cy.get(locators.navigation.loginButton).click()                 //cy.get('a[href="/login"]').click()
      })
    /*it('visit gallery app', () => {
        cy.visit('') // ako posle it stavimo it.only onda ce se samo taj test izvrsiti
        //ako u cypress.json upisemo baseurl mozemo da ostavimo prazno cy.visit a ako dodamo /blabla otici ce na baseurl/blabla
    })

    /*it('click login button', () => { //ovo i ovo ispod getuju isto
        cy.get('a[href="/login"]').click()
    })*/

    /*it('Click login button', () => {
        cy.get('a[class="nav-link nav-buttons"]').eq(0).click() //eq je ugradjena funkcija koja hvata (element)
    })*/

    it('Login form', () => {

        /*//cy.get('input[id="email"]').type('highhook@gmail.com')
        //cy.get('input[id="password"]').type('12345678')
        cy.get('button[class="btn btn-custom"]').click()    //cy.get('button[class="btn btn-custom"]').type('{enter}') pritisne enter umesto sto klikne na dugme
        cy.wait(2000)
        cy.reload()
        //cy.get('input[id="email"]').type('highhook@gmail.com')
        cy.get('input[id="password"]').type('12345678')
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()
        cy.get('input[id="email"]').type('highhook@gmail.com')
        //cy.get('input[id="password"]').type('12345678')
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()
        cy.get('input[id="email"]').type('highhasdasdsdook@gmail.com')  //pogresan mail
        cy.get('input[id="password"]').type('12345678')
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()
        cy.get('input[id="email"]').type('highhook@gmail.com')
        cy.get('input[id="password"]').type('123456780000000000')  //pogresan pass
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()
        cy.get('input[id="email"]').type('highhookgmail.com')  //nevalidan email format
        cy.get('input[id="password"]').type('12345678')
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()
        cy.get('input[id="email"]').type('highhook@gmailђшђшђшђ.com')  //specijalni karakteri u mailu
        cy.get('input[id="password"]').type('12345678')
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()
        cy.get('input[id="email"]').type('direktorat@gmail.com')
        cy.get('input[id="password"]').type('д1234567')    //specijalni karakteri u passu
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()
        cy.get('input[id="email"]').type('direktorat@gmail.com')
        cy.get('input[id="password"]').type('D1234567')     //password case sensitive D umesto d
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()*/

        cy.get('input[id="email"]').type('DIREKTORAT@gmail.com')  //email case sensitive
        cy.get('input[id="password"]').type('d1234567')
        cy.get('button[class="btn btn-custom"]').click()
        cy.wait(2000)
        cy.reload()

    })

})

/*describe('login spec', () => {
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/') // ako posle it stavimo it.only onda ce se samo taj test izvrsiti
        //ako u cypress.json upisemo baseurl mozemo da ostavimo prazno cy.visit a ako dodamo /blabla otici ce na baseurl/blabla
    })
    /*it('click login button', () => { //ovo i ovo ispod getuju isto
        cy.get('a[href="/login"]').click()
    })*/

    /*it('click login button', () => {
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

/*describe('logout', () => {
    it('click logout', () =>{
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click() //preko cypress snipera
    })
})*/