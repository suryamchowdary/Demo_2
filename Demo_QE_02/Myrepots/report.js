$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features_02/new.feature");
formatter.feature({
  "line": 2,
  "name": "Proposal Creation",
  "description": "",
  "id": "proposal-creation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "proposal-creation;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login into browser and Open Vendas Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the \"\u003cCEP\u003e\" of region",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Select the \"\u003cNumber\u003e\" of Titulares",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select the \"\u003cAge\u003e\" of the Titular",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the \"\u003cCPF\u003e\", \"\u003cEmail\u003e\" and \"\u003cpassword\u003e\" of the Titular",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Proceed with further steps by selecting a plan",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the details of \"\u003cTitular\u003e\" name,\"\u003cDOB\u003e\",\"\u003cCellnumber\u003e\",\"\u003ctelephone\u003e\",\"\u003cmothername\u003e\" and \"\u003cnumero\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Complete the process of Healthdeclaration",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Save the details and proceed further",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Provide the Required documents",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Complete the registration and genearte the praposal number",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "proposal-creation;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "CEP",
        "Number",
        "Age",
        "CPF",
        "Email",
        "password",
        "Titular",
        "DOB",
        "Cellnumber",
        "telephone",
        "mothername",
        "numero"
      ],
      "line": 18,
      "id": "proposal-creation;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "07023-050",
        "1",
        "De 59 anos ou mais",
        "050.217.752-78",
        "sukode@presatdores.amil.com.br",
        "suryam0078",
        "Fernando Henrique Pinto",
        "02/12/1996",
        "11-99416-9618",
        "11-2512-8155",
        "Andreia Laura Sara",
        "880"
      ],
      "line": 19,
      "id": "proposal-creation;title-of-your-scenario-outline;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "proposal-creation;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Login into browser and Open Vendas Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter the \"07023-050\" of region",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Select the \"1\" of Titulares",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Select the \"De 59 anos ou mais\" of the Titular",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the \"050.217.752-78\", \"sukode@presatdores.amil.com.br\" and \"suryam0078\" of the Titular",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Proceed with further steps by selecting a plan",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the details of \"Fernando Henrique Pinto\" name,\"02/12/1996\",\"11-99416-9618\",\"11-2512-8155\",\"Andreia Laura Sara\" and \"880\"",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Complete the process of Healthdeclaration",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Save the details and proceed further",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Provide the Required documents",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Complete the registration and genearte the praposal number",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefe_02.login_into_browser_and_Open_Vendas_Application()"
});
formatter.result({
  "duration": 32387068387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07023-050",
      "offset": 11
    }
  ],
  "location": "Stepdefe_02.enter_the_of_region(String)"
});
formatter.result({
  "duration": 1783388750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "Stepdefe_02.select_the_of_Titulares(String)"
});
formatter.result({
  "duration": 3327119536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "De 59 anos ou mais",
      "offset": 12
    }
  ],
  "location": "Stepdefe_02.select_the_of_the_Titular(String)"
});
formatter.result({
  "duration": 8598738826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "050.217.752-78",
      "offset": 11
    },
    {
      "val": "sukode@presatdores.amil.com.br",
      "offset": 29
    },
    {
      "val": "suryam0078",
      "offset": 66
    }
  ],
  "location": "Stepdefe_02.enter_the_and_of_the_Titular(String,String,String)"
});
formatter.result({
  "duration": 2531257823,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefe_02.proceed_with_further_steps_by_selecting_a_plan()"
});
formatter.result({
  "duration": 10272492142,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027beneficiarios\u0027]/button\"}\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:33:08.638Z\u0027\nSystem info: host: \u0027AMIL5CG5370PMT\u0027, ip: \u002710.104.133.89\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\ksuryam1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 65.0.3325.181, webStorageEnabled: true}\nSession ID: f6bc5335b3dd80a2503e2b461b3f3159\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027beneficiarios\u0027]/button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat Runner_01.Stepdefe_02.proceed_with_further_steps_by_selecting_a_plan(Stepdefe_02.java:110)\r\n\tat ✽.And Proceed with further steps by selecting a plan(Features_02/new.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fernando Henrique Pinto",
      "offset": 22
    },
    {
      "val": "02/12/1996",
      "offset": 53
    },
    {
      "val": "11-99416-9618",
      "offset": 66
    },
    {
      "val": "11-2512-8155",
      "offset": 82
    },
    {
      "val": "Andreia Laura Sara",
      "offset": 97
    },
    {
      "val": "880",
      "offset": 122
    }
  ],
  "location": "Stepdefe_02.enter_the_details_of_name_and(String,String,String,String,String,String)"
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