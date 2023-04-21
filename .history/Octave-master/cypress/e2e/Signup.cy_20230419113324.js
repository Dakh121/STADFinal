describe('Testing Sign up page', () => {

  beforeEach(() => {
    cy.window().then(win => win.sessionStorage.clear());
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('http://localhost:3000/')

    cy.get("body").then($body => {
      if ($body.find("button[data-cy=appDrawerOpener]").length > 0) {   
        cy.get('#root > div > div > div.navbar > div.navbar__right > button').click()
        cy.get("#simple-menu > div.MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-elevation0.MuiPaper-rounded > ul > li").click()      }
  });

    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > p:nth-child(4) > button').click()
  
  })

  //FAULT, can submit with no name
  it('error if form is submitted and no name is entered', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:9099/identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqRSVrairAC7e8am4wfp1cVJeZmFpPRGc',
      body: {
        email: 'testuser@example.com',
        password: 'password'
      },
      failOnStatusCode: false // allow the request to fail
    }).then((response) => {
      expect(response.status).to.eq(400) // expect a "Bad Request" status code
    })
  })


  
  it('error if form is submitted and no email is entered', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type("Sky")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(3) > input').type("password")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
  })

  it('error if form is submitted and no password is entered', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type("Sky")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type("fake@gmail.com")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
  })

  it('error if form is submitted and no email is entered', () => {
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("Firebase: Error")
  })

  it('error if url is not an url', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(1) > input').type("Sky")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(2) > input').type("fake@gmail.com")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(3) > input').type("password")
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > form > div:nth-child(4) > input').type("sky")
    cy.get("#root > div > div > div > div.login__wrapper.user-select-none > form").submit()
    cy.contains("invalid url")

  })

  it('Sign in button navigates to sign in page', () => {
    cy.get('#root > div > div > div > div.login__wrapper.user-select-none > p > button').click()
    cy.contains("SIGN IN")
  })



})