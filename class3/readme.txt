# JSX
JSX = JavaScript + XML
extension to the javascript language syntex
write xml like code for elements and components
JSX is not necessary to write in react app this is for our convinence
JSX can be consider as syntactical expression of javascript syntex, used to create react elements

# Why JSX?
- faster then javascript in compilation and execution
- ensures optimization during translation of the code to JS
- ensures better optimization as it allows React to highlight usefull error and message of warning at 
  compile time
- Using JSX developer find easier to work with components of react having UI inside the JS code

- class - className
- for - htmlFor


# Props  - to send data between the components
# State - to maintain the data with in a component

Props -> properties


# Props vs State
1. props get passed to the component where as state is managed with in component
2. props are immutable where as state can be changed
3. in functional component we pass props as a function argument where as we declare variables 
   with a function body as state


# Events
An event is an action that could be triggered by user interaction or can be the result of system generated
event

In React like javascript it has its specified methods to handle the events which are conceptually similar 
to handling events on DOM elements


for example
Click
Mouseover
change
etc

event handlers will be instance of syntetic event, a cross browser wrapper around the browser native events
it has the same interface as browser native events including preventDefault() except the event work 
identically across all browser

React handle its event using its own event handling system know as syntatic events

there are some syntactical difference in handling events with React from handling the event on DOM
1. React event are names as camelCase instead of lowercase
2. with JSX function is passes as the eventhandler instead of a string
3. we cannot return false in React to prevent a default behaviour instead we can use explicity
preventDefault method to prevet the same

onclick - onClick
onChange - onChange


# Adding Event
React events are written in camelCase syntex
onClick instead of onclik
React event handler are written inside curly braces
onClick={handler} instead of onClick="handle()"
























