## Todo list app created by Bhairavee Chitnis

Todo List:

A simple todo application built with React, Javascript, HTML and CSS.

This application would let you add todos you wish to complete. You can select the priority of the todo. That would determine the position of the new todo in the list (sorting order is from high to Low).
Todos can be individually marked complete or a bunch of todos can be selected and marked as complete. A completed Todo is removed from the list.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` or `yarn` installed globally on your machine.  

Installation:

`npm install`  || `yarn install`

To Run Test Suite:  

`npm test` || `yarn test`  

To Start Server:

`npm start` || `yarn start`  

To Visit App:

`localhost:3000/ideas`  

Also hosted on github pages :

`https://bhairavee23.github.io/todo-list/`

## Future Scope

  - Add better state management with Redux or React.Context. Currently the app data is in local state only
  - Add ability to edit the added Todo as well as the priority of the added Todo
  - Add a persistence to the application in form of database
  - Refactor the code to smaller, manageable components to make the application more easy to maintain 
  - Add ability to have more than one list and navigation to move from one list to another

  - Needs more testing from Jest and Enzyme. Currently has a good snapshot tests to test the code
  