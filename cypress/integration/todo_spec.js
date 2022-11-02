const TEST_WIDTHS = [720, 1280, 1920];
let scrollToBottom = require("scroll-to-bottomjs");

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('TodoMVC', function () {
  beforeEach(function () {
    // Load our app before starting each test case
    //cy.viewport(1440, 900)
    cy.visit('https://www.dolcegabbana.com/en/home/')
  

  })

  it('Loads the TodoMVC app', function () {

   // cy.visit('https://dev-dg.thelevelgroup.com/en/')
    cy.wait(4000);
    
   

    cy.contains("Allow all").click();


   //cy.get('.fancybox-close').click();
   

    //cy.get('.cookiebanner__buttons__accept').click();

    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
    cy.wait(1000);
    cy.scrollTo(0, 0)

    cy.percySnapshot("Home Page ", { widths: TEST_WIDTHS, enableJavaScript: true, minHeight: 2000 })

   // cy.get('.b-header-strip-on-banner_close').click();

  //  cy.get('.fancybox-close').click();

    //await page.waitForSelector('.b-header-strip-on-banner_close')
    //await page.click('.fancybox-close')

   // await page.waitForSelector('.fancybox-close')
  //  await page.click('.fancybox-close')



    //await page.waitForSelector('.b-header-strip-on-banner_close')
    //await page.click('.fancybox-close')

    //await page.waitForSelector('.fancybox-close')
   // await page.click('.fancybox-close')
    cy.get('#link-food-beverage').click();
    cy.wait(4000);
    cy.percySnapshot("Food & Beverage Page ", { widths: TEST_WIDTHS, enableJavaScript: true, minHeight: 2000 })
    cy.get('#category-level_2-food-beverage-food').click();
    cy.wait(4000);
    cy.get('#category-level_2-food-beverage-beverage').click();
    cy.wait(4000);
    cy.percySnapshot("beverage Page ", { widths: TEST_WIDTHS, enableJavaScript: true, minHeight: 2000 })
    cy.get('#link-casa-home').click();
    cy.wait(4000);
    cy.percySnapshot("Casa Home Page ", { widths: TEST_WIDTHS, enableJavaScript: true, minHeight: 2000 })
    cy.get('#category-level_2-casa-home-tavola').click();
    cy.wait(4000);
    cy.percySnapshot("Tavola Page ", { widths: TEST_WIDTHS, enableJavaScript: true, minHeight: 2000 })
    cy.get('.active > .b-menu_category-container > div').click();
    cy.wait(4000);
    cy.percySnapshot("Category 1 Page ", { widths: TEST_WIDTHS, enableJavaScript: true, minHeight: 2000 })
    cy.get('#category-level_2-casa-home-bagno').click();
    cy.wait(4000);
    cy.percySnapshot("Category 2 Page ", { widths: TEST_WIDTHS, enableJavaScript: true, minHeight: 2000 })
    cy.get('#category-level_2-casa-home-arredamento').click();
    cy.wait(4000);
    cy.percySnapshot("Category 3 Page ", { widths: TEST_WIDTHS, enableJavaScript: true, minHeight: 2000 })

   

  })


})
