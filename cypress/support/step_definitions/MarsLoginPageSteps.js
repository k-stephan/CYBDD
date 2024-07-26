import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'


Given('Vist MARS URL', function () 
{
    cy.visit("https://imarscrmdev.phxa.com/MARSWeb2/Login");

});

  When('Enter {string} and {string}', function (username,password) 
  {
    cy.get(".k-input-inner[placeholder='UserId']").clear 
    cy.get(".k-input-inner[placeholder='UserId']").type(username)   
    cy.get(".k-input-inner[type='password']").clear   
    cy.get(".k-input-inner[type='password']").type(password)

  });

  Then ('click login', function () 
  {
    cy.get("span:nth-child(2)#btnLogin").click()

  });

  Then('valid dashboard', function () 
  {
    cy.url().should('contain','Dashboard')
    cy.get("#dynamicModalLabel1").should('contain','Recurring Reports Expiring Soon')
    cy.get("#btnClose0").click()
    //cy.wait(3000)  
    cy.get("#imgMarsLogo").should('have.attr','src','https://imarscrmdev.phxa.com/MARSWeb/images/Logo/HomePage_Logo.png')   
    
  });
