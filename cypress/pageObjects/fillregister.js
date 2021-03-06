class Registration {
    get firstName () {
        return cy.get('input[id="first-name"]')
    }

    get lastName () {
        return cy.get('input[id="last-name"]')
    }

    get email () {
        return cy.get('input[id="email"]')
    }

    get password () {
        return cy.get('input[id="password"]')
    }

    get confirmPassword () {
        return cy.get('input[id="password-confirmation"]')
    }

    get termsAndConditions () {
        return cy.get('input[type="checkbox"]')
    }

    get submit () {
        return cy.get('button[type="submit"]')
    }

    get naslov () {
        return cy.get('h1[class="title-style"]')
    }

    get errorEmail () {
        return cy.get('div:nth-of-type(3) > .alert.alert-danger')
    }

    get errorPassword () {
        return cy.get('div:nth-of-type(4) > .alert.alert-danger')
    }

    get errorTermsAndConditions () {
        return cy.get('div:nth-of-type(6) > .alert.alert-danger')
    }

    get registerLabels () {
        return cy.get('label')
    }

    get registerInputs () {
        return cy.get('input')
    }

    get galleryAppButton () {
        return cy.get('a[class="navbar-brand router-link-active"]')
    }

    get allGalleriesButton () {
        return cy.get('a[class="nav-link nav-buttons router-link-active"]')
    }

    get loginButtonRegisterPage () {
        return cy.get('a[class="nav-link nav-buttons"]')
    }

    get registerButtonRegisterPage () {
        return cy.get('a[class="nav-link nav-buttons router-link-exact-active router-link-active"]')
    }

    registerAccount(ime, prezime, imejl, lozinka, potvrdiLozinku) {
        ime = ime || undefined
        if (ime != undefined) {
            this.firstName.type(ime)
        }

        prezime = prezime || undefined
        if (prezime != undefined) {
            this.lastName.type(prezime)
        }

        imejl = imejl || undefined
        if (imejl != undefined) {
            this.email.type(imejl)
        }

        lozinka = lozinka || undefined
        if (lozinka != undefined) {
            this.password.type(lozinka)
        }

        potvrdiLozinku = potvrdiLozinku || undefined
        if (potvrdiLozinku != undefined) {
            this.confirmPassword.type(potvrdiLozinku)
        }
    }

    clickAcceptTerms () {
        this.termsAndConditions.check()
    }

    clickSubmit () {
        this.submit.click()
    }
}

export const registration = new Registration