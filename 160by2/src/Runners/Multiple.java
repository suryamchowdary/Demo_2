package Runners;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.Test;


public class Multiple {
 public static WebDriver Driver;
 public static Actions a1;

 public static void alert()
 {
  Driver.get("C:\\Users\\ksuryam1\\Desktop\\ConfirmationExample.html");
  
  //Click on button
 WebElement button = Driver.findElement(By.tagName("button"));
 button.click();

 //Switch to alert and click on it 
Alert a1 = Driver.switchTo().alert();
a1.dismiss();

 }
 
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\ksuryam1\\Desktop\\JAVA_SELENIUM\\chromedriver_win32\\chromedriver.exe");
		ChromeDriverService service = ChromeDriverService.createDefaultService();
		ChromeOptions options = new ChromeOptions();
		options.addArguments("test-type");
		options.addArguments("--start-maximized");
		options.addArguments("--disable-extensions");
		options.setExperimentalOption("useAutomationExtension", false);
		Driver = new ChromeDriver(service,options);
		a1 = new Actions(Driver);
		Driver.navigate().to("http://githubwh.amil.com.br/");
		
/*public static void multipleselction()
{
		Driver.get("C:\\Users\\ksuryam1\\Desktop\\multiSelect.html");
		a1 = new Actions(Driver);
		Select tomatoes = new Select(Driver.findElement(By.id("chkveg")));
		tomatoes.selectByValue("tomatoes");
		a1.keyDown(Keys.CONTROL);
        a1.keyDown(Keys.ARROW_DOWN);
		a1.keyUp(Keys.CONTROL);
		a1.build();
		a1.perform();
		a1.moveToElement(Driver.findElement(By.id("chkveg")));
	Driver.findElement(By.id("")).submit();
		
}
*/


}
}