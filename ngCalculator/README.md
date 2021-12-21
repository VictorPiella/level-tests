# Open Book Coding Exercise
This exercise is intended to help you understand your ability to undertake research whilst delivering a solution under time pressure. This is an open-book test; you will not be penalised for using appropriatereferences and external libraries and this is in fact encouraged.

You will be assessed on two grounds; fulfilling the task at hand and elegance of the coded solution. Good luck with the exercise, and we look forward to seeing your code!

## Submission Guidelines
We are firm believers in version control system. We would also like to see how your solution evolves. As such, we would like you to use Git to manage your version history. Please ensure that you make regular commits of your code with a descriptive message to ensure that we can understand how your solution evolved as you tackled the requirements.

You may use any language you consider reasonable to tackle the problem at hand in the given time and the given evaluation criteria described above. At a technical level, you are not being marked on a particular language, but rather on your ability to harness some language to solve the problem at hand. 

The top level of your code-base should contain a file README.md, which should explain how to run your code, and a file ASSUMPTIONS.md, which details any assumptions you made during implementation, the reasons you made these assumptions and why they were justified. Please upload your code to Github or Bitbucket and send the project url directly to me.

##  Task A - Valid Expression
Write program that reads a mathematical expression and determines whether such an expression is valid. For this exercise consider only the following operators: +, -, *, /, sin, cos, tan. Do not use any external libraries for this part.

| Expression | Valid |
| :--- | :--- |
| 3 + 2 + 4 | ✅ |
| +2 | ✅ |
| 2 | ✅ |
| sin(sin(30) + cos(20)) | ✅ |
| sin(30) + cos(20) | ✅ |
| sin(30 | ⛔ |
| 3 + + | ⛔ |
| 3+ | ⛔ |
Note that expressions are recursive.

## Task B - Evaluate Expression
Given a valid expression evaluate. For example, sin(30) + cos(20) = -0.5799495623. Do not use any external libraries for this part.

## Task C - Calculator
Write a Single Page Application that allows the user to input an expression, validates the expression (on every keypress) and evaluates the result. If the expression inputted by the user is invalid an error message should be displayed. Do not use any external libraries for this part.
Browser compatibility is not an issue here, consider latest Chrome as your test browser. Add an area within the UI that will contain the last 5 expressions and their computed results. 

## Task D - Supr-Calculator
* Add a RAND operand that will generate a random number. The RAND should get its input from endpoint `https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new`
* Display a calculator UI with buttons for every digit and operator allowing the user to input an expression without using the native mobile keyboard. The layout should respond to device orientation.












# NgCalculator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
