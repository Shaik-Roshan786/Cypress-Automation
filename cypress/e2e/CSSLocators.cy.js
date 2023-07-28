
describe('CSSLocators', () => {

it("csslocators", () => {

    cy.visit("http://localhost:4200/addemployee/details")

    // cy.get("#search_query_top").type("roshan")

    // cy.get(".search_query").type("roshan")

    cy.get("[name='search_query']").type("roshan")

    //  cy.get(".search_query[name='search_query']").type("roshan")


    cy.get("[name='submit_search']").click()

    cy.get(".lighter").contains("roshan")


    })

})