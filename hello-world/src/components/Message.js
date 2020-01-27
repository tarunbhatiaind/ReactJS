import React , { Component } from 'react'

class Message extends Component {
       
       constructor(){ 
            super() // need to call base class
            this.state ={

                message : 'Welcome Tarun'
            } 

       } 
   changeMessage(){

        this.setState({

        message: 'Anddd you clicked on it!'            
        })

   } 
    render(){
            return (
            <div>
            <h1>{this.state.message} </h1>
            <button onClick = {
                  () => this.changeMessage()  
            }>Pointless button</button>
            </div>
            )
        }

}

export default Message