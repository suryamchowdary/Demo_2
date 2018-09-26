package Runner_01;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(features="Features_02/new.feature",
glue="Runner_01",
plugin = "html:C:/Users/ksuryam1/Desktop/JAVA_SELENIUM/Demo_QE_02/Myrepots")
public class Runner_02_Demo {

}

