import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Class from './Class';
import ConditionalRendering from './ConditionalRendering';
import RenderingArrays from './RenderingArrays';
import RenderingPromise from './RederingPromise';
import Exercise4 from './Exercise4';
import DisplayProps from './PropTypes';

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [clicked, setClicked] = useState(null);
  //let [array1, setArray1] = useState([]);

  const click = _ => {
    setClicked(1);
    setNumber1(40);
    setNumber2(100);
  }
  
  return (
    <div className="App">
      <button type="button" onClick={click}>click</button>
      {clicked && <p>{number1 + number2}</p>}
      <Class />
      <ConditionalRendering />
      <RenderingArrays />
      <RenderingPromise />
      <Exercise4 />
      <DisplayProps />
    </div>
  );
}

export default App;
