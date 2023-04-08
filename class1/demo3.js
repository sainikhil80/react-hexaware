// not using default parameters
// function say(message){
//     message = typeof message !== 'undefined' ? message : 'Hi';
//     console.log(message);
// }

// say('hello');
// say();

// using default parameter
function say(message = 'Hi'){
    console.log(message)
}

say('Hello');
say()