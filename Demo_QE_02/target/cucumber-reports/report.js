$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Demos_QE_02.feature");
formatter.feature({
  "line": 2,
  "name": "Praposal Creation",
  "description": "",
  "id": "praposal-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Creation of Amil Praposl in Vendas Portal",
  "description": "",
  "id": "praposal-creation;creation-of-amil-praposl-in-vendas-portal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Login into browser and Open Vendas Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the CEP of region",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Select the Number of Titulares",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select the Age of the Titular",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter the CPF, Email and password of the Titular",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Proceed with further steps by selecting a plan",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter the details of Titular name,DOB,Cellnumber,telephone,mothernameand numero",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Complete the process of Healthdeclaration",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Save the details and proceed further",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Provide the Required documents",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Complete the registration and genearte the praposal number",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefe_02.login_into_browser_and_Open_Vendas_Application()"
});
formatter.result({
  "duration": 27455796340,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefe_02.enter_the_CEP_of_region()"
});
formatter.result({
  "duration": 1759422426,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefe_02.select_the_Number_of_Titulares()"
});
formatter.result({
  "duration": 2367777249,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefe_02.select_the_Age_of_the_Titular()"
});
formatter.result({
  "duration": 6694946846,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefe_02.enter_the_CPF_Email_and_password_of_the_Titular()"
});
formatter.result({
  "duration": 3183915175,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefe_02.proceed_with_further_steps_by_selecting_a_plan()"
});
formatter.result({
  "duration": 6877459943,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to find value field\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:33:08.638Z\u0027\nSystem info: host: \u0027AMIL5CG5370PMT\u0027, ip: \u002710.104.134.30\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 60.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 9796, moz:profile: C:\\Users\\ksuryam1\\AppData\\L..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.1, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: e98c619c-2410-4a66-8ea7-563da247a416\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027beneficiarios\u0027]/button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat Runner_01.Stepdefe_02.proceed_with_further_steps_by_selecting_a_plan(Stepdefe_02.java:89)\r\n\tat ✽.And Proceed with further steps by selecting a plan(Demos_QE_02.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefe_02.enter_the_details_of_Titular_name_DOB_Cellnumber_telephone_mothernameand_numero()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefe_02.complete_the_process_of_Healthdeclaration()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefe_02.save_the_details_and_proceed_further()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefe_02.provide_the_Required_documents()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefe_02.complete_the_registration_and_genearte_the_praposal_number()"
});
formatter.result({
  "status": "skipped"
});
});