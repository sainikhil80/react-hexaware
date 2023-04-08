# Lifecycle of Components
- Component in JS and consequesntly in React follow a life cycle executing multiple tasks and going through
  different phases of state
- following lifecycle these components and elements get triggered upon different events transforming themselves
  and their state accordingly
- using lifecycle methods or hooks a developer can specify how the components is going to behave

1. mounting
2. updating
3. unmounting

# Mounting
this phase means putting elements into the DOM
React has four build-in methods that get called in this phase and in the same order

constructor()
getDerivedStateFromProps()
render()
componentDidMount()

the ender() method is only required and other are optional and will be called if you define them

# Constructor()
- it is special function that will get called whenever a new component is created
- it is mostly use to initialize state and binding the event handler
- the constructor() method is called with the props as an argumnent and you should always start by calling super()
- we should not make HTTP request in constructor

# getDerivedStateFromProps()
- this method is called right before rendering the element in the DOM
- this is the prefered place to set the state object based on the initial props
- it takes state as an argument and return an object with changes to the state

# render()
- this method is the only method required
- this s the method responsable for output the HTML to the DOM
- do not change the state or interact with DOM or make HTTP call

# ComponentDidMount()
- this method id called immediately after the component is rendered
- this is the method we mostly use when we want to run statement which required the component is ready and placed
  in the DOM
- we can interact with DOM and also make HTTP request to get data


# Updating
the next phase in the lifecycle is when a component is updated
A component is updated whenever there is a change in the component state or props
in React theer are 5 built-in methods that get called in order when a component is update

getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componmentDidUpdate()


# getDerivedStateFromProps()
- this is the method which get called when a component get updated
- this is still the prefered place to set the state object based on initial props

# shouldComponentUpdate()
this method return a boolean value that instruct React that it should continue with rendering or not
the default value is true

# render()
this method is called everytime when a component get updated
to update the UI it will re-render the HTML to the DOM with new changes

# getSnapshotBeforeUpdate()
this method can access the previous value of props and state after the update
if getSnapshotBeforeUpdate() method is present you should also include componentDidUpdate() method otherwise
you get an error

# componentDidUpdate()
this method is called after the component is updated in DOM


# Unmounting 
the next phase in the lifecycle is when a component is removed from the DOM
in react there is only one-built in method that get called when a component is unmounted

componentWillUnmount()







