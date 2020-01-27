import React from 'react'

const Hello = () => {

    // return (
    //     <h1>hey this is with JSX</h1>

    // )

    return React.createElement('div', {id:'abc', className : 'bcd'} , React.createElement('h1',null,'Without JSX' )) // the second attribute which is null is for attributes of the tag sepcified in the first arg
                                                                                            // we can mention it in a object like ('div',{id:'hello'})       
}

export default Hello