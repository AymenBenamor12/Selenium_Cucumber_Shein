package com.e2eTests.automation.utils;

import org.openqa.selenium.firefox.FirefoxDriver;

import io.github.bonigarcia.wdm.WebDriverManager;


	
	public class FirefoxDriverManager extends DriverManager {

		@Override
		protected void startService() {
			//System.setProperty("webdriver.gecko.driver", "src/test/resources/drivers/geckodriver.exe");
			WebDriverManager.firefoxdriver().setup();
		}
		protected void stopService() {
		}
		protected void createDriver() {
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
		}
		
	}


