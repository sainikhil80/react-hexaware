- Redux

- Intercommunication between the components
1. props
2. context API
3. state management library - Redux / flux

 
- Redux
it is javascript based birary used for state management

state = data

- the idea is to maintain centrally / globally data which can be accessed by any component irrespective
of the position and order of the component otherwise we have to pass data to each and every component in 
component tree

- misconception: redux is a part of react library which is wrong
  redux can be use in any project which is using javascript

 Redux Architectire
it consist of three main components
- store
- action
- reducer


store: a place where an entire state of the app is listed and managing the status of the app at given
       point of time

action: a pure object contained within store having the information about the user event, the action is
        send from view to the reducer

reducer: reducer is a function which is able to read the payload from the actiuon and then execute updating
         the store



Step:
1. install
> npm i redux
> npm i react-redux

2. create store/index.js


3. create initialState


4. create reducer

5. create store

6. configure store with react app


7. consume store in react components




