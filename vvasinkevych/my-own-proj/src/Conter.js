import React, { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    console.log(counter)
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    setCounter(counter - 1)
  }
  
  return (
    <div>
      <button onClick={decreaseCounter}>Reduce</button>
      <div>{counter}</div>
      <button onClick={increaseCounter}>Add</button>
    </div>
  )
}