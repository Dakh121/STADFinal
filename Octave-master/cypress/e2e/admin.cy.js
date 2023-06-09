describe('Testing Admin Page', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
 
  })

  // ––––––––––––––––––––––––––––––––––––––––
  // ––––––––––– TESTING ADD SONG –––––––––––
  // ––––––––––––––––––––––––––––––––––––––––

  //Checks that clicking on the logo navigates to the admin page
  it('Can view admin page', () => {
    cy.login()
    cy.get('#root > div > div > div.navbar > img').dblclick()
    cy.url().should('include', 'admin')
    cy.contains("Add New Song")
  })

  //Checks that we stay on the admin page after clicking the logo again
  it('Can navigate to main admin page from admin', () => {
    cy.login()
    cy.get('#root > div > div > div.navbar > img').dblclick()
    cy.contains("Add Artist").click()
    cy.get('#root > div > div > div.navbar > img').click()
    cy.url().should('include', 'admin')
  })

  it('Uploading Song without Name Throws Error', () => {
    cy.login()
    cy.get('#root > div > div > div.navbar > img').dblclick()
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(5) > div > div > input').type('https://www.testUrl.com/')
    cy.get('#root > div > div > div.app__window > div > div > form > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Please fill out this field.`)
    })
  })

  it('Uploading Song with Invalid Url Throws Error', () => {
    cy.login()
    cy.get('#root > div > div > div.navbar > img').dblclick()
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(2) > div > div > input').type('fire song name')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(4) > div > div > input').type('https://www.testUrl.com/')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(5) > div > div > input').type('anInvalidUrl')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(3) > div > div > select').select("Bob")
    cy.get('#root > div > div > div.app__window > div > div > form > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal("Invalid audio URL")
    }) 
   })

    it('Uploading Song with no song url or file throws error', () => {
      cy.login()
      cy.get('#root > div > div > div.navbar > img').dblclick()
      cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(2) > div > div > input').type('fire song name')
      cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(3) > div > div > select').select("Bob")
      cy.get('#root > div > div > div.app__window > div > div > form > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary').click()
      cy.on('window:alert', (str) => {
        expect(str).to.equal("Invalid audio URL")
      })    
    })

  it('Test that clicking the clear button removes all values', () => {
    cy.login()
    cy.get('#root > div > div > div.navbar > img').dblclick()
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(2) > div > div > input').type('fire song name')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(4) > div > div > input').type('https://www.testUrl.com/')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(5) > div > div > input').type('anInvalidUrl')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(3) > div > div > select').select("Bob")
    cy.get('#root > div > div > div.app__window > div > div > form > button:nth-child(8)').click()
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(2) > div > div > input').should('have.value', '')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(4) > div > div > input').should('have.value', '')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(5) > div > div > input').should('have.value', '')
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(3) > div > div > select').should('have.value', null)
  })

  // ––––––––––––––––––––––––––––––––––––––––
  // –––––––––– TESTING ADD ARTIST ––––––––––
  // ––––––––––––––––––––––––––––––––––––––––

  it('Testing Add Artist button navigates to adding artist to DB', () => {
    cy.login()
    cy.get('#root > div > div > div.navbar > img').dblclick()
    cy.get("#root > div > div > div.app__window > div > div > div > div > div > div > button:nth-child(2)").click()
    cy.contains('Add Artist to DB')

  })

  it('Test that not having an image url and not adding file causes error', () => {
    cy.login()
    cy.get('#root > div > div > div.navbar > img').dblclick()
    cy.get("#root > div > div > div.app__window > div > div > div > div > div > div > button:nth-child(2)").click()
    cy.randomName().then((randomName) => {
      cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(2) > div > div > input').type(randomName)
    });
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(3) > div > div > input').type('SomeDescription')
    cy.get('#root > div > div > div.app__window > div > div > form').submit()
    cy.contains("Image should be uploaded")
  })

    //FAULT
    it('Test adding artist without name throws error', () => {
      cy.login()
      cy.get('#root > div > div > div.navbar > img').dblclick()
      cy.get("#root > div > div > div.app__window > div > div > div > div > div > div > button:nth-child(2)").click()
      cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(3) > div > div > input').type('SomeDescription')
      cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(4) > div > div > input').type('https://www.shutterstock.com/image-photo/los-angeles-nov-22-justin-260nw-348418241.jpg')
      cy.get('#root > div > div > div.app__window > div > div > form').submit()
      cy.contains("Error")
    })

  it('Test adding artist without description works', () => {
    cy.logout()
    cy.login()
    cy.get('#root > div > div > div.navbar > img').dblclick()
    cy.get("#root > div > div > div.app__window > div > div > div > div > div > div > button:nth-child(2)").click()
    cy.randomName().then((randomName) => {
      cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(2) > div > div > input').type(randomName)
    });
    cy.get('#root > div > div > div.app__window > div > div > form > div:nth-child(4) > div > div > input').type('https://www.shutterstock.com/image-photo/los-angeles-nov-22-justin-260nw-348418241.jpg')
    cy.get('#root > div > div > div.app__window > div.admin > div.admin__wrapper > form').submit()
    cy.contains("added")

  })



  afterEach(() => {
    cy.logout()
  })

})