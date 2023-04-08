import React from 'react';

// JSX code
// const Welcome = () => {
//     return (
//         <div id='myDiv'>
//             <h1 className='text-success'>Welcome User</h1>
//         </div>
//     )
// }

// Without JSX code
const Welcome  =() => {
    return React.createElement(
        'div',
        { id: 'myDiv' },
       React.createElement(
           'h1',
           { class: 'text-danger' },
           'Welcome user'
       )
    )
}




export default Welcome;