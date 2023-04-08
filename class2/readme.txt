# React

- React is a javascript library which we use to build front end or user interface
- it a not a framewok like angular
- React is a user interface library
- React is a tool for building UI components

# Important features of React
- JSX
- Component
- One way data binding
- Virtual DOM
- Simplicity
- Performace

# Why we need react
- DOM is slow in its real form
- React uses virtual DOM which is significatlky faster and more effiecient to update
- simple and easy to learn
- Reusability
- Robust re-rendering with virtual DOM
- Native libraries
- Performace
- Easy testing


# Which one is better
1. Angular
2. React
3. Vuejs

# Angular vs React
React
- It is library
- one-way data binding
- JSX (Javascript XML)
- Does not support entirely dependency injection
- Virtual DOM
- Easier to learn
- Faster performance

Angular
- It is framework
- two way data binding
- Typescript
- support dependency injection
- Incremental DOM
- Harder to learn
- slower performance

# Setup
- Nodejs
- VSCode

> node --version
> npm --version


> npm install <package_name>
> npm i <package_name
> npm i <package_name>@<version>
> npm i <package_name>@latest
> npm i <package_name> -g  // global


> npm i create-react-app -g
> create-react-app --version
> create-react-app <prject_name>
> cd <project_name>
> npm start

http://localhost:3000

or 

> npx create-react-app myapp
> cd <project_name>
> code .
> npm start

change App.js


# Understand folder structure
package.json - this is npm configuration file, it includes details about your app (meta data), 
               it inludues list of depedencies and some script

package-lock.json - this is an auto generated file thats get updated whenever npm does an operation
                    on package.json 

node_modules - this folder contain the dependencies source code require for react project
               > npm install

.gitignore - this file used by git to ignore file and folder while publishing source code into
             remote server

README.md - it provide the documentation to read

public - this folder contain public assets of the application, it contain index.html where react 
	will mount application root component

src - source - it cointain the application source code where you mostly create files


there are 3 files together form root / app component
App.css - style sheet
App.js - main js file
App.test.js - test case

index.css - global css file

index.js - it is main entry point of the app like main method



# Components in React
- in react a component represent a part of user interface
- what ever is visible on the web page is a component, we can put component together to make a 
  bigger component
- component are resuable and make the application more modular


# Type of components
- Class component
- Functional Component


# Nested Components

> npm i bootstrap@4.6

> index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


# Component
- A component represent a part of user interface
- Whatever is visible on the web page is a component, we can combine together these component to 
make a bigger component which can also be called as web pages
- components are reusable and make the application more modular
- eg Header, sidebar, footer and all are indivual and independent components which we can kept inside a
root component

# Type of component
1. class component
2. function component

# Function vs class component
Function Component
- are also know as stateless component
- they work as a javascript function which accept props as an argument
- they do not have their own state untill ver 16
- they return valid JSX / react element

Class component
- are also known as statefull component
- are more complex component and conceptually behaves as class introduce in ES6
- manage their own state


















