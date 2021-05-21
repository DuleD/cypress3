class CreateImg {
    get imgName () {
        return cy.get('input[id="title"]')
    }
    
    get imgUrl () {
        return cy.get('.input-group.mb-3 > .form-control')
    }

    get submitBtn () {
        return cy.get('form > button:nth-of-type(1)')
    }

    create(imeSlike, urlSlike) {
        imeSlike = imeSlike || undefined  //if kako bismo mogli da smestimo prazan string
        if (imeSlike != undefined) {
            this.imgName.type(imeSlike)
        }
        //this.imgName.type(imeSlike)  //this znaci dobavi element iz postojece klase (class AuthLogin)
        this.imgUrl.type(urlSlike)
        this.submitBtn.click()
    }
}

export const createImg = new CreateImg()

