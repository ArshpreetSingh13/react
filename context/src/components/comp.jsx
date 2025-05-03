import React from 'react'
import { useContext } from 'react'
import { CountContext } from './context/CounterContext'


function comp() {
    const value = useContext(CountContext)
  return (
      <div>{value.count}</div>
  )
}

export default comp