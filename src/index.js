import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppTwo from './AppTwo'

const [,,light] = ["boots","tent","headlamp"]
console.log(light)
// function AppTwo() {
//   return <h1>This is the Second App</h1>
// }
const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);
root.render(<AppTwo authorized={false}/>);
// ReactDOM.render(
//   /**<div><App/><AppTwo/></div>,  we can use this, or next line to remove  additional div*/
//   // <React.Fragment><App /><AppTwo /></React.Fragment>, we can use this or shorter method
//   // <><App/><AppTwo/></>,
//   document.getElementById('root')
// );


