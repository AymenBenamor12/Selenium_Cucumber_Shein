package com.e2eTests.automation.stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;


import com.e2eTests.automation.pageObjects.SheinPageObjects;
import com.e2eTests.automation.utils.CommondMethods;
import com.e2eTests.automation.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SheinStepDef extends CommondMethods{

	public WebDriver driver;
	private SheinPageObjects sheinPageObjects = new SheinPageObjects();
	private CommondMethods commonMethods = new CommondMethods();
	public SheinStepDef() {
		driver = Setup.driver;
		PageFactory.initElements(driver, SheinPageObjects.class);
	}
	
	
	
@Given("^je me connecte sur l'application Shein$")
public void je_me_connecte_sur_l_application_Shein() throws Throwable {
	logger.info("je me connecte sur l'application Shein");
	commonMethods.openURLWithConfigFile("url1");
}

@When("^je saisie l'acceptation le cookies$")
public void je_saisie_l_acceptation_le_cookies() throws Throwable {
   SheinPageObjects.cookiesMethode();
}

@When("^je passe Publication$")
public void je_passe_Publication() throws Throwable {
	SheinPageObjects.pubMethode();
}

@When("^je remplir le champs de recherche par le mot  t-shirt$")
public void je_remplir_le_champs_de_recherche_par_le_mot_t_shirt() throws Throwable {
	SheinPageObjects.searchMethode();
}

@When("^je commence la recherche$")
public void je_commence_la_recherche() throws Throwable {
	SheinPageObjects.buttonMethode();
}

@When("^je selection seulement le t-shirt de Homme$")
public void je_selection_seulement_le_t_shirt_de_Homme() throws Throwable {
	SheinPageObjects.listeMethode();
}


@Then("^je enregiste les list dans un fichie Excel$")
public void je_enregiste_les_list_dans_un_fichie_Excel() throws Throwable {
    SheinPageObjects.excelMethode();
}


}
