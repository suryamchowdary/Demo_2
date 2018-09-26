package Runner_01;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefe_02  {
	
public WebDriver Cdriver;
public Actions a1 ;
JavascriptExecutor js;

@After
public void takeScreenshotAtEndOfTest() throws IOException {
    File scrFile = ((TakesScreenshot)Cdriver).getScreenshotAs(OutputType.FILE);
    FileUtils.copyFile(scrFile, new File("C:/Users/ksuryam1/Desktop/JAVA_SELENIUM/Demo_QE_02/screenshots/" + System.currentTimeMillis() + ".png"));
}

@Given("^Login into browser and Open Vendas Application$")
public void login_into_browser_and_Open_Vendas_Application() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\ksuryam1\\Desktop\\JAVA_SELENIUM\\chromedriver_win32\\chromedriver.exe");
	Cdriver = new ChromeDriver();
	Cdriver.navigate().to("http://vendas2.qa.amil.com.br/");
	Cdriver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	Cdriver.manage().window().maximize();
	 a1 = new Actions(Cdriver);
	 js = (JavascriptExecutor) Cdriver;
	System.out.println("Logged into the browser and Opened vendas3 Application");

	
}

@When("^Enter the \"([^\"]*)\" of region$")
public void enter_the_of_region(String arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Cdriver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	Cdriver.findElement(By.xpath("//*[@id='home']/nav/div[1]/a")).click();
	Cdriver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
	WebElement cep = Cdriver.findElement(By.id("cep"));
	cep.sendKeys(arg1);
	Cdriver.findElement(By.xpath("//*[@id='busca-cep']/form/fieldset/dl/dd/button")).click();
	System.out.println("Entered CEP and Proceeded to Next Step");
}

@When("^Select the \"([^\"]*)\" of Titulares$")
public void select_the_of_Titulares(String arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions

	Cdriver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	Select dropdown = new Select(Cdriver.findElement(By.id("quantidade-beneficiario")));
	dropdown.selectByValue(arg1);
	System.out.println("Selected Number of Beneficiaries to add");
	Cdriver.findElement(By.xpath("//*[@id='tipo-quantidade-pessoas']/form/fieldset/dl/dd/button")).click();
}

@Then("^Select the \"([^\"]*)\" of the Titular$")
public void select_the_of_the_Titular(String arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	WebDriverWait wait = new WebDriverWait(Cdriver, 30);
	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='faixa-etaria-beneficiario-0']")));
	Select Titular = new Select(Cdriver.findElement(By.xpath("//*[@id='faixa-etaria-beneficiario-0']")));
	Titular.selectByVisibleText(arg1);
	Cdriver.findElement(By.xpath("//*[@id='faixas-etarias']/form/fieldset/dl/dd/button")).click();
	Cdriver.findElement(By.xpath("//*[@id='resultado-simulacao']/div[3]/ul/li/button")).click();
	System.out.println("Selected Age criterion and proceeded to next step");
}

@Then("^Enter the \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\" of the Titular$")
public void enter_the_and_of_the_Titular(String arg1, String arg2, String arg3) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Cdriver.findElement(By.xpath("//*[@id='vendaonline']/div/div/section/div/div[1]/a")).click();
	Cdriver.findElement(By.xpath("//*[@id='cpf']")).sendKeys(arg1);
	Cdriver.findElement(By.xpath("//*[@id='email']")).sendKeys(arg2);
	Cdriver.findElement(By.xpath("//*[@id='conf-email']")).sendKeys(arg2);
	Cdriver.findElement(By.xpath("//*[@id='senha-cadastro']")).sendKeys(arg3);
	Cdriver.findElement(By.xpath("//*[@id='conf-senha']")).sendKeys(arg3);
	Cdriver.findElement(By.xpath("//*[@id='cadastro']/button")).click();
	System.out.println("Created a User in the application with the giveb details");
  
}

@Then("^Proceed with further steps by selecting a plan$")
public void proceed_with_further_steps_by_selecting_a_plan() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Cdriver.findElement(By.xpath("//*[@id='beneficiarios']/button")).click();
	System.out.println("Slected a plan from the list");
	
	
  
}

@Then("^Enter the details of \"([^\"]*)\" name,\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
public void enter_the_details_of_name_and(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Cdriver.findElement(By.xpath("//*[@id='nome-titular']")).sendKeys(arg1);
	Cdriver.findElement(By.xpath("//*[@id='nascimento-titular']")).sendKeys(arg2);
	Select gender = new Select(Cdriver.findElement(By.xpath("//*[@id='sexo-titular']")));
	gender.selectByValue("MASCULINO");
	Select civilstat = new Select(Cdriver.findElement(By.xpath("//*[@id='estado-civil-titular']")));
	civilstat.selectByValue("SOLTEIRO");
	Cdriver.findElement(By.xpath("//*[@id='celular-titular']")).sendKeys(arg3);
	Cdriver.findElement(By.xpath("//*[@id='telefone-titular']")).sendKeys(arg4);
	Cdriver.findElement(By.xpath("//*[@id='mae-titular']")).sendKeys(arg5);
	Cdriver.findElement(By.xpath("//*[@id='numero']")).sendKeys(arg6);
	System.out.println("Required details are Provided");
	Cdriver.findElement(By.xpath("//*[@id='abrir-declaracao-saude']")).click();
}

@Then("^Complete the process of Healthdeclaration$")
public void complete_the_process_of_Healthdeclaration() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Cdriver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	WebElement lideacordo = Cdriver.findElement(By.xpath("/html/body/div/div/div/section/form/div[1]/div/div/section[1]/form/fieldset/div[1]/label"));
	lideacordo.isSelected();
	a1.moveToElement(lideacordo).click().build().perform();
	Cdriver.findElement(By.id("proximoPerguntas")).click();//for Fire
	WebElement pergunta1 = Cdriver.findElement(By.name("pergunta1"));
	a1.moveToElement(pergunta1).click().build().perform();
	WebElement pergunta2 = Cdriver.findElement(By.name("pergunta2"));
	a1.moveToElement(pergunta2).click().build().perform();
	WebElement pergunta3 = Cdriver.findElement(By.name("pergunta3"));
	a1.moveToElement(pergunta3).click().build().perform();
	WebElement pergunta4 = Cdriver.findElement(By.name("pergunta4"));
	a1.moveToElement(pergunta4).click().build().perform();
	WebElement pergunta5 = Cdriver.findElement(By.name("pergunta5"));
	a1.moveToElement(pergunta5).click().build().perform();
	Cdriver.findElement(By.xpath("/html/body/div/div/div/section/form/div[1]/div/div/section[2]/form/div/button[2]")).click();
	WebElement pergunta6 = Cdriver.findElement(By.name("pergunta6"));
	a1.moveToElement(pergunta6).click().build().perform();
	WebElement pergunta7 = Cdriver.findElement(By.name("pergunta7"));
	a1.moveToElement(pergunta7).click().build().perform();
	WebElement pergunta8 = Cdriver.findElement(By.name("pergunta8"));
	a1.moveToElement(pergunta8).click().build().perform();
	WebElement pergunta9 = Cdriver.findElement(By.name("pergunta9"));
	a1.moveToElement(pergunta9).click().build().perform();
	WebElement Proxima2 = Cdriver.findElement(By.xpath("/html/body/div/div/div/section/form/div[1]/div/div/section[3]/form/div/button[2]"));
	Proxima2.isEnabled();
	Proxima2.click();
	WebElement weight = Cdriver.findElement(By.id("peso"));
	weight.sendKeys("65");
	WebElement height = Cdriver.findElement(By.id("altura"));
	height.sendKeys("1,72");
	WebElement Finalizar = Cdriver.findElement(By.xpath("/html/body/div/div/div/section/form/div[1]/div/div/section[4]/form/div/button[2]"));
	Finalizar.click();
	Thread.sleep(20000);
}

@Then("^Save the details and proceed further$")
public void save_the_details_and_proceed_further() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	WebElement Salvar = Cdriver.findElement(By.xpath("//*[@id='form-inclusao-titular']/div[2]/button[2]"));
	Salvar.isEnabled();
	JavascriptExecutor js = (JavascriptExecutor) Cdriver;
	 js.executeScript("window.scrollTo(0, document.body.scrollHeight);");
	 a1.moveToElement(Salvar).click(Salvar).build().perform();
	Thread.sleep(30000);
	WebDriverWait wait = new WebDriverWait(Cdriver, 30);
	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div/div/div/section/div[3]/button")));
	WebElement Proseguir = Cdriver.findElement(By.xpath("/html/body/div/div/div/section/div[3]/button"));
	Proseguir.click();
}

@Then("^Provide the Required documents$")
public void provide_the_Required_documents() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	WebElement RG = Cdriver.findElement(By.xpath("/html/body/div/div/div/section[2]/form/fieldset/ul/li[1]/label"));
	RG.isEnabled();
	String filepath = "C:\\Users\\ksuryam1\\Desktop\\To try\\Session_selenium.jpg";
	a1.moveToElement(RG).click().build().perform();
	StringSelection stringSelection = new StringSelection(filepath);
	   Toolkit.getDefaultToolkit().getSystemClipboard().setContents(stringSelection, null);
try {
	Robot r = new Robot();
	r.keyPress(KeyEvent.VK_ENTER);
 r.keyRelease(KeyEvent.VK_ENTER);
 r.delay(2000);
	r.keyPress(KeyEvent.VK_CONTROL);
	r.keyPress(KeyEvent.VK_V);
	r.keyRelease(KeyEvent.VK_V);
	r.keyRelease(KeyEvent.VK_CONTROL);
	r.delay(2000);
	r.keyPress(KeyEvent.VK_ENTER);
	r.keyRelease(KeyEvent.VK_ENTER);
	System.out.println("RG File Uploaded");
} catch (AWTException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}
Thread.sleep(30000);
Cdriver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
WebDriverWait wait = new WebDriverWait(Cdriver, 30);
wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div/div/div/section[2]/form/fieldset/ul/li[2]/label")));
WebElement CPF = Cdriver.findElement(By.xpath("/html/body/div/div/div/section[2]/form/fieldset/ul/li[2]/label"));
CPF.isEnabled();
a1.moveToElement(CPF).click().build().perform();
try {
	Robot r = new Robot();
	r.keyPress(KeyEvent.VK_ENTER);
    r.keyRelease(KeyEvent.VK_ENTER);
    r.delay(2000);
	r.keyPress(KeyEvent.VK_CONTROL);
	r.keyPress(KeyEvent.VK_V);
	r.keyRelease(KeyEvent.VK_V);
	r.keyRelease(KeyEvent.VK_CONTROL);
	r.delay(2000);
	r.keyPress(KeyEvent.VK_ENTER);
	r.keyRelease(KeyEvent.VK_ENTER);
	System.out.println("CPF File Uploaded");
} catch (AWTException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}
Thread.sleep(30000);
Cdriver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div/div/div/section[2]/form/fieldset/ul/li[3]/label")));
WebElement Comprovante_Residência = Cdriver.findElement(By.xpath("/html/body/div/div/div/section[2]/form/fieldset/ul/li[3]/label"));
Comprovante_Residência.isEnabled();
a1.moveToElement(Comprovante_Residência).click().build().perform();
try {
	Robot r = new Robot();
	r.keyPress(KeyEvent.VK_ENTER);
    r.keyRelease(KeyEvent.VK_ENTER);
    r.delay(2000);
	r.keyPress(KeyEvent.VK_CONTROL);
	r.keyPress(KeyEvent.VK_V);
	r.keyRelease(KeyEvent.VK_V);
	r.keyRelease(KeyEvent.VK_CONTROL);
	r.delay(5000);
	r.keyPress(KeyEvent.VK_ENTER);
	r.keyRelease(KeyEvent.VK_ENTER);
	System.out.println("Comprovante_Residência File Uploaded");
} catch (AWTException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}
Thread.sleep(20000);	
System.out.println("Attachments are successfully uploaded");
WebElement Proseguir2 = Cdriver.findElement(By.xpath("//*[@id='anexos']/form/div/button"));
Proseguir2.isEnabled();
Proseguir2.click();
}

@Then("^Complete the registration and genearte the praposal number$")
public void complete_the_registration_and_genearte_the_praposal_number() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	WebElement Accept = Cdriver.findElement(By.id("concordo-termo"));
	Accept.isEnabled();

	a1.moveToElement(Accept).click().build().perform();
	WebElement Declaracao = Cdriver.findElement(By.name("concordoPlano"));
	Declaracao.isEnabled();
	JavascriptExecutor js = (JavascriptExecutor) Cdriver;
 js.executeScript("window.scrollTo(0, document.body.scrollHeight);");
	a1.moveToElement(Declaracao).click(Declaracao).build().perform();
		Cdriver.findElement(By.xpath("//*[@id='enviarProposta']")).click();
		Thread.sleep(20000);
		System.out.println("Sucess message is "+Cdriver.findElement(By.xpath("/html/body/div/div/div/article[2]/h2")).getAttribute("innerHTML"));
		WebElement PraposalNumber = Cdriver.findElement(By.xpath("/html/body/div/div/div/article[2]/p[3]/strong"));
		System.out.println("Praposal number is created and the number is "+PraposalNumber.getText());
}



}
