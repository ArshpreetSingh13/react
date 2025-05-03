import React, { useContext } from 'react'
import Comp from './comp'
useContext
import { CountContext } from './context/CounterContext'

function button() {
    const value = useContext(CountContext)
  return (
    <>
    <Comp />
          <button onClick={() => { value.setCount((count) => count += 1) }}>click</button>
    </>
  )
}

export default button