describe('XPath for me please', () => {

    it('Selector Xpath', function() {
        cy.visit("https://automationintesting.online/#/")
        cy.xpath('//*[@id="name"]').type("This is xpath")

    })

    it('Selector css', function() {
        cy.visit("https://automationintesting.online/#/")
        cy.get('#name').type("This is css")

    })

})