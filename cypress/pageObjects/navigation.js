class Navigation {
    get login () {
        return cy.get ('a[href="/login"]')
    }

    get udjiUCreateGalley () {
        return cy.get ("a[href='/create']")
    }

    get register () {
        return cy.get ('a[href="/register"]')
    }

    get logoutAfterRegister () {
        return cy.get ('a[role="button "]')
    }

    clickLogin() {
        this.login.click()
    }

    clickCreateGallery() {
        this.udjiUCreateGalley.click()
    }

    clickRegister () {
        this.register.click()
    }

    clickLogoutAfterRegister () {
        this.logoutAfterRegister.click()
    }
}

export const navigation = new Navigation