
Feature: Proposal Creation

Scenario Outline: Title of your scenario outline
    Given Login into browser and Open Vendas Application
    When Enter the "<CEP>" of region
   And Select the "<Number>" of Titulares
    Then Select the "<Age>" of the Titular
    And Enter the "<CPF>", "<Email>" and "<password>" of the Titular
    And Proceed with further steps by selecting a plan
   Then Enter the details of "<Titular>" name,"<DOB>","<Cellnumber>","<telephone>","<mothername>" and "<numero>"
   And Complete the process of Healthdeclaration
   Then Save the details and proceed further
   And Provide the Required documents 
   And Complete the registration and genearte the praposal number 

    Examples: 
    		|CEP       | Number | Age                |    CPF 		  	 | Email													 | password   | Titular                            | DOB        | Cellnumber    | telephone    | mothername           | numero |
    		|07023-050 | 1			| De 59 anos ou mais | 050.217.752-78 | sukode@presatdores.amil.com.br  | suryam0078 | Fernando Henrique Pinto            | 02/12/1996 | 11-99416-9618 | 11-2512-8155 | Andreia Laura Sara   | 880    |
    		#|07023-050 | 1			| De 59 anos ou mais | 883.149.685-95 | sukode@presatdores.amil.com.br  | suryam0078 | Geraldo Bernardo Lopes             | 08/08/1996 | 11-99416-9618 | 11-2512-8155 | Juliana Fernanda     | 702    |
    		#|07023-050 | 1			| De 59 anos ou mais | 249.202.305-24 | sukode@presatdores.amil.com.br  | suryam0078 | Gabriel Joaquim Emanuel Cavalcanti | 18/05/1996 | 11-99416-9618 | 11-2512-8155 | Bruna Marlene Rafaela| 271    |
    		