package com.e2eTests.automation.utils;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.github.bonigarcia.wdm.WebDriverManager;

public class ChromeDriverManager extends DriverManager {

    private ChromeDriverService chService;

    @Override
    public void startService() {
        if (null == chService) {
            try {
            	WebDriverManager.chromedriver().setup();
            	//chService = new ChromeDriverService.Builder()
                    //.usingDriverExecutable(new File("src/test/resources/drivers/chromedriver.exe"))
                    //.usingAnyFreePort()
                    //.build();
                chService.start();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        
       
    }

    @Override
    public void stopService() {
        if (null != chService && chService.isRunning())
            chService.stop();
    }

    @Override
    public void createDriver() {
    	  
          driver = new ChromeDriver();
          driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
          driver.manage().window().maximize();
    }

}