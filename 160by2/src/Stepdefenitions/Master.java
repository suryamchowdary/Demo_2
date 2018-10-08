package Stepdefenitions;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.InputStream;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Master {

	public static WebDriver dr1;
	public static WebDriverWait wait1;
	public static Actions a1;

	public static void main(String[] args) throws AWTException {
	 
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\ksuryam1\\Desktop\\JAVA_SELENIUM\\chromedriver_win32\\chromedriver.exe");
	    dr1 =new ChromeDriver();
	    dr1.get("https://in.bookmyshow.com/#");
	    dr1.manage().timeouts().implicitlyWait(45, TimeUnit.SECONDS);
	    wait1 = new WebDriverWait(dr1, 30);
	    dr1.manage().window().maximize();
	    dr1.manage().deleteAllCookies();
	    a1 = new Actions(dr1);
	    
	    //Select the city to book the tickets
	    WebElement city = dr1.findElement(By.xpath("//*[@id='inp_RegionSearch_top']"));
	    city.sendKeys("Hyderabad");
	    
	    //Using the robot keys selecting the enetered city
	    Robot r1 = new Robot();
	    r1.keyPress(KeyEvent.VK_ENTER);
	    System.out.println("Key Pressed");
	    r1.keyRelease(KeyEvent.VK_ENTER);
	    
	    //Enter the name of movie by yourself
	    
	    Scanner reader = new Scanner(System.in); 
	    String Name_Movie ;
	    System.out.println("Enter the name of the movie");
	    Name_Movie = reader.nextLine();
	  
	    //Select a movie
	   WebElement Movie = dr1.findElement(By.partialLinkText(Name_Movie));
	   Movie.click();
	   System.out.println("Clicked on Movie");
	   
	   //Navigating to Theaters page
	   WebElement Booking_Page = dr1.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/div[3]/div/div[1]/div/a"));
	   Booking_Page.click();
	   System.out.println("Navigated to Theatres page");
	    
	   //Select the Theater
	  r1.keyPress(KeyEvent.VK_F);
	  r1.keyRelease(KeyEvent.VK_F);
	 
	    
	   
	    /*dr1.close();
	    dr1.quit();*/

	}

}
