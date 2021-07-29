import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//exercise2
const elementProps = { class: 'container' };
const elementType = 'div';
const childProps1 = { children: 'Hello ' };
const childType1 = 'span';
const childProps2 = { children: 'World' };
const childType2 = 'span';

const reactElement = React.createElement(
  elementType,
  elementProps,
  React.createElement(childType1, childProps1),
  React.createElement(childType2, childProps2)
);

//exercise3
const children = 'Hello World'
const className = 'container'
const props = { children, className }
//const element = React.createElement('div', {...props})
const element = <div {...props}/>
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(element, document.getElementById('root1'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
