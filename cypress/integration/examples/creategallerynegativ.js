

import { createImg } from '../../pageObjects/createPage.js'
import { navigation } from '../../pageObjects/navigation.js'


describe ('Login through backend and set token in local storage', () => { 
    beforeEach (() => {
        cy.logInThroughBackend()
        cy.visit('')
        navigation.clickCreateGallery()
    })

        it ('Create gallery bez imena', () => {  //PASS - error
            createImg.create( '', '', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
        })

        it('Create gallery sa razmakom kao ime', () => {  //PASS - error
            createImg.create(' ', '', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
            createImg.errorTitle.should('be.visible').and('have.text', 'The title field is required.')
        })

        it('Create gallery sa imenom od samo 1 karaktera', () => {  //PASS - error
            createImg.create('b', '', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
            createImg.errorTitle.should('be.visible').and('have.text', 'The title must be at least 2 characters.')
        })

        var a = 'b'
        it('Create gallery sa imenom od 256 karaktera', () => {  //PASS - error
            createImg.create(a.repeat(256), '', 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
            createImg.errorTitle.should('be.visible').and('have.text', 'The title may not be greater than 255 characters.')
        })

        it('Create gallery bez slike', () => {  //PASS - error
            createImg.create('Pobeda', '', '')
        })

        it('Create gallery invalid img format', () => {  //PASS - error
            createImg.create('Pobeda', '', 'blabla')
        })

        it('Create gallery dobar img format ali nepostojeca slika', () => {  //FAILED - napravio je galeriju
            createImg.create('Pobeda', '', 'http://116581283_vojvoda1-2.jpg')
        })

        var a = 'b'
        it.only('Create gallery sa description od 1001 karaktera', () => {  //PASS - error
            createImg.create('Pobeda', a.repeat(1001), 'http://c.files.bbci.co.uk/954A/production/_116581283_vojvoda1-2.jpg')
            createImg.errorTitle.should('be.visible').and('have.text', 'The description may not be greater than 1000 characters.')
        })

})
