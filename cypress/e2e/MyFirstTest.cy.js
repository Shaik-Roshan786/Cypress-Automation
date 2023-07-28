describe('My First Test', () => 
{

    it("Login", () => {

    cy.visit("http://localhost:11910/addemployee/details", { timeout: 30000 })

    cy.xpath("//input[@id='txtUsername']").type('admin')

    cy.xpath("//input@id='txtPassword'").type("admin123")

    cy.xpath("//input[@value='LOGIN']").click()

    // it('verify title-positive', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/")
    //     cy.title().should('eq', 'OrangeHRM')
    // })

    // it('verify title-Nagive test', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/")
    //     cy.title().should('eq', 'OrangeHRM123')
    // })
})
})