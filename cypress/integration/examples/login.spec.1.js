class AuthLogin {
  get email () {
      return cy.get("input[id='email']")
  }
  
  get password () {
      return cy.get("input[id='password']")
  }

  get submitBtn () {
      return cy.get("button[class='btn btn-custom']")
  }

  login(email, password) {
      this.email.type(email)  //this znaci dobavi element iz postojece klase (class AuthLogin)
      this.password.type(password)
      this.submitBtn.click()
  }
}

export const authLogin = new AuthLogin()
