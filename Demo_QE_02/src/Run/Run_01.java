package Run;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions
(features="Features_02",
glue="Runner_01",
plugin = "html:C:/Users/ksuryam1/Desktop/JAVA_SELENIUM/Demo_QE_02/Myrepots/")

public class Run_01 {

}
