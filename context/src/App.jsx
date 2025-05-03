import React, { useState } from 'react'
import Nav from './components/nav'
import { CountContext } from './components/context/CounterContext'
function App() {

  const [count, setCount] = useState(0)

  return (
   
    <>
    <CountContext.Provider value={{count,setCount}}>        
        <Nav />
    </ CountContext.Provider>

    </>
    
  )
}

export default App