package com.e2eTests.automation.pageObjects;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.e2eTests.automation.utils.CommondMethods;

public class SheinPageObjects  extends CommondMethods{
	
	/*Locators*/
	
	final static String COOKIES_ID = "onetrust-accept-btn-handler";
    final static String PUB_XPATH = "/html/body/div[1]/div[5]/div/div[1]/div/div/div[2]/div[2]/i";
    final static String SEARCH_XPATH ="/html/body/div[1]/header/div[2]/div[1]/div/div[2]/div[2]/form/input";
	final static String BUTTON_XPATH ="/html/body/div[1]/header/div[2]/div[1]/div/div[2]/div[2]/form/div[1]/i";
	final static String LISTE_CLASSNAME = "S-product-item__name";
	
	/*@FindBy*/
	@FindBy(how= How.ID, using=COOKIES_ID)
	public static WebElement cookies;
	
	@FindBy(how= How.XPATH, using=PUB_XPATH)
	public static WebElement pub;
	
	@FindBy(how= How.XPATH, using=SEARCH_XPATH)
	public static WebElement search;
	
	@FindBy(how= How.XPATH, using=BUTTON_XPATH)
	public static WebElement button;
	
	@FindBy(how= How.CLASS_NAME, using=LISTE_CLASSNAME)
	public static WebElement liste;
	
	
	/*Methods*/
	public static void cookiesMethode() {
		cookies.click();
	}
	
	public static void pubMethode() {
		pub.click();
	}
	
	public static void searchMethode() {
		search.sendKeys("t-shirt");
	}
	public static void buttonMethode() {
		button.click();
	}
	
	
	
	public static void listeMethode () {
		List<WebElement> lst = driver.findElements(By.className("S-product-item__name"));
		int nbr = lst.size();
		System.out.println("nombre des articles sont egalés = "+nbr);
		
		int a = 0;
		
		for (int j = 0; j < nbr; j++) {

			String text = lst.get(j).getText();

			boolean Cnt = text.contains("Homme");
			if ( Cnt == true ) {
			System.out.println(text);
			
		}
	}
	}
		public static void excelMethode() throws IOException {
			
			
			List<WebElement> lst = driver.findElements(By.className("S-product-item__name"));
			
			  
			int nbr = lst.size();
			System.out.println("nombre des articles sont egalés = "+nbr);

			
			
			File file = new File("C:\\Users\\AYMEN\\Desktop\\Shein.xlsx");
	        FileInputStream inputStream = new FileInputStream(file);
	        XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
	        XSSFSheet sheet = workbook.getSheet("TestShein");
             int a = 0 ;
	        for (int i = 0;  i < nbr ; i++) {
	        	
	        	String text = lst.get(i).getText();
	            boolean containsHomme = text.contains("Homme");
	           
	           
	            if (containsHomme) {
	               System.out.println(text);
	                
	                a=a+1;
	                XSSFRow row = sheet.createRow(a);
	                XSSFCell cell = row.createCell(0);
	                cell.setCellValue(text);
	            
	            }
	        
	        }

	         //Save changes to the Excel file
	        FileOutputStream outputStream = new FileOutputStream("C:\\Users\\AYMEN\\Desktop\\Shein.xlsx");
	        workbook.write(outputStream);
	        outputStream.close();

	        driver.quit();
	    }
		
		
	}
	


