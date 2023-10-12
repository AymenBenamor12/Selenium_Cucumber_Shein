Feature: Rehcerche  - Shein
  ETQ utilisateur je souhaite d'acheter un t-shirt Homme

  @Rehcerche
  Scenario: Recherche les t-shirt Home 
    Given je me connecte sur l'application Shein
    When je saisie l'acceptation le cookies 
    And je passe Publication
    And je remplir le champs de recherche par le mot  t-shirt  
    And je commence la recherche 
    And je selection seulement le t-shirt de Homme
    Then je enregiste les list dans un fichie Excel
