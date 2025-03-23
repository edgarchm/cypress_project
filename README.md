# SOGETI - Cypress Test Accelerator

<b>Available features:</b>
1. Web automation(Built-in)
2. API automation(Built-in)
3. Database validations(plugin)
4. Visual validations(plugin) 
5. Support for Behavior Driven Development(BDD), Test Driven Development(TDD)
6. Allure reports(plugin)
7. CQA template
8. Sample test scripts for Web, API, DB, Visual, BDD, TDD

<b>Requires only 3 commands:</b>
1. npm install (one time setup only)
2. npm run test OR npm run runner
3. npm run report

<b>Pre-requisites:</b> 
1. NodeJS any latest version should be installed
2. Visual Studio Code any latest version should be installed


<b>Install dependencies:</b>
1. Open the Framework folder in VSCode IDE. 

2. Open New terminal using the "Terminal" menu in VSCode IDE.

3. In the terminal window(cmd), type and enter the following command :: npm install

    (This will install all the required dependencies for the framework to work. Dependencies may not download if behind a proxy/firewall.)

4. In the VSCode IDE, open the file package.json and modify "Name", "Description" and others as per your requirement.


<b>Execution:</b>
To run the tests there are two options available
1. Cypress Runner - Open new terminal(or use existing) and type/enter the following command :: npm run runner 

    (This will open the Cypress runner in a new browser window. From there you can click on each test file to run the tests in them)

2. Command Line - There are several forms:
   1. Open new terminal(or use existing) and type/enter the following command :: npm run test 

       This will run the all specs/features. To run individual tests pass filename(s),
    
       ex: npm run test "cypress/e2e/tddspecs/webspec.ts"

   2. Execute selected Features or Scenarios by "TAGGING":
      <br><b>Rules on tags:</b>
      1. Applying a @tag to the top of the feature, will indicate runner that all scenarios in the feature file are tagged.
      2. Applying a @tag to the top of each individual scenario, will indicate runner that only those scenarios are tagged.
   
      <br><b>Execution by tagging examples:<b>
      1. Execute only those features/scenarios tagged "@smoke":<br>
      `npx cypress run -e 'TAGS=@smoke'`
      2. Execute those features/scenarios tagged "@smoke", and ignore those tagged "@regression":<br>
      `npx cypress run -e 'TAGS=@smoke and not @regression'`
      3. Execute those features/scenarios tagged "@smoke1" or those tagged "@smoke2":<br>
         `npx cypress run -e 'TAGS=(@smoke1 or @smoke2)'`
      4. Execute those features/scenarios tagged "@smoke1" or "@smoke2", and ignore those tagged "@regression1" or "regression2":<br>
         `npx cypress run -e 'TAGS=(@smoke1 or @smoke2) and (not @regression1 or @regression2)'`

   3. Execute tests on a different domain.
      1. In the env section of the cypress.config.js file, declare an environmental variable that will hold the value:<br>
         `env: { altUrl:"https://oldDomain.oldHome.com" },`<br>
         <i><b>Note:</b> This will override baseUrl value.</i>
      2. At the command line, pass the new environment variable value:<br>
         `npx cypress run  -e 'altUrl:"https://newDomain.newHome.com"'` <br>
   
   4. Putting together TAGGING and changing domain to execute tests:<br>
      Execute those features/scenarios tagged "@smoke" in the new domain: <br>
      `npx cypress run  -e 'TAGS=@smoke','altUrl:"https://newDomain.newHome.com"'`

   Refer to Cypress docs for more command line options - https://docs.cypress.io/guides/guides/command-line#Commands)
 

<b>Reports:</b>
1. To open the Allure html report, open new terminal(or use existing) and type/enter the following command :: npm run report

    (This will generate report and open in a browser)

###### ec2023