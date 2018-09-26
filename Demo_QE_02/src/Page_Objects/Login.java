package Page_Objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Login {

	@FindBy(using="name")
	WebElement name;
	/*private static WebElement element = null;
	
	public static WebElement login(WebDriver driver)
	{
		element = driver.findElement(By.id("Username"));
		return element;
	}*/
}
