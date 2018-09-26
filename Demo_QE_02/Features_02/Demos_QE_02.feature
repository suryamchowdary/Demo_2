
Feature: Proposal Creation

@tag1
  Scenario: Creation of Amil Proposl in Vendas Portal
    Given Login into browser and Open Vendas Application
    When Enter the CEP of region
   And Select the Number of Titulares
   Then Select the Age of the Titular
    And Enter the CPF, Email and password of the Titular
    And Proceed with further steps by selecting a plan
   Then Enter the details of Titular name,DOB,Cellnumber,telephone,mothernameand numero 
   And Complete the process of Healthdeclaration
   Then Save the details and proceed further
   And Provide the Required documents 
   And Complete the registration and genearte the praposal number

