# React Form
- forms are essential part of any application as it allows user to interact with your application
- forms can be use to take information from the user
- forms can contain different type of elements to take different type of data
- forms can execute multiple tasks depending upon the nature of the app
- forms can contain textbox, dropdown, radio, checkbox etc

# creating forms
- react provide a statefull and fairly reactive approach to create, design and build a form
- instead of DOm elements its the component that handle the react forms
- there are primarly two kind of forms input in react
1. controlled component
2. uncontrolled component

# Controlled components
- the input form element is handled by the component itself with mutable state being kept in the state property and 
  is only updated using setState() method
- function mediate the data passing into them on every onChange event instead of having the data only once
- this passed data is saved to the state and update using setState() method enabling the component to gain
  better control over form element
- form element like <input> and <button> in html generally maintain their own state