import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Nav from './components/nav'
import Todo from './components/todo'
import Content from './components/Content'
import Profile from './components/profile'
import Fromd from './components/Formd'


function App() {
  
  const router=createBrowserRouter([
    {
      path:"/",
      element: <>  <Home /></>
    },
    {
      path:"/about",
      element: <> <Nav /> <About /></>
    },
    {
      path:"/todo",
      element: <> <Nav /> <Todo /></>
    },
    {
      path:"/content",
      element: <> <Nav /> <Content /></>
    },
    {
      path:"/form",
      element: <> <Nav /> <Fromd /></>
    },
    {
      path:"/profile/:id ",
      element: <> <Nav /> <Profile /></>
    }
  ])
  
  return (
    <>
    
    
  < RouterProvider router={router}/>
      
    </>
  )
}

export default App
