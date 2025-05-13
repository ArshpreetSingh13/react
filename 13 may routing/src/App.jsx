import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Nav from './components/nav'

function App() {
  
  const router=createBrowserRouter([
    {
      path:"/",
      element: <> <Nav /> <Home /></>
    },
    {
      path:"/about",
      element: <> <Nav /> <About /></>
    }
   
  ])
  
  return (
    <>
    
    
  < RouterProvider router={router}/>
      
    </>
  )
}

export default App
