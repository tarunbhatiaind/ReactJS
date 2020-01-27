import React from 'react'

const Naam = (props) => {
// console.log(props)
return (
<div>
<h1>Hello {props.name}, you study {props.course}</h1> 
<h2>{props.children} </h2>
</div>
)
}

export default Naam