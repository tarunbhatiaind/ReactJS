import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet' // Not necessary to import with exact name
import Welcome from './components/welcome'
import Hello from './components/withoutJSX';
import Naam from './components/props';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      {/* change the component tag below with the name used in import */}
      {/* <MyComponent />
      <Welcome /> 
      <Hello /> */}
      {/* <Naam name = 'Tarun' course = 'CS'>
        <p> This is children</p>
        </Naam>
      <Naam name = 'Rahul' course = 'Language'>
        <p>another children</p>
        </Naam> */}
        <Message />
    </div>
  );
}

export default App;
