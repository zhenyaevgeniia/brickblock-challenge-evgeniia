# Test Brickblock with Cypress

### Prerequisites

- Install nodejs and npm
> https://docs.npmjs.com/getting-started/installing-node

- Be sure that Chrome is installed 
>https://www.google.com/chrome/

### Installing

1. Clone the repository 
> https://github.com/zhenyaevgeniia/brickblock-challenge-evgeniia
2. Go to local repository in terminal
>cd /your/project/path
3. Run
>npm install cypress --save-dev

### Running the tests

_From console:_

Run all tests together
>node_modules/.bin/cypress run

Run specific tests 
>node_modules/.bin/cypress run --spec cypress/integration/submit_newsletter_form.js

_In Cypress Test Runner:_

1. Open Test runner 
> npx cypress open

2. Click on test suite from the list or "Run all tests"

Note: after running tests manually in TestRunner they should be stopped manually as well
