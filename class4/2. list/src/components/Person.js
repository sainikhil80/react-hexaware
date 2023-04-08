import React from 'react';

const Person  =() => {

    const names = ['Mark', 'Paul', 'Watson', 'John', 'Rangle']

    return(
        <div>
            <h1>List of Names</h1>

            {
                names.map(name => <li>{ name }</li>)
            }

            {/* <ul>
                <li>{ names[0] }</li>
                <li>{ names[1] }</li>
                <li>{ names[2] }</li>
                <li>{ names[3] }</li>
            </ul> */}
        </div>
    )
}
export default Person;