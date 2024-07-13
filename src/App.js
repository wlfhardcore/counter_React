import './App.css';
import { Component, useState } from 'react';
import Counter from './Counter';

const App = () => {

  const [counter, setCounter] = useState(0)
  const [incrementValue, setIncrementValue] = useState(1)

  const handleChange = (event) => {
    setIncrementValue(Number(event.target.value))
  }

  const artir = () => {
    setCounter(counter + incrementValue)
  }

  const azalt = () => {
    setCounter(counter - incrementValue)
  }
  
  return (
    <div>
      <Counter
        counter={counter}
        artir = {artir}
        azalt = {azalt}
        incrementValue = {incrementValue}
        handleChange = {handleChange}
      />
    </div>
  )
}
export default App;
