$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Demos_QE_02.feature");
formatter.feature({
  "line": 2,
  "name": "Proposal Creation",
  "description": "",
  "id": "proposal-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Creation of Amil Proposl in Vendas Portal",
  "description": "",
  "id": "proposal-creation;creation-of-amil-proposl-in-vendas-portal",
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
  "duration": 11739858908,
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003ddnsNotFound\u0026u\u003dhttp%3A//vendas3.qa.amil.com.br/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dN%C3%A3o%20conseguimos%20ligar%20ao%20servidor%20em%20vendas3.qa.amil.com.br.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:33:08.638Z\u0027\nSystem info: host: \u0027AMIL5CG5370PMT\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 60.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:headless: false, moz:processID: 15604, moz:profile: C:\\Users\\ksuryam1\\AppData\\L..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 6.1, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: b9883710-6a93-4a2a-b21e-8651f563d2df\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:856)\r\n\tat Runner_01.Stepdefe_02.login_into_browser_and_Open_Vendas_Application(Stepdefe_02.java:32)\r\n\tat ✽.Given Login into browser and Open Vendas Application(Demos_QE_02.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefe_02.enter_the_CEP_of_region()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefe_02.select_the_Number_of_Titulares()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefe_02.select_the_Age_of_the_Titular()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefe_02.enter_the_CPF_Email_and_password_of_the_Titular()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefe_02.proceed_with_further_steps_by_selecting_a_plan()"
});
formatter.result({
  "status": "skipped"
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